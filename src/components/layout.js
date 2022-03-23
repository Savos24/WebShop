import { Box } from "@chakra-ui/react";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box minH="calc(100vh - 38vh)" bgColor="secondary">
        {children}
      </Box>
      <Footer />
    </>
  );
};
