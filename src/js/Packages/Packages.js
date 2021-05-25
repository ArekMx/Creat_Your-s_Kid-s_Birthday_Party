import React from "react"
import Balloons from "../../img/baloons.svg";

import {PackageElement} from "./PackageElement";


export const Packages = () => {

    const options = [
        "2-godzinna wspaniała zabawa",
        "Miejsce urodzinowe wraz z przygotowaniem i posprzątaniem po imprezie",
        "Zaprosznie w formie papierowej lub on-line",
        "Zastawa z kolorowym akcentem",
        "Zastawa dla rodziców",
        "Woda bez limitu",
        "Udostępnienie akcesoriów urodzinowych (miski, patera na tort etc.)",
        "Przekąski: ciastka, żelki, paluszki, chiipsy",
        "Soki 100%",
        "Dekoracja balonami",
        "Gadżety dla solenizanta",
        "Szampan dla 10 dzieci",
        "Zniżka na kolejne urodziny"
    ]

    return (
        <div className={"packagesBox"}>
            <table className={"package-table"}>
                <img className={"img-balloons"} src={Balloons} alt={"balloons"}/>
                <tbody>
                    <tr >
                        <th className={"ten-kids"}>Pakiet urodzinowy dla 10 dzieci</th>
                        <th className={"package-piggy"}>Prosiaczek</th>
                        <th className={"package-tiger"}>Tygrsek</th>
                        <th className={"package-pooh"}>Puchatek</th>
                    </tr>
                    < PackageElement text={options[0]} PackOne={true} PackTwo={true} PackThree={true}/>
                    < PackageElement text={options[1]} PackOne={true} PackTwo={true} PackThree={true}/>
                    < PackageElement text={options[2]} PackOne={true} PackTwo={true} PackThree={true}/>
                    < PackageElement text={options[3]} PackOne={true} PackTwo={true} PackThree={true}/>
                    < PackageElement text={options[4]} PackOne={true} PackTwo={true} PackThree={true}/>
                    < PackageElement text={options[5]} PackOne={true} PackTwo={true} PackThree={true}/>
                    < PackageElement text={options[6]} PackOne={true} PackTwo={true} PackThree={true}/>
                    < PackageElement text={options[7]} PackOne={false} PackTwo={true} PackThree={true}/>
                    < PackageElement text={options[8]} PackOne={false} PackTwo={true} PackThree={true}/>
                    < PackageElement text={options[9]} PackOne={false} PackTwo={true} PackThree={true}/>
                    < PackageElement text={options[10]} PackOne={false} PackTwo={false} PackThree={true}/>
                    < PackageElement text={options[11]} PackOne={false} PackTwo={false} PackThree={true}/>
                    < PackageElement text={options[12]} PackOne={false} PackTwo={false} PackThree={true} display={true}/>
                </tbody>
            </table>
        </div> )
    }