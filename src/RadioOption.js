import './Option.css';
import React, { useState } from 'react';
import { FormControlLabel, Radio, FormLabel, RadioGroup, FormControl } from '@material-ui/core';


export default function RadioOption() {

    const [selectedValue, setSelectedValue] = useState("");

    const radioClicked = (event) => {
        setSelectedValue(event.target.value);
        console.log(event.target.value)
    };

    return (
        <div className="radio-container">
            <RadioGroup onChange={radioClicked}>
                <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                <FormControlLabel value="male" control={<Radio color="primary"/>} label="Male" />
                <FormControlLabel value="other" control={<Radio color="primary"/>} label="Other" />
            </RadioGroup>
        </div>
    );
};

