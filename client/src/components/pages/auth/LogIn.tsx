import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { IUserAccount } from "../../../types/user";

import Auth from "./auth-style";
import Container from "../../../styles/container";

import Form from "../../form/Form";

import setLocalStorage from "../../../utils/setLocalStorage";

const fields = [
    { key: "username", value: "Username", type: "text" },
    { key: "password", value: "Password", type: "password" },
];

const LogIn: FC = () => {
    const navigate = useNavigate();
    const [resData, setResData] = useState<any>(null);

    const login = async (data: IUserAccount) => {
        await axios.post("http://localhost:4000/auth/login/", data).then((res) => {
            setResData(res.data);
            if (res.status === 201) {
                setLocalStorage("token", res.data.token);
                setLocalStorage("id", res.data.id);
                navigate("/users");
            }
        });
    };

    return (
        <Auth>
            <h2>Log in</h2>
            <p>{resData ? resData.message : ""}</p>
            <Form formSubmit={login} fields={fields} submitName="Log in"></Form>
            <Container column="20px" aself="center">
                <Link to="/signup">Sign Up</Link>
                <Link to="/reset">Reset password</Link>
            </Container>
        </Auth>
    );
};

export default LogIn;
