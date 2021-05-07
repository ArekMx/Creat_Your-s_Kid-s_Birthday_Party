import React from "react"

export const Addition = ({price, name}) => {



    return (
            <div className={"addition"}>
                <label className={"addition__ele"}>
                    <input type="checkbox"/>
                    <span>+ {name} {price} zł</span>
                </label>
            </div>
    )
}