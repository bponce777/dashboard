"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { useState } from "react"
import { FormContact } from "./FormContact"

export function NewContact() {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button >
          add New contact
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Create Contact</DialogTitle>
          <DialogDescription>
            Create your contacts to manage them later
          </DialogDescription>
        </DialogHeader>
        <FormContact setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  )
}
