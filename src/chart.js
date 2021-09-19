import React from 'react';
import { Fragment  } from 'react';
import data from './data.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationTriangle, faExclamationCircle, faThumbsUp } from "@fortawesome/free-solid-svg-icons"


const Card = (props) => {

    const colorSwitch = (status) => {
        let condition = setStatus(status)
        if (condition === "Normal") {
            return "green"
        } if (condition === "Critical") {
            return "red"
        } if (condition === "Warning") {
            return "orange"
        }
    }

    const setStatus = (condition) => {
        if (condition === "NORM") {
            return "Normal"
        } if (condition === "CRIT") {
            return "Critical"
        } if (condition === "WARN") {
            return "Warning"
        }
    }
    const setIcon = (condition) => {
        let status = setStatus(condition)
        if (status === "Normal") {
            return <span className="icon green"><FontAwesomeIcon icon={faThumbsUp} size="3x"/></span>
        } if (status === "Warning") {
            return <span className="icon yellow" style={{animation: "glow 1s infinite alternate;"}}><FontAwesomeIcon icon={faExclamationTriangle} size="3x"/> </span>
        } if (status === "Critical") {
            return <span className="icon red"><FontAwesomeIcon icon={faExclamationCircle} size="3x"/></span>
        }
    }

    const checkForSalesRep = (condition) => {
        if (condition === "Sales Representative") {
            return "Sales Rep."
        }
        else {
            return condition
        }
    }

return (
    <ul>
        {props.data.map((item) => (
            <Fragment key={item.name}>
                <li>
                    <div className ="card">
                        <div clasName="card-wrapper">
                            <div className="card-header">
                                <h1>{checkForSalesRep(item.name)}</h1>
                            </div>
                            <div className="card-content">
                                <div className="card-info">
                                    <h2>{item.region}</h2>
                                </div>
                                <div className="status-icon">
                                    {setIcon(item.status)}
                                </div>
                            </div>
                        </div>
                        <div className="alertStatus" style={{backgroundColor: colorSwitch(item.status)}}>
                            Status: {setStatus(item.status)}
                        </div> 
                    </div>
                    {item.children?.length && <Card data={item.children}/>}
                </li>
            </Fragment>
        ))}
    </ul>
);
};

const Chart = () => {

    return (
        <div className="org-tree">
            <Card data={data}/>
        </div>
    );
};

export default Chart;