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
    const [formData, setFormData] = useState<FormData>({
        name: "",
        powod: "",
        wiarygodnosc: 5,
        data: "",
        kreatywnosc: 0,
        szczegol: "",
        pilna: false,
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const { name, value, checked } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    function handleSubmit(e) {
        console.log("Dane z formularza:", formData);
    }

    return (
        <div style={{ height: "1000px",width:"500px",  display: "flex", flexDirection: "column", backgroundColor: "#1a1038", borderRadius: "10px"}}>
            <div style={{ width:"500px", display: "flex",flexDirection: "column", alignItems: "center" }}>
                <p style={{fontSize:"20px",fontWeight:"bold"}}>
                    Podaj imię:
                </p>
                <input
                    style={{ height:"50px", width:"300px",backgroundColor: "#530353", borderRadius: "10px" }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div style={{ width:"500px", display: "flex",flexDirection: "column", alignItems: "center" }}>
                <p style={{fontSize:"20px",fontWeight:"bold"}}>
                    Podaj powód wymówki:
                </p>
                <select
                    style={{width: "300px", height:"50px",backgroundColor: "#530353", borderRadius: "10px" }}
                    name="powod"
                    value={formData.powod}
                    onChange={handleChange}>
                    <option value="">-- Wybierz --</option>
                    <option value="spoznienie">spóźnienie</option>
                    <option value="niedostarczeniePracyDomowej">niedostarczenie pracy domowej</option>
                    <option value="brakOdpowiedziNaWiaomosc">brak odpowiedzi na wiadomość</option>
                </select>
            </div>
            <div style={{ width:"500px", display: "flex",flexDirection: "column", alignItems: "center" }}>
                <p style={{fontSize:"20px",fontWeight:"bold"}}>
                    Wartość: {formData.wiarygodnosc}
                </p>
                <input
                    style={{width:"300px", borderRadius: "10px" }}
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    name="wiarygodnosc"
                    value={formData.wiarygodnosc}
                    onChange={handleChange}
                />
            </div>
            <div style={{ width:"500px", display: "flex",flexDirection: "column", alignItems: "center" }}>
                <p style={{fontSize:"20px",fontWeight:"bold"}}>
                    Podaj date zdarzenia:
                </p>
                <input
                    style={{width: "300px", height:"50px",backgroundColor: "#530353", borderRadius: "10px" }}
                    type="date"
                    name="data"
                    value={formData.data}
                    onChange={handleChange}
                />
            </div>
            <div style={{ width:"500px", display: "flex",flexDirection: "column", alignItems: "center" }}>
                <p style={{fontSize:"20px",fontWeight:"bold"}}>
                    Podaj kreatywność wymówki:
                </p>
                <select
                    style={{width:"300px", height:"50px",backgroundColor: "#530353", borderRadius: "10px" }}
                    name="kreatywnosc"
                    value={formData.kreatywnosc}
                    onChange={handleChange}>
                    <option value="">-- Wybierz --</option>
                    <option value="niekreatywny">nie kreatywny</option>
                    <option value="trochekreatywny">trochę kreatywny</option>
                    <option value="bardzokreatywny">bardzo kreatywny</option>
                </select>
            </div>
            <div style={{ width:"500px", display: "flex",flexDirection: "column", alignItems: "center" }}>
                <p style={{fontSize:"20px",fontWeight:"bold"}}>
                    Podaj dodatkowe szczegóły:
                </p>
                <textarea
                    style={{width:"300px", height:"50px",backgroundColor: "#530353", borderRadius: "10px" }}
                    name="szczegol"
                    value={formData.szczegol}
                    onChange={handleChange}
                />
            </div>
            <div style={{ width:"500px", display: "flex",flexDirection: "column", alignItems: "center" }}>
                <b style={{fontSize:"20px"}}>
                    Czy wymówka jest pilna:
                </b>
                <input
                    style={{ margin: "10px", borderRadius: "10px" }}
                    type="checkbox"
                    name="pilna"
                    checked={formData.pilna}
                    onChange={handleChange}
                />
            </div>
            <div style={{ width:"500px", display: "flex",flexDirection: "column", alignItems: "center" }}>
                <button
                    style={{ width:"300px", height:"50px",backgroundColor: "#530353", margin: "10px", borderRadius: "10px", }}
                    type="button"
                    onClick={handleSubmit}
                >
                    Prześlij wymówkę
                </button>
            </div>
        </div>
    )
}

export default  Form