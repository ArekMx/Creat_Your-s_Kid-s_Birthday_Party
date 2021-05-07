import React from "react"

export const Selected =({price}) => {

    return (
        <div>
            <label className={"selected"}>
                <input type="checkbox"/>
                <span>{price}zł</span>
            </label>
        </div>

    )


}