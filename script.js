function convertRgbToHex() {
    
    var red = parseInt(document.getElementById('redInput').value);
    var green = parseInt(document.getElementById('greenInput').value);
    var blue = parseInt(document.getElementById('blueInput').value);

    
    if (isNaN(red) || isNaN(green) || isNaN(blue) || red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
      alert("Please enter valid numeric values between 0 and 255 for each RGB component.");
      return;
    }

    
    var hex = "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);

    document.getElementById('result').innerHTML = `Hex: ${hex}`;
  }

  
  function componentToHex(component) {
    var hex = component.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }