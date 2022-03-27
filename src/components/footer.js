import {
  Box,
  Container,
  Flex,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { FooterLinks } from "./footerLinks";
import { HeroImage } from "./heroImage";

export function Footer() {
  return (
    <Container bgColor="primary" minW="100%" p="1rem 10vw" minH="30vh">
      <Stack divider={<StackDivider borderColor="gray.800" />} spacing={2}>
        <Flex justify="space-between" align="center" p="2rem 0">
          <Box w="8vw" fontSize="36px">
            <HeroImage />
          </Box>
          <FooterLinks />
        </Flex>
        <Text color="white" align="right">
          © {new Date().getFullYear()} Web Shop All Rights Reserved
        </Text>
      </Stack>
    </Container>
  );
}
