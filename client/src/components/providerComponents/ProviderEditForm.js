import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProviderDetail.css";

const ProviderEditForm = ({ existingValues, onSave }) => {
  const [providerName, setProviderName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pickUpSpot, setPickUpSpot] = useState("");
  const [contact, setContact] = useState("");
  const [products, setProducts] = useState([]);
  const [availible, setAvailible] = useState(false);

  const [productToAdd, setProductToAdd] = useState("");

  useEffect(() => {
    if (existingValues) {
      setProviderName(existingValues.providerName);
      setAddress(existingValues.address);
      setCity(existingValues.city);
      setPickUpSpot(existingValues.pickUpSpot);
      setContact(existingValues.contact);
      setProducts(existingValues.products);
    }
  }, [existingValues]);

  function onInputUpdate(event, setter) {
    let newValue = event.target.value;
    setter(newValue);
  }

  async function postData() {
    let newProvider = {
      providerName,
      address,
      city,
      contact,
      products,
      pickUpSpot,
      availible,
    };
    console.log("Saving provider", newProvider);
    await onSave(newProvider);
  }

  function onAddProduct() {
    let newProducts = [...products];
    newProducts.push(productToAdd);
    setProductToAdd("");
    setProducts(newProducts);
  }

  function onRemoveProduct(index) {
    console.log("removing product at index", index);
    let newProducts = [...products];
    newProducts.splice(index, 1);
    console.log("products are now", newProducts);
    setProducts(newProducts);
  }

  let url = window.location.pathname;
  let params = useParams();
  let id = params.id;

  return (
    <div>
      <h2>Edit Provider Details</h2>
      <div className="detail-fields">
        <label className="field-title">Provider Name</label>
        {url === "/register/provider" ? (
          <input
            value={providerName}
            onChange={(event) => onInputUpdate(event, setProviderName)}
          />
        ) : (
          <div>{providerName}</div>
        )}

        <label className="field-title">Address</label>
        {url === "/register/provider" ? (
          <input
            value={address}
            onChange={(event) => onInputUpdate(event, setAddress)}
          />
        ) : (
          <div>{address}</div>
        )}

        <label className="field-title">City</label>
        {url === "/register/provider" ? (
          <input
            value={city}
            onChange={(event) => onInputUpdate(event, setCity)}
          />
        ) : (
          <div>{city}</div>
        )}
      </div>
      {/* above is edited on the registration page */}
      {/* below is edited on the provider edit page */}
      {(url === "/provider/", { id }, "/edit") && (
        <div class="detail-fields">
          <label className="field-title">Contact</label>
          <input
            value={contact}
            onChange={(event) => onInputUpdate(event, setContact)}
          />
          <label className="field-title">Pick Up Spot</label>
          <input
            value={pickUpSpot}
            onChange={(event) => onInputUpdate(event, setPickUpSpot)}
          />
          <label className="field-title">Products</label>
          <div className="field-value">
            {products.map((product, index) => (
              <div key={index}>
                {product}
                <button
                  onClick={() => {
                    onRemoveProduct(index);
                  }}
                >
                  x
                </button>
              </div>
            ))}
            <div>
              <input
                value={productToAdd}
                onChange={(event) => onInputUpdate(event, setProductToAdd)}
              />
              <button onClick={onAddProduct}>Add Product</button>
            </div>
          </div>

          <label className="field-title" for="cb1">
            Availible
          </label>
          <input
            className="field-value"
            id="cb1"
            type="checkbox"
            value={true}
            onChange={(event) => onInputUpdate(event, setAvailible)}
          />
        </div>
      )}

      <button onClick={postData}>Save Provider</button>
    </div>
  );
};

export default ProviderEditForm;
