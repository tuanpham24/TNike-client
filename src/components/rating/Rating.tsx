import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRatings } from "../../features/ratingSlice";
import { RootState, AppDispatch } from "../../app/store";

interface RatingProps {
  productId: string;
  productRatings: Array<number>;
}

const Rating: React.FC<RatingProps> = ({ productId, productRatings }) => {
  const dispatch: AppDispatch = useDispatch();

  const averageRating = useSelector((state: RootState) => state.rating.averageRating);

  console.log(averageRating);

  useEffect(() => {
    dispatch(setRatings(productRatings || []));
    console.log(productRatings);
  }, [dispatch, productRatings, productId]);

  return (
    <>
      <div>
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-lg ${
              index < averageRating ? "text-yellow" : "text-gray-300"
            }`}
          >
            &#9733;
          </span>
        ))}
      </div>
    </>
  );
};

export default Rating;
