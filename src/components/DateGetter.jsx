import React from 'react'
import Dates from '../data/data.json'

function DateGetter({data, setData}) {
    const filteredList = []
    const fullList = Dates.map(dates => dates)
    const randomNumber = Math.floor(Math.random() * fullList.length)
    console.log(randomNumber)
    Dates.map((date) => (
      data.type == date.type ? 
      filteredList.push(date) : null
    ))


    function generateDate(){
        if(filteredList.length == 0 || data.type == "no-filter") {
            console.log(fullList[2])
        }
    }

    return (
    <div>
      <button onClick={generateDate}>Wylosuj</button>
    </div>
  )
}

export default DateGetter
