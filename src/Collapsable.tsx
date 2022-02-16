import React, {useState} from "react";

function Collapsible(props: { label:any, content: any; }){
    const [isOpen, setIsOpen] = useState(false);

    return(
    <div className="collapsible"> 
        <button className="toggle" onClick={()=> setIsOpen(!isOpen)} > 
            {props.label}
        </button>
        {isOpen &&  <div className="content"> {props.content} </div>}
    </div>
    )
}

export default Collapsible;