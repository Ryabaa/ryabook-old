import { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import store from "./redux";

import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import SignUp from "./components/pages/SignUp";

const App: FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/users" element={<Users />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
