import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ClassicCaseStudyHeader from "../components/ClassicCaseStudyHeader";
import ClassicCaseStudyDescription from "../components/ClassicCaseStudyDescription";
import { useLocation, useParams } from "react-router-dom";

const ClassicCaseStudy = () => {
  const classicCaseStudies = [
    {
      name: "Honor",
      images: [
        "Honor Case Study 1.jpg",
        "Honor Case Study 2.jpg",
        "Honor Case Study 3.jpg",
      ],
      id: "honor",
      url: "/the-grind/honor",
      description:
        "Launching a brand new phone in South Africa is tough - but with a wealth of content creators in our country we knew who we were speaking to. The HONOR 90 is exactly that, a device expertly crafted for the content creator. In order to speak to the correct audience we knew we had to emphasize the main aspect of creating quality content - manipulating light. <br/> <br/> Duma Collective set out to launch a content driven influencer campaign with up and coming influencers that highlights the beauty of the device, the main key selling points and it's tremendous technological capabilities. Welcome to the new dawn of Creating Content, introducing the HONOR 90 5G.",

      videos: [
        "https://www.youtube.com/watch?v=5DM_U8WbYes&ab_channel=HONORSouthAfrica",
        "https://www.youtube.com/watch?v=h6ueLd-bH_k&ab_channel=HONORSouthAfrica",
      ],
    },
    {
      name: "Heineken 0.0",
      id: "heineken",
      images: [
        "Heineken 0.0 1.jpg",
        "Heineken 0.0 2.jpg",
        "Heineken 0.0 3.jpg",
      ],
      url: "/the-grind/heineken",
      description:
        "Heineken presents its latest innovation, Heineken 0.0, an alcohol-free lager brewed with a unique recipe for a distinct balanced taste. Heineken's beer created the new alcohol-free beer using only natural ingredients, resulting in a beer brewed for the beer lover by beer lovers. On the 14thof March, Heineken 0.0 official began its activation launch at Melrose Arch. The activation ran for three weeks, on Thursdays and Sundays, from 14:00 to 20:00. The integrated launch campaign included a TV commercial, digital marketing, OOH, and experimental activations plus on and off-trade promotions. Duma Collective provided the beer brand with Social Media & Influencer services. Influencers were brought in to create conversation leading up to the launch, to create public awareness, and to give the product a visual representation on social media platforms.",
    },
    {
      name: "Chivas",
      id: "chivas",
      images: ["Chivas.jpg"],
      url: "/the-grind/chivas",
      imageId: "case-study-image-4",
      description:
        "Chivas Venture 2021 partnered with Zaid Osman, founder, and CEO of Sneaker Exchange and Grade Africa. This partnership will give a once-in-a-lifetime opportunity to four apprentices from South Africa to become the next big creative entrepreneurs. Duma Collective provided the brand with Event Management and Public Relations Services for the Media Launch of the initiative. We organised the venue and catering for the event. As well as handling the general event logistics. We also arranged for media and influencers to attend the launch to guarantee coverage. Media PR Packs were arranged as tokens of gratitude. The tokens of gratitude, however, also had more information on the campaign, being a Press Release, Hype Video, and Images captured from the event.",
      videos: [
        "https://www.youtube.com/watch?v=rhPR18kQ-Qo&ab_channel=ChivasRegal",
        "https://www.youtube.com/watch?v=NEQ5-4Xjm9E&ab_channel=ChivasRegal",
      ],
    },
  ];

  //   Page Location
  const location = useLocation();
  const id = useParams();

  //   Set Active Case Study
  const [activeCaseStudy, setActiveCaseStudy] = useState("");

  useEffect(() => {
    const currentCaseStudy = classicCaseStudies.find(
      (caseStudy) => caseStudy.url === location.pathname
    );

    if (currentCaseStudy) {
      setActiveCaseStudy(currentCaseStudy);
    }
  }, []);

  return (
    <>
      {activeCaseStudy && (
        <Box marginX="2rem">
          <ClassicCaseStudyHeader activeCaseStudy={activeCaseStudy} />
          <ClassicCaseStudyDescription activeCaseStudy={activeCaseStudy} />
        </Box>
      )}
    </>
  );
};

export default ClassicCaseStudy;
