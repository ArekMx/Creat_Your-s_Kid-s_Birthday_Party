import React, {useState} from "react"

export const Welcome = (props) => {

    const [hideButton, setHideButton] = useState(false)
    // console.log(hideButton)

    const showPackages =()=> {

        props.onShow(true)
        setHideButton(true)
    }

    return (
        <div className={"welcome"}>
            <div className={"welcomeBox"}>
                <div className={"welcomeBox__title"}>
                    <h1>Witaj! <br/> Za pomocą narzędzia poniżej skomponuj urodziny dla swojego dziecka a My wszystko zrealizujemy,
                        tak aby były to wyjątkowa i niezapomniana impreza!</h1>
                </div>
                {
                    hideButton ? null : (
                        <div className={"welcomeBox__button"}>
                            <button onClick={showPackages}>Wybierz pakiet <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                                                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                                                     className="feather feather-gift">
                        <polyline points="20 12 20 22 4 22 4 12"></polyline>
                        <rect x="2" y="7" width="20" height="5"></rect>
                        <line x1="12" y1="22" x2="12" y2="7"></line>
                        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                    </svg></span></button>

                        </div>
                    )
                }

            </div>
        </div>

    )
}