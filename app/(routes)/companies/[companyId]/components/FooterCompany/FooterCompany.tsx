"use client"

import axios from "axios";
import { FooterCompanyProps } from "./FooterCompany.types";
import { useRouter } from "next/navigation";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export function FooterCompany(porps: FooterCompanyProps) {
  const { companyId } = porps;
  const router = useRouter();

  const onDeleteCompany = async () => {
    try {
      axios.delete(`/api/company/${companyId}`)
      toast({ title: "Company deleted" })
      router.push("/companies")
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex justify-end mt-5" onClick={onDeleteCompany}>
      <Button variant="destructive">
        <Trash className="w-4 h-4 mr-2" />
        Delete company
      </Button>
    </div>
  )
}

