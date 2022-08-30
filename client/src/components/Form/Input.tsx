import { ChangeEvent, FC } from "react";

import { IField } from "../../types/form";

interface IInput {
    field: IField;
    editData: (key: string, value: any) => void;
}

const Input: FC<IInput> = ({ field, editData }) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        editData(field.key, event.target.value);
    };

    return <input type={field.type} placeholder={field.placeholder} onChange={handleInputChange} />;
};

export default Input;
