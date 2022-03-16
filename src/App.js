import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./pages/home";
import { theme } from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
