import { Stack, Text } from "@chakra-ui/react";
import Socials from "../../../components/common/miscellaneous/Socials";
import FourImageGrid from "../../../components/common/miscellaneous/FourImageGrid";

const images = [
  "https://www.rhinolandchitwan.com/images/2nights/1.jpg",
  "https://aasraecotreks.com.np/wp-content/uploads/2018/10/Chitwan-National-Park.jpg",
  "https://cdn.kimkim.com/files/a/images/eb0bee8e3b5b99817840b90293e6bfe277962cae/big-9bbcc4eea99293bda96245322cd7c9bb.jpg",
  "https://i0.wp.com/www.alphaadventuretreks.com/blog/wp-content/uploads/2022/12/Things-to-do-in-Chitwan-National-Park.jpeg?fit=1200%2C700&ssl=1",
];

const EventBodyText = () => {
  return (
    <>
      <Text fontSize="4xl">Chitwan National Park</Text>
      <Stack spacing={5}>
        <Text>
          <Text as="b">Activities:</Text> Jungle safari, jungle walk, canoe
          ride, jeep drive, experience of Tharu culture
        </Text>
        <Text>
          <Text as="b">Accomodation:</Text> Resorts, hotels and lodges
        </Text>
        <Text>
          <Text as="b">Access:</Text> The park headquarters at Kasara is a 21-km
          drive from Bharatpur which is 20 minutes by air or 146 km by road from
          Kathmandu
        </Text>
        <Text>
          <Text as="b">Wildlife:</Text> 56 species of mammals that include
          One-horned rhinoceros, Royal Bengal Tiger, rhesus monkey, langur,
          deer, leopard, gaur, wild boar, wild dog and wild cat; 49 species of
          amphibians and reptiles that include the endangered long snouted
          gharial, marsh mugger crocodile and python
        </Text>
        <Text>
          <Text as="b">Birds:</Text> 525 species of birds that include summer
          migrant birds like paradise flycatcher, Indian pitta and parakeets
          etc. during summer, while winter birds include waterfowl, Brahminy
          ducks, pintails, bar-headed geese, cormorants and migratory birds from
          Siberia
        </Text>
        <Text>
          <Text as="b">Vegetation:</Text> Tropical and sub-tropical forests
        </Text>
        <Text>
          <Text as="b">Best Season: </Text> October-March (average temperature
          25 degrees Celsius), April- June (hot, up to 43 degrees Celsius),
          July-September (rainy)
        </Text>
        <Text>
          <Text as="b">Park Headquarters: </Text> Kasara Added
        </Text>
        <Text>
          <Text as="b">Entrance Fee: </Text> Nepali - NPR 100 per day per entry,
          SAARC nationals - NPR 750 per person per day, Foreigners - NPR 1,500
          per person per day
        </Text>
      </Stack>
    </>
  );
};

const EventBody = () => {
  return (
    <Stack spacing={20}>
      <Stack spacing={10} px={{ base: "0px", md: "100px", lg: "200px" }}>
        <Socials />
        <EventBodyText />
      </Stack>
      <FourImageGrid images={images} />
    </Stack>
  );
};

export default EventBody;
