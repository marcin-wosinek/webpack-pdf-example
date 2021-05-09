const element = document.getElementById("core");

element.innerHTML = "✓ Core module is loaded correclty";

const pdfButton = document.getElementById("pdf-button");

pdfButton.addEventListener("click", () => {
  console.log("test");
});
