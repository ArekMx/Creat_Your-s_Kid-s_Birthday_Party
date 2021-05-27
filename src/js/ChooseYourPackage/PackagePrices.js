import React, {useState} from "react"

import {Selected} from "./Selected";
import BirthTableImg from "../../img/birthday_table.svg";

export const PackagePrices =({onAddPack, currentPackage, youChoosePackage})=> {

    const [pacage, setPacage] = useState('');


    const setBtn =(valuePackage)=> {

        setPacage(valuePackage);

        onAddPack(valuePackage);
    }

    const addPackage =()=> {

        onAddPack(pacage)
    }

    //Prices for package at week
    const pricesForPackageAtWeek ={
        firstWeekPrice: 299,
        secondWeekPrice: 399,
        thirdWeekPrice: 499
    }

    //Prices for package at weekend
    const pricesForPackageAtWeekend = {
        firstWeekendPrice: 349,
        secondWeekendPrice: 449,
        thirdWeekendPrice: 549
    }

    //Prices extra kids
    const pricesExtraKids = {
        firstPackageChild: 29,
        secondPackageChild: 35,
        thirdPackageChild: 45
    }


    return (
        <div className={"chooseYourPackage-box"}>
            <h2 className={"chooseYourPackage-box__title"}>Wybierz któryś z poniższych pakietów!</h2>
            <div className={"desktop-display"}>
                <div>
                    <table className={"form-table"}>
                        <tbody>
                        <tr className={"header-cells"}>
                            <th className={"ten-kids"}>Pakiet dla 10 dzieci</th>
                            <th className={"piggy"}>Pakiet prosiaczek</th>
                            <th className={"tiger"}>Pakiet tygrsek</th>
                            <th className={"pooh"}>Pakiet puchatek</th>
                        </tr>
                        <tr className={"week-days"}>
                            <th className={"week-days__title"}>Poniedziałek - czwartek</th>
                            <th><Selected price={pricesForPackageAtWeek.firstWeekPrice} onAdd={setBtn} addPackage={addPackage} currentPackage={currentPackage}/></th>
                            <th><Selected price={pricesForPackageAtWeek.secondWeekPrice} onAdd={setBtn} addPackage={addPackage} currentPackage={currentPackage}/></th>
                            <th><Selected price={pricesForPackageAtWeek.thirdWeekPrice} onAdd={setBtn} addPackage={addPackage} currentPackage={currentPackage}/></th>
                        </tr>
                        <tr className={"weekend-days"}>
                            <th className={"weekend-days__title"}>Piątek - niedziela</th>
                            <th><Selected price={pricesForPackageAtWeekend.firstWeekendPrice} onAdd={setBtn} addPackage={addPackage} currentPackage={currentPackage}/></th>
                            <th><Selected price={pricesForPackageAtWeekend.secondWeekendPrice} onAdd={setBtn} addPackage={addPackage} currentPackage={currentPackage}/></th>
                            <th><Selected price={pricesForPackageAtWeekend.thirdWeekendPrice} onAdd={setBtn} addPackage={addPackage} currentPackage={currentPackage}/></th>
                        </tr>
                        <tr className={"extra-kid"}>
                            <th>Cena za dodatkowe dziecko</th>
                            <th className={"extra-kid__piggy"}>{pricesExtraKids.firstPackageChild}zł</th>
                            <th className={"extra-kid__tiger"}>{pricesExtraKids.secondPackageChild}zł</th>
                            <th className={"extra-kid__pooh"}>{pricesExtraKids.thirdPackageChild}zł</th>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"youChoosePackage"}>
                    {
                        pacage.length !== 0 ? (
                            <span className={"youChoosePackage__whatPackage"}>Wybrałeś <br/>{youChoosePackage}!</span>
                        ) : null
                    }
                    <img className={"birth-table-img"} src={BirthTableImg} alt="birthday-table"/>
                </div>
            </div>
        </div>
    )

}