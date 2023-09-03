import { Box, Image, Heading, Container, Stack, Text } from "@chakra-ui/react"
import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4xl",
}

const Home = () => {
  return (
    <>
      <Box>
        <Carousel
          autoPlay
          infiniteLoop
          interval={1000}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
        >
          <Box w={"full"} h={"100vh"}>
            <Image src={img1} h={"full"} w={"full"} objectFit={"cover"} />
            <Heading
              bgColor={"blackAlpha.600"}
              color={"white"}
              {...headingOptions}
            >
              Watch The Future
            </Heading>
          </Box>
          <Box w="full" h={"100vh"}>
            <Image src={img2} h={"full"} w={"full"} objectFit={"cover"} />
            <Heading
              bgColor={"whiteAlpha.600"}
              color={"black"}
              {...headingOptions}
            >
              Future is Gaming
            </Heading>
          </Box>
          <Box w="full" h={"100vh"}>
            <Image src={img3} h={"full"} w={"full"} objectFit={"cover"} />
            <Heading
              bgColor={"whiteAlpha.600"}
              color={"white"}
              {...headingOptions}
            >
              Gaming on Console
            </Heading>
          </Box>
          <Box w="full" h={"100vh"}>
            <Image src={img4} h={"full"} w={"full"} objectFit={"cover"} />
            <Heading
              bgColor={"whiteAlpha.600"}
              color={"white"}
              {...headingOptions}
            >
              Night Life Is Cool
            </Heading>
          </Box>
        </Carousel>
      </Box>

      <Container maxW={"container.xl"} minH={"100vh"} p="16">
        <Heading
          textTransform={"uppercase"}
          py="2"
          w={"fit-content"}
          borderBottom={"2px solid"}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={"4"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} />
          <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            deleniti culpa voluptatum quae pariatur ipsam fugiat exercitationem
            minima ea quas consequuntur enim dicta facere voluptatibus voluptate
            eius, asperiores vel iure sed eaque totam quis assumenda doloribus
            nostrum? Dolorem officiis veniam rem voluptatem doloribus natus
            pariatur! Architecto quis suscipit est expedita, ex cum, voluptate a
            magni in nobis animi enim atque ipsa accusamus, maxime obcaecati
            dicta non facere necessitatibus vel quasi aliquam? Possimus, sint
            mollitia maiores reprehenderit laboriosam inventore culpa sapiente
            libero ullam eaque harum molestias explicabo maxime neque amet
            similique rem blanditiis aut! Eos nostrum et, doloremque maiores
            repellat consectetur!
          </Text>
        </Stack>
      </Container>
    </>
  )
}

export default Home
