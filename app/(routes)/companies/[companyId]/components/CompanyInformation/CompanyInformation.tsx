import Image from "next/image";
import { CompanyInformationProps } from "./CompanyInformation.types";
import { User } from "lucide-react";

export function CompanyInformation(props: CompanyInformationProps) {
  const { company } = props
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-4">
      <div className="rounded-lg bg-background shadow-md hover:shadow-lg p-4">
        <div>
          <Image src={company.profileImage} alt="Profile image" width={50} height={50} className="rounded-lg mb-3" />

          {/* TODO COMPANY FORM*/}
        </div>
      </div>
      <div className="rounded-lg bg-background shadow-md hover:shadow-lg p-4 h-min">
        <div className="flex items-center justify-between gap-x-2">
          <div className="flex items-center gap-x-2">
            <User className="w-5 h-5" />
            Contacts
          </div>
          <div>
            {/* TODO new contact */}
            New contact
          </div>
        </div>
        <p>List contacts</p>
      </div>
    </div>
  )
}
