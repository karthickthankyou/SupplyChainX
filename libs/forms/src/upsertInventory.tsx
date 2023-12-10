'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchemaUpsertInventory } from './schemas'

export type FormTypeUpsertInventory = z.infer<typeof formSchemaUpsertInventory>

export const useFormUpsertInventory = () =>
  useForm<FormTypeUpsertInventory>({
    resolver: zodResolver(formSchemaUpsertInventory),
  })

export const FormProviderUpsertInventory = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormUpsertInventory()
  return <FormProvider {...methods}>{children}</FormProvider>
}
