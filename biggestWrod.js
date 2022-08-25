// ====================================================>> Find the lengthy work

const biggerWord = (str) => {
    const result = str
      .split(" ")
      .reduce((acc, curr) => (acc.length > curr.length ? acc : curr));
    console.log(result);
  };
  console.log(biggerWord("I AM FROM MAHARASHTRA"));
  