"use server";

import { Resend } from "resend";
import { site } from "@/lib/site";

export type LeadState = {
  ok: boolean;
  message: string;
};

export async function submitLead(
  _prev: LeadState,
  formData: FormData,
): Promise<LeadState> {
  const firstName = String(formData.get("firstName") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const address = String(formData.get("address") ?? "").trim();
  const packageInterest = String(formData.get("package") ?? "").trim();
  const notes = String(formData.get("notes") ?? "").trim();
  const smsConsent = formData.get("smsConsent") === "on";

  if (!firstName || !phone || !email || !address) {
    return {
      ok: false,
      message: "Please fill in name, phone, email, and address.",
    };
  }

  if (!smsConsent) {
    return {
      ok: false,
      message: "Please confirm you agree to be contacted about your design visit.",
    };
  }

  const to = process.env.LEAD_TO_EMAIL ?? site.emailPlaceholder;
  const from =
    process.env.LEAD_FROM_EMAIL ?? "Edge Lighting <onboarding@resend.dev>";
  const apiKey = process.env.RESEND_API_KEY;

  const summary = [
    `New Edge Lighting lead`,
    ``,
    `Name: ${firstName}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Address / City: ${address}`,
    `Package interest: ${packageInterest || "Not sure"}`,
    `Notes: ${notes || "—"}`,
    `SMS/call consent: yes`,
    ``,
    `Submitted from ${site.brand} landing page`,
  ].join("\n");

  if (!apiKey) {
    console.info("[lead:dev-fallback]", summary);
    return {
      ok: true,
      message:
        "Got it — we'll confirm your design visit shortly. (Dev mode: email not configured yet.)",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Edge Lighting lead: ${firstName} — ${packageInterest || "Design visit"}`,
      text: summary,
    });

    if (error) {
      console.error("[lead:resend]", error);
      return {
        ok: false,
        message: `Something went wrong sending your request. Please call ${site.phoneDisplay}.`,
      };
    }

    return {
      ok: true,
      message: "Request received. We'll reach out to schedule your free design visit.",
    };
  } catch (err) {
    console.error("[lead:exception]", err);
    return {
      ok: false,
      message: `Something went wrong. Please call ${site.phoneDisplay}.`,
    };
  }
}
