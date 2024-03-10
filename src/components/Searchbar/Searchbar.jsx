import React, { useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../search';
import './Searchbar.css';

const Searchbar = () => {
  const { setSearch, setShowTitle } = useGlobalContext();
  const text = useRef('');
  const navigated = useNavigate();

  useEffect(( ) => text.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let searchBooks = text.current.value.trim();
    if (searchBooks.length === 0) {
      setSearch("the lost world");
      setShowTitle("Please Enter Something...");
    } else {
      setSearch(searchBooks);
    }
    navigated("/");
  };
  

  return (
    <div className='search-bar'>
      <div className="container">
        <div className="search-bar-content">
          <form className="search-bar" onSubmit = { handleSubmit }>
            <div className="searchbar-ele flex space-between bg-light">
                <input type="text" className="form-control" placeholder='Find Your Next Favorite Book' ref= {text} />
                <button type='submit' className='flex flex-center' onClick = { handleSubmit }>
                    <FaSearch className='text-brown' size={20}/>
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Searchbar
