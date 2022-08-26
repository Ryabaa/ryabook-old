import { FC } from "react";

import Form from "../Form/Form";

const fields = [
    { value: "email", type: "email", placeholder: "billyherrington@gmail.com" },
    { value: "phone", type: "number", placeholder: "+375 29 228 1337" },
];

const SignUp: FC = () => {
    const signUp = (data: any) => {
        console.log(data);
    };

    return (
        <div>
            <Form formSubmit={signUp} fields={fields} />
        </div>
    );
};

export default SignUp;
