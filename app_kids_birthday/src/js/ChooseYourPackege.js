import React, {useState} from "react"

import {Selected} from "./Selected";
import {Addition} from "./Addition";
import {BirthDate} from "./BirthDate";

export const ChooseYourPackage = () => {

    //Prices for package at week
    const firstWeekPrice = "299"
    const secondWeekPrice = "399";
    const thirdWeekPrice = "499";

    //Prices for package at weekend
    const firstWeekendPrice = "349";
    const secondWeekendPrice = "449";
    const thirdWeekendPrice = "549";

    //Prices extra kids
    const firstPackageChild = "29";
    const secondPackageChild = "35";
    const thirdPackageChild = "45";

    //Prices for additives

    const animator = "50";
    const throne = "20";
    const balloons = "10";
    const attractions = "10"

    return (
        <div className={"chooseYourPackage"}>
        <form className={"form"}>
            <div className={"form__table"}>
                <table>
                    <tbody>
                    <tr className={"tableHeader"}>
                        <th>Pakiet dla 10 dzieci</th>
                        <th>Pakiet prosiaczek</th>
                        <th>Pakiet tygrsek</th>
                        <th>Pakiet puchatek</th>
                    </tr>
                    <tr>
                        <th className={"weekdays"}>Poniedziałek - czwartek</th>
                        <th><Selected price={firstWeekPrice} /></th>
                        <th><Selected price={secondWeekPrice} /></th>
                        <th><Selected price={thirdWeekPrice} /></th>
                    </tr>
                    <tr>
                        <th className={"weekdays"}>Piątek - niedziela</th>
                        <th><Selected price={firstWeekendPrice} /></th>
                        <th><Selected price={secondWeekendPrice} /></th>
                        <th><Selected price={thirdWeekendPrice} /></th>
                    </tr>
                    <tr>
                        <th>Dodatkowe dziecko</th>
                        <th><Selected price={firstPackageChild} /></th>
                        <th><Selected price={secondPackageChild} /></th>
                        <th><Selected price={thirdPackageChild} /></th>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                < BirthDate />
            </div>
            <div className={"additives"}>
                <Addition name={"Animator"} price={animator}/>
                <Addition name={"Tron dla solenizanta z postacią z bajki"} price={throne}/>
                <Addition name={"Balon dla każdego zaproszonego dziecka (helowe)"} price={balloons}/>
                <Addition name={"Dodatkowe atrkacje - malowanie buzi, warkoczyki, tatuaże (od dziecka)"} price={attractions}/>
            </div>
            <div className={"total"}>
                <h1>Razem: <span>.....</span></h1>
            </div>
        </form>
        </div>
    )
}