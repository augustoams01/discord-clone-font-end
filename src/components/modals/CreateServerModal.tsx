import { Group, Modal, Stack } from "@mantine/core"
import { MdFileUpload,  MdBlock } from "react-icons/md";
import useModal from "../../hooks/useModal";
import { useForm } from '@mantine/form';
import { Dropzone, DropzoneAccept, DropzoneIdle, DropzoneReject, IMAGE_MIME_TYPE } from '@mantine/dropzone';
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

  return (
    <Modal opened={isOpen} onClose={closeModal} overlayProps={{
      backgroundOpacity: 0.55,
      blur: 3,
    }}>
      <p className="text-sm">Give your server your own personality with a name and an image. You change always change it later.</p>
      <form action="" onSubmit={form.onSubmit(() => {})} > 
        <Stack>

          <div className="flex justify-center">
            {!imagePreview &&
            <Dropzone onDrop={() => {}} accept={IMAGE_MIME_TYPE}>
              <Group>
                <DropzoneAccept>
                  <MdFileUpload/>
                </DropzoneAccept>
                <DropzoneReject>
                  <MdBlock/>
                </DropzoneReject>
                <DropzoneIdle>
                  <MdFileUpload className="size-12 mx-auto"/>
                </DropzoneIdle>
                <div>
                  <h2 className="text-xl font-semibold text-center">Drag images here or click to select files</h2>
                  <p className="text-sm text-center">Upload a icon for your server!</p>
                </div>
              </Group>
            </Dropzone>}
          </div>

        </Stack>

      </form>
    </Modal>
  )
}

export default CreateServerModal