import React, {useState} from "react"

// import {Additives} from "./Additives";
// import {BirthDate} from "../BirthDate/BirthDate";
// import {SendingOffer} from "./SendingOffer";
// import {PackagePrices} from "./PackagePrices";
import {Addition} from "./Addition";
import Slider from "react-smooth-range-input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Selected} from "./Selected";

export const ChooseYourPackage = () => {

    const [startDate, setStartDate] = useState(new Date());

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
            <form className={"chooseYourPackage__form"}>
                {/*< PackagePrices />*/}
                <div >
                    <table className={"form-table"}>
                        <tbody>
                        <tr className={"header-cells"}>
                            <th className={"ten-kids"}>Pakiet dla 10 dzieci</th>
                            <th className={"piggy"}>Pakiet prosiaczek</th>
                            <th className={"tiger"}>Pakiet tygrsek</th>
                            <th className={"pooh"}>Pakiet puchatek</th>
                        </tr>
                        <tr >
                            <th className={"week-days"}>Poniedziałek - czwartek</th>
                            <th><Selected price={firstWeekPrice} /></th>
                            <th><Selected price={secondWeekPrice} /></th>
                            <th><Selected price={thirdWeekPrice} /></th>
                        </tr>
                        <tr >
                            <th className={"weekend-days"}>Piątek - niedziela</th>
                            <th><Selected price={firstWeekendPrice} /></th>
                            <th><Selected price={secondWeekendPrice} /></th>
                            <th><Selected price={thirdWeekendPrice} /></th>
                        </tr>
                        <tr>
                            <th className={"extra-kid"}>Dodatkowe dziecko</th>
                            <th><Selected price={firstPackageChild} /></th>
                            <th><Selected price={secondPackageChild} /></th>
                            <th><Selected price={thirdPackageChild} /></th>
                        </tr>
                        </tbody>
                    </table>
                    <div>
                        <img src="../../img/birthday_table.svg" alt="birthday-table"/>
                    </div>
                </div>
                {/*< BirthDate />*/}
                <div className={"birth-date"}>
                    <div className={"number-of-kids"}>
                        <h2>Liczba dzieci:</h2>
                        <Slider value={1} min={1} max={30} />
                    </div>
                    <div className={"kid-name"}>
                        <h2>Imię solenizanta:</h2>
                        <label className={"text"}>
                            <input type="text"/>
                        </label>
                    </div>
                    <div className={"birthday-party-date"}>
                        <h2>Data imprezy:</h2>
                        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                    </div>
                </div>
                {/*< Additives />*/}
                <div className={"additives"}>
                    <h1>Dodatki:</h1>
                    <Addition name={"Animator"} price={animator}/>
                    <Addition name={"Tron dla solenizanta z postacią z bajki"} price={throne}/>
                    <Addition name={"Balon dla każdego zaproszonego dziecka (helowe)"} price={balloons}/>
                    <Addition name={"Dodatkowe atrakcje - malowanie buzi, warkoczyki, tatuaże (od dziecka)"} price={attractions}/>
                </div>
                < div className={"form-total"}> <h1>RAZEM: <span>.....</span></h1> </div>
                {/*< SendingOffer />*/}
                <div className={"contact-details"}>
                    <div className={"contact-details__name"}>
                        <h1>Dane kontaktowe:</h1>
                        <label className={"checkbox"}>
                            Imię
                            <input type="text"/>
                        </label>
                    </div>
                    <div className={"contact-details__e-mail"}>
                        <label className={"text"}>
                            E-mail
                            <input type="email"/>
                        </label>
                    </div>
                    <div className={"contact-details__phone"}>
                        <label className={"birthdayDate"}>
                            Telefon kontaktowy
                            <input type="text"/>
                        </label>
                    </div>
                    <div className={"agreements"}>
                        <label className={"advertisement"}>
                            <input type="checkbox"/>
                            <span></span>
                            Chcę otrzymywać informację o ekstra promocjach. Wyrażam zgodę na przetwarzanie moich danych osobowyh do celów marketingowych. Nie spamujemy!
                        </label>
                        <label className={"rodo"}>
                            <input type="checkbox"/>
                            <span></span>
                            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przygotowania i przedstawienia mi oferty na organizację Imprezy Urodzinowej. Zapoznałem się i akcetpuję Politykę Prywatnośći firmy.
                        </label>
                    </div>
                    <button>Wyśli zapytanie</button>
                    <p>Skontaktujemy się z Tobą w ciągu 24h</p>
                </div>
            </form>
        </div>
    )
}