import React, { useState } from 'react'


function Salary() {
    const [Salary, setSalary] = useState('');

    const salaryHandler = (e) => {
        setSalary(e.target.value)
    }


    return (
        <>
        </>
    )
}
export default Salary;
