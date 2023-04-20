    const namer = require("C:/Users/lucas/node_modules/color-namer")
    
    const color = document.querySelector('.color')
    const hsl = document.querySelector('.hsl')
    const btn = document.getElementById('btn')
    const btnH = document.getElementById('btnH')
    const btnS = document.getElementById('btnS')
    const btnL = document.getElementById('btnL')
    const btnI = document.getElementById('btnI')
    const btnPantone = document.getElementById('pantone')
    const cmm = document.getElementById('comment')
    
    let rndmH = Math.floor(Math.random()*357)
    let rndmS = Math.floor(Math.random()*100)
    let rndmL = Math.floor(Math.random()*100)
    let rndmColor = `hsl(${rndmH}, ${rndmS}%, ${rndmL}%)`
    let rndmColorCode = rndmColor.replace('%', '').replace('%', '')
    let invertBtn = 0 
    
    assignColors()
    
    
    btn.addEventListener('click', changeColor) 
    btnH.addEventListener('click', changeHue) 
    btnS.addEventListener('click', changeSat) 
    btnL.addEventListener('click', changeLite) 
    btnI.addEventListener('click', changeOpposite) 
    btnPantone.addEventListener('click', go2Pantone) 
    
    
    
    function changeColor() {
      
      rndmColor = tempRndmHSL
      rndmH = tempRndmHSL_Hue
      rndmS = tempRndmHSL_Sat
      rndmL = tempRndmHSL_Lite
      rndmColorCode = String(rndmColor)
    
      assignColors()
      
      let randomColorBtn = namer(randomHSL())
        btn.style.background = '#' + randomColorBtn.ntc[0].hex
        btn.style.color = invertColor(randomColorBtn.ntc[0].hex, 1)
    document.getElementById('comment').innerHTML = 'click AGAIN to change to random color'
    }
    
    function changeHue() {
      rndmColor = tempRndmHue
      rndmH = tempRndmH
      rndmColorCode = String(rndmColor)
      assignColors()
      let randomHueBtn = namer(randomHue())
        btnH.style.background = '#' + randomHueBtn.ntc[0].hex
        btnH.style.color = invertColor(randomHueBtn.ntc[0].hex, 1)
        document.getElementById('comment').innerHTML = 'click AGAIN to change color hue'
    }
    
    function changeSat() {
      rndmColor = tempRndmSat
      rndmS = tempRndmS 
      rndmColorCode = String(rndmColor)
      assignColors()
      let randomColorBtn = namer(randomSat())
        btnS.style.background = '#' + randomColorBtn.ntc[0].hex
        btnS.style.color = invertColor(randomColorBtn.ntc[0].hex, 1)
      document.getElementById('comment').innerHTML = 'click AGAIN to change color saturation'
    }
    
    function changeLite() {
      rndmColor = tempRndmLite
      rndmL = tempRndmL
      rndmColorCode = String(rndmColor)
      assignColors()
      let randomColorBtn = namer(randomLite())
        btnL.style.background = '#' + randomColorBtn.ntc[0].hex
        btnL.style.color = invertColor(randomColorBtn.ntc[0].hex, 1)
      document.getElementById('comment').innerHTML = 'click AGAIN to change color lightness'
    
    }
    
    function go2Pantone() {
    rndmColor = colorName.pantone[0].hex
    rndmColorCode = hexToHSL(rndmColor).replaceAll(',', ', ')
    assignColors()
    }
    
    function changeOpposite() {
    
    
      rndmColor = invertBtn
    
    invertBtn =  invertColor(colorName.ntc[0].hex)
    
    invertBtn = hexToHSL(invertBtn)
    invertBtn = (invertBtn.replace('hsl', '').replaceAll('%', '').replaceAll('(', '').replaceAll(')', '')).split(',')
    rndmH = invertBtn[0]
    rndmS = invertBtn[1]
    rndmL = invertBtn[2]
    rndmColor = `hsl(${rndmH}, ${rndmS}%, ${rndmL}%)`
    rndmColorCode = String(rndmColor)
    assignColors()
    
    btnI.style.background = invertColor(colorName.ntc[0].hex)
    btnI.style.color = invertColor(invertColor(colorName.ntc[0].hex), 1)
    
    document.getElementById('comment').innerHTML = 'click AGAIN to change back to opposite color'
    }
    
    function randomHSL() {
      tempRndmHSL_Hue = Math.floor(Math.random()*357)
      tempRndmHSL_Sat = Math.floor(Math.random()*100)
      tempRndmHSL_Lite = Math.floor(Math.random()*100)
      tempRndmHSL = `hsl(${tempRndmHSL_Hue}, ${tempRndmHSL_Sat}%, ${tempRndmHSL_Lite}%)`
      return tempRndmHSL
    }
    
    function randomHue() {
      tempRndmH = Math.floor(Math.random()*357)
      tempRndmHue = `hsl(${tempRndmH}, ${rndmS}%, ${rndmL}%)`
      return tempRndmHue
    
    }
    
    function randomSat() {
      tempRndmS = Math.floor(Math.random()*100)
      tempRndmSat = `hsl(${rndmH}, ${tempRndmS}%, ${rndmL}%)`
      return tempRndmSat
    
    }
    
    function randomLite() {
      tempRndmL = Math.floor(Math.random()*100)
      tempRndmLite = `hsl(${rndmH}, ${rndmS}%, ${tempRndmL}%)`
      return tempRndmLite
    
    }
    
    
    
    function assignColors() {
    
        colorName = namer(rndmColor)
        color.textContent = 'color: ' + colorName.ntc[0].name 
        hsl.textContent = rndmColorCode
        document.body.style.background = rndmColor
        document.getElementById('pantoneName').innerHTML = colorName.pantone[0].name + ' ' + colorName.pantone[0].hex
        document.getElementById('title').style.color = invertColor(colorName.ntc[0].hex, 1)
        document.getElementById('btn').style.background = invertColor(colorName.ntc[0].hex, 1)
        document.getElementById('btn').style.color = rndmColor
        document.getElementById('btnH').style.background = invertColor(colorName.ntc[0].hex, 1)
        document.getElementById('btnH').style.color = rndmColor
        document.getElementById('btnS').style.background = invertColor(colorName.ntc[0].hex, 1)
        document.getElementById('btnS').style.color = rndmColor
        document.getElementById('btnL').style.background = invertColor(colorName.ntc[0].hex, 1)
        document.getElementById('btnL').style.color = rndmColor
        document.getElementById('pantone').style.color = invertColor(colorName.pantone[0].hex, 1)
        document.getElementById('pantone').style.background = colorName.pantone[0].hex
        document.getElementById('yourcolor').style.background = invertColor(colorName.ntc[0].hex, 1)
        document.getElementById('yourcolor').style.color = rndmColor
        document.getElementById('hsl').style.background = invertColor(colorName.ntc[0].hex, 1)
        document.getElementById('hsl').style.color = rndmColor
        document.getElementById('comment').innerHTML = 'hover over the buttons to preview colors'
        cmm.style.color = invertColor(colorName.ntc[0].hex, 1)
        document.getElementById('btnI').style.background = invertColor(colorName.ntc[0].hex, 1)
        document.getElementById('btnI').style.color = rndmColor
    
    
        btnPantone.addEventListener("mouseover", function() {
          document.getElementById('comment').innerHTML = 'click to change to a similar pantone color suggestion :)'
          
        }, false)
          
        btnPantone.addEventListener("mouseout", function() {  
          document.getElementById('comment').innerHTML = 'have fun'
          
        }, false)
    
        color.addEventListener("mouseover", function() {
          document.getElementById('comment').innerHTML = 'name on the ntc color chart'
          
        }, false)
          
        color.addEventListener("mouseout", function() {  
          document.getElementById('comment').innerHTML = 'have fun'
          
        }, false)
    
    //  buttonRandom
    
      btn.addEventListener("mouseover", function() {
        document.getElementById('comment').innerHTML = 'click to change to random color'
        let randomColorBtn = namer(randomHSL())
        btn.style.background = '#' + (randomColorBtn.ntc[0].hex)
        btn.style.color = invertColor(randomColorBtn.ntc[0].hex, 1)
      }, false)
        
      btn.addEventListener("mouseout", function() {  
        btn.style.color = rndmColor
        btn.style.background = invertColor(colorName.ntc[0].hex, 1)
          document.getElementById('comment').innerHTML = 'have fun'
      }, false)
    
    // buttonHue
    
        btnH.addEventListener("mouseover", function() {
          document.getElementById('comment').innerHTML = 'click to change color hue'
          let randomHueBtn = namer(randomHue())
          btnH.style.background = '#' + randomHueBtn.ntc[0].hex
          btnH.style.color = invertColor(randomHueBtn.ntc[0].hex, 1)
    
        }, false)
        
        btnH.addEventListener("mouseout", function() { 
          tempRndmColor = 0 
          btnH.style.color = rndmColor
          btnH.style.background = invertColor(colorName.ntc[0].hex, 1)
          document.getElementById('comment').innerHTML = 'have fun'
        }, false)
    
    // buttonSat
    
    btnS.addEventListener("mouseover", function() {
      document.getElementById('comment').innerHTML = 'click to change color saturation'
      let randomSatBtn = namer(randomSat())
      btnS.style.background = '#' + randomSatBtn.ntc[0].hex
      btnS.style.color = invertColor(randomSatBtn.ntc[0].hex, 1)
    
    }, false)
    
    btnS.addEventListener("mouseout", function() {  
      tempRndmColor = 0
      btnS.style.color = rndmColor
      btnS.style.background = invertColor(colorName.ntc[0].hex, 1)
      document.getElementById('comment').innerHTML = 'have fun'
    }, false)
    
    // buttonLite
    
    btnL.addEventListener("mouseover", function() {
      document.getElementById('comment').innerHTML = 'click to change color lightness'
      let randomLiteBtn = namer(randomLite())
      btnL.style.background = '#' + randomLiteBtn.ntc[0].hex
      btnL.style.color = invertColor(randomLiteBtn.ntc[0].hex, 1)
    
    }, false)
    
    btnL.addEventListener("mouseout", function() {  
      tempRndmColor = 0
      btnL.style.color = rndmColor
      btnL.style.background = invertColor(colorName.ntc[0].hex, 1)
      document.getElementById('comment').innerHTML = 'have fun'
    }, false)
    
    // buttonInvert
    
    btnI.addEventListener("mouseover", function() {
      document.getElementById('comment').innerHTML = 'click to change to opposite color'
      invertBtn =  invertColor(colorName.ntc[0].hex)
      console.log(invertBtn)
      btnI.style.background = invertColor(colorName.ntc[0].hex)
      btnI.style.color = invertColor(invertColor(colorName.ntc[0].hex), 1)
      
    }, false)
    
    btnI.addEventListener("mouseout", function() {  
      document.getElementById('comment').innerHTML = 'have fun'
      document.getElementById('btnI').style.background = invertColor(colorName.ntc[0].hex, 1)
      document.getElementById('btnI').style.color = rndmColor
    }, false)
    
    hsl.addEventListener("mouseover", function() {
      document.getElementById('comment').innerHTML = 'hsl color code'
    }, false)
    
    hsl.addEventListener("mouseout", function() {
      document.getElementById('comment').innerHTML = 'have fun'
    }, false)
    
      console.log(rndmColor)
      console.log(colorName)
      console.log(colorName.pantone[0].name + ' ' + colorName.pantone[0].hex)
    
    }
    
    
    
    
    //  FUNCTIONS
    
    function HSLToHex(h,s,l) {
      s /= 100;
      l /= 100;
    
      let c = (1 - Math.abs(2 * l - 1)) * s,
          x = c * (1 - Math.abs((h / 60) % 2 - 1)),
          m = l - c/2,
          r = 0,
          g = 0, 
          b = 0; 
    
      if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
      } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
      } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
      } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
      } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
      } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
      }
      // Having obtained RGB, convert channels to hex
      r = Math.round((r + m) * 255).toString(16);
      g = Math.round((g + m) * 255).toString(16);
      b = Math.round((b + m) * 255).toString(16);
    
      // Prepend 0s, if necessary
      if (r.length == 1)
        r = "0" + r;
      if (g.length == 1)
        g = "0" + g;
      if (b.length == 1)
        b = "0" + b;
    
      return "#" + r + g + b;
    }
    
    function hexToHSL(H) {
      // Convert hex to RGB first
      let r = 0, g = 0, b = 0;
      if (H.length == 4) {
        r = "0x" + H[1] + H[1];
        g = "0x" + H[2] + H[2];
        b = "0x" + H[3] + H[3];
      } else if (H.length == 7) {
        r = "0x" + H[1] + H[2];
        g = "0x" + H[3] + H[4];
        b = "0x" + H[5] + H[6];
      }
      // Then to HSL
      r /= 255;
      g /= 255;
      b /= 255;
      let cmin = Math.min(r,g,b),
          cmax = Math.max(r,g,b),
          delta = cmax - cmin,
          h = 0,
          s = 0,
          l = 0;
    
      if (delta == 0)
        h = 0;
      else if (cmax == r)
        h = ((g - b) / delta) % 6;
      else if (cmax == g)
        h = (b - r) / delta + 2;
      else
        h = (r - g) / delta + 4;
    
      h = Math.round(h * 60);
    
      if (h < 0)
        h += 360;
    
      l = (cmax + cmin) / 2;
      s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      s = +(s * 100).toFixed(1);
      l = +(l * 100).toFixed(1);
    
      return "hsl(" + h + "," + s + "%," + l + "%)";
    }
    
    function invertColor(hex, bw) {
      if (hex.indexOf('#') === 0) {
          hex = hex.slice(1);
      }
      // convert 3-digit hex to 6-digits.
      if (hex.length === 3) {
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length !== 6) {
          throw new Error('Invalid HEX color.');
      }
      var r = parseInt(hex.slice(0, 2), 16),
          g = parseInt(hex.slice(2, 4), 16),
          b = parseInt(hex.slice(4, 6), 16);
      if (bw) {
          // https://stackoverflow.com/a/3943023/112731
          return (r * 0.299 + g * 0.587 + b * 0.114) > 186
              ? '#222222'
              : '#FFFFFF';
      }
      // invert color components
      r = (255 - r).toString(16);
      g = (255 - g).toString(16);
      b = (255 - b).toString(16);
      // pad each with zeros and return
      return "#" + padZero(r) + padZero(g) + padZero(b);
    }
    
    function padZero(str, len) {
      len = len || 2;
      var zeros = new Array(len).join('0');
      return (zeros + str).slice(-len);
    }    
    
    
    
    
    
    
    
    
    
    
    
    
    