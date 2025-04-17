import { useState } from "react"
import Header from "./components/Header"
import DateGetter from "./components/DateGetter"
import Buttons from "./components/Buttons"
function App() {
  const [data, setData] = useState({type : "no-filter", paid : false, location: "outdoor"})
  const filterReset = {type: "no-filter", paid : null, location : null}

  return (
    <main className="flex justify-center flex-col items-center gap-4">    
      <Header type={data.type}></Header>

      <Buttons data={data} setData={setData}></Buttons>

      <DateGetter data={data} setData={setData}></DateGetter>
    </main>
  )
}

export default App
