/* Client Window Size updater: 
function setWindowSize(event) {
  const clientWidth = (document.getElementById(
    "ClientSize"
  ).innerText = `WindowSize: ${window.innerWidth} x ${window.innerHeight}`);
}
window.addEventListener("resize", setWindowSize); */

/* cursor position */
window.addEventListener("mousemove", function (event) {
  /*Spotlight dynamic zeroPositon */
  const spotlightZeroHeight = window.innerHeight * 0.015;
  const spotlightZeroWidthA = window.innerWidth * 0.22;
  const spotlightZeroWidthB = window.innerWidth * 0.493;
  const spotlightZeroWidthC = window.innerWidth * 0.75;
  /*calculation of Y axis lenght */
  let mouseY = event.clientY;
  let verticalLenght = mouseY - spotlightZeroHeight;

  /*calculation of X axis lenght */
  let mouseX = event.clientX;
  let horizontalLenghtA = mouseX - spotlightZeroWidthA;
  let horizontalLenghtB = mouseX - spotlightZeroWidthB;
  let horizontalLenghtC = mouseX - spotlightZeroWidthC;

  /* calculation of angle rotation of spotlight for CSS */
  const spotLightA =
    Math.atan(horizontalLenghtA / verticalLenght) / (Math.PI / -180);
  document.getElementById(
    "lightwaveA"
  ).style.transform = `rotate(${spotLightA}deg)`;

  const spotLightB =
    Math.atan(horizontalLenghtB / verticalLenght) / (Math.PI / -180);
  document.getElementById(
    "lightwaveB"
  ).style.transform = `rotate(${spotLightB}deg)`;

  const spotLightC =
    Math.atan(horizontalLenghtC / verticalLenght) / (Math.PI / -180);
  document.getElementById(
    "lightwaveC"
  ).style.transform = `rotate(${spotLightC}deg)`;

  /*Just for mouse position refrerence for debugging 
  mouseCord = `${mouseX} x ${mouseY}`;
  document.getElementById("Cord").innerText = `Mouseposition: ${mouseCord}`;*/
});
