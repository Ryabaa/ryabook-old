import { FC, useState, useEffect } from "react";
import axios from "axios";

import { IconContext } from "react-icons/lib";
import { GoSearch } from "react-icons/go";
import { GiChicken } from "react-icons/gi";
import { IoNotificationsOutline } from "react-icons/io5";

import HeaderStyled, { Logo, Input, Notification, Avatar, User } from "./header-style";

import getLocalStorage from "../../../utils/getLocalStorage";

const token = getLocalStorage("token");
const id = getLocalStorage("id");

const Header: FC = () => {
    const [userAvatar, setUserAvatar] = useState<any>();

    const getUserAvatar = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/user/${id}`, { headers: { Authorization: `Bearer ${token}` } });
            console.log(res.data.user.avatar);
            setUserAvatar(res.data.user.avatar);
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        getUserAvatar();
    }, []);

    return (
        <HeaderStyled>
            <Logo href="/feed">
                <IconContext.Provider value={{ size: "27px" }}>
                    <GiChicken />
                </IconContext.Provider>
                <h1>Ryabook</h1>
            </Logo>
            <Input>
                <IconContext.Provider value={{ size: "20px" }}>
                    <GoSearch />
                </IconContext.Provider>
                <input type="text" placeholder="Search" />
            </Input>
            <User>
                <Notification>
                    <IconContext.Provider value={{ size: "30px" }}>
                        <IoNotificationsOutline />
                    </IconContext.Provider>
                </Notification>
                <Avatar>
                    <img src={userAvatar} alt="" />
                </Avatar>
            </User>
        </HeaderStyled>
    );
};

export default Header;
