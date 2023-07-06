import { FC } from "react";

import MainStyled from "./mainContainer-style";

interface MainContainerProps {
    children?: React.ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
    return <MainStyled>{children}</MainStyled>;
};

export default MainContainer;
