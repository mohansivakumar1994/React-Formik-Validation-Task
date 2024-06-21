import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("https://6603c0f72393662c31cf8e31.mockapi.io/user")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {books.map((item, index) => {
              return (
                <>
                  <div key={index}>
                    <div className="col ">
                      <div className="card h-100">
                        <img
                          src={item.image}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body text-center">
                          <h6 className="card-title" style={{ color: "green" }}>
                            Title: {item.title}
                          </h6>
                          <br />
                          <h6 className="card-title" style={{ color: "navy" }}>
                            Author: {item.author}
                          </h6>
                          <br />
                          <div style={{ textAlign: "center" }}>
                            <Link to="/bookDetails">
                              <button
                                style={{
                                  border: "none",
                                  borderRadius: "5px",
                                  backgroundColor: "orange",
                                  color: "black",
                                }}
                              >
                                Book Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <br />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Books;
