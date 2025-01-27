"use client"

import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios"
import { CompanyFormProps } from "./CompanyForm.types"
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { UploadButton } from "@uploadthing/react"
import { formSchema } from "./CompanyForm.form"

export function CompanyForm(props: CompanyFormProps) {
  const { company } = props
  const { toast } = useToast()
  const router = useRouter()
  const [photoUploaded, setPhotoUploaded] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: company.name,
      country: company.country,
      website: company.website,
      phone: company.phone,
      cif: company.cif,
      profileImage: company.profileImage
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/company/${company.id}`, values)
      toast({ title: "Company updated" })
      router.refresh()
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      })
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="select the country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="united-kindom">United-kindom</SelectItem>
                    <SelectItem value="colombia">Colombia</SelectItem>
                    <SelectItem value="venezuela">Venezuela</SelectItem>
                    <SelectItem value="francia">Fracia</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="www.bponce.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="+57 30075454545" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cif"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cfi</FormLabel>
                <FormControl>
                  <Input placeholder="B-19934" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="profileImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Image</FormLabel>
                <FormControl>
                  {photoUploaded ? (
                    <p className="text-sm">Image uploaded!</p>
                  ) : (
                    <UploadButton
                      className="rounded-lg bg-slate-600/20 text-slate-800 outline-dotted outline-3"
                      {...field}
                      endpoint="profileImage"
                      onClientUploadComplete={(res: any) => {
                        form.setValue("profileImage", res?.[0].url)
                        toast({
                          title: "Photo uploaded!"
                        })
                        setPhotoUploaded(true)
                      }}
                      onUploadError={(error: Error) => {
                        toast({
                          title: "Error uploading photo"
                        })
                      }}
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Edit company</Button>
      </form>
    </Form>
  )
}
