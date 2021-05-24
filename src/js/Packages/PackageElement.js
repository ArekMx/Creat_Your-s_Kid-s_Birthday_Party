import React from "react"

import Star from "../../img/star.svg"

export const PackageElement =({text, PackOne, PackTwo, PackThree, display})=>{

    const goldStar = <img style={{color: "gold"}} src={Star} alt="star"/>

    return (
        <tr >
            <th style={{border: display ? "none" : null}} className={"column-text"}>{text}</th>
            <th className={"column-piggy"}><span className={"stars"}>{PackOne ? goldStar : null}</span></th>
            <th className={"column-tiger"}><span className={"stars"}>{PackTwo ? goldStar : null}</span></th>
            <th className={"column-pooh"}><span className={"stars"}>{PackThree ? goldStar : null}</span></th>
        </tr>

    )


}