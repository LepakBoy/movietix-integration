export const increaseCounter = () => {
  console.log("increase");
  return {
    // type: untuk menandakan function yg d jalanjkan
    type: "INCREASE"
  };
};
