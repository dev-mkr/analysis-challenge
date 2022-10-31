const colors = [
  "255, 26, 104",
  "0, 152, 255",
  "255, 206, 0",
  "85, 0, 255",
  "255, 0, 192",
  "255, 159, 64",
];
// type getRandomColorType = () => getRandomColorType | string;
// let selectedColor: string;

// export const getRandomColor: getRandomColorType = () => {
//   const color: string = colors[Math.floor(Math.random() * colors.length)];
//   if (selectedColor === color) {
//     console.log({ color, selectedColor }, "are the same");
//     return getRandomColor();
//   }
//   selectedColor = color;
//   return color;
// };

function* getColorGenerator(id = 0) {
  while (true) {
    if (id > 5) {
      id = 0;
    }
    yield colors[id++];
  }
}

export const getColor = getColorGenerator();

// const Color = [
//   "rgba(255, 26, 104, 1)",
//   "rgba(54, 162, 235, 1)",
//   "rgba(255, 206, 0, 1)",
//   "rgba(153, 102, 255, 1)",
//   "rgba(255, 159, 64, 1)",
//   "rgba(255, 153, 300)",
//   "rgba(51, 255, 300)",
//   "rgba(26, 255, 51)",
// ];
