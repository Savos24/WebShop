import {
  Box,
  Container,
  Flex,
  HStack,
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
import { HeroImage } from "./heroImage";

const dropDownMenu = [
  {
    icon: <FaCrosshairs />,
    name: "Action",
    link: "/movies/action",
  },
  { icon: <GiSailboat />, name: "Advanture", link: "/movies/advanture" },
  { icon: <FaLaughSquint />, name: "Comedy", link: "/movies/comedy" },
  { icon: <FaMagic />, name: "Fantasy", link: "/movies/fantasy" },
  { icon: <FaSadTear />, name: "Horror", link: "/movies/horror" },
  { icon: <FaHeart />, name: "Romance", link: "/movies/romance" },
];

export function Header() {
  return (
    <Container minW="100%" bgColor="primary" px="7rem">
      <Flex minW="100%" minH="8vh" justify="space-between" align="center">
        <Box w="5vw">
          <HeroImage />
        </Box>
        <HStack spacing="3rem" textAlign="center">
          <Link as={ReactLink} to="/">
            <Text fontSize="18px">Home</Text>
          </Link>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton isActive={isOpen} as={Link} fontSize="18px">
                  Genres
                </MenuButton>
                <MenuList>
                  {dropDownMenu.map((item) => (
                    <MenuItem as={ReactLink} to={item.link} icon={item.icon}>
                      {item.name}
                    </MenuItem>
                  ))}
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
