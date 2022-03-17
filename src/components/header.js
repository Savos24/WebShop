import {
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import {
  FaCrosshairs,
  FaLaughSquint,
  FaMagic,
  FaSadTear,
  FaHeart,
} from "react-icons/fa";
import { GiSailboat } from "react-icons/gi";

export function Header() {
  return (
    <Container minW="100%" bgColor="black" px="7rem">
      <Flex minW="100%" minH="8vh" justify="space-between" align="center">
        <Link as={ReactLink} to="/">
          <Image
            src="https://i.pinimg.com/originals/cc/b2/d1/ccb2d1a475ecd2a070f8aa8bcfc3563b.jpg"
            maxH="8vh"
          ></Image>
        </Link>
        <HStack spacing="3rem" textAlign="center">
          <Link as={ReactLink} to="/">
            <Text fontSize="18px">Home</Text>
          </Link>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton isActive={isOpen} as={Link} fontSize="18px">
                  {isOpen ? "Genres" : "Genres"}
                </MenuButton>
                <MenuList>
                  <MenuItem icon={<FaCrosshairs />}>Action</MenuItem>
                  <MenuItem icon={<GiSailboat />}>Advanture</MenuItem>
                  <MenuItem icon={<FaLaughSquint />}>Comedy</MenuItem>
                  <MenuItem icon={<FaMagic />}>Fantasy</MenuItem>
                  <MenuItem icon={<FaSadTear />}>Horror</MenuItem>
                  <MenuItem icon={<FaHeart />}>Romance</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
          <Link as={ReactLink} to="/contact-us">
            <Text fontSize="18px">Contact Us</Text>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
}
