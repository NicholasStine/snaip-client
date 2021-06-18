import React, { useState } from 'react';
import escape_val_img from '../escape_verification_code.png';

const EscapeVerification = () => {
    const [userInput, setUserInput] = useState("");
    const [filteredInput, setFilteredInput] = useState("");

    const checkEscape = (input_string) => {
        let combined_string = '';
        let sliced_input = input_string.split("'");

        for (const i in sliced_input) {
            combined_string = combined_string + sliced_input[i];
            if (i < sliced_input.length - 1) { 
                combined_string = combined_string + "\\'";
            }
        }

        sliced_input = combined_string.split('"');
        combined_string = '';
        for (const i in sliced_input) {
            combined_string = combined_string + sliced_input[i];
            if (i < sliced_input.length - 1) { 
                combined_string = combined_string + '\\"';
            }
        }

        setFilteredInput(combined_string);
        console.log(combined_string);
    }

    const onInputChange = (e) => {
        setUserInput(e.target.value);
    }

    const onExtCheckChange = (e) => {
        console.log("It's not the KGB, but it's a start!");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        checkEscape(userInput);
    }

    return (
        <div className="form-background m-3 p-2">
            <form onSubmit={onSubmit}>
                <label className="mr-2">
                    Test Input: 
                </label>
                <input onChange={onInputChange} />
                <button className="btn-outline">Submit for Escape Character Cleanup</button>
            </form>
            <div>
                <div>
                    <p>
                        {filteredInput}
                    </p>
                </div>
            </div>
            <label>
                The code is two simple for loops that theck first for single quotes, then double quotes. Every time a double or single quote is found, a backslash is added before it to prevent the quoteation mark from interfering syntactically with the server side code / database queries.
            </label>
            <img alt=" " src={escape_val_img} />
            <p className="mb-5">Turns out I also need a validator for input tags with type='file'</p>
            <p className="mb-5">Try selecting one or more of the extensions below, then upload a file of any extension and watch the extionsion validation code reject or deny your input</p>
            <input 
                type='checkbox'
                name='.png'
                onClick={onExtCheckChange}/>
            <input 
                type='checkbox'
                name='.jpg'
                onClick={onExtCheckChange}/>
            <input 
                type='checkbox'
                name='.jpeg'
                onClick={onExtCheckChange}/>
            <input 
                type='checkbox'
                name='.pdf'
                onClick={onExtCheckChange}/>
        </div>
    );
}

export default EscapeVerification;