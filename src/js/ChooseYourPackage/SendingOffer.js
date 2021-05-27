import React, {useState} from "react"

export const SendingOffer = ({onAdd, checkBoxesValue, checkBox}) => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleName =(event) => {

        setName(event.target.value)
    }

    const handleEmail =(event) => {

        setEmail(event.target.value)
    }

    const handlePhone =(event) => {

        setPhone(event.target.value)
    }
    onAdd(name, email, phone)


    const [checkedAgreement, setCheckedAgreement] = useState(false);
    const [checkedRodo, setCheckedRodo] = useState(false);

    checkBoxesValue(checkedAgreement, checkedRodo)


    return (
        <div className={"contact-details"}>
            <h1 className={"contact-details-title"}>Dane kontaktowe:</h1>
            <div className={"contact-details__name"}>
                <label className={"checkbox"}>
                    Imię opiekuna
                    <input value={name} onChange={handleName} type="text"/>
                </label>
            </div>
            <div className={"contact-details__e-mail"}>
                <label className={"text"}>
                    E-mail
                    <input value={email} onChange={handleEmail} type="email"/>
                </label>
            </div>
            <div className={"contact-details__phone"}>
                <label className={"birthdayDate"}>
                    Telefon kontaktowy
                    <input value={phone} onChange={handlePhone} type="text"/>
                </label>
            </div>
            <div className={"agreements"}>
                <label className={"advertisement"}>
                    <input type="checkbox" onChange={() => setCheckedAgreement(!checkedAgreement)} defaultChecked={checkedAgreement}/>
                    <span></span>
                    Chcę otrzymywać informację o ekstra promocjach. Wyrażam zgodę na przetwarzanie moich danych osobowyh do celów marketingowych. Nie spamujemy!
                </label>
                <label className={"rodo"}>
                    <input type="checkbox" onChange={() => setCheckedRodo(!checkedRodo)} defaultChecked={checkedRodo}/>
                    <span style={{border: checkBox && !checkedRodo ? "3px solid red" : "3px solid cornflowerblue"}}></span>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przygotowania i przedstawienia mi oferty na organizację Imprezy Urodzinowej. Zapoznałem się i akcetpuję Politykę Prywatnośći firmy.
                </label>
            </div>


        </div>)


}