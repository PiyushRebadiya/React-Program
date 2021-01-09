import React, { useState, useEffect } from 'react'
import './App.css'

function Task1() {
    const [blank, setBlank] = useState([]);

    useEffect(() => {
        if (blank.length < 5) {
            setBlank([
                ...blank,
                {
                    Address: '',
                    Country: '',
                    State: '',
                    City: '',
                    Id: Math.random().toString().substr(4, 9),
                }
            ])
        }
    }, [])

    const AddCountry = () => {
        if (blank.length < 5) {
            setBlank([
                ...blank,
                {
                    Address: '',
                    Country: '',
                    State: '',
                    City: '',
                    Id: Math.random().toString().substr(4, 9),

                }
            ])
        }
    };

    const SaveCountry = () => {
        if (blank.length < 6) {
            setBlank([...blank]);
        }
        document.getElementById('table').style.display = 'inline-table';
    }

    const countryItem = (e, id) => {
        const Index = blank.findIndex((item) => item.Id === id)
        // console.log(Index);
        blank[Index][e.target.name] = e.target.value
    }

    const DeleteCountry = (e, id) => {
        setBlank(blank.filter((item) => item.Id !== id))
    }

    return (
        <>
            {blank && blank.map((item) => {
                return (
                    <div>
                        <textarea
                            type='text'
                            name='Address'
                            onChange={(e) => { countryItem(e, item.Id) }}
                            placeholder='Add a Text'
                        /><br />
                        <select
                            name='Country'
                            onChange={(e) => { countryItem(e, item.Id) }}>
                            <option
                                disabled selected="selected">
                                ---Selected Counrty---
                            </option>
                            <option
                                value='India'>India
                            </option>
                            <option
                                value='US'>US
                            </option>
                            <option
                                value='Europe'>Europe
                            </option>
                        </select><br />
                        <select
                            name='State'
                            onChange={(e) => { countryItem(e, item.Id) }}>
                            <option
                                disabled selected="selected">
                                ---Selected State---
                            </option>
                            <option
                                value='Gujrat'>
                                Gujrat</option>
                            <option
                                value='London'>
                                London</option>
                            <option
                                value='Spain'>
                                Spain</option>
                        </select><br />
                        <select
                            name='City'
                            onChange={(e) => { countryItem(e, item.Id) }}>
                            <option
                                disabled selected="selected">
                                ---Selected City---
                            </option>
                            <option
                                value='Surat'>
                                Surat</option>
                            <option
                                value='Camden'>
                                Camden</option>
                            <option
                                value='Seville'>
                                Seville</option>
                        </select><br />
                        {(blank.length > 1 && (<button onClick={(e) => { DeleteCountry(e, item.Id) }}>Delete</button>))}
                    </div>
                )
            })}
            <button onClick={() => { AddCountry() }}>Add Coutry</button>
            <button onClick={() => { SaveCountry() }}>Save</button>

            <table id='table'>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Address</th>
                        <th>Country</th>
                        <th>State</th>
                        <th>City</th>
                    </tr>
                    {
                        blank && blank.map((value, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{value.Address}</td>
                                    <td>{value.Country}</td>
                                    <td>{value.State}</td>
                                    <td>{value.City}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Task1;
