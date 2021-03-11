import React, { useState, useMemo } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import UserContext from "./UserContext";

//CSS
import "./App.css";
// Components
import Nav from "./components/navBar/Nav";

//Views
import Menu from "./views/menu/Menu";
import Play from "./views/play/Play";
import SignIn from "./views/signIn/SignIn";
import HowToPlay from "./views/howToPlay/HowToPlay";
import SignUp from "./views/signUp/SignUp";
import ThankYou from "./views/thankYou/ThankYou";

const App = () => {
    const location = useLocation();
    const [user, setUser] = useState(null);
    const userProvider = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
        <>
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <UserContext.Provider value={userProvider}>
                        <Route path="/" exact component={Play} />
                        <Route path="/menu" component={Menu} />
                        <Route path="/how-to-play" component={HowToPlay} />
                        <Route path="/sign-in" component={SignIn} />
                        <Route path="/sign-up" component={SignUp} />
                        <Route path="/thank-you" component={ThankYou} />
                    </UserContext.Provider>
                </Switch>
            </AnimatePresence>
        </>
    );
};

export default App;
