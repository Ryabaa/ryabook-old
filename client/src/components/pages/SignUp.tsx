import { FC, useState } from "react";
import axios from "axios";

import { IUserAccount } from "../../types/user";

import Form from "../Form/Form";

const fields = [
    { key: "username", value: "Username", type: "text", placeholder: "vasyapupkin" },
    { key: "password", value: "Password", type: "password", placeholder: "password" },
    { key: "password_repeat", value: "Confirm password", type: "password", placeholder: "password" },
    { key: "phone", value: "Phone", type: "number", placeholder: "+375 29 228 1337" },
    { key: "email", value: "Email", type: "email", placeholder: "billyherrington@gmail.com" },
];

const SignUp: FC = () => {
    const [resData, setResData] = useState<any>(null);
    const signUp = async (data: IUserAccount) => {
        await axios.post("http://localhost:4000/user/signup/", data).then((res) => {
            setResData(res.data);
            console.log(res.data);
        });
    };

    return (
        <div>
            <Form formSubmit={signUp} fields={fields}>
                <p>Sign Up</p>
                <p>{resData ? resData.message : ""}</p>
            </Form>
        </div>
    );
};

export default SignUp;
