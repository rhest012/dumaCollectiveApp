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
        "Launching a brand-new phone in South Africa is tough. How do we position a new mobile device as a must have-have product. By launching it as the content creator's dream. The HONOR 90 is expertly crafted with the content creator, and to connect with the right audience, we emphasis the main aspect of creating quality content - light manipulation. <br/> <br/> Duma Collective launched a content-driven influencer campaign with new creators and well-known names to highlight the main features of the device that rival its competitors. <br/> <br/> Welcome to the dawn of Content Creation, introducing the HONOR 90 5G.",

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
        "Heineken introduced Heineken 0.0, a non-alcoholic lager crafted with a distinctive recipe to deliver a balanced and unique taste. The official launch event, held at Melrose Arch and spanning three weeks, marked the introduction of this product. <br/> <br/> Duma Collective devised a comprehensive strategy encompassing Social Media and Influencer services for the beer brand. This strategic approach generated heightened awareness and anticipation in the weeks leading up to the launch. Additionally, it effectively established a strong visual presence for the product across various social media platforms, contributing to increased public recognition.",
    },
    {
      name: "Chivas",
      id: "chivas",
      images: ["Chivas.jpg", "Chivas 2.jpg", "Chivas 3.jpg"],
      url: "/the-grind/chivas",
      imageId: "case-study-image-4",
      description:
        "Chivas Venture 2021 partnered with the founder and CEO of Sneaker Exchange and Grade Africa, Zaid Osman. <br/> This partnership provided a once-in-a-lifetime opportunity to four apprentices from SA to become the next big creative entrepreneurs. Duma Collective provided the brand with Event Management and Public Relations Services for the Media Launch of the initiative. <br/><br/>Duma Collective organised the venue and event catering, as well as handling the general event logistics. We also arranged for media and influencers to attend the launch, which guaranteed coverage. Media PR Packs were arranged as tokens of gratitude, which contained more information on the campaign, a Press Release, Hype Video and professional images captured at the event.",
      video:
        "https://www.youtube.com/watch?v=NEQ5-4Xjm9E&ab_channel=ChivasRegal",
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
