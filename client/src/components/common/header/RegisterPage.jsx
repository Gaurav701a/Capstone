import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Box,
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
  useToast,
  ChakraProvider,
} from "@chakra-ui/react";

function RegisterPage() {
  const history = useHistory();
  const toast = useToast();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords do not match",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch("/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("User registered successfully");
        // You can redirect the user to another page here if needed
        history.push("/login");
      } else {
        console.error("Failed to register user");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <ChakraProvider resetCSS>
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        bgGradient="linear(to-r, #1eb2a6, white)"
      >
        <Box
          p={8}
          maxW="md"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          flexDirection={"row"}
        >
          <Flex direction="column" flex="1">
            <Box textAlign="center" mb={4}>
              <img
                src="/images/seekho.jpeg"
                alt="Seekho Bharat Logo"
                height="50px"
                width="auto"
              />
            </Box>
            <Box textAlign="center">
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel htmlFor="userName">Username</FormLabel>
                  <Input
                    type="text"
                    id="userName"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel htmlFor="confirmPassword">
                    Confirm Password
                  </FormLabel>
                  <Input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </FormControl>
                <Button colorScheme="teal" width="full" mt={4} type="submit">
                  Register
                </Button>
                <Box mt={4} textAlign="center">
                  <Link to="/login">Already a user? Click here to login</Link>
                </Box>
              </form>
            </Box>
          </Flex>
          <Box flex="1"></Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default RegisterPage;
