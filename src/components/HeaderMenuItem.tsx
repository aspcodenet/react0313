import { useState } from "react";


export const HeaderMenuItem = ({text}) => {
    //let css:string  = "";
    const [css,setCss] = useState('');
    //const [age,setAge] = useState(0);

  return (
    <div>
        <button className={css} onClick={()=>{
            //css='selected';
            setCss('selected');
            console.log('clicked' + css);
            }}>{text}</button>
        
    </div>
  )
}
