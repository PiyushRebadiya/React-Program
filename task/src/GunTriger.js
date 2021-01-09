import React,{ useState } from 'react'

function GunTriger() {
    const [up, setup] = useState(1);
    const [down, setdown] = useState(100);

    const upvalue = () => {
        setup(up + 1);
    }

    const downvalue = () => {
        setdown(down - 1);
    }
    return (
        <div>
            <p>{up}</p>
            <p>{down}</p>
            <button onClick={upvalue}>Up</button>
            <button onClick={downvalue}>Down</button>
        </div>
    )
}

export default GunTriger;