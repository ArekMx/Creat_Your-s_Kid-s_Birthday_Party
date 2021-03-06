import React, {useState} from "react"

export const Selected =({price, onAdd, currentPackage}) => {

    const [colorBtn, setColorBtn] = useState("green");

    const handleOnEnter =()=> {
        setColorBtn(prevState => !prevState)
    }

    return (
            <div>
                <button 
                onMouseEnter={handleOnEnter}
                value={price}
                onClick={event => onAdd(event.target.value) } 
                style={{backgroundColor: parseFloat(currentPackage) === price ? "#fff500" : colorBtn,
                        color: parseFloat(currentPackage) === price ? "#00aa00" : colorBtn }} 
                className={"selected-button"}>{price}zł
                </button>
            </div>



    )


}

// <button style={{color: colorBtn2? "red" : "black"}} value={secondWeekPrice} onClick={event => {setPacage(event.target.value);setColorBtn2("red");}} className={"selected-button"}>399zł</button>
