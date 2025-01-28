import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: { params: { companyId: string } }) {
  try {
    const { userId } = auth();
    const { companyId } = params;
    const values = await req.json();

    if (!userId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const company = await db.company.findUnique({
      where: {
        id: companyId,
      },
    })

    if (!company) {
      return NextResponse.json({ error: "Company not found" }, { status: 404 });
    }

    const event = await db.event.create({
      data: {
        ...values,
        companyId,
      },
    })
    return NextResponse.json(event)
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 })
  }
} 