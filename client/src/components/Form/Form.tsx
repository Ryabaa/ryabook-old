import { FC, FormEvent, useCallback, useState } from "react";
import Input from "./Input";

interface IForm {
    formSubmit: (data: any) => void;
    fields: any[];
}

const Form: FC<IForm> = ({ formSubmit, fields }) => {
    const [data, setData] = useState({});

    const editData = useCallback(
        (dataField: string, value: string) => {
            setData({ ...data, [dataField]: value });
        },
        [data]
    );

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        formSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field, index) => (
                <div>
                    <label>{field.value}: </label>
                    <Input key={index} field={field} editData={editData} />
                </div>
            ))}
            <input type="submit" value="submit" />
        </form>
    );
};

export default Form;
