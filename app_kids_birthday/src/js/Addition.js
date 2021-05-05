import React from "react"

export const Addition = ({price, name}) => {

    return (
        <>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <p>{price} zł</p>
                <label className={"checkbox"}>
                    <input type="checkbox"/>
                </label>
            </div>
        </>
    )
}