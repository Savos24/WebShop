// theme/index.js
import { extendTheme } from "@chakra-ui/react";

// Component style overrides
import { LinkStyles as Link } from "./components/Links";

export const theme = extendTheme({
  // Other foundational style overrides go here
  components: {
    Link,
    // Other components go here
  },
});
