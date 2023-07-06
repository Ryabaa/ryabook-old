import axios from "axios";
import { useNavigate } from "react-router";
import { FC, useEffect, useState } from "react";

import getLocalStorage from "../../../utils/getLocalStorage";

const token = getLocalStorage("token");
const id = getLocalStorage("id");

const User: FC = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>({});

    const getUser = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/user/${id}`, { headers: { Authorization: `Bearer ${token}` } });
            setUser(res.data.user);
            navigate(`/user/${res.data.user.username}`);
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            {user.username} - {user._id}
        </div>
    );
};

export default User;
