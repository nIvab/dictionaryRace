import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//CSS
import "./App.css";
// Components
import Nav from "./components/navBar/Nav";

//Views
import Menu from "./views/Menu";
import Play from "./views/Play";
import SearchMenu from "./views/SearchMenu";
import SignIn from "./views/SignIn";
import HowToPlay from "./views/HowToPlay";

const App = () => {
    const location = useLocation();

    return (
        <>
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact component={Play} />
                    <Route path="/menu" component={Menu} />
                    <Route path="/search-menu" component={SearchMenu} />
                    <Route path="/how-to-play" component={HowToPlay} />
                    <Route path="/sign-in" component={SignIn} />
                </Switch>
            </AnimatePresence>
        </>
    );
};

export default App;
