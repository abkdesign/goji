import React from 'react';
import ringloader from './../ring-loader.gif';
export function Beers({ beers, loading }) {

  return (
    <div className="Beer-List">
      <h3>Search Results: ({beers.length}) {loading && <img src={ringloader}  width="20px"/>}</h3>
      {beers.length > 0 && (
        <ul>
          {beers.map(beer => (
            <li key={beer.name} className="Beer">
              <figure className="Beer-Image"><img src={beer.image_url} alt="" /></figure>
              <p>{beer.name} <small>{beer.population}</small></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}