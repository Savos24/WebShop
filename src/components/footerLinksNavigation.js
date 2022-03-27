import { Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const footerLinksNavigation = [
  { name: "Home", link: "/" },
  { name: "Browse", link: "" },
];

export function FooterLinksNavigation() {
  return (
    <>
      {footerLinksNavigation.map((item) => (
        <Link
          as={ReactLink}
          to={item.link}
          fontWeight="thin"
          letterSpacing="wider"
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}
