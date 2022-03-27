import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

export function HeroImage() {
  return (
    <Link as={ReactLink} to="/">
      <Flex align="center">
        <Image
          src="https://i.pinimg.com/originals/cc/b2/d1/ccb2d1a475ecd2a070f8aa8bcfc3563b.jpg"
          h="inherit"
        ></Image>
        <Text fontSize="24px" fontWeight="bold">
          MovieZilla
        </Text>
      </Flex>
    </Link>
  );
}
