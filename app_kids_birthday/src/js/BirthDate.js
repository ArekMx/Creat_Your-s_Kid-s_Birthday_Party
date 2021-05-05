import React from "react"

export const BirthDate =()=> {

    return (
        <>
            <div>
                <h2>Liczba dzieci</h2>
            </div>
            <div>
                <label className={"checkbox"}>
                    <input type="number"/>
                </label>
            </div>
            <div>
                <h2>Imię solenizanta</h2>
            </div>
            <div>
                <label className={"text"}>
                    <input type="text"/>
                </label>
            </div>
            <div>
                <h2>Data imprezy</h2>
            </div>
            <div>
                <label className={"birthdayDate"}>
                    <input type="text"/>
                </label>
            </div>
        </>


    )

}