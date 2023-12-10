'use client'
import { useEffect, useState } from 'react'
import { createManufacturer } from '@foundation/common/src/actions/createManufacturer'

export const CreateManufacturerAccount = ({ uid }: { uid: string }) => {
  const [isCreating, setIsCreating] = useState(true)

  useEffect(() => {
    const createAccount = async () => {
      try {
        await createManufacturer({ uid })
      } finally {
        setIsCreating(false)
      }
    }

    if (uid) {
      createAccount()
    }
  }, [uid])

  if (isCreating) {
    return <div>Creating manufacturer account...</div>
  }

  return <div>Manufacturer account created successfully!</div>
}
