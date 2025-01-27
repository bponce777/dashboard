"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CirclePlus } from "lucide-react"
import { useState } from "react"
import { FormCreateCustomers } from "../FormCreateCustomers"

export default function HeaderCompanies() {
  const [openModalCreate, setOpenModalCreate] = useState(false)
  return (
    <div className="flex justify-between items-center ">
      <h2 className="text-2xl">List of companies</h2>
      <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
        <DialogTrigger asChild>
          <Button variant="outline" className="ml-auto bg-black text-white">
            Create Company
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Create Company</DialogTitle>
            <DialogDescription>
              Crate and configure your customers
            </DialogDescription>
          </DialogHeader>
          <FormCreateCustomers />
        </DialogContent>
      </Dialog>
    </div>
  )
}
