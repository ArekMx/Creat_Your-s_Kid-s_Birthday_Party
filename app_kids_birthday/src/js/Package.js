import React from "react"

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

    // const star = '<i class=\"fas fa-star\"></i>'
    // const star = '<img src={"./"}>'

    return (
        <div className={"package"}>
            {/*<img src="../img/balloons_packages.png"/>*/}
            <div className={"package-check"}>
                <h3 className={"title"}>{name}</h3>
                <div className={"stars"}>
                    <span>{twoHoursFun ? <img src="../img/star.svg" alt=""/> : null}</span>
                    <span>{birthDayPlace ? ("*") : null}</span>
                    <span>{invitations ? ("*") : null}</span>
                    <span>{tablewareKids ? ("*") : null}</span>
                    <span>{tablewareParents ? ("*") : null}</span>
                    <span>{waterUnlimited ? ("*") : null}</span>
                    <span>{accessories ? ("*") : null}</span>
                    <span>{snacks ? ("*") : null}</span>
                    <span>{juices ? ("*") : null}</span>
                    <span>{decoration ? ("*") : null}</span>
                    <span>{gadgets ? ("*") : null}</span>
                    <span>{champagne ? ("*") : null}</span>
                    <span>{discount ? ("*") : null}</span>
                </div>
            </div>
        </div>

    )


}