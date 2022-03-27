// theme/index.js
import { extendTheme } from "@chakra-ui/react";

// Component style overrides
import { LinkStyles as Link } from "./components/Links";

export const myTheme = extendTheme({
  colors: {
    primary: "#0d0d0d",
    secondary: "#82a0aa",
    gradiant: "#82a0aa",
  },
  // Other foundational style overrides go here
  components: {
    Link,
    // Other components go here
  },
});
