import React from "react";
import { Stack } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";
import HighlightCarousel from "./HighlightCarousel";

const HighlightSection = () => {
  return (
    <Stack spacing={5}>
      <SectionTitle title="Higlights of Nepal" />
      <HighlightCarousel />
      {/* <Carousel
        showArrows={true}
        onChange={() => {}}
        onClickItem={() => {}}
        onClickThumb={() => {}}
      >
        <div>
          <img src="https://hips.hearstapps.com/hmg-prod/images/moraine-lake-with-alpen-glow-on-ten-peaks-banff-royalty-free-image-1682543414.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://hips.hearstapps.com/hmg-prod/images/moraine-lake-with-alpen-glow-on-ten-peaks-banff-royalty-free-image-1682543414.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://hips.hearstapps.com/hmg-prod/images/moraine-lake-with-alpen-glow-on-ten-peaks-banff-royalty-free-image-1682543414.jpg" />
        </div>
        <div>
          <img src="https://hips.hearstapps.com/hmg-prod/images/moraine-lake-with-alpen-glow-on-ten-peaks-banff-royalty-free-image-1682543414.jpg" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src="https://hips.hearstapps.com/hmg-prod/images/moraine-lake-with-alpen-glow-on-ten-peaks-banff-royalty-free-image-1682543414.jpg" />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src="https://hips.hearstapps.com/hmg-prod/images/moraine-lake-with-alpen-glow-on-ten-peaks-banff-royalty-free-image-1682543414.jpg" />
          <p className="legend">Legend 6</p>
        </div>
      </Carousel> */}
    </Stack>
  );
};

export default HighlightSection;
