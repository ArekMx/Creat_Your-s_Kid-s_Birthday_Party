import React, {useState} from "react"

export const Selected =({price, onAdd, currentPackage}) => {

    return (
        <div>
            <button style={{border: parseFloat(currentPackage) === price ? "5px dotted #e70000" : null,
            color: parseFloat(currentPackage) === price ? "#fff500" : null}}
                    value={price} onClick={event => onAdd(event.target.value) }
                    className={"selected-button"}>{price}</button>
        </div>

    )


}

// <button style={{color: colorBtn2? "red" : "black"}} value={secondWeekPrice} onClick={event => {setPacage(event.target.value);setColorBtn2("red");}} className={"selected-button"}>399zł</button>
