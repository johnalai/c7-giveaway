import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Detail.css";

const VolunteerEditForm = ({ existingValues, onSave }) => {
  const [userName, setVolunteerName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [user, setUser] = useState("volunteer");

  useEffect(() => {
    if (existingValues) {
      setVolunteerName(existingValues.userName);
      setAddress(existingValues.address);
      setCity(existingValues.city);
      //   setPickUpSpot(existingValues.pickUpSpot);
      setContact(existingValues.contact);
      //   setProducts(existingValues.products);
    }
  }, [existingValues]);

  function onInputUpdate(event, setter) {
    let newValue = event.target.value;
    setter(newValue);
  }

  async function postData() {
    let newVolunteer = {
      userName,
      address,
      city,
      contact,
      // products,
      // pickUpSpot,
      // available,
      user,
    };
    console.log("Saving volunteer", newVolunteer);
    await onSave(newVolunteer);
  }

  let url = window.location.pathname;
  let params = useParams();
  let id = params.id;

  return (
    <div>
      <h2>Edit Volunteer Details</h2>

      <div>
        <div className="detail-fields">
          <label className="field-title">Volunteer Name</label>
          <input
            value={userName}
            onChange={(event) => onInputUpdate(event, setVolunteerName)}
          />

          <label className="field-title">Address</label>
          <input
            value={address}
            onChange={(event) => onInputUpdate(event, setAddress)}
          />

          <label className="field-title">City</label>
          <input
            value={city}
            onChange={(event) => onInputUpdate(event, setCity)}
          />
        </div>
     
      </div>

      <button onClick={postData}>Save Volunteer</button>
    </div>
  );
};

export default VolunteerEditForm;
