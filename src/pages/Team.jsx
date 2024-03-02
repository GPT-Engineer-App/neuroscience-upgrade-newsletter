import React from "react";
import { Box, Container, VStack, Heading, SimpleGrid, Image } from "@chakra-ui/react";

const Team = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} as="article">
        <Heading as="h1" size="2xl">
          Meet Our Scientists
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {}
          {[...Array(9)].map((_, index) => (
            <Box key={index} boxShadow="md" rounded="lg" overflow="hidden">
              <Image src={`https://i.pravatar.cc/300?img=${index}`} alt={`Team Member ${index + 1}`} />
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Team;
