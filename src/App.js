import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./pages/home";
import { myTheme } from "./theme/theme";
import { ContactUs } from "./pages/contactUs";
import { Movies } from "./pages/movies";
import { TermsOfUse } from "./pages/termsOfUse";
import { PrivacyPolicy } from "./pages/privacyPolicy";

function App() {
  return (
    <ChakraProvider theme={myTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:genre" element={<Movies />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
