import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { Calendar } from "./components/Calendar"

export default async function page() {
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
    }
  })

  const events = await db.event.findMany({
    orderBy: {
      createdAt: "desc",
    }
  })

  return (
    <div>
      <Calendar companies={companies} events={events} />
    </div>
  )
}
