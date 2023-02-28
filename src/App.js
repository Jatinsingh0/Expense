import React, {useState, useEffect} from "react";

import Expenses from "./components/Expenses";

import Ex from "./components/Form/ex";


let dExpenses = [
    {
        id: 'e1',
        date: new Date(2024, 0, 21),
        title: 'JAcket',
        amount: 699
    },

    {
        id: 'e2',
        date: new Date(2024, 1, 28),
        title: 'shirt',
        amount: 499
    },

    {
        id: 'e1',
        date: new Date(2024, 11, 14),
        title: 'shoes',
        amount: 999
    },
]

const getLocalItems = () => {
    let list = localStorage.getItem("lists");
    if(list){
       return JSON.parse(localStorage.getItem('lists'));
    } else{
        return [];
    }
}

const App = () => {
    
    
     const [expenses, setExpenses] = useState(dExpenses);

    const addExData = (get) => {
        const updatedEx = [get, ...expenses];
        setExpenses(updatedEx);
        
    };
    

    useEffect(() => {
     localStorage.setItem("lists", JSON.stringify(expenses))
    },[expenses])

    return (
        <div>
            <Ex onAddExData = {addExData} /> 
            <Expenses item = {expenses} />         
        </div>         
    );
}

export default App;