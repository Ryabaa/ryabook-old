import { FC, FormEvent, ReactNode, useCallback, useState } from "react";

import StyledForm from "../../styles/form";
import { IField } from "../../types/form";

import Input from "./Input";

interface IForm {
    formSubmit: (data: any) => void;
    fields: IField[];
    children?: ReactNode;
}

const Form: FC<IForm> = ({ formSubmit, fields, children }) => {
    const [data, setData] = useState({});

    const editData = useCallback(
        (key: string, value: string) => {
            setData({ ...data, [key]: value });
        },
        [data]
    );

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        formSubmit(data);
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            {children}
            {fields.map((field, index) => (
                <div key={index}>
                    <label>{field.value}: </label>
                    <Input field={field} editData={editData} />
                </div>
            ))}
            <input type="submit" value="submit" />
        </StyledForm>
    );
};

export default Form;
