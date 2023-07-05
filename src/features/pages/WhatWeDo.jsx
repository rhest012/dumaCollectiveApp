import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

import SecondaryHeader from '../components/SecondaryHeader'
import ServiceList from '../components/ServiceList'
import LandscapeImageOne from '../../assets/bodyImages/DumaImage01.jpg'
import PortraitImageOne from '../../assets/bodyImages/DumaImage02.jpg'
import { useLocation } from 'react-router-dom'
import PageIntro from '../theGrind/components/pageIntro'

const WhatWeDo = () => {
  const imageStyling = {
    borderRadius : "0.5rem"
  }

  const location = useLocation();
  const pageLocation = location.pathname

  return (
    <Box>
      <ServiceList/>
      </Box>
  )
}

export default WhatWeDo