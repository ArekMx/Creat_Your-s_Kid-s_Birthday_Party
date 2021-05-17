import React from "react"

import Star from "../../img/star.svg"

export const Package = ({
                            name,
                            twoHoursFun,
                            birthDayPlace,
                            invitations,
                            tablewareKids,
                            tablewareParents,
                            waterUnlimited,
                            accessories,
                            snacks,
                            juices,
                            decoration,
                            gadgets,
                            champagne,
                            discount
}) => {

    const goldStar = <img style={{color: "gold"}} src={Star} alt="star"/>

    return (
        <div className={"package"}>

            <div className={"package-check"}>
                <h3 className={"title"}>{name}</h3>
                <div className={"stars"}>
                    <span>{twoHoursFun ? goldStar : null}</span>
                    <span>{birthDayPlace ? goldStar : null}</span>
                    <span>{invitations ? goldStar : null}</span>
                    <span>{tablewareKids ? goldStar : null}</span>
                    <span>{tablewareParents ? goldStar : null}</span>
                    <span>{waterUnlimited ? goldStar: null}</span>
                    <span>{accessories ? goldStar : null}</span>
                    <span>{snacks ? goldStar : null}</span>
                    <span>{juices ? goldStar : null}</span>
                    <span>{decoration ? goldStar : null}</span>
                    <span>{gadgets ? goldStar : null}</span>
                    <span>{champagne ? goldStar : null}</span>
                    <span>{discount ? goldStar : null}</span>
                </div>
            </div>
        </div>

    )


}