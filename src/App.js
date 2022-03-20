import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./pages/home";
import { myTheme } from "./theme/theme";
import { ContactUs } from "./pages/contactUs";
import { Movies } from "./pages/movies";

function App() {
  return (
    <ChakraProvider theme={myTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/movies/:genre" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
