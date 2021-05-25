import React, {useState} from "react"

import Slider from 'react-smooth-range-input';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export const BirthDate =({onAdd})=> {

    const [birthdayDate, setBirthdayDate] = useState(new Date());
    const [kidName, setKidName] = useState('');
    const [numberOfKids, setNumberOfKids] = useState('1');
    const [hour, setHour] = useState('');

    const handleNumberOfKids =(selectedNumber) => {

         setNumberOfKids(selectedNumber)
    }

    const handleName =(event) => {

        setKidName(event.target.value)
    }

    const handleDate =(date) => {

        setBirthdayDate(date)
    }

    const handleHour = (event) => {

        setHour(event.target.value)
    }


    onAdd(numberOfKids, kidName, birthdayDate, hour)


    return (
        <div className={"birth-date"}>
            <div className={"number-of-kids"}>
                <h2>Liczba dzieci:</h2>
                <Slider value={numberOfKids} min={1} max={30} onChange={handleNumberOfKids} />
            </div>
            <div className={"kid-name"}>
                <h2>Imię solenizanta:</h2>
                <label className={"text"}>
                    <input value={kidName} onChange={handleName} type="text"/>
                </label>
            </div>
            <div className={"birthday-party-date"}>
                <h2>Data imprezy:</h2>
                <DatePicker selected={birthdayDate} onChange={handleDate} />
            </div>
            <div>
                <select value={hour} onChange={handleHour} >
                    <option value="Wybierz godzinę">Wybierz godzinę</option>
                    <option value="11.00 - 14.00">11.00 - 14.00</option>
                    <option value="14.00 - 16.00">14.00 - 16.00</option>
                    <option value="17.00 - 19.00">17.00 - 19.00</option>
                </select>
            </div>
        </div>
    )

}