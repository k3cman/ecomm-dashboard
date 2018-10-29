const func = (y, m) => {
  return new Date(y, m, 0).getDate();
};
const year = new Date();
let number = func(year.getFullYear(), year.getMonth() + 1);

export default number;
