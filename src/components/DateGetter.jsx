import React from 'react'
import Dates from '../data/data.json'

function DateGetter({data, setData}) {
    const filteredList = []
    const fullList = Dates.map(dates => dates)
    const fullRandomNumber = Math.floor(Math.random() * fullList.length)
    const filteredRandomNumber = Math.floor(Math.random() * filteredList.length)
  

    const newList = Dates.filter((date) => {
        return (
          (!data.type || date.type === data.type) &&
          (data.paid === undefined || date.paid === data.paid) &&
          (!data.location || date.location === data.location)
        );
      });
      
      
    console.log(newList)

    function generateDate(){
        if(filteredList.length == 0 || data.type == "no-filter") {
            console.log(fullList[fullRandomNumber])
        }
    }


    console.log(data)
    return (
    <div>
      <button onClick={generateDate}>Wylosuj</button>
    </div>
  )
}

export default DateGetter
