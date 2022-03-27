import { Flex, Text, VStack } from "@chakra-ui/react";
import { FooterLinksLegal } from "./footerLinkLegal";
import { FooterLinksNavigation } from "./footerLinksNavigation";
import { FooterLinksSocial } from "./footerLinksSocial";

const footerLinks = [
  { name: "Navigation", links: FooterLinksNavigation() },
  { name: "Socials", links: FooterLinksSocial() },
  { name: "Legal stuff", links: FooterLinksLegal() },
];

export function FooterLinks() {
  return (
    <Flex gap="7rem">
      {footerLinks.map((item) => (
        <VStack spacing="1.5rem">
          <Text color="white" fontWeight="semibold" pb="2rem">
            {item.name}
          </Text>
          {item.links}
        </VStack>
      ))}
    </Flex>
  );
}
