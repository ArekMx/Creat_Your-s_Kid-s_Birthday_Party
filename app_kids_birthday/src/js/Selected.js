import React from "react"

export const Selected =({price}) => {

    return (
        <>
            <p>{price} zł</p>
            <label className={"checkbox"}>
                <input type="checkbox"/>    
            </label>
        </>

    )


}