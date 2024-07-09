import axios from "axios";
import { useEffect, useState } from "react";import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    product_id: "",
    product_name: "",
    product_price: "",
    product_description: "",
  });
  useEffect(() => {
    fetchData();
  }, );
  async function fetchData() {
    await axios
      .get(`https://65d582f13f1ab8c63437231c.mockapi.io/api/products/${id}`)
      .then((res) => setEditData(res.data))
      .catch((err) => console.log(err));
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://65d582f13f1ab8c63437231c.mockapi.io/api/products/${id}`,
        editData
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    navigate("/products");
  };
  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="row g-3 needs-validation"
        noValidate
      >
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltip01" className="form-label">
            Product Id
          </label>
          <input
            type="text"
            name="product_id"
            className="form-control"
            id="validationTooltip01"
            value={editData.product_id}
            onChange={handleChange}
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltip01" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            name="product_name"
            className="form-control"
            id="validationTooltip01"
            value={editData.product_name}
            onChange={handleChange}
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltip01" className="form-label">
            Product Price
          </label>
          <input
            type="text"
            name="product_price"
            className="form-control"
            id="validationTooltip01"
            value={editData.product_price}
            onChange={handleChange}
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltip01" className="form-label">
            Product Description
          </label>
          <input
            type="text"
            name="product_description"
            className="form-control"
            id="validationTooltip01"
            value={editData.product_description}
            onChange={handleChange}
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

import PropTypes from 'prop-types';

Edit.propTypes = {
  id: PropTypes.string.isRequired
};

export default Edit;