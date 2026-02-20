import React from 'react';
import { useState , useCallback , useEffect , useRef} from 'react';
import ColorChange from './component/ColorChange';
import { use } from 'react';

function App() {
  const [length, setLength] = useState(10);
  const [numberAllow, setNumberAllow] = useState(false);
  const [characterAllow, setCharacterAllow] = useState(false);
  const [Password, setPassword] = useState('');


  const passRef = useRef(null);


  const PasswordGenerator = useCallback(()=>{
    let pass="";
    let string ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllow)string +="0123456789";
    if(characterAllow)string +="!@#$%^&*()_+~`|}{[]:;?><,./-=";
    for(let i=0;  i <= length; i++){
      let char = Math.floor(Math.random()*string.length +1);
      pass += string.charAt(char);
    }
    setPassword(pass);
    
  } ,[length,numberAllow,characterAllow ,setPassword])  

  const copyPsswordCopyToClipboard = useCallback(()=>{
    passRef.current?.select();
    passRef.current.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(Password);
  },[Password.length])

  useEffect(()=>{PasswordGenerator()},[length,numberAllow,characterAllow,PasswordGenerator])

  return (
    <>

     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 text-orange-500">
      <h1 className=' text-center text-white my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg  overflow-hidden mb-4">
        <input type="text"
        value={Password}
        className='outline-none w-full py-1 px-3 bg-white text-black'
        placeholder="Password"
        readOnly
        ref={passRef}
        />
        <button 
        onClick={copyPsswordCopyToClipboard}
        className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-0.5 shrink-0 rounded-lg">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex item-center gap-x-1">
          <input type="range"
          min={9}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}/>
          <label className='gap-x2'>length :{length}</label>
        </div>
        <div className="flex text-itema-center gap-x-1">
          <input type="checkbox"
          defaultChecked={numberAllow}
          id="numberInput"
          onChange={()=>{
            setNumberAllow((prve)=> !prve)
          }}
           />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex item-center gap-xl-1">
          <input type="checkbox"
          defaultChecked={characterAllow}
          id="characterInput"
          onChange={()=>{
            setCharacterAllow((prve)=> !prve)
          }}
           />
          <label htmlFor="characterInput"> Characters</label>
        </div>
      </div>
     </div>
      <ColorChange />
    </>
  );
}

export default App;