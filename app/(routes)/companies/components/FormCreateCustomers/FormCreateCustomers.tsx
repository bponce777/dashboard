"use client"

import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormCreateCustomersProps } from './FormCreateCustomers.types'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { UploadButton } from "@/lib/uploadthing"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  name: z.string(),
  country: z.string().min(2),
  website: z.string().min(2),
  phone: z.string().min(6),
  cif: z.string().min(6),
  profileImage: z.string()
})

export function FormCreateCustomers(props: FormCreateCustomersProps) {
  const { toast } = useToast()
  const { setOpenModalCreate } = props
  const [photoUploaded, setPhotoUploaded] = useState(false)
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      country: "",
      website: "",
      phone: "",
      cif: "",
      profileImage: ""
    },
  })

  const { isValid } = form.formState

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      axios.post("/api/company", values)
      toast({ title: "Company created" })
      router.refresh()
      setOpenModalCreate(false)
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
        <Button type="submit" disabled={!isValid}>Submit</Button>
      </form>
    </Form>
  )
}
