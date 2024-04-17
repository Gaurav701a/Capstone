import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  ChakraProvider,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  // const history = useHistory();

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("userInfo"));

  //   if (user) history.push("/chats");
  // }, [history]);

  return (
    <ChakraProvider resetCSS>
      <Box
        backgroundImage="url('../background.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Container maxW="xl">
          <Box
            p={8}
            bg="white"
            borderRadius="lg"
            borderWidth="1px"
            boxShadow="lg"
          >
            <Text
              fontSize="4xl"
              fontFamily="Work sans"
              textAlign="center"
              style={{ fontWeight: "bold" }}
            >
              Seekho Bharat
            </Text>

            <Tabs isFitted variant="soft-rounded" mt={4}>
              <TabList mb="1em">
                <Tab>Login</Tab>
                <Tab>Sign Up</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>{/* <Login /> */}</TabPanel>
                <TabPanel>{/* <Signup /> */}</TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default Homepage;
