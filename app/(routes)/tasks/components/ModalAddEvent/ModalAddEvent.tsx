"use client"

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { FormEventProps } from './ModalAddEvent.types'
import { FormEvent } from '../FormEvent'

export function ModalAddEvent(props: FormEventProps) {
  const { open, setOpen, setOnSaveNewEvent, companies, setNewEvent } = props
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[625px]'>
        <DialogHeader>
          <DialogTitle>Create Event</DialogTitle>
          <DialogDescription>
            Create your event to manage them later
          </DialogDescription>
        </DialogHeader>
        <FormEvent
          setOnSaveNewEvent={setOnSaveNewEvent}
          setOpen={setOpen}
          companies={companies}
          setNewEvent={setNewEvent}
        />
      </DialogContent>
    </Dialog>
  )
}
