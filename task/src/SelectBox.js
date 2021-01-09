import React, { useState } from 'react'

function SelectBox() {
    const [Country, setCountry] = useState('');

    const countryHandler = (e) => {
        setCountry(e.target.value)
    }
    return (
        <div>
            Country:<select onChange={countryHandler}>
                <option disabled selected="selected">---Selected Country---</option>
                <option>India</option>
                <option>Japan</option>
                <option>America</option>
                <option>Europe</option>
            </select><br /><br />
            
        </div>
    )
}

export default SelectBox
