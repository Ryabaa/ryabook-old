import axios from "axios";
import { FC, useState, useEffect } from "react";

import StyledUsers from "./allusers-style";

import getLocalStorage from "../../../utils/getLocalStorage";

import User from "./User";

const token = getLocalStorage("token");

const Users: FC = () => {
    const [allUsers, setAllUsers] = useState<any[]>([]);

    const getAllUsers = async () => {
        try {
            const res = await axios.get("http://localhost:4000/user/all/", { headers: { Authorization: `Bearer ${token}` } });
            console.log(res);
            const sortedUsers = res.data.users.sort((a: any, b: any) => a.username.localeCompare(b.username));
            setAllUsers(sortedUsers);
        } catch (error) {
            throw error;
        }
    };

    const deleteUser = async (id: string) => {
        try {
            const res = await axios.delete(`http://localhost:4000/user/delete/${id}/`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (res.status === 201) {
                getAllUsers();
            }
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <StyledUsers>
            {allUsers.map((user, index) => (
                <User key={index} user={user} deleteUser={deleteUser} />
            ))}
        </StyledUsers>
    );
};

export default Users;
