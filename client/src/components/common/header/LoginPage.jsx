import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
  ChakraProvider,
} from "@chakra-ui/react";

function LoginPage() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
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

    try {
      const response = await fetch("http://localhost:4242/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful");
        console.log("Token:", data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.userName);
        // You can store the token in localStorage or sessionStorage here
        // Redirect the user to another page or perform other actions as needed
        history.push("/");
      } else {
        console.error("Failed to login");
      }
    } catch (error) {
      console.error("Error logging in:", error);
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
        <Box p={8} maxW="md" borderWidth={1} borderRadius={8} boxShadow="lg">
          <Box textAlign="center">
            <img
              src="/images/seekho.jpeg"
              alt="Seekho Bharat Logo"
              height="50px"
              width="auto"
              style={{ backgroundColor: "transparent" }}
            />
          </Box>
          <Box my={4} textAlign="left">
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
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </FormControl>
              <Button colorScheme="teal" width="full" mt={4} type="submit">
                Login
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default LoginPage;
