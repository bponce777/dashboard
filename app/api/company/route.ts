import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const data = await req.json();

    if (!userId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const company = await db.company.create({
      data: {
        userId,
        ...data
      }
    })
    return NextResponse.json(company)
  } catch (error) {
    console.log("error", error)
  }
} 