import { useState } from "react"
import Header from "./components/Header"
import Dates from './data/data.json'
function App() {
  const [data, setData] = useState({type : "no-filter", paid : false, location: "outdoor"})
  const filteredList = []
  Dates.map((date) => (
    data.type == date.type ? 
    filteredList.push(date) : null
  ))
  const paid = filteredList.filter((item) => item.paid == false)

  return (
    <main className="flex justify-center flex-col items-center gap-4">    
      <Header type={data.type}></Header>
      <div className="flex gap-4">
        <button className="bg-box p-2" onClick={() => setData({...data , type : "couple"})}>Couple</button>
        <button className="bg-box p-2" onClick={() => setData({...data , type : "friends"})}>Friends</button>
      </div>
      <div className="flex gap-4">
        <button className="bg-box p-2" onClick={() => setData({...data , paid : true})}>Pieniądze</button>
        <button className="bg-box p-2" onClick={() => setData({...data , paid : false})}>Brak Pieniędzy</button>
      </div>
      <div className="flex gap-4">
        <button className="bg-box p-2" onClick={() => setData({...data , location : "indoor"})}>Wewnątrz</button>
        <button className="bg-box p-2" onClick={() => setData({...data , location : "outdoor"})}>Na zewnątrz</button>
      </div>
     
    </main>
  )
}

export default App
