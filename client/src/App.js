import "./App.css";
import Header from "./components/common/header/Header";
import LoginPage from "./components/common/header/LoginPage";
import RegisterPage from "./components/common/header/RegisterPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import CourseTagsPage from "./components/allcourses/CourseTagsPage";
import Team from "./components/team/Team";
import JobPage from "./components/jobs/JobPage";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import HomePage from "./pages/HomePage";
import { Login } from "@mui/icons-material";
import { ChakraProvider } from "@chakra-ui/react";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        </Route>
        <Route exact path="/about">
          <DefaultLayout>
            <About />
          </DefaultLayout>
        </Route>
        <Route exact path="/courses">
          <DefaultLayout>
            <CourseHome />
          </DefaultLayout>
        </Route>
        <Route path="/courses/:domain">
          <DefaultLayout>
            <CourseTagsPage />
          </DefaultLayout>
        </Route>
        <Route exact path="/team">
          <DefaultLayout>
            <Team />
          </DefaultLayout>
        </Route>
        <Route exact path="/jobs">
          <DefaultLayout>
            <JobPage />
          </DefaultLayout>
        </Route>
        <Route exact path="/technologies">
          <DefaultLayout>
            <Blog />
          </DefaultLayout>
        </Route>
        <Route exact path="/contact">
          <DefaultLayout>
            <Contact />
          </DefaultLayout>
        </Route>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>

      <Route exact path="/HomePage" component={HomePage} />
    </Router>
  );
}

export default App;
