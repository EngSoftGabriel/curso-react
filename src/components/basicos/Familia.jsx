import React, { cloneElement } from "react";
import FamiliaMembro from './FamiliaMembro'

export default props => {
    return (
        <div>
           {props.children.map((child) => {
                return cloneElement(child, props)
           })}
        </div>
    )
}