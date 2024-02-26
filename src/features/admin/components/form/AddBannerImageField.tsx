import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useField } from "formik";
import { FC, useEffect, useState } from "react";
import convertToBase64 from "../../utils/convertToBase64";

// Upload image - image
import uploadImg from "../../../../assets/images/upload.png";

interface IAddBannerImageField {}

const AddBannerImageField: FC<IAddBannerImageField> = () => {
  const [field, _meta, helper] = useField("banner");

  const [src, setSrc] = useState<any>(null);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Value",event.target.value)
    console.log("File",event.target.files)
    if (event.target?.files?.[0]) {
      helper.setValue(event.target.files[0]);
    }
  };

  useEffect(() => {
    if (field.value && field.value != "") {
      convertToBase64(field.value).then((value) => {
        setSrc(value);
      });
    } else {
      setSrc(uploadImg);
    }
  }, [field]);

  return (
    <Stack gap={2}>
      <Text fontSize="xl">Upload Banner image</Text>

      <Flex gap={{ base: 5, md: 10 }} alignItems="center">
        {/* IMAGE SECTION */}
        <Image
          src={src}
          alt="Banner"
          sx={{ height: "100px", width: "100px", objectFit: "contain" }}
        />
        {/* IMAGE SECTION */}
        <Box w="100%" border="1px solid black" p="10px 50px">
          <input type="file" accept="image/*" onChange={handleOnChange} />
        </Box>
      </Flex>
    </Stack>
  );
};

export default AddBannerImageField;
