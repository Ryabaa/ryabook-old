import { FC } from "react";
import { Link } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { IoNewspaperOutline } from "react-icons/io5";
import { TbMessageCircle2 } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";

import NavStyled, { StyledLink } from "./nav-style";

const Nav: FC = () => {
    return (
        <NavStyled>
            <Link to="/profile">
                <StyledLink>
                    <CgProfile size={"22px"} />
                    <p>My profile</p>
                </StyledLink>
            </Link>
            <Link to="/feed">
                <StyledLink>
                    <IoNewspaperOutline size={"22px"} />
                    <p>News</p>
                </StyledLink>
            </Link>
            <Link to="/messages">
                <StyledLink>
                    <TbMessageCircle2 size={"22px"} />
                    <p>Messages</p>
                </StyledLink>
            </Link>
            <Link to="/friends">
                <StyledLink>
                    <FaUserFriends size={"22px"} />
                    <p>Friends</p>
                </StyledLink>
            </Link>
        </NavStyled>
    );
};

export default Nav;
