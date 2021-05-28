import React, {useState, useEffect} from "react"


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

        setColorBtn(false);

    }, [resetColorBtn])

    return (
            <div className={"addition"}>

                <button style={{color: colorBtn ? "gold" : "#6a1e50", backgroundColor: colorBtn ? "#6a1e50" : "gold"}}
                        value={name}
                        onClick={handleAddAddition}
                        className={"addition__ele"}>
                    {name} + {price} zł
                </button>
            </div>
    )
}