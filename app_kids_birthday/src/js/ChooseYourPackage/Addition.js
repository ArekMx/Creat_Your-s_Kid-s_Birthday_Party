import React, {useState} from "react"

import PlusCircle from "../../img/plus-circle.svg"

export const Addition = ({name, onAdd, price}) => {


    const [colorBtn, setColorBtn] = useState(false);


    const handleAddAddition =(event) => {

        // if(typeof onAddAddition !== "function" ) {
        //     return
        // }

        onAdd(event.target.value, price)
        // console.log(event.target.value)
        setColorBtn(prevState => !prevState)

    }


    return (
            <div className={"addition"}>

                <button style={{color: colorBtn ? "gold" : "black"}} value={name} onClick={handleAddAddition} className={"addition__ele"}>
                    <span><img className={"plus-circle"} src={PlusCircle} alt={"Plus-circle"}/></span>
                    {name} + {price} zł
                </button>
            </div>
    )
}