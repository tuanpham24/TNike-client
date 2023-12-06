import React, { useEffect, useMemo } from "react";

interface RatingProps {
  productId: string;
  productRatings: Array<number>;
}

const Rating: React.FC<RatingProps> = ({ productId, productRatings }) => {

  const averageRating = useMemo(() => {
    if (productRatings.length > 0) {
      const result = productRatings.reduce((acc, rating) => acc + rating, 0) / productRatings.length;
      return result;
    }
    else {
      return 0;
    }

  }, [productRatings]);

  console.log(averageRating);

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
