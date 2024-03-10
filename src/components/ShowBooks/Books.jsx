import React from 'react';
import { Link } from 'react-router-dom';
import './Showbooks.css';

const Book = ({ id, title, author_name, edition_count, first_publish_year, book_cover }) => {
  return (
    <div className="book flex-column space-between">
       <Link to={`/${id}`}>
      <div className="book-image">
        <img src={book_cover} alt={`${title} cover`} />
      </div>
      </Link>
      
      <div className="line"></div>
      <div className="book-info text-center">
       <Link to={`/${id}`}>
            <div className="book-info-texts title fw-9 fs-17">
                <span>{title}</span>
            </div>
        </Link>

        <Link to={`/${id}`}>
        <div className="book-info-texts author fs-18">
          <span className='text-capitalize fw-9'>Author: </span>
          <span>{author_name && Array.isArray(author_name) ? author_name.join(", ") : author_name}</span>
        </div>
        </Link>

        <Link to={`/${id}`}>
        <div className="book-info-texts edition_count fs-18">
          <span className='text-capitalize fw-9'>Editions: </span>
          <span>{edition_count}</span>
        </div>
        </Link>

        <Link to={`/${id}`}>
        <div className="book-info-texts first_publish_year fs-18">
          <span className='text-capitalize fw-9'>First Publish Year: </span>
          <span>{first_publish_year}</span>
        </div>
        </Link>

      </div>
    </div>
  );
};

export default Book;
