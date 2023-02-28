import React from "react";
import Form from "./form"
import './ex.css';


const Ex = (props) =>{

    const saveFormData = (getformData) => {
        const data = {
            ...getformData,
            id: Math.random().toString()
        }
        props.onAddExData(data);
        console.log(data);
    };

       return (
        <div className = 'new-expense'>
            <Form onSaveFormData = {saveFormData} />
        </div>
       );
}

export default Ex;