import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Image } from "@chakra-ui/react";
import { QuantityPicker } from "react-qty-picker";

export function MovieCard() {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
      // src={property.imageUrl} alt={property.imageAlt}
      />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {/* {property.beds} beds &bull; {property.baths} baths */}
          </Box>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {/* {property.title} */}
        </Box>
        <Box>
          {/* {property.formattedPrice} */}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>
        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                // color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {/* {property.reviewCount} reviews */}
          </Box>
        </Box>
        <Button>Add to Cart</Button>
        <QuantityPicker smooth min={1} max={20} value={1} />
        {/* <NumberPicker defaultValue={1} /> */}
      </Box>
    </Box>
  );
}
