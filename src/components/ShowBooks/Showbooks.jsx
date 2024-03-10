import React from "react";
import { useGlobalContext } from "../../search";
import Books from "../ShowBooks/Books";
import Load from "../Load/Load";
import notfoundImg from "../../img/covernotfound.png";
import "./Showbooks.css";

const Showbooks = () => {
  const { books, loading, showTitle } = useGlobalContext();

  const bookCover = books.map((sinBook) => ({
    ...sinBook,
    id: sinBook.id.replace("/works/", ""),
    book_cover: sinBook.cover_id
      ? `https://covers.openlibrary.org/b/id/${sinBook.cover_id}-L.jpg`
      : notfoundImg,
  }));

  console.log("Book Cover Data:", bookCover);
  console.log(
    "Image URLs:",
    bookCover.map((item) => item.book_cover)
  );

  if (loading) return <Load />;

  return (
    <section className="show-books">
      <div className="container">
        <div className="sec-tit">
          <h2>{showTitle}</h2>
        </div>

        <div className="showbooks-content grid">
          {bookCover.slice(0, 30).map((item, index) => {
            return <Books key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Showbooks;
