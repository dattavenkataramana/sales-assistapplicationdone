import axios from "axios";
import { useEffect, useState } from "react";

function ReviewsSection() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "https://admin.tomedes.com/api/v1/get-reviews?page=1"
        );
        setReviews(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{color:"navy"}}>Reviews Section</h2>
      {isLoading ? (
        <p className="text-center">Loading reviews...</p>
      ) : (
        <div>
          {reviews.map((review, index) => (
            <div
              key={review.ID}
              className={`p-4 ${
                index % 2 === 0 ? "bg-light" : "bg-secondary"
              } border rounded`}
            >
              <h3 style={{color:"red"}}>{review.Name}</h3>
              <p style={{color:"blue"}}>Company: {review.Company}</p>
              <p style={{color:"green"}}>Platform: {review.Platform}</p>
              <p style={{color:"gold "}}>Rating: {review.rating}</p>
              <p style={{color:"pink"}}>Date Created: {review.datecreated}</p>
              <p style={{color:"yellow"}}>{review.Reviews}</p>
              <a
                href={review.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Review
              </a>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ReviewsSection;
