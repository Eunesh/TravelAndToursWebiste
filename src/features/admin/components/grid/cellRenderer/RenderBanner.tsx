import { Image } from "@chakra-ui/react";
import { FC, useMemo } from "react";

interface IRenderBanner {
  value: string | null;
}
const RenderBanner: FC<IRenderBanner> = ({ value }) => {
  console.log("Hello, ", value)
  const picture = useMemo<string | null>(() => {
    if (value) {
      return import.meta.env.VITE_API_BASE_URL + value;
    }
    return null;
  }, [value]);
  return (
    <>
      {picture && <Image src={picture} sx={{height:"100%", width:"150px", objectFit:"cover"}}/>}
    </>
  );
};

export default RenderBanner;
