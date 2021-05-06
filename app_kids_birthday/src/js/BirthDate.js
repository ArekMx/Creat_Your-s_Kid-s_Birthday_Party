import React, {useState} from "react"

import Slider from 'react-smooth-range-input';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export const BirthDate =()=> {

    const [startDate, setStartDate] = useState(new Date());

    console.log(startDate)

    return (
        <>
            <div>
                <h2>Liczba dzieci</h2>
            </div>
            <div>
                <Slider value={1} min={1} max={30} />
            </div>
            <div>
                <h2>Imię solenizanta</h2>
            </div>
            <div>
                <label className={"text"}>
                    <input type="text"/>
                </label>
            </div>
            <div>
                <h2>Data imprezy</h2>
            </div>
            <div>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            </div>
        </>


    )

}