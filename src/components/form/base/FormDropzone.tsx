import { Input, Stack, Text } from "@mantine/core";
import { Dropzone, FileWithPath, MIME_TYPES } from "@mantine/dropzone";
import "@mantine/dropzone/styles.css";
import { notifications } from "@mantine/notifications";
import { withForm, WithFormProps } from "src/hocs/withForm";
import useBreakpoint from "src/hooks/useBreakpoint";

type FromDropzoneProps = { withReorder?: boolean } & WithFormProps;

const fiveMbInBytes = 5 * 1024 * 1024;

const FromDropzone = withForm<FromDropzoneProps>(
  ({ field, props, fieldState }) => {
    const { value } = field;

    const isLg = useBreakpoint("lg");

    const images = value as FileWithPath[];
    return (
      <div>
        <Input.Wrapper
          label="Plantillas"
          withAsterisk
          error={fieldState.error?.message}
        >
          <Dropzone
            className="mb-1"
            accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.webp]}
            onDrop={(droppedFiles) => {
              if (images.length + droppedFiles.length > 10)
                return notifications.show({
                  message: "No puedes subir más de 10 imágenes a la vez",
                  color: "red"
                });

              const noRepeatedFiles = droppedFiles.filter(
                (file) =>
                  !images.some((template) => template.name === file.name)
              );

              const filesLessThan5MB = noRepeatedFiles.filter(
                (file) => file.size <= fiveMbInBytes
              );

              if (filesLessThan5MB.length !== droppedFiles.length)
                notifications.show({
                  message:
                    "Algunas imágenes no se agregaron porque pesan más de 5MB",
                  color: "yellow"
                });

              field.onChange([...filesLessThan5MB, ...images]);
            }}
          >
            <Stack align="center" gap={"xs"}>
              {/* <Icon i={IconPhotoUp} size={isLg ? "2xl" : "xl"} /> */}
              <Text className="hidden text-xl lg:block">
                Arrastra tus imágenes o haz click para cargar
              </Text>
              <div>
                <Text className="block lg:hidden">
                  Haz click para cargar tus imágenes
                </Text>
                <Text
                  c={"gray.6"}
                  className="text text-center text-xs lg:text-sm"
                >
                  Hasta 10 imágenes de 5MB cada una
                </Text>
              </div>
            </Stack>
          </Dropzone>
        </Input.Wrapper>
      </div>
    );
  }
);

export default FromDropzone;
