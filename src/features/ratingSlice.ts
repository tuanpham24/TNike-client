import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RatingState {
  averageRating: number;
  ratings: Array<number>;
}

const initialState: RatingState = {
  averageRating: 0,
  ratings: [],
};

const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    setRatings: (state, action) => {
      state.ratings.push(action.payload);
      state.averageRating =
        state.ratings.length > 0
          ? state.ratings.reduce((acc, rating) => acc + rating, 0) /
            state.ratings.length
          : 0;
    },
  },
});

export const { setRatings } = ratingSlice.actions;

export default ratingSlice.reducer;
