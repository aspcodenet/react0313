import { useContext } from "react"
import { SelectedItemContext } from "./SelectedItemContext"


export const HeaderMenuItem = (props) => {
  const {selectedItem,setSelectedItem} = useContext(SelectedItemContext);
    //let css:string  = "";
//    const [css,setCss] = useState('');
    //const [age,setAge] = useState(0);

  return (
    <div>
        <button className={selectedItem === props.text ? 'selected' : '' } onClick={()=>setSelectedItem(props.text)}>
          {props.text}</button>
        
    </div>
  )
}
