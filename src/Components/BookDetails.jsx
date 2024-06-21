import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookDetails = ({ setId }) => {
  const [books, setBooks] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {
    await axios
      .get("https://6603c0f72393662c31cf8e31.mockapi.io/user/")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`https://6603c0f72393662c31cf8e31.mockapi.io/user/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <table class="table" style={{ backgroundColor: "ButtonShadow" }}>
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Book Title</th>
            <th scope="col">Author</th>
            <th scope="col">Publication</th>
            <th scope="col">Publisher</th>
            <th scope="col">Description</th>
            <th scope="col">Website Link</th>
            <th scope="col">Pages</th>
            <th scope="col">edit</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        <tbody>
          {books.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.publication}</td>
                  <td>{item.publisher}</td>
                  <td>{item.description}</td>
                  <td>{item.website}</td>
                  <td>{item.page}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleEdit(item.id);
                      }}
                      style={{
                        backgroundColor: "orange",
                        color: "black",
                        borderRadius: "10px",
                        border: "none",
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "10px",
                        border: "none",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() => {
          navigate("/addBooks");
        }}
        style={{
          marginBottom: "20px",
          textAlign: "center",
          backgroundColor: "yellowgreen",
          color: "black",
          borderRadius: "10px",
          border: "none",
        }}
      >
        Create
      </button>
    </div>
  );
};

export default BookDetails;
