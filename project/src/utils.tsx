function changeRating(rating: number): string {
  return (`${Math.round(rating) / 0.05}%`);
}
export default changeRating;
