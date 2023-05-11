export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const calculateTotal = (cart) => {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].quantity * cart[i].price;
  }
  return total;
};
