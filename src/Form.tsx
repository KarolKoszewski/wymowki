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

    function handleChange() {

    }

    return (
        <>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <select name="powodWymowki" value={formData.powod}
                    onChange={handleChange}>
                <option value="">-- Select --</option>
                <option value="spoznienie">spóźnienie</option>
                <option value="niedostarczeniePracyDomowej">niedostarczenie pracy domowej</option>
                <option value="brakOdpowiedziNaWiaomosc">brak odpowiedzi na wiadomość</option>
            </select>
        </>
    )
}

export default  Form