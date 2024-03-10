import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Load from "../Load/Load";
import notfoundImg from "../../img/covernotfound.png";
import "./Bookdetails.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const url = "https://openlibrary.org/works/";

const Bookdetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState(null);
  const navigated = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function bookDetails() {
      try {
        const responseData = await fetch(`${url}${id}.json`);
        const data = await responseData.json();

        console.log("Data from API:", data);

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;
          const updateBook = {
            description: description
              ? description.value
              : "No description found",
            title: title,
            book_cover: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : notfoundImg,
            subject_places: subject_places
              ? subject_places.join(",")
              : "No subject places found",
            subject_times: subject_times
              ? subject_times.join(",")
              : "No subject times found",
            subjects: subjects ? subjects.join(",") : "No subjects found",
          };
          setBooks(updateBook);
        } else {
          setBooks(null);
        }
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setLoading(false);
      }
    }
    bookDetails();
  }, [id]);

  if (loading) return <Load />;

  console.log(books);

  return (
    <div className="book-details">
      <div className="container">
        <button
          type="button"
          className="flex flex-center backward-btn"
          onClick={() => navigated("/")}
        >
          <FaArrowLeft size={22} />
          <span className="fs-18 fw-6">Go Back</span>
        </button>

        <div className="book-details-container">
          <div className="details-img">
            <img src={books?.book_cover} alt="cover img" />
          </div>
          <div className="book-details-about">
            <div className="details-item title text-center">
              <span className=" fw-6 fs-24">{books?.title}</span>
            </div>

            <div className="details-item description">
              <span>{books?.description}</span>
            </div>

            <div className="details-item">
              <span className="fw-6">Subject Places: </span>
              <span className=" text-itaiic">{books?.subject_places}</span>
            </div>

            <div className="details-item">
              <span className="fw-6">Subject Times: </span>
              <span className=" text-itaiic">{books?.subject_times}</span>
            </div>

            <div className="details-item">
              <span className="fw-6">Subjects: </span>
              <span>{books?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookdetails;
