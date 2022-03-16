import { Container, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Container minW="100%" bgColor="black" px="5rem">
      <Flex minW="100%" minH="8vh" justify="space-between" align="center">
        <Link>
          <Image
            src="https://i.pinimg.com/originals/cc/b2/d1/ccb2d1a475ecd2a070f8aa8bcfc3563b.jpg"
            maxH="8vh"
          ></Image>
        </Link>
        <HStack>
          <Link variant="footerLink">
            <Text>Home</Text>
          </Link>
          <Link>
            <Text>Movies</Text>
          </Link>
          <Link>
            <Text>Contact Us</Text>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
}
