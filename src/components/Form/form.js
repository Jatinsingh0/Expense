import React, {useState} from 'react';
import './form.css';

const Form = (props) => {

    const [chngtitle, setchngtitle] = useState('');
    const [chngamount, setchngamount] = useState('');
    const [chngdate, setchngdate] = useState('');

    const changetitle = (event) => {
        setchngtitle(event.target.value);
    };

    const changeamount = (event) => {
        setchngamount(event.target.value);
    };

    const changedate = (event) => {
        setchngdate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = {
            title:chngtitle,
            amount: chngamount,
            date: new Date(chngdate)
        }
        
         props.onSaveFormData(formData);
         console.log(formData);

        setchngtitle('');
        setchngamount('');
        setchngdate('');

    };
    
    

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type = 'text' value = {chngtitle} onChange={changetitle}/>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type = 'number' value = {chngamount} min='0.01' step='0.01' onChange={changeamount} />
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type = 'date' value = {chngdate} onChange={changedate} />
            </div>
         </div>

            <div className='new-expense__actions'>
                <button type = 'submit'>Add Expense</button>
            </div>
    </form>
 );

};

export default Form; 