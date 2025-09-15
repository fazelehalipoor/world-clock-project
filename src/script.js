function updateTime() {
  let tehranElement = document.querySelector("#tehran");
  if (tehranElement) {
    let tehranDateElement = tehranElement.querySelector(".date");
    let tehranTimeElement = tehranElement.querySelector(".time");
    let tehranTime = moment().tz("Asia/Tehran");

    tehranDateElement.innerHTML = tehranTime.format("MMMM Do YYYY");
    tehranTimeElement.innerHTML = tehranTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);
