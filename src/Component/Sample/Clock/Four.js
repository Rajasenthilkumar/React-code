import React ,{useEffect, useState,useRef} from 'react'

function Four() {
    const [Name,setName] =useState("Raja")
    const [age,setage] = useState(17)
    const [stack,setstack]=useState(
     [
        "React",
        "Konva Design",
        "Javascript ",
        "React"
     ]   
    )
    const value1 = useRef(null);
   const  clicked= e =>{ 
  setage(age+1);
};
const submitForm =(e) =>{
e.preventDefault();
};
const changename = (e) =>{
setName(e.target.value)
};
console.log(value1);

useEffect(()=>{
    console.log("initilation or api /ajax call /Component did mount")
    console.log(value1);
        value1.current.focus();

    return (()=>
    {console.log("componentWillUnmount")});
},[age])

  return (
    <div>Four
        <p>Name:{Name}</p>
        <p>Age:{age}</p>
        {/* <p>Vote:{(age<18 )? 'not eligible for vote ':' Eligible for vote'}</p> */}
        <p>Vote:{(age<18) && "Not eligible for vote"}
        {(age>18) && "Not eligible for vote"}
        </p>
        <p>
            <ul>
                { stack.map((item,i) => ( 
                         <li key={i}>{item }</li>) )
                }
            </ul>
        </p>
        <form onSubmit={submitForm } > 
        <input type ="text" placeholder="change your name"
        value={Name}onchange={changename}  ref ={value1}/>
        <button type ="submit">change name</button>
        </form>
    <button onClick={clicked}>click </button>
    </div>
  )
}

export default Four