import { FC, useState, useEffect } from "react";
import axios from "axios";

import FollowersStyled from "./followers-style";

import Header from "../header/Header";
import Nav from "../nav/Nav";
import MainContainer from "../mainContainer/MainContainer";

import getLocalStorage from "../../../utils/getLocalStorage";

const token = getLocalStorage("token");
const id = getLocalStorage("id");

const Followers: FC = () => {
    const [followersList, setFollowersList] = useState<any[]>([]);
    const [allUsers, setAllUsers] = useState<any[]>([]);

    const getFollowers = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/user/${id}`, { headers: { Authorization: `Bearer ${token}` } });
            const sortedFollowers = res.data.user.followers.sort((a: any, b: any) => a.username.localeCompare(b.username));
            console.log(sortedFollowers);
            setFollowersList(sortedFollowers);
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        getFollowers();
    }, []);

    return (
        <FollowersStyled>
            <Header />
            <MainContainer>
                <Nav />
                {allUsers.map((user, index) => (
                    <div>{user.username}</div>
                ))}
                {followersList.map((follower, index) => (
                    <div>{follower}</div>
                ))}
            </MainContainer>
        </FollowersStyled>
    );
};

export default Followers;
