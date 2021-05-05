import React from "react"
import "../scss/main.scss"

import {Welcome} from "./Welcome";
import {Packages} from "./Packages";
import {ChooseYourPackage} from "./ChooseYourPackege";
import {SendingOffer} from "./SendingOffer";

function App() {


  return (
    <div className={"container"}>
        <section>
            <Welcome/>
        </section>
        <section>
            <Packages />
        </section>
        <section>
            <ChooseYourPackage />
        </section>
        <section>
            <SendingOffer />
        </section>
    </div>
  );
}

export default App;
