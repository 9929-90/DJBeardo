import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

export const runtime = "nodejs";
// Static export (GitHub Pages) cannot run server handlers; kept force-static
// only so `next build` with output:export succeeds. The live site books via
// WhatsApp deep links / phone CTA.
export const dynamic = "force-static";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/[\s()-]/g, ""))
    .refine((v) => /^\+?\d{10,13}$/.test(v), "Please enter a valid phone number."),
  eventType: z.string().trim().min(2).max(80),
  eventDate: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please provide a valid date."),
  eventLocation: z.string().trim().min(2).max(200),
  requirements: z.string().trim().max(2000).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bookingSchema.safeParse(body);
    if (!parsed.success) {
      const first = parsed.error.issues[0]?.message ?? "Please check the form fields.";
      return NextResponse.json({ ok: false, error: first }, { status: 400 });
    }

    const { name, phone, eventType, eventDate, eventLocation, requirements } = parsed.data;

    // Store the enquiry so no booking request is ever lost.
    const booking = await db.booking.create({
      data: {
        name,
        phone,
        eventType,
        eventDate,
        eventLocation,
        requirements: requirements || null,
      },
    });

    return NextResponse.json({ ok: true, id: booking.id }, { status: 201 });
  } catch (error) {
    console.error("[api/booking] failed:", error);
    return NextResponse.json(
      { ok: false, error: "Could not submit your enquiry right now. Please try WhatsApp or call directly." },
      { status: 500 }
    );
  }
}
