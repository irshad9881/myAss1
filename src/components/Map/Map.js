import React  from 'react';
import './Map.css';
import { Link } from 'react-router-dom';
function Map({ address }) {
  return (
    <div>
      {<Link
          to={`https://www.google.com/maps/search/?api=1&query=${ address.country}, ${address.city}, ${ address.state}, ${address.zipcode}`}
          target="_blank" 
            rel="noopener noreferrer"
            >
              <button className='btn btn-warning'>Open Map</button>
        </Link>
        }
    </div>
  );
}

export default Map;
