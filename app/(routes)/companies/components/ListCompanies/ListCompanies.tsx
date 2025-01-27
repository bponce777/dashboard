import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { columns } from "./columns"
import { DataTable } from "./data-table"

export async function ListCompanies() {
  const { userId } = auth()

  if (!userId) {
    return redirect("/login")
  }

  const companies = await db.company.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  return (
    <DataTable columns={columns} data={companies} />
  )
}
