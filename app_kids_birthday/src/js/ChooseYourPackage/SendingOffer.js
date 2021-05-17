import React, {useState} from "react"

export const SendingOffer = ({onAdd}) => {


    const [name, setName] = useState('');
    // console.log(name)
    const [email, setEmail] = useState('');
    // console.log(email)
    const [phone, setPhone] = useState('');

    const handleName =(event) => {

        setName(event.target.value)
        // onAdd(name)
    }

    const handleEmail =(event) => {

        setEmail(event.target.value)
        // onAdd(email)
    }

    const handlePhone =(event) => {

        setPhone(event.target.value)
        // onAdd(phone)
    }
    onAdd(name, email, phone)



    return (
        <div className={"contact-details"}>
            <div className={"contact-details__name"}>
                <h1>Dane kontaktowe:</h1>
                <label className={"checkbox"}>
                    Imię
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
                    <input type="checkbox"/>
                    <span></span>
                    Chcę otrzymywać informację o ekstra promocjach. Wyrażam zgodę na przetwarzanie moich danych osobowyh do celów marketingowych. Nie spamujemy!
                </label>
                <label className={"rodo"}>
                    <input type="checkbox"/>
                    <span></span>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przygotowania i przedstawienia mi oferty na organizację Imprezy Urodzinowej. Zapoznałem się i akcetpuję Politykę Prywatnośći firmy.
                </label>
            </div>


        </div>)


}