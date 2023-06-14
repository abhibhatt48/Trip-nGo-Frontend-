// Wishlist.js
import React, { useState } from 'react';

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  const removeFromWishlist = (placeName) => {
    setWishlist(wishlist.filter((place) => place !== placeName));
  };

  return (
    <div>
      <h1>Wishlist page</h1>
      {wishlist.length > 0 ? (
        <ul>
          {wishlist.map((place, index) => (
            <li key={index}>
              {place}
              <button onClick={() => removeFromWishlist(place)}>Remove</button>
              <button>Book now</button>
              <button>View details</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in the wishlist</p>
      )}
    </div>
  );
}

export default Wishlist;
