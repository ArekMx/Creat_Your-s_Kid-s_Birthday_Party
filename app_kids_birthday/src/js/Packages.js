import React from "react"
import {Package} from "./Package";

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
            <div className={"packagesBox__description"}>
                <h2>Pakiet urodzinowy <br/>dla 10 dzieci</h2>
                <ul className={"description_list"}>
                    {
                        options.map((el, index)=> <li className={"description_list__element"} key={index}>{el}</li>)
                    }
                </ul>
            </div>
            <div className={"packagesBox__packages"}>
                <Package name={"Prosiaczek"}
                         twoHoursFun={true}
                         birthDayPlace={true}
                         invitations={true}
                         tablewareKids={true}
                         tablewareParents={true}
                         waterUnlimited={true}
                         accessories={true}
                         snacks={false}
                         juices={false}
                         decoration={false}
                         gadgets={false}
                         champagne={false}
                         discount={false}
                />
                <Package name={"Tygrysek"}
                         twoHoursFun={true}
                         birthDayPlace={true}
                         invitations={true}
                         tablewareKids={true}
                         tablewareParents={true}
                         waterUnlimited={true}
                         accessories={true}
                         snacks={true}
                         juices={true}
                         decoration={false}
                         gadgets={false}
                         champagne={false}
                         discount={false}/>
                <Package name={"Puchatek"}
                         twoHoursFun={true}
                         birthDayPlace={true}
                         invitations={true}
                         tablewareKids={true}
                         tablewareParents={true}
                         waterUnlimited={true}
                         accessories={true}
                         snacks={true}
                         juices={true}
                         decoration={true}
                         gadgets={true}
                         champagne={true}
                         discount={true}/>
            </div>
        </div>

    )


}