import { useState, useEffect } from "react";
import TourCard from "./TourCard";

function Gallery({ tours, setTours, onRemove }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://course-api.com/react-tours-project")
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [setTours]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading tours. Try again later.</p>;

  return (
    <section>
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
}

export default Gallery;
