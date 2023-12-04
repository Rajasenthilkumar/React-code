import { useState } from 'react';
import Listitem from './Listitem';
import './style.css';

function Form() {
    const [stack, setstack] = useState("");
    const [list, setList] = useState([]);
    const Updatestack = (e) => {
        setstack(e.target.value);
    }
    const addstack = () => {
        setList([
            ...list,{
            name:stack,
            completed:false
        }
        ]);
            setstack("");
        };
    const onDone = item =>
    {
      let newlist =list.map(Listitem => {
        if (Listitem.name === item.name ){
            return {...Listitem,completed:
            !Listitem.completed};
        }
        return Listitem;
      });
      console.log(item);
      setList(newlist);
    };
    const onDelete = item =>
    {
      let newlist =list.filter(Listitem => {
        if (Listitem.name === item.name ){
            return false;
        }
        return true;
      });
      console.log(item);
      setList(newlist);
    };
    return (
        <div>
            <p> Welcome to twilight Softwares It  solutions</p>
            <input
                type="text"
                placeholder="Add your Stack "
                value={stack}
                onChange={Updatestack}></input>
            <button onClick={addstack}>Add </button>
            {
                list.map(item => (
                <Listitem obj={item} onDone={onDone}  onDelete= {onDelete}/>
                ))

            }
        </div>
    )
}

export default Form