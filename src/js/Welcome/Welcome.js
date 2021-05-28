import React, {useState, useEffect} from "react"
import MainPhoto from "../../img/Mainphoto.svg"

export const Welcome = ({onShow, hidePhoto}) => {

    const [hideButtonAndImg, setHideButtonAndImg] = useState(false)

    const showPackages =()=> {

        onShow(true)
        setHideButtonAndImg(true)

    }
    useEffect(()=> {
        hidePhoto(hideButtonAndImg)
    })


    return (
        <div className={"welcome"}>
            <div className={"welcomeBox"}>
                <div className={"welcomeBox__title"}>
                    <h1>Witaj! <br/> Za pomocą narzędzia poniżej skomponuj urodziny dla swojego dziecka, a My wszystko zrealizujemy,
                        tak aby była to wyjątkowa zabawa i na długo zapamiętane chwile!</h1>
                </div>
                {
                    hideButtonAndImg ? null : (
                        <div className={"welcomeBox__button"}>
                            <button onClick={showPackages}>Wybierz pakiet </button>
                        </div>
                    )
                }
            </div>

        </div>

    )
}