"use client"

import { CustomIcon } from "@/components/CustomIcon"
import { Percent } from "lucide-react"
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend
} from "recharts"

const data = [
  {
    name: "website",
    value: 300,
    fill: "#8884d8"
  },
  {
    name: "Instagram",
    value: 873,
    fill: "#00C49F"
  },
  {
    name: "Other",
    value: 240,
    fill: "#FFBB28"
  }

]
export function TotalSubscribers() {
  return (
    <div className="mb-4 lg:bottom-0 shadow-sm bg-background rounded-lg p-5 w-full xl:w-96 hover:shadow-lg transition">
      <div className="flex gap-x-2 items-center mb-4">
        <CustomIcon icon={Percent} />
        <p className="text-xl">Total Subscribers</p>
      </div>
      <div className="w-full h-[200px] p-5">
        <ResponsiveContainer aspect={1} maxHeight={200}>
          <PieChart>
            <Pie
              dataKey="value"
              data={data}
              outerRadius={80}
              labelLine={false}
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
