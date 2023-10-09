import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ClassicCaseStudyHeader from "../components/ClassicCaseStudyHeader";
import ClassicCaseStudyDescription from "../components/ClassicCaseStudyDescription";
import { useLocation, useParams } from "react-router-dom";

const ClassicCaseStudy = () => {
  const classicCaseStudies = [
    {
      name: "BET/Boity",
      images: [
        "Boity Case Study 2.png",
        "Boity Case Study 1.jpg",
        "Boity Case Study 3.png",
      ],
      id: "boity",
      url: "/the-grind/boity",
      description:
        "The 13-episode reality show Boity: Own Your Throne premiered on BET Africa in February 2020. The show closely followed Boity as she juggled her musical career with business, family, spirituality while giving viewers an exclusive view into her glamorous and busy life. Duma Collective provided the television network with Social Media & Influencers services. The brief was to create a social media and influencer strategy plan centered around creating awareness and engagement for the reality show. We created a strategic plan which focused on Boity as the main influencer, with the online conversation supplemented by other influencers and the social media army. We selected and managed the campaign's micro-influencers as well to create content for Facebook, Instagram, Twitter, and WhatsApp.",
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

  console.log(activeCaseStudy);
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
