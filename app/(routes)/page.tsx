import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import { CardSummary } from "./CardSummary"
import { UserRound } from "lucide-react"

export default function Home() {
  return (
    <div>
      <UserButton />
      <h2 className="text-3xl mb-4">Dashboar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        <CardSummary
          icon={UserRound}
          total="12.648"
          average={15}
          title="Company created"
          tooltipText="This is the tooltip text"
        />
      </div>
    </div>
  )
}
