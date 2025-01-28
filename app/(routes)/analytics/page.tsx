import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'
import { CompaniesChart } from './components/CompaniesCharts'

export default async function PageAnalytics() {
  const { userId } = auth()

  if (!userId) {
    return redirect('/')
  }

  const companies = await db.company.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  const events = await db.event.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
  return (
    <div className="bg-background shadow-md rounded-lg lg:p-4">
      <h2 className="mb-4 text-2xl">Analitycs page</h2>
      <div>
        <CompaniesChart companies={companies} events={events} />
      </div>
    </div>
  )
}
