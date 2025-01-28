import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function PATCH(req: Request, { params }: { params: { companyId: string } }) {
  try {
    const { userId } = auth();
    const { companyId } = params;
    const values = await req.json();

    if (!userId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const company = await db.company.update({
      data: {
        ...values,
      },
      where: {
        id: companyId,
        userId,
      }
    })
    return NextResponse.json(company)
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 })
  }
}


export async function DELETE(req: Request, { params }: { params: { companyId: string } }) {
  try {
    const { userId } = auth();
    const { companyId } = params;

    if (!userId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const deleteCompany = await db.company.delete({
      where: {
        id: companyId,
        userId,
      }
    })
    return NextResponse.json(deleteCompany)
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 })
  }
} 