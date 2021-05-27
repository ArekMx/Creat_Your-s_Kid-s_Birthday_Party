import React, {useState} from "react"
import "../scss/main.scss"

import {Welcome} from "./Welcome/Welcome";
import {Packages} from "./Packages/Packages";
import {ChooseYourPackage} from "./ChooseYourPackage/ChooseYourPackage";
import MainPhoto from "../img/Mainphoto.svg";

function App() {

    const [hideButtonAndImg, setHideButtonAndImg] = useState(false)
    const [showPackages, setShowPackages] = useState(false)

  const handleShow =(data)=> {
      setShowPackages(data)
  }

  const handleHidePhoto = (data)=> {

        setHideButtonAndImg(data)
  }

  return (
    <div className={"container"}>
        <section className={"start"}>
            <Welcome hidePhoto={handleHidePhoto} onShow={handleShow}/>
            {
                hideButtonAndImg ? null : (
                    <img className={"main-photo"} src={MainPhoto} alt={"birthday-party"}/>
                )
            }
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
