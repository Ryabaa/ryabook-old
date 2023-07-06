import { FC } from "react";

import HomeStyled from "./home-style";

import Header from "../header/Header";
import Nav from "../nav/Nav";
import Feed from "../feed/Feed";
import MainContainer from "../mainContainer/MainContainer";

const Home: FC = () => {
    return (
        <HomeStyled>
            <Header />
            <MainContainer>
                <Nav />
                <Feed />
            </MainContainer>
        </HomeStyled>
    );
};

export default Home;
