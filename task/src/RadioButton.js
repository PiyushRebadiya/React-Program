import React, { useState } from 'react'

function RadioButton() {
    const [Male, setMale] = useState(true);
    const [Female, setFemale] = useState(false);

    const maleHandler = (e) => {
        setMale(!Male)
    }
    const femaleHandler = () => {
        setFemale(!Female)
    }
    return (
        <div>
            <div><span> Gender: </span>
            Male <input type='radio' value={Male} onChange={maleHandler}/>
          Female <input type='radio' value={Female} onChange={femaleHandler}/><br/><br/>
            </div>

        </div>
    )
}

export default RadioButton
