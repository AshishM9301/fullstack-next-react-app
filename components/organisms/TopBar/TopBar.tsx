import React from "react";
import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { MenuItem } from "../../molecules/MenuItems/MenuItem";

export const TopBar = () => (
  <Flex
    w="100%"
    flexDirection="row"
    alignContent="center"
    p="8px 16px"
    justifyContent="center"
  >
    <Flex
      w={["100%", "100%", "100%", "80ch"]}
      flexDirection="row"
      alignContent="center"
      p="8px 16px"
    >
      <Text
        fontSize="36px"
        fontWeight="bold"
        lineHeight="42px"
        color="#1f79ba"
        flexGrow={1}
      >
        SuperApp
      </Text>
      <HStack spacing="16px" alignContent="center">
        <MenuItem text="Blog" href="/blog" />
        <MenuItem text="Product" href="/product" />
        <MenuItem text="Pricing" href="/pricing" />
      </HStack>

      <Flex marginLeft="82px">
        <Button variant="solid" colorScheme="blue">
          Get Started
        </Button>
      </Flex>
    </Flex>
  </Flex>
);
