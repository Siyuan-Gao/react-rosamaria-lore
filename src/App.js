import React from "react";
import { ThemeProvider } from "styled-components";
import { Switch, Route } from "react-router-dom";

import Home from "./pages";
import About from "./pages/about-me";
import Blog from "./pages/blog";
import Projects from "./pages/projects";
import Contanct from "./pages/contact";

const theme = {
    colors: {
        primary: "#0070f3",
    },
};
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about-me">
                    <About />
                </Route>
                <Route path="/posts">
                    <Blog />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/contact">
                    <Contanct />
                </Route>
            </Switch>
        </ThemeProvider>
    );
}

export default App;
