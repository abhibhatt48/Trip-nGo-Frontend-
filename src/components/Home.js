import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import image1 from './images/image1.jpeg';
import image2 from './images/image2.jpeg';

function Home() {
  const [wishlist, setWishlist] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState([]);

  const addToWishlist = (placeName) => {
    setWishlist([...wishlist, placeName]);
    setDisabledButtons([...disabledButtons, placeName]);
  };

  const removeFromWishlist = (placeName) => {
    setWishlist(wishlist.filter((place) => place !== placeName));
    setDisabledButtons(disabledButtons.filter((place) => place !== placeName));
  };

  return (
    <div className="home">
      <div className="home__banner">
        <img src={image1} alt="Banner" />
        <div className="home__search">
          <input type="text" placeholder="Destination" />
          <input type="number" placeholder="Number of people" />
          <input type="date" placeholder="Date" />
          <select>
            <option value="budget">Budget</option>
            {/* Add budget options */}
          </select>
          <button>Search</button>
        </div>
      </div>
      <div className="home__cards">
        {/* We can replace this with a map function if we have a list */}
        <div className="card">
          <img src={image1} alt="Place" />
          <h2>Place Name1</h2>
          <p>Price</p>
          <Link to="/book-now">
            <button>Book now</button>
          </Link>
          <Link to="/Profile">
            <button>View details</button>
          </Link>
          <button
            onClick={() => addToWishlist('Place Name1')}
            disabled={disabledButtons.includes('Place Name1')}
          >
            {disabledButtons.includes('Place Name1') ? 'Added to wishlist' : 'Add to wishlist'}
          </button>
        </div>
        <div className="card">
          <img src={image1} alt="Place" />
          <h2>Place Name</h2>
          <p>Price</p>
          <button>Book now</button>
          <button>View details</button>
          <button
            onClick={() => addToWishlist('Place Name')}
            disabled={disabledButtons.includes('Place Name')}
          >
            {disabledButtons.includes('Place Name') ? 'Added to wishlist' : 'Add to wishlist'}
          </button>
        </div>
        <div className="card">
          <img src={image2} alt="Place" />
          <h2>Place Name2</h2>
          <p>Price</p>
          <button>Book now</button>
          <button>View details</button>
          <button
            onClick={() => addToWishlist('Place Name2')}
            disabled={disabledButtons.includes('Place Name2')}
          >
            {disabledButtons.includes('Place Name2') ? 'Added to wishlist' : 'Add to wishlist'}
          </button>
        </div>
        <div className="card">
          <img src={image2} alt="Place" />
          <h2>Place Name3</h2>
          <p>Price</p>
          <button>Book now</button>
          <button>View details</button>
          <button
            onClick={() => addToWishlist('Place Name3')}
            disabled={disabledButtons.includes('Place Name3')}
          >
            {disabledButtons.includes('Place Name3') ? 'Added to wishlist' : 'Add to wishlist'}
          </button>
        </div>
        <div className="card">
          <img src={image2} alt="Place" />
          <h2>Place Name4</h2>
          <p>Price</p>
          <button>Book now</button>
          <button>View details</button>
          <button
            onClick={() => addToWishlist('Place Name4')}
            disabled={disabledButtons.includes('Place Name4')}
          >
            {disabledButtons.includes('Place Name4') ? 'Added to wishlist' : 'Add to wishlist'}
          </button>
        </div>
        <div className="card">
          <img src={image2} alt="Place" />
          <h2>Place Name5</h2>
          <p>Price</p>
          <button>Book now</button>
          <button>View details</button>
          <button
            onClick={() => addToWishlist('Place Name5')}
            disabled={disabledButtons.includes('Place Name5')}
          >
            {disabledButtons.includes('Place Name5') ? 'Added to wishlist' : 'Add to wishlist'}
          </button>
        </div>
      </div>
      <div className="home__footer">
        <p>&copy; 2023 - Our Travel Packages App. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Home;
