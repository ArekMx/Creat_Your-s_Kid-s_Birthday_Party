import React, {useState, useEffect} from "react"

// import {Additives} from "./Additives";
import {addOffer, getOffers} from "../OffersAPI/OffersApi";
import {Addition} from "./Addition";
import {BirthDate} from "../BirthDate/BirthDate";
import {SendingOffer} from "./SendingOffer";
import {PackagePrices} from "./PackagePrices";
import "react-datepicker/dist/react-datepicker.css";

export const ChooseYourPackage = () => {



    //Prices extra kids
    const pricesExtraKid = {
        firstPackageChild: 29,
        secondPackageChild: 35,
        thirdPackageChild: 45,
    }

    //Prices for additives
    const extraAddition = {
        animator: {
            price: 100,
            text: "Animator"
        },
        throne: {
            price: 50,
            text: "Tron dla solenizanta z postacią z bajki"
        },
        balloons: {
            price: 10,
            text: "Balon helowy dla każdego zaproszonego dziecka"
        },
        attractions: {
            price: 9,
            text: "Dodatkowe atrakcje - malowanie buzi, warkoczyki, tatuaże"
        },
    }



    useEffect(() => {
        setTotal(pacage)
    },[])

    useEffect(()=> {
        getOffers().then(
            (data) => setOffers([...data])
        )
    }, []);



    /////////// Component - PackagePrices ////////////
    const [pacage, setPacage] = useState('');
    const [afterChoosePackage, setAfterChoosePackage] = useState(false);
    const [currentPackage, setCurrentPackage] = useState('');
    const [youChoosePackage, setYouChoosePackage] = useState('');
    const [extraKid, setExtraKid] = useState('');

    const handlePackage =(valePackage)=> {
        setPacage(valePackage);
        setAfterChoosePackage(true);
        setCurrentPackage(valePackage);

        if (valePackage === "299" || valePackage === "349")  {
            setExtraKid(pricesExtraKid.firstPackageChild);
            setYouChoosePackage("Pakiet prosiaczek");
        } else if (valePackage === "399" || valePackage === "449") {
            setExtraKid(pricesExtraKid.secondPackageChild);
            setYouChoosePackage("Pakiet tygrysek");
        } else  {
            setExtraKid(pricesExtraKid.thirdPackageChild);
            setYouChoosePackage("Pakiet puchatek ");
        }
    }




    /////////// Component - BirthDate ///////////
    const [numberOfKids, setNumberOfKids] = useState('1');
    const [kidName, setKidName] = useState('');
    const [birthdayDate, setBirthdayDate] = useState(new Date());
    const [hour, setHour] = useState('');

    const handleBirthDate =(numberOfKids, kidName, birthdayDate, hour)=> {
        setNumberOfKids(numberOfKids);
        setKidName(kidName);
        setBirthdayDate(birthdayDate);
        setHour(hour);
    }


    ////////// Component - Additives ///////////

    const [additives, setAdditives] = useState([]);

    // Prices for additives
    const [pricesPerAttractions, setPricesPerAttractions] = useState([]);
    // Prices for additives paid from the child
    const [additivesForAChild, setAdditivesForAChild] = useState([]);

    const addAddition =(valueAddition, price)=> {

        if (pacage.length !== 0) {
            setAdditivesForAChild ((prev) => {
                if (prev.indexOf(price) === -1 &&
                    valueAddition !== extraAddition.animator.text &&
                    valueAddition !== extraAddition.throne.text )
                {
                    return [...prev, price];
                }else {
                    return [...prev]
                }
            })


            setPricesPerAttractions ((prev) => {
                if (prev.indexOf(price) === -1 &&
                    valueAddition !== extraAddition.balloons.text &&
                    valueAddition !== extraAddition.attractions.text )
                {
                    return [...prev, price];
                }else {
                    return [...prev]
                }
            })

            setAdditives((prev) => {
                if (prev.indexOf(valueAddition) === -1) {
                    return [...prev, valueAddition];
                }else {
                    return [...prev]
                    // return prev.filter(el=> el !== addition);
                }
            })
            console.log(additives)
        }
    }

    //////// Component - SendingOffer /////////
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handlePersonalData =(name, email, phone)=> {
        setName(name);
        setEmail(email);
        setPhone(phone);
    }

    //-----------VALIDATION----------//

    const [validNumberOfKids, setValidNumberOfKids] = useState('');
    const [validKidName, setValidKidName] = useState('');
    const [validName, setValidName] = useState('');
    const [validEmail, setValidEmail] = useState('');
    const [validPhone, setValidPhone] = useState('');
    const [validRodo, setValidRodo] = useState('');
    const [validBirthDate, setValidBirthDate] = useState('');
    const [validHour, setValidHour] = useState('');

    const [checkedAgreement, setCheckedAgreement] = useState(false);
    const [checkedRodo, setCheckedRodo] = useState(false);
    const [redBox, setRedBox] = useState(false)

    const handleValidCheckBox = (agreement, rodo) => {
        setCheckedAgreement(agreement);
        setCheckedRodo(rodo);
    }

    const isValid =()=> {
        let valid = true

        if(numberOfKids.length === 1) {
            valid = false
            setValidNumberOfKids('Nie wybrano ilości dzieci');
        } else {
            setValidNumberOfKids('');
        }
        if(kidName.length===0) {
            valid = false
            setValidKidName('Nie ustawiono imienia dziecka');
        } else {
            setValidKidName('');
        }

        console.log(birthdayDate === new Date())

        if(birthdayDate === new Date()) {
            valid = false
            setValidBirthDate('Nie ustawiono daty urodzin');
        } else {
            setValidBirthDate('')
        }

        if(hour === '') {
            valid = false
            setValidHour('Nie ustawiono godziny urodzin');
        } else {
            setValidHour('')
        }

        if(name.length===0) {
            valid = false
            setValidName('Nie wpisano imienia opiekuna');
        } else {
            setValidName('');
        }

        if(email.length===0 || email.indexOf("@") === -1) {
            valid = false
            setValidEmail('Nie wpisano adresu meilowego lub brakuje zanku "@"');
        } else {
            setValidEmail('');
        }

        if (phone.length === 0 || !Number.isInteger(Number(phone))) {
            valid = false;
            setValidPhone('Nie wpisano numeru telefonu lub nie jest liczbą całkowitą');
        } else {
            setValidPhone('');
        }

        if (checkedRodo !== true) {
            valid = false;
            setValidRodo('Uwaga! Zgoda na przetwarzanie danych jest wymagana.')
            setRedBox(true);
        } else {
            setValidRodo('');
            setRedBox(false);
        }
        return valid
    }


    //---------- SUBMIT ----------//

    const whatPackage =(pacage)=> {
        if (pacage === "299" || pacage === "349")  {
            return pricesExtraKid.firstPackageChild
        } else if (pacage === "399" || pacage === "449") {
            return pricesExtraKid.secondPackageChild
        } else  {
            return pricesExtraKid.thirdPackageChild
        }
    }

    const kidsNumber =(data)=> {
        if (parseInt(data) >= 10) {
            return (parseInt(data) - 10) * whatPackage(pacage)
        } else {
            return 0;
        }
    }

    const totalForAdditivesAChild =(numberOfKids, additivesForAChild)=> {

        if (additivesForAChild.length !== 0) {
            let sumOfAttractions = additivesForAChild.reduce((a, b) => parseInt(a + b));
            return sumOfAttractions * numberOfKids
        }
    }

    const totalAdditivesPerAttractions =(pricesPerAttractions)=> {
        if (pricesPerAttractions.length !== 0) {
            return  pricesPerAttractions.reduce((a, b) => parseInt(a + b));
        }
    }

    const [total, setTotal] = useState('');

    // Total without attractions
    let totalPriceWithoutAttractions = parseInt(pacage) + kidsNumber(numberOfKids)

    // Total with attractions for a child
    let totalPriceWithAttractionsForAChild = totalPriceWithoutAttractions +
        totalForAdditivesAChild(numberOfKids, additivesForAChild);

    // Total with attractions for attraction
    let totalPriceWithAttractionsForAttractions = totalPriceWithoutAttractions +
        totalAdditivesPerAttractions(pricesPerAttractions);

    // Total
    let totalPrice =
        totalPriceWithoutAttractions +
        totalForAdditivesAChild(numberOfKids, additivesForAChild) +
        totalAdditivesPerAttractions(pricesPerAttractions);

    useEffect(() => {
        if (additives.length === 0) {
            setTotal(totalPriceWithoutAttractions)

        } else if (pricesPerAttractions.length === 0) {
            setTotal(totalPriceWithAttractionsForAChild)
        } else if (additivesForAChild.length === 0) {
            setTotal(totalPriceWithAttractionsForAttractions)
        } else {
            setTotal(totalPrice)
        }
    })

    const [offers, setOffers] = useState([]);

    const handleSubmit =(e)=> {
        e.preventDefault();


        const newOffer = {
            package: pacage,
            price_for_extra_kid: extraKid,
            number_of_kids: numberOfKids,
            kid_name: kidName,
            birthday_date: birthdayDate,
            hour: hour,
            additives,
            total: total,
            name: name,
            email: email,
            phone: phone,
            advertisement: checkedAgreement
        }


        if (isValid()) {
            // setOffers(prevState => [...prevState, newOffer])

            addOffer(newOffer)
                .then((newOffer)=> { setOffers((prev)=> [...prev, newOffer])
                }).catch(error => {
                console.log(error);
            });
        }




        // console.log(package)

        // setPacage('');
        // setKidName('');
        // setBirthdayDate('');
        // setName('');
        // setEmail('');
        // setPhone('');
    }
    console.log(offers)



    return (
        <div className={"chooseYourPackage"}>
            <div className={"chooseYourPackage__form"}>
                <h2>Wybierz któryś z poniższych pakietów!</h2>
                < PackagePrices onAddPack={handlePackage} currentPackage={currentPackage} youChoosePackage={youChoosePackage}/>
                {
                    afterChoosePackage ? (
                    <>
                        < BirthDate onAdd={handleBirthDate}/>

                        {/*< Additives onAdd={handleAddition()}/>*/}
                        <div className={"additives"}>
                            <h1>Wybierz extra dodatki:</h1>
                            <Addition price={extraAddition.animator.price} name={extraAddition.animator.text} onAdd={addAddition} />
                            <Addition price={extraAddition.throne.price} name={extraAddition.throne.text}  onAdd={addAddition}/>
                            <Addition price={extraAddition.balloons.price} name={extraAddition.balloons.text} onAdd={addAddition}/>
                            <Addition price={extraAddition.attractions.price} name={extraAddition.attractions.text}  onAdd={addAddition}/>
                        </div>
                        < div className={"form-total"}> <h1> Razem: {total} zł </h1> </div>
                        < SendingOffer checkBoxesValue={handleValidCheckBox} onAdd={handlePersonalData} checkBox={redBox}/>

                        <form onSubmit={handleSubmit} >
                            <p style={{color: "white"}}>{validRodo}</p>
                            <button className={"sending-offer-btn"} >Wyśli zapytanie</button>
                            <p style={{color: "red"}}>{validNumberOfKids}</p>
                            <p style={{color: "red"}}>{validKidName}</p>
                            <p style={{color: "red"}}>{validBirthDate}</p>
                            <p style={{color: "red"}}>{validHour}</p>
                            <p style={{color: "red"}}>{validName}</p>
                            <p style={{color: "red"}}>{validEmail}</p>
                            <p style={{color: "red"}}>{validPhone}</p>
                            <p>Skontaktujemy się z Tobą w ciągu 24h</p>
                        </form>
                    </>
                    ) : null
                }
            </div>
        </div>
    )
}