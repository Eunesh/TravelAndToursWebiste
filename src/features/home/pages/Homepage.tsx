import { Stack } from "@chakra-ui/react";
import BannerSection from "../components/BannerSection";
import HighlightSection from "../components/HighlightSection";
import MustVisitPlaces from "../components/MustVisitPlaces";
import ExploreTheCulture from "../components/ExploreTheCulture";
import GetInTouch from "../components/GetInTouch";
import MainContainer from "../../../components/common/layout/MainContainer";

const Homepage = () => {
  return (
    <MainContainer>
      <Stack spacing={20}>
        <BannerSection />
        <HighlightSection />
        <MustVisitPlaces />
        <ExploreTheCulture />
        <GetInTouch />
      </Stack>
    </MainContainer>
  );
};

export default Homepage;
