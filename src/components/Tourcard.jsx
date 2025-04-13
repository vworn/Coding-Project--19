import { useState } from "react";

function TourCard({ id, name, info, price, image, onRemove }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h2>{name}</h2>
        <h4>${price}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? " Show Less" : " Read More"}
          </button>
        </p>
        <button onClick={() => onRemove(id)}>Not Interested</button>
      </div>
    </article>
  );
}

export default TourCard;
