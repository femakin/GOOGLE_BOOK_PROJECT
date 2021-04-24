import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import Header from "../components/Header";
import Featured from "../components/Featured";

function Home() {
  const [bookList, setBookList] = useState();
  const [featuredBookList, setFeaturedBookList] = useState();
  const [loading, setLoading] = useState(false);
  const [isSelected, setSelected] = useState("");

  useEffect(() => {
    setLoading(true);

    (async () => {
      axios
        .get("https://www.googleapis.com/books/v1/volumes?q=HTML5")
        .then((resp) => {
          const { items } = resp.data;
          splitFeaturedImage(items);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setLoading(false);
        });

      setSelected(localStorage.getItem("isSelected"));
    })();
  }, []);

  const splitFeaturedImage = (bookItems) => {
    setBookList(bookItems.slice(0, bookItems.length - 2));
    setFeaturedBookList(bookItems.slice(-2));
  };

  const addEllipseToLongTitle = (str) => {
    if (str.length > 120) {
      return `${str.substring(0, 118)}...`;
    }
    return str;
  };

  if (loading) {
    return (
      <div className="loader">
        <Loader
          type="Puff"
          color="#ccc"
          height={100}
          width={100}
          timeout={3000} //3 secs
          svgClass="my-custom-class"
        />
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <main>
        <p className="main__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dis
          purus leo fames in vulputate vivamus in. Dictumst scelerisque accumsan
          ut volutpat, sodales est laoreet phasellus volutpat. Malesuada nunc
          egestas tortor, orci sem proin. In felis ut facilisis convallis. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dis purus
          leo fames in vulputate
        </p>

        <section className="book-section">
          <div className="book-section__featured">
            <h2 className="card-featured-title">Featured</h2>

            {featuredBookList &&
              featuredBookList.map((book) => (
                <Featured book={book} key={book.etag} />
              ))}
          </div>

          <div className="book-section__main">
            {bookList &&
              bookList.map((book) => (
                <div
                  className={`card ${isSelected === book.id ? "selected" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelected(book.id);
                    localStorage.setItem("isSelected", book.id);
                  }}
                  key={book.etag}
                >
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    className="card__image"
                  />

                  <div>
                    <h3 className="card__title">{book.volumeInfo.title}</h3>
                    <h4 className="card__author">
                      {book.volumeInfo.authors[0]}
                    </h4>
                    <span className="card__pages">
                      Pages: {book.volumeInfo.pageCount}
                    </span>
                    <p className="card__details">
                      {addEllipseToLongTitle(book.volumeInfo.description)}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
