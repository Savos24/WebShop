// theme/index.js
import { extendTheme } from "@chakra-ui/react";

// Component style overrides
import { LinkStyles as Link } from "./components/Links";

export const myTheme = extendTheme({
  colors: {
    primary: "#000000",
    secondary: "#82a0aa",
    gradiant: "#82a0aa",
  },
  // Other foundational style overrides go here
  components: {
    Link,
    // Other components go here
  },
});
