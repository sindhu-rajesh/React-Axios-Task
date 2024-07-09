

import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Products = ({ setId }) => {
  const [products, setProducts] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, [deleteData]);
  const fetchData = async () => {
    await axios
      .get("https://65d582f13f1ab8c63437231c.mockapi.io/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };
  const handleDelete = async (id) => {
    await axios
      .delete(`https://65d582f13f1ab8c63437231c.mockapi.io/api/products/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.product_id}</td>
                  <td>{item.product_name}</td>
                  <td>$ {item.product_price}</td>
                  <td>{item.product_description}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleEdit(item.id);
                      }}
                      type="button"
                      className="btn btn-outline-primary"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                      type="button"
                      className="btn btn-outline-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      <button
        onClick={() => {
          navigate("/Create");
        }}
        type="button"
        className="btn btn-outline-primary btn-lg "
      >
        + Create
      </button>
    </div>
  );
};

export default Products;