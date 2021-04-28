import React from "react"
import "./main.scss"

import {Welcome} from "./Welcome";
import {Packeges} from "./Packeges";
import {ChooseYourPackege} from "./ChooseYourPackege";
import {SendingOffer} from "./SendingOffer";

function App() {


  return (
    <main className={"main"}>
        <section>
            <Welcome/>
        </section>
        <section>
            <Packeges />
        </section>
        <section>
            <ChooseYourPackege />
        </section>
        <section>
            <SendingOffer />
        </section>
    </main>
  );
}

export default App;
