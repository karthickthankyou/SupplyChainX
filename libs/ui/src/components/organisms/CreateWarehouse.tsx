'use client'
import {
  FormProviderCreateWarehouse,
  FormTypeCreateWarehouse,
} from '@foundation/forms/src/createWarehouse'
import { useFormContext, useWatch } from '@foundation/forms/src'
import { Input } from '../atoms/input'
import { createWarehouse } from '@foundation/common/src/actions/createWarehouse'
import { Map } from './Map'
import { initialViewState } from '@foundation/util/constants'
import {
  CenterOfMap,
  DefaultZoomControls,
} from './Map/ZoomControls/ZoomControls'
import { useEffect } from 'react'
import { Panel } from './Map/Panel'
import { ViewState } from './Map/Map'
import { LucideIcon, Warehouse } from 'lucide-react'
import { Marker } from './Map/MapMarker'
import { SearchPlace } from '../molecules/ComboBox'
import { Textarea } from '../atoms/textArea'
import { SubmitButton } from '../molecules/SubmitButton'

export const CreateWarehouse = () => {
  return (
    <FormProviderCreateWarehouse>
      <CreateWarehouseContent />
    </FormProviderCreateWarehouse>
  )
}
export const CreateWarehouseContent = () => {
  const { register, handleSubmit, reset, setValue } =
    useFormContext<FormTypeCreateWarehouse>()
  return (
    <div className="grid grid-cols-2 gap-2">
      <form
        onSubmit={handleSubmit(async ({ name, description, address }) => {
          await createWarehouse({ name, address, description })
          reset()
        })}
        className="space-y-2"
      >
        <h1 className="mb-2 text-lg font-semibold">Create company</h1>{' '}
        <Input {...register('name')} placeholder="Warehouse name" />
        <Textarea
          {...register('description')}
          placeholder="Warehouse description"
        />
        <Textarea
          {...register('address.address')}
          placeholder="Warehouse address"
        />
        <SubmitButton>Create warehouse</SubmitButton>
      </form>
      <Map initialViewState={initialViewState}>
        <MapMarker initialLocation={initialViewState} />

        <Panel position="left-top">
          <SearchPlace
            onLocationChange={(location: ViewState) => {
              setValue('address.latitude', location.latitude)
              setValue('address.longitude', location.longitude)
            }}
          />
          <DefaultZoomControls>
            <CenterOfMap
              onClick={(latLng) => {
                const lat = parseFloat(latLng.lat.toFixed(6))
                const lng = parseFloat(latLng.lng.toFixed(6))
                setValue('address.latitude', lat, { shouldValidate: true })
                setValue('address.longitude', lng, { shouldValidate: true })
              }}
            />
          </DefaultZoomControls>
        </Panel>
      </Map>
    </div>
  )
}

export const MapMarker = ({
  initialLocation,
  Icon = Warehouse,
}: {
  initialLocation?: ViewState
  Icon?: LucideIcon
}) => {
  const { setValue } = useFormContext<FormTypeCreateWarehouse>()
  const { address } = useWatch<FormTypeCreateWarehouse>()

  useEffect(() => {
    if (initialLocation) {
      const { latitude, longitude } = initialLocation
      setValue('address', { latitude, longitude, address: '' })
    }
  }, [initialLocation, setValue])

  return (
    <Marker
      pitchAlignment="auto"
      longitude={address?.longitude || 0}
      latitude={address?.latitude || 0}
      draggable
      onDragEnd={({ lngLat }) => {
        const { lat, lng } = lngLat
        setValue('address.latitude', lat || 0)
        setValue('address.longitude', lng || 0)
      }}
    >
      <Icon className="w-8 h-8 p-1.5" />
    </Marker>
  )
}
