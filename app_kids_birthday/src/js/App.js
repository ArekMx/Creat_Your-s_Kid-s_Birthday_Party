import React, {useState} from "react"
import "../scss/main.scss"

import {Welcome} from "./Welcome/Welcome";
import {Packages} from "./Packages/Packages";
import {ChooseYourPackage} from "./ChooseYourPackage/ChooseYourPackage";

function App() {

    const [showPackages, setShowPackages] = useState(false)

    const [thankYou, setThankYou] = useState('')

  const handleShow =(data)=> {
      setShowPackages(data)
  }

  const handleThankYou =(data)=> {
        setThankYou(data)

  }

  return (
    <div className={"container"}>
        <h1>{thankYou}</h1>
        <section className={"start"}>
            <Welcome onShow={handleShow}/>
        </section>
        {
            showPackages ? (
                <>
                    <section className={"main"}>
                        <Packages />
                    </section>
                    <section className={"end"}>
                        <ChooseYourPackage />
                    </section>
                </>
            ) : null
        }
    </div>
  );
}

export default App;
