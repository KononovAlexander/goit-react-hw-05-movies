import {getFilmReviewsByID} from "../../../api";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReviewsList, ReviewsListItem } from "./Reviews.styled";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    const id = Number(movieId.replace(/:/g, ''));

    useEffect(() => {
        getFilmReviewsByID(id)
          .then(response => setReviews(response.results))
    
          .catch(err => console.log(err));
      }, [id]);

      if (!reviews) {return};
        
      return(
        <ReviewsList>
           { reviews.length ?   
            (reviews.map(review => (
                    <ReviewsListItem key={review.id}>
                            <h4>Author: {review.author}</h4>
                            <p>{review.content}</p>
                    </ReviewsListItem>
            ))) : <p>We don't have any reviews for this movie</p>
            }
        </ReviewsList>
      )      
}
export default Reviews;