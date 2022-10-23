import React from 'react'


export default function Item(props) {

    const items = Object.entries(props.itemObj).map(([key, value]) =>
        <div className={key} key={key}>
            {
                key === "achievement" ? <>{props.itemObj.achievement}</> :
                    key === "stack" ? <>{props.itemObj.stack.join(", ")}</> :
                        key === "language" ? <>{props.itemObj.language}</> :
                            key === "lavel" ? <> {props.itemObj.lavel} </> :
                                key === "company" ? <>{props.itemObj.company}</> :
                                    key === "industry" ? <>{props.itemObj.industry}</> :
                                        key === "position" ? <>{props.itemObj.position}</> :
                                            key === "institution" ? <>{props.itemObj.institution}</> :
                                                key === "speciality" ? <>{props.itemObj.speciality}</> :
                                                    Array.isArray(value) ? <>{value.join(", ")}</> :
                                                        <>{value.toString()}</>
            }
        </div>
    )
    return (
        <>
            {items}
            <br />
        </>
    )
}
