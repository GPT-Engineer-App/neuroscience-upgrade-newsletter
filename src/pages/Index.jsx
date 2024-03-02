import React, { useState } from "react";
import { Box, Container, VStack, Heading, Text, Input, Button, useToast, Image, FormControl, FormLabel, InputGroup, InputRightElement, chakra } from "@chakra-ui/react";
import { FaEnvelope, FaPaperPlane, FaBrain } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // A simple validation for email input
    if (email.trim() === "" || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Subscription Successful",
        description: `You've been subscribed to the neuroscience newsletter.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      // Here you would normally handle the email subscription logic
      setEmail("");
    }
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} as="article">
        <Heading as="h1" size="2xl">
          <FaBrain /> The Frontier of Neuroscience
        </Heading>
        <Image src="https://images.unsplash.com/photo-1595130886093-3fe622c583c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXVyb3NjaWVuY2UlMjBsYWJ8ZW58MHx8fHwxNzA5MzczNTI5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Neuroscience Lab" />
        <Text fontSize="lg" textAlign="justify">
          Neuroscience is on the cusp of a revolutionary breakthrough, thanks to the development of new substances that have the potential to enhance cognitive function and repair neurological damage. These substances, which range from well-known nootropics to newly synthesized compounds, are the subject of intense research and rigorous testing.
        </Text>
        <Text fontSize="lg" textAlign="justify">
          The impact of these substances on the human brain can be profound, offering not only improved cognitive abilities but also hope for patients suffering from debilitating neurological conditions. By targeting specific neurotransmitters and receptors, scientists are able to fine-tune the effects of these substances, paving the way for personalized medicine in the realm of brain health.
        </Text>
        <Text fontSize="lg" textAlign="justify">
          As we delve deeper into the inner workings of the brain, the possibilities for enhancement and repair seem limitless. With careful research and ethical considerations, the future of neuroscience holds great promise for humanity.
        </Text>
        <chakra.form w="full" onSubmit={handleSubmit}>
          <FormControl id="email" isRequired>
            <FormLabel>Subscribe to our Newsletter</FormLabel>
            <InputGroup>
              <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} size="lg" pr="4.5rem" />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleSubmit}>
                  <FaPaperPlane />
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </chakra.form>
      </VStack>
    </Container>
  );
};

export default Index;
