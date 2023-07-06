import { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import store from "../../redux";

import GlobalStyles from "../../styles/global-style";
import AppWrapper from "./app-style";

import Home from "../pages/home/Home";
import SignUp from "../pages/auth/SignUp";
import LogIn from "../pages/auth/LogIn";
import AllUsers from "../pages/allUsers/AllUsers";
import User from "../pages/user/User";
import Friends from "../pages/followers/Followers";

const App: FC = () => {
    return (
        <Provider store={store}>
            <GlobalStyles />
            <AppWrapper>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<Navigate to="/feed" replace />} />
                        <Route path="/feed" element={<Home />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<LogIn />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/users" element={<AllUsers />} />
                        <Route path="/friends" element={<Friends />} />
                        <Route path="/profile" element={<Home />} />
                        <Route path="/messages" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </AppWrapper>
        </Provider>
    );
};

export default App;
