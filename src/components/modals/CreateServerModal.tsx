import { Button, Group, Image, Modal, Stack, TextInput } from "@mantine/core"
import { MdFileUpload,  MdBlock } from "react-icons/md";
import useModal from "../../hooks/useModal";
import { useForm } from '@mantine/form';
import { Dropzone, DropzoneAccept, DropzoneIdle, DropzoneProps, DropzoneReject, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import React from "react";

function CreateServerModal() {
  const { isOpen, closeModal } = useModal("CreateServer");

  const form = useForm({
    initialValues: {
      name: ""
    },
    validate: {
      name:(value) => !value.trim() && "Please enter a name.",
    },
  })

  const [imagePreview, setImagePreview] = React.useState<string | null>(null)

  const [file, setFile] = React.useState<File | null>(null)
  const handleDropzoneChange: DropzoneProps["onDrop"] = (files) => {
    if(files.length === 0){
      return setImagePreview(null)
    }
    const reader = new FileReader()
    reader.onload=(e) => {
      setImagePreview(e.target?.result as string)
    }
    setFile(files[0])
    reader.readAsDataURL(files[0])
  }
  return (
    <Modal opened={isOpen} onClose={closeModal} overlayProps={{
      backgroundOpacity: 0.55,
      blur: 3,
    }}>
      <p className="text-sm text-center text-zinc-600">Give your server your own personality with a name and an image. You change always change it later.</p>
      <form action="" onSubmit={form.onSubmit(() => {})} > 
        <Stack>


            {!imagePreview && (
              <div className="flexjustify-center py-4 border-dashed border-[2px]  border-neutral-500 hover:bg-slate-200 hover:border-neutral-400 cursor-pointer rounded-lg mt-1 bg-slate-300">
                <Dropzone onDrop={(files) => {
                  handleDropzoneChange(files)
                }} accept={IMAGE_MIME_TYPE}>
                  <Group className="flex justify-center">
                    <div className="flex flex-col justify-center gap-1">
                      <DropzoneAccept>
                        <MdFileUpload/>
                      </DropzoneAccept>
                      <DropzoneReject>
                        <MdBlock/>
                      </DropzoneReject>
                      <DropzoneIdle>
                        <MdFileUpload className="size-10 text-zinc-600 mx-auto"/>
                      </DropzoneIdle>
                      <div className="flex flex-col gap-2">
                        <h2 className="text-zinc-600 font-semibold antialiased text-center">Drag images here or click to select files</h2>
                        <p className="text-sm text-center text-zinc-600">Upload a icon for your server!</p>
                      </div>
                    </div>
                  </Group>
                </Dropzone>
              </div>
            )}

          {imagePreview && (
                <div className="flex relative justify-center mt-4">
                  <div className="left-[240px] z-10 top-2 absolute flex items-center rounded-full size-8 bg-red-500">
                    <MdBlock className="z-20 text-white size-5 mx-auto"/>
                  </div>
                  <Image src={imagePreview} w={150} h={150} className="mx-auto rounded-[100%]"/>
                </div>
              )}
          <TextInput label="Server name" placeholder="Enter server name" {...form.getInputProps("name")} error={form.errors.name}/>
          <Button type="submit" variant="gradient" className="w-[35%] bg-gradient-to-r from-indigo-700 to-violet-500">Create Server</Button>
        </Stack>

      </form>
    </Modal>
  )
}

export default CreateServerModal