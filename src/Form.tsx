import {useState} from "react";

interface FormData{
    name: string;
    powod: string;
    wiarygodnosc: number;
    data: string;
    kreatywnosc: number;
    szczegol: string;
    pilna: boolean;

}

const Form = (props) => {
    const [formData] = useState<FormData>({name: ""})

    return (
        <>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}

            />
        </>
    )
}

export default  Form