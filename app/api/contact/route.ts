import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();

  const name = String(form.get("name") ?? "");
  const email = String(form.get("email") ?? "");
  const message = String(form.get("message") ?? "");

  // For now, just log. Later you can send email via a provider.
  console.log("Contact form submission:", { name, email, message });

  return NextResponse.redirect(new URL("/contact?sent=1", req.url), {
    status: 303,
  });
}