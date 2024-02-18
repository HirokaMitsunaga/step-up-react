import { Button } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import thema from "./theme/theme";
import { Router } from "./router/Router";

export default function App() {
  return (
    <ChakraProvider theme={thema}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
