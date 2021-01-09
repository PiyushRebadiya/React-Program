import React, { useState } from 'react'
import './Manish.css'

function FullTodo() {
    const [Name, setName] = useState('');
    const [NameError, setNameError] = useState(false);
    const [Age, setAge] = useState('');
    const [AgeError, setAgeError] = useState(false);
    const [Email, setEmail] = useState('');
    const [EmailError, setEmailError] = useState(false);
    const [Gender, setGender] = useState('');
    const [Hobby, setHobby] = useState([]);
    const [Country, setCountry] = useState('');
    const [Date, setDate] = useState('');
    const [Salary, setSalary] = useState('');
    const [SalaryError, setSalaryError] = useState(false);
    const [Arr, setArr] = useState([]);


    const nameHandler = (e) => {
        let item = e.target.value
        if (item.length < 10) {
            setNameError(true)
        } else {
            setNameError(false)
        }
        setName(e.target.value)
    }

    const ageHandler = (e) => {
        let item = e.target.value
        if (item < 19) {
            setAgeError(true)
        } else {
            setAgeError(false)
        }
        setAge(e.target.value.substr(0, 3))
    }

    const emailHandler = (e) => {
        let item = e.target.value
        let symbol = item.indexOf('@')
        let dot = item.lastIndexOf('.')
        if (symbol < 1) {
            setEmailError(true)
        } else if (dot <= symbol + 4) {
            setEmailError(true)
        } else if (dot === item.length - 1) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
        setEmail(e.target.value)
    }

    const genderHandler = (e) => {
        setGender(e.target.value)
    }

    const hobbyHandler = (e) => {
        setHobby([...Hobby, e.target.value])
    }

    const countryHandler = (e) => {
        setCountry(e.target.value)
    }

    const dateHandler = (e) => {
        setDate(e.target.value)
    }

    const salaryHandler = (e) => {
        let item = e.target.value
        if (item.length < 4) {
            setSalaryError(true)
        } else {
            setSalaryError(false)
        }
        setSalary(e.target.value.substr(0, 5))
    }

    const AddValue = (e) => {
        e.preventDefault();
        if (Name === '') {
            alert('Please Enter Your Name')
        } else if (Age === '') {
            alert('Please Enter Age')
        } else if (Email === '') {
            alert('Please Enter Email Id')
        } else if (Gender === '') {
            alert('Select Gender')
        } else if (Hobby === '') {
            alert('Select Hobby')
        } else if (Country === '') {
            alert('Select Country')
        } else if (Date === '') {
            alert('Add Date...')
        } else if (Salary === '') {
            alert('Enter Your Salary')
        } else {
            setArr((oldItem) => [...oldItem,
            {
                name: Name,
                age: Age,
                email: Email,
                gender: Gender,
                hobby: Hobby,
                country: Country,
                date: Date,
                salary: Salary,
            }])
            setName('');
            setAge('');
            setEmail('');
            setGender('');
            setHobby('');
            setCountry('');
            setDate('');
            setSalary('');
        }
        document.getElementById('table').style.display = 'inline-table';
    }

    return (
        <>
            <div className='container'>
                <form>
                    Name:
                 <input
                        type='text'
                        name='Name'
                        placeholder='Add Name...'
                        value={Name}
                        onChange={nameHandler} />
                    <br />
                    {NameError ? <p style={{ color: 'red', fontSize: '15px' }}>Sort Name Not Valid</p> : ''}
                    <br />
                Age: <input
                        type='number'
                        placeholder='Age...'
                        value={Age}
                        onChange={ageHandler} /><br />
                    {AgeError ? <p style={{ color: 'red', fontSize: '15px' }}>18 Years Valid</p> : ''}
                    <br />
                Email: <input
                        type='email'
                        placeholder='Add Email Address...'
                        value={Email}
                        onChange={emailHandler} /><br />
                    {EmailError ? <p style={{ color: 'red', fontSize: '15px' }}>Plz Correct Email</p> : ''}
                    <br />
                    <span> Gender: </span>
                    <input type='radio'
                        value='Male'
                        name='gender'
                        onChange={genderHandler} /> Male
                <input type='radio'
                        name='gender'
                        value='Female'
                        onChange={genderHandler} /> Female<br /><br />
                    <span>Hobby: <br />
                        <input type='checkbox'
                            name='Swimming'
                            value='Swimming'
                            onChange={hobbyHandler} />Swimming

                <input type='checkbox'
                            value='Dancing'
                            name='Dancing'
                            onChange={hobbyHandler} /> Dancing
                <input type='checkbox'
                            value='Singing'
                            name='Singing'
                            onChange={hobbyHandler} />  Singing<br /><br />
                    </span>
                Country:
                <select onChange={countryHandler}  >
                        <option disabled selected="selected">
                            ---Selected Country---</option>
                        <option>India</option>
                        <option>Japan</option>
                        <option>America</option>
                        <option>Europe</option>
                    </select>
                    <br /><br />
               BirthDate:
               <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        onChange={dateHandler} />
                    <br /><br />
                Salary:
                 <input
                        type='number'
                        placeholder='Add Salary...'
                        value={Salary}
                        onChange={salaryHandler} />
                    <br />
                    {SalaryError ? <p style={{ color: 'red', fontSize: '15px' }}>Only Thousand Salary</p> : ''}
                    <br />
                    <button
                        type='submit'
                        onClick={AddValue}>
                        Add Profile
                 </button><br />
                </form>
                <table id='table'>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Hobby</th>
                            <th>Country</th>
                            <th>BirthDate</th>
                            <th>Salary</th>
                        </tr>
                        {Arr.map((item) => {
                            return (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.hobby.join(',')}</td>
                                    <td>{item.country}</td>
                                    <td>{item.date}</td>
                                    <td>{item.salary}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default FullTodo;
