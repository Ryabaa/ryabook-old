import { ChangeEvent, FC } from "react";

interface IInput {
    field: any;
    editData: (dataField: string, value: any) => void;
}

const Input: FC<IInput> = ({ field, editData }) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        editData(field.value, event.target.value);
    };

    return <input type={field.type} placeholder={field.placeholder} onChange={handleInputChange} />;
};

export default Input;
