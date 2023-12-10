import { z } from 'zod'

export const formSchemaRegister = z.object({
  name: z.string(),
  image: z.string().optional(),

  email: z.string().email(),
  password: z.string().min(6),
})

export const formSchemaSignin = formSchemaRegister.pick({
  email: true,
  password: true,
})

export const addressSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  address: z.string(),
})

export const formSchemaCreateWarehouse = z.object({
  name: z.string(),
  description: z.string().optional(),
  address: addressSchema,
})
