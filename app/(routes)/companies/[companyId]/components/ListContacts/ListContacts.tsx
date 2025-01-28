import { redirect } from "next/navigation";
import { ListContactsProps } from "./ListContacts.types";
import { Mail, Phone, PhoneIcon } from "lucide-react";
import { db } from "@/lib/db";
import { Separator } from "@/components/ui/separator";
import { auth } from "@clerk/nextjs";

export async function ListContacts(props: ListContactsProps) {
  const { company } = props
  const { userId } = auth()

  if (!userId) {
    return redirect("/login")
  }

  const contacts = await db.contact.findMany({
    where: {
      companyId: company.id,
    },
  })

  if (contacts.length === 0) {
    return <p>Not have contacts</p>
  }

  return (
    <div>
      <div className="mt-4 mb-2 grid grid-cols-3 p-2 gap-x-3 items-center justify-between px-4 bg-slate-300/20 rounded-lg">
        <p>Name</p>
        <p>Role</p>
        <p className="text-right">Contact</p>
      </div>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <div className="grid grid-cols-3 p-2 gap-x-3 items-center justify-between px-">
            <p>{contact.name}</p>
            <p>{contact.role}</p>
            <div className="flex items-center gap-x-6 justify-end">
              <a href={`telto:${contact.phone}`} target="_blank">
                <PhoneIcon className="h-4 w-4" />
              </a>
              <a href={`mailto:${contact.email}`} target="_blank">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          <Separator className="my-2" />
        </div>
      ))}
    </div>
  )
}
