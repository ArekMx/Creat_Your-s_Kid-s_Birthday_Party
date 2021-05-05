import React from "react"

export const SendingOffer = () => {

    return (
        <div>
            <h1>Dane kontaktowe:</h1>
            <div>
                <label className={"checkbox"}>
                    Imię
                    <input type="number"/>
                </label>
            </div>
            <div>
                <label className={"text"}>
                    E-mail
                    <input type="email"/>
                </label>
            </div>
            <div>
                <label className={"birthdayDate"}>
                    Telefon kontaktowy
                    <input type="text"/>
                </label>
            </div>
            <div>
                <label className={"checkbox"}>
                    <input type="checkbox"/>
                    Reklama
                </label>
                <label className={"checkbox"}>
                    <input type="checkbox"/>
                    Dane rodo
                </label>
            </div>
            <button>Wyśli zapytanie</button>
            <p>Skontaktujemy się z Tobą w ciągu 24h</p>
        </div>
    )


}