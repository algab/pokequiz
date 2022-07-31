const verifyDuplicate = (numbers: number[]): number[] => {
  const result = numbers.filter((item, index) => numbers.indexOf(item) === index);
  if (result.length < 4) {
    for (let i = 0; i < 4; i++) {
      if (result[i] === undefined) {
        result.push(randomNumber(890));
      }
    }
    verifyDuplicate(result);
  }
  return result;
};

export const randomNumber = (max: number): number => {
  return Math.floor(Math.random() * (max - 1)) + 1;
};

export const getAlternatives = (): number[] => {
  return verifyDuplicate([randomNumber(890), randomNumber(890), randomNumber(890), randomNumber(890)]);
};
