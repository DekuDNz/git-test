const arr = [33, 14, 26, 12, 13, 7, 9, 10, 102, 205, 379, 418, 1];

// 1. Sắp xếp tăng dần
const increase = () => {
  let increasing = arr.sort((a, b) => {
    return a - b;
  });
  console.log("tăng dần :", increasing);
};
increase();

// 2. Sắp xếp giảm dần
const decrease = () => {
  let decreasing = arr.sort((a, b) => {
    return b - a;
  });
  console.log("giảm dần :", decreasing);
};
decrease();

// 3. Tìm ra số chia hết cho 2 và bỏ vào mảng mới

const findEven = () => {
  const newArrayEven = [];
  arr.map((item) => {
    if (item % 2 === 0) {
      newArrayEven.push(item);
    }
  });
  console.log("Các số chia hết cho 2: ", newArrayEven);
  return newArrayEven;
};
findEven();

// 4. Tìm ra số không chia hết cho 2 và bỏ vào mảng mới

const findOdd = () => {
  const newArrayOdd = [];
  arr.map((item) => {
    if (item % 3 === 0) {
      newArrayOdd.push(item);
    }
  });
  console.log("Các số không chia hết cho 2: ", newArrayOdd);
};
findOdd();

//5 . Tổng aednh sách ở đề bài
let sum = 0;
const totalArrray = () => {
  arr.forEach((item) => {
    sum += item;
  });
  console.log("Tổng các số trong danh sách :", sum);
};

totalArrray();

//6. Tìm số lớn nhất trong mảng

const bigNumb = () => {
  arr.sort((a, b) => {
    return b - a;
  });
  const biggestNumb = arr[0];
  console.log("số lớn nhất là ", biggestNumb);
};
bigNumb();
// 7 . Tìm số bé nhất trong mảng

const smallNumb = () => {
  arr.sort((a, b) => {
    return a - b;
  });
  const smallestNumb = arr[0];
  console.log("số nhỏ nhất là ", smallestNumb);
};
smallNumb();

// 8. Số lớn thứ 2 của mảng
const secondNumb = () => {
  arr.sort((a, b) => {
    return b - a;
  });
  const bigsecondNumb = arr[1];
  console.log("số lớn thứ 2 là ", bigsecondNumb);
};
secondNumb();
