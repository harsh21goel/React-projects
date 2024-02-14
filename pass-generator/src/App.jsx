import { useState, useCallback,useEffect,useRef } from "react";

import "./App.css";

function App() {
  const [lenght, setlenght] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [Password, setpassword] = useState("");
  const passref=useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()";
    for (let i = 1; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [lenght, numberAllowed, characterAllowed, setpassword]);

  const copyPassToClipboard=useCallback(()=>{
    passref.current?.select();
    window.navigator.clipboard.writeText(Password)
  }, [Password])
useEffect(()=>{passwordGenerator()},[lenght,numberAllowed, characterAllowed, passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8  text-orange-500 bg-gray-800">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3 my-5 rounded-l-lg"
            placeholder="password"
            readOnly
            ref={passref}
          />
          <button  onClick={copyPassToClipboard}className="outline-none bg-blue-900 text-white px-3 my-4 rounded-r-lg">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className=" flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={lenght}
              className="cursor-pointer"
              onChange={(e) => {
                setlenght(e.target.value);
              }}
            />
            <label htmlFor="">Lenght:{lenght}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              onChange={() => {
                setcharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
