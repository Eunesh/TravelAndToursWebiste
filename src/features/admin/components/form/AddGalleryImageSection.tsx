import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useField } from "formik";
import { useEffect, useState } from "react";
import convertToBase64 from "../../utils/convertToBase64";

//ICONS
import DeleteIcon from "@mui/icons-material/Delete";
import { number } from "yup";
//ICONS

const RenderImage = ({ picture }: { picture: any }) => {
  const [src, setSrc] = useState<any>(null);

  useEffect(() => {
    if (picture) {
      convertToBase64(picture).then((value) => {
        setSrc(value);
      });
    }
  }, [picture]);

  return (
    <Image
      src={src}
      sx={{ width: "100px", height: "100px", objectFit: "cover" }}
      alt="Gallery picture"
    />
  );
};

const AddGalleryImageSection = () => {
  const [field, _meta, helper] = useField("pictures");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target?.files?.[0]) {
      const files = Array.from(event.target.files).map(
        (file: any, index: number) => ({
          id: index,
          value: file,
        })
      );
      helper.setValue(files);
    }
  };

  const handleDeleteImage = (id: number) => {
    const pictures = JSON.parse(JSON.stringify(field.value));
    const newPictures = pictures.filter((picture: any) => picture.id != id);
    console.log(newPictures);
    helper.setValue(newPictures);
  };

  return (
    <Stack spacing={2}>
      <Text fontSize="xl">Manage Gallery Images</Text>

      <Flex gap={5} alignItems="center">
        <Box border="1px solid black" w="100%" p="10px 20px">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleOnChange}
          />
        </Box>
        <Button colorScheme="red">Add</Button>
      </Flex>
      {/* Added Image List */}
      <Stack spacing={5} p={2}>
        {field.value &&
          field.value.map((picture: any) => (
            <Flex gap={5} alignItems="center" key={picture.id}>
              <RenderImage picture={picture.value} />
              <Button
                onClick={() => handleDeleteImage(picture.id)}
                colorScheme="red"
                variant="solid"
              >
                <DeleteIcon />
              </Button>
            </Flex>
          ))}
      </Stack>
      {/* Added Image List */}
    </Stack>
  );
};

export default AddGalleryImageSection;
