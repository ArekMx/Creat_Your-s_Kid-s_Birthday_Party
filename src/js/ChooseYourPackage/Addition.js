import React, {useState, useEffect} from "react"

import PlusCircle from "../../img/plus-circle.svg"

export const Addition = ({name, onAdd, price, resetColorBtn}) => {


    const [colorBtn, setColorBtn] = useState(false);


    const handleAddAddition =(event) => {

        if(typeof onAdd !== "function" ) {
            return
        }
        onAdd(event.target.value, price);

        setColorBtn(true);

    }

    useEffect(()=> {

        console.log(resetColorBtn)
        if (resetColorBtn) {
            setColorBtn(false);
        }

    })

    return (
            <div className={"addition"}>

                <button style={{color: colorBtn ? "gold" : "white"}} value={name} onClick={handleAddAddition} className={"addition__ele"}>
                    <span><img className={"plus-circle"} src={PlusCircle} alt={"Plus-circle"}/></span>
                    {name} + {price} zł
                </button>
            </div>
    )
}