import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import SibuMabena from "../../../assets/newsroom/SibuMabena.jpg";
import NewsRoomHeader from "../components/NewsRoomHeader";
import { useFetchFirebase } from "../../../actions/useFetchFirebase";
import { Link, useLocation, useParams } from "react-router-dom";
import useFetch from "../../../actions/useFetchData";
import { useEffect, useState } from "react";

const NewsRoomArticle = () => {
  const buttonStyle = {
    color: "#fff",
    background: "#1E174B",
    border: "1px solid #1E174B",
    paddingY: "1.25rem",
    borderRadius: "2rem",
    width: "125px",

    _hover: {
      background: "transparent",
      border: "1px solid #1E174B",
      color: "#1E174B",
    },
  };

  const data = useFetchFirebase("newsRoom");
  // const { data, error, isPending } = useFetch(
  //   " http://localhost:8000/newsRoom"
  // );
  console.log(data);

  // Handle Location
  const { id } = useParams();
  const location = useLocation();

  const [activeNewsroomArticle, setActiveNewsroomArticle] = useState("");

  useEffect(() => {
    if (data !== null) {
      const matchingArticle = data.find(
        (item) => item.id === location.pathname.split("/").pop()
      );
      setActiveNewsroomArticle(matchingArticle);
    }
  }, [data]);

  return (
    <>
      {data && (
        <Box margin="2rem">
          <>
            <Box
              display="flex"
              flexDirection="column"
              flexWrap="wrap"
              justifyContent="center"
              minHeight="75vh"
            >
              <Box
                marginBottom={{
                  base: "1rem",
                  sm: "1rem",
                  md: "1rem",
                  lg: "2rem",
                  xl: "2rem",
                }}
                width="70%"
              >
                <Heading variant="h3" as="h3">
                  {activeNewsroomArticle.title}
                </Heading>
                <Text
                  variant="p"
                  as="p"
                  fontSize="1rem"
                  textTransform="uppercase"
                >
                  {activeNewsroomArticle.date}
                </Text>
              </Box>
              <Grid
                gridTemplateColumns={{
                  base: "1fr",
                  sm: "1fr",
                  md: "30%, 70%",
                  lg: "30%, 70%",
                  xl: "30% 70%",
                }}
                gap="2rem"
              >
                <GridItem paddingRight="2rem">
                  {activeNewsroomArticle.image && (
                    <Image
                      src={require(`../../../assets/newsroom/${activeNewsroomArticle.image}`)}
                    />
                  )}
                </GridItem>
                <GridItem paddingRight="2rem">
                  <Box
                    dangerouslySetInnerHTML={{
                      __html: activeNewsroomArticle.body,
                    }}
                  />
                </GridItem>
              </Grid>
            </Box>
          </>
        </Box>
      )}
    </>
  );
};

export default NewsRoomArticle;
