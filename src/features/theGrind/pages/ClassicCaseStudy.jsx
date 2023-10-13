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
      name: "UEFA Champions League Trophy Tour",
      id: "uefa",
      images: ["eufa 1.png"],
      url: "/the-grind/champions-league",
      description:
        "Heineken®'s 2018 and 2019 UEFA Champions League campaign entitled, ‘Unmissable' was based on the belief that every UEFA Champions League match has unmissable moments of action for everyone to enjoy. Heineken® brought these moments to life for football fans by providing them with unforgettable event experience. Heineken® is brought a legend of the game, Ryan Giggs, former midfielder for Manchester United and manager of the Wales National Team As part of the global campaign, the 2019 UEFA Champions League Trophy Tour presented by Heineken® stopped in Johannesburg on the 5thof March at Nelson Mandela Square then headed to The Polo Room at Inanda for the match night. On the 6thof March the trophy headed to Durban’s Sibaya Lodge to watch Manchester United take on Paris Saint Germain. For three days, fans had a rare opportunity to take photos with the UEFA Champions League Trophy, meet Ryan Giggs and experience the thrill of the tour in their home town.",
    },
    {
      name: "Chivas",
      id: "chivas",
      images: ["Chivas.jpg"],
      url: "/the-grind/chivas",
      imageId: "case-study-image-4",
      description:
        "Chivas Venture 2021 partnered with Zaid Osman, founder, and CEO of Sneaker Exchange and Grade Africa. This partnership will give a once-in-a-lifetime opportunity to four apprentices from South Africa to become the next big creative entrepreneurs. Duma Collective provided the brand with Event Management and Public Relations Services for the Media Launch of the initiative. We organised the venue and catering for the event. As well as handling the general event logistics. We also arranged for media and influencers to attend the launch to guarantee coverage. Media PR Packs were arranged as tokens of gratitude. The tokens of gratitude, however, also had more information on the campaign, being a Press Release, Hype Video, and Images captured from the event.",
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
