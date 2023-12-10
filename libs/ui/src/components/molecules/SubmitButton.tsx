'use client'
import { useFormStatus } from 'react-dom'
import { Button } from '../atoms/button'
import { ReactNode } from 'react'
import { Loader } from 'lucide-react'

export const SubmitButton = ({
  children = 'Submit',
}: {
  children?: ReactNode
}) => {
  const { action, data, method, pending } = useFormStatus()
  console.log('action, data, method, pending', action, data, method, pending)
  return (
    <Button type="submit">
      {pending ? <Loader className="animate-spin" /> : children}
    </Button>
  )
}
