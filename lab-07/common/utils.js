const findById = (arr, id) => {
  if(arr.find(element => element.id === id)) return arr.find(element => element.id === id);
  return null;
};

const calcLineItem = (quantity, amount) => {
  return (quantity * amount).toFixed(2);
};

export { findById, calcLineItem };