import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { Header } from "./components/Header/Header";
import { CompanyInformation } from "./components/CompanyInformation";

export default async function page({ params }: { params: { companyId: string } }) {
  const { userId } = auth();
  if (!userId) {
    return redirect("/login")
  }

  const company = await db.company.findUnique({
    where: {
      id: params.companyId,
      userId,
    },
  })

  if (!company) {
    return redirect("/")
  }

  return (
    <div>
      <Header />
      <CompanyInformation company={company} />
      <div>Footer company</div>
    </div>
  )
}
