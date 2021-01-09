import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'


function App() {

  const [Arr, setArr] = useState([]);

  useEffect(() => {
    if (Arr.length < 3) {
      setArr([
        ...Arr,
        {
          Id: Math.random().toString().substr(4, 9),
          Address: '',
          Country: '',
          State: '',
          City: '',
        }
      ])
    }
  }, [])

  const Addhandler = () => {
    if (Arr.length < 3) {
      setArr([
        ...Arr,
        {
          Id: Math.random().toString().substr(4, 9),
          Address: '',
          Country: '',
          State: '',
          City: '',
        }
      ])
    }
  }

  const handlermain = (e, id) => {
    const Index = Arr.findIndex((item) => item.Id === id)
    Arr[Index][e.target.name] = e.target.value
  }

  const Savehandler = () => {
    if (Arr.length < 4) {
      setArr([...Arr]);
    }
    document.getElementById('table').style.display = 'inline-table';
  }

  const Dellhandler = (e,id) => {
    setArr(Arr.filter((item) => item.Id !== id))
  }


  return (
    <>
      {Arr && Arr.map((item) => {
        return (
          <div>
            <label>
              <textarea type='text' placeholder='Enter a value' name='Address' onChange={(e) => { handlermain(e, item.Id) }} />
            </label><br />
            <select name='Country' onChange={(e) => { handlermain(e, item.Id) }}>
              Country:
                <option disabled selected="selected">---Selected City---</option>
              <option value='India'>India</option>
              <option value='US'>US</option>
              <option value='Europe'>Europe</option>
            </select><br />
            <select name='State' onChange={(e) => { handlermain(e, item.Id) }}>
              State:
                <option disabled selected="selected">---Selected City---</option>
              <option value='Gujrat'>Gujrat</option>
              <option value='London'>London</option>
              <option value='Spain'>Spain</option>
            </select><br />
            <select name='City' onChange={(e) => { handlermain(e, item.Id) }}>
              City:
                <option disabled selected="selected">---Selected City---</option>
              <option value='Surat'>Surat</option>
              <option value='Camden'>Camden</option>
              <option value='Seville'>Seville</option>
            </select><br />
            {(Arr.length > 1 && (<button onClick={(e) => {Dellhandler(e, item.Id)}}>Delete</button>))}
          </div>
        )
      })}
      <button onClick={() => { Addhandler() }}>Add Address</button>
      <button onClick={() => { Savehandler() }}>Save</button>

      <table id='table'>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Address</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
          </tr>
          {Arr && Arr.map((value, i) => {
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

export default App
