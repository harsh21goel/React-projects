import { useState } from "react"

function App() {
  let [age,setage] =useState()
const userage=()=>{
  let a =document.getElementById("date").value

  setage(a)
  console.log(age);

}

  return (
    <>
    <div>
      <input type="date" id="date"/>
      <input type="button"value="click me" onClick={userage}/>
    </div>

    </>
  )
}

export default App

