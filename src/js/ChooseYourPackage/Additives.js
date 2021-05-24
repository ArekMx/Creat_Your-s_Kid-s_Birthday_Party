// import React, {useState} from "react"
//
// import {Addition} from "./Addition";
//
// export const Additives =({onAdd})=> {
//
//     const [addition, setAddition] = useState('')
//
//     const handleAddAddition =()=> {
//
//         onAdd(addition)
//     }
//
//     const addAddition =(addition)=> {
//         setAddition(addition)
//
//     }
//
//
//
//     return (
//         <div className={"additives"}>
//             <h1>Wybierz extra dodatki:</h1>
//             <Addition name={"Animator + 100zł"} onAdd={handleAddAddition} onAddAddition={addAddition} />
//             <Addition name={"Tron dla solenizanta z postacią z bajki + 50zł"} onAdd={handleAddAddition} onAddAddtion={addAddition}/>
//             <Addition name={"Balon helowy dla każdego zaproszonego dziecka + 10zł od dziecka"} onAdd={handleAddAddition} onAddAddtion={addAddition}/>
//             <Addition name={"Dodatkowe atrakcje - malowanie buzi, warkoczyki, tatuaże + 9 zł od dziecka)"} onAdd={handleAddAddition} onAddAddtion={addAddition}/>
//         </div>
//
//     )
//
// }