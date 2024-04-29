let tds = document.getElementsByTagName("td");
for (let item of tds) {
  item.onclick = function () {
    this.style.background = "yellow";
  };
}
//   tds.forEach(function (item) {.getElementsByTagName不能用forreach
//     item.onclick = function () {
//       this.style.background = "yellow";
//     };
//   });
