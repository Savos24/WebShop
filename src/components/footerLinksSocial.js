import { Link } from "@chakra-ui/react";

const footerLinksSocial = [
  { name: "Twitter", link: "https://twitter.com" },
  { name: "Instagram", link: "https://www.instagram.com" },
  { name: "LinkedIn", link: "https://rs.linkedin.com" },
];

export function FooterLinksSocial() {
  return (
    <>
      {footerLinksSocial.map((item) => (
        <Link href={item.link} fontWeight="thin" letterSpacing="wider">
          {item.name}
        </Link>
      ))}
    </>
  );
}
