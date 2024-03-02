import React from "react";
import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="brand.900" color="white" px={5} py={3}>
      <Flex as="nav" justify="center">
        <Link as={RouterLink} to="/" px={3}>
          Home
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/team" px={3}>
          Team
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
