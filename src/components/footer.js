import { Box, Container, Flex } from "@chakra-ui/react";
import { FooterLinks } from "./footerLinks";
import { HeroImage } from "./heroImage";

export function Footer() {
  return (
    <Container bgColor="primary" minW="100%" p="1rem 5rem" minH="30vh">
      <Flex justify="space-between" align="center" pt="2rem">
        <Box w="8vw" fontSize="36px">
          <HeroImage />
        </Box>
        <FooterLinks />
      </Flex>
    </Container>
  );
}
