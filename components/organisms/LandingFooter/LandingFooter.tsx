import React from "react";
import {
  Box,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export const LandingFooter = () => {
  return (
    <Box
      as="footer"
      backgroundColor="blue.300"
      py="40px"
      width="100vw"
      display="flex"
      justifyContent="center"
    >
      <Flex w={["100%", "100%", "100%", "90ch"]}>
        <SimpleGrid columns={2} spacing={8} w="100%">
          <Box>SuperApp 2022</Box>
          <Flex flexDirection="column">
            <Text mb="16px">Follow on Us</Text>
            <HStack spacing={4}>
              <Text>Twitter</Text>
              <Text>Instagram</Text>
              <Text>Facebook</Text>
            </HStack>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
