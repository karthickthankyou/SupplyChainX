'use client'
import { useFormCreateProduct } from '@foundation/forms/src/createProduct'
import { Input } from '../atoms/input'
import { createProduct } from '@foundation/common/src/actions/createProduct'
import { Textarea } from '../atoms/textArea'
import { SubmitButton } from '../molecules/SubmitButton'
import { ImagePreview } from '../molecules/ImagePreview'
import { Controller } from '@foundation/forms/src'
import { Title } from '../atoms/typography'
import { useImageUpload } from '@foundation/util/hooks'

export const CreateProduct = () => {
  const { register, handleSubmit, reset, resetField, control, watch } =
    useFormCreateProduct()

  const { image } = watch()

  const [, uploadImages] = useImageUpload()

  return (
    <div>
      <Title className="mb-2 text-lg font-semibold">Create product</Title>{' '}
      <form
        onSubmit={handleSubmit(async ({ name, description, image }) => {
          const images = await uploadImages(image)

          console.log('name, description, image', name, description, image)
          await createProduct({ name, image: images[0], description })
          reset()
        })}
        className="flex gap-2"
      >
        <div className="w-48 h-48">
          <ImagePreview src={image?.[0]} clearImage={() => resetField('image')}>
            <Controller
              control={control}
              name={`image`}
              render={({ field }) => (
                <Input
                  type="file"
                  accept="image/*"
                  multiple={false}
                  onChange={(e) => field.onChange(e?.target?.files)}
                />
              )}
            />
          </ImagePreview>
        </div>

        <div className="flex-grow space-y-2">
          <Input {...register('name')} placeholder="Product name" />
          <Textarea
            {...register('description')}
            placeholder="Product description"
          />
          <SubmitButton>Create product</SubmitButton>
        </div>
      </form>
    </div>
  )
}
