import { Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const footerLinksLegal = [
  { name: "Terms of Use", link: "/terms-of-use" },
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Contact Us", link: "contact-us" },
];

export function FooterLinksLegal() {
  return (
    <>
      {footerLinksLegal.map((item) => (
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
