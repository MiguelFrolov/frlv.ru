import React from 'react'
import Item from './Item';

export default function Card(props) {
    const keys = Object.entries(props.contentObj).map(([key, value]) =>

        <div className={key} key={key}>
            {
                key === "name" ? <h1>{props.contentObj.name}</h1> :
                    key === "job" ? <h2>{props.contentObj.job}</h2> :
                        key === "email" ? <p><a href={`mailto:${props.contentObj.email}`} >{props.contentObj.email}</a></p> :
                            key === "phone" ? <p><a href={`tel:${props.contentObj.phone}`}>{props.contentObj.phone}</a></p> :
                                key === "linkedin" ? <p><a href={props.contentObj.linkedin} target="_blank">{props.contentObj.linkedin.replace("https://www.", "")}</a></p> :
                                    key === "title" ? <h3> {props.contentObj.title} </h3> :
                                        key === "description" ? <p>{props.contentObj.description}</p> :
                                            key === "image" ? <img alt={props.contentObj.title} src={require(`${props.contentObj.image}`)} /> :
                                                key === "skills" ? <p>{props.contentObj.skills.join(", ")}</p> :
                                                    Array.isArray(value) ? value.map((itemObj,index) => <React.Fragment key={index}><Item itemObj={itemObj} itemKey={index} /></React.Fragment> )  : 
                                                        <p>{value.toString()}</p> 
            }
        </div>

    );
    return (
        <div className="card">
            {keys}
        </div>
    )
}
