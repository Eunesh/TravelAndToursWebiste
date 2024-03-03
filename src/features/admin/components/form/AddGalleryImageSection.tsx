import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useField } from "formik";
import { FC, useEffect, useState } from "react";
import convertToBase64 from "../../utils/convertToBase64";

//ICONS
import DeleteIcon from "@mui/icons-material/Delete";
//ICONS

const RenderImage = ({ picture }: { picture: any }) => {
  const [src, setSrc] = useState<any>(null);

  useEffect(() => {
    if (picture) {
      if (typeof picture == "string") {
        setSrc(picture);
      } else {
        convertToBase64(picture).then((value) => {
          setSrc(value);
        });
      }
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
      const newFiles = Array.from(event.target.files);
      const filesFromPrev = field.value.filter((value:any) => typeof value == 'string')
      helper.setValue([...newFiles, ...filesFromPrev]);
    }
  };

  const handleDeleteImage = (index: number) => {
    const pictures = field.value.filter((_item: any) => true); // Making a shallow copy. Not don't use JSON.parse & stringify to make deep copy. (the content cannot be serialized)
    let picture = pictures[index];
    if (typeof picture == "string") {
    }
    pictures.splice(index, 1);
    helper.setValue(pictures);
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
          field.value.map((picture: any, index: number) => (
            <Flex
              gap={5}
              alignItems="center"
              key={picture.name || `url-${index}-${picture}`}
            >
              <RenderImage picture={picture} />
              <Button
                onClick={() => handleDeleteImage(index)}
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
