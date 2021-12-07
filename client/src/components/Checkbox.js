import React from "react"



function CheckBox({onInputUpdate,availible,setAvailible}){
    

console.log('availible',availible)

return(
<>

<label className="field-title" for="cb1">Availible</label>
<input className="field-value" id="cb1" type ="checkbox"  value={availible} onChange={(event) => onInputUpdate(event, setAvailible) }/>

</>
)}

export default CheckBox