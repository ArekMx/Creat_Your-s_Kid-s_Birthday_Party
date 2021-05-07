import React, {useState} from "react"
import "../scss/main.scss"

import {Welcome} from "./Welcome/Welcome";
import {Packages} from "./Packages/Packages";
import {ChooseYourPackage} from "./ChooseYourPackage/ChooseYourPackage";

function App() {

    const [showPackages, setShowPackages] = useState(false)

  const handleShow =(data)=> {
      setShowPackages(data)
  }

  return (
    <div className={"container"}>
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
