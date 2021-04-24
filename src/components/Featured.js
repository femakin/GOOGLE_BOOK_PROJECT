import { Link } from "react-router-dom";

function Header({ book }) {
  const addEllipseToLongTitle = (str) => {
    if (str.length > 120) {
      return `${str.substring(0, 118)}...`;
    }
    return str;
  };

  return (
    <Link to="#" className="card-featured">
      <div className="card-featured__image-container">
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
          className="card-featured__image"
        />
      </div>

      <div>
        <h3 className="card-featured__title">{book.volumeInfo.title}</h3>
        <h4 className="card-featured__author">{book.volumeInfo.authors[0]}</h4>
        <span className="card-featured__pages">
          Pages: {book.volumeInfo.pageCount}
        </span>
        <p className="card-featured__details">
          {addEllipseToLongTitle(book.volumeInfo.description)}
        </p>
      </div>
    </Link>
  );
}

export default Header;
