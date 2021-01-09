import React, { useState } from 'react'

function CheckBox() {
    const [Swimming, setSwimming] = useState(false);
    const [Dancing, setDancing] = useState(false);
    const [Singing, setSinging] = useState(false);

    const swimHandler = (e) => {
        setSwimming(!Swimming)
    }
    const danceHandler = (e) => {
        setDancing(!Dancing)
    }
    const singHandler = (e) => {
        setSinging(!Singing)
    }



    return (
        <div>
           <span>Hobby:  Swimming: <input type='checkbox' value={Swimming} onChange={swimHandler} />
            Dancing: <input type='checkbox' value={Dancing} onChange={danceHandler} />
            Singing: <input type='checkbox' value={Singing} onChange={singHandler} /><br/><br/></span>
        </div>
    )
}

export default CheckBox
