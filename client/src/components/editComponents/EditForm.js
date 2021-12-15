// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import ProviderEditForm from "./ProviderEditForm";
import VolunteerEditForm from "./VolunteerEditForm";
// import "./VolunteerDetail.css";

const EditForm = ({ existingValues, onSave }) => {
  console.log("userJson",existingValues)


  // function onInputUpdate(event, setter) {
  //   let newValue = event.target.value;
  //   setter(newValue);
  // }

//   async function postData() {
//     let newUser = {
//       userName,
//       address,
//       city,
//       contact,
//         products,
//         pickUpSpot,
//         available,
//       user,
//     };
//     console.log("Saving user", newUser);
//     await onSave(newVolunteer);
//   }

let user = existingValues.user
let url = window.location.pathname;

  return(
<>
{(user==="volunteer")&&
<div>
<VolunteerEditForm onSave={onSave} existingValues={existingValues} />
</div>}

{(user==="provider")&&
   <div>
    <ProviderEditForm  onSave={onSave} existingValues={existingValues} />
    </div>}

  

</>
  )
}
  export default EditForm;
