import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './books.css';

function Books() {
  // State to hold all books
  const [books, gotBooks] = useState([]);
  
  // State to hold books after search/filter
  const [filteredBooks, setSearchedBooks] = useState([]);
  
  // React Router hook to get location state
  const location = useLocation();
  
  // Extract success message from location state
  const successMessage = location?.state?.successMessage;

  // Fetch books from the API on component mount
  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get('https://reactnd-books-api.udacity.com/books', {
          headers: {
            'Authorization': 'whatever-you-want'
          }
        });
        const allBooks = response.data.books;
        gotBooks(allBooks);
        setSearchedBooks(allBooks);      
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    getBooks();
  }, []);

  // Function to filter books based on search input
  const filteronsearch = (e) => {
    const input = e.target.value.toLowerCase();
    const searched = books.filter((book) =>
      book.title.toLowerCase().includes(input)
    );
    setSearchedBooks(searched);
  };

  // JSX structure of the component
  return (
    <>
      {/* Search input box */}
      <input id='search-box' type="text" placeholder="Search Books with Title kudasai !" onChange={filteronsearch} />

      {/* Displaying filtered books */}
      <div className="book-main">
        {filteredBooks.map((book) => (
          <div className="allbook" key={book.id}>
            {/* Book image */}
            <img className="book-img" src={book.imageLinks.thumbnail} alt={book.title} />
            
            {/* Book title with link */}
            <h2 className="title">
              <a href={book.previewLink}>{book.title}</a>
            </h2>
            
            {/* Book authors */}
            <h3 className="by">
              By {book.authors.map((author) => 
                <div key={author}>
                  {author}
                </div>
              )}
            </h3>
            {/* Additional book information (commented out) */}
          </div>
        ))}
      </div>

      {/* Display message based on registration status */}
      <div id='Registration-done'>
        {successMessage ? <p>{successMessage}</p> : <p>Register to get free books</p>}
      </div>

      {/* Footer */}
      <footer id='footer'>
        <p>&copy; 2023. All rights reserved. made by Gouransh Vaishnav</p>
      </footer>
    </>
  );
}

export default Books;
