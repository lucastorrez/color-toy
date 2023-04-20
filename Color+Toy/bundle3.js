(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

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
      hsl.textContent = "hsl: " + (rndmColorCode).replaceAll('hsl', '').replaceAll('%', '')
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
  
    return "(" + h + "," + (Math.round(s)) + "," + (Math.round(l)) + ")";
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
  },{"C:/Users/lucas/node_modules/color-namer":3}],2:[function(require,module,exports){
  
  /**
   * @license
   *
   * chroma.js - JavaScript library for color conversions
   * 
   * Copyright (c) 2011-2017, Gregor Aisch
   * All rights reserved.
   * 
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   * 
   * 1. Redistributions of source code must retain the above copyright notice, this
   *    list of conditions and the following disclaimer.
   * 
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   *    this list of conditions and the following disclaimer in the documentation
   *    and/or other materials provided with the distribution.
   * 
   * 3. The name Gregor Aisch may not be used to endorse or promote products
   *    derived from this software without specific prior written permission.
   * 
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
   * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
   * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
   * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
   * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
   * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *
   */
  
  (function() {
    var Color, DEG2RAD, LAB_CONSTANTS, PI, PITHIRD, RAD2DEG, TWOPI, _average_lrgb, _guess_formats, _guess_formats_sorted, _input, _interpolators, abs, atan2, bezier, blend, blend_f, brewer, burn, chroma, clip_rgb, cmyk2rgb, colors, cos, css2rgb, darken, dodge, each, floor, hcg2rgb, hex2rgb, hsi2rgb, hsl2css, hsl2rgb, hsv2rgb, interpolate, interpolate_hsx, interpolate_lab, interpolate_lrgb, interpolate_num, interpolate_rgb, lab2lch, lab2rgb, lab_xyz, lch2lab, lch2rgb, lighten, limit, log, luminance_x, m, max, multiply, normal, num2rgb, overlay, pow, rgb2cmyk, rgb2css, rgb2hcg, rgb2hex, rgb2hsi, rgb2hsl, rgb2hsv, rgb2lab, rgb2lch, rgb2luminance, rgb2num, rgb2temperature, rgb2xyz, rgb_xyz, rnd, root, round, screen, sin, sqrt, temperature2rgb, type, unpack, w3cx11, xyz_lab, xyz_rgb,
      slice = [].slice;
  
    type = (function() {
  
      /*
      for browser-safe type checking+
      ported from jQuery's $.type
       */
      var classToType, len, name, o, ref;
      classToType = {};
      ref = "Boolean Number String Function Array Date RegExp Undefined Null".split(" ");
      for (o = 0, len = ref.length; o < len; o++) {
        name = ref[o];
        classToType["[object " + name + "]"] = name.toLowerCase();
      }
      return function(obj) {
        var strType;
        strType = Object.prototype.toString.call(obj);
        return classToType[strType] || "object";
      };
    })();
  
    limit = function(x, min, max) {
      if (min == null) {
        min = 0;
      }
      if (max == null) {
        max = 1;
      }
      if (x < min) {
        x = min;
      }
      if (x > max) {
        x = max;
      }
      return x;
    };
  
    unpack = function(args) {
      if (args.length >= 3) {
        return Array.prototype.slice.call(args);
      } else {
        return args[0];
      }
    };
  
    clip_rgb = function(rgb) {
      var i, o;
      rgb._clipped = false;
      rgb._unclipped = rgb.slice(0);
      for (i = o = 0; o < 3; i = ++o) {
        if (i < 3) {
          if (rgb[i] < 0 || rgb[i] > 255) {
            rgb._clipped = true;
          }
          if (rgb[i] < 0) {
            rgb[i] = 0;
          }
          if (rgb[i] > 255) {
            rgb[i] = 255;
          }
        } else if (i === 3) {
          if (rgb[i] < 0) {
            rgb[i] = 0;
          }
          if (rgb[i] > 1) {
            rgb[i] = 1;
          }
        }
      }
      if (!rgb._clipped) {
        delete rgb._unclipped;
      }
      return rgb;
    };
  
    PI = Math.PI, round = Math.round, cos = Math.cos, floor = Math.floor, pow = Math.pow, log = Math.log, sin = Math.sin, sqrt = Math.sqrt, atan2 = Math.atan2, max = Math.max, abs = Math.abs;
  
    TWOPI = PI * 2;
  
    PITHIRD = PI / 3;
  
    DEG2RAD = PI / 180;
  
    RAD2DEG = 180 / PI;
  
    chroma = function() {
      if (arguments[0] instanceof Color) {
        return arguments[0];
      }
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Color, arguments, function(){});
    };
  
    chroma["default"] = chroma;
  
    _interpolators = [];
  
    if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
      module.exports = chroma;
    }
  
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return chroma;
      });
    } else {
      root = typeof exports !== "undefined" && exports !== null ? exports : this;
      root.chroma = chroma;
    }
  
    chroma.version = '1.4.1';
  
    _input = {};
  
    _guess_formats = [];
  
    _guess_formats_sorted = false;
  
    Color = (function() {
      function Color() {
        var arg, args, chk, len, len1, me, mode, o, w;
        me = this;
        args = [];
        for (o = 0, len = arguments.length; o < len; o++) {
          arg = arguments[o];
          if (arg != null) {
            args.push(arg);
          }
        }
        if (args.length > 1) {
          mode = args[args.length - 1];
        }
        if (_input[mode] != null) {
          me._rgb = clip_rgb(_input[mode](unpack(args.slice(0, -1))));
        } else {
          if (!_guess_formats_sorted) {
            _guess_formats = _guess_formats.sort(function(a, b) {
              return b.p - a.p;
            });
            _guess_formats_sorted = true;
          }
          for (w = 0, len1 = _guess_formats.length; w < len1; w++) {
            chk = _guess_formats[w];
            mode = chk.test.apply(chk, args);
            if (mode) {
              break;
            }
          }
          if (mode) {
            me._rgb = clip_rgb(_input[mode].apply(_input, args));
          }
        }
        if (me._rgb == null) {
          console.warn('unknown format: ' + args);
        }
        if (me._rgb == null) {
          me._rgb = [0, 0, 0];
        }
        if (me._rgb.length === 3) {
          me._rgb.push(1);
        }
      }
  
      Color.prototype.toString = function() {
        return this.hex();
      };
  
      return Color;
  
    })();
  
    chroma._input = _input;
  
  
    /**
      ColorBrewer colors for chroma.js
    
      Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The 
      Pennsylvania State University.
    
      Licensed under the Apache License, Version 2.0 (the "License"); 
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at	
      http://www.apache.org/licenses/LICENSE-2.0
    
      Unless required by applicable law or agreed to in writing, software distributed
      under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
      CONDITIONS OF ANY KIND, either express or implied. See the License for the
      specific language governing permissions and limitations under the License.
    
        @preserve
     */
  
    chroma.brewer = brewer = {
      OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
      PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
      BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
      Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
      BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
      YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
      YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
      Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
      RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
      Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
      YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
      Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
      GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
      Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
      YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
      PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
      Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
      PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
      Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],
      Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
      RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
      RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
      PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
      PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
      RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
      BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
      RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
      PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],
      Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
      Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
      Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
      Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
      Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
      Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
      Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
      Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2']
    };
  
    (function() {
      var key, results;
      results = [];
      for (key in brewer) {
        results.push(brewer[key.toLowerCase()] = brewer[key]);
      }
      return results;
    })();
  
  
    /**
      X11 color names
    
      http://www.w3.org/TR/css3-color/#svg-color
     */
  
    w3cx11 = {
      aliceblue: '#f0f8ff',
      antiquewhite: '#faebd7',
      aqua: '#00ffff',
      aquamarine: '#7fffd4',
      azure: '#f0ffff',
      beige: '#f5f5dc',
      bisque: '#ffe4c4',
      black: '#000000',
      blanchedalmond: '#ffebcd',
      blue: '#0000ff',
      blueviolet: '#8a2be2',
      brown: '#a52a2a',
      burlywood: '#deb887',
      cadetblue: '#5f9ea0',
      chartreuse: '#7fff00',
      chocolate: '#d2691e',
      coral: '#ff7f50',
      cornflower: '#6495ed',
      cornflowerblue: '#6495ed',
      cornsilk: '#fff8dc',
      crimson: '#dc143c',
      cyan: '#00ffff',
      darkblue: '#00008b',
      darkcyan: '#008b8b',
      darkgoldenrod: '#b8860b',
      darkgray: '#a9a9a9',
      darkgreen: '#006400',
      darkgrey: '#a9a9a9',
      darkkhaki: '#bdb76b',
      darkmagenta: '#8b008b',
      darkolivegreen: '#556b2f',
      darkorange: '#ff8c00',
      darkorchid: '#9932cc',
      darkred: '#8b0000',
      darksalmon: '#e9967a',
      darkseagreen: '#8fbc8f',
      darkslateblue: '#483d8b',
      darkslategray: '#2f4f4f',
      darkslategrey: '#2f4f4f',
      darkturquoise: '#00ced1',
      darkviolet: '#9400d3',
      deeppink: '#ff1493',
      deepskyblue: '#00bfff',
      dimgray: '#696969',
      dimgrey: '#696969',
      dodgerblue: '#1e90ff',
      firebrick: '#b22222',
      floralwhite: '#fffaf0',
      forestgreen: '#228b22',
      fuchsia: '#ff00ff',
      gainsboro: '#dcdcdc',
      ghostwhite: '#f8f8ff',
      gold: '#ffd700',
      goldenrod: '#daa520',
      gray: '#808080',
      green: '#008000',
      greenyellow: '#adff2f',
      grey: '#808080',
      honeydew: '#f0fff0',
      hotpink: '#ff69b4',
      indianred: '#cd5c5c',
      indigo: '#4b0082',
      ivory: '#fffff0',
      khaki: '#f0e68c',
      laserlemon: '#ffff54',
      lavender: '#e6e6fa',
      lavenderblush: '#fff0f5',
      lawngreen: '#7cfc00',
      lemonchiffon: '#fffacd',
      lightblue: '#add8e6',
      lightcoral: '#f08080',
      lightcyan: '#e0ffff',
      lightgoldenrod: '#fafad2',
      lightgoldenrodyellow: '#fafad2',
      lightgray: '#d3d3d3',
      lightgreen: '#90ee90',
      lightgrey: '#d3d3d3',
      lightpink: '#ffb6c1',
      lightsalmon: '#ffa07a',
      lightseagreen: '#20b2aa',
      lightskyblue: '#87cefa',
      lightslategray: '#778899',
      lightslategrey: '#778899',
      lightsteelblue: '#b0c4de',
      lightyellow: '#ffffe0',
      lime: '#00ff00',
      limegreen: '#32cd32',
      linen: '#faf0e6',
      magenta: '#ff00ff',
      maroon: '#800000',
      maroon2: '#7f0000',
      maroon3: '#b03060',
      mediumaquamarine: '#66cdaa',
      mediumblue: '#0000cd',
      mediumorchid: '#ba55d3',
      mediumpurple: '#9370db',
      mediumseagreen: '#3cb371',
      mediumslateblue: '#7b68ee',
      mediumspringgreen: '#00fa9a',
      mediumturquoise: '#48d1cc',
      mediumvioletred: '#c71585',
      midnightblue: '#191970',
      mintcream: '#f5fffa',
      mistyrose: '#ffe4e1',
      moccasin: '#ffe4b5',
      navajowhite: '#ffdead',
      navy: '#000080',
      oldlace: '#fdf5e6',
      olive: '#808000',
      olivedrab: '#6b8e23',
      orange: '#ffa500',
      orangered: '#ff4500',
      orchid: '#da70d6',
      palegoldenrod: '#eee8aa',
      palegreen: '#98fb98',
      paleturquoise: '#afeeee',
      palevioletred: '#db7093',
      papayawhip: '#ffefd5',
      peachpuff: '#ffdab9',
      peru: '#cd853f',
      pink: '#ffc0cb',
      plum: '#dda0dd',
      powderblue: '#b0e0e6',
      purple: '#800080',
      purple2: '#7f007f',
      purple3: '#a020f0',
      rebeccapurple: '#663399',
      red: '#ff0000',
      rosybrown: '#bc8f8f',
      royalblue: '#4169e1',
      saddlebrown: '#8b4513',
      salmon: '#fa8072',
      sandybrown: '#f4a460',
      seagreen: '#2e8b57',
      seashell: '#fff5ee',
      sienna: '#a0522d',
      silver: '#c0c0c0',
      skyblue: '#87ceeb',
      slateblue: '#6a5acd',
      slategray: '#708090',
      slategrey: '#708090',
      snow: '#fffafa',
      springgreen: '#00ff7f',
      steelblue: '#4682b4',
      tan: '#d2b48c',
      teal: '#008080',
      thistle: '#d8bfd8',
      tomato: '#ff6347',
      turquoise: '#40e0d0',
      violet: '#ee82ee',
      wheat: '#f5deb3',
      white: '#ffffff',
      whitesmoke: '#f5f5f5',
      yellow: '#ffff00',
      yellowgreen: '#9acd32'
    };
  
    chroma.colors = colors = w3cx11;
  
    lab2rgb = function() {
      var a, args, b, g, l, r, x, y, z;
      args = unpack(arguments);
      l = args[0], a = args[1], b = args[2];
      y = (l + 16) / 116;
      x = isNaN(a) ? y : y + a / 500;
      z = isNaN(b) ? y : y - b / 200;
      y = LAB_CONSTANTS.Yn * lab_xyz(y);
      x = LAB_CONSTANTS.Xn * lab_xyz(x);
      z = LAB_CONSTANTS.Zn * lab_xyz(z);
      r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
      g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
      b = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
      return [r, g, b, args.length > 3 ? args[3] : 1];
    };
  
    xyz_rgb = function(r) {
      return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow(r, 1 / 2.4) - 0.055);
    };
  
    lab_xyz = function(t) {
      if (t > LAB_CONSTANTS.t1) {
        return t * t * t;
      } else {
        return LAB_CONSTANTS.t2 * (t - LAB_CONSTANTS.t0);
      }
    };
  
    LAB_CONSTANTS = {
      Kn: 18,
      Xn: 0.950470,
      Yn: 1,
      Zn: 1.088830,
      t0: 0.137931034,
      t1: 0.206896552,
      t2: 0.12841855,
      t3: 0.008856452
    };
  
    rgb2lab = function() {
      var b, g, r, ref, ref1, x, y, z;
      ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
      ref1 = rgb2xyz(r, g, b), x = ref1[0], y = ref1[1], z = ref1[2];
      return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
    };
  
    rgb_xyz = function(r) {
      if ((r /= 255) <= 0.04045) {
        return r / 12.92;
      } else {
        return pow((r + 0.055) / 1.055, 2.4);
      }
    };
  
    xyz_lab = function(t) {
      if (t > LAB_CONSTANTS.t3) {
        return pow(t, 1 / 3);
      } else {
        return t / LAB_CONSTANTS.t2 + LAB_CONSTANTS.t0;
      }
    };
  
    rgb2xyz = function() {
      var b, g, r, ref, x, y, z;
      ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
      r = rgb_xyz(r);
      g = rgb_xyz(g);
      b = rgb_xyz(b);
      x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / LAB_CONSTANTS.Xn);
      y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / LAB_CONSTANTS.Yn);
      z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / LAB_CONSTANTS.Zn);
      return [x, y, z];
    };
  
    chroma.lab = function() {
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Color, slice.call(arguments).concat(['lab']), function(){});
    };
  
    _input.lab = lab2rgb;
  
    Color.prototype.lab = function() {
      return rgb2lab(this._rgb);
    };
  
    bezier = function(colors) {
      var I, I0, I1, c, lab0, lab1, lab2, lab3, ref, ref1, ref2;
      colors = (function() {
        var len, o, results;
        results = [];
        for (o = 0, len = colors.length; o < len; o++) {
          c = colors[o];
          results.push(chroma(c));
        }
        return results;
      })();
      if (colors.length === 2) {
        ref = (function() {
          var len, o, results;
          results = [];
          for (o = 0, len = colors.length; o < len; o++) {
            c = colors[o];
            results.push(c.lab());
          }
          return results;
        })(), lab0 = ref[0], lab1 = ref[1];
        I = function(t) {
          var i, lab;
          lab = (function() {
            var o, results;
            results = [];
            for (i = o = 0; o <= 2; i = ++o) {
              results.push(lab0[i] + t * (lab1[i] - lab0[i]));
            }
            return results;
          })();
          return chroma.lab.apply(chroma, lab);
        };
      } else if (colors.length === 3) {
        ref1 = (function() {
          var len, o, results;
          results = [];
          for (o = 0, len = colors.length; o < len; o++) {
            c = colors[o];
            results.push(c.lab());
          }
          return results;
        })(), lab0 = ref1[0], lab1 = ref1[1], lab2 = ref1[2];
        I = function(t) {
          var i, lab;
          lab = (function() {
            var o, results;
            results = [];
            for (i = o = 0; o <= 2; i = ++o) {
              results.push((1 - t) * (1 - t) * lab0[i] + 2 * (1 - t) * t * lab1[i] + t * t * lab2[i]);
            }
            return results;
          })();
          return chroma.lab.apply(chroma, lab);
        };
      } else if (colors.length === 4) {
        ref2 = (function() {
          var len, o, results;
          results = [];
          for (o = 0, len = colors.length; o < len; o++) {
            c = colors[o];
            results.push(c.lab());
          }
          return results;
        })(), lab0 = ref2[0], lab1 = ref2[1], lab2 = ref2[2], lab3 = ref2[3];
        I = function(t) {
          var i, lab;
          lab = (function() {
            var o, results;
            results = [];
            for (i = o = 0; o <= 2; i = ++o) {
              results.push((1 - t) * (1 - t) * (1 - t) * lab0[i] + 3 * (1 - t) * (1 - t) * t * lab1[i] + 3 * (1 - t) * t * t * lab2[i] + t * t * t * lab3[i]);
            }
            return results;
          })();
          return chroma.lab.apply(chroma, lab);
        };
      } else if (colors.length === 5) {
        I0 = bezier(colors.slice(0, 3));
        I1 = bezier(colors.slice(2, 5));
        I = function(t) {
          if (t < 0.5) {
            return I0(t * 2);
          } else {
            return I1((t - 0.5) * 2);
          }
        };
      }
      return I;
    };
  
    chroma.bezier = function(colors) {
      var f;
      f = bezier(colors);
      f.scale = function() {
        return chroma.scale(f);
      };
      return f;
    };
  
    chroma.cubehelix = function(start, rotations, hue, gamma, lightness) {
      var dh, dl, f;
      if (start == null) {
        start = 300;
      }
      if (rotations == null) {
        rotations = -1.5;
      }
      if (hue == null) {
        hue = 1;
      }
      if (gamma == null) {
        gamma = 1;
      }
      if (lightness == null) {
        lightness = [0, 1];
      }
      dh = 0;
      if (type(lightness) === 'array') {
        dl = lightness[1] - lightness[0];
      } else {
        dl = 0;
        lightness = [lightness, lightness];
      }
      f = function(fract) {
        var a, amp, b, cos_a, g, h, l, r, sin_a;
        a = TWOPI * ((start + 120) / 360 + rotations * fract);
        l = pow(lightness[0] + dl * fract, gamma);
        h = dh !== 0 ? hue[0] + fract * dh : hue;
        amp = h * l * (1 - l) / 2;
        cos_a = cos(a);
        sin_a = sin(a);
        r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
        g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
        b = l + amp * (+1.97294 * cos_a);
        return chroma(clip_rgb([r * 255, g * 255, b * 255, 1]));
      };
      f.start = function(s) {
        if (s == null) {
          return start;
        }
        start = s;
        return f;
      };
      f.rotations = function(r) {
        if (r == null) {
          return rotations;
        }
        rotations = r;
        return f;
      };
      f.gamma = function(g) {
        if (g == null) {
          return gamma;
        }
        gamma = g;
        return f;
      };
      f.hue = function(h) {
        if (h == null) {
          return hue;
        }
        hue = h;
        if (type(hue) === 'array') {
          dh = hue[1] - hue[0];
          if (dh === 0) {
            hue = hue[1];
          }
        } else {
          dh = 0;
        }
        return f;
      };
      f.lightness = function(h) {
        if (h == null) {
          return lightness;
        }
        if (type(h) === 'array') {
          lightness = h;
          dl = h[1] - h[0];
        } else {
          lightness = [h, h];
          dl = 0;
        }
        return f;
      };
      f.scale = function() {
        return chroma.scale(f);
      };
      f.hue(hue);
      return f;
    };
  
    chroma.random = function() {
      var code, digits, i, o;
      digits = '0123456789abcdef';
      code = '#';
      for (i = o = 0; o < 6; i = ++o) {
        code += digits.charAt(floor(Math.random() * 16));
      }
      return new Color(code);
    };
  
    _interpolators = [];
  
    interpolate = function(col1, col2, f, m) {
      var interpol, len, o, res;
      if (f == null) {
        f = 0.5;
      }
      if (m == null) {
        m = 'rgb';
      }
  
      /*
      interpolates between colors
      f = 0 --> me
      f = 1 --> col
       */
      if (type(col1) !== 'object') {
        col1 = chroma(col1);
      }
      if (type(col2) !== 'object') {
        col2 = chroma(col2);
      }
      for (o = 0, len = _interpolators.length; o < len; o++) {
        interpol = _interpolators[o];
        if (m === interpol[0]) {
          res = interpol[1](col1, col2, f, m);
          break;
        }
      }
      if (res == null) {
        throw "color mode " + m + " is not supported";
      }
      return res.alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
    };
  
    chroma.interpolate = interpolate;
  
    Color.prototype.interpolate = function(col2, f, m) {
      return interpolate(this, col2, f, m);
    };
  
    chroma.mix = interpolate;
  
    Color.prototype.mix = Color.prototype.interpolate;
  
    _input.rgb = function() {
      var k, ref, results, v;
      ref = unpack(arguments);
      results = [];
      for (k in ref) {
        v = ref[k];
        results.push(v);
      }
      return results;
    };
  
    chroma.rgb = function() {
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Color, slice.call(arguments).concat(['rgb']), function(){});
    };
  
    Color.prototype.rgb = function(round) {
      if (round == null) {
        round = true;
      }
      if (round) {
        return this._rgb.map(Math.round).slice(0, 3);
      } else {
        return this._rgb.slice(0, 3);
      }
    };
  
    Color.prototype.rgba = function(round) {
      if (round == null) {
        round = true;
      }
      if (!round) {
        return this._rgb.slice(0);
      }
      return [Math.round(this._rgb[0]), Math.round(this._rgb[1]), Math.round(this._rgb[2]), this._rgb[3]];
    };
  
    _guess_formats.push({
      p: 3,
      test: function(n) {
        var a;
        a = unpack(arguments);
        if (type(a) === 'array' && a.length === 3) {
          return 'rgb';
        }
        if (a.length === 4 && type(a[3]) === "number" && a[3] >= 0 && a[3] <= 1) {
          return 'rgb';
        }
      }
    });
  
    _input.lrgb = _input.rgb;
  
    interpolate_lrgb = function(col1, col2, f, m) {
      var xyz0, xyz1;
      xyz0 = col1._rgb;
      xyz1 = col2._rgb;
      return new Color(sqrt(pow(xyz0[0], 2) * (1 - f) + pow(xyz1[0], 2) * f), sqrt(pow(xyz0[1], 2) * (1 - f) + pow(xyz1[1], 2) * f), sqrt(pow(xyz0[2], 2) * (1 - f) + pow(xyz1[2], 2) * f), m);
    };
  
    _average_lrgb = function(colors) {
      var col, f, len, o, rgb, xyz;
      f = 1 / colors.length;
      xyz = [0, 0, 0, 0];
      for (o = 0, len = colors.length; o < len; o++) {
        col = colors[o];
        rgb = col._rgb;
        xyz[0] += pow(rgb[0], 2) * f;
        xyz[1] += pow(rgb[1], 2) * f;
        xyz[2] += pow(rgb[2], 2) * f;
        xyz[3] += rgb[3] * f;
      }
      xyz[0] = sqrt(xyz[0]);
      xyz[1] = sqrt(xyz[1]);
      xyz[2] = sqrt(xyz[2]);
      if (xyz[3] > 1) {
        xyz[3] = 1;
      }
      return new Color(clip_rgb(xyz));
    };
  
    _interpolators.push(['lrgb', interpolate_lrgb]);
  
    chroma.average = function(colors, mode) {
      var A, alpha, c, cnt, dx, dy, first, i, l, len, o, xyz, xyz2;
      if (mode == null) {
        mode = 'rgb';
      }
      l = colors.length;
      colors = colors.map(function(c) {
        return chroma(c);
      });
      first = colors.splice(0, 1)[0];
      if (mode === 'lrgb') {
        return _average_lrgb(colors);
      }
      xyz = first.get(mode);
      cnt = [];
      dx = 0;
      dy = 0;
      for (i in xyz) {
        xyz[i] = xyz[i] || 0;
        cnt.push(isNaN(xyz[i]) ? 0 : 1);
        if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
          A = xyz[i] / 180 * PI;
          dx += cos(A);
          dy += sin(A);
        }
      }
      alpha = first.alpha();
      for (o = 0, len = colors.length; o < len; o++) {
        c = colors[o];
        xyz2 = c.get(mode);
        alpha += c.alpha();
        for (i in xyz) {
          if (!isNaN(xyz2[i])) {
            cnt[i] += 1;
            if (mode.charAt(i) === 'h') {
              A = xyz2[i] / 180 * PI;
              dx += cos(A);
              dy += sin(A);
            } else {
              xyz[i] += xyz2[i];
            }
          }
        }
      }
      for (i in xyz) {
        if (mode.charAt(i) === 'h') {
          A = atan2(dy / cnt[i], dx / cnt[i]) / PI * 180;
          while (A < 0) {
            A += 360;
          }
          while (A >= 360) {
            A -= 360;
          }
          xyz[i] = A;
        } else {
          xyz[i] = xyz[i] / cnt[i];
        }
      }
      return chroma(xyz, mode).alpha(alpha / l);
    };
  
    hex2rgb = function(hex) {
      var a, b, g, r, rgb, u;
      if (hex.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
        if (hex.length === 4 || hex.length === 7) {
          hex = hex.substr(1);
        }
        if (hex.length === 3) {
          hex = hex.split("");
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        u = parseInt(hex, 16);
        r = u >> 16;
        g = u >> 8 & 0xFF;
        b = u & 0xFF;
        return [r, g, b, 1];
      }
      if (hex.match(/^#?([A-Fa-f0-9]{8})$/)) {
        if (hex.length === 9) {
          hex = hex.substr(1);
        }
        u = parseInt(hex, 16);
        r = u >> 24 & 0xFF;
        g = u >> 16 & 0xFF;
        b = u >> 8 & 0xFF;
        a = round((u & 0xFF) / 0xFF * 100) / 100;
        return [r, g, b, a];
      }
      if ((_input.css != null) && (rgb = _input.css(hex))) {
        return rgb;
      }
      throw "unknown color: " + hex;
    };
  
    rgb2hex = function(channels, mode) {
      var a, b, g, hxa, r, str, u;
      if (mode == null) {
        mode = 'auto';
      }
      r = channels[0], g = channels[1], b = channels[2], a = channels[3];
      if (mode === 'auto') {
        mode = a < 1 ? 'rgba' : 'rgb';
      }
      r = Math.round(r);
      g = Math.round(g);
      b = Math.round(b);
      u = r << 16 | g << 8 | b;
      str = "000000" + u.toString(16);
      str = str.substr(str.length - 6);
      hxa = '0' + round(a * 255).toString(16);
      hxa = hxa.substr(hxa.length - 2);
      return "#" + (function() {
        switch (mode.toLowerCase()) {
          case 'rgba':
            return str + hxa;
          case 'argb':
            return hxa + str;
          default:
            return str;
        }
      })();
    };
  
    _input.hex = function(h) {
      return hex2rgb(h);
    };
  
    chroma.hex = function() {
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Color, slice.call(arguments).concat(['hex']), function(){});
    };
  
    Color.prototype.hex = function(mode) {
      if (mode == null) {
        mode = 'auto';
      }
      return rgb2hex(this._rgb, mode);
    };
  
    _guess_formats.push({
      p: 4,
      test: function(n) {
        if (arguments.length === 1 && type(n) === "string") {
          return 'hex';
        }
      }
    });
  
    hsl2rgb = function() {
      var args, b, c, g, h, i, l, o, r, ref, s, t1, t2, t3;
      args = unpack(arguments);
      h = args[0], s = args[1], l = args[2];
      if (s === 0) {
        r = g = b = l * 255;
      } else {
        t3 = [0, 0, 0];
        c = [0, 0, 0];
        t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
        t1 = 2 * l - t2;
        h /= 360;
        t3[0] = h + 1 / 3;
        t3[1] = h;
        t3[2] = h - 1 / 3;
        for (i = o = 0; o <= 2; i = ++o) {
          if (t3[i] < 0) {
            t3[i] += 1;
          }
          if (t3[i] > 1) {
            t3[i] -= 1;
          }
          if (6 * t3[i] < 1) {
            c[i] = t1 + (t2 - t1) * 6 * t3[i];
          } else if (2 * t3[i] < 1) {
            c[i] = t2;
          } else if (3 * t3[i] < 2) {
            c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6;
          } else {
            c[i] = t1;
          }
        }
        ref = [round(c[0] * 255), round(c[1] * 255), round(c[2] * 255)], r = ref[0], g = ref[1], b = ref[2];
      }
      if (args.length > 3) {
        return [r, g, b, args[3]];
      } else {
        return [r, g, b];
      }
    };
  
    rgb2hsl = function(r, g, b) {
      var h, l, min, ref, s;
      if (r !== void 0 && r.length >= 3) {
        ref = r, r = ref[0], g = ref[1], b = ref[2];
      }
      r /= 255;
      g /= 255;
      b /= 255;
      min = Math.min(r, g, b);
      max = Math.max(r, g, b);
      l = (max + min) / 2;
      if (max === min) {
        s = 0;
        h = Number.NaN;
      } else {
        s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
      }
      if (r === max) {
        h = (g - b) / (max - min);
      } else if (g === max) {
        h = 2 + (b - r) / (max - min);
      } else if (b === max) {
        h = 4 + (r - g) / (max - min);
      }
      h *= 60;
      if (h < 0) {
        h += 360;
      }
      return [h, s, l];
    };
  
    chroma.hsl = function() {
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Color, slice.call(arguments).concat(['hsl']), function(){});
    };
  
    _input.hsl = hsl2rgb;
  
    Color.prototype.hsl = function() {
      return rgb2hsl(this._rgb);
    };
  
    hsv2rgb = function() {
      var args, b, f, g, h, i, p, q, r, ref, ref1, ref2, ref3, ref4, ref5, s, t, v;
      args = unpack(arguments);
      h = args[0], s = args[1], v = args[2];
      v *= 255;
      if (s === 0) {
        r = g = b = v;
      } else {
        if (h === 360) {
          h = 0;
        }
        if (h > 360) {
          h -= 360;
        }
        if (h < 0) {
          h += 360;
        }
        h /= 60;
        i = floor(h);
        f = h - i;
        p = v * (1 - s);
        q = v * (1 - s * f);
        t = v * (1 - s * (1 - f));
        switch (i) {
          case 0:
            ref = [v, t, p], r = ref[0], g = ref[1], b = ref[2];
            break;
          case 1:
            ref1 = [q, v, p], r = ref1[0], g = ref1[1], b = ref1[2];
            break;
          case 2:
            ref2 = [p, v, t], r = ref2[0], g = ref2[1], b = ref2[2];
            break;
          case 3:
            ref3 = [p, q, v], r = ref3[0], g = ref3[1], b = ref3[2];
            break;
          case 4:
            ref4 = [t, p, v], r = ref4[0], g = ref4[1], b = ref4[2];
            break;
          case 5:
            ref5 = [v, p, q], r = ref5[0], g = ref5[1], b = ref5[2];
        }
      }
      return [r, g, b, args.length > 3 ? args[3] : 1];
    };
  
    rgb2hsv = function() {
      var b, delta, g, h, min, r, ref, s, v;
      ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
      min = Math.min(r, g, b);
      max = Math.max(r, g, b);
      delta = max - min;
      v = max / 255.0;
      if (max === 0) {
        h = Number.NaN;
        s = 0;
      } else {
        s = delta / max;
        if (r === max) {
          h = (g - b) / delta;
        }
        if (g === max) {
          h = 2 + (b - r) / delta;
        }
        if (b === max) {
          h = 4 + (r - g) / delta;
        }
        h *= 60;
        if (h < 0) {
          h += 360;
        }
      }
      return [h, s, v];
    };
  
    chroma.hsv = function() {
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Color, slice.call(arguments).concat(['hsv']), function(){});
    };
  
    _input.hsv = hsv2rgb;
  
    Color.prototype.hsv = function() {
      return rgb2hsv(this._rgb);
    };
  
    num2rgb = function(num) {
      var b, g, r;
      if (type(num) === "number" && num >= 0 && num <= 0xFFFFFF) {
        r = num >> 16;
        g = (num >> 8) & 0xFF;
        b = num & 0xFF;
        return [r, g, b, 1];
      }
      console.warn("unknown num color: " + num);
      return [0, 0, 0, 1];
    };
  
    rgb2num = function() {
      var b, g, r, ref;
      ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
      return (r << 16) + (g << 8) + b;
    };
  
    chroma.num = function(num) {
      return new Color(num, 'num');
    };
  
    Color.prototype.num = function(mode) {
      if (mode == null) {
        mode = 'rgb';
      }
      return rgb2num(this._rgb, mode);
    };
  
    _input.num = num2rgb;
  
    _guess_formats.push({
      p: 1,
      test: function(n) {
        if (arguments.length === 1 && type(n) === "number" && n >= 0 && n <= 0xFFFFFF) {
          return 'num';
        }
      }
    });
  
    hcg2rgb = function() {
      var _c, _g, args, b, c, f, g, h, i, p, q, r, ref, ref1, ref2, ref3, ref4, ref5, t, v;
      args = unpack(arguments);
      h = args[0], c = args[1], _g = args[2];
      c = c / 100;
      g = g / 100 * 255;
      _c = c * 255;
      if (c === 0) {
        r = g = b = _g;
      } else {
        if (h === 360) {
          h = 0;
        }
        if (h > 360) {
          h -= 360;
        }
        if (h < 0) {
          h += 360;
        }
        h /= 60;
        i = floor(h);
        f = h - i;
        p = _g * (1 - c);
        q = p + _c * (1 - f);
        t = p + _c * f;
        v = p + _c;
        switch (i) {
          case 0:
            ref = [v, t, p], r = ref[0], g = ref[1], b = ref[2];
            break;
          case 1:
            ref1 = [q, v, p], r = ref1[0], g = ref1[1], b = ref1[2];
            break;
          case 2:
            ref2 = [p, v, t], r = ref2[0], g = ref2[1], b = ref2[2];
            break;
          case 3:
            ref3 = [p, q, v], r = ref3[0], g = ref3[1], b = ref3[2];
            break;
          case 4:
            ref4 = [t, p, v], r = ref4[0], g = ref4[1], b = ref4[2];
            break;
          case 5:
            ref5 = [v, p, q], r = ref5[0], g = ref5[1], b = ref5[2];
        }
      }
      return [r, g, b, args.length > 3 ? args[3] : 1];
    };
  
    rgb2hcg = function() {
      var _g, b, c, delta, g, h, min, r, ref;
      ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
      min = Math.min(r, g, b);
      max = Math.max(r, g, b);
      delta = max - min;
      c = delta * 100 / 255;
      _g = min / (255 - delta) * 100;
      if (delta === 0) {
        h = Number.NaN;
      } else {
        if (r === max) {
          h = (g - b) / delta;
        }
        if (g === max) {
          h = 2 + (b - r) / delta;
        }
        if (b === max) {
          h = 4 + (r - g) / delta;
        }
        h *= 60;
        if (h < 0) {
          h += 360;
        }
      }
      return [h, c, _g];
    };
  
    chroma.hcg = function() {
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Color, slice.call(arguments).concat(['hcg']), function(){});
    };
  
    _input.hcg = hcg2rgb;
  
    Color.prototype.hcg = function() {
      return rgb2hcg(this._rgb);
    };
  
    css2rgb = function(css) {
      var aa, ab, hsl, i, m, o, rgb, w;
      css = css.toLowerCase();
      if ((chroma.colors != null) && chroma.colors[css]) {
        return hex2rgb(chroma.colors[css]);
      }
      if (m = css.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
        rgb = m.slice(1, 4);
        for (i = o = 0; o <= 2; i = ++o) {
          rgb[i] = +rgb[i];
        }
        rgb[3] = 1;
      } else if (m = css.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)) {
        rgb = m.slice(1, 5);
        for (i = w = 0; w <= 3; i = ++w) {
          rgb[i] = +rgb[i];
        }
      } else if (m = css.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
        rgb = m.slice(1, 4);
        for (i = aa = 0; aa <= 2; i = ++aa) {
          rgb[i] = round(rgb[i] * 2.55);
        }
        rgb[3] = 1;
      } else if (m = css.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
        rgb = m.slice(1, 5);
        for (i = ab = 0; ab <= 2; i = ++ab) {
          rgb[i] = round(rgb[i] * 2.55);
        }
        rgb[3] = +rgb[3];
      } else if (m = css.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
        hsl = m.slice(1, 4);
        hsl[1] *= 0.01;
        hsl[2] *= 0.01;
        rgb = hsl2rgb(hsl);
        rgb[3] = 1;
      } else if (m = css.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
        hsl = m.slice(1, 4);
        hsl[1] *= 0.01;
        hsl[2] *= 0.01;
        rgb = hsl2rgb(hsl);
        rgb[3] = +m[4];
      }
      return rgb;
    };
  
    rgb2css = function(rgba) {
      var mode;
      mode = rgba[3] < 1 ? 'rgba' : 'rgb';
      if (mode === 'rgb') {
        return mode + '(' + rgba.slice(0, 3).map(round).join(',') + ')';
      } else if (mode === 'rgba') {
        return mode + '(' + rgba.slice(0, 3).map(round).join(',') + ',' + rgba[3] + ')';
      } else {
  
      }
    };
  
    rnd = function(a) {
      return round(a * 100) / 100;
    };
  
    hsl2css = function(hsl, alpha) {
      var mode;
      mode = alpha < 1 ? 'hsla' : 'hsl';
      hsl[0] = rnd(hsl[0] || 0);
      hsl[1] = rnd(hsl[1] * 100) + '%';
      hsl[2] = rnd(hsl[2] * 100) + '%';
      if (mode === 'hsla') {
        hsl[3] = alpha;
      }
      return mode + '(' + hsl.join(',') + ')';
    };
  
    _input.css = function(h) {
      return css2rgb(h);
    };
  
    chroma.css = function() {
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Color, slice.call(arguments).concat(['css']), function(){});
    };
  
    Color.prototype.css = function(mode) {
      if (mode == null) {
        mode = 'rgb';
      }
      if (mode.slice(0, 3) === 'rgb') {
        return rgb2css(this._rgb);
      } else if (mode.slice(0, 3) === 'hsl') {
        return hsl2css(this.hsl(), this.alpha());
      }
    };
  
    _input.named = function(name) {
      return hex2rgb(w3cx11[name]);
    };
  
    _guess_formats.push({
      p: 5,
      test: function(n) {
        if (arguments.length === 1 && (w3cx11[n] != null)) {
          return 'named';
        }
      }
    });
  
    Color.prototype.name = function(n) {
      var h, k;
      if (arguments.length) {
        if (w3cx11[n]) {
          this._rgb = hex2rgb(w3cx11[n]);
        }
        this._rgb[3] = 1;
        this;
      }
      h = this.hex('rgb');
      for (k in w3cx11) {
        if (h === w3cx11[k]) {
          return k;
        }
      }
      return h;
    };
  
    lch2lab = function() {
  
      /*
      Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
      These formulas were invented by David Dalrymple to obtain maximum contrast without going
      out of gamut if the parameters are in the range 0-1.
      
      A saturation multiplier was added by Gregor Aisch
       */
      var c, h, l, ref;
      ref = unpack(arguments), l = ref[0], c = ref[1], h = ref[2];
      h = h * DEG2RAD;
      return [l, cos(h) * c, sin(h) * c];
    };
  
    lch2rgb = function() {
      var L, a, args, b, c, g, h, l, r, ref, ref1;
      args = unpack(arguments);
      l = args[0], c = args[1], h = args[2];
      ref = lch2lab(l, c, h), L = ref[0], a = ref[1], b = ref[2];
      ref1 = lab2rgb(L, a, b), r = ref1[0], g = ref1[1], b = ref1[2];
      return [r, g, b, args.length > 3 ? args[3] : 1];
    };
  
    lab2lch = function() {
      var a, b, c, h, l, ref;
      ref = unpack(arguments), l = ref[0], a = ref[1], b = ref[2];
      c = sqrt(a * a + b * b);
      h = (atan2(b, a) * RAD2DEG + 360) % 360;
      if (round(c * 10000) === 0) {
        h = Number.NaN;
      }
      return [l, c, h];
    };
  
    rgb2lch = function() {
      var a, b, g, l, r, ref, ref1;
      ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
      ref1 = rgb2lab(r, g, b), l = ref1[0], a = ref1[1], b = ref1[2];
      return lab2lch(l, a, b);
    };
  
    chroma.lch = function() {
      var args;
      args = unpack(arguments);
      return new Color(args, 'lch');
    };
  
    chroma.hcl = function() {
      var args;
      args = unpack(arguments);
      return new Color(args, 'hcl');
    };
  
    _input.lch = lch2rgb;
  
    _input.hcl = function() {
      var c, h, l, ref;
      ref = unpack(arguments), h = ref[0], c = ref[1], l = ref[2];
      return lch2rgb([l, c, h]);
    };
  
    Color.prototype.lch = function() {
      return rgb2lch(this._rgb);
    };
  
    Color.prototype.hcl = function() {
      return rgb2lch(this._rgb).reverse();
    };
  
    rgb2cmyk = function(mode) {
      var b, c, f, g, k, m, r, ref, y;
      if (mode == null) {
        mode = 'rgb';
      }
      ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
      r = r / 255;
      g = g / 255;
      b = b / 255;
      k = 1 - Math.max(r, Math.max(g, b));
      f = k < 1 ? 1 / (1 - k) : 0;
      c = (1 - r - k) * f;
      m = (1 - g - k) * f;
      y = (1 - b - k) * f;
      return [c, m, y, k];
    };
  
    cmyk2rgb = function() {
      var alpha, args, b, c, g, k, m, r, y;
      args = unpack(arguments);
      c = args[0], m = args[1], y = args[2], k = args[3];
      alpha = args.length > 4 ? args[4] : 1;
      if (k === 1) {
        return [0, 0, 0, alpha];
      }
      r = c >= 1 ? 0 : 255 * (1 - c) * (1 - k);
      g = m >= 1 ? 0 : 255 * (1 - m) * (1 - k);
      b = y >= 1 ? 0 : 255 * (1 - y) * (1 - k);
      return [r, g, b, alpha];
    };
  
    _input.cmyk = function() {
      return cmyk2rgb(unpack(arguments));
    };
  
    chroma.cmyk = function() {
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Color, slice.call(arguments).concat(['cmyk']), function(){});
    };
  
    Color.prototype.cmyk = function() {
      return rgb2cmyk(this._rgb);
    };
  
    _input.gl = function() {
      var i, k, o, rgb, v;
      rgb = (function() {
        var ref, results;
        ref = unpack(arguments);
        results = [];
        for (k in ref) {
          v = ref[k];
          results.push(v);
        }
        return results;
      }).apply(this, arguments);
      for (i = o = 0; o <= 2; i = ++o) {
        rgb[i] *= 255;
      }
      return rgb;
    };
  
    chroma.gl = function() {
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Color, slice.call(arguments).concat(['gl']), function(){});
    };
  
    Color.prototype.gl = function() {
      var rgb;
      rgb = this._rgb;
      return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, rgb[3]];
    };
  
    rgb2luminance = function(r, g, b) {
      var ref;
      ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
      r = luminance_x(r);
      g = luminance_x(g);
      b = luminance_x(b);
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
  
    luminance_x = function(x) {
      x /= 255;
      if (x <= 0.03928) {
        return x / 12.92;
      } else {
        return pow((x + 0.055) / 1.055, 2.4);
      }
    };
  
    interpolate_rgb = function(col1, col2, f, m) {
      var xyz0, xyz1;
      xyz0 = col1._rgb;
      xyz1 = col2._rgb;
      return new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
    };
  
    _interpolators.push(['rgb', interpolate_rgb]);
  
    Color.prototype.luminance = function(lum, mode) {
      var cur_lum, eps, max_iter, rgba, test;
      if (mode == null) {
        mode = 'rgb';
      }
      if (!arguments.length) {
        return rgb2luminance(this._rgb);
      }
      rgba = this._rgb;
      if (lum === 0) {
        rgba = [0, 0, 0, this._rgb[3]];
      } else if (lum === 1) {
        rgba = [255, 255, 255, this[3]];
      } else {
        cur_lum = rgb2luminance(this._rgb);
        eps = 1e-7;
        max_iter = 20;
        test = function(l, h) {
          var lm, m;
          m = l.interpolate(h, 0.5, mode);
          lm = m.luminance();
          if (Math.abs(lum - lm) < eps || !max_iter--) {
            return m;
          }
          if (lm > lum) {
            return test(l, m);
          }
          return test(m, h);
        };
        if (cur_lum > lum) {
          rgba = test(chroma('black'), this).rgba();
        } else {
          rgba = test(this, chroma('white')).rgba();
        }
      }
      return chroma(rgba).alpha(this.alpha());
    };
  
    temperature2rgb = function(kelvin) {
      var b, g, r, temp;
      temp = kelvin / 100;
      if (temp < 66) {
        r = 255;
        g = -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g);
        b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b);
      } else {
        r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r);
        g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g);
        b = 255;
      }
      return [r, g, b];
    };
  
    rgb2temperature = function() {
      var b, eps, g, maxTemp, minTemp, r, ref, rgb, temp;
      ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
      minTemp = 1000;
      maxTemp = 40000;
      eps = 0.4;
      while (maxTemp - minTemp > eps) {
        temp = (maxTemp + minTemp) * 0.5;
        rgb = temperature2rgb(temp);
        if ((rgb[2] / rgb[0]) >= (b / r)) {
          maxTemp = temp;
        } else {
          minTemp = temp;
        }
      }
      return round(temp);
    };
  
    chroma.temperature = chroma.kelvin = function() {
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Color, slice.call(arguments).concat(['temperature']), function(){});
    };
  
    _input.temperature = _input.kelvin = _input.K = temperature2rgb;
  
    Color.prototype.temperature = function() {
      return rgb2temperature(this._rgb);
    };
  
    Color.prototype.kelvin = Color.prototype.temperature;
  
    chroma.contrast = function(a, b) {
      var l1, l2, ref, ref1;
      if ((ref = type(a)) === 'string' || ref === 'number') {
        a = new Color(a);
      }
      if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
        b = new Color(b);
      }
      l1 = a.luminance();
      l2 = b.luminance();
      if (l1 > l2) {
        return (l1 + 0.05) / (l2 + 0.05);
      } else {
        return (l2 + 0.05) / (l1 + 0.05);
      }
    };
  
    chroma.distance = function(a, b, mode) {
      var d, i, l1, l2, ref, ref1, sum_sq;
      if (mode == null) {
        mode = 'lab';
      }
      if ((ref = type(a)) === 'string' || ref === 'number') {
        a = new Color(a);
      }
      if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
        b = new Color(b);
      }
      l1 = a.get(mode);
      l2 = b.get(mode);
      sum_sq = 0;
      for (i in l1) {
        d = (l1[i] || 0) - (l2[i] || 0);
        sum_sq += d * d;
      }
      return Math.sqrt(sum_sq);
    };
  
    chroma.deltaE = function(a, b, L, C) {
      var L1, L2, a1, a2, b1, b2, c1, c2, c4, dH2, delA, delB, delC, delL, f, h1, ref, ref1, ref2, ref3, sc, sh, sl, t, v1, v2, v3;
      if (L == null) {
        L = 1;
      }
      if (C == null) {
        C = 1;
      }
      if ((ref = type(a)) === 'string' || ref === 'number') {
        a = new Color(a);
      }
      if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
        b = new Color(b);
      }
      ref2 = a.lab(), L1 = ref2[0], a1 = ref2[1], b1 = ref2[2];
      ref3 = b.lab(), L2 = ref3[0], a2 = ref3[1], b2 = ref3[2];
      c1 = sqrt(a1 * a1 + b1 * b1);
      c2 = sqrt(a2 * a2 + b2 * b2);
      sl = L1 < 16.0 ? 0.511 : (0.040975 * L1) / (1.0 + 0.01765 * L1);
      sc = (0.0638 * c1) / (1.0 + 0.0131 * c1) + 0.638;
      h1 = c1 < 0.000001 ? 0.0 : (atan2(b1, a1) * 180.0) / PI;
      while (h1 < 0) {
        h1 += 360;
      }
      while (h1 >= 360) {
        h1 -= 360;
      }
      t = (h1 >= 164.0) && (h1 <= 345.0) ? 0.56 + abs(0.2 * cos((PI * (h1 + 168.0)) / 180.0)) : 0.36 + abs(0.4 * cos((PI * (h1 + 35.0)) / 180.0));
      c4 = c1 * c1 * c1 * c1;
      f = sqrt(c4 / (c4 + 1900.0));
      sh = sc * (f * t + 1.0 - f);
      delL = L1 - L2;
      delC = c1 - c2;
      delA = a1 - a2;
      delB = b1 - b2;
      dH2 = delA * delA + delB * delB - delC * delC;
      v1 = delL / (L * sl);
      v2 = delC / (C * sc);
      v3 = sh;
      return sqrt(v1 * v1 + v2 * v2 + (dH2 / (v3 * v3)));
    };
  
    Color.prototype.get = function(modechan) {
      var channel, i, me, mode, ref, src;
      me = this;
      ref = modechan.split('.'), mode = ref[0], channel = ref[1];
      src = me[mode]();
      if (channel) {
        i = mode.indexOf(channel);
        if (i > -1) {
          return src[i];
        } else {
          return console.warn('unknown channel ' + channel + ' in mode ' + mode);
        }
      } else {
        return src;
      }
    };
  
    Color.prototype.set = function(modechan, value) {
      var channel, i, me, mode, ref, src;
      me = this;
      ref = modechan.split('.'), mode = ref[0], channel = ref[1];
      if (channel) {
        src = me[mode]();
        i = mode.indexOf(channel);
        if (i > -1) {
          if (type(value) === 'string') {
            switch (value.charAt(0)) {
              case '+':
                src[i] += +value;
                break;
              case '-':
                src[i] += +value;
                break;
              case '*':
                src[i] *= +(value.substr(1));
                break;
              case '/':
                src[i] /= +(value.substr(1));
                break;
              default:
                src[i] = +value;
            }
          } else {
            src[i] = value;
          }
        } else {
          console.warn('unknown channel ' + channel + ' in mode ' + mode);
        }
      } else {
        src = value;
      }
      return chroma(src, mode).alpha(me.alpha());
    };
  
    Color.prototype.clipped = function() {
      return this._rgb._clipped || false;
    };
  
    Color.prototype.alpha = function(a) {
      if (arguments.length) {
        return chroma.rgb([this._rgb[0], this._rgb[1], this._rgb[2], a]);
      }
      return this._rgb[3];
    };
  
    Color.prototype.darken = function(amount) {
      var lab, me;
      if (amount == null) {
        amount = 1;
      }
      me = this;
      lab = me.lab();
      lab[0] -= LAB_CONSTANTS.Kn * amount;
      return chroma.lab(lab).alpha(me.alpha());
    };
  
    Color.prototype.brighten = function(amount) {
      if (amount == null) {
        amount = 1;
      }
      return this.darken(-amount);
    };
  
    Color.prototype.darker = Color.prototype.darken;
  
    Color.prototype.brighter = Color.prototype.brighten;
  
    Color.prototype.saturate = function(amount) {
      var lch, me;
      if (amount == null) {
        amount = 1;
      }
      me = this;
      lch = me.lch();
      lch[1] += amount * LAB_CONSTANTS.Kn;
      if (lch[1] < 0) {
        lch[1] = 0;
      }
      return chroma.lch(lch).alpha(me.alpha());
    };
  
    Color.prototype.desaturate = function(amount) {
      if (amount == null) {
        amount = 1;
      }
      return this.saturate(-amount);
    };
  
    Color.prototype.premultiply = function() {
      var a, rgb;
      rgb = this.rgb();
      a = this.alpha();
      return chroma(rgb[0] * a, rgb[1] * a, rgb[2] * a, a);
    };
  
    blend = function(bottom, top, mode) {
      if (!blend[mode]) {
        throw 'unknown blend mode ' + mode;
      }
      return blend[mode](bottom, top);
    };
  
    blend_f = function(f) {
      return function(bottom, top) {
        var c0, c1;
        c0 = chroma(top).rgb();
        c1 = chroma(bottom).rgb();
        return chroma(f(c0, c1), 'rgb');
      };
    };
  
    each = function(f) {
      return function(c0, c1) {
        var i, o, out;
        out = [];
        for (i = o = 0; o <= 3; i = ++o) {
          out[i] = f(c0[i], c1[i]);
        }
        return out;
      };
    };
  
    normal = function(a, b) {
      return a;
    };
  
    multiply = function(a, b) {
      return a * b / 255;
    };
  
    darken = function(a, b) {
      if (a > b) {
        return b;
      } else {
        return a;
      }
    };
  
    lighten = function(a, b) {
      if (a > b) {
        return a;
      } else {
        return b;
      }
    };
  
    screen = function(a, b) {
      return 255 * (1 - (1 - a / 255) * (1 - b / 255));
    };
  
    overlay = function(a, b) {
      if (b < 128) {
        return 2 * a * b / 255;
      } else {
        return 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
      }
    };
  
    burn = function(a, b) {
      return 255 * (1 - (1 - b / 255) / (a / 255));
    };
  
    dodge = function(a, b) {
      if (a === 255) {
        return 255;
      }
      a = 255 * (b / 255) / (1 - a / 255);
      if (a > 255) {
        return 255;
      } else {
        return a;
      }
    };
  
    blend.normal = blend_f(each(normal));
  
    blend.multiply = blend_f(each(multiply));
  
    blend.screen = blend_f(each(screen));
  
    blend.overlay = blend_f(each(overlay));
  
    blend.darken = blend_f(each(darken));
  
    blend.lighten = blend_f(each(lighten));
  
    blend.dodge = blend_f(each(dodge));
  
    blend.burn = blend_f(each(burn));
  
    chroma.blend = blend;
  
    chroma.analyze = function(data) {
      var len, o, r, val;
      r = {
        min: Number.MAX_VALUE,
        max: Number.MAX_VALUE * -1,
        sum: 0,
        values: [],
        count: 0
      };
      for (o = 0, len = data.length; o < len; o++) {
        val = data[o];
        if ((val != null) && !isNaN(val)) {
          r.values.push(val);
          r.sum += val;
          if (val < r.min) {
            r.min = val;
          }
          if (val > r.max) {
            r.max = val;
          }
          r.count += 1;
        }
      }
      r.domain = [r.min, r.max];
      r.limits = function(mode, num) {
        return chroma.limits(r, mode, num);
      };
      return r;
    };
  
    chroma.scale = function(colors, positions) {
      var _classes, _colorCache, _colors, _correctLightness, _domain, _fixed, _gamma, _max, _min, _mode, _nacol, _out, _padding, _pos, _spread, _useCache, classifyValue, f, getClass, getColor, resetCache, setColors, tmap;
      _mode = 'rgb';
      _nacol = chroma('#ccc');
      _spread = 0;
      _fixed = false;
      _domain = [0, 1];
      _pos = [];
      _padding = [0, 0];
      _classes = false;
      _colors = [];
      _out = false;
      _min = 0;
      _max = 1;
      _correctLightness = false;
      _colorCache = {};
      _useCache = true;
      _gamma = 1;
      setColors = function(colors) {
        var c, col, o, ref, ref1, w;
        if (colors == null) {
          colors = ['#fff', '#000'];
        }
        if ((colors != null) && type(colors) === 'string' && (chroma.brewer != null)) {
          colors = chroma.brewer[colors] || chroma.brewer[colors.toLowerCase()] || colors;
        }
        if (type(colors) === 'array') {
          if (colors.length === 1) {
            colors = [colors[0], colors[0]];
          }
          colors = colors.slice(0);
          for (c = o = 0, ref = colors.length - 1; 0 <= ref ? o <= ref : o >= ref; c = 0 <= ref ? ++o : --o) {
            col = colors[c];
            if (type(col) === "string") {
              colors[c] = chroma(col);
            }
          }
          _pos.length = 0;
          for (c = w = 0, ref1 = colors.length - 1; 0 <= ref1 ? w <= ref1 : w >= ref1; c = 0 <= ref1 ? ++w : --w) {
            _pos.push(c / (colors.length - 1));
          }
        }
        resetCache();
        return _colors = colors;
      };
      getClass = function(value) {
        var i, n;
        if (_classes != null) {
          n = _classes.length - 1;
          i = 0;
          while (i < n && value >= _classes[i]) {
            i++;
          }
          return i - 1;
        }
        return 0;
      };
      tmap = function(t) {
        return t;
      };
      classifyValue = function(value) {
        var i, maxc, minc, n, val;
        val = value;
        if (_classes.length > 2) {
          n = _classes.length - 1;
          i = getClass(value);
          minc = _classes[0] + (_classes[1] - _classes[0]) * (0 + _spread * 0.5);
          maxc = _classes[n - 1] + (_classes[n] - _classes[n - 1]) * (1 - _spread * 0.5);
          val = _min + ((_classes[i] + (_classes[i + 1] - _classes[i]) * 0.5 - minc) / (maxc - minc)) * (_max - _min);
        }
        return val;
      };
      getColor = function(val, bypassMap) {
        var c, col, i, k, o, p, ref, t;
        if (bypassMap == null) {
          bypassMap = false;
        }
        if (isNaN(val) || val === null) {
          return _nacol;
        }
        if (!bypassMap) {
          if (_classes && _classes.length > 2) {
            c = getClass(val);
            t = c / (_classes.length - 2);
          } else if (_max !== _min) {
            t = (val - _min) / (_max - _min);
          } else {
            t = 1;
          }
        } else {
          t = val;
        }
        if (!bypassMap) {
          t = tmap(t);
        }
        if (_gamma !== 1) {
          t = pow(t, _gamma);
        }
        t = _padding[0] + (t * (1 - _padding[0] - _padding[1]));
        t = Math.min(1, Math.max(0, t));
        k = Math.floor(t * 10000);
        if (_useCache && _colorCache[k]) {
          col = _colorCache[k];
        } else {
          if (type(_colors) === 'array') {
            for (i = o = 0, ref = _pos.length - 1; 0 <= ref ? o <= ref : o >= ref; i = 0 <= ref ? ++o : --o) {
              p = _pos[i];
              if (t <= p) {
                col = _colors[i];
                break;
              }
              if (t >= p && i === _pos.length - 1) {
                col = _colors[i];
                break;
              }
              if (t > p && t < _pos[i + 1]) {
                t = (t - p) / (_pos[i + 1] - p);
                col = chroma.interpolate(_colors[i], _colors[i + 1], t, _mode);
                break;
              }
            }
          } else if (type(_colors) === 'function') {
            col = _colors(t);
          }
          if (_useCache) {
            _colorCache[k] = col;
          }
        }
        return col;
      };
      resetCache = function() {
        return _colorCache = {};
      };
      setColors(colors);
      f = function(v) {
        var c;
        c = chroma(getColor(v));
        if (_out && c[_out]) {
          return c[_out]();
        } else {
          return c;
        }
      };
      f.classes = function(classes) {
        var d;
        if (classes != null) {
          if (type(classes) === 'array') {
            _classes = classes;
            _domain = [classes[0], classes[classes.length - 1]];
          } else {
            d = chroma.analyze(_domain);
            if (classes === 0) {
              _classes = [d.min, d.max];
            } else {
              _classes = chroma.limits(d, 'e', classes);
            }
          }
          return f;
        }
        return _classes;
      };
      f.domain = function(domain) {
        var c, d, k, len, o, ref, w;
        if (!arguments.length) {
          return _domain;
        }
        _min = domain[0];
        _max = domain[domain.length - 1];
        _pos = [];
        k = _colors.length;
        if (domain.length === k && _min !== _max) {
          for (o = 0, len = domain.length; o < len; o++) {
            d = domain[o];
            _pos.push((d - _min) / (_max - _min));
          }
        } else {
          for (c = w = 0, ref = k - 1; 0 <= ref ? w <= ref : w >= ref; c = 0 <= ref ? ++w : --w) {
            _pos.push(c / (k - 1));
          }
        }
        _domain = [_min, _max];
        return f;
      };
      f.mode = function(_m) {
        if (!arguments.length) {
          return _mode;
        }
        _mode = _m;
        resetCache();
        return f;
      };
      f.range = function(colors, _pos) {
        setColors(colors, _pos);
        return f;
      };
      f.out = function(_o) {
        _out = _o;
        return f;
      };
      f.spread = function(val) {
        if (!arguments.length) {
          return _spread;
        }
        _spread = val;
        return f;
      };
      f.correctLightness = function(v) {
        if (v == null) {
          v = true;
        }
        _correctLightness = v;
        resetCache();
        if (_correctLightness) {
          tmap = function(t) {
            var L0, L1, L_actual, L_diff, L_ideal, max_iter, pol, t0, t1;
            L0 = getColor(0, true).lab()[0];
            L1 = getColor(1, true).lab()[0];
            pol = L0 > L1;
            L_actual = getColor(t, true).lab()[0];
            L_ideal = L0 + (L1 - L0) * t;
            L_diff = L_actual - L_ideal;
            t0 = 0;
            t1 = 1;
            max_iter = 20;
            while (Math.abs(L_diff) > 1e-2 && max_iter-- > 0) {
              (function() {
                if (pol) {
                  L_diff *= -1;
                }
                if (L_diff < 0) {
                  t0 = t;
                  t += (t1 - t) * 0.5;
                } else {
                  t1 = t;
                  t += (t0 - t) * 0.5;
                }
                L_actual = getColor(t, true).lab()[0];
                return L_diff = L_actual - L_ideal;
              })();
            }
            return t;
          };
        } else {
          tmap = function(t) {
            return t;
          };
        }
        return f;
      };
      f.padding = function(p) {
        if (p != null) {
          if (type(p) === 'number') {
            p = [p, p];
          }
          _padding = p;
          return f;
        } else {
          return _padding;
        }
      };
      f.colors = function(numColors, out) {
        var dd, dm, i, o, ref, result, results, samples, w;
        if (arguments.length < 2) {
          out = 'hex';
        }
        result = [];
        if (arguments.length === 0) {
          result = _colors.slice(0);
        } else if (numColors === 1) {
          result = [f(0.5)];
        } else if (numColors > 1) {
          dm = _domain[0];
          dd = _domain[1] - dm;
          result = (function() {
            results = [];
            for (var o = 0; 0 <= numColors ? o < numColors : o > numColors; 0 <= numColors ? o++ : o--){ results.push(o); }
            return results;
          }).apply(this).map(function(i) {
            return f(dm + i / (numColors - 1) * dd);
          });
        } else {
          colors = [];
          samples = [];
          if (_classes && _classes.length > 2) {
            for (i = w = 1, ref = _classes.length; 1 <= ref ? w < ref : w > ref; i = 1 <= ref ? ++w : --w) {
              samples.push((_classes[i - 1] + _classes[i]) * 0.5);
            }
          } else {
            samples = _domain;
          }
          result = samples.map(function(v) {
            return f(v);
          });
        }
        if (chroma[out]) {
          result = result.map(function(c) {
            return c[out]();
          });
        }
        return result;
      };
      f.cache = function(c) {
        if (c != null) {
          _useCache = c;
          return f;
        } else {
          return _useCache;
        }
      };
      f.gamma = function(g) {
        if (g != null) {
          _gamma = g;
          return f;
        } else {
          return _gamma;
        }
      };
      f.nodata = function(d) {
        if (d != null) {
          _nacol = chroma(d);
          return f;
        } else {
          return _nacol;
        }
      };
      return f;
    };
  
    if (chroma.scales == null) {
      chroma.scales = {};
    }
  
    chroma.scales.cool = function() {
      return chroma.scale([chroma.hsl(180, 1, .9), chroma.hsl(250, .7, .4)]);
    };
  
    chroma.scales.hot = function() {
      return chroma.scale(['#000', '#f00', '#ff0', '#fff'], [0, .25, .75, 1]).mode('rgb');
    };
  
    chroma.analyze = function(data, key, filter) {
      var add, k, len, o, r, val, visit;
      r = {
        min: Number.MAX_VALUE,
        max: Number.MAX_VALUE * -1,
        sum: 0,
        values: [],
        count: 0
      };
      if (filter == null) {
        filter = function() {
          return true;
        };
      }
      add = function(val) {
        if ((val != null) && !isNaN(val)) {
          r.values.push(val);
          r.sum += val;
          if (val < r.min) {
            r.min = val;
          }
          if (val > r.max) {
            r.max = val;
          }
          r.count += 1;
        }
      };
      visit = function(val, k) {
        if (filter(val, k)) {
          if ((key != null) && type(key) === 'function') {
            return add(key(val));
          } else if ((key != null) && type(key) === 'string' || type(key) === 'number') {
            return add(val[key]);
          } else {
            return add(val);
          }
        }
      };
      if (type(data) === 'array') {
        for (o = 0, len = data.length; o < len; o++) {
          val = data[o];
          visit(val);
        }
      } else {
        for (k in data) {
          val = data[k];
          visit(val, k);
        }
      }
      r.domain = [r.min, r.max];
      r.limits = function(mode, num) {
        return chroma.limits(r, mode, num);
      };
      return r;
    };
  
    chroma.limits = function(data, mode, num) {
      var aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, assignments, best, centroids, cluster, clusterSizes, dist, i, j, kClusters, limits, max_log, min, min_log, mindist, n, nb_iters, newCentroids, o, p, pb, pr, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, repeat, sum, tmpKMeansBreaks, v, value, values, w;
      if (mode == null) {
        mode = 'equal';
      }
      if (num == null) {
        num = 7;
      }
      if (type(data) === 'array') {
        data = chroma.analyze(data);
      }
      min = data.min;
      max = data.max;
      sum = data.sum;
      values = data.values.sort(function(a, b) {
        return a - b;
      });
      if (num === 1) {
        return [min, max];
      }
      limits = [];
      if (mode.substr(0, 1) === 'c') {
        limits.push(min);
        limits.push(max);
      }
      if (mode.substr(0, 1) === 'e') {
        limits.push(min);
        for (i = o = 1, ref = num - 1; 1 <= ref ? o <= ref : o >= ref; i = 1 <= ref ? ++o : --o) {
          limits.push(min + (i / num) * (max - min));
        }
        limits.push(max);
      } else if (mode.substr(0, 1) === 'l') {
        if (min <= 0) {
          throw 'Logarithmic scales are only possible for values > 0';
        }
        min_log = Math.LOG10E * log(min);
        max_log = Math.LOG10E * log(max);
        limits.push(min);
        for (i = w = 1, ref1 = num - 1; 1 <= ref1 ? w <= ref1 : w >= ref1; i = 1 <= ref1 ? ++w : --w) {
          limits.push(pow(10, min_log + (i / num) * (max_log - min_log)));
        }
        limits.push(max);
      } else if (mode.substr(0, 1) === 'q') {
        limits.push(min);
        for (i = aa = 1, ref2 = num - 1; 1 <= ref2 ? aa <= ref2 : aa >= ref2; i = 1 <= ref2 ? ++aa : --aa) {
          p = (values.length - 1) * i / num;
          pb = floor(p);
          if (pb === p) {
            limits.push(values[pb]);
          } else {
            pr = p - pb;
            limits.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
          }
        }
        limits.push(max);
      } else if (mode.substr(0, 1) === 'k') {
  
        /*
        implementation based on
        http://code.google.com/p/figue/source/browse/trunk/figue.js#336
        simplified for 1-d input values
         */
        n = values.length;
        assignments = new Array(n);
        clusterSizes = new Array(num);
        repeat = true;
        nb_iters = 0;
        centroids = null;
        centroids = [];
        centroids.push(min);
        for (i = ab = 1, ref3 = num - 1; 1 <= ref3 ? ab <= ref3 : ab >= ref3; i = 1 <= ref3 ? ++ab : --ab) {
          centroids.push(min + (i / num) * (max - min));
        }
        centroids.push(max);
        while (repeat) {
          for (j = ac = 0, ref4 = num - 1; 0 <= ref4 ? ac <= ref4 : ac >= ref4; j = 0 <= ref4 ? ++ac : --ac) {
            clusterSizes[j] = 0;
          }
          for (i = ad = 0, ref5 = n - 1; 0 <= ref5 ? ad <= ref5 : ad >= ref5; i = 0 <= ref5 ? ++ad : --ad) {
            value = values[i];
            mindist = Number.MAX_VALUE;
            for (j = ae = 0, ref6 = num - 1; 0 <= ref6 ? ae <= ref6 : ae >= ref6; j = 0 <= ref6 ? ++ae : --ae) {
              dist = abs(centroids[j] - value);
              if (dist < mindist) {
                mindist = dist;
                best = j;
              }
            }
            clusterSizes[best]++;
            assignments[i] = best;
          }
          newCentroids = new Array(num);
          for (j = af = 0, ref7 = num - 1; 0 <= ref7 ? af <= ref7 : af >= ref7; j = 0 <= ref7 ? ++af : --af) {
            newCentroids[j] = null;
          }
          for (i = ag = 0, ref8 = n - 1; 0 <= ref8 ? ag <= ref8 : ag >= ref8; i = 0 <= ref8 ? ++ag : --ag) {
            cluster = assignments[i];
            if (newCentroids[cluster] === null) {
              newCentroids[cluster] = values[i];
            } else {
              newCentroids[cluster] += values[i];
            }
          }
          for (j = ah = 0, ref9 = num - 1; 0 <= ref9 ? ah <= ref9 : ah >= ref9; j = 0 <= ref9 ? ++ah : --ah) {
            newCentroids[j] *= 1 / clusterSizes[j];
          }
          repeat = false;
          for (j = ai = 0, ref10 = num - 1; 0 <= ref10 ? ai <= ref10 : ai >= ref10; j = 0 <= ref10 ? ++ai : --ai) {
            if (newCentroids[j] !== centroids[i]) {
              repeat = true;
              break;
            }
          }
          centroids = newCentroids;
          nb_iters++;
          if (nb_iters > 200) {
            repeat = false;
          }
        }
        kClusters = {};
        for (j = aj = 0, ref11 = num - 1; 0 <= ref11 ? aj <= ref11 : aj >= ref11; j = 0 <= ref11 ? ++aj : --aj) {
          kClusters[j] = [];
        }
        for (i = ak = 0, ref12 = n - 1; 0 <= ref12 ? ak <= ref12 : ak >= ref12; i = 0 <= ref12 ? ++ak : --ak) {
          cluster = assignments[i];
          kClusters[cluster].push(values[i]);
        }
        tmpKMeansBreaks = [];
        for (j = al = 0, ref13 = num - 1; 0 <= ref13 ? al <= ref13 : al >= ref13; j = 0 <= ref13 ? ++al : --al) {
          tmpKMeansBreaks.push(kClusters[j][0]);
          tmpKMeansBreaks.push(kClusters[j][kClusters[j].length - 1]);
        }
        tmpKMeansBreaks = tmpKMeansBreaks.sort(function(a, b) {
          return a - b;
        });
        limits.push(tmpKMeansBreaks[0]);
        for (i = am = 1, ref14 = tmpKMeansBreaks.length - 1; am <= ref14; i = am += 2) {
          v = tmpKMeansBreaks[i];
          if (!isNaN(v) && limits.indexOf(v) === -1) {
            limits.push(v);
          }
        }
      }
      return limits;
    };
  
    hsi2rgb = function(h, s, i) {
  
      /*
      borrowed from here:
      http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
       */
      var args, b, g, r;
      args = unpack(arguments);
      h = args[0], s = args[1], i = args[2];
      if (isNaN(h)) {
        h = 0;
      }
      h /= 360;
      if (h < 1 / 3) {
        b = (1 - s) / 3;
        r = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
        g = 1 - (b + r);
      } else if (h < 2 / 3) {
        h -= 1 / 3;
        r = (1 - s) / 3;
        g = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
        b = 1 - (r + g);
      } else {
        h -= 2 / 3;
        g = (1 - s) / 3;
        b = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
        r = 1 - (g + b);
      }
      r = limit(i * r * 3);
      g = limit(i * g * 3);
      b = limit(i * b * 3);
      return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
    };
  
    rgb2hsi = function() {
  
      /*
      borrowed from here:
      http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
       */
      var b, g, h, i, min, r, ref, s;
      ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
      TWOPI = Math.PI * 2;
      r /= 255;
      g /= 255;
      b /= 255;
      min = Math.min(r, g, b);
      i = (r + g + b) / 3;
      s = 1 - min / i;
      if (s === 0) {
        h = 0;
      } else {
        h = ((r - g) + (r - b)) / 2;
        h /= Math.sqrt((r - g) * (r - g) + (r - b) * (g - b));
        h = Math.acos(h);
        if (b > g) {
          h = TWOPI - h;
        }
        h /= TWOPI;
      }
      return [h * 360, s, i];
    };
  
    chroma.hsi = function() {
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Color, slice.call(arguments).concat(['hsi']), function(){});
    };
  
    _input.hsi = hsi2rgb;
  
    Color.prototype.hsi = function() {
      return rgb2hsi(this._rgb);
    };
  
    interpolate_hsx = function(col1, col2, f, m) {
      var dh, hue, hue0, hue1, lbv, lbv0, lbv1, res, sat, sat0, sat1, xyz0, xyz1;
      if (m === 'hsl') {
        xyz0 = col1.hsl();
        xyz1 = col2.hsl();
      } else if (m === 'hsv') {
        xyz0 = col1.hsv();
        xyz1 = col2.hsv();
      } else if (m === 'hcg') {
        xyz0 = col1.hcg();
        xyz1 = col2.hcg();
      } else if (m === 'hsi') {
        xyz0 = col1.hsi();
        xyz1 = col2.hsi();
      } else if (m === 'lch' || m === 'hcl') {
        m = 'hcl';
        xyz0 = col1.hcl();
        xyz1 = col2.hcl();
      }
      if (m.substr(0, 1) === 'h') {
        hue0 = xyz0[0], sat0 = xyz0[1], lbv0 = xyz0[2];
        hue1 = xyz1[0], sat1 = xyz1[1], lbv1 = xyz1[2];
      }
      if (!isNaN(hue0) && !isNaN(hue1)) {
        if (hue1 > hue0 && hue1 - hue0 > 180) {
          dh = hue1 - (hue0 + 360);
        } else if (hue1 < hue0 && hue0 - hue1 > 180) {
          dh = hue1 + 360 - hue0;
        } else {
          dh = hue1 - hue0;
        }
        hue = hue0 + f * dh;
      } else if (!isNaN(hue0)) {
        hue = hue0;
        if ((lbv1 === 1 || lbv1 === 0) && m !== 'hsv') {
          sat = sat0;
        }
      } else if (!isNaN(hue1)) {
        hue = hue1;
        if ((lbv0 === 1 || lbv0 === 0) && m !== 'hsv') {
          sat = sat1;
        }
      } else {
        hue = Number.NaN;
      }
      if (sat == null) {
        sat = sat0 + f * (sat1 - sat0);
      }
      lbv = lbv0 + f * (lbv1 - lbv0);
      return res = chroma[m](hue, sat, lbv);
    };
  
    _interpolators = _interpolators.concat((function() {
      var len, o, ref, results;
      ref = ['hsv', 'hsl', 'hsi', 'hcl', 'lch', 'hcg'];
      results = [];
      for (o = 0, len = ref.length; o < len; o++) {
        m = ref[o];
        results.push([m, interpolate_hsx]);
      }
      return results;
    })());
  
    interpolate_num = function(col1, col2, f, m) {
      var n1, n2;
      n1 = col1.num();
      n2 = col2.num();
      return chroma.num(n1 + (n2 - n1) * f, 'num');
    };
  
    _interpolators.push(['num', interpolate_num]);
  
    interpolate_lab = function(col1, col2, f, m) {
      var res, xyz0, xyz1;
      xyz0 = col1.lab();
      xyz1 = col2.lab();
      return res = new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
    };
  
    _interpolators.push(['lab', interpolate_lab]);
  
  }).call(this);
  
  },{}],3:[function(require,module,exports){
  "use strict";
  
  var chroma = require('chroma-js')
  var WeakMap = require("es6-weak-map")
  
  // These `require` statements are all explicit
  // to keep the browserify build from breaking
  var lists = {
    basic: require('./lib/colors/basic'),
    html: require('./lib/colors/html'),
    ntc: require('./lib/colors/ntc'),
    pantone: require('./lib/colors/pantone'),
    roygbiv: require('./lib/colors/roygbiv'),
    x11: require('./lib/colors/x11')
  }
  
  var cache = new WeakMap()
  var namer = module.exports = function(color, options) {
    options = options || {}
  
    var cacheKey = {color, options}
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)
    }
  
    var deltaE = String(options.distance).toLowerCase() === 'deltae';
    color = chroma(color)
    var results = {}
    for (var key in lists) {
      if (options.pick && options.pick.indexOf(key) === -1) {
        continue
      }
      if (options.omit && options.omit.indexOf(key) !== -1) {
        continue
      }
      results[key] = lists[key]
        .map (function(name) {
          name.distance = deltaE ? chroma.deltaE(color, chroma(name.hex)) : chroma.distance(color, chroma(name.hex))
          return name
        })
        .sort (function(a, b) {
          return a.distance - b.distance
        })
    }
    cache.set(cacheKey, results)
    return results
  }
  
  namer.chroma = chroma
  namer.lists = lists
  
  },{"./lib/colors/basic":4,"./lib/colors/html":5,"./lib/colors/ntc":6,"./lib/colors/pantone":7,"./lib/colors/roygbiv":8,"./lib/colors/x11":9,"chroma-js":2,"es6-weak-map":64}],4:[function(require,module,exports){
  module.exports = [
    { name: 'black', hex: '#000000' },
    { name: 'blue', hex: '#0000FF' },
    { name: 'cyan', hex: '#00FFFF' },
    { name: 'green', hex: '#008000' },
    { name: 'teal', hex: '#008080' },
    { name: 'turquoise', hex: '#40E0D0' },
    { name: 'indigo', hex: '#4B0082' },
    { name: 'gray', hex: '#808080' },
    { name: 'purple', hex: '#800080' },
    { name: 'brown', hex: '#A52A2A' },
    { name: 'tan', hex: '#D2B48C' },
    { name: 'violet', hex: '#EE82EE' },
    { name: 'beige', hex: '#F5F5DC' },
    { name: 'fuchsia', hex: '#FF00FF' },
    { name: 'gold', hex: '#FFD700' },
    { name: 'magenta', hex: '#FF00FF' },
    { name: 'orange', hex: '#FFA500' },
    { name: 'pink', hex: '#FFC0CB' },
    { name: 'red', hex: '#FF0000' },
    { name: 'white', hex: '#FFFFFF' },
    { name: 'yellow', hex: '#FFFF00' }
  ]
  
  },{}],5:[function(require,module,exports){
  module.exports = [
    { name: 'aqua', hex: '#00FFFF' },
    { name: 'aliceblue', hex: '#F0F8FF' },
    { name: 'antiquewhite', hex: '#FAEBD7' },
    { name: 'black', hex: '#000000' },
    { name: 'blue', hex: '#0000FF' },
    { name: 'cyan', hex: '#00FFFF' },
    { name: 'darkblue', hex: '#00008B' },
    { name: 'darkcyan', hex: '#008B8B' },
    { name: 'darkgreen', hex: '#006400' },
    { name: 'darkturquoise', hex: '#00CED1' },
    { name: 'deepskyblue', hex: '#00BFFF' },
    { name: 'green', hex: '#008000' },
    { name: 'lime', hex: '#00FF00' },
    { name: 'mediumblue', hex: '#0000CD' },
    { name: 'mediumspringgreen', hex: '#00FA9A' },
    { name: 'navy', hex: '#000080' },
    { name: 'springgreen', hex: '#00FF7F' },
    { name: 'teal', hex: '#008080' },
    { name: 'midnightblue', hex: '#191970' },
    { name: 'dodgerblue', hex: '#1E90FF' },
    { name: 'lightseagreen', hex: '#20B2AA' },
    { name: 'forestgreen', hex: '#228B22' },
    { name: 'seagreen', hex: '#2E8B57' },
    { name: 'darkslategray', hex: '#2F4F4F' },
    { name: 'darkslategrey', hex: '#2F4F4F' },
    { name: 'limegreen', hex: '#32CD32' },
    { name: 'mediumseagreen', hex: '#3CB371' },
    { name: 'turquoise', hex: '#40E0D0' },
    { name: 'royalblue', hex: '#4169E1' },
    { name: 'steelblue', hex: '#4682B4' },
    { name: 'darkslateblue', hex: '#483D8B' },
    { name: 'mediumturquoise', hex: '#48D1CC' },
    { name: 'indigo', hex: '#4B0082' },
    { name: 'darkolivegreen', hex: '#556B2F' },
    { name: 'cadetblue', hex: '#5F9EA0' },
    { name: 'cornflowerblue', hex: '#6495ED' },
    { name: 'mediumaquamarine', hex: '#66CDAA' },
    { name: 'dimgray', hex: '#696969' },
    { name: 'dimgrey', hex: '#696969' },
    { name: 'slateblue', hex: '#6A5ACD' },
    { name: 'olivedrab', hex: '#6B8E23' },
    { name: 'slategray', hex: '#708090' },
    { name: 'slategrey', hex: '#708090' },
    { name: 'lightslategray', hex: '#778899' },
    { name: 'lightslategrey', hex: '#778899' },
    { name: 'mediumslateblue', hex: '#7B68EE' },
    { name: 'lawngreen', hex: '#7CFC00' },
    { name: 'aquamarine', hex: '#7FFFD4' },
    { name: 'chartreuse', hex: '#7FFF00' },
    { name: 'gray', hex: '#808080' },
    { name: 'grey', hex: '#808080' },
    { name: 'maroon', hex: '#800000' },
    { name: 'olive', hex: '#808000' },
    { name: 'purple', hex: '#800080' },
    { name: 'lightskyblue', hex: '#87CEFA' },
    { name: 'skyblue', hex: '#87CEEB' },
    { name: 'blueviolet', hex: '#8A2BE2' },
    { name: 'darkmagenta', hex: '#8B008B' },
    { name: 'darkred', hex: '#8B0000' },
    { name: 'saddlebrown', hex: '#8B4513' },
    { name: 'darkseagreen', hex: '#8FBC8F' },
    { name: 'lightgreen', hex: '#90EE90' },
    { name: 'mediumpurple', hex: '#9370DB' },
    { name: 'darkviolet', hex: '#9400D3' },
    { name: 'palegreen', hex: '#98FB98' },
    { name: 'darkorchid', hex: '#9932CC' },
    { name: 'yellowgreen', hex: '#9ACD32' },
    { name: 'sienna', hex: '#A0522D' },
    { name: 'brown', hex: '#A52A2A' },
    { name: 'darkgray', hex: '#A9A9A9' },
    { name: 'darkgrey', hex: '#A9A9A9' },
    { name: 'greenyellow', hex: '#ADFF2F' },
    { name: 'lightblue', hex: '#ADD8E6' },
    { name: 'paleturquoise', hex: '#AFEEEE' },
    { name: 'lightsteelblue', hex: '#B0C4DE' },
    { name: 'powderblue', hex: '#B0E0E6' },
    { name: 'firebrick', hex: '#B22222' },
    { name: 'darkgoldenrod', hex: '#B8860B' },
    { name: 'mediumorchid', hex: '#BA55D3' },
    { name: 'rosybrown', hex: '#BC8F8F' },
    { name: 'darkkhaki', hex: '#BDB76B' },
    { name: 'silver', hex: '#C0C0C0' },
    { name: 'mediumvioletred', hex: '#C71585' },
    { name: 'indianred', hex: '#CD5C5C' },
    { name: 'peru', hex: '#CD853F' },
    { name: 'chocolate', hex: '#D2691E' },
    { name: 'tan', hex: '#D2B48C' },
    { name: 'lightgray', hex: '#D3D3D3' },
    { name: 'lightgrey', hex: '#D3D3D3' },
    { name: 'thistle', hex: '#D8BFD8' },
    { name: 'goldenrod', hex: '#DAA520' },
    { name: 'orchid', hex: '#DA70D6' },
    { name: 'palevioletred', hex: '#DB7093' },
    { name: 'crimson', hex: '#DC143C' },
    { name: 'gainsboro', hex: '#DCDCDC' },
    { name: 'plum', hex: '#DDA0DD' },
    { name: 'burlywood', hex: '#DEB887' },
    { name: 'lightcyan', hex: '#E0FFFF' },
    { name: 'lavender', hex: '#E6E6FA' },
    { name: 'darksalmon', hex: '#E9967A' },
    { name: 'palegoldenrod', hex: '#EEE8AA' },
    { name: 'violet', hex: '#EE82EE' },
    { name: 'azure', hex: '#F0FFFF' },
    { name: 'honeydew', hex: '#F0FFF0' },
    { name: 'khaki', hex: '#F0E68C' },
    { name: 'lightcoral', hex: '#F08080' },
    { name: 'sandybrown', hex: '#F4A460' },
    { name: 'beige', hex: '#F5F5DC' },
    { name: 'mintcream', hex: '#F5FFFA' },
    { name: 'wheat', hex: '#F5DEB3' },
    { name: 'whitesmoke', hex: '#F5F5F5' },
    { name: 'ghostwhite', hex: '#F8F8FF' },
    { name: 'lightgoldenrodyellow',
      hex: '#FAFAD2' },
    { name: 'linen', hex: '#FAF0E6' },
    { name: 'salmon', hex: '#FA8072' },
    { name: 'oldlace', hex: '#FDF5E6' },
    { name: 'bisque', hex: '#FFE4C4' },
    { name: 'blanchedalmond', hex: '#FFEBCD' },
    { name: 'coral', hex: '#FF7F50' },
    { name: 'cornsilk', hex: '#FFF8DC' },
    { name: 'darkorange', hex: '#FF8C00' },
    { name: 'deeppink', hex: '#FF1493' },
    { name: 'floralwhite', hex: '#FFFAF0' },
    { name: 'fuchsia', hex: '#FF00FF' },
    { name: 'gold', hex: '#FFD700' },
    { name: 'hotpink', hex: '#FF69B4' },
    { name: 'ivory', hex: '#FFFFF0' },
    { name: 'lavenderblush', hex: '#FFF0F5' },
    { name: 'lemonchiffon', hex: '#FFFACD' },
    { name: 'lightpink', hex: '#FFB6C1' },
    { name: 'lightsalmon', hex: '#FFA07A' },
    { name: 'lightyellow', hex: '#FFFFE0' },
    { name: 'magenta', hex: '#FF00FF' },
    { name: 'mistyrose', hex: '#FFE4E1' },
    { name: 'moccasin', hex: '#FFE4B5' },
    { name: 'navajowhite', hex: '#FFDEAD' },
    { name: 'orange', hex: '#FFA500' },
    { name: 'orangered', hex: '#FF4500' },
    { name: 'papayawhip', hex: '#FFEFD5' },
    { name: 'peachpuff', hex: '#FFDAB9' },
    { name: 'pink', hex: '#FFC0CB' },
    { name: 'red', hex: '#FF0000' },
    { name: 'seashell', hex: '#FFF5EE' },
    { name: 'snow', hex: '#FFFAFA' },
    { name: 'tomato', hex: '#FF6347' },
    { name: 'white', hex: '#FFFFFF' },
    { name: 'yellow', hex: '#FFFF00' }
  ]
  
  },{}],6:[function(require,module,exports){
  module.exports = [
    {
      "name": "Black",
      "hex": "000000"
    },
    {
      "name": "Navy Blue",
      "hex": "000080"
    },
    {
      "name": "Dark Blue",
      "hex": "0000C8"
    },
    {
      "name": "Blue",
      "hex": "0000FF"
    },
    {
      "name": "Stratos",
      "hex": "000741"
    },
    {
      "name": "Swamp",
      "hex": "001B1C"
    },
    {
      "name": "Resolution Blue",
      "hex": "002387"
    },
    {
      "name": "Deep Fir",
      "hex": "002900"
    },
    {
      "name": "Burnham",
      "hex": "002E20"
    },
    {
      "name": "International Klein Blue",
      "hex": "002FA7"
    },
    {
      "name": "Prussian Blue",
      "hex": "003153"
    },
    {
      "name": "Midnight Blue",
      "hex": "003366"
    },
    {
      "name": "Smalt",
      "hex": "003399"
    },
    {
      "name": "Deep Teal",
      "hex": "003532"
    },
    {
      "name": "Cyprus",
      "hex": "003E40"
    },
    {
      "name": "Kaitoke Green",
      "hex": "004620"
    },
    {
      "name": "Cobalt",
      "hex": "0047AB"
    },
    {
      "name": "Crusoe",
      "hex": "004816"
    },
    {
      "name": "Sherpa Blue",
      "hex": "004950"
    },
    {
      "name": "Endeavour",
      "hex": "0056A7"
    },
    {
      "name": "Camarone",
      "hex": "00581A"
    },
    {
      "name": "Science Blue",
      "hex": "0066CC"
    },
    {
      "name": "Blue Ribbon",
      "hex": "0066FF"
    },
    {
      "name": "Tropical Rain Forest",
      "hex": "00755E"
    },
    {
      "name": "Allports",
      "hex": "0076A3"
    },
    {
      "name": "Deep Cerulean",
      "hex": "007BA7"
    },
    {
      "name": "Lochmara",
      "hex": "007EC7"
    },
    {
      "name": "Azure Radiance",
      "hex": "007FFF"
    },
    {
      "name": "Teal",
      "hex": "008080"
    },
    {
      "name": "Bondi Blue",
      "hex": "0095B6"
    },
    {
      "name": "Pacific Blue",
      "hex": "009DC4"
    },
    {
      "name": "Persian Green",
      "hex": "00A693"
    },
    {
      "name": "Jade",
      "hex": "00A86B"
    },
    {
      "name": "Caribbean Green",
      "hex": "00CC99"
    },
    {
      "name": "Robin's Egg Blue",
      "hex": "00CCCC"
    },
    {
      "name": "Green",
      "hex": "00FF00"
    },
    {
      "name": "Spring Green",
      "hex": "00FF7F"
    },
    {
      "name": "Cyan / Aqua",
      "hex": "00FFFF"
    },
    {
      "name": "Blue Charcoal",
      "hex": "010D1A"
    },
    {
      "name": "Midnight",
      "hex": "011635"
    },
    {
      "name": "Holly",
      "hex": "011D13"
    },
    {
      "name": "Daintree",
      "hex": "012731"
    },
    {
      "name": "Cardin Green",
      "hex": "01361C"
    },
    {
      "name": "County Green",
      "hex": "01371A"
    },
    {
      "name": "Astronaut Blue",
      "hex": "013E62"
    },
    {
      "name": "Regal Blue",
      "hex": "013F6A"
    },
    {
      "name": "Aqua Deep",
      "hex": "014B43"
    },
    {
      "name": "Orient",
      "hex": "015E85"
    },
    {
      "name": "Blue Stone",
      "hex": "016162"
    },
    {
      "name": "Fun Green",
      "hex": "016D39"
    },
    {
      "name": "Pine Green",
      "hex": "01796F"
    },
    {
      "name": "Blue Lagoon",
      "hex": "017987"
    },
    {
      "name": "Deep Sea",
      "hex": "01826B"
    },
    {
      "name": "Green Haze",
      "hex": "01A368"
    },
    {
      "name": "English Holly",
      "hex": "022D15"
    },
    {
      "name": "Sherwood Green",
      "hex": "02402C"
    },
    {
      "name": "Congress Blue",
      "hex": "02478E"
    },
    {
      "name": "Evening Sea",
      "hex": "024E46"
    },
    {
      "name": "Bahama Blue",
      "hex": "026395"
    },
    {
      "name": "Observatory",
      "hex": "02866F"
    },
    {
      "name": "Cerulean",
      "hex": "02A4D3"
    },
    {
      "name": "Tangaroa",
      "hex": "03163C"
    },
    {
      "name": "Green Vogue",
      "hex": "032B52"
    },
    {
      "name": "Mosque",
      "hex": "036A6E"
    },
    {
      "name": "Midnight Moss",
      "hex": "041004"
    },
    {
      "name": "Black Pearl",
      "hex": "041322"
    },
    {
      "name": "Blue Whale",
      "hex": "042E4C"
    },
    {
      "name": "Zuccini",
      "hex": "044022"
    },
    {
      "name": "Teal Blue",
      "hex": "044259"
    },
    {
      "name": "Deep Cove",
      "hex": "051040"
    },
    {
      "name": "Gulf Blue",
      "hex": "051657"
    },
    {
      "name": "Venice Blue",
      "hex": "055989"
    },
    {
      "name": "Watercourse",
      "hex": "056F57"
    },
    {
      "name": "Catalina Blue",
      "hex": "062A78"
    },
    {
      "name": "Tiber",
      "hex": "063537"
    },
    {
      "name": "Gossamer",
      "hex": "069B81"
    },
    {
      "name": "Niagara",
      "hex": "06A189"
    },
    {
      "name": "Tarawera",
      "hex": "073A50"
    },
    {
      "name": "Jaguar",
      "hex": "080110"
    },
    {
      "name": "Black Bean",
      "hex": "081910"
    },
    {
      "name": "Deep Sapphire",
      "hex": "082567"
    },
    {
      "name": "Elf Green",
      "hex": "088370"
    },
    {
      "name": "Bright Turquoise",
      "hex": "08E8DE"
    },
    {
      "name": "Downriver",
      "hex": "092256"
    },
    {
      "name": "Palm Green",
      "hex": "09230F"
    },
    {
      "name": "Madison",
      "hex": "09255D"
    },
    {
      "name": "Bottle Green",
      "hex": "093624"
    },
    {
      "name": "Deep Sea Green",
      "hex": "095859"
    },
    {
      "name": "Salem",
      "hex": "097F4B"
    },
    {
      "name": "Black Russian",
      "hex": "0A001C"
    },
    {
      "name": "Dark Fern",
      "hex": "0A480D"
    },
    {
      "name": "Japanese Laurel",
      "hex": "0A6906"
    },
    {
      "name": "Atoll",
      "hex": "0A6F75"
    },
    {
      "name": "Cod Gray",
      "hex": "0B0B0B"
    },
    {
      "name": "Marshland",
      "hex": "0B0F08"
    },
    {
      "name": "Gordons Green",
      "hex": "0B1107"
    },
    {
      "name": "Black Forest",
      "hex": "0B1304"
    },
    {
      "name": "San Felix",
      "hex": "0B6207"
    },
    {
      "name": "Malachite",
      "hex": "0BDA51"
    },
    {
      "name": "Ebony",
      "hex": "0C0B1D"
    },
    {
      "name": "Woodsmoke",
      "hex": "0C0D0F"
    },
    {
      "name": "Racing Green",
      "hex": "0C1911"
    },
    {
      "name": "Surfie Green",
      "hex": "0C7A79"
    },
    {
      "name": "Blue Chill",
      "hex": "0C8990"
    },
    {
      "name": "Black Rock",
      "hex": "0D0332"
    },
    {
      "name": "Bunker",
      "hex": "0D1117"
    },
    {
      "name": "Aztec",
      "hex": "0D1C19"
    },
    {
      "name": "Bush",
      "hex": "0D2E1C"
    },
    {
      "name": "Cinder",
      "hex": "0E0E18"
    },
    {
      "name": "Firefly",
      "hex": "0E2A30"
    },
    {
      "name": "Torea Bay",
      "hex": "0F2D9E"
    },
    {
      "name": "Vulcan",
      "hex": "10121D"
    },
    {
      "name": "Green Waterloo",
      "hex": "101405"
    },
    {
      "name": "Eden",
      "hex": "105852"
    },
    {
      "name": "Arapawa",
      "hex": "110C6C"
    },
    {
      "name": "Ultramarine",
      "hex": "120A8F"
    },
    {
      "name": "Elephant",
      "hex": "123447"
    },
    {
      "name": "Jewel",
      "hex": "126B40"
    },
    {
      "name": "Diesel",
      "hex": "130000"
    },
    {
      "name": "Asphalt",
      "hex": "130A06"
    },
    {
      "name": "Blue Zodiac",
      "hex": "13264D"
    },
    {
      "name": "Parsley",
      "hex": "134F19"
    },
    {
      "name": "Nero",
      "hex": "140600"
    },
    {
      "name": "Tory Blue",
      "hex": "1450AA"
    },
    {
      "name": "Bunting",
      "hex": "151F4C"
    },
    {
      "name": "Denim",
      "hex": "1560BD"
    },
    {
      "name": "Genoa",
      "hex": "15736B"
    },
    {
      "name": "Mirage",
      "hex": "161928"
    },
    {
      "name": "Hunter Green",
      "hex": "161D10"
    },
    {
      "name": "Big Stone",
      "hex": "162A40"
    },
    {
      "name": "Celtic",
      "hex": "163222"
    },
    {
      "name": "Timber Green",
      "hex": "16322C"
    },
    {
      "name": "Gable Green",
      "hex": "163531"
    },
    {
      "name": "Pine Tree",
      "hex": "171F04"
    },
    {
      "name": "Chathams Blue",
      "hex": "175579"
    },
    {
      "name": "Deep Forest Green",
      "hex": "182D09"
    },
    {
      "name": "Blumine",
      "hex": "18587A"
    },
    {
      "name": "Palm Leaf",
      "hex": "19330E"
    },
    {
      "name": "Nile Blue",
      "hex": "193751"
    },
    {
      "name": "Fun Blue",
      "hex": "1959A8"
    },
    {
      "name": "Lucky Point",
      "hex": "1A1A68"
    },
    {
      "name": "Mountain Meadow",
      "hex": "1AB385"
    },
    {
      "name": "Tolopea",
      "hex": "1B0245"
    },
    {
      "name": "Haiti",
      "hex": "1B1035"
    },
    {
      "name": "Deep Koamaru",
      "hex": "1B127B"
    },
    {
      "name": "Acadia",
      "hex": "1B1404"
    },
    {
      "name": "Seaweed",
      "hex": "1B2F11"
    },
    {
      "name": "Biscay",
      "hex": "1B3162"
    },
    {
      "name": "Matisse",
      "hex": "1B659D"
    },
    {
      "name": "Crowshead",
      "hex": "1C1208"
    },
    {
      "name": "Rangoon Green",
      "hex": "1C1E13"
    },
    {
      "name": "Persian Blue",
      "hex": "1C39BB"
    },
    {
      "name": "Everglade",
      "hex": "1C402E"
    },
    {
      "name": "Elm",
      "hex": "1C7C7D"
    },
    {
      "name": "Green Pea",
      "hex": "1D6142"
    },
    {
      "name": "Creole",
      "hex": "1E0F04"
    },
    {
      "name": "Karaka",
      "hex": "1E1609"
    },
    {
      "name": "El Paso",
      "hex": "1E1708"
    },
    {
      "name": "Cello",
      "hex": "1E385B"
    },
    {
      "name": "Te Papa Green",
      "hex": "1E433C"
    },
    {
      "name": "Dodger Blue",
      "hex": "1E90FF"
    },
    {
      "name": "Eastern Blue",
      "hex": "1E9AB0"
    },
    {
      "name": "Night Rider",
      "hex": "1F120F"
    },
    {
      "name": "Java",
      "hex": "1FC2C2"
    },
    {
      "name": "Jacksons Purple",
      "hex": "20208D"
    },
    {
      "name": "Cloud Burst",
      "hex": "202E54"
    },
    {
      "name": "Blue Dianne",
      "hex": "204852"
    },
    {
      "name": "Eternity",
      "hex": "211A0E"
    },
    {
      "name": "Deep Blue",
      "hex": "220878"
    },
    {
      "name": "Forest Green",
      "hex": "228B22"
    },
    {
      "name": "Mallard",
      "hex": "233418"
    },
    {
      "name": "Violet",
      "hex": "240A40"
    },
    {
      "name": "Kilamanjaro",
      "hex": "240C02"
    },
    {
      "name": "Log Cabin",
      "hex": "242A1D"
    },
    {
      "name": "Black Olive",
      "hex": "242E16"
    },
    {
      "name": "Green House",
      "hex": "24500F"
    },
    {
      "name": "Graphite",
      "hex": "251607"
    },
    {
      "name": "Cannon Black",
      "hex": "251706"
    },
    {
      "name": "Port Gore",
      "hex": "251F4F"
    },
    {
      "name": "Shark",
      "hex": "25272C"
    },
    {
      "name": "Green Kelp",
      "hex": "25311C"
    },
    {
      "name": "Curious Blue",
      "hex": "2596D1"
    },
    {
      "name": "Paua",
      "hex": "260368"
    },
    {
      "name": "Paris M",
      "hex": "26056A"
    },
    {
      "name": "Wood Bark",
      "hex": "261105"
    },
    {
      "name": "Gondola",
      "hex": "261414"
    },
    {
      "name": "Steel Gray",
      "hex": "262335"
    },
    {
      "name": "Ebony Clay",
      "hex": "26283B"
    },
    {
      "name": "Bay of Many",
      "hex": "273A81"
    },
    {
      "name": "Plantation",
      "hex": "27504B"
    },
    {
      "name": "Eucalyptus",
      "hex": "278A5B"
    },
    {
      "name": "Oil",
      "hex": "281E15"
    },
    {
      "name": "Astronaut",
      "hex": "283A77"
    },
    {
      "name": "Mariner",
      "hex": "286ACD"
    },
    {
      "name": "Violent Violet",
      "hex": "290C5E"
    },
    {
      "name": "Bastille",
      "hex": "292130"
    },
    {
      "name": "Zeus",
      "hex": "292319"
    },
    {
      "name": "Charade",
      "hex": "292937"
    },
    {
      "name": "Jelly Bean",
      "hex": "297B9A"
    },
    {
      "name": "Jungle Green",
      "hex": "29AB87"
    },
    {
      "name": "Cherry Pie",
      "hex": "2A0359"
    },
    {
      "name": "Coffee Bean",
      "hex": "2A140E"
    },
    {
      "name": "Baltic Sea",
      "hex": "2A2630"
    },
    {
      "name": "Turtle Green",
      "hex": "2A380B"
    },
    {
      "name": "Cerulean Blue",
      "hex": "2A52BE"
    },
    {
      "name": "Sepia Black",
      "hex": "2B0202"
    },
    {
      "name": "Valhalla",
      "hex": "2B194F"
    },
    {
      "name": "Heavy Metal",
      "hex": "2B3228"
    },
    {
      "name": "Blue Gem",
      "hex": "2C0E8C"
    },
    {
      "name": "Revolver",
      "hex": "2C1632"
    },
    {
      "name": "Bleached Cedar",
      "hex": "2C2133"
    },
    {
      "name": "Lochinvar",
      "hex": "2C8C84"
    },
    {
      "name": "Mikado",
      "hex": "2D2510"
    },
    {
      "name": "Outer Space",
      "hex": "2D383A"
    },
    {
      "name": "St Tropaz",
      "hex": "2D569B"
    },
    {
      "name": "Jacaranda",
      "hex": "2E0329"
    },
    {
      "name": "Jacko Bean",
      "hex": "2E1905"
    },
    {
      "name": "Rangitoto",
      "hex": "2E3222"
    },
    {
      "name": "Rhino",
      "hex": "2E3F62"
    },
    {
      "name": "Sea Green",
      "hex": "2E8B57"
    },
    {
      "name": "Scooter",
      "hex": "2EBFD4"
    },
    {
      "name": "Onion",
      "hex": "2F270E"
    },
    {
      "name": "Governor Bay",
      "hex": "2F3CB3"
    },
    {
      "name": "Sapphire",
      "hex": "2F519E"
    },
    {
      "name": "Spectra",
      "hex": "2F5A57"
    },
    {
      "name": "Casal",
      "hex": "2F6168"
    },
    {
      "name": "Melanzane",
      "hex": "300529"
    },
    {
      "name": "Cocoa Brown",
      "hex": "301F1E"
    },
    {
      "name": "Woodrush",
      "hex": "302A0F"
    },
    {
      "name": "San Juan",
      "hex": "304B6A"
    },
    {
      "name": "Turquoise",
      "hex": "30D5C8"
    },
    {
      "name": "Eclipse",
      "hex": "311C17"
    },
    {
      "name": "Pickled Bluewood",
      "hex": "314459"
    },
    {
      "name": "Azure",
      "hex": "315BA1"
    },
    {
      "name": "Calypso",
      "hex": "31728D"
    },
    {
      "name": "Paradiso",
      "hex": "317D82"
    },
    {
      "name": "Persian Indigo",
      "hex": "32127A"
    },
    {
      "name": "Blackcurrant",
      "hex": "32293A"
    },
    {
      "name": "Mine Shaft",
      "hex": "323232"
    },
    {
      "name": "Stromboli",
      "hex": "325D52"
    },
    {
      "name": "Bilbao",
      "hex": "327C14"
    },
    {
      "name": "Astral",
      "hex": "327DA0"
    },
    {
      "name": "Christalle",
      "hex": "33036B"
    },
    {
      "name": "Thunder",
      "hex": "33292F"
    },
    {
      "name": "Shamrock",
      "hex": "33CC99"
    },
    {
      "name": "Tamarind",
      "hex": "341515"
    },
    {
      "name": "Mardi Gras",
      "hex": "350036"
    },
    {
      "name": "Valentino",
      "hex": "350E42"
    },
    {
      "name": "Jagger",
      "hex": "350E57"
    },
    {
      "name": "Tuna",
      "hex": "353542"
    },
    {
      "name": "Chambray",
      "hex": "354E8C"
    },
    {
      "name": "Martinique",
      "hex": "363050"
    },
    {
      "name": "Tuatara",
      "hex": "363534"
    },
    {
      "name": "Waiouru",
      "hex": "363C0D"
    },
    {
      "name": "Ming",
      "hex": "36747D"
    },
    {
      "name": "La Palma",
      "hex": "368716"
    },
    {
      "name": "Chocolate",
      "hex": "370202"
    },
    {
      "name": "Clinker",
      "hex": "371D09"
    },
    {
      "name": "Brown Tumbleweed",
      "hex": "37290E"
    },
    {
      "name": "Birch",
      "hex": "373021"
    },
    {
      "name": "Oracle",
      "hex": "377475"
    },
    {
      "name": "Blue Diamond",
      "hex": "380474"
    },
    {
      "name": "Grape",
      "hex": "381A51"
    },
    {
      "name": "Dune",
      "hex": "383533"
    },
    {
      "name": "Oxford Blue",
      "hex": "384555"
    },
    {
      "name": "Clover",
      "hex": "384910"
    },
    {
      "name": "Limed Spruce",
      "hex": "394851"
    },
    {
      "name": "Dell",
      "hex": "396413"
    },
    {
      "name": "Toledo",
      "hex": "3A0020"
    },
    {
      "name": "Sambuca",
      "hex": "3A2010"
    },
    {
      "name": "Jacarta",
      "hex": "3A2A6A"
    },
    {
      "name": "William",
      "hex": "3A686C"
    },
    {
      "name": "Killarney",
      "hex": "3A6A47"
    },
    {
      "name": "Keppel",
      "hex": "3AB09E"
    },
    {
      "name": "Temptress",
      "hex": "3B000B"
    },
    {
      "name": "Aubergine",
      "hex": "3B0910"
    },
    {
      "name": "Jon",
      "hex": "3B1F1F"
    },
    {
      "name": "Treehouse",
      "hex": "3B2820"
    },
    {
      "name": "Amazon",
      "hex": "3B7A57"
    },
    {
      "name": "Boston Blue",
      "hex": "3B91B4"
    },
    {
      "name": "Windsor",
      "hex": "3C0878"
    },
    {
      "name": "Rebel",
      "hex": "3C1206"
    },
    {
      "name": "Meteorite",
      "hex": "3C1F76"
    },
    {
      "name": "Dark Ebony",
      "hex": "3C2005"
    },
    {
      "name": "Camouflage",
      "hex": "3C3910"
    },
    {
      "name": "Bright Gray",
      "hex": "3C4151"
    },
    {
      "name": "Cape Cod",
      "hex": "3C4443"
    },
    {
      "name": "Lunar Green",
      "hex": "3C493A"
    },
    {
      "name": "Bean  ",
      "hex": "3D0C02"
    },
    {
      "name": "Bistre",
      "hex": "3D2B1F"
    },
    {
      "name": "Goblin",
      "hex": "3D7D52"
    },
    {
      "name": "Kingfisher Daisy",
      "hex": "3E0480"
    },
    {
      "name": "Cedar",
      "hex": "3E1C14"
    },
    {
      "name": "English Walnut",
      "hex": "3E2B23"
    },
    {
      "name": "Black Marlin",
      "hex": "3E2C1C"
    },
    {
      "name": "Ship Gray",
      "hex": "3E3A44"
    },
    {
      "name": "Pelorous",
      "hex": "3EABBF"
    },
    {
      "name": "Bronze",
      "hex": "3F2109"
    },
    {
      "name": "Cola",
      "hex": "3F2500"
    },
    {
      "name": "Madras",
      "hex": "3F3002"
    },
    {
      "name": "Minsk",
      "hex": "3F307F"
    },
    {
      "name": "Cabbage Pont",
      "hex": "3F4C3A"
    },
    {
      "name": "Tom Thumb",
      "hex": "3F583B"
    },
    {
      "name": "Mineral Green",
      "hex": "3F5D53"
    },
    {
      "name": "Puerto Rico",
      "hex": "3FC1AA"
    },
    {
      "name": "Harlequin",
      "hex": "3FFF00"
    },
    {
      "name": "Brown Pod",
      "hex": "401801"
    },
    {
      "name": "Cork",
      "hex": "40291D"
    },
    {
      "name": "Masala",
      "hex": "403B38"
    },
    {
      "name": "Thatch Green",
      "hex": "403D19"
    },
    {
      "name": "Fiord",
      "hex": "405169"
    },
    {
      "name": "Viridian",
      "hex": "40826D"
    },
    {
      "name": "Chateau Green",
      "hex": "40A860"
    },
    {
      "name": "Ripe Plum",
      "hex": "410056"
    },
    {
      "name": "Paco",
      "hex": "411F10"
    },
    {
      "name": "Deep Oak",
      "hex": "412010"
    },
    {
      "name": "Merlin",
      "hex": "413C37"
    },
    {
      "name": "Gun Powder",
      "hex": "414257"
    },
    {
      "name": "East Bay",
      "hex": "414C7D"
    },
    {
      "name": "Royal Blue",
      "hex": "4169E1"
    },
    {
      "name": "Ocean Green",
      "hex": "41AA78"
    },
    {
      "name": "Burnt Maroon",
      "hex": "420303"
    },
    {
      "name": "Lisbon Brown",
      "hex": "423921"
    },
    {
      "name": "Faded Jade",
      "hex": "427977"
    },
    {
      "name": "Scarlet Gum",
      "hex": "431560"
    },
    {
      "name": "Iroko",
      "hex": "433120"
    },
    {
      "name": "Armadillo",
      "hex": "433E37"
    },
    {
      "name": "River Bed",
      "hex": "434C59"
    },
    {
      "name": "Green Leaf",
      "hex": "436A0D"
    },
    {
      "name": "Barossa",
      "hex": "44012D"
    },
    {
      "name": "Morocco Brown",
      "hex": "441D00"
    },
    {
      "name": "Mako",
      "hex": "444954"
    },
    {
      "name": "Kelp",
      "hex": "454936"
    },
    {
      "name": "San Marino",
      "hex": "456CAC"
    },
    {
      "name": "Picton Blue",
      "hex": "45B1E8"
    },
    {
      "name": "Loulou",
      "hex": "460B41"
    },
    {
      "name": "Crater Brown",
      "hex": "462425"
    },
    {
      "name": "Gray Asparagus",
      "hex": "465945"
    },
    {
      "name": "Steel Blue",
      "hex": "4682B4"
    },
    {
      "name": "Rustic Red",
      "hex": "480404"
    },
    {
      "name": "Bulgarian Rose",
      "hex": "480607"
    },
    {
      "name": "Clairvoyant",
      "hex": "480656"
    },
    {
      "name": "Cocoa Bean",
      "hex": "481C1C"
    },
    {
      "name": "Woody Brown",
      "hex": "483131"
    },
    {
      "name": "Taupe",
      "hex": "483C32"
    },
    {
      "name": "Van Cleef",
      "hex": "49170C"
    },
    {
      "name": "Brown Derby",
      "hex": "492615"
    },
    {
      "name": "Metallic Bronze",
      "hex": "49371B"
    },
    {
      "name": "Verdun Green",
      "hex": "495400"
    },
    {
      "name": "Blue Bayoux",
      "hex": "496679"
    },
    {
      "name": "Bismark",
      "hex": "497183"
    },
    {
      "name": "Bracken",
      "hex": "4A2A04"
    },
    {
      "name": "Deep Bronze",
      "hex": "4A3004"
    },
    {
      "name": "Mondo",
      "hex": "4A3C30"
    },
    {
      "name": "Tundora",
      "hex": "4A4244"
    },
    {
      "name": "Gravel",
      "hex": "4A444B"
    },
    {
      "name": "Trout",
      "hex": "4A4E5A"
    },
    {
      "name": "Pigment Indigo",
      "hex": "4B0082"
    },
    {
      "name": "Nandor",
      "hex": "4B5D52"
    },
    {
      "name": "Saddle",
      "hex": "4C3024"
    },
    {
      "name": "Abbey",
      "hex": "4C4F56"
    },
    {
      "name": "Blackberry",
      "hex": "4D0135"
    },
    {
      "name": "Cab Sav",
      "hex": "4D0A18"
    },
    {
      "name": "Indian Tan",
      "hex": "4D1E01"
    },
    {
      "name": "Cowboy",
      "hex": "4D282D"
    },
    {
      "name": "Livid Brown",
      "hex": "4D282E"
    },
    {
      "name": "Rock",
      "hex": "4D3833"
    },
    {
      "name": "Punga",
      "hex": "4D3D14"
    },
    {
      "name": "Bronzetone",
      "hex": "4D400F"
    },
    {
      "name": "Woodland",
      "hex": "4D5328"
    },
    {
      "name": "Mahogany",
      "hex": "4E0606"
    },
    {
      "name": "Bossanova",
      "hex": "4E2A5A"
    },
    {
      "name": "Matterhorn",
      "hex": "4E3B41"
    },
    {
      "name": "Bronze Olive",
      "hex": "4E420C"
    },
    {
      "name": "Mulled Wine",
      "hex": "4E4562"
    },
    {
      "name": "Axolotl",
      "hex": "4E6649"
    },
    {
      "name": "Wedgewood",
      "hex": "4E7F9E"
    },
    {
      "name": "Shakespeare",
      "hex": "4EABD1"
    },
    {
      "name": "Honey Flower",
      "hex": "4F1C70"
    },
    {
      "name": "Daisy Bush",
      "hex": "4F2398"
    },
    {
      "name": "Indigo",
      "hex": "4F69C6"
    },
    {
      "name": "Fern Green",
      "hex": "4F7942"
    },
    {
      "name": "Fruit Salad",
      "hex": "4F9D5D"
    },
    {
      "name": "Apple",
      "hex": "4FA83D"
    },
    {
      "name": "Mortar",
      "hex": "504351"
    },
    {
      "name": "Kashmir Blue",
      "hex": "507096"
    },
    {
      "name": "Cutty Sark",
      "hex": "507672"
    },
    {
      "name": "Emerald",
      "hex": "50C878"
    },
    {
      "name": "Emperor",
      "hex": "514649"
    },
    {
      "name": "Chalet Green",
      "hex": "516E3D"
    },
    {
      "name": "Como",
      "hex": "517C66"
    },
    {
      "name": "Smalt Blue",
      "hex": "51808F"
    },
    {
      "name": "Castro",
      "hex": "52001F"
    },
    {
      "name": "Maroon Oak",
      "hex": "520C17"
    },
    {
      "name": "Gigas",
      "hex": "523C94"
    },
    {
      "name": "Voodoo",
      "hex": "533455"
    },
    {
      "name": "Victoria",
      "hex": "534491"
    },
    {
      "name": "Hippie Green",
      "hex": "53824B"
    },
    {
      "name": "Heath",
      "hex": "541012"
    },
    {
      "name": "Judge Gray",
      "hex": "544333"
    },
    {
      "name": "Fuscous Gray",
      "hex": "54534D"
    },
    {
      "name": "Vida Loca",
      "hex": "549019"
    },
    {
      "name": "Cioccolato",
      "hex": "55280C"
    },
    {
      "name": "Saratoga",
      "hex": "555B10"
    },
    {
      "name": "Finlandia",
      "hex": "556D56"
    },
    {
      "name": "Havelock Blue",
      "hex": "5590D9"
    },
    {
      "name": "Fountain Blue",
      "hex": "56B4BE"
    },
    {
      "name": "Spring Leaves",
      "hex": "578363"
    },
    {
      "name": "Saddle Brown",
      "hex": "583401"
    },
    {
      "name": "Scarpa Flow",
      "hex": "585562"
    },
    {
      "name": "Cactus",
      "hex": "587156"
    },
    {
      "name": "Hippie Blue",
      "hex": "589AAF"
    },
    {
      "name": "Wine Berry",
      "hex": "591D35"
    },
    {
      "name": "Brown Bramble",
      "hex": "592804"
    },
    {
      "name": "Congo Brown",
      "hex": "593737"
    },
    {
      "name": "Millbrook",
      "hex": "594433"
    },
    {
      "name": "Waikawa Gray",
      "hex": "5A6E9C"
    },
    {
      "name": "Horizon",
      "hex": "5A87A0"
    },
    {
      "name": "Jambalaya",
      "hex": "5B3013"
    },
    {
      "name": "Bordeaux",
      "hex": "5C0120"
    },
    {
      "name": "Mulberry Wood",
      "hex": "5C0536"
    },
    {
      "name": "Carnaby Tan",
      "hex": "5C2E01"
    },
    {
      "name": "Comet",
      "hex": "5C5D75"
    },
    {
      "name": "Redwood",
      "hex": "5D1E0F"
    },
    {
      "name": "Don Juan",
      "hex": "5D4C51"
    },
    {
      "name": "Chicago",
      "hex": "5D5C58"
    },
    {
      "name": "Verdigris",
      "hex": "5D5E37"
    },
    {
      "name": "Dingley",
      "hex": "5D7747"
    },
    {
      "name": "Breaker Bay",
      "hex": "5DA19F"
    },
    {
      "name": "Kabul",
      "hex": "5E483E"
    },
    {
      "name": "Hemlock",
      "hex": "5E5D3B"
    },
    {
      "name": "Irish Coffee",
      "hex": "5F3D26"
    },
    {
      "name": "Mid Gray",
      "hex": "5F5F6E"
    },
    {
      "name": "Shuttle Gray",
      "hex": "5F6672"
    },
    {
      "name": "Aqua Forest",
      "hex": "5FA777"
    },
    {
      "name": "Tradewind",
      "hex": "5FB3AC"
    },
    {
      "name": "Horses Neck",
      "hex": "604913"
    },
    {
      "name": "Smoky",
      "hex": "605B73"
    },
    {
      "name": "Corduroy",
      "hex": "606E68"
    },
    {
      "name": "Danube",
      "hex": "6093D1"
    },
    {
      "name": "Espresso",
      "hex": "612718"
    },
    {
      "name": "Eggplant",
      "hex": "614051"
    },
    {
      "name": "Costa Del Sol",
      "hex": "615D30"
    },
    {
      "name": "Glade Green",
      "hex": "61845F"
    },
    {
      "name": "Buccaneer",
      "hex": "622F30"
    },
    {
      "name": "Quincy",
      "hex": "623F2D"
    },
    {
      "name": "Butterfly Bush",
      "hex": "624E9A"
    },
    {
      "name": "West Coast",
      "hex": "625119"
    },
    {
      "name": "Finch",
      "hex": "626649"
    },
    {
      "name": "Patina",
      "hex": "639A8F"
    },
    {
      "name": "Fern",
      "hex": "63B76C"
    },
    {
      "name": "Blue Violet",
      "hex": "6456B7"
    },
    {
      "name": "Dolphin",
      "hex": "646077"
    },
    {
      "name": "Storm Dust",
      "hex": "646463"
    },
    {
      "name": "Siam",
      "hex": "646A54"
    },
    {
      "name": "Nevada",
      "hex": "646E75"
    },
    {
      "name": "Cornflower Blue",
      "hex": "6495ED"
    },
    {
      "name": "Viking",
      "hex": "64CCDB"
    },
    {
      "name": "Rosewood",
      "hex": "65000B"
    },
    {
      "name": "Cherrywood",
      "hex": "651A14"
    },
    {
      "name": "Purple Heart",
      "hex": "652DC1"
    },
    {
      "name": "Fern Frond",
      "hex": "657220"
    },
    {
      "name": "Willow Grove",
      "hex": "65745D"
    },
    {
      "name": "Hoki",
      "hex": "65869F"
    },
    {
      "name": "Pompadour",
      "hex": "660045"
    },
    {
      "name": "Purple",
      "hex": "660099"
    },
    {
      "name": "Tyrian Purple",
      "hex": "66023C"
    },
    {
      "name": "Dark Tan",
      "hex": "661010"
    },
    {
      "name": "Silver Tree",
      "hex": "66B58F"
    },
    {
      "name": "Bright Green",
      "hex": "66FF00"
    },
    {
      "name": "Screamin' Green",
      "hex": "66FF66"
    },
    {
      "name": "Black Rose",
      "hex": "67032D"
    },
    {
      "name": "Scampi",
      "hex": "675FA6"
    },
    {
      "name": "Ironside Gray",
      "hex": "676662"
    },
    {
      "name": "Viridian Green",
      "hex": "678975"
    },
    {
      "name": "Christi",
      "hex": "67A712"
    },
    {
      "name": "Nutmeg Wood Finish",
      "hex": "683600"
    },
    {
      "name": "Zambezi",
      "hex": "685558"
    },
    {
      "name": "Salt Box",
      "hex": "685E6E"
    },
    {
      "name": "Tawny Port",
      "hex": "692545"
    },
    {
      "name": "Finn",
      "hex": "692D54"
    },
    {
      "name": "Scorpion",
      "hex": "695F62"
    },
    {
      "name": "Lynch",
      "hex": "697E9A"
    },
    {
      "name": "Spice",
      "hex": "6A442E"
    },
    {
      "name": "Himalaya",
      "hex": "6A5D1B"
    },
    {
      "name": "Soya Bean",
      "hex": "6A6051"
    },
    {
      "name": "Hairy Heath",
      "hex": "6B2A14"
    },
    {
      "name": "Royal Purple",
      "hex": "6B3FA0"
    },
    {
      "name": "Shingle Fawn",
      "hex": "6B4E31"
    },
    {
      "name": "Dorado",
      "hex": "6B5755"
    },
    {
      "name": "Bermuda Gray",
      "hex": "6B8BA2"
    },
    {
      "name": "Olive Drab",
      "hex": "6B8E23"
    },
    {
      "name": "Eminence",
      "hex": "6C3082"
    },
    {
      "name": "Turquoise Blue",
      "hex": "6CDAE7"
    },
    {
      "name": "Lonestar",
      "hex": "6D0101"
    },
    {
      "name": "Pine Cone",
      "hex": "6D5E54"
    },
    {
      "name": "Dove Gray",
      "hex": "6D6C6C"
    },
    {
      "name": "Juniper",
      "hex": "6D9292"
    },
    {
      "name": "Gothic",
      "hex": "6D92A1"
    },
    {
      "name": "Red Oxide",
      "hex": "6E0902"
    },
    {
      "name": "Moccaccino",
      "hex": "6E1D14"
    },
    {
      "name": "Pickled Bean",
      "hex": "6E4826"
    },
    {
      "name": "Dallas",
      "hex": "6E4B26"
    },
    {
      "name": "Kokoda",
      "hex": "6E6D57"
    },
    {
      "name": "Pale Sky",
      "hex": "6E7783"
    },
    {
      "name": "Cafe Royale",
      "hex": "6F440C"
    },
    {
      "name": "Flint",
      "hex": "6F6A61"
    },
    {
      "name": "Highland",
      "hex": "6F8E63"
    },
    {
      "name": "Limeade",
      "hex": "6F9D02"
    },
    {
      "name": "Downy",
      "hex": "6FD0C5"
    },
    {
      "name": "Persian Plum",
      "hex": "701C1C"
    },
    {
      "name": "Sepia",
      "hex": "704214"
    },
    {
      "name": "Antique Bronze",
      "hex": "704A07"
    },
    {
      "name": "Ferra",
      "hex": "704F50"
    },
    {
      "name": "Coffee",
      "hex": "706555"
    },
    {
      "name": "Slate Gray",
      "hex": "708090"
    },
    {
      "name": "Cedar Wood Finish",
      "hex": "711A00"
    },
    {
      "name": "Metallic Copper",
      "hex": "71291D"
    },
    {
      "name": "Affair",
      "hex": "714693"
    },
    {
      "name": "Studio",
      "hex": "714AB2"
    },
    {
      "name": "Tobacco Brown",
      "hex": "715D47"
    },
    {
      "name": "Yellow Metal",
      "hex": "716338"
    },
    {
      "name": "Peat",
      "hex": "716B56"
    },
    {
      "name": "Olivetone",
      "hex": "716E10"
    },
    {
      "name": "Storm Gray",
      "hex": "717486"
    },
    {
      "name": "Sirocco",
      "hex": "718080"
    },
    {
      "name": "Aquamarine Blue",
      "hex": "71D9E2"
    },
    {
      "name": "Venetian Red",
      "hex": "72010F"
    },
    {
      "name": "Old Copper",
      "hex": "724A2F"
    },
    {
      "name": "Go Ben",
      "hex": "726D4E"
    },
    {
      "name": "Raven",
      "hex": "727B89"
    },
    {
      "name": "Seance",
      "hex": "731E8F"
    },
    {
      "name": "Raw Umber",
      "hex": "734A12"
    },
    {
      "name": "Kimberly",
      "hex": "736C9F"
    },
    {
      "name": "Crocodile",
      "hex": "736D58"
    },
    {
      "name": "Crete",
      "hex": "737829"
    },
    {
      "name": "Xanadu",
      "hex": "738678"
    },
    {
      "name": "Spicy Mustard",
      "hex": "74640D"
    },
    {
      "name": "Limed Ash",
      "hex": "747D63"
    },
    {
      "name": "Rolling Stone",
      "hex": "747D83"
    },
    {
      "name": "Blue Smoke",
      "hex": "748881"
    },
    {
      "name": "Laurel",
      "hex": "749378"
    },
    {
      "name": "Mantis",
      "hex": "74C365"
    },
    {
      "name": "Russett",
      "hex": "755A57"
    },
    {
      "name": "Deluge",
      "hex": "7563A8"
    },
    {
      "name": "Cosmic",
      "hex": "76395D"
    },
    {
      "name": "Blue Marguerite",
      "hex": "7666C6"
    },
    {
      "name": "Lima",
      "hex": "76BD17"
    },
    {
      "name": "Sky Blue",
      "hex": "76D7EA"
    },
    {
      "name": "Dark Burgundy",
      "hex": "770F05"
    },
    {
      "name": "Crown of Thorns",
      "hex": "771F1F"
    },
    {
      "name": "Walnut",
      "hex": "773F1A"
    },
    {
      "name": "Pablo",
      "hex": "776F61"
    },
    {
      "name": "Pacifika",
      "hex": "778120"
    },
    {
      "name": "Oxley",
      "hex": "779E86"
    },
    {
      "name": "Pastel Green",
      "hex": "77DD77"
    },
    {
      "name": "Japanese Maple",
      "hex": "780109"
    },
    {
      "name": "Mocha",
      "hex": "782D19"
    },
    {
      "name": "Peanut",
      "hex": "782F16"
    },
    {
      "name": "Camouflage Green",
      "hex": "78866B"
    },
    {
      "name": "Wasabi",
      "hex": "788A25"
    },
    {
      "name": "Ship Cove",
      "hex": "788BBA"
    },
    {
      "name": "Sea Nymph",
      "hex": "78A39C"
    },
    {
      "name": "Roman Coffee",
      "hex": "795D4C"
    },
    {
      "name": "Old Lavender",
      "hex": "796878"
    },
    {
      "name": "Rum",
      "hex": "796989"
    },
    {
      "name": "Fedora",
      "hex": "796A78"
    },
    {
      "name": "Sandstone",
      "hex": "796D62"
    },
    {
      "name": "Spray",
      "hex": "79DEEC"
    },
    {
      "name": "Siren",
      "hex": "7A013A"
    },
    {
      "name": "Fuchsia Blue",
      "hex": "7A58C1"
    },
    {
      "name": "Boulder",
      "hex": "7A7A7A"
    },
    {
      "name": "Wild Blue Yonder",
      "hex": "7A89B8"
    },
    {
      "name": "De York",
      "hex": "7AC488"
    },
    {
      "name": "Red Beech",
      "hex": "7B3801"
    },
    {
      "name": "Cinnamon",
      "hex": "7B3F00"
    },
    {
      "name": "Yukon Gold",
      "hex": "7B6608"
    },
    {
      "name": "Tapa",
      "hex": "7B7874"
    },
    {
      "name": "Waterloo ",
      "hex": "7B7C94"
    },
    {
      "name": "Flax Smoke",
      "hex": "7B8265"
    },
    {
      "name": "Amulet",
      "hex": "7B9F80"
    },
    {
      "name": "Asparagus",
      "hex": "7BA05B"
    },
    {
      "name": "Kenyan Copper",
      "hex": "7C1C05"
    },
    {
      "name": "Pesto",
      "hex": "7C7631"
    },
    {
      "name": "Topaz",
      "hex": "7C778A"
    },
    {
      "name": "Concord",
      "hex": "7C7B7A"
    },
    {
      "name": "Jumbo",
      "hex": "7C7B82"
    },
    {
      "name": "Trendy Green",
      "hex": "7C881A"
    },
    {
      "name": "Gumbo",
      "hex": "7CA1A6"
    },
    {
      "name": "Acapulco",
      "hex": "7CB0A1"
    },
    {
      "name": "Neptune",
      "hex": "7CB7BB"
    },
    {
      "name": "Pueblo",
      "hex": "7D2C14"
    },
    {
      "name": "Bay Leaf",
      "hex": "7DA98D"
    },
    {
      "name": "Malibu",
      "hex": "7DC8F7"
    },
    {
      "name": "Bermuda",
      "hex": "7DD8C6"
    },
    {
      "name": "Copper Canyon",
      "hex": "7E3A15"
    },
    {
      "name": "Claret",
      "hex": "7F1734"
    },
    {
      "name": "Peru Tan",
      "hex": "7F3A02"
    },
    {
      "name": "Falcon",
      "hex": "7F626D"
    },
    {
      "name": "Mobster",
      "hex": "7F7589"
    },
    {
      "name": "Moody Blue",
      "hex": "7F76D3"
    },
    {
      "name": "Chartreuse",
      "hex": "7FFF00"
    },
    {
      "name": "Aquamarine",
      "hex": "7FFFD4"
    },
    {
      "name": "Maroon",
      "hex": "800000"
    },
    {
      "name": "Rose Bud Cherry",
      "hex": "800B47"
    },
    {
      "name": "Falu Red",
      "hex": "801818"
    },
    {
      "name": "Red Robin",
      "hex": "80341F"
    },
    {
      "name": "Vivid Violet",
      "hex": "803790"
    },
    {
      "name": "Russet",
      "hex": "80461B"
    },
    {
      "name": "Friar Gray",
      "hex": "807E79"
    },
    {
      "name": "Olive",
      "hex": "808000"
    },
    {
      "name": "Gray",
      "hex": "808080"
    },
    {
      "name": "Gulf Stream",
      "hex": "80B3AE"
    },
    {
      "name": "Glacier",
      "hex": "80B3C4"
    },
    {
      "name": "Seagull",
      "hex": "80CCEA"
    },
    {
      "name": "Nutmeg",
      "hex": "81422C"
    },
    {
      "name": "Spicy Pink",
      "hex": "816E71"
    },
    {
      "name": "Empress",
      "hex": "817377"
    },
    {
      "name": "Spanish Green",
      "hex": "819885"
    },
    {
      "name": "Sand Dune",
      "hex": "826F65"
    },
    {
      "name": "Gunsmoke",
      "hex": "828685"
    },
    {
      "name": "Battleship Gray",
      "hex": "828F72"
    },
    {
      "name": "Merlot",
      "hex": "831923"
    },
    {
      "name": "Shadow",
      "hex": "837050"
    },
    {
      "name": "Chelsea Cucumber",
      "hex": "83AA5D"
    },
    {
      "name": "Monte Carlo",
      "hex": "83D0C6"
    },
    {
      "name": "Plum",
      "hex": "843179"
    },
    {
      "name": "Granny Smith",
      "hex": "84A0A0"
    },
    {
      "name": "Chetwode Blue",
      "hex": "8581D9"
    },
    {
      "name": "Bandicoot",
      "hex": "858470"
    },
    {
      "name": "Bali Hai",
      "hex": "859FAF"
    },
    {
      "name": "Half Baked",
      "hex": "85C4CC"
    },
    {
      "name": "Red Devil",
      "hex": "860111"
    },
    {
      "name": "Lotus",
      "hex": "863C3C"
    },
    {
      "name": "Ironstone",
      "hex": "86483C"
    },
    {
      "name": "Bull Shot",
      "hex": "864D1E"
    },
    {
      "name": "Rusty Nail",
      "hex": "86560A"
    },
    {
      "name": "Bitter",
      "hex": "868974"
    },
    {
      "name": "Regent Gray",
      "hex": "86949F"
    },
    {
      "name": "Disco",
      "hex": "871550"
    },
    {
      "name": "Americano",
      "hex": "87756E"
    },
    {
      "name": "Hurricane",
      "hex": "877C7B"
    },
    {
      "name": "Oslo Gray",
      "hex": "878D91"
    },
    {
      "name": "Sushi",
      "hex": "87AB39"
    },
    {
      "name": "Spicy Mix",
      "hex": "885342"
    },
    {
      "name": "Kumera",
      "hex": "886221"
    },
    {
      "name": "Suva Gray",
      "hex": "888387"
    },
    {
      "name": "Avocado",
      "hex": "888D65"
    },
    {
      "name": "Camelot",
      "hex": "893456"
    },
    {
      "name": "Solid Pink",
      "hex": "893843"
    },
    {
      "name": "Cannon Pink",
      "hex": "894367"
    },
    {
      "name": "Makara",
      "hex": "897D6D"
    },
    {
      "name": "Burnt Umber",
      "hex": "8A3324"
    },
    {
      "name": "True V",
      "hex": "8A73D6"
    },
    {
      "name": "Clay Creek",
      "hex": "8A8360"
    },
    {
      "name": "Monsoon",
      "hex": "8A8389"
    },
    {
      "name": "Stack",
      "hex": "8A8F8A"
    },
    {
      "name": "Jordy Blue",
      "hex": "8AB9F1"
    },
    {
      "name": "Electric Violet",
      "hex": "8B00FF"
    },
    {
      "name": "Monarch",
      "hex": "8B0723"
    },
    {
      "name": "Corn Harvest",
      "hex": "8B6B0B"
    },
    {
      "name": "Olive Haze",
      "hex": "8B8470"
    },
    {
      "name": "Schooner",
      "hex": "8B847E"
    },
    {
      "name": "Natural Gray",
      "hex": "8B8680"
    },
    {
      "name": "Mantle",
      "hex": "8B9C90"
    },
    {
      "name": "Portage",
      "hex": "8B9FEE"
    },
    {
      "name": "Envy",
      "hex": "8BA690"
    },
    {
      "name": "Cascade",
      "hex": "8BA9A5"
    },
    {
      "name": "Riptide",
      "hex": "8BE6D8"
    },
    {
      "name": "Cardinal Pink",
      "hex": "8C055E"
    },
    {
      "name": "Mule Fawn",
      "hex": "8C472F"
    },
    {
      "name": "Potters Clay",
      "hex": "8C5738"
    },
    {
      "name": "Trendy Pink",
      "hex": "8C6495"
    },
    {
      "name": "Paprika",
      "hex": "8D0226"
    },
    {
      "name": "Sanguine Brown",
      "hex": "8D3D38"
    },
    {
      "name": "Tosca",
      "hex": "8D3F3F"
    },
    {
      "name": "Cement",
      "hex": "8D7662"
    },
    {
      "name": "Granite Green",
      "hex": "8D8974"
    },
    {
      "name": "Manatee",
      "hex": "8D90A1"
    },
    {
      "name": "Polo Blue",
      "hex": "8DA8CC"
    },
    {
      "name": "Red Berry",
      "hex": "8E0000"
    },
    {
      "name": "Rope",
      "hex": "8E4D1E"
    },
    {
      "name": "Opium",
      "hex": "8E6F70"
    },
    {
      "name": "Domino",
      "hex": "8E775E"
    },
    {
      "name": "Mamba",
      "hex": "8E8190"
    },
    {
      "name": "Nepal",
      "hex": "8EABC1"
    },
    {
      "name": "Pohutukawa",
      "hex": "8F021C"
    },
    {
      "name": "El Salva",
      "hex": "8F3E33"
    },
    {
      "name": "Korma",
      "hex": "8F4B0E"
    },
    {
      "name": "Squirrel",
      "hex": "8F8176"
    },
    {
      "name": "Vista Blue",
      "hex": "8FD6B4"
    },
    {
      "name": "Burgundy",
      "hex": "900020"
    },
    {
      "name": "Old Brick",
      "hex": "901E1E"
    },
    {
      "name": "Hemp",
      "hex": "907874"
    },
    {
      "name": "Almond Frost",
      "hex": "907B71"
    },
    {
      "name": "Sycamore",
      "hex": "908D39"
    },
    {
      "name": "Sangria",
      "hex": "92000A"
    },
    {
      "name": "Cumin",
      "hex": "924321"
    },
    {
      "name": "Beaver",
      "hex": "926F5B"
    },
    {
      "name": "Stonewall",
      "hex": "928573"
    },
    {
      "name": "Venus",
      "hex": "928590"
    },
    {
      "name": "Medium Purple",
      "hex": "9370DB"
    },
    {
      "name": "Cornflower",
      "hex": "93CCEA"
    },
    {
      "name": "Algae Green",
      "hex": "93DFB8"
    },
    {
      "name": "Copper Rust",
      "hex": "944747"
    },
    {
      "name": "Arrowtown",
      "hex": "948771"
    },
    {
      "name": "Scarlett",
      "hex": "950015"
    },
    {
      "name": "Strikemaster",
      "hex": "956387"
    },
    {
      "name": "Mountain Mist",
      "hex": "959396"
    },
    {
      "name": "Carmine",
      "hex": "960018"
    },
    {
      "name": "Brown",
      "hex": "964B00"
    },
    {
      "name": "Leather",
      "hex": "967059"
    },
    {
      "name": "Purple Mountain's Majesty",
      "hex": "9678B6"
    },
    {
      "name": "Lavender Purple",
      "hex": "967BB6"
    },
    {
      "name": "Pewter",
      "hex": "96A8A1"
    },
    {
      "name": "Summer Green",
      "hex": "96BBAB"
    },
    {
      "name": "Au Chico",
      "hex": "97605D"
    },
    {
      "name": "Wisteria",
      "hex": "9771B5"
    },
    {
      "name": "Atlantis",
      "hex": "97CD2D"
    },
    {
      "name": "Vin Rouge",
      "hex": "983D61"
    },
    {
      "name": "Lilac Bush",
      "hex": "9874D3"
    },
    {
      "name": "Bazaar",
      "hex": "98777B"
    },
    {
      "name": "Hacienda",
      "hex": "98811B"
    },
    {
      "name": "Pale Oyster",
      "hex": "988D77"
    },
    {
      "name": "Mint Green",
      "hex": "98FF98"
    },
    {
      "name": "Fresh Eggplant",
      "hex": "990066"
    },
    {
      "name": "Violet Eggplant",
      "hex": "991199"
    },
    {
      "name": "Tamarillo",
      "hex": "991613"
    },
    {
      "name": "Totem Pole",
      "hex": "991B07"
    },
    {
      "name": "Copper Rose",
      "hex": "996666"
    },
    {
      "name": "Amethyst",
      "hex": "9966CC"
    },
    {
      "name": "Mountbatten Pink",
      "hex": "997A8D"
    },
    {
      "name": "Blue Bell",
      "hex": "9999CC"
    },
    {
      "name": "Prairie Sand",
      "hex": "9A3820"
    },
    {
      "name": "Toast",
      "hex": "9A6E61"
    },
    {
      "name": "Gurkha",
      "hex": "9A9577"
    },
    {
      "name": "Olivine",
      "hex": "9AB973"
    },
    {
      "name": "Shadow Green",
      "hex": "9AC2B8"
    },
    {
      "name": "Oregon",
      "hex": "9B4703"
    },
    {
      "name": "Lemon Grass",
      "hex": "9B9E8F"
    },
    {
      "name": "Stiletto",
      "hex": "9C3336"
    },
    {
      "name": "Hawaiian Tan",
      "hex": "9D5616"
    },
    {
      "name": "Gull Gray",
      "hex": "9DACB7"
    },
    {
      "name": "Pistachio",
      "hex": "9DC209"
    },
    {
      "name": "Granny Smith Apple",
      "hex": "9DE093"
    },
    {
      "name": "Anakiwa",
      "hex": "9DE5FF"
    },
    {
      "name": "Chelsea Gem",
      "hex": "9E5302"
    },
    {
      "name": "Sepia Skin",
      "hex": "9E5B40"
    },
    {
      "name": "Sage",
      "hex": "9EA587"
    },
    {
      "name": "Citron",
      "hex": "9EA91F"
    },
    {
      "name": "Rock Blue",
      "hex": "9EB1CD"
    },
    {
      "name": "Morning Glory",
      "hex": "9EDEE0"
    },
    {
      "name": "Cognac",
      "hex": "9F381D"
    },
    {
      "name": "Reef Gold",
      "hex": "9F821C"
    },
    {
      "name": "Star Dust",
      "hex": "9F9F9C"
    },
    {
      "name": "Santas Gray",
      "hex": "9FA0B1"
    },
    {
      "name": "Sinbad",
      "hex": "9FD7D3"
    },
    {
      "name": "Feijoa",
      "hex": "9FDD8C"
    },
    {
      "name": "Tabasco",
      "hex": "A02712"
    },
    {
      "name": "Buttered Rum",
      "hex": "A1750D"
    },
    {
      "name": "Hit Gray",
      "hex": "A1ADB5"
    },
    {
      "name": "Citrus",
      "hex": "A1C50A"
    },
    {
      "name": "Aqua Island",
      "hex": "A1DAD7"
    },
    {
      "name": "Water Leaf",
      "hex": "A1E9DE"
    },
    {
      "name": "Flirt",
      "hex": "A2006D"
    },
    {
      "name": "Rouge",
      "hex": "A23B6C"
    },
    {
      "name": "Cape Palliser",
      "hex": "A26645"
    },
    {
      "name": "Gray Chateau",
      "hex": "A2AAB3"
    },
    {
      "name": "Edward",
      "hex": "A2AEAB"
    },
    {
      "name": "Pharlap",
      "hex": "A3807B"
    },
    {
      "name": "Amethyst Smoke",
      "hex": "A397B4"
    },
    {
      "name": "Blizzard Blue",
      "hex": "A3E3ED"
    },
    {
      "name": "Delta",
      "hex": "A4A49D"
    },
    {
      "name": "Wistful",
      "hex": "A4A6D3"
    },
    {
      "name": "Green Smoke",
      "hex": "A4AF6E"
    },
    {
      "name": "Jazzberry Jam",
      "hex": "A50B5E"
    },
    {
      "name": "Zorba",
      "hex": "A59B91"
    },
    {
      "name": "Bahia",
      "hex": "A5CB0C"
    },
    {
      "name": "Roof Terracotta",
      "hex": "A62F20"
    },
    {
      "name": "Paarl",
      "hex": "A65529"
    },
    {
      "name": "Barley Corn",
      "hex": "A68B5B"
    },
    {
      "name": "Donkey Brown",
      "hex": "A69279"
    },
    {
      "name": "Dawn",
      "hex": "A6A29A"
    },
    {
      "name": "Mexican Red",
      "hex": "A72525"
    },
    {
      "name": "Luxor Gold",
      "hex": "A7882C"
    },
    {
      "name": "Rich Gold",
      "hex": "A85307"
    },
    {
      "name": "Reno Sand",
      "hex": "A86515"
    },
    {
      "name": "Coral Tree",
      "hex": "A86B6B"
    },
    {
      "name": "Dusty Gray",
      "hex": "A8989B"
    },
    {
      "name": "Dull Lavender",
      "hex": "A899E6"
    },
    {
      "name": "Tallow",
      "hex": "A8A589"
    },
    {
      "name": "Bud",
      "hex": "A8AE9C"
    },
    {
      "name": "Locust",
      "hex": "A8AF8E"
    },
    {
      "name": "Norway",
      "hex": "A8BD9F"
    },
    {
      "name": "Chinook",
      "hex": "A8E3BD"
    },
    {
      "name": "Gray Olive",
      "hex": "A9A491"
    },
    {
      "name": "Aluminium",
      "hex": "A9ACB6"
    },
    {
      "name": "Cadet Blue",
      "hex": "A9B2C3"
    },
    {
      "name": "Schist",
      "hex": "A9B497"
    },
    {
      "name": "Tower Gray",
      "hex": "A9BDBF"
    },
    {
      "name": "Perano",
      "hex": "A9BEF2"
    },
    {
      "name": "Opal",
      "hex": "A9C6C2"
    },
    {
      "name": "Night Shadz",
      "hex": "AA375A"
    },
    {
      "name": "Fire",
      "hex": "AA4203"
    },
    {
      "name": "Muesli",
      "hex": "AA8B5B"
    },
    {
      "name": "Sandal",
      "hex": "AA8D6F"
    },
    {
      "name": "Shady Lady",
      "hex": "AAA5A9"
    },
    {
      "name": "Logan",
      "hex": "AAA9CD"
    },
    {
      "name": "Spun Pearl",
      "hex": "AAABB7"
    },
    {
      "name": "Regent St Blue",
      "hex": "AAD6E6"
    },
    {
      "name": "Magic Mint",
      "hex": "AAF0D1"
    },
    {
      "name": "Lipstick",
      "hex": "AB0563"
    },
    {
      "name": "Royal Heath",
      "hex": "AB3472"
    },
    {
      "name": "Sandrift",
      "hex": "AB917A"
    },
    {
      "name": "Cold Purple",
      "hex": "ABA0D9"
    },
    {
      "name": "Bronco",
      "hex": "ABA196"
    },
    {
      "name": "Limed Oak",
      "hex": "AC8A56"
    },
    {
      "name": "East Side",
      "hex": "AC91CE"
    },
    {
      "name": "Lemon Ginger",
      "hex": "AC9E22"
    },
    {
      "name": "Napa",
      "hex": "ACA494"
    },
    {
      "name": "Hillary",
      "hex": "ACA586"
    },
    {
      "name": "Cloudy",
      "hex": "ACA59F"
    },
    {
      "name": "Silver Chalice",
      "hex": "ACACAC"
    },
    {
      "name": "Swamp Green",
      "hex": "ACB78E"
    },
    {
      "name": "Spring Rain",
      "hex": "ACCBB1"
    },
    {
      "name": "Conifer",
      "hex": "ACDD4D"
    },
    {
      "name": "Celadon",
      "hex": "ACE1AF"
    },
    {
      "name": "Mandalay",
      "hex": "AD781B"
    },
    {
      "name": "Casper",
      "hex": "ADBED1"
    },
    {
      "name": "Moss Green",
      "hex": "ADDFAD"
    },
    {
      "name": "Padua",
      "hex": "ADE6C4"
    },
    {
      "name": "Green Yellow",
      "hex": "ADFF2F"
    },
    {
      "name": "Hippie Pink",
      "hex": "AE4560"
    },
    {
      "name": "Desert",
      "hex": "AE6020"
    },
    {
      "name": "Bouquet",
      "hex": "AE809E"
    },
    {
      "name": "Medium Carmine",
      "hex": "AF4035"
    },
    {
      "name": "Apple Blossom",
      "hex": "AF4D43"
    },
    {
      "name": "Brown Rust",
      "hex": "AF593E"
    },
    {
      "name": "Driftwood",
      "hex": "AF8751"
    },
    {
      "name": "Alpine",
      "hex": "AF8F2C"
    },
    {
      "name": "Lucky",
      "hex": "AF9F1C"
    },
    {
      "name": "Martini",
      "hex": "AFA09E"
    },
    {
      "name": "Bombay",
      "hex": "AFB1B8"
    },
    {
      "name": "Pigeon Post",
      "hex": "AFBDD9"
    },
    {
      "name": "Cadillac",
      "hex": "B04C6A"
    },
    {
      "name": "Matrix",
      "hex": "B05D54"
    },
    {
      "name": "Tapestry",
      "hex": "B05E81"
    },
    {
      "name": "Mai Tai",
      "hex": "B06608"
    },
    {
      "name": "Del Rio",
      "hex": "B09A95"
    },
    {
      "name": "Powder Blue",
      "hex": "B0E0E6"
    },
    {
      "name": "Inch Worm",
      "hex": "B0E313"
    },
    {
      "name": "Bright Red",
      "hex": "B10000"
    },
    {
      "name": "Vesuvius",
      "hex": "B14A0B"
    },
    {
      "name": "Pumpkin Skin",
      "hex": "B1610B"
    },
    {
      "name": "Santa Fe",
      "hex": "B16D52"
    },
    {
      "name": "Teak",
      "hex": "B19461"
    },
    {
      "name": "Fringy Flower",
      "hex": "B1E2C1"
    },
    {
      "name": "Ice Cold",
      "hex": "B1F4E7"
    },
    {
      "name": "Shiraz",
      "hex": "B20931"
    },
    {
      "name": "Biloba Flower",
      "hex": "B2A1EA"
    },
    {
      "name": "Tall Poppy",
      "hex": "B32D29"
    },
    {
      "name": "Fiery Orange",
      "hex": "B35213"
    },
    {
      "name": "Hot Toddy",
      "hex": "B38007"
    },
    {
      "name": "Taupe Gray",
      "hex": "B3AF95"
    },
    {
      "name": "La Rioja",
      "hex": "B3C110"
    },
    {
      "name": "Well Read",
      "hex": "B43332"
    },
    {
      "name": "Blush",
      "hex": "B44668"
    },
    {
      "name": "Jungle Mist",
      "hex": "B4CFD3"
    },
    {
      "name": "Turkish Rose",
      "hex": "B57281"
    },
    {
      "name": "Lavender",
      "hex": "B57EDC"
    },
    {
      "name": "Mongoose",
      "hex": "B5A27F"
    },
    {
      "name": "Olive Green",
      "hex": "B5B35C"
    },
    {
      "name": "Jet Stream",
      "hex": "B5D2CE"
    },
    {
      "name": "Cruise",
      "hex": "B5ECDF"
    },
    {
      "name": "Hibiscus",
      "hex": "B6316C"
    },
    {
      "name": "Thatch",
      "hex": "B69D98"
    },
    {
      "name": "Heathered Gray",
      "hex": "B6B095"
    },
    {
      "name": "Eagle",
      "hex": "B6BAA4"
    },
    {
      "name": "Spindle",
      "hex": "B6D1EA"
    },
    {
      "name": "Gum Leaf",
      "hex": "B6D3BF"
    },
    {
      "name": "Rust",
      "hex": "B7410E"
    },
    {
      "name": "Muddy Waters",
      "hex": "B78E5C"
    },
    {
      "name": "Sahara",
      "hex": "B7A214"
    },
    {
      "name": "Husk",
      "hex": "B7A458"
    },
    {
      "name": "Nobel",
      "hex": "B7B1B1"
    },
    {
      "name": "Heather",
      "hex": "B7C3D0"
    },
    {
      "name": "Madang",
      "hex": "B7F0BE"
    },
    {
      "name": "Milano Red",
      "hex": "B81104"
    },
    {
      "name": "Copper",
      "hex": "B87333"
    },
    {
      "name": "Gimblet",
      "hex": "B8B56A"
    },
    {
      "name": "Green Spring",
      "hex": "B8C1B1"
    },
    {
      "name": "Celery",
      "hex": "B8C25D"
    },
    {
      "name": "Sail",
      "hex": "B8E0F9"
    },
    {
      "name": "Chestnut",
      "hex": "B94E48"
    },
    {
      "name": "Crail",
      "hex": "B95140"
    },
    {
      "name": "Marigold",
      "hex": "B98D28"
    },
    {
      "name": "Wild Willow",
      "hex": "B9C46A"
    },
    {
      "name": "Rainee",
      "hex": "B9C8AC"
    },
    {
      "name": "Guardsman Red",
      "hex": "BA0101"
    },
    {
      "name": "Rock Spray",
      "hex": "BA450C"
    },
    {
      "name": "Bourbon",
      "hex": "BA6F1E"
    },
    {
      "name": "Pirate Gold",
      "hex": "BA7F03"
    },
    {
      "name": "Nomad",
      "hex": "BAB1A2"
    },
    {
      "name": "Submarine",
      "hex": "BAC7C9"
    },
    {
      "name": "Charlotte",
      "hex": "BAEEF9"
    },
    {
      "name": "Medium Red Violet",
      "hex": "BB3385"
    },
    {
      "name": "Brandy Rose",
      "hex": "BB8983"
    },
    {
      "name": "Rio Grande",
      "hex": "BBD009"
    },
    {
      "name": "Surf",
      "hex": "BBD7C1"
    },
    {
      "name": "Powder Ash",
      "hex": "BCC9C2"
    },
    {
      "name": "Tuscany",
      "hex": "BD5E2E"
    },
    {
      "name": "Quicksand",
      "hex": "BD978E"
    },
    {
      "name": "Silk",
      "hex": "BDB1A8"
    },
    {
      "name": "Malta",
      "hex": "BDB2A1"
    },
    {
      "name": "Chatelle",
      "hex": "BDB3C7"
    },
    {
      "name": "Lavender Gray",
      "hex": "BDBBD7"
    },
    {
      "name": "French Gray",
      "hex": "BDBDC6"
    },
    {
      "name": "Clay Ash",
      "hex": "BDC8B3"
    },
    {
      "name": "Loblolly",
      "hex": "BDC9CE"
    },
    {
      "name": "French Pass",
      "hex": "BDEDFD"
    },
    {
      "name": "London Hue",
      "hex": "BEA6C3"
    },
    {
      "name": "Pink Swan",
      "hex": "BEB5B7"
    },
    {
      "name": "Fuego",
      "hex": "BEDE0D"
    },
    {
      "name": "Rose of Sharon",
      "hex": "BF5500"
    },
    {
      "name": "Tide",
      "hex": "BFB8B0"
    },
    {
      "name": "Blue Haze",
      "hex": "BFBED8"
    },
    {
      "name": "Silver Sand",
      "hex": "BFC1C2"
    },
    {
      "name": "Key Lime Pie",
      "hex": "BFC921"
    },
    {
      "name": "Ziggurat",
      "hex": "BFDBE2"
    },
    {
      "name": "Lime",
      "hex": "BFFF00"
    },
    {
      "name": "Thunderbird",
      "hex": "C02B18"
    },
    {
      "name": "Mojo",
      "hex": "C04737"
    },
    {
      "name": "Old Rose",
      "hex": "C08081"
    },
    {
      "name": "Silver",
      "hex": "C0C0C0"
    },
    {
      "name": "Pale Leaf",
      "hex": "C0D3B9"
    },
    {
      "name": "Pixie Green",
      "hex": "C0D8B6"
    },
    {
      "name": "Tia Maria",
      "hex": "C1440E"
    },
    {
      "name": "Fuchsia Pink",
      "hex": "C154C1"
    },
    {
      "name": "Buddha Gold",
      "hex": "C1A004"
    },
    {
      "name": "Bison Hide",
      "hex": "C1B7A4"
    },
    {
      "name": "Tea",
      "hex": "C1BAB0"
    },
    {
      "name": "Gray Suit",
      "hex": "C1BECD"
    },
    {
      "name": "Sprout",
      "hex": "C1D7B0"
    },
    {
      "name": "Sulu",
      "hex": "C1F07C"
    },
    {
      "name": "Indochine",
      "hex": "C26B03"
    },
    {
      "name": "Twine",
      "hex": "C2955D"
    },
    {
      "name": "Cotton Seed",
      "hex": "C2BDB6"
    },
    {
      "name": "Pumice",
      "hex": "C2CAC4"
    },
    {
      "name": "Jagged Ice",
      "hex": "C2E8E5"
    },
    {
      "name": "Maroon Flush",
      "hex": "C32148"
    },
    {
      "name": "Indian Khaki",
      "hex": "C3B091"
    },
    {
      "name": "Pale Slate",
      "hex": "C3BFC1"
    },
    {
      "name": "Gray Nickel",
      "hex": "C3C3BD"
    },
    {
      "name": "Periwinkle Gray",
      "hex": "C3CDE6"
    },
    {
      "name": "Tiara",
      "hex": "C3D1D1"
    },
    {
      "name": "Tropical Blue",
      "hex": "C3DDF9"
    },
    {
      "name": "Cardinal",
      "hex": "C41E3A"
    },
    {
      "name": "Fuzzy Wuzzy Brown",
      "hex": "C45655"
    },
    {
      "name": "Orange Roughy",
      "hex": "C45719"
    },
    {
      "name": "Mist Gray",
      "hex": "C4C4BC"
    },
    {
      "name": "Coriander",
      "hex": "C4D0B0"
    },
    {
      "name": "Mint Tulip",
      "hex": "C4F4EB"
    },
    {
      "name": "Mulberry",
      "hex": "C54B8C"
    },
    {
      "name": "Nugget",
      "hex": "C59922"
    },
    {
      "name": "Tussock",
      "hex": "C5994B"
    },
    {
      "name": "Sea Mist",
      "hex": "C5DBCA"
    },
    {
      "name": "Yellow Green",
      "hex": "C5E17A"
    },
    {
      "name": "Brick Red",
      "hex": "C62D42"
    },
    {
      "name": "Contessa",
      "hex": "C6726B"
    },
    {
      "name": "Oriental Pink",
      "hex": "C69191"
    },
    {
      "name": "Roti",
      "hex": "C6A84B"
    },
    {
      "name": "Ash",
      "hex": "C6C3B5"
    },
    {
      "name": "Kangaroo",
      "hex": "C6C8BD"
    },
    {
      "name": "Las Palmas",
      "hex": "C6E610"
    },
    {
      "name": "Monza",
      "hex": "C7031E"
    },
    {
      "name": "Red Violet",
      "hex": "C71585"
    },
    {
      "name": "Coral Reef",
      "hex": "C7BCA2"
    },
    {
      "name": "Melrose",
      "hex": "C7C1FF"
    },
    {
      "name": "Cloud",
      "hex": "C7C4BF"
    },
    {
      "name": "Ghost",
      "hex": "C7C9D5"
    },
    {
      "name": "Pine Glade",
      "hex": "C7CD90"
    },
    {
      "name": "Botticelli",
      "hex": "C7DDE5"
    },
    {
      "name": "Antique Brass",
      "hex": "C88A65"
    },
    {
      "name": "Lilac",
      "hex": "C8A2C8"
    },
    {
      "name": "Hokey Pokey",
      "hex": "C8A528"
    },
    {
      "name": "Lily",
      "hex": "C8AABF"
    },
    {
      "name": "Laser",
      "hex": "C8B568"
    },
    {
      "name": "Edgewater",
      "hex": "C8E3D7"
    },
    {
      "name": "Piper",
      "hex": "C96323"
    },
    {
      "name": "Pizza",
      "hex": "C99415"
    },
    {
      "name": "Light Wisteria",
      "hex": "C9A0DC"
    },
    {
      "name": "Rodeo Dust",
      "hex": "C9B29B"
    },
    {
      "name": "Sundance",
      "hex": "C9B35B"
    },
    {
      "name": "Earls Green",
      "hex": "C9B93B"
    },
    {
      "name": "Silver Rust",
      "hex": "C9C0BB"
    },
    {
      "name": "Conch",
      "hex": "C9D9D2"
    },
    {
      "name": "Reef",
      "hex": "C9FFA2"
    },
    {
      "name": "Aero Blue",
      "hex": "C9FFE5"
    },
    {
      "name": "Flush Mahogany",
      "hex": "CA3435"
    },
    {
      "name": "Turmeric",
      "hex": "CABB48"
    },
    {
      "name": "Paris White",
      "hex": "CADCD4"
    },
    {
      "name": "Bitter Lemon",
      "hex": "CAE00D"
    },
    {
      "name": "Skeptic",
      "hex": "CAE6DA"
    },
    {
      "name": "Viola",
      "hex": "CB8FA9"
    },
    {
      "name": "Foggy Gray",
      "hex": "CBCAB6"
    },
    {
      "name": "Green Mist",
      "hex": "CBD3B0"
    },
    {
      "name": "Nebula",
      "hex": "CBDBD6"
    },
    {
      "name": "Persian Red",
      "hex": "CC3333"
    },
    {
      "name": "Burnt Orange",
      "hex": "CC5500"
    },
    {
      "name": "Ochre",
      "hex": "CC7722"
    },
    {
      "name": "Puce",
      "hex": "CC8899"
    },
    {
      "name": "Thistle Green",
      "hex": "CCCAA8"
    },
    {
      "name": "Periwinkle",
      "hex": "CCCCFF"
    },
    {
      "name": "Electric Lime",
      "hex": "CCFF00"
    },
    {
      "name": "Tenn",
      "hex": "CD5700"
    },
    {
      "name": "Chestnut Rose",
      "hex": "CD5C5C"
    },
    {
      "name": "Brandy Punch",
      "hex": "CD8429"
    },
    {
      "name": "Onahau",
      "hex": "CDF4FF"
    },
    {
      "name": "Sorrell Brown",
      "hex": "CEB98F"
    },
    {
      "name": "Cold Turkey",
      "hex": "CEBABA"
    },
    {
      "name": "Yuma",
      "hex": "CEC291"
    },
    {
      "name": "Chino",
      "hex": "CEC7A7"
    },
    {
      "name": "Eunry",
      "hex": "CFA39D"
    },
    {
      "name": "Old Gold",
      "hex": "CFB53B"
    },
    {
      "name": "Tasman",
      "hex": "CFDCCF"
    },
    {
      "name": "Surf Crest",
      "hex": "CFE5D2"
    },
    {
      "name": "Humming Bird",
      "hex": "CFF9F3"
    },
    {
      "name": "Scandal",
      "hex": "CFFAF4"
    },
    {
      "name": "Red Stage",
      "hex": "D05F04"
    },
    {
      "name": "Hopbush",
      "hex": "D06DA1"
    },
    {
      "name": "Meteor",
      "hex": "D07D12"
    },
    {
      "name": "Perfume",
      "hex": "D0BEF8"
    },
    {
      "name": "Prelude",
      "hex": "D0C0E5"
    },
    {
      "name": "Tea Green",
      "hex": "D0F0C0"
    },
    {
      "name": "Geebung",
      "hex": "D18F1B"
    },
    {
      "name": "Vanilla",
      "hex": "D1BEA8"
    },
    {
      "name": "Soft Amber",
      "hex": "D1C6B4"
    },
    {
      "name": "Celeste",
      "hex": "D1D2CA"
    },
    {
      "name": "Mischka",
      "hex": "D1D2DD"
    },
    {
      "name": "Pear",
      "hex": "D1E231"
    },
    {
      "name": "Hot Cinnamon",
      "hex": "D2691E"
    },
    {
      "name": "Raw Sienna",
      "hex": "D27D46"
    },
    {
      "name": "Careys Pink",
      "hex": "D29EAA"
    },
    {
      "name": "Tan",
      "hex": "D2B48C"
    },
    {
      "name": "Deco",
      "hex": "D2DA97"
    },
    {
      "name": "Blue Romance",
      "hex": "D2F6DE"
    },
    {
      "name": "Gossip",
      "hex": "D2F8B0"
    },
    {
      "name": "Sisal",
      "hex": "D3CBBA"
    },
    {
      "name": "Swirl",
      "hex": "D3CDC5"
    },
    {
      "name": "Charm",
      "hex": "D47494"
    },
    {
      "name": "Clam Shell",
      "hex": "D4B6AF"
    },
    {
      "name": "Straw",
      "hex": "D4BF8D"
    },
    {
      "name": "Akaroa",
      "hex": "D4C4A8"
    },
    {
      "name": "Bird Flower",
      "hex": "D4CD16"
    },
    {
      "name": "Iron",
      "hex": "D4D7D9"
    },
    {
      "name": "Geyser",
      "hex": "D4DFE2"
    },
    {
      "name": "Hawkes Blue",
      "hex": "D4E2FC"
    },
    {
      "name": "Grenadier",
      "hex": "D54600"
    },
    {
      "name": "Can Can",
      "hex": "D591A4"
    },
    {
      "name": "Whiskey",
      "hex": "D59A6F"
    },
    {
      "name": "Winter Hazel",
      "hex": "D5D195"
    },
    {
      "name": "Granny Apple",
      "hex": "D5F6E3"
    },
    {
      "name": "My Pink",
      "hex": "D69188"
    },
    {
      "name": "Tacha",
      "hex": "D6C562"
    },
    {
      "name": "Moon Raker",
      "hex": "D6CEF6"
    },
    {
      "name": "Quill Gray",
      "hex": "D6D6D1"
    },
    {
      "name": "Snowy Mint",
      "hex": "D6FFDB"
    },
    {
      "name": "New York Pink",
      "hex": "D7837F"
    },
    {
      "name": "Pavlova",
      "hex": "D7C498"
    },
    {
      "name": "Fog",
      "hex": "D7D0FF"
    },
    {
      "name": "Valencia",
      "hex": "D84437"
    },
    {
      "name": "Japonica",
      "hex": "D87C63"
    },
    {
      "name": "Thistle",
      "hex": "D8BFD8"
    },
    {
      "name": "Maverick",
      "hex": "D8C2D5"
    },
    {
      "name": "Foam",
      "hex": "D8FCFA"
    },
    {
      "name": "Cabaret",
      "hex": "D94972"
    },
    {
      "name": "Burning Sand",
      "hex": "D99376"
    },
    {
      "name": "Cameo",
      "hex": "D9B99B"
    },
    {
      "name": "Timberwolf",
      "hex": "D9D6CF"
    },
    {
      "name": "Tana",
      "hex": "D9DCC1"
    },
    {
      "name": "Link Water",
      "hex": "D9E4F5"
    },
    {
      "name": "Mabel",
      "hex": "D9F7FF"
    },
    {
      "name": "Cerise",
      "hex": "DA3287"
    },
    {
      "name": "Flame Pea",
      "hex": "DA5B38"
    },
    {
      "name": "Bamboo",
      "hex": "DA6304"
    },
    {
      "name": "Red Damask",
      "hex": "DA6A41"
    },
    {
      "name": "Orchid",
      "hex": "DA70D6"
    },
    {
      "name": "Copperfield",
      "hex": "DA8A67"
    },
    {
      "name": "Golden Grass",
      "hex": "DAA520"
    },
    {
      "name": "Zanah",
      "hex": "DAECD6"
    },
    {
      "name": "Iceberg",
      "hex": "DAF4F0"
    },
    {
      "name": "Oyster Bay",
      "hex": "DAFAFF"
    },
    {
      "name": "Cranberry",
      "hex": "DB5079"
    },
    {
      "name": "Petite Orchid",
      "hex": "DB9690"
    },
    {
      "name": "Di Serria",
      "hex": "DB995E"
    },
    {
      "name": "Alto",
      "hex": "DBDBDB"
    },
    {
      "name": "Frosted Mint",
      "hex": "DBFFF8"
    },
    {
      "name": "Crimson",
      "hex": "DC143C"
    },
    {
      "name": "Punch",
      "hex": "DC4333"
    },
    {
      "name": "Galliano",
      "hex": "DCB20C"
    },
    {
      "name": "Blossom",
      "hex": "DCB4BC"
    },
    {
      "name": "Wattle",
      "hex": "DCD747"
    },
    {
      "name": "Westar",
      "hex": "DCD9D2"
    },
    {
      "name": "Moon Mist",
      "hex": "DCDDCC"
    },
    {
      "name": "Caper",
      "hex": "DCEDB4"
    },
    {
      "name": "Swans Down",
      "hex": "DCF0EA"
    },
    {
      "name": "Swiss Coffee",
      "hex": "DDD6D5"
    },
    {
      "name": "White Ice",
      "hex": "DDF9F1"
    },
    {
      "name": "Cerise Red",
      "hex": "DE3163"
    },
    {
      "name": "Roman",
      "hex": "DE6360"
    },
    {
      "name": "Tumbleweed",
      "hex": "DEA681"
    },
    {
      "name": "Gold Tips",
      "hex": "DEBA13"
    },
    {
      "name": "Brandy",
      "hex": "DEC196"
    },
    {
      "name": "Wafer",
      "hex": "DECBC6"
    },
    {
      "name": "Sapling",
      "hex": "DED4A4"
    },
    {
      "name": "Barberry",
      "hex": "DED717"
    },
    {
      "name": "Beryl Green",
      "hex": "DEE5C0"
    },
    {
      "name": "Pattens Blue",
      "hex": "DEF5FF"
    },
    {
      "name": "Heliotrope",
      "hex": "DF73FF"
    },
    {
      "name": "Apache",
      "hex": "DFBE6F"
    },
    {
      "name": "Chenin",
      "hex": "DFCD6F"
    },
    {
      "name": "Lola",
      "hex": "DFCFDB"
    },
    {
      "name": "Willow Brook",
      "hex": "DFECDA"
    },
    {
      "name": "Chartreuse Yellow",
      "hex": "DFFF00"
    },
    {
      "name": "Mauve",
      "hex": "E0B0FF"
    },
    {
      "name": "Anzac",
      "hex": "E0B646"
    },
    {
      "name": "Harvest Gold",
      "hex": "E0B974"
    },
    {
      "name": "Calico",
      "hex": "E0C095"
    },
    {
      "name": "Baby Blue",
      "hex": "E0FFFF"
    },
    {
      "name": "Sunglo",
      "hex": "E16865"
    },
    {
      "name": "Equator",
      "hex": "E1BC64"
    },
    {
      "name": "Pink Flare",
      "hex": "E1C0C8"
    },
    {
      "name": "Periglacial Blue",
      "hex": "E1E6D6"
    },
    {
      "name": "Kidnapper",
      "hex": "E1EAD4"
    },
    {
      "name": "Tara",
      "hex": "E1F6E8"
    },
    {
      "name": "Mandy",
      "hex": "E25465"
    },
    {
      "name": "Terracotta",
      "hex": "E2725B"
    },
    {
      "name": "Golden Bell",
      "hex": "E28913"
    },
    {
      "name": "Shocking",
      "hex": "E292C0"
    },
    {
      "name": "Dixie",
      "hex": "E29418"
    },
    {
      "name": "Light Orchid",
      "hex": "E29CD2"
    },
    {
      "name": "Snuff",
      "hex": "E2D8ED"
    },
    {
      "name": "Mystic",
      "hex": "E2EBED"
    },
    {
      "name": "Apple Green",
      "hex": "E2F3EC"
    },
    {
      "name": "Razzmatazz",
      "hex": "E30B5C"
    },
    {
      "name": "Alizarin Crimson",
      "hex": "E32636"
    },
    {
      "name": "Cinnabar",
      "hex": "E34234"
    },
    {
      "name": "Cavern Pink",
      "hex": "E3BEBE"
    },
    {
      "name": "Peppermint",
      "hex": "E3F5E1"
    },
    {
      "name": "Mindaro",
      "hex": "E3F988"
    },
    {
      "name": "Deep Blush",
      "hex": "E47698"
    },
    {
      "name": "Gamboge",
      "hex": "E49B0F"
    },
    {
      "name": "Melanie",
      "hex": "E4C2D5"
    },
    {
      "name": "Twilight",
      "hex": "E4CFDE"
    },
    {
      "name": "Bone",
      "hex": "E4D1C0"
    },
    {
      "name": "Sunflower",
      "hex": "E4D422"
    },
    {
      "name": "Grain Brown",
      "hex": "E4D5B7"
    },
    {
      "name": "Zombie",
      "hex": "E4D69B"
    },
    {
      "name": "Frostee",
      "hex": "E4F6E7"
    },
    {
      "name": "Snow Flurry",
      "hex": "E4FFD1"
    },
    {
      "name": "Amaranth",
      "hex": "E52B50"
    },
    {
      "name": "Zest",
      "hex": "E5841B"
    },
    {
      "name": "Dust Storm",
      "hex": "E5CCC9"
    },
    {
      "name": "Stark White",
      "hex": "E5D7BD"
    },
    {
      "name": "Hampton",
      "hex": "E5D8AF"
    },
    {
      "name": "Bon Jour",
      "hex": "E5E0E1"
    },
    {
      "name": "Mercury",
      "hex": "E5E5E5"
    },
    {
      "name": "Polar",
      "hex": "E5F9F6"
    },
    {
      "name": "Trinidad",
      "hex": "E64E03"
    },
    {
      "name": "Gold Sand",
      "hex": "E6BE8A"
    },
    {
      "name": "Cashmere",
      "hex": "E6BEA5"
    },
    {
      "name": "Double Spanish White",
      "hex": "E6D7B9"
    },
    {
      "name": "Satin Linen",
      "hex": "E6E4D4"
    },
    {
      "name": "Harp",
      "hex": "E6F2EA"
    },
    {
      "name": "Off Green",
      "hex": "E6F8F3"
    },
    {
      "name": "Hint of Green",
      "hex": "E6FFE9"
    },
    {
      "name": "Tranquil",
      "hex": "E6FFFF"
    },
    {
      "name": "Mango Tango",
      "hex": "E77200"
    },
    {
      "name": "Christine",
      "hex": "E7730A"
    },
    {
      "name": "Tonys Pink",
      "hex": "E79F8C"
    },
    {
      "name": "Kobi",
      "hex": "E79FC4"
    },
    {
      "name": "Rose Fog",
      "hex": "E7BCB4"
    },
    {
      "name": "Corn",
      "hex": "E7BF05"
    },
    {
      "name": "Putty",
      "hex": "E7CD8C"
    },
    {
      "name": "Gray Nurse",
      "hex": "E7ECE6"
    },
    {
      "name": "Lily White",
      "hex": "E7F8FF"
    },
    {
      "name": "Bubbles",
      "hex": "E7FEFF"
    },
    {
      "name": "Fire Bush",
      "hex": "E89928"
    },
    {
      "name": "Shilo",
      "hex": "E8B9B3"
    },
    {
      "name": "Pearl Bush",
      "hex": "E8E0D5"
    },
    {
      "name": "Green White",
      "hex": "E8EBE0"
    },
    {
      "name": "Chrome White",
      "hex": "E8F1D4"
    },
    {
      "name": "Gin",
      "hex": "E8F2EB"
    },
    {
      "name": "Aqua Squeeze",
      "hex": "E8F5F2"
    },
    {
      "name": "Clementine",
      "hex": "E96E00"
    },
    {
      "name": "Burnt Sienna",
      "hex": "E97451"
    },
    {
      "name": "Tahiti Gold",
      "hex": "E97C07"
    },
    {
      "name": "Oyster Pink",
      "hex": "E9CECD"
    },
    {
      "name": "Confetti",
      "hex": "E9D75A"
    },
    {
      "name": "Ebb",
      "hex": "E9E3E3"
    },
    {
      "name": "Ottoman",
      "hex": "E9F8ED"
    },
    {
      "name": "Clear Day",
      "hex": "E9FFFD"
    },
    {
      "name": "Carissma",
      "hex": "EA88A8"
    },
    {
      "name": "Porsche",
      "hex": "EAAE69"
    },
    {
      "name": "Tulip Tree",
      "hex": "EAB33B"
    },
    {
      "name": "Rob Roy",
      "hex": "EAC674"
    },
    {
      "name": "Raffia",
      "hex": "EADAB8"
    },
    {
      "name": "White Rock",
      "hex": "EAE8D4"
    },
    {
      "name": "Panache",
      "hex": "EAF6EE"
    },
    {
      "name": "Solitude",
      "hex": "EAF6FF"
    },
    {
      "name": "Aqua Spring",
      "hex": "EAF9F5"
    },
    {
      "name": "Dew",
      "hex": "EAFFFE"
    },
    {
      "name": "Apricot",
      "hex": "EB9373"
    },
    {
      "name": "Zinnwaldite",
      "hex": "EBC2AF"
    },
    {
      "name": "Fuel Yellow",
      "hex": "ECA927"
    },
    {
      "name": "Ronchi",
      "hex": "ECC54E"
    },
    {
      "name": "French Lilac",
      "hex": "ECC7EE"
    },
    {
      "name": "Just Right",
      "hex": "ECCDB9"
    },
    {
      "name": "Wild Rice",
      "hex": "ECE090"
    },
    {
      "name": "Fall Green",
      "hex": "ECEBBD"
    },
    {
      "name": "Aths Special",
      "hex": "ECEBCE"
    },
    {
      "name": "Starship",
      "hex": "ECF245"
    },
    {
      "name": "Red Ribbon",
      "hex": "ED0A3F"
    },
    {
      "name": "Tango",
      "hex": "ED7A1C"
    },
    {
      "name": "Carrot Orange",
      "hex": "ED9121"
    },
    {
      "name": "Sea Pink",
      "hex": "ED989E"
    },
    {
      "name": "Tacao",
      "hex": "EDB381"
    },
    {
      "name": "Desert Sand",
      "hex": "EDC9AF"
    },
    {
      "name": "Pancho",
      "hex": "EDCDAB"
    },
    {
      "name": "Chamois",
      "hex": "EDDCB1"
    },
    {
      "name": "Primrose",
      "hex": "EDEA99"
    },
    {
      "name": "Frost",
      "hex": "EDF5DD"
    },
    {
      "name": "Aqua Haze",
      "hex": "EDF5F5"
    },
    {
      "name": "Zumthor",
      "hex": "EDF6FF"
    },
    {
      "name": "Narvik",
      "hex": "EDF9F1"
    },
    {
      "name": "Honeysuckle",
      "hex": "EDFC84"
    },
    {
      "name": "Lavender Magenta",
      "hex": "EE82EE"
    },
    {
      "name": "Beauty Bush",
      "hex": "EEC1BE"
    },
    {
      "name": "Chalky",
      "hex": "EED794"
    },
    {
      "name": "Almond",
      "hex": "EED9C4"
    },
    {
      "name": "Flax",
      "hex": "EEDC82"
    },
    {
      "name": "Bizarre",
      "hex": "EEDEDA"
    },
    {
      "name": "Double Colonial White",
      "hex": "EEE3AD"
    },
    {
      "name": "Cararra",
      "hex": "EEEEE8"
    },
    {
      "name": "Manz",
      "hex": "EEEF78"
    },
    {
      "name": "Tahuna Sands",
      "hex": "EEF0C8"
    },
    {
      "name": "Athens Gray",
      "hex": "EEF0F3"
    },
    {
      "name": "Tusk",
      "hex": "EEF3C3"
    },
    {
      "name": "Loafer",
      "hex": "EEF4DE"
    },
    {
      "name": "Catskill White",
      "hex": "EEF6F7"
    },
    {
      "name": "Twilight Blue",
      "hex": "EEFDFF"
    },
    {
      "name": "Jonquil",
      "hex": "EEFF9A"
    },
    {
      "name": "Rice Flower",
      "hex": "EEFFE2"
    },
    {
      "name": "Jaffa",
      "hex": "EF863F"
    },
    {
      "name": "Gallery",
      "hex": "EFEFEF"
    },
    {
      "name": "Porcelain",
      "hex": "EFF2F3"
    },
    {
      "name": "Mauvelous",
      "hex": "F091A9"
    },
    {
      "name": "Golden Dream",
      "hex": "F0D52D"
    },
    {
      "name": "Golden Sand",
      "hex": "F0DB7D"
    },
    {
      "name": "Buff",
      "hex": "F0DC82"
    },
    {
      "name": "Prim",
      "hex": "F0E2EC"
    },
    {
      "name": "Khaki",
      "hex": "F0E68C"
    },
    {
      "name": "Selago",
      "hex": "F0EEFD"
    },
    {
      "name": "Titan White",
      "hex": "F0EEFF"
    },
    {
      "name": "Alice Blue",
      "hex": "F0F8FF"
    },
    {
      "name": "Feta",
      "hex": "F0FCEA"
    },
    {
      "name": "Gold Drop",
      "hex": "F18200"
    },
    {
      "name": "Wewak",
      "hex": "F19BAB"
    },
    {
      "name": "Sahara Sand",
      "hex": "F1E788"
    },
    {
      "name": "Parchment",
      "hex": "F1E9D2"
    },
    {
      "name": "Blue Chalk",
      "hex": "F1E9FF"
    },
    {
      "name": "Mint Julep",
      "hex": "F1EEC1"
    },
    {
      "name": "Seashell",
      "hex": "F1F1F1"
    },
    {
      "name": "Saltpan",
      "hex": "F1F7F2"
    },
    {
      "name": "Tidal",
      "hex": "F1FFAD"
    },
    {
      "name": "Chiffon",
      "hex": "F1FFC8"
    },
    {
      "name": "Flamingo",
      "hex": "F2552A"
    },
    {
      "name": "Tangerine",
      "hex": "F28500"
    },
    {
      "name": "Mandys Pink",
      "hex": "F2C3B2"
    },
    {
      "name": "Concrete",
      "hex": "F2F2F2"
    },
    {
      "name": "Black Squeeze",
      "hex": "F2FAFA"
    },
    {
      "name": "Pomegranate",
      "hex": "F34723"
    },
    {
      "name": "Buttercup",
      "hex": "F3AD16"
    },
    {
      "name": "New Orleans",
      "hex": "F3D69D"
    },
    {
      "name": "Vanilla Ice",
      "hex": "F3D9DF"
    },
    {
      "name": "Sidecar",
      "hex": "F3E7BB"
    },
    {
      "name": "Dawn Pink",
      "hex": "F3E9E5"
    },
    {
      "name": "Wheatfield",
      "hex": "F3EDCF"
    },
    {
      "name": "Canary",
      "hex": "F3FB62"
    },
    {
      "name": "Orinoco",
      "hex": "F3FBD4"
    },
    {
      "name": "Carla",
      "hex": "F3FFD8"
    },
    {
      "name": "Hollywood Cerise",
      "hex": "F400A1"
    },
    {
      "name": "Sandy brown",
      "hex": "F4A460"
    },
    {
      "name": "Saffron",
      "hex": "F4C430"
    },
    {
      "name": "Ripe Lemon",
      "hex": "F4D81C"
    },
    {
      "name": "Janna",
      "hex": "F4EBD3"
    },
    {
      "name": "Pampas",
      "hex": "F4F2EE"
    },
    {
      "name": "Wild Sand",
      "hex": "F4F4F4"
    },
    {
      "name": "Zircon",
      "hex": "F4F8FF"
    },
    {
      "name": "Froly",
      "hex": "F57584"
    },
    {
      "name": "Cream Can",
      "hex": "F5C85C"
    },
    {
      "name": "Manhattan",
      "hex": "F5C999"
    },
    {
      "name": "Maize",
      "hex": "F5D5A0"
    },
    {
      "name": "Wheat",
      "hex": "F5DEB3"
    },
    {
      "name": "Sandwisp",
      "hex": "F5E7A2"
    },
    {
      "name": "Pot Pourri",
      "hex": "F5E7E2"
    },
    {
      "name": "Albescent White",
      "hex": "F5E9D3"
    },
    {
      "name": "Soft Peach",
      "hex": "F5EDEF"
    },
    {
      "name": "Ecru White",
      "hex": "F5F3E5"
    },
    {
      "name": "Beige",
      "hex": "F5F5DC"
    },
    {
      "name": "Golden Fizz",
      "hex": "F5FB3D"
    },
    {
      "name": "Australian Mint",
      "hex": "F5FFBE"
    },
    {
      "name": "French Rose",
      "hex": "F64A8A"
    },
    {
      "name": "Brilliant Rose",
      "hex": "F653A6"
    },
    {
      "name": "Illusion",
      "hex": "F6A4C9"
    },
    {
      "name": "Merino",
      "hex": "F6F0E6"
    },
    {
      "name": "Black Haze",
      "hex": "F6F7F7"
    },
    {
      "name": "Spring Sun",
      "hex": "F6FFDC"
    },
    {
      "name": "Violet Red",
      "hex": "F7468A"
    },
    {
      "name": "Chilean Fire",
      "hex": "F77703"
    },
    {
      "name": "Persian Pink",
      "hex": "F77FBE"
    },
    {
      "name": "Rajah",
      "hex": "F7B668"
    },
    {
      "name": "Azalea",
      "hex": "F7C8DA"
    },
    {
      "name": "We Peep",
      "hex": "F7DBE6"
    },
    {
      "name": "Quarter Spanish White",
      "hex": "F7F2E1"
    },
    {
      "name": "Whisper",
      "hex": "F7F5FA"
    },
    {
      "name": "Snow Drift",
      "hex": "F7FAF7"
    },
    {
      "name": "Casablanca",
      "hex": "F8B853"
    },
    {
      "name": "Chantilly",
      "hex": "F8C3DF"
    },
    {
      "name": "Cherub",
      "hex": "F8D9E9"
    },
    {
      "name": "Marzipan",
      "hex": "F8DB9D"
    },
    {
      "name": "Energy Yellow",
      "hex": "F8DD5C"
    },
    {
      "name": "Givry",
      "hex": "F8E4BF"
    },
    {
      "name": "White Linen",
      "hex": "F8F0E8"
    },
    {
      "name": "Magnolia",
      "hex": "F8F4FF"
    },
    {
      "name": "Spring Wood",
      "hex": "F8F6F1"
    },
    {
      "name": "Coconut Cream",
      "hex": "F8F7DC"
    },
    {
      "name": "White Lilac",
      "hex": "F8F7FC"
    },
    {
      "name": "Desert Storm",
      "hex": "F8F8F7"
    },
    {
      "name": "Texas",
      "hex": "F8F99C"
    },
    {
      "name": "Corn Field",
      "hex": "F8FACD"
    },
    {
      "name": "Mimosa",
      "hex": "F8FDD3"
    },
    {
      "name": "Carnation",
      "hex": "F95A61"
    },
    {
      "name": "Saffron Mango",
      "hex": "F9BF58"
    },
    {
      "name": "Carousel Pink",
      "hex": "F9E0ED"
    },
    {
      "name": "Dairy Cream",
      "hex": "F9E4BC"
    },
    {
      "name": "Portica",
      "hex": "F9E663"
    },
    {
      "name": "Amour",
      "hex": "F9EAF3"
    },
    {
      "name": "Rum Swizzle",
      "hex": "F9F8E4"
    },
    {
      "name": "Dolly",
      "hex": "F9FF8B"
    },
    {
      "name": "Sugar Cane",
      "hex": "F9FFF6"
    },
    {
      "name": "Ecstasy",
      "hex": "FA7814"
    },
    {
      "name": "Tan Hide",
      "hex": "FA9D5A"
    },
    {
      "name": "Corvette",
      "hex": "FAD3A2"
    },
    {
      "name": "Peach Yellow",
      "hex": "FADFAD"
    },
    {
      "name": "Turbo",
      "hex": "FAE600"
    },
    {
      "name": "Astra",
      "hex": "FAEAB9"
    },
    {
      "name": "Champagne",
      "hex": "FAECCC"
    },
    {
      "name": "Linen",
      "hex": "FAF0E6"
    },
    {
      "name": "Fantasy",
      "hex": "FAF3F0"
    },
    {
      "name": "Citrine White",
      "hex": "FAF7D6"
    },
    {
      "name": "Alabaster",
      "hex": "FAFAFA"
    },
    {
      "name": "Hint of Yellow",
      "hex": "FAFDE4"
    },
    {
      "name": "Milan",
      "hex": "FAFFA4"
    },
    {
      "name": "Brink Pink",
      "hex": "FB607F"
    },
    {
      "name": "Geraldine",
      "hex": "FB8989"
    },
    {
      "name": "Lavender Rose",
      "hex": "FBA0E3"
    },
    {
      "name": "Sea Buckthorn",
      "hex": "FBA129"
    },
    {
      "name": "Sun",
      "hex": "FBAC13"
    },
    {
      "name": "Lavender Pink",
      "hex": "FBAED2"
    },
    {
      "name": "Rose Bud",
      "hex": "FBB2A3"
    },
    {
      "name": "Cupid",
      "hex": "FBBEDA"
    },
    {
      "name": "Classic Rose",
      "hex": "FBCCE7"
    },
    {
      "name": "Apricot Peach",
      "hex": "FBCEB1"
    },
    {
      "name": "Banana Mania",
      "hex": "FBE7B2"
    },
    {
      "name": "Marigold Yellow",
      "hex": "FBE870"
    },
    {
      "name": "Festival",
      "hex": "FBE96C"
    },
    {
      "name": "Sweet Corn",
      "hex": "FBEA8C"
    },
    {
      "name": "Candy Corn",
      "hex": "FBEC5D"
    },
    {
      "name": "Hint of Red",
      "hex": "FBF9F9"
    },
    {
      "name": "Shalimar",
      "hex": "FBFFBA"
    },
    {
      "name": "Shocking Pink",
      "hex": "FC0FC0"
    },
    {
      "name": "Tickle Me Pink",
      "hex": "FC80A5"
    },
    {
      "name": "Tree Poppy",
      "hex": "FC9C1D"
    },
    {
      "name": "Lightning Yellow",
      "hex": "FCC01E"
    },
    {
      "name": "Goldenrod",
      "hex": "FCD667"
    },
    {
      "name": "Candlelight",
      "hex": "FCD917"
    },
    {
      "name": "Cherokee",
      "hex": "FCDA98"
    },
    {
      "name": "Double Pearl Lusta",
      "hex": "FCF4D0"
    },
    {
      "name": "Pearl Lusta",
      "hex": "FCF4DC"
    },
    {
      "name": "Vista White",
      "hex": "FCF8F7"
    },
    {
      "name": "Bianca",
      "hex": "FCFBF3"
    },
    {
      "name": "Moon Glow",
      "hex": "FCFEDA"
    },
    {
      "name": "China Ivory",
      "hex": "FCFFE7"
    },
    {
      "name": "Ceramic",
      "hex": "FCFFF9"
    },
    {
      "name": "Torch Red",
      "hex": "FD0E35"
    },
    {
      "name": "Wild Watermelon",
      "hex": "FD5B78"
    },
    {
      "name": "Crusta",
      "hex": "FD7B33"
    },
    {
      "name": "Sorbus",
      "hex": "FD7C07"
    },
    {
      "name": "Sweet Pink",
      "hex": "FD9FA2"
    },
    {
      "name": "Light Apricot",
      "hex": "FDD5B1"
    },
    {
      "name": "Pig Pink",
      "hex": "FDD7E4"
    },
    {
      "name": "Cinderella",
      "hex": "FDE1DC"
    },
    {
      "name": "Golden Glow",
      "hex": "FDE295"
    },
    {
      "name": "Lemon",
      "hex": "FDE910"
    },
    {
      "name": "Old Lace",
      "hex": "FDF5E6"
    },
    {
      "name": "Half Colonial White",
      "hex": "FDF6D3"
    },
    {
      "name": "Drover",
      "hex": "FDF7AD"
    },
    {
      "name": "Pale Prim",
      "hex": "FDFEB8"
    },
    {
      "name": "Cumulus",
      "hex": "FDFFD5"
    },
    {
      "name": "Persian Rose",
      "hex": "FE28A2"
    },
    {
      "name": "Sunset Orange",
      "hex": "FE4C40"
    },
    {
      "name": "Bittersweet",
      "hex": "FE6F5E"
    },
    {
      "name": "California",
      "hex": "FE9D04"
    },
    {
      "name": "Yellow Sea",
      "hex": "FEA904"
    },
    {
      "name": "Melon",
      "hex": "FEBAAD"
    },
    {
      "name": "Bright Sun",
      "hex": "FED33C"
    },
    {
      "name": "Dandelion",
      "hex": "FED85D"
    },
    {
      "name": "Salomie",
      "hex": "FEDB8D"
    },
    {
      "name": "Cape Honey",
      "hex": "FEE5AC"
    },
    {
      "name": "Remy",
      "hex": "FEEBF3"
    },
    {
      "name": "Oasis",
      "hex": "FEEFCE"
    },
    {
      "name": "Bridesmaid",
      "hex": "FEF0EC"
    },
    {
      "name": "Beeswax",
      "hex": "FEF2C7"
    },
    {
      "name": "Bleach White",
      "hex": "FEF3D8"
    },
    {
      "name": "Pipi",
      "hex": "FEF4CC"
    },
    {
      "name": "Half Spanish White",
      "hex": "FEF4DB"
    },
    {
      "name": "Wisp Pink",
      "hex": "FEF4F8"
    },
    {
      "name": "Provincial Pink",
      "hex": "FEF5F1"
    },
    {
      "name": "Half Dutch White",
      "hex": "FEF7DE"
    },
    {
      "name": "Solitaire",
      "hex": "FEF8E2"
    },
    {
      "name": "White Pointer",
      "hex": "FEF8FF"
    },
    {
      "name": "Off Yellow",
      "hex": "FEF9E3"
    },
    {
      "name": "Orange White",
      "hex": "FEFCED"
    },
    {
      "name": "Red",
      "hex": "FF0000"
    },
    {
      "name": "Rose",
      "hex": "FF007F"
    },
    {
      "name": "Purple Pizzazz",
      "hex": "FF00CC"
    },
    {
      "name": "Magenta / Fuchsia",
      "hex": "FF00FF"
    },
    {
      "name": "Scarlet",
      "hex": "FF2400"
    },
    {
      "name": "Wild Strawberry",
      "hex": "FF3399"
    },
    {
      "name": "Razzle Dazzle Rose",
      "hex": "FF33CC"
    },
    {
      "name": "Radical Red",
      "hex": "FF355E"
    },
    {
      "name": "Red Orange",
      "hex": "FF3F34"
    },
    {
      "name": "Coral Red",
      "hex": "FF4040"
    },
    {
      "name": "Vermilion",
      "hex": "FF4D00"
    },
    {
      "name": "International Orange",
      "hex": "FF4F00"
    },
    {
      "name": "Outrageous Orange",
      "hex": "FF6037"
    },
    {
      "name": "Blaze Orange",
      "hex": "FF6600"
    },
    {
      "name": "Pink Flamingo",
      "hex": "FF66FF"
    },
    {
      "name": "Orange",
      "hex": "FF681F"
    },
    {
      "name": "Hot Pink",
      "hex": "FF69B4"
    },
    {
      "name": "Persimmon",
      "hex": "FF6B53"
    },
    {
      "name": "Blush Pink",
      "hex": "FF6FFF"
    },
    {
      "name": "Burning Orange",
      "hex": "FF7034"
    },
    {
      "name": "Pumpkin",
      "hex": "FF7518"
    },
    {
      "name": "Flamenco",
      "hex": "FF7D07"
    },
    {
      "name": "Flush Orange",
      "hex": "FF7F00"
    },
    {
      "name": "Coral",
      "hex": "FF7F50"
    },
    {
      "name": "Salmon",
      "hex": "FF8C69"
    },
    {
      "name": "Pizazz",
      "hex": "FF9000"
    },
    {
      "name": "West Side",
      "hex": "FF910F"
    },
    {
      "name": "Pink Salmon",
      "hex": "FF91A4"
    },
    {
      "name": "Neon Carrot",
      "hex": "FF9933"
    },
    {
      "name": "Atomic Tangerine",
      "hex": "FF9966"
    },
    {
      "name": "Vivid Tangerine",
      "hex": "FF9980"
    },
    {
      "name": "Sunshade",
      "hex": "FF9E2C"
    },
    {
      "name": "Orange Peel",
      "hex": "FFA000"
    },
    {
      "name": "Mona Lisa",
      "hex": "FFA194"
    },
    {
      "name": "Web Orange",
      "hex": "FFA500"
    },
    {
      "name": "Carnation Pink",
      "hex": "FFA6C9"
    },
    {
      "name": "Hit Pink",
      "hex": "FFAB81"
    },
    {
      "name": "Yellow Orange",
      "hex": "FFAE42"
    },
    {
      "name": "Cornflower Lilac",
      "hex": "FFB0AC"
    },
    {
      "name": "Sundown",
      "hex": "FFB1B3"
    },
    {
      "name": "My Sin",
      "hex": "FFB31F"
    },
    {
      "name": "Texas Rose",
      "hex": "FFB555"
    },
    {
      "name": "Cotton Candy",
      "hex": "FFB7D5"
    },
    {
      "name": "Macaroni and Cheese",
      "hex": "FFB97B"
    },
    {
      "name": "Selective Yellow",
      "hex": "FFBA00"
    },
    {
      "name": "Koromiko",
      "hex": "FFBD5F"
    },
    {
      "name": "Amber",
      "hex": "FFBF00"
    },
    {
      "name": "Wax Flower",
      "hex": "FFC0A8"
    },
    {
      "name": "Pink",
      "hex": "FFC0CB"
    },
    {
      "name": "Your Pink",
      "hex": "FFC3C0"
    },
    {
      "name": "Supernova",
      "hex": "FFC901"
    },
    {
      "name": "Flesh",
      "hex": "FFCBA4"
    },
    {
      "name": "Sunglow",
      "hex": "FFCC33"
    },
    {
      "name": "Golden Tainoi",
      "hex": "FFCC5C"
    },
    {
      "name": "Peach Orange",
      "hex": "FFCC99"
    },
    {
      "name": "Chardonnay",
      "hex": "FFCD8C"
    },
    {
      "name": "Pastel Pink",
      "hex": "FFD1DC"
    },
    {
      "name": "Romantic",
      "hex": "FFD2B7"
    },
    {
      "name": "Grandis",
      "hex": "FFD38C"
    },
    {
      "name": "Gold",
      "hex": "FFD700"
    },
    {
      "name": "School bus Yellow",
      "hex": "FFD800"
    },
    {
      "name": "Cosmos",
      "hex": "FFD8D9"
    },
    {
      "name": "Mustard",
      "hex": "FFDB58"
    },
    {
      "name": "Peach Schnapps",
      "hex": "FFDCD6"
    },
    {
      "name": "Caramel",
      "hex": "FFDDAF"
    },
    {
      "name": "Tuft Bush",
      "hex": "FFDDCD"
    },
    {
      "name": "Watusi",
      "hex": "FFDDCF"
    },
    {
      "name": "Pink Lace",
      "hex": "FFDDF4"
    },
    {
      "name": "Navajo White",
      "hex": "FFDEAD"
    },
    {
      "name": "Frangipani",
      "hex": "FFDEB3"
    },
    {
      "name": "Pippin",
      "hex": "FFE1DF"
    },
    {
      "name": "Pale Rose",
      "hex": "FFE1F2"
    },
    {
      "name": "Negroni",
      "hex": "FFE2C5"
    },
    {
      "name": "Cream Brulee",
      "hex": "FFE5A0"
    },
    {
      "name": "Peach",
      "hex": "FFE5B4"
    },
    {
      "name": "Tequila",
      "hex": "FFE6C7"
    },
    {
      "name": "Kournikova",
      "hex": "FFE772"
    },
    {
      "name": "Sandy Beach",
      "hex": "FFEAC8"
    },
    {
      "name": "Karry",
      "hex": "FFEAD4"
    },
    {
      "name": "Broom",
      "hex": "FFEC13"
    },
    {
      "name": "Colonial White",
      "hex": "FFEDBC"
    },
    {
      "name": "Derby",
      "hex": "FFEED8"
    },
    {
      "name": "Vis Vis",
      "hex": "FFEFA1"
    },
    {
      "name": "Egg White",
      "hex": "FFEFC1"
    },
    {
      "name": "Papaya Whip",
      "hex": "FFEFD5"
    },
    {
      "name": "Fair Pink",
      "hex": "FFEFEC"
    },
    {
      "name": "Peach Cream",
      "hex": "FFF0DB"
    },
    {
      "name": "Lavender blush",
      "hex": "FFF0F5"
    },
    {
      "name": "Gorse",
      "hex": "FFF14F"
    },
    {
      "name": "Buttermilk",
      "hex": "FFF1B5"
    },
    {
      "name": "Pink Lady",
      "hex": "FFF1D8"
    },
    {
      "name": "Forget Me Not",
      "hex": "FFF1EE"
    },
    {
      "name": "Tutu",
      "hex": "FFF1F9"
    },
    {
      "name": "Picasso",
      "hex": "FFF39D"
    },
    {
      "name": "Chardon",
      "hex": "FFF3F1"
    },
    {
      "name": "Paris Daisy",
      "hex": "FFF46E"
    },
    {
      "name": "Barley White",
      "hex": "FFF4CE"
    },
    {
      "name": "Egg Sour",
      "hex": "FFF4DD"
    },
    {
      "name": "Sazerac",
      "hex": "FFF4E0"
    },
    {
      "name": "Serenade",
      "hex": "FFF4E8"
    },
    {
      "name": "Chablis",
      "hex": "FFF4F3"
    },
    {
      "name": "Seashell Peach",
      "hex": "FFF5EE"
    },
    {
      "name": "Sauvignon",
      "hex": "FFF5F3"
    },
    {
      "name": "Milk Punch",
      "hex": "FFF6D4"
    },
    {
      "name": "Varden",
      "hex": "FFF6DF"
    },
    {
      "name": "Rose White",
      "hex": "FFF6F5"
    },
    {
      "name": "Baja White",
      "hex": "FFF8D1"
    },
    {
      "name": "Gin Fizz",
      "hex": "FFF9E2"
    },
    {
      "name": "Early Dawn",
      "hex": "FFF9E6"
    },
    {
      "name": "Lemon Chiffon",
      "hex": "FFFACD"
    },
    {
      "name": "Bridal Heath",
      "hex": "FFFAF4"
    },
    {
      "name": "Scotch Mist",
      "hex": "FFFBDC"
    },
    {
      "name": "Soapstone",
      "hex": "FFFBF9"
    },
    {
      "name": "Witch Haze",
      "hex": "FFFC99"
    },
    {
      "name": "Buttery White",
      "hex": "FFFCEA"
    },
    {
      "name": "Island Spice",
      "hex": "FFFCEE"
    },
    {
      "name": "Cream",
      "hex": "FFFDD0"
    },
    {
      "name": "Chilean Heath",
      "hex": "FFFDE6"
    },
    {
      "name": "Travertine",
      "hex": "FFFDE8"
    },
    {
      "name": "Orchid White",
      "hex": "FFFDF3"
    },
    {
      "name": "Quarter Pearl Lusta",
      "hex": "FFFDF4"
    },
    {
      "name": "Half and Half",
      "hex": "FFFEE1"
    },
    {
      "name": "Apricot White",
      "hex": "FFFEEC"
    },
    {
      "name": "Rice Cake",
      "hex": "FFFEF0"
    },
    {
      "name": "Black White",
      "hex": "FFFEF6"
    },
    {
      "name": "Romance",
      "hex": "FFFEFD"
    },
    {
      "name": "Yellow",
      "hex": "FFFF00"
    },
    {
      "name": "Laser Lemon",
      "hex": "FFFF66"
    },
    {
      "name": "Pale Canary",
      "hex": "FFFF99"
    },
    {
      "name": "Portafino",
      "hex": "FFFFB4"
    },
    {
      "name": "Ivory",
      "hex": "FFFFF0"
    },
    {
      "name": "White",
      "hex": "FFFFFF"
    }
  ]
  
  },{}],7:[function(require,module,exports){
  module.exports = [
    {
        "name": "egret",
        "hex": "#f3ece0"
    },
    {
        "name": "snow-white",
        "hex": "#f2f0eb"
    },
    {
        "name": "bright-white",
        "hex": "#f4f5f0"
    },
    {
        "name": "cloud-dancer",
        "hex": "#f0eee9"
    },
    {
        "name": "gardenia",
        "hex": "#f1e8df"
    },
    {
        "name": "marshmallow",
        "hex": "#f0eee4"
    },
    {
        "name": "blanc-de-blanc",
        "hex": "#e7e9e7"
    },
    {
        "name": "pristine",
        "hex": "#f2e8da"
    },
    {
        "name": "whisper-white",
        "hex": "#ede6db"
    },
    {
        "name": "white-asparagus",
        "hex": "#e1dbc8"
    },
    {
        "name": "birch",
        "hex": "#ddd5c7"
    },
    {
        "name": "turtledove",
        "hex": "#ded7c8"
    },
    {
        "name": "bone-white",
        "hex": "#d7d0c0"
    },
    {
        "name": "silver-birch",
        "hex": "#d2cfc4"
    },
    {
        "name": "vanilla-ice",
        "hex": "#f0eada"
    },
    {
        "name": "papyrus",
        "hex": "#f5edd6"
    },
    {
        "name": "antique-white",
        "hex": "#ede3d2"
    },
    {
        "name": "winter-white",
        "hex": "#f5ecd2"
    },
    {
        "name": "cloud-cream",
        "hex": "#e6ddc5"
    },
    {
        "name": "angora",
        "hex": "#dfd1bb"
    },
    {
        "name": "seedpearl",
        "hex": "#e6dac4"
    },
    {
        "name": "vanilla-custard",
        "hex": "#f3e0be"
    },
    {
        "name": "almond-oil",
        "hex": "#f4efc1"
    },
    {
        "name": "alabaster-gleam",
        "hex": "#f0debd"
    },
    {
        "name": "vanilla",
        "hex": "#f4e1c1"
    },
    {
        "name": "rutabaga",
        "hex": "#ecddbe"
    },
    {
        "name": "banana-crepe",
        "hex": "#e7d3ad"
    },
    {
        "name": "italian-straw",
        "hex": "#e7d1a1"
    },
    {
        "name": "whitecap-gray",
        "hex": "#e0d5c6"
    },
    {
        "name": "fog",
        "hex": "#d0c5b1"
    },
    {
        "name": "white-swan",
        "hex": "#e4d7c5"
    },
    {
        "name": "sandshell",
        "hex": "#d8ccbb"
    },
    {
        "name": "tapioca",
        "hex": "#dccdbc"
    },
    {
        "name": "creme-brulee",
        "hex": "#dbccb5"
    },
    {
        "name": "parchment",
        "hex": "#dfd1be"
    },
    {
        "name": "sheer-pink",
        "hex": "#f6e5db"
    },
    {
        "name": "dew",
        "hex": "#eeded1"
    },
    {
        "name": "powder-puff",
        "hex": "#f3e0d6"
    },
    {
        "name": "pearled-ivory",
        "hex": "#f0dfcc"
    },
    {
        "name": "white-smoke",
        "hex": "#eddcc9"
    },
    {
        "name": "ecru",
        "hex": "#f3dfca"
    },
    {
        "name": "navajo",
        "hex": "#efdcc3"
    },
    {
        "name": "almost-mauve",
        "hex": "#e7dcd9"
    },
    {
        "name": "delicacy",
        "hex": "#f5e3e2"
    },
    {
        "name": "petal-pink",
        "hex": "#f2e2e0"
    },
    {
        "name": "bridal-blush",
        "hex": "#eee2dd"
    },
    {
        "name": "cream-pink",
        "hex": "#f6e4d9"
    },
    {
        "name": "angel-wing",
        "hex": "#f3dfd7"
    },
    {
        "name": "pastel-parchment",
        "hex": "#e5d9d3"
    },
    {
        "name": "star-white",
        "hex": "#efefe8"
    },
    {
        "name": "lily-white",
        "hex": "#e2e2da"
    },
    {
        "name": "vaporous-gray",
        "hex": "#dfddd7"
    },
    {
        "name": "summer-shower",
        "hex": "#e5ebe3"
    },
    {
        "name": "ice",
        "hex": "#e0e4d9"
    },
    {
        "name": "frost",
        "hex": "#dde2d6"
    },
    {
        "name": "icicle",
        "hex": "#dadcd0"
    },
    {
        "name": "bit-of-blue",
        "hex": "#e2eaeb"
    },
    {
        "name": "mystic-blue",
        "hex": "#e1e3de"
    },
    {
        "name": "bluewash",
        "hex": "#e2e6e0"
    },
    {
        "name": "spa-blue",
        "hex": "#d3dedf"
    },
    {
        "name": "lightest-sky",
        "hex": "#e4eadf"
    },
    {
        "name": "hint-of-mint",
        "hex": "#d8e8e6"
    },
    {
        "name": "murmur",
        "hex": "#d2d8d2"
    },
    {
        "name": "barely-blue",
        "hex": "#dde0df"
    },
    {
        "name": "blue-blush",
        "hex": "#d6dbd9"
    },
    {
        "name": "zephyr-blue",
        "hex": "#d3d9d1"
    },
    {
        "name": "blue-flower",
        "hex": "#d0d9d4"
    },
    {
        "name": "sprout-green",
        "hex": "#cbd7d2"
    },
    {
        "name": "billowing-sail",
        "hex": "#d8e7e7"
    },
    {
        "name": "hushed-green",
        "hex": "#d8e9e5"
    },
    {
        "name": "lambs-wool",
        "hex": "#e5d0b1"
    },
    {
        "name": "winter-wheat",
        "hex": "#dfc09f"
    },
    {
        "name": "summer-melon",
        "hex": "#ead3ae"
    },
    {
        "name": "chamomile",
        "hex": "#e8d0a7"
    },
    {
        "name": "cornhusk",
        "hex": "#f2d6ae"
    },
    {
        "name": "apricot-gelato",
        "hex": "#f5d7af"
    },
    {
        "name": "biscotti",
        "hex": "#dac7ab"
    },
    {
        "name": "asparagus-green",
        "hex": "#d2cdb4"
    },
    {
        "name": "oyster-white",
        "hex": "#d2caaf"
    },
    {
        "name": "putty",
        "hex": "#d4cab0"
    },
    {
        "name": "moth",
        "hex": "#d2cbaf"
    },
    {
        "name": "wood-ash",
        "hex": "#d7cab0"
    },
    {
        "name": "gravel",
        "hex": "#cbbfa2"
    },
    {
        "name": "pale-khaki",
        "hex": "#bfaf92"
    },
    {
        "name": "light-gray",
        "hex": "#dad8c9"
    },
    {
        "name": "silver-green",
        "hex": "#d7d7c7"
    },
    {
        "name": "pelican",
        "hex": "#c1bcac"
    },
    {
        "name": "overcast",
        "hex": "#c3bdab"
    },
    {
        "name": "tidal-foam",
        "hex": "#bfb9a3"
    },
    {
        "name": "agate-gray",
        "hex": "#b1b09f"
    },
    {
        "name": "alfalfa",
        "hex": "#b7b59f"
    },
    {
        "name": "castle-wall",
        "hex": "#c8c1ab"
    },
    {
        "name": "oyster-gray",
        "hex": "#cbc1ae"
    },
    {
        "name": "cement",
        "hex": "#c4b6a6"
    },
    {
        "name": "spray-green",
        "hex": "#aea692"
    },
    {
        "name": "eucalyptus",
        "hex": "#b1a992"
    },
    {
        "name": "twill",
        "hex": "#a79b82"
    },
    {
        "name": "olive-gray",
        "hex": "#a6997a"
    },
    {
        "name": "chinchilla",
        "hex": "#9c8e7b"
    },
    {
        "name": "seneca-rock",
        "hex": "#9a927f"
    },
    {
        "name": "laurel-oak",
        "hex": "#918c7e"
    },
    {
        "name": "coriander",
        "hex": "#938772"
    },
    {
        "name": "dune",
        "hex": "#998978"
    },
    {
        "name": "lead-gray",
        "hex": "#8a7963"
    },
    {
        "name": "covert-green",
        "hex": "#80765f"
    },
    {
        "name": "oxford-tan",
        "hex": "#b8a99a"
    },
    {
        "name": "plaza-taupe",
        "hex": "#aea393"
    },
    {
        "name": "tuffet",
        "hex": "#a59788"
    },
    {
        "name": "silver-mink",
        "hex": "#9f8d7c"
    },
    {
        "name": "timber-wolf",
        "hex": "#8d8070"
    },
    {
        "name": "taupe-gray",
        "hex": "#8e7c71"
    },
    {
        "name": "pine-bark",
        "hex": "#827064"
    },
    {
        "name": "pumice-stone",
        "hex": "#cac2b9"
    },
    {
        "name": "simply-taupe",
        "hex": "#ad9f93"
    },
    {
        "name": "aluminum",
        "hex": "#9f9586"
    },
    {
        "name": "cobblestone",
        "hex": "#a89a8e"
    },
    {
        "name": "brindle",
        "hex": "#82776b"
    },
    {
        "name": "walnut",
        "hex": "#776a5f"
    },
    {
        "name": "bungee-cord",
        "hex": "#696156"
    },
    {
        "name": "oatmeal",
        "hex": "#cbc3b4"
    },
    {
        "name": "moonbeam",
        "hex": "#cdc6bd"
    },
    {
        "name": "rainy-day",
        "hex": "#cfc8bd"
    },
    {
        "name": "gray-morn",
        "hex": "#cabeb5"
    },
    {
        "name": "peyote",
        "hex": "#c5bbae"
    },
    {
        "name": "feather-gray",
        "hex": "#b8ad9e"
    },
    {
        "name": "goat",
        "hex": "#a89a91"
    },
    {
        "name": "white-sand",
        "hex": "#dbd5d1"
    },
    {
        "name": "silver-gray",
        "hex": "#c1b7b0"
    },
    {
        "name": "chateau-gray",
        "hex": "#bbb1a8"
    },
    {
        "name": "string",
        "hex": "#aa9f96"
    },
    {
        "name": "atmosphere",
        "hex": "#a89c94"
    },
    {
        "name": "moon-rock",
        "hex": "#958b84"
    },
    {
        "name": "fungi",
        "hex": "#8f8177"
    },
    {
        "name": "silver-lining",
        "hex": "#bdb6ab"
    },
    {
        "name": "moonstruck",
        "hex": "#c2beb6"
    },
    {
        "name": "pussywillow-gray",
        "hex": "#aeaca1"
    },
    {
        "name": "london-fog",
        "hex": "#a29e92"
    },
    {
        "name": "rock-ridge",
        "hex": "#918c86"
    },
    {
        "name": "moon-mist",
        "hex": "#80817d"
    },
    {
        "name": "castor-gray",
        "hex": "#646762"
    },
    {
        "name": "glacier-gray",
        "hex": "#c5c6c7"
    },
    {
        "name": "lunar-rock",
        "hex": "#c5c5c5"
    },
    {
        "name": "dawn-blue",
        "hex": "#cacccb"
    },
    {
        "name": "gray-violet",
        "hex": "#bbbcbc"
    },
    {
        "name": "vapor-blue",
        "hex": "#bebdbd"
    },
    {
        "name": "high-rise",
        "hex": "#aeb2b5"
    },
    {
        "name": "limestone",
        "hex": "#989a98"
    },
    {
        "name": "silver-cloud",
        "hex": "#beb7b0"
    },
    {
        "name": "dove",
        "hex": "#b3ada7"
    },
    {
        "name": "flint-gray",
        "hex": "#a09c98"
    },
    {
        "name": "drizzle",
        "hex": "#a09f9c"
    },
    {
        "name": "elephant-skin",
        "hex": "#8f8982"
    },
    {
        "name": "cinder",
        "hex": "#8a7e78"
    },
    {
        "name": "steeple-gray",
        "hex": "#827e7c"
    },
    {
        "name": "metal",
        "hex": "#babfbc"
    },
    {
        "name": "blue-fox",
        "hex": "#b9bcb6"
    },
    {
        "name": "storm-gray",
        "hex": "#b5bab6"
    },
    {
        "name": "pigeon",
        "hex": "#a9afaa"
    },
    {
        "name": "mirage-gray",
        "hex": "#abafae"
    },
    {
        "name": "puritan-gray",
        "hex": "#a8b0ae"
    },
    {
        "name": "wrought-iron",
        "hex": "#999e98"
    },
    {
        "name": "opal-gray",
        "hex": "#a49e9e"
    },
    {
        "name": "wild-dove",
        "hex": "#8b8c89"
    },
    {
        "name": "neutral-gray",
        "hex": "#8e918f"
    },
    {
        "name": "gargoyle",
        "hex": "#686767"
    },
    {
        "name": "smoked-pearl",
        "hex": "#656466"
    },
    {
        "name": "sedona-sage",
        "hex": "#686d6c"
    },
    {
        "name": "gunmetal",
        "hex": "#5c5d5b"
    },
    {
        "name": "wind-chime",
        "hex": "#cac5c2"
    },
    {
        "name": "paloma",
        "hex": "#9f9c99"
    },
    {
        "name": "charcoal-gray",
        "hex": "#6c6868"
    },
    {
        "name": "steel-gray",
        "hex": "#726f70"
    },
    {
        "name": "pewter",
        "hex": "#666564"
    },
    {
        "name": "castlerock",
        "hex": "#5f5e62"
    },
    {
        "name": "nine-iron",
        "hex": "#46434a"
    },
    {
        "name": "ash",
        "hex": "#a09998"
    },
    {
        "name": "cloudburst",
        "hex": "#837f7f"
    },
    {
        "name": "frost-gray",
        "hex": "#848283"
    },
    {
        "name": "excalibur",
        "hex": "#676168"
    },
    {
        "name": "dark-gull-gray",
        "hex": "#625d5d"
    },
    {
        "name": "rabbit",
        "hex": "#5f575c"
    },
    {
        "name": "shale",
        "hex": "#4a3f41"
    },
    {
        "name": "fossil",
        "hex": "#806f63"
    },
    {
        "name": "major-brown",
        "hex": "#5b5149"
    },
    {
        "name": "chocolate-chip",
        "hex": "#685a4e"
    },
    {
        "name": "canteen",
        "hex": "#5e5347"
    },
    {
        "name": "stone-gray",
        "hex": "#685e4f"
    },
    {
        "name": "capers",
        "hex": "#695e4b"
    },
    {
        "name": "beech",
        "hex": "#5b4f3b"
    },
    {
        "name": "tarmac",
        "hex": "#5a5348"
    },
    {
        "name": "wren",
        "hex": "#4a4139"
    },
    {
        "name": "black-olive",
        "hex": "#48413b"
    },
    {
        "name": "beluga",
        "hex": "#4a4843"
    },
    {
        "name": "black-ink",
        "hex": "#44413c"
    },
    {
        "name": "peat",
        "hex": "#3b3a36"
    },
    {
        "name": "jet-set",
        "hex": "#262c2a"
    },
    {
        "name": "iron",
        "hex": "#736460"
    },
    {
        "name": "plum-kitten",
        "hex": "#625b5c"
    },
    {
        "name": "turkish-coffee",
        "hex": "#483f39"
    },
    {
        "name": "black-coffee",
        "hex": "#3b302f"
    },
    {
        "name": "after-dark",
        "hex": "#3c3535"
    },
    {
        "name": "licorice",
        "hex": "#3a3536"
    },
    {
        "name": "raven",
        "hex": "#413e3d"
    },
    {
        "name": "jet-black",
        "hex": "#2d2c2f"
    },
    {
        "name": "phantom",
        "hex": "#39373b"
    },
    {
        "name": "stretch-limo",
        "hex": "#2b2c30"
    },
    {
        "name": "moonless-night",
        "hex": "#2f2d30"
    },
    {
        "name": "caviar",
        "hex": "#292a2d"
    },
    {
        "name": "pirate-black",
        "hex": "#363838"
    },
    {
        "name": "anthracite",
        "hex": "#28282d"
    },
    {
        "name": "vanilla-cream",
        "hex": "#f4d8c6"
    },
    {
        "name": "dawn",
        "hex": "#ebd2b7"
    },
    {
        "name": "gray-sand",
        "hex": "#e5ccaf"
    },
    {
        "name": "autumn-blonde",
        "hex": "#eed0ae"
    },
    {
        "name": "apricot-illusion",
        "hex": "#e2c4a6"
    },
    {
        "name": "mellow-buff",
        "hex": "#d8b998"
    },
    {
        "name": "sheepskin",
        "hex": "#dab58f"
    },
    {
        "name": "almond-buff",
        "hex": "#ccb390"
    },
    {
        "name": "beige",
        "hex": "#d5ba98"
    },
    {
        "name": "sand",
        "hex": "#cca67f"
    },
    {
        "name": "latte",
        "hex": "#c5a582"
    },
    {
        "name": "tan",
        "hex": "#b69574"
    },
    {
        "name": "doe",
        "hex": "#b98e68"
    },
    {
        "name": "indian-tan",
        "hex": "#ad8567"
    },
    {
        "name": "safari",
        "hex": "#baaa91"
    },
    {
        "name": "candied-ginger",
        "hex": "#bfa387"
    },
    {
        "name": "warm-sand",
        "hex": "#c5ae91"
    },
    {
        "name": "cuban-sand",
        "hex": "#c1a68d"
    },
    {
        "name": "nougat",
        "hex": "#b69885"
    },
    {
        "name": "natural",
        "hex": "#aa907d"
    },
    {
        "name": "nomad",
        "hex": "#b49f89"
    },
    {
        "name": "frozen-dew",
        "hex": "#d8cfb2"
    },
    {
        "name": "bleached-sand",
        "hex": "#daccb4"
    },
    {
        "name": "pebble",
        "hex": "#cab698"
    },
    {
        "name": "croissant",
        "hex": "#c4ab86"
    },
    {
        "name": "incense",
        "hex": "#af9a7e"
    },
    {
        "name": "cornstalk",
        "hex": "#a9947a"
    },
    {
        "name": "tannin",
        "hex": "#a68a6d"
    },
    {
        "name": "green-haze",
        "hex": "#cac4a4"
    },
    {
        "name": "mojave-desert",
        "hex": "#c7b595"
    },
    {
        "name": "taos-taupe",
        "hex": "#bfa77f"
    },
    {
        "name": "lark",
        "hex": "#b89b72"
    },
    {
        "name": "kelp",
        "hex": "#988467"
    },
    {
        "name": "antique-bronze",
        "hex": "#907954"
    },
    {
        "name": "dull-gold",
        "hex": "#8a6f48"
    },
    {
        "name": "brown-sugar",
        "hex": "#a17249"
    },
    {
        "name": "chipmunk",
        "hex": "#976f4c"
    },
    {
        "name": "tobacco-brown",
        "hex": "#9a7352"
    },
    {
        "name": "bison",
        "hex": "#6e4f3a"
    },
    {
        "name": "monks-robe",
        "hex": "#704822"
    },
    {
        "name": "dachshund",
        "hex": "#704f37"
    },
    {
        "name": "toffee",
        "hex": "#755139"
    },
    {
        "name": "aztec",
        "hex": "#7a5747"
    },
    {
        "name": "cocoa-brown",
        "hex": "#6c5043"
    },
    {
        "name": "partridge",
        "hex": "#725440"
    },
    {
        "name": "friar-brown",
        "hex": "#6e493a"
    },
    {
        "name": "mustang",
        "hex": "#684b40"
    },
    {
        "name": "pinecone",
        "hex": "#61473b"
    },
    {
        "name": "potting-soil",
        "hex": "#54392d"
    },
    {
        "name": "ermine",
        "hex": "#836b4f"
    },
    {
        "name": "otter",
        "hex": "#7f674f"
    },
    {
        "name": "kangaroo",
        "hex": "#725e43"
    },
    {
        "name": "sepia",
        "hex": "#6b543e"
    },
    {
        "name": "coffee-liqueur",
        "hex": "#6a513b"
    },
    {
        "name": "desert-palm",
        "hex": "#5a4632"
    },
    {
        "name": "teak",
        "hex": "#655341"
    },
    {
        "name": "shitake",
        "hex": "#736253"
    },
    {
        "name": "cub",
        "hex": "#6e5c4b"
    },
    {
        "name": "carafe",
        "hex": "#5d473a"
    },
    {
        "name": "dark-earth",
        "hex": "#5c4939"
    },
    {
        "name": "slate-black",
        "hex": "#4b3d33"
    },
    {
        "name": "chocolate-brown",
        "hex": "#4e403b"
    },
    {
        "name": "demitasse",
        "hex": "#40342b"
    },
    {
        "name": "deep-taupe",
        "hex": "#7b6660"
    },
    {
        "name": "shopping-bag",
        "hex": "#5a4743"
    },
    {
        "name": "chestnut",
        "hex": "#584039"
    },
    {
        "name": "bracken",
        "hex": "#4f3f3b"
    },
    {
        "name": "seal-brown",
        "hex": "#493b39"
    },
    {
        "name": "java",
        "hex": "#433331"
    },
    {
        "name": "coffee-bean",
        "hex": "#40312f"
    },
    {
        "name": "mother-of-pearl",
        "hex": "#e9d4c3"
    },
    {
        "name": "pastel-rose-tan",
        "hex": "#e9d1bf"
    },
    {
        "name": "novelle-peach",
        "hex": "#e7cfbd"
    },
    {
        "name": "sun-kiss",
        "hex": "#ebd1bb"
    },
    {
        "name": "ivory-cream",
        "hex": "#dac0a7"
    },
    {
        "name": "shifting-sand",
        "hex": "#d8c0ad"
    },
    {
        "name": "appleblossom",
        "hex": "#ddbca0"
    },
    {
        "name": "eggnog",
        "hex": "#ece1d3"
    },
    {
        "name": "cream-tan",
        "hex": "#e4c7b8"
    },
    {
        "name": "sand-dollar",
        "hex": "#decdbe"
    },
    {
        "name": "smoke-gray",
        "hex": "#cebaa8"
    },
    {
        "name": "doeskin",
        "hex": "#bdab9b"
    },
    {
        "name": "sesame",
        "hex": "#baa38b"
    },
    {
        "name": "light-taupe",
        "hex": "#b19d8d"
    },
    {
        "name": "warm-taupe",
        "hex": "#af9483"
    },
    {
        "name": "stucco",
        "hex": "#a58d7f"
    },
    {
        "name": "almondine",
        "hex": "#a78c8b"
    },
    {
        "name": "chanterelle",
        "hex": "#a28776"
    },
    {
        "name": "ginger-snap",
        "hex": "#977d70"
    },
    {
        "name": "woodsmoke",
        "hex": "#947764"
    },
    {
        "name": "amphora",
        "hex": "#9f8672"
    },
    {
        "name": "moonlight",
        "hex": "#c5b1a0"
    },
    {
        "name": "frappe",
        "hex": "#d1b7a0"
    },
    {
        "name": "rugby-tan",
        "hex": "#c2a594"
    },
    {
        "name": "roebuck",
        "hex": "#b09080"
    },
    {
        "name": "praline",
        "hex": "#ad8b75"
    },
    {
        "name": "burro",
        "hex": "#947764"
    },
    {
        "name": "beaver-fur",
        "hex": "#997867"
    },
    {
        "name": "toasted-almond",
        "hex": "#d2b49c"
    },
    {
        "name": "tawny-birch",
        "hex": "#ae856c"
    },
    {
        "name": "macaroon",
        "hex": "#b38b71"
    },
    {
        "name": "tawny-brown",
        "hex": "#ab856f"
    },
    {
        "name": "camel",
        "hex": "#b0846a"
    },
    {
        "name": "toast",
        "hex": "#ca9978"
    },
    {
        "name": "toasted-nut",
        "hex": "#c08768"
    },
    {
        "name": "nude",
        "hex": "#f2d3bc"
    },
    {
        "name": "tender-peach",
        "hex": "#f8d5b8"
    },
    {
        "name": "alesan",
        "hex": "#f1ceb3"
    },
    {
        "name": "pale-peach",
        "hex": "#fed1bd"
    },
    {
        "name": "peach-puree",
        "hex": "#efcfba"
    },
    {
        "name": "bellini",
        "hex": "#f4c9b1"
    },
    {
        "name": "amberlight",
        "hex": "#e2bea2"
    },
    {
        "name": "peach-dust",
        "hex": "#f0d8cc"
    },
    {
        "name": "linen",
        "hex": "#edd2c0"
    },
    {
        "name": "scallop-shell",
        "hex": "#fbd8c9"
    },
    {
        "name": "soft-pink",
        "hex": "#f2d8cd"
    },
    {
        "name": "pale-dogwood",
        "hex": "#edcdc2"
    },
    {
        "name": "silver-peony",
        "hex": "#e7cfc7"
    },
    {
        "name": "rose-dust",
        "hex": "#cdb2a5"
    },
    {
        "name": "shell",
        "hex": "#e1cfc6"
    },
    {
        "name": "whisper-pink",
        "hex": "#dacbbe"
    },
    {
        "name": "pink-tint",
        "hex": "#dbcbbd"
    },
    {
        "name": "evening-sand",
        "hex": "#ddb6ab"
    },
    {
        "name": "sirocco",
        "hex": "#c39d88"
    },
    {
        "name": "brush",
        "hex": "#b99984"
    },
    {
        "name": "cafe-au-lait",
        "hex": "#ae8774"
    },
    {
        "name": "cameo-rose",
        "hex": "#d7b8ab"
    },
    {
        "name": "pale-blush",
        "hex": "#e4bfb3"
    },
    {
        "name": "rose-cloud",
        "hex": "#dbb0a2"
    },
    {
        "name": "spanish-villa",
        "hex": "#dfbaa9"
    },
    {
        "name": "maple-sugar",
        "hex": "#c9a38d"
    },
    {
        "name": "tuscany",
        "hex": "#be9785"
    },
    {
        "name": "cork",
        "hex": "#ba8671"
    },
    {
        "name": "bisque",
        "hex": "#edcab5"
    },
    {
        "name": "almost-apricot",
        "hex": "#e5b39b"
    },
    {
        "name": "pink-sand",
        "hex": "#dfb19b"
    },
    {
        "name": "peach-nougat",
        "hex": "#e6af91"
    },
    {
        "name": "peach-bloom",
        "hex": "#d99b7c"
    },
    {
        "name": "dusty-coral",
        "hex": "#d29b83"
    },
    {
        "name": "cafe-creme",
        "hex": "#c79685"
    },
    {
        "name": "sandstorm",
        "hex": "#bd8b69"
    },
    {
        "name": "butterum",
        "hex": "#c68f65"
    },
    {
        "name": "biscuit",
        "hex": "#b4835b"
    },
    {
        "name": "cashew",
        "hex": "#a47149"
    },
    {
        "name": "almond",
        "hex": "#a7754d"
    },
    {
        "name": "lion",
        "hex": "#a0714f"
    },
    {
        "name": "thrush",
        "hex": "#936b4f"
    },
    {
        "name": "mocha-mousse",
        "hex": "#a47864"
    },
    {
        "name": "pecan-brown",
        "hex": "#a36e51"
    },
    {
        "name": "hazel",
        "hex": "#ae7250"
    },
    {
        "name": "bran",
        "hex": "#a66e4a"
    },
    {
        "name": "adobe",
        "hex": "#a3623b"
    },
    {
        "name": "leather-brown",
        "hex": "#97572b"
    },
    {
        "name": "glazed-ginger",
        "hex": "#91552b"
    },
    {
        "name": "sandstone",
        "hex": "#c48a69"
    },
    {
        "name": "caramel",
        "hex": "#c37c54"
    },
    {
        "name": "amber-brown",
        "hex": "#a66646"
    },
    {
        "name": "sierra",
        "hex": "#985c41"
    },
    {
        "name": "ginger-bread",
        "hex": "#8c4a2f"
    },
    {
        "name": "mocha-bisque",
        "hex": "#8c543a"
    },
    {
        "name": "tortoise-shell",
        "hex": "#754734"
    },
    {
        "name": "pheasant",
        "hex": "#c68463"
    },
    {
        "name": "sunburn",
        "hex": "#b37256"
    },
    {
        "name": "raw-sienna",
        "hex": "#b9714f"
    },
    {
        "name": "autumn-leaf",
        "hex": "#b56a4c"
    },
    {
        "name": "mecca-orange",
        "hex": "#bd5745"
    },
    {
        "name": "rust",
        "hex": "#b55a30"
    },
    {
        "name": "bombay-brown",
        "hex": "#9f5130"
    },
    {
        "name": "frosted-almond",
        "hex": "#d2c2ac"
    },
    {
        "name": "gilded-beige",
        "hex": "#b39f8d"
    },
    {
        "name": "pale-gold",
        "hex": "#bd9865"
    },
    {
        "name": "rich-gold",
        "hex": "#c8b273"
    },
    {
        "name": "copper",
        "hex": "#c47e5a"
    },
    {
        "name": "copper-coin",
        "hex": "#ba6b57"
    },
    {
        "name": "silver",
        "hex": "#a2a2a1"
    },
    {
        "name": "raw-umber",
        "hex": "#92705f"
    },
    {
        "name": "brownie",
        "hex": "#8f7265"
    },
    {
        "name": "acorn",
        "hex": "#7e5e52"
    },
    {
        "name": "clove",
        "hex": "#876155"
    },
    {
        "name": "carob-brown",
        "hex": "#855c4c"
    },
    {
        "name": "russet",
        "hex": "#8f5f50"
    },
    {
        "name": "rawhide",
        "hex": "#865e49"
    },
    {
        "name": "chutney",
        "hex": "#98594b"
    },
    {
        "name": "baked-clay",
        "hex": "#9c5642"
    },
    {
        "name": "copper-brown",
        "hex": "#9a6051"
    },
    {
        "name": "brown-patina",
        "hex": "#834f3d"
    },
    {
        "name": "rustic-brown",
        "hex": "#855141"
    },
    {
        "name": "coconut-shell",
        "hex": "#874e3c"
    },
    {
        "name": "sequoia",
        "hex": "#804839"
    },
    {
        "name": "root-beer",
        "hex": "#714a41"
    },
    {
        "name": "brunette",
        "hex": "#664238"
    },
    {
        "name": "sable",
        "hex": "#6e403c"
    },
    {
        "name": "cinnamon",
        "hex": "#6b4139"
    },
    {
        "name": "fudgesickle",
        "hex": "#63403a"
    },
    {
        "name": "mink",
        "hex": "#734b42"
    },
    {
        "name": "cappuccino",
        "hex": "#633f33"
    },
    {
        "name": "cognac",
        "hex": "#8b645a"
    },
    {
        "name": "nutmeg",
        "hex": "#7e5c54"
    },
    {
        "name": "french-roast",
        "hex": "#58423f"
    },
    {
        "name": "deep-mahogany",
        "hex": "#553b39"
    },
    {
        "name": "rum-raisin",
        "hex": "#583432"
    },
    {
        "name": "brown-stone",
        "hex": "#593c39"
    },
    {
        "name": "bitter-chocolate",
        "hex": "#503130"
    },
    {
        "name": "mahogany",
        "hex": "#824d46"
    },
    {
        "name": "henna",
        "hex": "#7c423c"
    },
    {
        "name": "arabian-spice",
        "hex": "#884332"
    },
    {
        "name": "hot-chocolate",
        "hex": "#683b39"
    },
    {
        "name": "russet-brown",
        "hex": "#743332"
    },
    {
        "name": "madder-brown",
        "hex": "#6a3331"
    },
    {
        "name": "andorra",
        "hex": "#603535"
    },
    {
        "name": "afterglow",
        "hex": "#f3e6c9"
    },
    {
        "name": "transparent-yellow",
        "hex": "#f4ecc2"
    },
    {
        "name": "double-cream",
        "hex": "#f3e0ac"
    },
    {
        "name": "sunlight",
        "hex": "#edd59e"
    },
    {
        "name": "straw",
        "hex": "#e0c992"
    },
    {
        "name": "jojoba",
        "hex": "#dabe81"
    },
    {
        "name": "rattan",
        "hex": "#d1b272"
    },
    {
        "name": "boulder",
        "hex": "#d1be9b"
    },
    {
        "name": "sea-mist",
        "hex": "#d8c9a3"
    },
    {
        "name": "reed-yellow",
        "hex": "#dcc99e"
    },
    {
        "name": "chino-green",
        "hex": "#d9caa5"
    },
    {
        "name": "parsnip",
        "hex": "#d6c69a"
    },
    {
        "name": "dusty-yellow",
        "hex": "#d4cc9a"
    },
    {
        "name": "silver-fern",
        "hex": "#bbaa7e"
    },
    {
        "name": "lemon-grass",
        "hex": "#dcd494"
    },
    {
        "name": "raffia",
        "hex": "#dac483"
    },
    {
        "name": "golden-mist",
        "hex": "#d5cd94"
    },
    {
        "name": "pampas",
        "hex": "#cfbb7b"
    },
    {
        "name": "bamboo",
        "hex": "#d2b04c"
    },
    {
        "name": "cress-green",
        "hex": "#bca949"
    },
    {
        "name": "olive-oil",
        "hex": "#a98b2d"
    },
    {
        "name": "dried-moss",
        "hex": "#ccb97e"
    },
    {
        "name": "celery",
        "hex": "#cec153"
    },
    {
        "name": "acacia",
        "hex": "#dacd65"
    },
    {
        "name": "sulphur",
        "hex": "#ddb614"
    },
    {
        "name": "oil-yellow",
        "hex": "#c4a647"
    },
    {
        "name": "green-sulphur",
        "hex": "#ae8e2c"
    },
    {
        "name": "golden-palm",
        "hex": "#aa8805"
    },
    {
        "name": "cocoon",
        "hex": "#c9b27c"
    },
    {
        "name": "hemp",
        "hex": "#c0ad7c"
    },
    {
        "name": "southern-moss",
        "hex": "#bca66a"
    },
    {
        "name": "olivenite",
        "hex": "#c1a65c"
    },
    {
        "name": "golden-green",
        "hex": "#bdb369"
    },
    {
        "name": "antique-gold",
        "hex": "#b59e5f"
    },
    {
        "name": "burnished-gold",
        "hex": "#aa9855"
    },
    {
        "name": "french-vanilla",
        "hex": "#efe1a7"
    },
    {
        "name": "pastel-yellow",
        "hex": "#f2e6b1"
    },
    {
        "name": "tender-yellow",
        "hex": "#ededb7"
    },
    {
        "name": "wax-yellow",
        "hex": "#ede9ad"
    },
    {
        "name": "lemonade",
        "hex": "#f0e79d"
    },
    {
        "name": "elfin-yellow",
        "hex": "#eeea97"
    },
    {
        "name": "limelight",
        "hex": "#f0e87d"
    },
    {
        "name": "dusky-citron",
        "hex": "#e3cc81"
    },
    {
        "name": "muted-lime",
        "hex": "#d1c87c"
    },
    {
        "name": "endive",
        "hex": "#d2cc81"
    },
    {
        "name": "custard",
        "hex": "#e5d68e"
    },
    {
        "name": "canary-yellow",
        "hex": "#dfd87e"
    },
    {
        "name": "yellow-cream",
        "hex": "#efdc75"
    },
    {
        "name": "cream-gold",
        "hex": "#dec05f"
    },
    {
        "name": "aurora",
        "hex": "#eddd59"
    },
    {
        "name": "green-sheen",
        "hex": "#d9ce52"
    },
    {
        "name": "maize",
        "hex": "#eec843"
    },
    {
        "name": "blazing-yellow",
        "hex": "#fee715"
    },
    {
        "name": "buttercup",
        "hex": "#fae03c"
    },
    {
        "name": "empire-yellow",
        "hex": "#f7d000"
    },
    {
        "name": "lemon",
        "hex": "#f3bf08"
    },
    {
        "name": "mimosa",
        "hex": "#f0c05a"
    },
    {
        "name": "aspen-gold",
        "hex": "#ffd662"
    },
    {
        "name": "dandelion",
        "hex": "#ffd02e"
    },
    {
        "name": "vibrant-yellow",
        "hex": "#ffda29"
    },
    {
        "name": "cyber-yellow",
        "hex": "#ffd400"
    },
    {
        "name": "freesia",
        "hex": "#f3c12c"
    },
    {
        "name": "lemon-chrome",
        "hex": "#ffc300"
    },
    {
        "name": "mellow-yellow",
        "hex": "#f0dd9d"
    },
    {
        "name": "pale-banana",
        "hex": "#fae199"
    },
    {
        "name": "popcorn",
        "hex": "#f8de8d"
    },
    {
        "name": "sunshine",
        "hex": "#fade85"
    },
    {
        "name": "lemon-drop",
        "hex": "#fdd878"
    },
    {
        "name": "primrose-yellow",
        "hex": "#f6d155"
    },
    {
        "name": "super-lemon",
        "hex": "#e4bf45"
    },
    {
        "name": "misted-yellow",
        "hex": "#dab965"
    },
    {
        "name": "sauterne",
        "hex": "#c5a253"
    },
    {
        "name": "honey",
        "hex": "#ba9238"
    },
    {
        "name": "arrowwood",
        "hex": "#bc8d1f"
    },
    {
        "name": "tawny-olive",
        "hex": "#c4962c"
    },
    {
        "name": "ceylon-yellow",
        "hex": "#d4ae40"
    },
    {
        "name": "lemon-curry",
        "hex": "#cda323"
    },
    {
        "name": "fall-leaf",
        "hex": "#c9a86a"
    },
    {
        "name": "antelope",
        "hex": "#b19664"
    },
    {
        "name": "mustard-gold",
        "hex": "#b08e51"
    },
    {
        "name": "harvest-gold",
        "hex": "#b68a3a"
    },
    {
        "name": "nugget-gold",
        "hex": "#c89720"
    },
    {
        "name": "golden-spice",
        "hex": "#c6973f"
    },
    {
        "name": "golden-yellow",
        "hex": "#cb8e16"
    },
    {
        "name": "ochre",
        "hex": "#d6af66"
    },
    {
        "name": "tinsel",
        "hex": "#c3964d"
    },
    {
        "name": "bright-gold",
        "hex": "#cf9f52"
    },
    {
        "name": "honey-gold",
        "hex": "#d1a054"
    },
    {
        "name": "amber-gold",
        "hex": "#c19552"
    },
    {
        "name": "mineral-yellow",
        "hex": "#d39c43"
    },
    {
        "name": "narcissus",
        "hex": "#c39449"
    },
    {
        "name": "marzipan",
        "hex": "#d8c09d"
    },
    {
        "name": "curry",
        "hex": "#be9e6f"
    },
    {
        "name": "prairie-sand",
        "hex": "#b59a6a"
    },
    {
        "name": "honey-mustard",
        "hex": "#b68f52"
    },
    {
        "name": "wood-thrush",
        "hex": "#a47d43"
    },
    {
        "name": "golden-brown",
        "hex": "#91672f"
    },
    {
        "name": "bronze-brown",
        "hex": "#825e2f"
    },
    {
        "name": "apple-cinnamon",
        "hex": "#b0885a"
    },
    {
        "name": "bone-brown",
        "hex": "#9d7446"
    },
    {
        "name": "dijon",
        "hex": "#97754c"
    },
    {
        "name": "bistre",
        "hex": "#98754a"
    },
    {
        "name": "medal-bronze",
        "hex": "#977547"
    },
    {
        "name": "cumin",
        "hex": "#927240"
    },
    {
        "name": "breen",
        "hex": "#795d34"
    },
    {
        "name": "snapdragon",
        "hex": "#fed777"
    },
    {
        "name": "banana-cream",
        "hex": "#ffcf73"
    },
    {
        "name": "daffodil",
        "hex": "#fdc04e"
    },
    {
        "name": "yolk-yellow",
        "hex": "#e2b051"
    },
    {
        "name": "golden-rod",
        "hex": "#e2a829"
    },
    {
        "name": "old-gold",
        "hex": "#eca825"
    },
    {
        "name": "spectra-yellow",
        "hex": "#f7b718"
    },
    {
        "name": "golden-haze",
        "hex": "#fbd897"
    },
    {
        "name": "sahara-sun",
        "hex": "#dfc08a"
    },
    {
        "name": "new-wheat",
        "hex": "#d7b57f"
    },
    {
        "name": "cornsilk",
        "hex": "#edc373"
    },
    {
        "name": "buff-yellow",
        "hex": "#f1bf70"
    },
    {
        "name": "sunset-gold",
        "hex": "#f7c46c"
    },
    {
        "name": "golden-cream",
        "hex": "#f7b768"
    },
    {
        "name": "impala",
        "hex": "#f8ce97"
    },
    {
        "name": "flax",
        "hex": "#ffc87d"
    },
    {
        "name": "pale-marigold",
        "hex": "#ffc66e"
    },
    {
        "name": "amber-yellow",
        "hex": "#fab75a"
    },
    {
        "name": "amber",
        "hex": "#efad55"
    },
    {
        "name": "golden-apricot",
        "hex": "#dda758"
    },
    {
        "name": "beeswax",
        "hex": "#eba851"
    },
    {
        "name": "banana",
        "hex": "#fcb953"
    },
    {
        "name": "citrus",
        "hex": "#f9ac2f"
    },
    {
        "name": "golden-glow",
        "hex": "#d99938"
    },
    {
        "name": "artisans-gold",
        "hex": "#f2ab46"
    },
    {
        "name": "sunflower",
        "hex": "#d39237"
    },
    {
        "name": "buckthorn-brown",
        "hex": "#a76f1f"
    },
    {
        "name": "cathay-spice",
        "hex": "#99642c"
    },
    {
        "name": "taffy",
        "hex": "#c39b6a"
    },
    {
        "name": "oak-buff",
        "hex": "#cf9c63"
    },
    {
        "name": "honey-yellow",
        "hex": "#ca9456"
    },
    {
        "name": "spruce-yellow",
        "hex": "#be8a4a"
    },
    {
        "name": "inca-gold",
        "hex": "#bb7a2c"
    },
    {
        "name": "sudan-brown",
        "hex": "#ac6b29"
    },
    {
        "name": "rubber",
        "hex": "#815b37"
    },
    {
        "name": "wheat",
        "hex": "#dec5a5"
    },
    {
        "name": "honey-peach",
        "hex": "#dcbd9e"
    },
    {
        "name": "desert-dust",
        "hex": "#e3bc8e"
    },
    {
        "name": "golden-straw",
        "hex": "#e6bd8f"
    },
    {
        "name": "buff",
        "hex": "#ebc396"
    },
    {
        "name": "desert-mist",
        "hex": "#e0b589"
    },
    {
        "name": "clay",
        "hex": "#d2a172"
    },
    {
        "name": "golden-fleece",
        "hex": "#f2d1a0"
    },
    {
        "name": "apricot-sherbet",
        "hex": "#facd9e"
    },
    {
        "name": "sunburst",
        "hex": "#f6c289"
    },
    {
        "name": "apricot-cream",
        "hex": "#f1bd89"
    },
    {
        "name": "buff-orange",
        "hex": "#ffbb7c"
    },
    {
        "name": "chamois",
        "hex": "#f7b26a"
    },
    {
        "name": "warm-apricot",
        "hex": "#ffb865"
    },
    {
        "name": "marigold",
        "hex": "#fadc53"
    },
    {
        "name": "golden-nugget",
        "hex": "#db9b59"
    },
    {
        "name": "butterscotch",
        "hex": "#e19640"
    },
    {
        "name": "nugget",
        "hex": "#cf8848"
    },
    {
        "name": "buckskin",
        "hex": "#d18e54"
    },
    {
        "name": "yam",
        "hex": "#d0893f"
    },
    {
        "name": "golden-oak",
        "hex": "#be752d"
    },
    {
        "name": "gold-fusion",
        "hex": "#ffb000"
    },
    {
        "name": "saffron",
        "hex": "#ffa500"
    },
    {
        "name": "cadmium-yellow",
        "hex": "#ee9626"
    },
    {
        "name": "zinnia",
        "hex": "#ffa010"
    },
    {
        "name": "radiant-yellow",
        "hex": "#fc9e21"
    },
    {
        "name": "apricot",
        "hex": "#f19035"
    },
    {
        "name": "dark-cheddar",
        "hex": "#e08119"
    },
    {
        "name": "apricot-ice",
        "hex": "#fbbe99"
    },
    {
        "name": "apricot-nectar",
        "hex": "#ecaa79"
    },
    {
        "name": "gold-earth",
        "hex": "#dd9c6b"
    },
    {
        "name": "apricot-tan",
        "hex": "#dd9760"
    },
    {
        "name": "topaz",
        "hex": "#d08344"
    },
    {
        "name": "golden-ochre",
        "hex": "#c77943"
    },
    {
        "name": "apricot-buff",
        "hex": "#cd7e4d"
    },
    {
        "name": "peach-cobbler",
        "hex": "#ffb181"
    },
    {
        "name": "salmon-buff",
        "hex": "#feaa7b"
    },
    {
        "name": "pumpkin",
        "hex": "#f5a26f"
    },
    {
        "name": "mock-orange",
        "hex": "#ffa368"
    },
    {
        "name": "muskmelon",
        "hex": "#ec935e"
    },
    {
        "name": "copper-tan",
        "hex": "#de8e65"
    },
    {
        "name": "coral-gold",
        "hex": "#d27d56"
    },
    {
        "name": "russet-orange",
        "hex": "#e47127"
    },
    {
        "name": "orange-ochre",
        "hex": "#dc793a"
    },
    {
        "name": "amberglow",
        "hex": "#dc793e"
    },
    {
        "name": "jaffa-orange",
        "hex": "#d86d39"
    },
    {
        "name": "apricot-orange",
        "hex": "#c86b3c"
    },
    {
        "name": "burnt-orange",
        "hex": "#c86733"
    },
    {
        "name": "harvest-pumpkin",
        "hex": "#d56231"
    },
    {
        "name": "blazing-orange",
        "hex": "#ffa64f"
    },
    {
        "name": "flame-orange",
        "hex": "#fb8b23"
    },
    {
        "name": "bright-marigold",
        "hex": "#ff8d00"
    },
    {
        "name": "autumn-glory",
        "hex": "#ff8812"
    },
    {
        "name": "sun-orange",
        "hex": "#f48037"
    },
    {
        "name": "persimmon-orange",
        "hex": "#f47327"
    },
    {
        "name": "orange-popsicle",
        "hex": "#ff7913"
    },
    {
        "name": "autumn-sunset",
        "hex": "#f38554"
    },
    {
        "name": "tangerine",
        "hex": "#f88f58"
    },
    {
        "name": "bird-of-paradise",
        "hex": "#ff8c55"
    },
    {
        "name": "orange-peel",
        "hex": "#fa7a35"
    },
    {
        "name": "mandarin-orange",
        "hex": "#ec6a37"
    },
    {
        "name": "golden-poppy",
        "hex": "#f56733"
    },
    {
        "name": "vibrant-orange",
        "hex": "#ff7420"
    },
    {
        "name": "nectarine",
        "hex": "#ff8656"
    },
    {
        "name": "coral-rose",
        "hex": "#f3774d"
    },
    {
        "name": "carrot",
        "hex": "#fd6f3b"
    },
    {
        "name": "firecracker",
        "hex": "#f36944"
    },
    {
        "name": "red-orange",
        "hex": "#f05627"
    },
    {
        "name": "vermillion-orange",
        "hex": "#f9633b"
    },
    {
        "name": "flame",
        "hex": "#f2552c"
    },
    {
        "name": "creampuff",
        "hex": "#ffcda8"
    },
    {
        "name": "bleached-apricot",
        "hex": "#fccaac"
    },
    {
        "name": "almond-cream",
        "hex": "#f4c29f"
    },
    {
        "name": "beach-sand",
        "hex": "#fbb995"
    },
    {
        "name": "cream-blush",
        "hex": "#f8c19a"
    },
    {
        "name": "caramel-cream",
        "hex": "#f4ba94"
    },
    {
        "name": "peach-fuzz",
        "hex": "#ffbe98"
    },
    {
        "name": "prairie-sunset",
        "hex": "#ffbb9e"
    },
    {
        "name": "coral-sands",
        "hex": "#edaa86"
    },
    {
        "name": "apricot-wash",
        "hex": "#fbac82"
    },
    {
        "name": "canyon-sunset",
        "hex": "#e1927a"
    },
    {
        "name": "brandied-melon",
        "hex": "#ce7b5b"
    },
    {
        "name": "carnelian",
        "hex": "#ce785d"
    },
    {
        "name": "mango",
        "hex": "#b75e41"
    },
    {
        "name": "peach",
        "hex": "#f2a987"
    },
    {
        "name": "cantaloupe",
        "hex": "#ffa177"
    },
    {
        "name": "coral-reef",
        "hex": "#faa181"
    },
    {
        "name": "shell-coral",
        "hex": "#ea9575"
    },
    {
        "name": "cadmium-orange",
        "hex": "#f99471"
    },
    {
        "name": "melon",
        "hex": "#fe8863"
    },
    {
        "name": "dusty-orange",
        "hex": "#e27a53"
    },
    {
        "name": "arabesque",
        "hex": "#d16f52"
    },
    {
        "name": "langoustino",
        "hex": "#ca6c56"
    },
    {
        "name": "ginger",
        "hex": "#c96551"
    },
    {
        "name": "flamingo",
        "hex": "#df7253"
    },
    {
        "name": "orange-rust",
        "hex": "#c25a3c"
    },
    {
        "name": "burnt-ochre",
        "hex": "#bb4f35"
    },
    {
        "name": "chili",
        "hex": "#be5141"
    },
    {
        "name": "ginger-spice",
        "hex": "#b65d48"
    },
    {
        "name": "autumn-glaze",
        "hex": "#b3573f"
    },
    {
        "name": "auburn",
        "hex": "#a15843"
    },
    {
        "name": "picante",
        "hex": "#8d3f2d"
    },
    {
        "name": "tandori-spice",
        "hex": "#9f4440"
    },
    {
        "name": "cinnabar",
        "hex": "#9c453b"
    },
    {
        "name": "bossa-nova",
        "hex": "#973a36"
    },
    {
        "name": "tropical-peach",
        "hex": "#ffc4b2"
    },
    {
        "name": "peach-parfait",
        "hex": "#f8bfa8"
    },
    {
        "name": "coral-pink",
        "hex": "#e8a798"
    },
    {
        "name": "dusty-pink",
        "hex": "#deaa9b"
    },
    {
        "name": "muted-clay",
        "hex": "#d29380"
    },
    {
        "name": "shrimp",
        "hex": "#e29a86"
    },
    {
        "name": "tawny-orange",
        "hex": "#d37f6f"
    },
    {
        "name": "coral-haze",
        "hex": "#e38e84"
    },
    {
        "name": "canyon-clay",
        "hex": "#ce8477"
    },
    {
        "name": "terra-cotta",
        "hex": "#d38377"
    },
    {
        "name": "desert-sand",
        "hex": "#bd7b74"
    },
    {
        "name": "light-mahogany",
        "hex": "#ad6d68"
    },
    {
        "name": "cedar-wood",
        "hex": "#a1655b"
    },
    {
        "name": "withered-rose",
        "hex": "#a26666"
    },
    {
        "name": "rose-dawn",
        "hex": "#c2877b"
    },
    {
        "name": "ash-rose",
        "hex": "#b5817d"
    },
    {
        "name": "old-rose",
        "hex": "#b47b77"
    },
    {
        "name": "brick-dust",
        "hex": "#b07069"
    },
    {
        "name": "canyon-rose",
        "hex": "#af6c67"
    },
    {
        "name": "dusty-cedar",
        "hex": "#ad5d5d"
    },
    {
        "name": "marsala",
        "hex": "#964f4c"
    },
    {
        "name": "apricot-brandy",
        "hex": "#c26a5a"
    },
    {
        "name": "aragon",
        "hex": "#b06455"
    },
    {
        "name": "hot-sauce",
        "hex": "#ab4f41"
    },
    {
        "name": "bruschetta",
        "hex": "#a75949"
    },
    {
        "name": "etruscan-red",
        "hex": "#a2574b"
    },
    {
        "name": "redwood",
        "hex": "#a6594c"
    },
    {
        "name": "burnt-brick",
        "hex": "#a14d3a"
    },
    {
        "name": "faded-rose",
        "hex": "#bf6464"
    },
    {
        "name": "baked-apple",
        "hex": "#b34646"
    },
    {
        "name": "pompeian-red",
        "hex": "#a4292e"
    },
    {
        "name": "ketchup",
        "hex": "#9a382d"
    },
    {
        "name": "red-ochre",
        "hex": "#913832"
    },
    {
        "name": "barn-red",
        "hex": "#8f423b"
    },
    {
        "name": "burnt-henna",
        "hex": "#7e392f"
    },
    {
        "name": "peach-pearl",
        "hex": "#ffb2a5"
    },
    {
        "name": "peach-melba",
        "hex": "#fbbdaf"
    },
    {
        "name": "apricot-blush",
        "hex": "#feaea5"
    },
    {
        "name": "peach-bud",
        "hex": "#fdb2ab"
    },
    {
        "name": "coral-almond",
        "hex": "#e29d94"
    },
    {
        "name": "lobster-bisque",
        "hex": "#dd9289"
    },
    {
        "name": "lantana",
        "hex": "#da7e7a"
    },
    {
        "name": "peach-nectar",
        "hex": "#ffb59b"
    },
    {
        "name": "salmon",
        "hex": "#faaa94"
    },
    {
        "name": "peach-amber",
        "hex": "#fb9f93"
    },
    {
        "name": "desert-flower",
        "hex": "#ff9687"
    },
    {
        "name": "peach-pink",
        "hex": "#fa9a85"
    },
    {
        "name": "burnt-coral",
        "hex": "#e9897e"
    },
    {
        "name": "crabapple",
        "hex": "#d77e70"
    },
    {
        "name": "papaya-punch",
        "hex": "#fca289"
    },
    {
        "name": "fusion-coral",
        "hex": "#ff8576"
    },
    {
        "name": "fresh-salmon",
        "hex": "#ff7f6a"
    },
    {
        "name": "persimmon",
        "hex": "#f67866"
    },
    {
        "name": "coral",
        "hex": "#ed7464"
    },
    {
        "name": "living-coral",
        "hex": "#ff6f61"
    },
    {
        "name": "hot-coral",
        "hex": "#f35b53"
    },
    {
        "name": "shell-pink",
        "hex": "#f88180"
    },
    {
        "name": "georgia-peach",
        "hex": "#f97272"
    },
    {
        "name": "sugar-coral",
        "hex": "#f56c73"
    },
    {
        "name": "dubarry",
        "hex": "#f25f66"
    },
    {
        "name": "porcelain-rose",
        "hex": "#ea6b6a"
    },
    {
        "name": "spiced-coral",
        "hex": "#d75c5d"
    },
    {
        "name": "deep-sea-coral",
        "hex": "#d9615b"
    },
    {
        "name": "rose-of-sharon",
        "hex": "#dc5b62"
    },
    {
        "name": "cayenne",
        "hex": "#e04951"
    },
    {
        "name": "hibiscus",
        "hex": "#dd3848"
    },
    {
        "name": "poinsettia",
        "hex": "#cb3441"
    },
    {
        "name": "chrysanthemum",
        "hex": "#be454f"
    },
    {
        "name": "cranberry",
        "hex": "#bb4a4d"
    },
    {
        "name": "cardinal",
        "hex": "#ad3e48"
    },
    {
        "name": "tigerlily",
        "hex": "#e2583e"
    },
    {
        "name": "grenadine",
        "hex": "#df3f32"
    },
    {
        "name": "mandarin-red",
        "hex": "#e74a33"
    },
    {
        "name": "fiesta",
        "hex": "#dd4132"
    },
    {
        "name": "cherry-tomato",
        "hex": "#eb3c27"
    },
    {
        "name": "orange-com",
        "hex": "#da321c"
    },
    {
        "name": "spicy-orange",
        "hex": "#d73c26"
    },
    {
        "name": "camellia",
        "hex": "#f6745f"
    },
    {
        "name": "nasturtium",
        "hex": "#fe6347"
    },
    {
        "name": "emberglow",
        "hex": "#ea6759"
    },
    {
        "name": "burnt-sienna",
        "hex": "#c65d52"
    },
    {
        "name": "paprika",
        "hex": "#ce4d42"
    },
    {
        "name": "red-clay",
        "hex": "#c2452d"
    },
    {
        "name": "molten-lava",
        "hex": "#b5332e"
    },
    {
        "name": "bittersweet",
        "hex": "#d93744"
    },
    {
        "name": "poppy-red",
        "hex": "#dc343b"
    },
    {
        "name": "tomato",
        "hex": "#ce2939"
    },
    {
        "name": "fiery-red",
        "hex": "#d01c1f"
    },
    {
        "name": "flame-scarlet",
        "hex": "#cd212a"
    },
    {
        "name": "high-risk-red",
        "hex": "#c71f2d"
    },
    {
        "name": "aurora-red",
        "hex": "#b93a32"
    },
    {
        "name": "rococco-red",
        "hex": "#bb363f"
    },
    {
        "name": "tomato-puree",
        "hex": "#c53346"
    },
    {
        "name": "lollipop",
        "hex": "#cc1c3b"
    },
    {
        "name": "ski-patrol",
        "hex": "#bb1237"
    },
    {
        "name": "scarlet",
        "hex": "#bc2b3d"
    },
    {
        "name": "lipstick-red",
        "hex": "#b31a38"
    },
    {
        "name": "crimson",
        "hex": "#ae0e36"
    },
    {
        "name": "racing-red",
        "hex": "#bd162c"
    },
    {
        "name": "mars-red",
        "hex": "#bc2731"
    },
    {
        "name": "tango-red",
        "hex": "#ac0e2e"
    },
    {
        "name": "chinese-red",
        "hex": "#be132d"
    },
    {
        "name": "ribbon-red",
        "hex": "#b92636"
    },
    {
        "name": "true-red",
        "hex": "#bf1932"
    },
    {
        "name": "chili-pepper",
        "hex": "#9b1b30"
    },
    {
        "name": "quartz-pink",
        "hex": "#efa6aa"
    },
    {
        "name": "pink-icing",
        "hex": "#eea0a6"
    },
    {
        "name": "blossom",
        "hex": "#f2b2ae"
    },
    {
        "name": "peaches-n-cream",
        "hex": "#f4a6a3"
    },
    {
        "name": "candlelight-peach",
        "hex": "#f8a39d"
    },
    {
        "name": "strawberry-ice",
        "hex": "#e78b90"
    },
    {
        "name": "peach-blossom",
        "hex": "#de8286"
    },
    {
        "name": "flamingo-pink",
        "hex": "#f7969e"
    },
    {
        "name": "confetti",
        "hex": "#e6798e"
    },
    {
        "name": "bubblegum",
        "hex": "#ea738d"
    },
    {
        "name": "pink-lemonade",
        "hex": "#ee6d8a"
    },
    {
        "name": "camellia-rose",
        "hex": "#eb6081"
    },
    {
        "name": "rapture-rose",
        "hex": "#d16277"
    },
    {
        "name": "desert-rose",
        "hex": "#cf6977"
    },
    {
        "name": "geranium-pink",
        "hex": "#f6909d"
    },
    {
        "name": "conch-shell",
        "hex": "#fc8f9b"
    },
    {
        "name": "salmon-rose",
        "hex": "#ff8d94"
    },
    {
        "name": "strawberry-pink",
        "hex": "#f57f8e"
    },
    {
        "name": "sunkist-coral",
        "hex": "#ea6676"
    },
    {
        "name": "calypso-coral",
        "hex": "#ee5c6c"
    },
    {
        "name": "tea-rose",
        "hex": "#dc7178"
    },
    {
        "name": "geranium",
        "hex": "#da3d58"
    },
    {
        "name": "paradise-pink",
        "hex": "#e4445e"
    },
    {
        "name": "teaberry",
        "hex": "#dc3855"
    },
    {
        "name": "rouge-red",
        "hex": "#e24666"
    },
    {
        "name": "raspberry",
        "hex": "#d32e5e"
    },
    {
        "name": "azalea",
        "hex": "#d42e5b"
    },
    {
        "name": "virtual-pink",
        "hex": "#c6174e"
    },
    {
        "name": "claret-red",
        "hex": "#c84c61"
    },
    {
        "name": "raspberry-wine",
        "hex": "#b63753"
    },
    {
        "name": "rose-red",
        "hex": "#c92351"
    },
    {
        "name": "barberry",
        "hex": "#bf1945"
    },
    {
        "name": "bright-rose",
        "hex": "#c51959"
    },
    {
        "name": "persian-red",
        "hex": "#a21441"
    },
    {
        "name": "cerise",
        "hex": "#a41247"
    },
    {
        "name": "pink-lady",
        "hex": "#efc1d6"
    },
    {
        "name": "lilac-sachet",
        "hex": "#e9adca"
    },
    {
        "name": "prism-pink",
        "hex": "#f0a1bf"
    },
    {
        "name": "begonia-pink",
        "hex": "#ec9abe"
    },
    {
        "name": "fuchsia-pink",
        "hex": "#df88b7"
    },
    {
        "name": "rosebloom",
        "hex": "#e290b2"
    },
    {
        "name": "ibis-rose",
        "hex": "#ca628f"
    },
    {
        "name": "sachet-pink",
        "hex": "#f18aad"
    },
    {
        "name": "wild-orchid",
        "hex": "#d979a2"
    },
    {
        "name": "aurora-pink",
        "hex": "#e881a6"
    },
    {
        "name": "chateau-rose",
        "hex": "#d2738f"
    },
    {
        "name": "morning-glory",
        "hex": "#ee819f"
    },
    {
        "name": "azalea-pink",
        "hex": "#e96a97"
    },
    {
        "name": "shocking-pink",
        "hex": "#de5b8c"
    },
    {
        "name": "hot-pink",
        "hex": "#e55982"
    },
    {
        "name": "fandango-pink",
        "hex": "#e04f80"
    },
    {
        "name": "honeysuckle",
        "hex": "#d94f70"
    },
    {
        "name": "raspberry-sorbet",
        "hex": "#d2386c"
    },
    {
        "name": "carmine",
        "hex": "#bc4869"
    },
    {
        "name": "fuchsia-rose",
        "hex": "#c74375"
    },
    {
        "name": "beetroot-purple",
        "hex": "#cf2d71"
    },
    {
        "name": "pink-carnation",
        "hex": "#ed7a9e"
    },
    {
        "name": "carmine-rose",
        "hex": "#e35b8f"
    },
    {
        "name": "magenta",
        "hex": "#d23c77"
    },
    {
        "name": "pink-flambe",
        "hex": "#d3507a"
    },
    {
        "name": "fuchsia-purple",
        "hex": "#d33479"
    },
    {
        "name": "lilac-rose",
        "hex": "#bd4275"
    },
    {
        "name": "very-berry",
        "hex": "#b73275"
    },
    {
        "name": "super-pink",
        "hex": "#ce6ba4"
    },
    {
        "name": "phlox-pink",
        "hex": "#ce5e9a"
    },
    {
        "name": "raspberry-rose",
        "hex": "#cc4385"
    },
    {
        "name": "rose-violet",
        "hex": "#c0428a"
    },
    {
        "name": "fuchsia-red",
        "hex": "#ab3475"
    },
    {
        "name": "cactus-flower",
        "hex": "#a83e6c"
    },
    {
        "name": "magenta-haze",
        "hex": "#9d446e"
    },
    {
        "name": "shrinking-violet",
        "hex": "#f4e1e6"
    },
    {
        "name": "primrose-pink",
        "hex": "#eed4d9"
    },
    {
        "name": "silver-pink",
        "hex": "#dcb1af"
    },
    {
        "name": "powder-pink",
        "hex": "#ecb2b3"
    },
    {
        "name": "mauveglow",
        "hex": "#d18489"
    },
    {
        "name": "brandied-apricot",
        "hex": "#ca848a"
    },
    {
        "name": "dusty-rose",
        "hex": "#ba797d"
    },
    {
        "name": "mauve-morn",
        "hex": "#ecd6d6"
    },
    {
        "name": "mauve-chalk",
        "hex": "#e5d0cf"
    },
    {
        "name": "pearl",
        "hex": "#f9dbd8"
    },
    {
        "name": "bridal-rose",
        "hex": "#d69fa2"
    },
    {
        "name": "blush",
        "hex": "#d1969a"
    },
    {
        "name": "baroque-rose",
        "hex": "#b35a66"
    },
    {
        "name": "slate-rose",
        "hex": "#b45865"
    },
    {
        "name": "mineral-red",
        "hex": "#b35457"
    },
    {
        "name": "garnet-rose",
        "hex": "#ac4b55"
    },
    {
        "name": "holly-berry",
        "hex": "#b44e5d"
    },
    {
        "name": "american-beauty",
        "hex": "#a73340"
    },
    {
        "name": "jester-red",
        "hex": "#9e1030"
    },
    {
        "name": "rio-red",
        "hex": "#8a2232"
    },
    {
        "name": "rumba-red",
        "hex": "#7c2439"
    },
    {
        "name": "earth-red",
        "hex": "#95424e"
    },
    {
        "name": "deep-claret",
        "hex": "#973443"
    },
    {
        "name": "garnet",
        "hex": "#953640"
    },
    {
        "name": "brick-red",
        "hex": "#8c373e"
    },
    {
        "name": "rosewood",
        "hex": "#813639"
    },
    {
        "name": "tibetan-red",
        "hex": "#782a39"
    },
    {
        "name": "biking-red",
        "hex": "#77212e"
    },
    {
        "name": "apple-butter",
        "hex": "#844b4d"
    },
    {
        "name": "oxblood-red",
        "hex": "#70393f"
    },
    {
        "name": "cowhide",
        "hex": "#884344"
    },
    {
        "name": "burnt-russet",
        "hex": "#7e3940"
    },
    {
        "name": "ruby-wine",
        "hex": "#77333b"
    },
    {
        "name": "cordovan",
        "hex": "#702f3b"
    },
    {
        "name": "tawny-port",
        "hex": "#5c2c35"
    },
    {
        "name": "creole-pink",
        "hex": "#f7d5cc"
    },
    {
        "name": "peach-blush",
        "hex": "#e4ccc6"
    },
    {
        "name": "cloud-pink",
        "hex": "#f5d1c8"
    },
    {
        "name": "veiled-rose",
        "hex": "#f8cdc9"
    },
    {
        "name": "pearl-blush",
        "hex": "#f4cec5"
    },
    {
        "name": "english-rose",
        "hex": "#f4c6c3"
    },
    {
        "name": "lotus",
        "hex": "#e2c1c0"
    },
    {
        "name": "rosewater",
        "hex": "#f6dbd8"
    },
    {
        "name": "peach-whip",
        "hex": "#dbbeb7"
    },
    {
        "name": "rose-smoke",
        "hex": "#d3b4ad"
    },
    {
        "name": "coral-cloud",
        "hex": "#e2a9a1"
    },
    {
        "name": "misty-rose",
        "hex": "#caa39a"
    },
    {
        "name": "peach-beige",
        "hex": "#d3a297"
    },
    {
        "name": "cameo-brown",
        "hex": "#c08a80"
    },
    {
        "name": "seashell-pink",
        "hex": "#f7c8c2"
    },
    {
        "name": "chintz-rose",
        "hex": "#eec4be"
    },
    {
        "name": "impatiens-pink",
        "hex": "#ffc4bc"
    },
    {
        "name": "peachskin",
        "hex": "#dfb8b6"
    },
    {
        "name": "mellow-rose",
        "hex": "#d9a6a1"
    },
    {
        "name": "rose-tan",
        "hex": "#d19c97"
    },
    {
        "name": "rosette",
        "hex": "#ce8e8b"
    },
    {
        "name": "mauvewood",
        "hex": "#a75d67"
    },
    {
        "name": "rose-wine",
        "hex": "#a4596d"
    },
    {
        "name": "malaga",
        "hex": "#9f5069"
    },
    {
        "name": "dry-rose",
        "hex": "#8c4759"
    },
    {
        "name": "hawthorn-rose",
        "hex": "#884c5e"
    },
    {
        "name": "maroon",
        "hex": "#834655"
    },
    {
        "name": "wild-ginger",
        "hex": "#7c4c53"
    },
    {
        "name": "sangria",
        "hex": "#982551"
    },
    {
        "name": "red-bud",
        "hex": "#962d49"
    },
    {
        "name": "beaujolais",
        "hex": "#80304c"
    },
    {
        "name": "anemone",
        "hex": "#842c48"
    },
    {
        "name": "beet-red",
        "hex": "#7a1f3d"
    },
    {
        "name": "red-plum",
        "hex": "#7c2946"
    },
    {
        "name": "rhododendron",
        "hex": "#722b3f"
    },
    {
        "name": "barely-pink",
        "hex": "#f8d7dd"
    },
    {
        "name": "blushing-bride",
        "hex": "#fbd3d9"
    },
    {
        "name": "cradle-pink",
        "hex": "#edd0dd"
    },
    {
        "name": "pale-lilac",
        "hex": "#e1c6cc"
    },
    {
        "name": "chalk-pink",
        "hex": "#e6c5ca"
    },
    {
        "name": "light-lilac",
        "hex": "#dec6d3"
    },
    {
        "name": "pink-nectar",
        "hex": "#d8aab7"
    },
    {
        "name": "heavenly-pink",
        "hex": "#f4dede"
    },
    {
        "name": "potpourri",
        "hex": "#e7c9ca"
    },
    {
        "name": "crystal-pink",
        "hex": "#edd0ce"
    },
    {
        "name": "pink-dogwood",
        "hex": "#f7d1d1"
    },
    {
        "name": "crystal-rose",
        "hex": "#fdc3c6"
    },
    {
        "name": "strawberry-cream",
        "hex": "#f4c3c4"
    },
    {
        "name": "gossamer-pink",
        "hex": "#fac8c3"
    },
    {
        "name": "rose-shadow",
        "hex": "#f9c2cd"
    },
    {
        "name": "orchid-pink",
        "hex": "#f3bbca"
    },
    {
        "name": "almond-blossom",
        "hex": "#f5bec7"
    },
    {
        "name": "coral-blush",
        "hex": "#e6b2b8"
    },
    {
        "name": "candy-pink",
        "hex": "#f5b0bd"
    },
    {
        "name": "peony",
        "hex": "#ed9ca8"
    },
    {
        "name": "sea-pink",
        "hex": "#de98ab"
    },
    {
        "name": "cashmere-rose",
        "hex": "#ce879f"
    },
    {
        "name": "wild-rose",
        "hex": "#ce8498"
    },
    {
        "name": "orchid-smoke",
        "hex": "#d294aa"
    },
    {
        "name": "polignac",
        "hex": "#c28799"
    },
    {
        "name": "lilas",
        "hex": "#b88995"
    },
    {
        "name": "mauve-orchid",
        "hex": "#b58299"
    },
    {
        "name": "orchid-haze",
        "hex": "#b0879b"
    },
    {
        "name": "parfait-pink",
        "hex": "#e9c3cf"
    },
    {
        "name": "pink-mist",
        "hex": "#e6bccd"
    },
    {
        "name": "cameo-pink",
        "hex": "#dba9b8"
    },
    {
        "name": "sweet-lilac",
        "hex": "#e8b5ce"
    },
    {
        "name": "pink-lavender",
        "hex": "#d9afca"
    },
    {
        "name": "pastel-lavender",
        "hex": "#d8a1c4"
    },
    {
        "name": "orchid",
        "hex": "#d198c5"
    },
    {
        "name": "lilac-chiffon",
        "hex": "#de9bc4"
    },
    {
        "name": "moonlite-mauve",
        "hex": "#d28fb0"
    },
    {
        "name": "cyclamen",
        "hex": "#d687ba"
    },
    {
        "name": "opera-mauve",
        "hex": "#ca80b1"
    },
    {
        "name": "crocus",
        "hex": "#c67fae"
    },
    {
        "name": "mulberry",
        "hex": "#a76c97"
    },
    {
        "name": "striking-purple",
        "hex": "#944e87"
    },
    {
        "name": "violet",
        "hex": "#c17fb5"
    },
    {
        "name": "iris-orchid",
        "hex": "#a767a2"
    },
    {
        "name": "radiant-orchid",
        "hex": "#ad5e99"
    },
    {
        "name": "spring-crocus",
        "hex": "#ba69a1"
    },
    {
        "name": "meadow-mauve",
        "hex": "#a9568c"
    },
    {
        "name": "amethyst",
        "hex": "#864d75"
    },
    {
        "name": "magenta-purple",
        "hex": "#6b264b"
    },
    {
        "name": "rosebud",
        "hex": "#b65f9a"
    },
    {
        "name": "purple-orchid",
        "hex": "#ad4d8c"
    },
    {
        "name": "festival-fuchsia",
        "hex": "#9e2c6a"
    },
    {
        "name": "baton-rouge",
        "hex": "#973c6c"
    },
    {
        "name": "boysenberry",
        "hex": "#85325c"
    },
    {
        "name": "raspberry-radiance",
        "hex": "#802a50"
    },
    {
        "name": "purple-potion",
        "hex": "#692746"
    },
    {
        "name": "dahlia-mauve",
        "hex": "#a64f82"
    },
    {
        "name": "vivid-viola",
        "hex": "#993c7c"
    },
    {
        "name": "wild-aster",
        "hex": "#92316f"
    },
    {
        "name": "deep-orchid",
        "hex": "#903f75"
    },
    {
        "name": "clover",
        "hex": "#8a3371"
    },
    {
        "name": "purple-wine",
        "hex": "#8c3573"
    },
    {
        "name": "hollyhock",
        "hex": "#823270"
    },
    {
        "name": "hyacinth-violet",
        "hex": "#8d4687"
    },
    {
        "name": "dahlia",
        "hex": "#843e83"
    },
    {
        "name": "sparkling-grape",
        "hex": "#773376"
    },
    {
        "name": "byzantium",
        "hex": "#853b7b"
    },
    {
        "name": "phlox",
        "hex": "#692d5d"
    },
    {
        "name": "grape-juice",
        "hex": "#682961"
    },
    {
        "name": "gloxinia",
        "hex": "#622e5a"
    },
    {
        "name": "crystal-gray",
        "hex": "#d7cbc4"
    },
    {
        "name": "mushroom",
        "hex": "#bdaca3"
    },
    {
        "name": "shadow-gray",
        "hex": "#bba5a0"
    },
    {
        "name": "sphinx",
        "hex": "#ab9895"
    },
    {
        "name": "bark",
        "hex": "#a99592"
    },
    {
        "name": "fawn",
        "hex": "#ae9490"
    },
    {
        "name": "adobe-rose",
        "hex": "#ba9f99"
    },
    {
        "name": "pale-mauve",
        "hex": "#c6a4a4"
    },
    {
        "name": "woodrose",
        "hex": "#ae8c8e"
    },
    {
        "name": "deauville-mauve",
        "hex": "#af9294"
    },
    {
        "name": "twilight-mauve",
        "hex": "#8b6f70"
    },
    {
        "name": "rose-taupe",
        "hex": "#806062"
    },
    {
        "name": "rose-brown",
        "hex": "#80565b"
    },
    {
        "name": "roan-rouge",
        "hex": "#885157"
    },
    {
        "name": "antler",
        "hex": "#957a76"
    },
    {
        "name": "peppercorn",
        "hex": "#6c5656"
    },
    {
        "name": "raisin",
        "hex": "#524144"
    },
    {
        "name": "huckleberry",
        "hex": "#5b4349"
    },
    {
        "name": "catawba-grape",
        "hex": "#5d3c43"
    },
    {
        "name": "puce",
        "hex": "#503938"
    },
    {
        "name": "fudge",
        "hex": "#493338"
    },
    {
        "name": "mahogany-rose",
        "hex": "#c5a193"
    },
    {
        "name": "burlwood",
        "hex": "#9b716b"
    },
    {
        "name": "marron",
        "hex": "#6e4c4b"
    },
    {
        "name": "decadent-chocolate",
        "hex": "#513235"
    },
    {
        "name": "red-mahogany",
        "hex": "#60373d"
    },
    {
        "name": "vineyard-wine",
        "hex": "#58363d"
    },
    {
        "name": "winetasting",
        "hex": "#492a34"
    },
    {
        "name": "port",
        "hex": "#663336"
    },
    {
        "name": "chocolate-truffle",
        "hex": "#612e35"
    },
    {
        "name": "burgundy",
        "hex": "#64313e"
    },
    {
        "name": "zinfandel",
        "hex": "#5c2935"
    },
    {
        "name": "windsor-wine",
        "hex": "#582b36"
    },
    {
        "name": "port-royale",
        "hex": "#502b33"
    },
    {
        "name": "fig",
        "hex": "#532d3b"
    },
    {
        "name": "violet-ice",
        "hex": "#c2acb1"
    },
    {
        "name": "burnished-lilac",
        "hex": "#c5aeb1"
    },
    {
        "name": "keepsake-lilac",
        "hex": "#c0a5ae"
    },
    {
        "name": "mauve-shadows",
        "hex": "#b598a3"
    },
    {
        "name": "dawn-pink",
        "hex": "#bfa3af"
    },
    {
        "name": "fragrant-lilac",
        "hex": "#ceadbe"
    },
    {
        "name": "mauve-mist",
        "hex": "#c49bd4"
    },
    {
        "name": "heather-rose",
        "hex": "#ad6d7f"
    },
    {
        "name": "red-violet",
        "hex": "#a35776"
    },
    {
        "name": "mellow-mauve",
        "hex": "#996378"
    },
    {
        "name": "bordeaux",
        "hex": "#96637b"
    },
    {
        "name": "violet-quartz",
        "hex": "#8b4963"
    },
    {
        "name": "damson",
        "hex": "#854c65"
    },
    {
        "name": "amaranth",
        "hex": "#6f3c56"
    },
    {
        "name": "zephyr",
        "hex": "#c89fa5"
    },
    {
        "name": "dusky-orchid",
        "hex": "#9a7182"
    },
    {
        "name": "grape-shake",
        "hex": "#886971"
    },
    {
        "name": "wistful-mauve",
        "hex": "#946c74"
    },
    {
        "name": "tulipwood",
        "hex": "#805466"
    },
    {
        "name": "grape-nectar",
        "hex": "#8d5c74"
    },
    {
        "name": "argyle-purple",
        "hex": "#895c79"
    },
    {
        "name": "nostalgia-rose",
        "hex": "#a4777e"
    },
    {
        "name": "deco-rose",
        "hex": "#985f68"
    },
    {
        "name": "renaissance-rose",
        "hex": "#865560"
    },
    {
        "name": "nocturne",
        "hex": "#7a4b56"
    },
    {
        "name": "crushed-berry",
        "hex": "#804f5a"
    },
    {
        "name": "crushed-violets",
        "hex": "#643a4c"
    },
    {
        "name": "mauve-wine",
        "hex": "#5b3644"
    },
    {
        "name": "plum-wine",
        "hex": "#674550"
    },
    {
        "name": "eggplant",
        "hex": "#613f4c"
    },
    {
        "name": "prune",
        "hex": "#603749"
    },
    {
        "name": "prune-purple",
        "hex": "#5c3a4d"
    },
    {
        "name": "grape-wine",
        "hex": "#5a2f43"
    },
    {
        "name": "italian-plum",
        "hex": "#533146"
    },
    {
        "name": "potent-purple",
        "hex": "#462639"
    },
    {
        "name": "lavender-herb",
        "hex": "#b18eaa"
    },
    {
        "name": "lavender-mist",
        "hex": "#ae90a7"
    },
    {
        "name": "valerian",
        "hex": "#9f7a93"
    },
    {
        "name": "very-grape",
        "hex": "#927288"
    },
    {
        "name": "grapeade",
        "hex": "#85677b"
    },
    {
        "name": "purple-gumdrop",
        "hex": "#7a596f"
    },
    {
        "name": "berry-conserve",
        "hex": "#765269"
    },
    {
        "name": "chinese-violet",
        "hex": "#835e81"
    },
    {
        "name": "crushed-grape",
        "hex": "#7a547f"
    },
    {
        "name": "concord-grape",
        "hex": "#7c5379"
    },
    {
        "name": "sunset-purple",
        "hex": "#6f456e"
    },
    {
        "name": "wood-violet",
        "hex": "#75406a"
    },
    {
        "name": "purple-passion",
        "hex": "#683d62"
    },
    {
        "name": "dark-purple",
        "hex": "#582147"
    },
    {
        "name": "grape-jam",
        "hex": "#725671"
    },
    {
        "name": "deep-purple",
        "hex": "#50314c"
    },
    {
        "name": "wineberry",
        "hex": "#5a395b"
    },
    {
        "name": "grape-royale",
        "hex": "#4f2d54"
    },
    {
        "name": "plum-purple",
        "hex": "#51304e"
    },
    {
        "name": "hortensia",
        "hex": "#553b50"
    },
    {
        "name": "blackberry-wine",
        "hex": "#4d3246"
    },
    {
        "name": "navy-cosmos",
        "hex": "#503b53"
    },
    {
        "name": "indigo",
        "hex": "#4c3957"
    },
    {
        "name": "purple-pennant",
        "hex": "#432c47"
    },
    {
        "name": "plum-perfect",
        "hex": "#473442"
    },
    {
        "name": "sweet-grape",
        "hex": "#4b3b4f"
    },
    {
        "name": "shadow-purple",
        "hex": "#4e334e"
    },
    {
        "name": "blackberry-cordial",
        "hex": "#3f2a47"
    },
    {
        "name": "purple-reign",
        "hex": "#56456b"
    },
    {
        "name": "mulberry-purple",
        "hex": "#493c62"
    },
    {
        "name": "gothic-grape",
        "hex": "#473951"
    },
    {
        "name": "grape",
        "hex": "#433455"
    },
    {
        "name": "mysterioso",
        "hex": "#46394b"
    },
    {
        "name": "purple-velvet",
        "hex": "#41354d"
    },
    {
        "name": "nightshade",
        "hex": "#433748"
    },
    {
        "name": "orchid-tint",
        "hex": "#dbd2db"
    },
    {
        "name": "lilac-ash",
        "hex": "#d7cdcd"
    },
    {
        "name": "gray-lilac",
        "hex": "#d4cacd"
    },
    {
        "name": "hushed-violet",
        "hex": "#d1c0bf"
    },
    {
        "name": "cloud-gray",
        "hex": "#b7a9ac"
    },
    {
        "name": "quail",
        "hex": "#98868c"
    },
    {
        "name": "nirvana",
        "hex": "#a2919b"
    },
    {
        "name": "orchid-hush",
        "hex": "#cec3d2"
    },
    {
        "name": "iris",
        "hex": "#baafbc"
    },
    {
        "name": "sea-fog",
        "hex": "#a5929d"
    },
    {
        "name": "elderberry",
        "hex": "#9d848e"
    },
    {
        "name": "black-plum",
        "hex": "#6c5765"
    },
    {
        "name": "flint",
        "hex": "#705861"
    },
    {
        "name": "sassafras",
        "hex": "#54353b"
    },
    {
        "name": "evening-haze",
        "hex": "#bdb8c7"
    },
    {
        "name": "thistle",
        "hex": "#b9b3c5"
    },
    {
        "name": "lavender-gray",
        "hex": "#9890a2"
    },
    {
        "name": "minimal-gray",
        "hex": "#948d99"
    },
    {
        "name": "purple-ash",
        "hex": "#8f8395"
    },
    {
        "name": "gray-ridge",
        "hex": "#847986"
    },
    {
        "name": "purple-sage",
        "hex": "#75697e"
    },
    {
        "name": "heirloom-lilac",
        "hex": "#9d96b2"
    },
    {
        "name": "wisteria",
        "hex": "#a198af"
    },
    {
        "name": "dusk",
        "hex": "#897f98"
    },
    {
        "name": "daybreak",
        "hex": "#8981a0"
    },
    {
        "name": "cadet",
        "hex": "#6a6378"
    },
    {
        "name": "mulled-grape",
        "hex": "#675a74"
    },
    {
        "name": "purple-plumeria",
        "hex": "#473854"
    },
    {
        "name": "lilac-marble",
        "hex": "#c3babf"
    },
    {
        "name": "ashes-of-roses",
        "hex": "#b5acab"
    },
    {
        "name": "gull-gray",
        "hex": "#a49ca0"
    },
    {
        "name": "zinc",
        "hex": "#92898a"
    },
    {
        "name": "gull",
        "hex": "#918c8f"
    },
    {
        "name": "shark",
        "hex": "#6d636b"
    },
    {
        "name": "sparrow",
        "hex": "#69595c"
    },
    {
        "name": "orchid-ice",
        "hex": "#e0d0db"
    },
    {
        "name": "lilac-snow",
        "hex": "#e0c7d7"
    },
    {
        "name": "winsome-orchid",
        "hex": "#d4b9cb"
    },
    {
        "name": "fair-orchid",
        "hex": "#c0aac0"
    },
    {
        "name": "lavender-frost",
        "hex": "#bdabbe"
    },
    {
        "name": "orchid-petal",
        "hex": "#bfb4cb"
    },
    {
        "name": "pastel-lilac",
        "hex": "#bdb0d0"
    },
    {
        "name": "orchid-bloom",
        "hex": "#c5aecf"
    },
    {
        "name": "orchid-bouquet",
        "hex": "#d1acce"
    },
    {
        "name": "lupine",
        "hex": "#be9cc1"
    },
    {
        "name": "violet-tulle",
        "hex": "#c193c0"
    },
    {
        "name": "sheer-lilac",
        "hex": "#b793c0"
    },
    {
        "name": "african-violet",
        "hex": "#b085b7"
    },
    {
        "name": "dusty-lavender",
        "hex": "#a1759c"
    },
    {
        "name": "paisley-purple",
        "hex": "#8b79b1"
    },
    {
        "name": "hyacinth",
        "hex": "#936ca7"
    },
    {
        "name": "amethyst-orchid",
        "hex": "#926aa6"
    },
    {
        "name": "dewberry",
        "hex": "#8b5987"
    },
    {
        "name": "purple-heart",
        "hex": "#745587"
    },
    {
        "name": "meadow-violet",
        "hex": "#764f82"
    },
    {
        "name": "royal-purple",
        "hex": "#603f83"
    },
    {
        "name": "deep-lavender",
        "hex": "#775496"
    },
    {
        "name": "royal-lilac",
        "hex": "#774d8e"
    },
    {
        "name": "pansy",
        "hex": "#653d7c"
    },
    {
        "name": "bright-violet",
        "hex": "#784384"
    },
    {
        "name": "amaranth-purple",
        "hex": "#6a397b"
    },
    {
        "name": "purple-magic",
        "hex": "#663271"
    },
    {
        "name": "plum",
        "hex": "#5a315d"
    },
    {
        "name": "imperial-palace",
        "hex": "#604e7a"
    },
    {
        "name": "patrician-purple",
        "hex": "#6c4e79"
    },
    {
        "name": "loganberry",
        "hex": "#5a4769"
    },
    {
        "name": "majesty",
        "hex": "#593761"
    },
    {
        "name": "imperial-purple",
        "hex": "#542c5d"
    },
    {
        "name": "crown-jewel",
        "hex": "#482d54"
    },
    {
        "name": "parachute-purple",
        "hex": "#392852"
    },
    {
        "name": "lavender-fog",
        "hex": "#d2c4d6"
    },
    {
        "name": "lavendula",
        "hex": "#bca4cb"
    },
    {
        "name": "lavender",
        "hex": "#afa4ce"
    },
    {
        "name": "bougainvillea",
        "hex": "#9884b9"
    },
    {
        "name": "violet-tulip",
        "hex": "#9e91c3"
    },
    {
        "name": "chalk-violet",
        "hex": "#8f7da5"
    },
    {
        "name": "purple-haze",
        "hex": "#807396"
    },
    {
        "name": "smoky-grape",
        "hex": "#b88aac"
    },
    {
        "name": "regal-orchid",
        "hex": "#a98baf"
    },
    {
        "name": "viola",
        "hex": "#a692ba"
    },
    {
        "name": "orchid-mist",
        "hex": "#917798"
    },
    {
        "name": "grape-compote",
        "hex": "#6b5876"
    },
    {
        "name": "montana-grape",
        "hex": "#6c5971"
    },
    {
        "name": "vintage-violet",
        "hex": "#634f62"
    },
    {
        "name": "aster-purple",
        "hex": "#7d74a8"
    },
    {
        "name": "dahlia-purple",
        "hex": "#7e6eac"
    },
    {
        "name": "passion-flower",
        "hex": "#6d5698"
    },
    {
        "name": "ultra-violet",
        "hex": "#5f4b8b"
    },
    {
        "name": "prism-violet",
        "hex": "#53357d"
    },
    {
        "name": "heliotrope",
        "hex": "#4f3872"
    },
    {
        "name": "petunia",
        "hex": "#4f3466"
    },
    {
        "name": "corsican-blue",
        "hex": "#646093"
    },
    {
        "name": "veronica",
        "hex": "#6d6695"
    },
    {
        "name": "blue-iris",
        "hex": "#5a5b9f"
    },
    {
        "name": "purple-opulence",
        "hex": "#60569a"
    },
    {
        "name": "gentian-violet",
        "hex": "#544275"
    },
    {
        "name": "liberty",
        "hex": "#4d448a"
    },
    {
        "name": "deep-blue",
        "hex": "#44377d"
    },
    {
        "name": "bleached-denim",
        "hex": "#646f9b"
    },
    {
        "name": "heron",
        "hex": "#62617e"
    },
    {
        "name": "skipper-blue",
        "hex": "#484a72"
    },
    {
        "name": "navy-blue",
        "hex": "#403f6f"
    },
    {
        "name": "deep-wisteria",
        "hex": "#443f6f"
    },
    {
        "name": "blue-ribbon",
        "hex": "#3a395f"
    },
    {
        "name": "astral-aura",
        "hex": "#363151"
    },
    {
        "name": "lilac-hint",
        "hex": "#d0d0da"
    },
    {
        "name": "misty-lilac",
        "hex": "#bcb4c4"
    },
    {
        "name": "lavender-blue",
        "hex": "#c5c0d0"
    },
    {
        "name": "purple-heather",
        "hex": "#bab8d3"
    },
    {
        "name": "cosmic-sky",
        "hex": "#aaaac4"
    },
    {
        "name": "languid-lavender",
        "hex": "#a2a1ba"
    },
    {
        "name": "dapple-gray",
        "hex": "#9c9ba7"
    },
    {
        "name": "sweet-lavender",
        "hex": "#9a9bc1"
    },
    {
        "name": "easter-egg",
        "hex": "#919bc9"
    },
    {
        "name": "jacaranda",
        "hex": "#848dc5"
    },
    {
        "name": "deep-periwinkle",
        "hex": "#7c83bc"
    },
    {
        "name": "dusted-peri",
        "hex": "#696ba0"
    },
    {
        "name": "violet-storm",
        "hex": "#5c619d"
    },
    {
        "name": "baja-blue",
        "hex": "#5f6db0"
    },
    {
        "name": "thistle-down",
        "hex": "#9499bb"
    },
    {
        "name": "persian-violet",
        "hex": "#8c8eb2"
    },
    {
        "name": "twilight-purple",
        "hex": "#66648b"
    },
    {
        "name": "orient-blue",
        "hex": "#47457a"
    },
    {
        "name": "clematis-blue",
        "hex": "#363b7c"
    },
    {
        "name": "royal-blue",
        "hex": "#3d428b"
    },
    {
        "name": "spectrum-blue",
        "hex": "#3d3c7c"
    },
    {
        "name": "lavender-violet",
        "hex": "#767ba5"
    },
    {
        "name": "blue-ice",
        "hex": "#70789b"
    },
    {
        "name": "velvet-morning",
        "hex": "#60688d"
    },
    {
        "name": "marlin",
        "hex": "#515b87"
    },
    {
        "name": "blueprint",
        "hex": "#2d3359"
    },
    {
        "name": "blue-depths",
        "hex": "#263056"
    },
    {
        "name": "medieval-blue",
        "hex": "#29304e"
    },
    {
        "name": "lavender-aura",
        "hex": "#9f99aa"
    },
    {
        "name": "stonewash",
        "hex": "#74809a"
    },
    {
        "name": "nightshadow-blue",
        "hex": "#4e5368"
    },
    {
        "name": "blue-indigo",
        "hex": "#49516d"
    },
    {
        "name": "graystone",
        "hex": "#4d495b"
    },
    {
        "name": "crown-blue",
        "hex": "#464b65"
    },
    {
        "name": "deep-cobalt",
        "hex": "#404466"
    },
    {
        "name": "arctic-ice",
        "hex": "#bfc7d6"
    },
    {
        "name": "gray-dawn",
        "hex": "#bbc1cc"
    },
    {
        "name": "heather",
        "hex": "#b7c0d6"
    },
    {
        "name": "eventide",
        "hex": "#959eb7"
    },
    {
        "name": "silver-lake-blue",
        "hex": "#618bb9"
    },
    {
        "name": "blue-bonnet",
        "hex": "#6384b8"
    },
    {
        "name": "blue-yonder",
        "hex": "#5a77a8"
    },
    {
        "name": "lavender-lustre",
        "hex": "#8c9cc1"
    },
    {
        "name": "purple-impression",
        "hex": "#858fb1"
    },
    {
        "name": "grapemist",
        "hex": "#8398ca"
    },
    {
        "name": "vista-blue",
        "hex": "#81a0d4"
    },
    {
        "name": "cornflower-blue",
        "hex": "#7391c8"
    },
    {
        "name": "persian-jewel",
        "hex": "#6e81be"
    },
    {
        "name": "wedgewood",
        "hex": "#6479b3"
    },
    {
        "name": "skyway",
        "hex": "#adbed3"
    },
    {
        "name": "cashmere-blue",
        "hex": "#a5b8d0"
    },
    {
        "name": "blue-bell",
        "hex": "#93b4d7"
    },
    {
        "name": "placid-blue",
        "hex": "#8cadd3"
    },
    {
        "name": "della-robbia-blue",
        "hex": "#7a9dcb"
    },
    {
        "name": "provence",
        "hex": "#658dc6"
    },
    {
        "name": "ultramarine",
        "hex": "#5b7ebd"
    },
    {
        "name": "allure",
        "hex": "#7291b4"
    },
    {
        "name": "colony-blue",
        "hex": "#65769a"
    },
    {
        "name": "moonlight-blue",
        "hex": "#506886"
    },
    {
        "name": "dutch-blue",
        "hex": "#4a638d"
    },
    {
        "name": "delft",
        "hex": "#3d5e8c"
    },
    {
        "name": "limoges",
        "hex": "#243f6c"
    },
    {
        "name": "estate-blue",
        "hex": "#233658"
    },
    {
        "name": "infinity",
        "hex": "#6e7e99"
    },
    {
        "name": "bijou-blue",
        "hex": "#4e5e7f"
    },
    {
        "name": "coastal-fjord",
        "hex": "#505d7e"
    },
    {
        "name": "true-navy",
        "hex": "#3f5277"
    },
    {
        "name": "ensign-blue",
        "hex": "#384c67"
    },
    {
        "name": "dark-denim",
        "hex": "#35465e"
    },
    {
        "name": "insignia-blue",
        "hex": "#2f3e55"
    },
    {
        "name": "air-blue",
        "hex": "#77acc7"
    },
    {
        "name": "heritage-blue",
        "hex": "#5d96bc"
    },
    {
        "name": "ethereal-blue",
        "hex": "#5ca6ce"
    },
    {
        "name": "bonnie-blue",
        "hex": "#539ccc"
    },
    {
        "name": "cendre-blue",
        "hex": "#3e7fa5"
    },
    {
        "name": "parisian-blue",
        "hex": "#4f7ca4"
    },
    {
        "name": "faience",
        "hex": "#2a6a8b"
    },
    {
        "name": "alaskan-blue",
        "hex": "#6da9d2"
    },
    {
        "name": "little-boy-blue",
        "hex": "#6ea2d5"
    },
    {
        "name": "azure-blue",
        "hex": "#4d91c6"
    },
    {
        "name": "riviera",
        "hex": "#5879a2"
    },
    {
        "name": "federal-blue",
        "hex": "#43628b"
    },
    {
        "name": "star-sapphire",
        "hex": "#386192"
    },
    {
        "name": "bright-cobalt",
        "hex": "#385d8d"
    },
    {
        "name": "dusk-blue",
        "hex": "#7ba0c0"
    },
    {
        "name": "regatta",
        "hex": "#487ab7"
    },
    {
        "name": "palace-blue",
        "hex": "#346cb0"
    },
    {
        "name": "strong-blue",
        "hex": "#1f5da0"
    },
    {
        "name": "turkish-sea",
        "hex": "#195190"
    },
    {
        "name": "olympian-blue",
        "hex": "#1a4c8b"
    },
    {
        "name": "classic-blue",
        "hex": "#0f4c81"
    },
    {
        "name": "marina",
        "hex": "#4f84c4"
    },
    {
        "name": "campanula",
        "hex": "#3272af"
    },
    {
        "name": "daphne",
        "hex": "#0f5f9a"
    },
    {
        "name": "victoria-blue",
        "hex": "#08589d"
    },
    {
        "name": "snorkel-blue",
        "hex": "#034f84"
    },
    {
        "name": "nautical-blue",
        "hex": "#1a5091"
    },
    {
        "name": "princess-blue",
        "hex": "#00539c"
    },
    {
        "name": "dazzling-blue",
        "hex": "#3850a0"
    },
    {
        "name": "amparo-blue",
        "hex": "#4960a8"
    },
    {
        "name": "deep-ultramarine",
        "hex": "#384883"
    },
    {
        "name": "surf-the-web",
        "hex": "#203c7f"
    },
    {
        "name": "mazarine-blue",
        "hex": "#273c76"
    },
    {
        "name": "true-blue",
        "hex": "#1e4477"
    },
    {
        "name": "twilight-blue",
        "hex": "#313d64"
    },
    {
        "name": "kentucky-blue",
        "hex": "#a5b3cc"
    },
    {
        "name": "cerulean",
        "hex": "#9bb7d4"
    },
    {
        "name": "powder-blue",
        "hex": "#96b3d2"
    },
    {
        "name": "forever-blue",
        "hex": "#899bb8"
    },
    {
        "name": "tempest",
        "hex": "#79839b"
    },
    {
        "name": "country-blue",
        "hex": "#717f9b"
    },
    {
        "name": "english-manor",
        "hex": "#7181a4"
    },
    {
        "name": "illusion-blue",
        "hex": "#c9d3dc"
    },
    {
        "name": "ballad-blue",
        "hex": "#c0ceda"
    },
    {
        "name": "baby-blue",
        "hex": "#b5c7d3"
    },
    {
        "name": "celestial-blue",
        "hex": "#a3b4c4"
    },
    {
        "name": "blue-fog",
        "hex": "#9babbb"
    },
    {
        "name": "flint-stone",
        "hex": "#677283"
    },
    {
        "name": "folkstone-gray",
        "hex": "#626879"
    },
    {
        "name": "pearl-blue",
        "hex": "#b0b7be"
    },
    {
        "name": "monument",
        "hex": "#84898c"
    },
    {
        "name": "dark-slate",
        "hex": "#46515a"
    },
    {
        "name": "midnight-navy",
        "hex": "#34414e"
    },
    {
        "name": "total-eclipse",
        "hex": "#2c313d"
    },
    {
        "name": "blue-graphite",
        "hex": "#323137"
    },
    {
        "name": "dark-navy",
        "hex": "#232f36"
    },
    {
        "name": "ice-flow",
        "hex": "#c6d2d2"
    },
    {
        "name": "quarry",
        "hex": "#98a0a5"
    },
    {
        "name": "griffin",
        "hex": "#8d8f8f"
    },
    {
        "name": "dark-shadow",
        "hex": "#4a4b4d"
    },
    {
        "name": "ombre-blue",
        "hex": "#434854"
    },
    {
        "name": "india-ink",
        "hex": "#3c3f4a"
    },
    {
        "name": "ebony",
        "hex": "#41424a"
    },
    {
        "name": "patriot-blue",
        "hex": "#363756"
    },
    {
        "name": "eclipse",
        "hex": "#343148"
    },
    {
        "name": "mood-indigo",
        "hex": "#353a4c"
    },
    {
        "name": "peacoat",
        "hex": "#2b2e43"
    },
    {
        "name": "black-iris",
        "hex": "#2b3042"
    },
    {
        "name": "dress-blues",
        "hex": "#2a3244"
    },
    {
        "name": "blue-nights",
        "hex": "#363b48"
    },
    {
        "name": "angel-falls",
        "hex": "#a3bdd3"
    },
    {
        "name": "dream-blue",
        "hex": "#a0bcd0"
    },
    {
        "name": "ashley-blue",
        "hex": "#8699ab"
    },
    {
        "name": "dusty-blue",
        "hex": "#8c9dad"
    },
    {
        "name": "indian-teal",
        "hex": "#3c586b"
    },
    {
        "name": "stargazer",
        "hex": "#39505c"
    },
    {
        "name": "orion-blue",
        "hex": "#3e4f5c"
    },
    {
        "name": "forget-me-not",
        "hex": "#8fadbd"
    },
    {
        "name": "faded-denim",
        "hex": "#798ea4"
    },
    {
        "name": "blue-shadow",
        "hex": "#66829a"
    },
    {
        "name": "coronet-blue",
        "hex": "#59728e"
    },
    {
        "name": "captains-blue",
        "hex": "#557088"
    },
    {
        "name": "copen-blue",
        "hex": "#516b84"
    },
    {
        "name": "china-blue",
        "hex": "#546477"
    },
    {
        "name": "adriatic-blue",
        "hex": "#5c899b"
    },
    {
        "name": "provincial-blue",
        "hex": "#5c798e"
    },
    {
        "name": "niagara",
        "hex": "#5487a4"
    },
    {
        "name": "blue-heaven",
        "hex": "#5b7e98"
    },
    {
        "name": "stellar",
        "hex": "#46647e"
    },
    {
        "name": "real-teal",
        "hex": "#405d73"
    },
    {
        "name": "majolica-blue",
        "hex": "#274357"
    },
    {
        "name": "starlight-blue",
        "hex": "#b5ced4"
    },
    {
        "name": "winter-sky",
        "hex": "#a9c0cb"
    },
    {
        "name": "stratosphere",
        "hex": "#9ec1cc"
    },
    {
        "name": "sterling-blue",
        "hex": "#a2b9c2"
    },
    {
        "name": "arona",
        "hex": "#879ba3"
    },
    {
        "name": "citadel",
        "hex": "#748995"
    },
    {
        "name": "blue-mirage",
        "hex": "#5c6d7c"
    },
    {
        "name": "cloud-blue",
        "hex": "#a2b6b9"
    },
    {
        "name": "ether",
        "hex": "#9eb6b8"
    },
    {
        "name": "cameo-blue",
        "hex": "#769da6"
    },
    {
        "name": "stone-blue",
        "hex": "#829ca5"
    },
    {
        "name": "tourmaline",
        "hex": "#86a1a9"
    },
    {
        "name": "smoke-blue",
        "hex": "#6d8994"
    },
    {
        "name": "bluestone",
        "hex": "#577284"
    },
    {
        "name": "aquamarine",
        "hex": "#9dc3d4"
    },
    {
        "name": "sky-blue",
        "hex": "#8abad3"
    },
    {
        "name": "milky-blue",
        "hex": "#72a8ba"
    },
    {
        "name": "blue-grotto",
        "hex": "#5cacce"
    },
    {
        "name": "norse-blue",
        "hex": "#4ca5c7"
    },
    {
        "name": "aquarius",
        "hex": "#3cadd4"
    },
    {
        "name": "maui-blue",
        "hex": "#52a2b4"
    },
    {
        "name": "blue-mist",
        "hex": "#5bacc3"
    },
    {
        "name": "river-blue",
        "hex": "#38afcd"
    },
    {
        "name": "cyan-blue",
        "hex": "#14a3c7"
    },
    {
        "name": "horizon-blue",
        "hex": "#289dbe"
    },
    {
        "name": "blue-moon",
        "hex": "#3686a0"
    },
    {
        "name": "bluejay",
        "hex": "#157ea0"
    },
    {
        "name": "mediterranean-blue",
        "hex": "#1478a7"
    },
    {
        "name": "bachelor-button",
        "hex": "#4abbd5"
    },
    {
        "name": "blue-atoll",
        "hex": "#00b1d2"
    },
    {
        "name": "vivid-blue",
        "hex": "#0088b0"
    },
    {
        "name": "hawaiian-ocean",
        "hex": "#008db9"
    },
    {
        "name": "blue-danube",
        "hex": "#0087b6"
    },
    {
        "name": "blue-jewel",
        "hex": "#007baa"
    },
    {
        "name": "methyl-blue",
        "hex": "#0074a8"
    },
    {
        "name": "malibu-blue",
        "hex": "#008cc1"
    },
    {
        "name": "blithe",
        "hex": "#0084bd"
    },
    {
        "name": "swedish-blue",
        "hex": "#007eb1"
    },
    {
        "name": "dresden-blue",
        "hex": "#0086bb"
    },
    {
        "name": "diva-blue",
        "hex": "#007bb2"
    },
    {
        "name": "blue-aster",
        "hex": "#0077b3"
    },
    {
        "name": "cloisonne",
        "hex": "#0075af"
    },
    {
        "name": "french-blue",
        "hex": "#0072b5"
    },
    {
        "name": "brilliant-blue",
        "hex": "#0075b3"
    },
    {
        "name": "directoire-blue",
        "hex": "#0061a3"
    },
    {
        "name": "skydiver",
        "hex": "#00589b"
    },
    {
        "name": "imperial-blue",
        "hex": "#005a92"
    },
    {
        "name": "deep-water",
        "hex": "#266691"
    },
    {
        "name": "dark-blue",
        "hex": "#305679"
    },
    {
        "name": "pastel-blue",
        "hex": "#bcd3d5"
    },
    {
        "name": "clearwater",
        "hex": "#aad5db"
    },
    {
        "name": "blue-glow",
        "hex": "#b2d4dd"
    },
    {
        "name": "plume",
        "hex": "#a5cfd5"
    },
    {
        "name": "porcelain-blue",
        "hex": "#95c0cb"
    },
    {
        "name": "crystal-blue",
        "hex": "#a1c8db"
    },
    {
        "name": "petit-four",
        "hex": "#87c2d4"
    },
    {
        "name": "wan-blue",
        "hex": "#cbdcdf"
    },
    {
        "name": "whispering-blue",
        "hex": "#c9dcdc"
    },
    {
        "name": "skylight",
        "hex": "#c8e0e0"
    },
    {
        "name": "aquatic",
        "hex": "#99c1cc"
    },
    {
        "name": "marine-blue",
        "hex": "#76afb6"
    },
    {
        "name": "reef-waters",
        "hex": "#6f9fa9"
    },
    {
        "name": "arctic",
        "hex": "#648589"
    },
    {
        "name": "chalk-blue",
        "hex": "#ccdad7"
    },
    {
        "name": "pale-blue",
        "hex": "#c4d6d3"
    },
    {
        "name": "misty-blue",
        "hex": "#bfcdcc"
    },
    {
        "name": "sky-gray",
        "hex": "#bcc8c6"
    },
    {
        "name": "surf-spray",
        "hex": "#b4c8c2"
    },
    {
        "name": "gray-mist",
        "hex": "#99aeae"
    },
    {
        "name": "aquifer",
        "hex": "#89acac"
    },
    {
        "name": "blue-glass",
        "hex": "#c6e3e1"
    },
    {
        "name": "icy-morn",
        "hex": "#b0d3d1"
    },
    {
        "name": "canal-blue",
        "hex": "#9cc2c5"
    },
    {
        "name": "pastel-turquoise",
        "hex": "#99c5c4"
    },
    {
        "name": "aqua-haze",
        "hex": "#87b9bc"
    },
    {
        "name": "aqua-sea",
        "hex": "#6baaae"
    },
    {
        "name": "meadowbrook",
        "hex": "#60a0a3"
    },
    {
        "name": "glacier",
        "hex": "#c3dbd4"
    },
    {
        "name": "fair-aqua",
        "hex": "#b8e2dc"
    },
    {
        "name": "soothing-sea",
        "hex": "#c3e9e4"
    },
    {
        "name": "bleached-aqua",
        "hex": "#bce3df"
    },
    {
        "name": "blue-light",
        "hex": "#acdfdd"
    },
    {
        "name": "blue-tint",
        "hex": "#9fd9d7"
    },
    {
        "name": "aqua-sky",
        "hex": "#7bc4c4"
    },
    {
        "name": "morning-mist",
        "hex": "#cfdfdb"
    },
    {
        "name": "harbor-gray",
        "hex": "#a8c0bb"
    },
    {
        "name": "eggshell-blue",
        "hex": "#a3ccc9"
    },
    {
        "name": "dusty-turquoise",
        "hex": "#649b9e"
    },
    {
        "name": "porcelain",
        "hex": "#5d9ca4"
    },
    {
        "name": "brittany-blue",
        "hex": "#4c7e86"
    },
    {
        "name": "hydro",
        "hex": "#426972"
    },
    {
        "name": "blue-haze",
        "hex": "#a5bcbb"
    },
    {
        "name": "nile-blue",
        "hex": "#76a7ab"
    },
    {
        "name": "mineral-blue",
        "hex": "#6d9192"
    },
    {
        "name": "bristol-blue",
        "hex": "#558f91"
    },
    {
        "name": "teal",
        "hex": "#478589"
    },
    {
        "name": "blue-spruce",
        "hex": "#486b67"
    },
    {
        "name": "sagebrush-green",
        "hex": "#567572"
    },
    {
        "name": "green-milieu",
        "hex": "#8a9992"
    },
    {
        "name": "jadeite",
        "hex": "#95a69f"
    },
    {
        "name": "blue-surf",
        "hex": "#90a8a4"
    },
    {
        "name": "oil-blue",
        "hex": "#658c88"
    },
    {
        "name": "trellis",
        "hex": "#6a8988"
    },
    {
        "name": "north-atlantic",
        "hex": "#536d70"
    },
    {
        "name": "sea-pine",
        "hex": "#4c6969"
    },
    {
        "name": "slate",
        "hex": "#8c9fa1"
    },
    {
        "name": "silver-blue",
        "hex": "#8a9a9a"
    },
    {
        "name": "abyss",
        "hex": "#8f9e9d"
    },
    {
        "name": "lead",
        "hex": "#7a898f"
    },
    {
        "name": "stormy-sea",
        "hex": "#6e8082"
    },
    {
        "name": "trooper",
        "hex": "#697a7e"
    },
    {
        "name": "goblin-blue",
        "hex": "#5f7278"
    },
    {
        "name": "slate-gray",
        "hex": "#8a9691"
    },
    {
        "name": "chinois-green",
        "hex": "#7c8c87"
    },
    {
        "name": "dark-forest",
        "hex": "#556962"
    },
    {
        "name": "balsam-green",
        "hex": "#576664"
    },
    {
        "name": "beetle",
        "hex": "#55584c"
    },
    {
        "name": "urban-chic",
        "hex": "#464e4d"
    },
    {
        "name": "darkest-spruce",
        "hex": "#303d3c"
    },
    {
        "name": "mallard-blue",
        "hex": "#3a5c6e"
    },
    {
        "name": "celestial",
        "hex": "#006380"
    },
    {
        "name": "saxony-blue",
        "hex": "#1f6680"
    },
    {
        "name": "lyons-blue",
        "hex": "#005871"
    },
    {
        "name": "ink-blue",
        "hex": "#0b5369"
    },
    {
        "name": "corsair",
        "hex": "#18576c"
    },
    {
        "name": "legion-blue",
        "hex": "#1f495b"
    },
    {
        "name": "aegean-blue",
        "hex": "#4e6e81"
    },
    {
        "name": "bluesteel",
        "hex": "#35637c"
    },
    {
        "name": "blue-ashes",
        "hex": "#3b5f78"
    },
    {
        "name": "midnight",
        "hex": "#325b74"
    },
    {
        "name": "blue-sapphire",
        "hex": "#09577b"
    },
    {
        "name": "seaport",
        "hex": "#005e7d"
    },
    {
        "name": "moroccan-blue",
        "hex": "#0f4e67"
    },
    {
        "name": "ocean-depths",
        "hex": "#006175"
    },
    {
        "name": "blue-coral",
        "hex": "#1b5366"
    },
    {
        "name": "dragonfly",
        "hex": "#2a5c6a"
    },
    {
        "name": "pacific",
        "hex": "#1f595c"
    },
    {
        "name": "balsam",
        "hex": "#33565e"
    },
    {
        "name": "mediterranea",
        "hex": "#32575d"
    },
    {
        "name": "atlantic-deep",
        "hex": "#274e55"
    },
    {
        "name": "aqua",
        "hex": "#64a1ad"
    },
    {
        "name": "stillwater",
        "hex": "#70a4b0"
    },
    {
        "name": "delphinium-blue",
        "hex": "#6198ae"
    },
    {
        "name": "larkspur",
        "hex": "#3c7d90"
    },
    {
        "name": "storm-blue",
        "hex": "#47788a"
    },
    {
        "name": "tapestry",
        "hex": "#436573"
    },
    {
        "name": "colonial-blue",
        "hex": "#2d6471"
    },
    {
        "name": "peacock-blue",
        "hex": "#00a0b0"
    },
    {
        "name": "capri-breeze",
        "hex": "#008799"
    },
    {
        "name": "algiers-blue",
        "hex": "#00859c"
    },
    {
        "name": "caneel-bay",
        "hex": "#00849f"
    },
    {
        "name": "caribbean-sea",
        "hex": "#00819d"
    },
    {
        "name": "mosaic-blue",
        "hex": "#00758f"
    },
    {
        "name": "turkish-tile",
        "hex": "#00698b"
    },
    {
        "name": "angel-blue",
        "hex": "#83c5cd"
    },
    {
        "name": "blue-radiance",
        "hex": "#58c9d4"
    },
    {
        "name": "capri",
        "hex": "#44bbca"
    },
    {
        "name": "blue-curacao",
        "hex": "#32becc"
    },
    {
        "name": "scuba-blue",
        "hex": "#00abc0"
    },
    {
        "name": "bluebird",
        "hex": "#009dae"
    },
    {
        "name": "enamel-blue",
        "hex": "#007a8e"
    },
    {
        "name": "pool-blue",
        "hex": "#67bcb3"
    },
    {
        "name": "blue-turquoise",
        "hex": "#53b0ae"
    },
    {
        "name": "baltic",
        "hex": "#279d9f"
    },
    {
        "name": "lake-blue",
        "hex": "#008c96"
    },
    {
        "name": "tile-blue",
        "hex": "#008491"
    },
    {
        "name": "pagoda-blue",
        "hex": "#1a7f8e"
    },
    {
        "name": "biscay-bay",
        "hex": "#097988"
    },
    {
        "name": "aruba-blue",
        "hex": "#81d7d3"
    },
    {
        "name": "ceramic",
        "hex": "#00aaa9"
    },
    {
        "name": "viridian-green",
        "hex": "#009499"
    },
    {
        "name": "tropical-green",
        "hex": "#008786"
    },
    {
        "name": "navigate",
        "hex": "#008583"
    },
    {
        "name": "deep-peacock-blue",
        "hex": "#008381"
    },
    {
        "name": "lapis",
        "hex": "#008684"
    },
    {
        "name": "turquoise",
        "hex": "#45b5aa"
    },
    {
        "name": "waterfall",
        "hex": "#3ab0a2"
    },
    {
        "name": "lagoon",
        "hex": "#4d9e9a"
    },
    {
        "name": "bright-aqua",
        "hex": "#30a299"
    },
    {
        "name": "porcelain-green",
        "hex": "#108780"
    },
    {
        "name": "blue-grass",
        "hex": "#007c7a"
    },
    {
        "name": "fanfare",
        "hex": "#006d70"
    },
    {
        "name": "atlantis",
        "hex": "#00af9f"
    },
    {
        "name": "pool-green",
        "hex": "#00af9d"
    },
    {
        "name": "dynasty-green",
        "hex": "#008e80"
    },
    {
        "name": "spectra-green",
        "hex": "#009b8c"
    },
    {
        "name": "columbia",
        "hex": "#009288"
    },
    {
        "name": "teal-blue",
        "hex": "#007f7c"
    },
    {
        "name": "parasailing",
        "hex": "#00736c"
    },
    {
        "name": "wasabi",
        "hex": "#73a89e"
    },
    {
        "name": "beryl-green",
        "hex": "#619187"
    },
    {
        "name": "deep-sea",
        "hex": "#4f7c74"
    },
    {
        "name": "bottle-green",
        "hex": "#427d6d"
    },
    {
        "name": "galapagos-green",
        "hex": "#29685f"
    },
    {
        "name": "antique-green",
        "hex": "#29675c"
    },
    {
        "name": "storm",
        "hex": "#035453"
    },
    {
        "name": "marine-green",
        "hex": "#40a48e"
    },
    {
        "name": "sea-green",
        "hex": "#149c88"
    },
    {
        "name": "greenlake",
        "hex": "#007d69"
    },
    {
        "name": "tidepool",
        "hex": "#0a6f69"
    },
    {
        "name": "ivy",
        "hex": "#226c63"
    },
    {
        "name": "cadmium-green",
        "hex": "#00675b"
    },
    {
        "name": "alpine-green",
        "hex": "#005f56"
    },
    {
        "name": "canton",
        "hex": "#6da29e"
    },
    {
        "name": "agate-green",
        "hex": "#599f99"
    },
    {
        "name": "sea-blue",
        "hex": "#549f98"
    },
    {
        "name": "latigo-bay",
        "hex": "#379190"
    },
    {
        "name": "green-blue-slate",
        "hex": "#358082"
    },
    {
        "name": "bayou",
        "hex": "#20706f"
    },
    {
        "name": "north-sea",
        "hex": "#316c6b"
    },
    {
        "name": "deep-jungle",
        "hex": "#36716f"
    },
    {
        "name": "everglade",
        "hex": "#005b5d"
    },
    {
        "name": "teal-green",
        "hex": "#006361"
    },
    {
        "name": "harbor-blue",
        "hex": "#00656e"
    },
    {
        "name": "deep-lake",
        "hex": "#00656b"
    },
    {
        "name": "shaded-spruce",
        "hex": "#00585e"
    },
    {
        "name": "deep-teal",
        "hex": "#18454b"
    },
    {
        "name": "silver-pine",
        "hex": "#4e6866"
    },
    {
        "name": "mallard-green",
        "hex": "#405e5c"
    },
    {
        "name": "bistro-green",
        "hex": "#395551"
    },
    {
        "name": "jasper",
        "hex": "#335959"
    },
    {
        "name": "bayberry",
        "hex": "#255958"
    },
    {
        "name": "june-bug",
        "hex": "#264a48"
    },
    {
        "name": "ponderosa-pine",
        "hex": "#203b3d"
    },
    {
        "name": "aqua-glass",
        "hex": "#d2e8e0"
    },
    {
        "name": "opal-blue",
        "hex": "#c3ddd6"
    },
    {
        "name": "dusty-aqua",
        "hex": "#c0dccd"
    },
    {
        "name": "ocean-wave",
        "hex": "#8ec5b6"
    },
    {
        "name": "holiday",
        "hex": "#81c3b4"
    },
    {
        "name": "cascade",
        "hex": "#76c1b2"
    },
    {
        "name": "dusty-jade-green",
        "hex": "#7bb5a3"
    },
    {
        "name": "honeydew",
        "hex": "#bae1d3"
    },
    {
        "name": "brook-green",
        "hex": "#afddcc"
    },
    {
        "name": "cabbage",
        "hex": "#87d7be"
    },
    {
        "name": "beveled-glass",
        "hex": "#7accb8"
    },
    {
        "name": "opal",
        "hex": "#77cfb7"
    },
    {
        "name": "biscay-green",
        "hex": "#55c6a9"
    },
    {
        "name": "spearmint",
        "hex": "#64bfa4"
    },
    {
        "name": "moonlight-jade",
        "hex": "#c7e5df"
    },
    {
        "name": "bay",
        "hex": "#bae5d6"
    },
    {
        "name": "yucca",
        "hex": "#a1d7c9"
    },
    {
        "name": "beach-glass",
        "hex": "#96dfce"
    },
    {
        "name": "ice-green",
        "hex": "#87d8c3"
    },
    {
        "name": "cockatoo",
        "hex": "#58c8b6"
    },
    {
        "name": "florida-keys",
        "hex": "#56beab"
    },
    {
        "name": "bermuda",
        "hex": "#60c9b3"
    },
    {
        "name": "electric-green",
        "hex": "#4bc3a8"
    },
    {
        "name": "aqua-green",
        "hex": "#00b89f"
    },
    {
        "name": "billiard",
        "hex": "#00aa92"
    },
    {
        "name": "arcadia",
        "hex": "#00a28a"
    },
    {
        "name": "alhambra",
        "hex": "#008778"
    },
    {
        "name": "deep-green",
        "hex": "#009276"
    },
    {
        "name": "mint-leaf",
        "hex": "#00b694"
    },
    {
        "name": "peacock-green",
        "hex": "#00a78b"
    },
    {
        "name": "vivid-green",
        "hex": "#009e82"
    },
    {
        "name": "emerald",
        "hex": "#009473"
    },
    {
        "name": "viridis",
        "hex": "#00846b"
    },
    {
        "name": "shady-glade",
        "hex": "#006e5b"
    },
    {
        "name": "ultramarine-green",
        "hex": "#006b54"
    },
    {
        "name": "silt-green",
        "hex": "#a9bdb1"
    },
    {
        "name": "frosty-green",
        "hex": "#a3b5a6"
    },
    {
        "name": "iceberg-green",
        "hex": "#8c9c92"
    },
    {
        "name": "granite-green",
        "hex": "#86a293"
    },
    {
        "name": "green-bay",
        "hex": "#7e9285"
    },
    {
        "name": "lily-pad",
        "hex": "#818f84"
    },
    {
        "name": "laurel-wreath",
        "hex": "#616f65"
    },
    {
        "name": "green-spruce",
        "hex": "#589f7e"
    },
    {
        "name": "comfrey",
        "hex": "#5b7961"
    },
    {
        "name": "dark-ivy",
        "hex": "#5b7763"
    },
    {
        "name": "foliage-green",
        "hex": "#3e6f58"
    },
    {
        "name": "myrtle",
        "hex": "#4f6b58"
    },
    {
        "name": "posy-green",
        "hex": "#325b51"
    },
    {
        "name": "pineneedle",
        "hex": "#334d41"
    },
    {
        "name": "sea-spray",
        "hex": "#717e6f"
    },
    {
        "name": "duck-green",
        "hex": "#53665c"
    },
    {
        "name": "frosty-spruce",
        "hex": "#578270"
    },
    {
        "name": "fir",
        "hex": "#3a725f"
    },
    {
        "name": "evergreen",
        "hex": "#11574a"
    },
    {
        "name": "hunter-green",
        "hex": "#335749"
    },
    {
        "name": "dark-green",
        "hex": "#314f40"
    },
    {
        "name": "feldspar",
        "hex": "#729b8b"
    },
    {
        "name": "smoke-pine",
        "hex": "#3e6257"
    },
    {
        "name": "trekking-green",
        "hex": "#355048"
    },
    {
        "name": "garden-topiary",
        "hex": "#3e524b"
    },
    {
        "name": "jungle-green",
        "hex": "#3c4e47"
    },
    {
        "name": "sycamore",
        "hex": "#35463d"
    },
    {
        "name": "green-gables",
        "hex": "#324241"
    },
    {
        "name": "vetiver",
        "hex": "#807d6f"
    },
    {
        "name": "deep-lichen-green",
        "hex": "#6e6e5c"
    },
    {
        "name": "thyme",
        "hex": "#50574c"
    },
    {
        "name": "kombu-green",
        "hex": "#3a4032"
    },
    {
        "name": "deep-forest",
        "hex": "#37413a"
    },
    {
        "name": "forest-night",
        "hex": "#434237"
    },
    {
        "name": "rosin",
        "hex": "#36362d"
    },
    {
        "name": "celadon",
        "hex": "#b8ccba"
    },
    {
        "name": "pale-aqua",
        "hex": "#c1ccc2"
    },
    {
        "name": "smoke",
        "hex": "#bfc8c3"
    },
    {
        "name": "foggy-dew",
        "hex": "#d1d5d0"
    },
    {
        "name": "mercury",
        "hex": "#bac2ba"
    },
    {
        "name": "mineral-gray",
        "hex": "#b2b6ac"
    },
    {
        "name": "aqua-gray",
        "hex": "#a5b2aa"
    },
    {
        "name": "fairest-jade",
        "hex": "#d8e3d7"
    },
    {
        "name": "water-lily",
        "hex": "#dde3d5"
    },
    {
        "name": "canary-green",
        "hex": "#d6dec9"
    },
    {
        "name": "almost-aqua",
        "hex": "#cad3c1"
    },
    {
        "name": "green-tint",
        "hex": "#c5ccc0"
    },
    {
        "name": "sea-foam",
        "hex": "#b7c2b2"
    },
    {
        "name": "desert-sage",
        "hex": "#a7ae9e"
    },
    {
        "name": "whisper-green",
        "hex": "#e0e6d7"
    },
    {
        "name": "celadon-tint",
        "hex": "#cbcebe"
    },
    {
        "name": "dewkist",
        "hex": "#c4d1c2"
    },
    {
        "name": "green-lily",
        "hex": "#c1cec1"
    },
    {
        "name": "cameo-green",
        "hex": "#aac0ad"
    },
    {
        "name": "seagrass",
        "hex": "#959889"
    },
    {
        "name": "shadow",
        "hex": "#888d82"
    },
    {
        "name": "clearly-aqua",
        "hex": "#cee1d4"
    },
    {
        "name": "misty-jade",
        "hex": "#bcd9c8"
    },
    {
        "name": "subtle-green",
        "hex": "#b5cbbb"
    },
    {
        "name": "aqua-foam",
        "hex": "#adc3b4"
    },
    {
        "name": "gossamer-green",
        "hex": "#b2cfbe"
    },
    {
        "name": "lichen",
        "hex": "#9bc2b1"
    },
    {
        "name": "grayed-jade",
        "hex": "#9bbea9"
    },
    {
        "name": "milky-green",
        "hex": "#cfdbd1"
    },
    {
        "name": "phantom-green",
        "hex": "#dce4d7"
    },
    {
        "name": "mist-green",
        "hex": "#aacebc"
    },
    {
        "name": "birds-egg-green",
        "hex": "#aaccb9"
    },
    {
        "name": "bok-choy",
        "hex": "#bccab3"
    },
    {
        "name": "smoke-green",
        "hex": "#a8bba2"
    },
    {
        "name": "malachite-green",
        "hex": "#709a89"
    },
    {
        "name": "mistletoe",
        "hex": "#8aa282"
    },
    {
        "name": "basil",
        "hex": "#879f84"
    },
    {
        "name": "mineral-green",
        "hex": "#7a9b78"
    },
    {
        "name": "green-eyes",
        "hex": "#7d956d"
    },
    {
        "name": "turf-green",
        "hex": "#6f8c69"
    },
    {
        "name": "watercress",
        "hex": "#748c69"
    },
    {
        "name": "elm-green",
        "hex": "#547053"
    },
    {
        "name": "hedge-green",
        "hex": "#768a75"
    },
    {
        "name": "loden-frost",
        "hex": "#788f74"
    },
    {
        "name": "shale-green",
        "hex": "#739072"
    },
    {
        "name": "kashmir",
        "hex": "#6f8d6a"
    },
    {
        "name": "stone-green",
        "hex": "#658e67"
    },
    {
        "name": "english-ivy",
        "hex": "#61845b"
    },
    {
        "name": "deep-grass-green",
        "hex": "#558367"
    },
    {
        "name": "piquant-green",
        "hex": "#769358"
    },
    {
        "name": "forest-green",
        "hex": "#6b8d53"
    },
    {
        "name": "fluorite-green",
        "hex": "#699158"
    },
    {
        "name": "cactus",
        "hex": "#53713d"
    },
    {
        "name": "garden-green",
        "hex": "#495e35"
    },
    {
        "name": "artichoke-green",
        "hex": "#4b6d41"
    },
    {
        "name": "willow-bough",
        "hex": "#59754d"
    },
    {
        "name": "aspen-green",
        "hex": "#7e9b76"
    },
    {
        "name": "medium-green",
        "hex": "#3c824e"
    },
    {
        "name": "juniper",
        "hex": "#3d7245"
    },
    {
        "name": "fairway",
        "hex": "#477050"
    },
    {
        "name": "vineyard-green",
        "hex": "#5f7355"
    },
    {
        "name": "dill",
        "hex": "#6f7755"
    },
    {
        "name": "greener-pastures",
        "hex": "#37503d"
    },
    {
        "name": "four-leaf-clover",
        "hex": "#616652"
    },
    {
        "name": "bronze-green",
        "hex": "#525f48"
    },
    {
        "name": "chive",
        "hex": "#4a5335"
    },
    {
        "name": "cypress",
        "hex": "#545a3e"
    },
    {
        "name": "black-forest",
        "hex": "#414f3c"
    },
    {
        "name": "rifle-green",
        "hex": "#414832"
    },
    {
        "name": "duffel-bag",
        "hex": "#394034"
    },
    {
        "name": "ambrosia",
        "hex": "#d2e7ca"
    },
    {
        "name": "spray",
        "hex": "#bed3bb"
    },
    {
        "name": "pastel-green",
        "hex": "#b4d3b2"
    },
    {
        "name": "hemlock",
        "hex": "#97c1a1"
    },
    {
        "name": "sprucestone",
        "hex": "#9fc09c"
    },
    {
        "name": "meadow",
        "hex": "#8bba94"
    },
    {
        "name": "jadesheen",
        "hex": "#77a276"
    },
    {
        "name": "green-ash",
        "hex": "#a0daa9"
    },
    {
        "name": "greengage",
        "hex": "#8bc28c"
    },
    {
        "name": "ming",
        "hex": "#7cb08a"
    },
    {
        "name": "zephyr-green",
        "hex": "#7cb083"
    },
    {
        "name": "peapod",
        "hex": "#82b185"
    },
    {
        "name": "light-grass-green",
        "hex": "#7cb68e"
    },
    {
        "name": "absinthe-green",
        "hex": "#76b583"
    },
    {
        "name": "neptune-green",
        "hex": "#7fbb9e"
    },
    {
        "name": "creme-de-menthe",
        "hex": "#70a38d"
    },
    {
        "name": "winter-green",
        "hex": "#4f9e81"
    },
    {
        "name": "gumdrop-green",
        "hex": "#2ea785"
    },
    {
        "name": "holly-green",
        "hex": "#0f9d76"
    },
    {
        "name": "parakeet",
        "hex": "#008c69"
    },
    {
        "name": "golf-green",
        "hex": "#008763"
    },
    {
        "name": "spring-bud",
        "hex": "#6bcd9c"
    },
    {
        "name": "katydid",
        "hex": "#66bc91"
    },
    {
        "name": "jade-cream",
        "hex": "#60b892"
    },
    {
        "name": "ming-green",
        "hex": "#3aa278"
    },
    {
        "name": "greenbriar",
        "hex": "#4b9b69"
    },
    {
        "name": "leprechaun",
        "hex": "#378661"
    },
    {
        "name": "pine-green",
        "hex": "#3a795e"
    },
    {
        "name": "blarney",
        "hex": "#00a776"
    },
    {
        "name": "mint",
        "hex": "#00a170"
    },
    {
        "name": "deep-mint",
        "hex": "#009e6d"
    },
    {
        "name": "simply-green",
        "hex": "#009b75"
    },
    {
        "name": "pepper-green",
        "hex": "#007d60"
    },
    {
        "name": "bosphorus",
        "hex": "#007558"
    },
    {
        "name": "verdant-green",
        "hex": "#12674a"
    },
    {
        "name": "seacrest",
        "hex": "#bfd1b3"
    },
    {
        "name": "gleam",
        "hex": "#bfd1ad"
    },
    {
        "name": "nile-green",
        "hex": "#a7c796"
    },
    {
        "name": "quiet-green",
        "hex": "#9ebc97"
    },
    {
        "name": "fair-green",
        "hex": "#92af88"
    },
    {
        "name": "forest-shade",
        "hex": "#91ac80"
    },
    {
        "name": "jade-green",
        "hex": "#759465"
    },
    {
        "name": "patina-green",
        "hex": "#b9eab3"
    },
    {
        "name": "pistachio-green",
        "hex": "#a9d39e"
    },
    {
        "name": "arcadian-green",
        "hex": "#a3c893"
    },
    {
        "name": "grass-green",
        "hex": "#7bb369"
    },
    {
        "name": "bud-green",
        "hex": "#79b465"
    },
    {
        "name": "green-tea",
        "hex": "#86a96f"
    },
    {
        "name": "tendril",
        "hex": "#89a06b"
    },
    {
        "name": "paradise-green",
        "hex": "#b2e79f"
    },
    {
        "name": "lime-green",
        "hex": "#9fc131"
    },
    {
        "name": "jasmine-green",
        "hex": "#7ec845"
    },
    {
        "name": "green-flash",
        "hex": "#79c753"
    },
    {
        "name": "classic-green",
        "hex": "#39a845"
    },
    {
        "name": "online-lime",
        "hex": "#44883c"
    },
    {
        "name": "treetop",
        "hex": "#476a30"
    },
    {
        "name": "summer-green",
        "hex": "#7ed37f"
    },
    {
        "name": "spring-bouquet",
        "hex": "#6dce87"
    },
    {
        "name": "island-green",
        "hex": "#2bae66"
    },
    {
        "name": "irish-green",
        "hex": "#45be76"
    },
    {
        "name": "shamrock",
        "hex": "#6fa26b"
    },
    {
        "name": "peppermint",
        "hex": "#699e6d"
    },
    {
        "name": "mint-green",
        "hex": "#487d49"
    },
    {
        "name": "poison-green",
        "hex": "#4db560"
    },
    {
        "name": "vibrant-green",
        "hex": "#55a860"
    },
    {
        "name": "kelly-green",
        "hex": "#339c5e"
    },
    {
        "name": "bright-green",
        "hex": "#009b5c"
    },
    {
        "name": "fern-green",
        "hex": "#008c45"
    },
    {
        "name": "jelly-bean",
        "hex": "#008658"
    },
    {
        "name": "amazon",
        "hex": "#1f7349"
    },
    {
        "name": "green-glow",
        "hex": "#b0c965"
    },
    {
        "name": "bright-lime-green",
        "hex": "#97bc62"
    },
    {
        "name": "greenery",
        "hex": "#88b04b"
    },
    {
        "name": "foliage",
        "hex": "#75a14f"
    },
    {
        "name": "peridot",
        "hex": "#819548"
    },
    {
        "name": "meadow-green",
        "hex": "#739957"
    },
    {
        "name": "woodbine",
        "hex": "#7b7f32"
    },
    {
        "name": "jade-lime",
        "hex": "#a1ca7b"
    },
    {
        "name": "herbal-garden",
        "hex": "#9cad60"
    },
    {
        "name": "leaf-green",
        "hex": "#9faf6c"
    },
    {
        "name": "parrot-green",
        "hex": "#8db051"
    },
    {
        "name": "dark-citron",
        "hex": "#a0ac4f"
    },
    {
        "name": "macaw-green",
        "hex": "#9bb53e"
    },
    {
        "name": "kiwi",
        "hex": "#7aab55"
    },
    {
        "name": "sharp-green",
        "hex": "#c6ec7a"
    },
    {
        "name": "daiquiri-green",
        "hex": "#c9d77e"
    },
    {
        "name": "wild-lime",
        "hex": "#c3d363"
    },
    {
        "name": "linden-green",
        "hex": "#c4bf71"
    },
    {
        "name": "bright-chartreuse",
        "hex": "#b5bf50"
    },
    {
        "name": "tender-shoots",
        "hex": "#b5cc39"
    },
    {
        "name": "lime-punch",
        "hex": "#c0d725"
    },
    {
        "name": "sunny-lime",
        "hex": "#dfef87"
    },
    {
        "name": "limeade",
        "hex": "#d3d95f"
    },
    {
        "name": "sulphur-spring",
        "hex": "#d5d717"
    },
    {
        "name": "citronelle",
        "hex": "#b8af23"
    },
    {
        "name": "apple-green",
        "hex": "#b5b644"
    },
    {
        "name": "warm-olive",
        "hex": "#c7b63c"
    },
    {
        "name": "antique-moss",
        "hex": "#b9a023"
    },
    {
        "name": "lime-cream",
        "hex": "#d7e8bc"
    },
    {
        "name": "shadow-lime",
        "hex": "#cfe09d"
    },
    {
        "name": "lime-sherbet",
        "hex": "#cdd78a"
    },
    {
        "name": "lettuce-green",
        "hex": "#bed38e"
    },
    {
        "name": "sap-green",
        "hex": "#afcb80"
    },
    {
        "name": "opaline-green",
        "hex": "#a3c57d"
    },
    {
        "name": "winter-pear",
        "hex": "#b0b487"
    },
    {
        "name": "sylvan-green",
        "hex": "#e7eacb"
    },
    {
        "name": "glass-green",
        "hex": "#ecead0"
    },
    {
        "name": "green-essence",
        "hex": "#e9eac8"
    },
    {
        "name": "ethereal-green",
        "hex": "#f1ecca"
    },
    {
        "name": "garden-glade",
        "hex": "#dcd8a8"
    },
    {
        "name": "hay",
        "hex": "#d3cca3"
    },
    {
        "name": "pale-green",
        "hex": "#cbce91"
    },
    {
        "name": "young-wheat",
        "hex": "#e1e3a9"
    },
    {
        "name": "citron",
        "hex": "#dfde9b"
    },
    {
        "name": "luminary-green",
        "hex": "#e3eaa5"
    },
    {
        "name": "pale-lime-yellow",
        "hex": "#dfe69f"
    },
    {
        "name": "chardonnay",
        "hex": "#e7df99"
    },
    {
        "name": "lima-bean",
        "hex": "#e1d590"
    },
    {
        "name": "charlock",
        "hex": "#e5e790"
    },
    {
        "name": "mellow-green",
        "hex": "#d5d593"
    },
    {
        "name": "shadow-green",
        "hex": "#cfc486"
    },
    {
        "name": "celery-green",
        "hex": "#c5cc7b"
    },
    {
        "name": "green-banana",
        "hex": "#babc72"
    },
    {
        "name": "green-oasis",
        "hex": "#b0b454"
    },
    {
        "name": "leek-green",
        "hex": "#b7b17a"
    },
    {
        "name": "weeping-willow",
        "hex": "#b3b17b"
    },
    {
        "name": "palm",
        "hex": "#afaf5e"
    },
    {
        "name": "golden-olive",
        "hex": "#af9841"
    },
    {
        "name": "oasis",
        "hex": "#a3a04e"
    },
    {
        "name": "moss",
        "hex": "#a09d59"
    },
    {
        "name": "amber-green",
        "hex": "#9a803a"
    },
    {
        "name": "ecru-olive",
        "hex": "#927b3c"
    },
    {
        "name": "green-moss",
        "hex": "#857946"
    },
    {
        "name": "khaki",
        "hex": "#a39264"
    },
    {
        "name": "fennel-seed",
        "hex": "#998456"
    },
    {
        "name": "willow",
        "hex": "#9a8b4f"
    },
    {
        "name": "bronze-mist",
        "hex": "#9c7e41"
    },
    {
        "name": "dried-tobacco",
        "hex": "#997b38"
    },
    {
        "name": "tapenade",
        "hex": "#805d24"
    },
    {
        "name": "plantation",
        "hex": "#7a6332"
    },
    {
        "name": "fog-green",
        "hex": "#c2cbb4"
    },
    {
        "name": "tender-greens",
        "hex": "#c5cfb6"
    },
    {
        "name": "aloe-wash",
        "hex": "#d0d3b7"
    },
    {
        "name": "celadon-green",
        "hex": "#b5c1a5"
    },
    {
        "name": "laurel-green",
        "hex": "#adbba1"
    },
    {
        "name": "swamp",
        "hex": "#a8b197"
    },
    {
        "name": "reseda",
        "hex": "#a1ad92"
    },
    {
        "name": "meadow-mist",
        "hex": "#d3dec4"
    },
    {
        "name": "butterfly",
        "hex": "#cadea5"
    },
    {
        "name": "white-jade",
        "hex": "#d4dbb2"
    },
    {
        "name": "seafoam-green",
        "hex": "#cbd5b1"
    },
    {
        "name": "reed",
        "hex": "#c3d3a8"
    },
    {
        "name": "seedling",
        "hex": "#c0cba1"
    },
    {
        "name": "foam-green",
        "hex": "#b4c79c"
    },
    {
        "name": "lily-green",
        "hex": "#c5cf98"
    },
    {
        "name": "beechnut",
        "hex": "#c2c18d"
    },
    {
        "name": "nile",
        "hex": "#b4bb85"
    },
    {
        "name": "sweet-pea",
        "hex": "#a3a969"
    },
    {
        "name": "spinach-green",
        "hex": "#909b4c"
    },
    {
        "name": "fern",
        "hex": "#9aa067"
    },
    {
        "name": "green-olive",
        "hex": "#8d8b55"
    },
    {
        "name": "epsom",
        "hex": "#849161"
    },
    {
        "name": "grasshopper",
        "hex": "#77824a"
    },
    {
        "name": "turtle-green",
        "hex": "#81894e"
    },
    {
        "name": "calliste-green",
        "hex": "#757a4e"
    },
    {
        "name": "calla-green",
        "hex": "#6a6f34"
    },
    {
        "name": "cedar-green",
        "hex": "#5e6737"
    },
    {
        "name": "pesto",
        "hex": "#595f34"
    },
    {
        "name": "tarragon",
        "hex": "#a4ae77"
    },
    {
        "name": "sage",
        "hex": "#91946e"
    },
    {
        "name": "iguana",
        "hex": "#818455"
    },
    {
        "name": "oil-green",
        "hex": "#80856d"
    },
    {
        "name": "loden-green",
        "hex": "#6e7153"
    },
    {
        "name": "capulet-olive",
        "hex": "#656344"
    },
    {
        "name": "olivine",
        "hex": "#666b54"
    },
    {
        "name": "lint",
        "hex": "#b6ba99"
    },
    {
        "name": "pale-olive-green",
        "hex": "#b5ad88"
    },
    {
        "name": "sage-green",
        "hex": "#b2ac88"
    },
    {
        "name": "gray-green",
        "hex": "#a49a79"
    },
    {
        "name": "sponge",
        "hex": "#a49775"
    },
    {
        "name": "mermaid",
        "hex": "#817a65"
    },
    {
        "name": "dusky-green",
        "hex": "#746c57"
    },
    {
        "name": "tea",
        "hex": "#999b85"
    },
    {
        "name": "silver-sage",
        "hex": "#938b78"
    },
    {
        "name": "slate-green",
        "hex": "#a0987c"
    },
    {
        "name": "elm",
        "hex": "#a39f86"
    },
    {
        "name": "mosstone",
        "hex": "#858961"
    },
    {
        "name": "aloe",
        "hex": "#817a60"
    },
    {
        "name": "olive-drab",
        "hex": "#756d47"
    },
    {
        "name": "cedar",
        "hex": "#928e64"
    },
    {
        "name": "boa",
        "hex": "#8e855f"
    },
    {
        "name": "dried-herb",
        "hex": "#847a59"
    },
    {
        "name": "olive-branch",
        "hex": "#646a45"
    },
    {
        "name": "lizard",
        "hex": "#71643e"
    },
    {
        "name": "avocado",
        "hex": "#676232"
    },
    {
        "name": "fir-green",
        "hex": "#67592a"
    },
    {
        "name": "bog",
        "hex": "#bab696"
    },
    {
        "name": "elmwood",
        "hex": "#8c7c61"
    },
    {
        "name": "gothic-olive",
        "hex": "#7c6e4f"
    },
    {
        "name": "butternut",
        "hex": "#7a643f"
    },
    {
        "name": "nutria",
        "hex": "#75663e"
    },
    {
        "name": "military-olive",
        "hex": "#63563b"
    },
    {
        "name": "dark-olive",
        "hex": "#574d35"
    },
    {
        "name": "moss-gray",
        "hex": "#afab97"
    },
    {
        "name": "abbey-stone",
        "hex": "#aba798"
    },
    {
        "name": "burnt-olive",
        "hex": "#646049"
    },
    {
        "name": "dusty-olive",
        "hex": "#646356"
    },
    {
        "name": "ivy-green",
        "hex": "#585442"
    },
    {
        "name": "olive-night",
        "hex": "#535040"
    },
    {
        "name": "grape-leaf",
        "hex": "#545144"
    },
    {
        "name": "porpoise",
        "hex": "#a7a19e"
    },
    {
        "name": "satellite",
        "hex": "#9f8d89"
    },
    {
        "name": "driftwood",
        "hex": "#847a75"
    },
    {
        "name": "falcon",
        "hex": "#6d625b"
    },
    {
        "name": "morel",
        "hex": "#685c53"
    },
    {
        "name": "fallen-rock",
        "hex": "#807669"
    },
    {
        "name": "vintage-khaki",
        "hex": "#9a9186"
    },
    {
        "name": "crockery",
        "hex": "#a49887"
    },
    {
        "name": "greige",
        "hex": "#928475"
    },
    {
        "name": "desert-taupe",
        "hex": "#8d7e71"
    },
    {
        "name": "white-pepper",
        "hex": "#b6a893"
    },
    {
        "name": "humus",
        "hex": "#b7a793"
    },
    {
        "name": "portabella",
        "hex": "#937b6a"
    },
    {
        "name": "caribou",
        "hex": "#816d5e"
    },
    {
        "name": "travertine",
        "hex": "#ae997d"
    },
    {
        "name": "starfish",
        "hex": "#b09a77"
    },
    {
        "name": "semolina",
        "hex": "#ceb899"
    },
    {
        "name": "curds-and-whey",
        "hex": "#bca483"
    },
    {
        "name": "tigers-eye",
        "hex": "#977c61"
    },
    {
        "name": "toasted-coconut",
        "hex": "#8b6a4f"
    },
    {
        "name": "rain-drum",
        "hex": "#5f4c40"
    },
    {
        "name": "pear-sorbet",
        "hex": "#f3eac3"
    },
    {
        "name": "pineapple-slice",
        "hex": "#e7d391"
    },
    {
        "name": "yarrow",
        "hex": "#face6d"
    },
    {
        "name": "anise-flower",
        "hex": "#f4e3b5"
    },
    {
        "name": "flan",
        "hex": "#f6e3b4"
    },
    {
        "name": "sundress",
        "hex": "#ebcf89"
    },
    {
        "name": "macadamia",
        "hex": "#e4cfb6"
    },
    {
        "name": "lemon-meringue",
        "hex": "#f6e199"
    },
    {
        "name": "yellow-iris",
        "hex": "#eee78e"
    },
    {
        "name": "goldfinch",
        "hex": "#f8dc6c"
    },
    {
        "name": "lemon-zest",
        "hex": "#f9d857"
    },
    {
        "name": "solar-power",
        "hex": "#f4bf3a"
    },
    {
        "name": "samoan-sun",
        "hex": "#fbc85f"
    },
    {
        "name": "desert-sun",
        "hex": "#c87629"
    },
    {
        "name": "pumpkin-spice",
        "hex": "#a05c17"
    },
    {
        "name": "orange-pepper",
        "hex": "#df7500"
    },
    {
        "name": "marmalade",
        "hex": "#c16512"
    },
    {
        "name": "hawaiian-sunset",
        "hex": "#bb5c14"
    },
    {
        "name": "autumnal",
        "hex": "#a15325"
    },
    {
        "name": "umber",
        "hex": "#944a1f"
    },
    {
        "name": "exuberance",
        "hex": "#e86800"
    },
    {
        "name": "puffins-bill",
        "hex": "#e95c20"
    },
    {
        "name": "caramel-cafe",
        "hex": "#864c24"
    },
    {
        "name": "gold-flame",
        "hex": "#b45422"
    },
    {
        "name": "cinnamon-stick",
        "hex": "#9b4722"
    },
    {
        "name": "potters-clay",
        "hex": "#9e4624"
    },
    {
        "name": "rooibos-tea",
        "hex": "#a23c26"
    },
    {
        "name": "celosia-orange",
        "hex": "#e8703a"
    },
    {
        "name": "orangeade",
        "hex": "#e2552c"
    },
    {
        "name": "pureed-pumpkin",
        "hex": "#c34121"
    },
    {
        "name": "tangerine-tango",
        "hex": "#dd4124"
    },
    {
        "name": "poinciana",
        "hex": "#ca3422"
    },
    {
        "name": "koi",
        "hex": "#d15837"
    },
    {
        "name": "samba",
        "hex": "#a2242f"
    },
    {
        "name": "barbados-cherry",
        "hex": "#aa0a27"
    },
    {
        "name": "haute-red",
        "hex": "#a11729"
    },
    {
        "name": "salsa",
        "hex": "#aa182b"
    },
    {
        "name": "scarlet-sage",
        "hex": "#9d202f"
    },
    {
        "name": "scooter",
        "hex": "#941e32"
    },
    {
        "name": "red-dahlia",
        "hex": "#7d2027"
    },
    {
        "name": "sun-dried-tomato",
        "hex": "#752329"
    },
    {
        "name": "fired-brick",
        "hex": "#6a2e2a"
    },
    {
        "name": "rhubarb",
        "hex": "#77202f"
    },
    {
        "name": "syrah",
        "hex": "#6a282c"
    },
    {
        "name": "pomegranate",
        "hex": "#6c2831"
    },
    {
        "name": "cabernet",
        "hex": "#64242e"
    },
    {
        "name": "ballerina",
        "hex": "#f2cfdc"
    },
    {
        "name": "fairy-tale",
        "hex": "#f2c1d1"
    },
    {
        "name": "etherea",
        "hex": "#a5958f"
    },
    {
        "name": "foxglove",
        "hex": "#b98391"
    },
    {
        "name": "mesa-rose",
        "hex": "#a66e7a"
    },
    {
        "name": "jazzy",
        "hex": "#b61c50"
    },
    {
        "name": "granita",
        "hex": "#a52350"
    },
    {
        "name": "cherries-jubilee",
        "hex": "#a22452"
    },
    {
        "name": "cabaret",
        "hex": "#cb3373"
    },
    {
        "name": "vivacious",
        "hex": "#a32857"
    },
    {
        "name": "bellflower",
        "hex": "#9469a2"
    },
    {
        "name": "english-lavendar",
        "hex": "#9d7bb0"
    },
    {
        "name": "rhapsody",
        "hex": "#9f86aa"
    },
    {
        "name": "acai",
        "hex": "#46295a"
    },
    {
        "name": "tillandsia-purple",
        "hex": "#563474"
    },
    {
        "name": "picasso-lily",
        "hex": "#634878"
    },
    {
        "name": "mystical",
        "hex": "#5f4e72"
    },
    {
        "name": "icelandic-blue",
        "hex": "#a9adc2"
    },
    {
        "name": "aleutian",
        "hex": "#9a9eb3"
    },
    {
        "name": "silver-bullet",
        "hex": "#81839a"
    },
    {
        "name": "blue-granite",
        "hex": "#717388"
    },
    {
        "name": "evening-blue",
        "hex": "#2a293e"
    },
    {
        "name": "deep-well",
        "hex": "#2c2a33"
    },
    {
        "name": "night-sky",
        "hex": "#2a2a35"
    },
    {
        "name": "blue-heron",
        "hex": "#96a3c7"
    },
    {
        "name": "hydrangea",
        "hex": "#849bcc"
    },
    {
        "name": "xenon-blue",
        "hex": "#b7c0d7"
    },
    {
        "name": "brunnera-blue",
        "hex": "#9ba9ca"
    },
    {
        "name": "sky-captain",
        "hex": "#262934"
    },
    {
        "name": "navy-blazer",
        "hex": "#282d3c"
    },
    {
        "name": "dark-sapphire",
        "hex": "#262b37"
    },
    {
        "name": "plein-air",
        "hex": "#bfcad6"
    },
    {
        "name": "halogen-blue",
        "hex": "#bdc6dc"
    },
    {
        "name": "chambray-blue",
        "hex": "#9eb4d3"
    },
    {
        "name": "bel-air-blue",
        "hex": "#819ac1"
    },
    {
        "name": "vintage-indigo",
        "hex": "#4a556b"
    },
    {
        "name": "sodalite-blue",
        "hex": "#253668"
    },
    {
        "name": "parisian-night",
        "hex": "#323441"
    },
    {
        "name": "monaco-blue",
        "hex": "#274374"
    },
    {
        "name": "vallarta-blue",
        "hex": "#30658e"
    },
    {
        "name": "salute",
        "hex": "#282b34"
    },
    {
        "name": "outer-space",
        "hex": "#2f3441"
    },
    {
        "name": "blueberry",
        "hex": "#2c333e"
    },
    {
        "name": "carbon",
        "hex": "#272f38"
    },
    {
        "name": "vulcan",
        "hex": "#2d3036"
    },
    {
        "name": "omphalodes",
        "hex": "#b5cedf"
    },
    {
        "name": "cool-blue",
        "hex": "#a5c5d9"
    },
    {
        "name": "bering-sea",
        "hex": "#4b5b6e"
    },
    {
        "name": "blue-wing-teal",
        "hex": "#2c4053"
    },
    {
        "name": "poseidon",
        "hex": "#123955"
    },
    {
        "name": "mykonos-blue",
        "hex": "#005780"
    },
    {
        "name": "reflecting-pond",
        "hex": "#203e4a"
    },
    {
        "name": "corydalis-blue",
        "hex": "#a9cada"
    },
    {
        "name": "blue-topaz",
        "hex": "#78bdd4"
    },
    {
        "name": "gulf-stream",
        "hex": "#88c3d0"
    },
    {
        "name": "aquarelle",
        "hex": "#61aab1"
    },
    {
        "name": "aqua-splash",
        "hex": "#85ced1"
    },
    {
        "name": "botanical-garden",
        "hex": "#12403c"
    },
    {
        "name": "scarab",
        "hex": "#23312d"
    },
    {
        "name": "nimbus-cloud",
        "hex": "#d5d5d8"
    },
    {
        "name": "micro-chip",
        "hex": "#babcc0"
    },
    {
        "name": "wet-weather",
        "hex": "#929090"
    },
    {
        "name": "titanium",
        "hex": "#807d7f"
    },
    {
        "name": "december-sky",
        "hex": "#767275"
    },
    {
        "name": "pavement",
        "hex": "#524d50"
    },
    {
        "name": "magnet",
        "hex": "#4d4b4f"
    },
    {
        "name": "silver-sconce",
        "hex": "#a19fa5"
    },
    {
        "name": "silver-filigree",
        "hex": "#7f7c81"
    },
    {
        "name": "quicksilver",
        "hex": "#7e7d88"
    },
    {
        "name": "storm-front",
        "hex": "#787376"
    },
    {
        "name": "tornado",
        "hex": "#5e5b60"
    },
    {
        "name": "eiffel-tower",
        "hex": "#5c5658"
    },
    {
        "name": "graphite",
        "hex": "#3b3b48"
    },
    {
        "name": "alloy",
        "hex": "#98979a"
    },
    {
        "name": "sleet",
        "hex": "#92949b"
    },
    {
        "name": "tradewinds",
        "hex": "#7f8793"
    },
    {
        "name": "grisaille",
        "hex": "#585e6f"
    },
    {
        "name": "periscope",
        "hex": "#46444c"
    },
    {
        "name": "quiet-shade",
        "hex": "#66676d"
    },
    {
        "name": "turbulence",
        "hex": "#4e545b"
    },
    {
        "name": "stormy-weather",
        "hex": "#58646d"
    },
    {
        "name": "iron-gate",
        "hex": "#4e5055"
    },
    {
        "name": "forged-iron",
        "hex": "#48464a"
    },
    {
        "name": "asphalt",
        "hex": "#434447"
    },
    {
        "name": "ghost-gray",
        "hex": "#9c9b98"
    },
    {
        "name": "brushed-nickel",
        "hex": "#73706f"
    },
    {
        "name": "mourning-dove",
        "hex": "#94908b"
    },
    {
        "name": "belgian-block",
        "hex": "#a3a9a6"
    },
    {
        "name": "agave-green",
        "hex": "#6b7169"
    },
    {
        "name": "cilantro",
        "hex": "#43544b"
    },
    {
        "name": "pine-grove",
        "hex": "#213631"
    },
    {
        "name": "eden",
        "hex": "#264e36"
    },
    {
        "name": "jolly-green",
        "hex": "#007844"
    },
    {
        "name": "mountain-view",
        "hex": "#2e3d30"
    },
    {
        "name": "margarita",
        "hex": "#b5c38e"
    },
    {
        "name": "winter-moss",
        "hex": "#5b5a41"
    },
    {
        "name": "climbing-ivy",
        "hex": "#444940"
    },
    {
        "name": "delicioso",
        "hex": "#3f352f"
    },
    {
        "name": "mulch",
        "hex": "#433937"
    },
    {
        "name": "mole",
        "hex": "#392d2b"
    },
    {
        "name": "chocolate-torte",
        "hex": "#382e2d"
    },
    {
        "name": "ganache",
        "hex": "#34292a"
    },
    {
        "name": "black-bean",
        "hex": "#2e272a"
    },
    {
        "name": "espresso",
        "hex": "#363031"
    },
    {
        "name": "meteorite",
        "hex": "#2b2929"
    },
    {
        "name": "tap-shoe",
        "hex": "#2a2b2d"
    },
    {
        "name": "white-alyssum",
        "hex": "#efebe7"
    },
    {
        "name": "jet-stream",
        "hex": "#ede6de"
    },
    {
        "name": "sweet-cream",
        "hex": "#f0ead6"
    },
    {
        "name": "buttercream",
        "hex": "#efe0cd"
    },
    {
        "name": "lemon-icing",
        "hex": "#f6ebc8"
    },
    {
        "name": "sugar-swizzle",
        "hex": "#f3eee7"
    },
    {
        "name": "coconut-milk",
        "hex": "#f0ede5"
    },
    {
        "name": "yellow-pear",
        "hex": "#ece99b"
    },
    {
        "name": "sea-salt",
        "hex": "#f1e6de"
    },
    {
        "name": "brilliant-white",
        "hex": "#edf1fe"
    },
    {
        "name": "cannoli-cream",
        "hex": "#f0efe2"
    },
    {
        "name": "tofu",
        "hex": "#e8e3d9"
    },
    {
        "name": "pistachio-shell",
        "hex": "#d7cfbb"
    },
    {
        "name": "celandine",
        "hex": "#ebdf67"
    },
    {
        "name": "lemon-verbena",
        "hex": "#f3e779"
    },
    {
        "name": "creme-de-peche",
        "hex": "#f5d6c6"
    },
    {
        "name": "marys-rose",
        "hex": "#f7d1d4"
    },
    {
        "name": "morganite",
        "hex": "#dfcdc6"
    },
    {
        "name": "rose-water",
        "hex": "#f8e0e7"
    },
    {
        "name": "almond-milk",
        "hex": "#d6cebe"
    },
    {
        "name": "lime-popsicle",
        "hex": "#c0db3a"
    },
    {
        "name": "golden-kiwi",
        "hex": "#f3dd3e"
    },
    {
        "name": "meadowlark",
        "hex": "#ead94e"
    },
    {
        "name": "evening-primrose",
        "hex": "#ccdb1e"
    },
    {
        "name": "habanero-gold",
        "hex": "#fed450"
    },
    {
        "name": "minion-yellow",
        "hex": "#fed55d"
    },
    {
        "name": "soybean",
        "hex": "#d2c29d"
    },
    {
        "name": "jurassic-gold",
        "hex": "#e7aa56"
    },
    {
        "name": "brown-rice",
        "hex": "#c7bba4"
    },
    {
        "name": "peach-quartz",
        "hex": "#f5b895"
    },
    {
        "name": "peachy-keen",
        "hex": "#e2bdb3"
    },
    {
        "name": "brazilian-sand",
        "hex": "#dacab7"
    },
    {
        "name": "pink-salt",
        "hex": "#f7cdc7"
    },
    {
        "name": "rose-quartz",
        "hex": "#f7cac9"
    },
    {
        "name": "ballet-slipper",
        "hex": "#ebced5"
    },
    {
        "name": "cherry-blossom",
        "hex": "#f7cee0"
    },
    {
        "name": "antarctica",
        "hex": "#c6c5c6"
    },
    {
        "name": "oyster-mushroom",
        "hex": "#c3c6c8"
    },
    {
        "name": "tanager-turquoise",
        "hex": "#91dce8"
    },
    {
        "name": "limpet-shell",
        "hex": "#98ddde"
    },
    {
        "name": "iced-aqua",
        "hex": "#abd3db"
    },
    {
        "name": "acid-lime",
        "hex": "#badf30"
    },
    {
        "name": "spicy-mustard",
        "hex": "#d8ae47"
    },
    {
        "name": "kumquat",
        "hex": "#fbaa4c"
    },
    {
        "name": "irish-cream",
        "hex": "#c0ac92"
    },
    {
        "name": "orange-chiffon",
        "hex": "#f9aa7d"
    },
    {
        "name": "hazelnut",
        "hex": "#cfb095"
    },
    {
        "name": "sepia-rose",
        "hex": "#d4bab6"
    },
    {
        "name": "raindrops",
        "hex": "#b1aab3"
    },
    {
        "name": "zen-blue",
        "hex": "#9fa9be"
    },
    {
        "name": "quiet-gray",
        "hex": "#b9babd"
    },
    {
        "name": "airy-blue",
        "hex": "#92b6d5"
    },
    {
        "name": "harbor-mist",
        "hex": "#afb1b4"
    },
    {
        "name": "sea-angel",
        "hex": "#98bfca"
    },
    {
        "name": "baltic-sea",
        "hex": "#79b5db"
    },
    {
        "name": "antiqua-sand",
        "hex": "#83c2cd"
    },
    {
        "name": "island-paradise",
        "hex": "#95dee3"
    },
    {
        "name": "tibetan-stone",
        "hex": "#82c2c7"
    },
    {
        "name": "mango-mojito",
        "hex": "#d69c2f"
    },
    {
        "name": "ginger-root",
        "hex": "#bfa58a"
    },
    {
        "name": "iced-coffee",
        "hex": "#b18f6a"
    },
    {
        "name": "autumn-blaze",
        "hex": "#d9922e"
    },
    {
        "name": "golden-orange",
        "hex": "#d7942d"
    },
    {
        "name": "porcini",
        "hex": "#cca580"
    },
    {
        "name": "iceland-poppy",
        "hex": "#f4963a"
    },
    {
        "name": "papaya",
        "hex": "#fea166"
    },
    {
        "name": "carrot-curl",
        "hex": "#fe8c18"
    },
    {
        "name": "turmeric",
        "hex": "#fe840e"
    },
    {
        "name": "tangelo",
        "hex": "#fe7e03"
    },
    {
        "name": "fenugreek",
        "hex": "#c0916c"
    },
    {
        "name": "dusted-clay",
        "hex": "#cc7357"
    },
    {
        "name": "pastry-shell",
        "hex": "#bd8c66"
    },
    {
        "name": "blooming-dahlia",
        "hex": "#eb9687"
    },
    {
        "name": "crocus-petal",
        "hex": "#b99bc5"
    },
    {
        "name": "purple-rose",
        "hex": "#b09fca"
    },
    {
        "name": "lilac-breeze",
        "hex": "#b3a0c9"
    },
    {
        "name": "serenity",
        "hex": "#91a8d0"
    },
    {
        "name": "crystal-seas",
        "hex": "#5dafce"
    },
    {
        "name": "golden-lime",
        "hex": "#9a9738"
    },
    {
        "name": "split-pea",
        "hex": "#9c9a40"
    },
    {
        "name": "lentil-sprout",
        "hex": "#aba44d"
    },
    {
        "name": "pure-cashmere",
        "hex": "#ada396"
    },
    {
        "name": "sun-baked",
        "hex": "#d27f63"
    },
    {
        "name": "peach-caramel",
        "hex": "#c5733d"
    },
    {
        "name": "tomato-cream",
        "hex": "#c57644"
    },
    {
        "name": "orange-tiger",
        "hex": "#f96714"
    },
    {
        "name": "meerkat",
        "hex": "#a46f44"
    },
    {
        "name": "exotic-orange",
        "hex": "#f96531"
    },
    {
        "name": "dragon-fire",
        "hex": "#fc642d"
    },
    {
        "name": "coral-quartz",
        "hex": "#f77464"
    },
    {
        "name": "peach-echo",
        "hex": "#f7786b"
    },
    {
        "name": "purple-dove",
        "hex": "#98878c"
    },
    {
        "name": "sand-verbena",
        "hex": "#9f90c1"
    },
    {
        "name": "lilac-gray",
        "hex": "#9896a4"
    },
    {
        "name": "granada-sky",
        "hex": "#5d81bb"
    },
    {
        "name": "tree-house",
        "hex": "#988c75"
    },
    {
        "name": "chai-tea",
        "hex": "#b1832f"
    },
    {
        "name": "roasted-pecan",
        "hex": "#93592b"
    },
    {
        "name": "roasted-cashew",
        "hex": "#918579"
    },
    {
        "name": "winter-twig",
        "hex": "#948a7a"
    },
    {
        "name": "petrified-oak",
        "hex": "#8d7960"
    },
    {
        "name": "argan-oil",
        "hex": "#8b593e"
    },
    {
        "name": "autumn-maple",
        "hex": "#c46215"
    },
    {
        "name": "sepia-tint",
        "hex": "#897560"
    },
    {
        "name": "spice-route",
        "hex": "#b95b3f"
    },
    {
        "name": "scarlet-ibis",
        "hex": "#f45520"
    },
    {
        "name": "summer-fig",
        "hex": "#be4b3b"
    },
    {
        "name": "moonscape",
        "hex": "#725f69"
    },
    {
        "name": "fruit-dove",
        "hex": "#ce5b78"
    },
    {
        "name": "pink-yarrow",
        "hex": "#ce3175"
    },
    {
        "name": "toadstool",
        "hex": "#988088"
    },
    {
        "name": "bodacious",
        "hex": "#b76ba3"
    },
    {
        "name": "diffused-orchid",
        "hex": "#9879a2"
    },
    {
        "name": "fairy-wren",
        "hex": "#9479af"
    },
    {
        "name": "sunlit-allium",
        "hex": "#9787bb"
    },
    {
        "name": "sharkskin",
        "hex": "#838487"
    },
    {
        "name": "pale-iris",
        "hex": "#8895c5"
    },
    {
        "name": "iolite",
        "hex": "#707bb4"
    },
    {
        "name": "gray-flannel",
        "hex": "#848182"
    },
    {
        "name": "riverside",
        "hex": "#4c6a92"
    },
    {
        "name": "quiet-harbor",
        "hex": "#5a789a"
    },
    {
        "name": "lichen-blue",
        "hex": "#5d89b3"
    },
    {
        "name": "pacific-coast",
        "hex": "#5480ac"
    },
    {
        "name": "ibiza-blue",
        "hex": "#007cb7"
    },
    {
        "name": "navagio-bay",
        "hex": "#3183a0"
    },
    {
        "name": "barrier-reef",
        "hex": "#0084a1"
    },
    {
        "name": "guacamole",
        "hex": "#797b3a"
    },
    {
        "name": "kale",
        "hex": "#5a7247"
    },
    {
        "name": "mayfly",
        "hex": "#65663f"
    },
    {
        "name": "twist-of-lime",
        "hex": "#4e632c"
    },
    {
        "name": "martini-olive",
        "hex": "#716a4d"
    },
    {
        "name": "emperador",
        "hex": "#684832"
    },
    {
        "name": "thai-curry",
        "hex": "#ab6819"
    },
    {
        "name": "honey-ginger",
        "hex": "#a86217"
    },
    {
        "name": "sugar-almond",
        "hex": "#935529"
    },
    {
        "name": "spiced-apple",
        "hex": "#783937"
    },
    {
        "name": "chili-oil",
        "hex": "#8e3c36"
    },
    {
        "name": "plum-truffle",
        "hex": "#675657"
    },
    {
        "name": "brandy-brown",
        "hex": "#73362a"
    },
    {
        "name": "valiant-poppy",
        "hex": "#bc322c"
    },
    {
        "name": "aura-orange",
        "hex": "#b4262a"
    },
    {
        "name": "toreador",
        "hex": "#b61032"
    },
    {
        "name": "lychee",
        "hex": "#ba0b32"
    },
    {
        "name": "goji-berry",
        "hex": "#b91228"
    },
    {
        "name": "arctic-dusk",
        "hex": "#735b6a"
    },
    {
        "name": "ephemera",
        "hex": "#6f5965"
    },
    {
        "name": "jalapeno-red",
        "hex": "#b2103c"
    },
    {
        "name": "love-potion",
        "hex": "#c01352"
    },
    {
        "name": "pink-peacock",
        "hex": "#c62168"
    },
    {
        "name": "grape-kiss",
        "hex": "#7b4368"
    },
    {
        "name": "willowherb",
        "hex": "#8e4483"
    },
    {
        "name": "charisma",
        "hex": "#632a60"
    },
    {
        "name": "plum-jam",
        "hex": "#624076"
    },
    {
        "name": "lavender-crystal",
        "hex": "#936a98"
    },
    {
        "name": "purple-sapphire",
        "hex": "#6f4685"
    },
    {
        "name": "chive-blossom",
        "hex": "#7d5d99"
    },
    {
        "name": "purple-corallite",
        "hex": "#5a4e8f"
    },
    {
        "name": "volcanic-glass",
        "hex": "#615c60"
    },
    {
        "name": "gray-blue",
        "hex": "#4d587a"
    },
    {
        "name": "blue-horizon",
        "hex": "#4e6482"
    },
    {
        "name": "iris-bloom",
        "hex": "#5b609e"
    },
    {
        "name": "nebulas-blue",
        "hex": "#2d62a3"
    },
    {
        "name": "indigo-bunting",
        "hex": "#006ca9"
    },
    {
        "name": "fjord-blue",
        "hex": "#007290"
    },
    {
        "name": "hawaiian-surf",
        "hex": "#0078a7"
    },
    {
        "name": "tahitian-tide",
        "hex": "#006b7e"
    },
    {
        "name": "quetzal-green",
        "hex": "#006865"
    },
    {
        "name": "granite-gray",
        "hex": "#615e5f"
    },
    {
        "name": "lush-meadow",
        "hex": "#006e51"
    },
    {
        "name": "gray-pinstripe",
        "hex": "#49494d"
    },
    {
        "name": "sea-turtle",
        "hex": "#5e5749"
    },
    {
        "name": "deep-depths",
        "hex": "#46483c"
    },
    {
        "name": "kalamata",
        "hex": "#5f5b4c"
    },
    {
        "name": "crocodile",
        "hex": "#5d5348"
    },
    {
        "name": "chocolate-plum",
        "hex": "#3c2d2e"
    },
    {
        "name": "chocolate-lab",
        "hex": "#5c3e35"
    },
    {
        "name": "shaved-chocolate",
        "hex": "#543b35"
    },
    {
        "name": "fondue-fudge",
        "hex": "#5d4236"
    },
    {
        "name": "tiramisu",
        "hex": "#634235"
    },
    {
        "name": "rocky-road",
        "hex": "#5a3e36"
    },
    {
        "name": "chicory-coffee",
        "hex": "#4a342e"
    },
    {
        "name": "smoked-paprika",
        "hex": "#6e362c"
    },
    {
        "name": "chocolate-fondant",
        "hex": "#56352d"
    },
    {
        "name": "cherry-mahogany",
        "hex": "#66352b"
    },
    {
        "name": "merlot",
        "hex": "#72262c"
    },
    {
        "name": "red-pear",
        "hex": "#7b3539"
    },
    {
        "name": "pickled-beet",
        "hex": "#4d233d"
    },
    {
        "name": "plum-caspia",
        "hex": "#61224a"
    },
    {
        "name": "winter-bloom",
        "hex": "#47243b"
    },
    {
        "name": "spiced-plum",
        "hex": "#6d4773"
    },
    {
        "name": "violet-indigo",
        "hex": "#3e285c"
    },
    {
        "name": "maritime-blue",
        "hex": "#27293d"
    },
    {
        "name": "obsidian",
        "hex": "#3a363b"
    },
    {
        "name": "black-beauty",
        "hex": "#26262a"
    },
    {
        "name": "blackened-pearl",
        "hex": "#4d4b50"
    },
    {
        "name": "odyssey-gray",
        "hex": "#434452"
    },
    {
        "name": "black-onyx",
        "hex": "#2b272b"
    },
    {
        "name": "navy-peony",
        "hex": "#223a5e"
    },
    {
        "name": "sargasso-sea",
        "hex": "#35435a"
    },
    {
        "name": "sailor-blue",
        "hex": "#0e3a53"
    },
    {
        "name": "gibraltar-sea",
        "hex": "#123850"
    },
    {
        "name": "lapis-blue",
        "hex": "#004b8d"
    },
    {
        "name": "baleine-blue",
        "hex": "#155187"
    },
    {
        "name": "galaxy-blue",
        "hex": "#2a4b7c"
    },
    {
        "name": "blue-opal",
        "hex": "#0f3b57"
    },
    {
        "name": "moonlit-ocean",
        "hex": "#293b4d"
    },
    {
        "name": "deep-dive",
        "hex": "#29495c"
    },
    {
        "name": "crystal-teal",
        "hex": "#00637c"
    },
    {
        "name": "deep-lagoon",
        "hex": "#005265"
    },
    {
        "name": "sea-moss",
        "hex": "#254445"
    },
    {
        "name": "forest-biome",
        "hex": "#184a45"
    },
    {
        "name": "rain-forest",
        "hex": "#15463e"
    }
  ]
  
  
  },{}],8:[function(require,module,exports){
  module.exports = [
    { name: 'red', hex: '#FF0000' },
    { name: 'orange', hex: '#FFA500' },
    { name: 'yellow', hex: '#FFFF00' },
    { name: 'green', hex: '#008000' },
    { name: 'blue', hex: '#0000FF' },
    { name: 'indigo', hex: '#4B0082' },
    { name: 'violet', hex: '#EE82EE' }
  ]
  
  },{}],9:[function(require,module,exports){
  module.exports = [{
    name: 'indigo',
    hex: '#4b0082'
  }, {
    name: 'gold',
    hex: '#ffd700'
  }, {
    name: 'hotpink',
    hex: '#ff69b4'
  }, {
    name: 'firebrick',
    hex: '#b22222'
  }, {
    name: 'indianred',
    hex: '#cd5c5c'
  }, {
    name: 'yellow',
    hex: '#ffff00'
  }, {
    name: 'mistyrose',
    hex: '#ffe4e1'
  }, {
    name: 'darkolivegreen',
    hex: '#556b2f'
  }, {
    name: 'olive',
    hex: '#808000'
  }, {
    name: 'darkseagreen',
    hex: '#8fbc8f'
  }, {
    name: 'pink',
    hex: '#ffc0cb'
  }, {
    name: 'tomato',
    hex: '#ff6347'
  }, {
    name: 'lightcoral',
    hex: '#f08080'
  }, {
    name: 'orangered',
    hex: '#ff4500'
  }, {
    name: 'navajowhite',
    hex: '#ffdead'
  }, {
    name: 'lime',
    hex: '#00ff00'
  }, {
    name: 'palegreen',
    hex: '#98fb98'
  }, {
    name: 'darkslategrey',
    hex: '#2f4f4f'
  }, {
    name: 'greenyellow',
    hex: '#adff2f'
  }, {
    name: 'burlywood',
    hex: '#deb887'
  }, {
    name: 'seashell',
    hex: '#fff5ee'
  }, {
    name: 'mediumspringgreen',
    hex: '#00fa9a'
  }, {
    name: 'fuchsia',
    hex: '#ff00ff'
  }, {
    name: 'papayawhip',
    hex: '#ffefd5'
  }, {
    name: 'blanchedalmond',
    hex: '#ffebcd'
  }, {
    name: 'chartreuse',
    hex: '#7fff00'
  }, {
    name: 'dimgray',
    hex: '#696969'
  }, {
    name: 'black',
    hex: '#000000'
  }, {
    name: 'peachpuff',
    hex: '#ffdab9'
  }, {
    name: 'springgreen',
    hex: '#00ff7f'
  }, {
    name: 'aquamarine',
    hex: '#7fffd4'
  }, {
    name: 'white',
    hex: '#ffffff'
  }, {
    name: 'orange',
    hex: '#ffa500'
  }, {
    name: 'lightsalmon',
    hex: '#ffa07a'
  }, {
    name: 'darkslategray',
    hex: '#2f4f4f'
  }, {
    name: 'brown',
    hex: '#a52a2a'
  }, {
    name: 'ivory',
    hex: '#fffff0'
  }, {
    name: 'dodgerblue',
    hex: '#1e90ff'
  }, {
    name: 'peru',
    hex: '#cd853f'
  }, {
    name: 'lawngreen',
    hex: '#7cfc00'
  }, {
    name: 'chocolate',
    hex: '#d2691e'
  }, {
    name: 'crimson',
    hex: '#dc143c'
  }, {
    name: 'forestgreen',
    hex: '#228b22'
  }, {
    name: 'darkgrey',
    hex: '#a9a9a9'
  }, {
    name: 'lightseagreen',
    hex: '#20b2aa'
  }, {
    name: 'cyan',
    hex: '#00ffff'
  }, {
    name: 'mintcream',
    hex: '#f5fffa'
  }, {
    name: 'silver',
    hex: '#c0c0c0'
  }, {
    name: 'antiquewhite',
    hex: '#faebd7'
  }, {
    name: 'mediumorchid',
    hex: '#ba55d3'
  }, {
    name: 'skyblue',
    hex: '#87ceeb'
  }, {
    name: 'gray',
    hex: '#808080'
  }, {
    name: 'darkturquoise',
    hex: '#00ced1'
  }, {
    name: 'goldenrod',
    hex: '#daa520'
  }, {
    name: 'darkgreen',
    hex: '#006400'
  }, {
    name: 'floralwhite',
    hex: '#fffaf0'
  }, {
    name: 'darkviolet',
    hex: '#9400d3'
  }, {
    name: 'darkgray',
    hex: '#a9a9a9'
  }, {
    name: 'moccasin',
    hex: '#ffe4b5'
  }, {
    name: 'saddlebrown',
    hex: '#8b4513'
  }, {
    name: 'grey',
    hex: '#808080'
  }, {
    name: 'darkslateblue',
    hex: '#483d8b'
  }, {
    name: 'lightskyblue',
    hex: '#87cefa'
  }, {
    name: 'lightpink',
    hex: '#ffb6c1'
  }, {
    name: 'mediumvioletred',
    hex: '#c71585'
  }, {
    name: 'slategrey',
    hex: '#708090'
  }, {
    name: 'red',
    hex: '#ff0000'
  }, {
    name: 'deeppink',
    hex: '#ff1493'
  }, {
    name: 'limegreen',
    hex: '#32cd32'
  }, {
    name: 'darkmagenta',
    hex: '#8b008b'
  }, {
    name: 'palegoldenrod',
    hex: '#eee8aa'
  }, {
    name: 'plum',
    hex: '#dda0dd'
  }, {
    name: 'turquoise',
    hex: '#40e0d0'
  }, {
    name: 'lightgrey',
    hex: '#d3d3d3'
  }, {
    name: 'lightgoldenrodyellow',
    hex: '#fafad2'
  }, {
    name: 'darkgoldenrod',
    hex: '#b8860b'
  }, {
    name: 'lavender',
    hex: '#e6e6fa'
  }, {
    name: 'maroon',
    hex: '#800000'
  }, {
    name: 'yellowgreen',
    hex: '#9acd32'
  }, {
    name: 'sandybrown',
    hex: '#f4a460'
  }, {
    name: 'thistle',
    hex: '#d8bfd8'
  }, {
    name: 'violet',
    hex: '#ee82ee'
  }, {
    name: 'navy',
    hex: '#000080'
  }, {
    name: 'magenta',
    hex: '#ff00ff'
  }, {
    name: 'dimgrey',
    hex: '#696969'
  }, {
    name: 'tan',
    hex: '#d2b48c'
  }, {
    name: 'rosybrown',
    hex: '#bc8f8f'
  }, {
    name: 'olivedrab',
    hex: '#6b8e23'
  }, {
    name: 'blue',
    hex: '#0000ff'
  }, {
    name: 'lightblue',
    hex: '#add8e6'
  }, {
    name: 'ghostwhite',
    hex: '#f8f8ff'
  }, {
    name: 'honeydew',
    hex: '#f0fff0'
  }, {
    name: 'cornflowerblue',
    hex: '#6495ed'
  }, {
    name: 'slateblue',
    hex: '#6a5acd'
  }, {
    name: 'linen',
    hex: '#faf0e6'
  }, {
    name: 'darkblue',
    hex: '#00008b'
  }, {
    name: 'powderblue',
    hex: '#b0e0e6'
  }, {
    name: 'seagreen',
    hex: '#2e8b57'
  }, {
    name: 'darkkhaki',
    hex: '#bdb76b'
  }, {
    name: 'snow',
    hex: '#fffafa'
  }, {
    name: 'sienna',
    hex: '#a0522d'
  }, {
    name: 'mediumblue',
    hex: '#0000cd'
  }, {
    name: 'royalblue',
    hex: '#4169e1'
  }, {
    name: 'lightcyan',
    hex: '#e0ffff'
  }, {
    name: 'green',
    hex: '#008000'
  }, {
    name: 'mediumpurple',
    hex: '#9370db'
  }, {
    name: 'midnightblue',
    hex: '#191970'
  }, {
    name: 'cornsilk',
    hex: '#fff8dc'
  }, {
    name: 'paleturquoise',
    hex: '#afeeee'
  }, {
    name: 'bisque',
    hex: '#ffe4c4'
  }, {
    name: 'slategray',
    hex: '#708090'
  }, {
    name: 'darkcyan',
    hex: '#008b8b'
  }, {
    name: 'khaki',
    hex: '#f0e68c'
  }, {
    name: 'wheat',
    hex: '#f5deb3'
  }, {
    name: 'teal',
    hex: '#008080'
  }, {
    name: 'darkorchid',
    hex: '#9932cc'
  }, {
    name: 'deepskyblue',
    hex: '#00bfff'
  }, {
    name: 'salmon',
    hex: '#fa8072'
  }, {
    name: 'darkred',
    hex: '#8b0000'
  }, {
    name: 'steelblue',
    hex: '#4682b4'
  }, {
    name: 'palevioletred',
    hex: '#db7093'
  }, {
    name: 'lightslategray',
    hex: '#778899'
  }, {
    name: 'aliceblue',
    hex: '#f0f8ff'
  }, {
    name: 'lightslategrey',
    hex: '#778899'
  }, {
    name: 'lightgreen',
    hex: '#90ee90'
  }, {
    name: 'orchid',
    hex: '#da70d6'
  }, {
    name: 'gainsboro',
    hex: '#dcdcdc'
  }, {
    name: 'mediumseagreen',
    hex: '#3cb371'
  }, {
    name: 'lightgray',
    hex: '#d3d3d3'
  }, {
    name: 'mediumturquoise',
    hex: '#48d1cc'
  }, {
    name: 'lemonchiffon',
    hex: '#fffacd'
  }, {
    name: 'cadetblue',
    hex: '#5f9ea0'
  }, {
    name: 'lightyellow',
    hex: '#ffffe0'
  }, {
    name: 'lavenderblush',
    hex: '#fff0f5'
  }, {
    name: 'coral',
    hex: '#ff7f50'
  }, {
    name: 'purple',
    hex: '#800080'
  }, {
    name: 'aqua',
    hex: '#00ffff'
  }, {
    name: 'whitesmoke',
    hex: '#f5f5f5'
  }, {
    name: 'mediumslateblue',
    hex: '#7b68ee'
  }, {
    name: 'darkorange',
    hex: '#ff8c00'
  }, {
    name: 'mediumaquamarine',
    hex: '#66cdaa'
  }, {
    name: 'darksalmon',
    hex: '#e9967a'
  }, {
    name: 'beige',
    hex: '#f5f5dc'
  }, {
    name: 'blueviolet',
    hex: '#8a2be2'
  }, {
    name: 'azure',
    hex: '#f0ffff'
  }, {
    name: 'lightsteelblue',
    hex: '#b0c4de'
  }, {
    name: 'oldlace',
    hex: '#fdf5e6'
  }]
  
  },{}],10:[function(require,module,exports){
  "use strict";
  
  var isValue             = require("type/value/is")
    , ensureValue         = require("type/value/ensure")
    , ensurePlainFunction = require("type/plain-function/ensure")
    , copy                = require("es5-ext/object/copy")
    , normalizeOptions    = require("es5-ext/object/normalize-options")
    , map                 = require("es5-ext/object/map");
  
  var bind = Function.prototype.bind
    , defineProperty = Object.defineProperty
    , hasOwnProperty = Object.prototype.hasOwnProperty
    , define;
  
  define = function (name, desc, options) {
    var value = ensureValue(desc) && ensurePlainFunction(desc.value), dgs;
    dgs = copy(desc);
    delete dgs.writable;
    delete dgs.value;
    dgs.get = function () {
      if (!options.overwriteDefinition && hasOwnProperty.call(this, name)) return value;
      desc.value = bind.call(value, options.resolveContext ? options.resolveContext(this) : this);
      defineProperty(this, name, desc);
      return this[name];
    };
    return dgs;
  };
  
  module.exports = function (props/*, options*/) {
    var options = normalizeOptions(arguments[1]);
    if (isValue(options.resolveContext)) ensurePlainFunction(options.resolveContext);
    return map(props, function (desc, name) { return define(name, desc, options); });
  };
  
  },{"es5-ext/object/copy":28,"es5-ext/object/map":36,"es5-ext/object/normalize-options":37,"type/plain-function/ensure":76,"type/value/ensure":80,"type/value/is":81}],11:[function(require,module,exports){
  "use strict";
  
  var isValue         = require("type/value/is")
    , isPlainFunction = require("type/plain-function/is")
    , assign          = require("es5-ext/object/assign")
    , normalizeOpts   = require("es5-ext/object/normalize-options")
    , contains        = require("es5-ext/string/#/contains");
  
  var d = (module.exports = function (dscr, value/*, options*/) {
    var c, e, w, options, desc;
    if (arguments.length < 2 || typeof dscr !== "string") {
      options = value;
      value = dscr;
      dscr = null;
    } else {
      options = arguments[2];
    }
    if (isValue(dscr)) {
      c = contains.call(dscr, "c");
      e = contains.call(dscr, "e");
      w = contains.call(dscr, "w");
    } else {
      c = w = true;
      e = false;
    }
  
    desc = { value: value, configurable: c, enumerable: e, writable: w };
    return !options ? desc : assign(normalizeOpts(options), desc);
  });
  
  d.gs = function (dscr, get, set/*, options*/) {
    var c, e, options, desc;
    if (typeof dscr !== "string") {
      options = set;
      set = get;
      get = dscr;
      dscr = null;
    } else {
      options = arguments[3];
    }
    if (!isValue(get)) {
      get = undefined;
    } else if (!isPlainFunction(get)) {
      options = get;
      get = set = undefined;
    } else if (!isValue(set)) {
      set = undefined;
    } else if (!isPlainFunction(set)) {
      options = set;
      set = undefined;
    }
    if (isValue(dscr)) {
      c = contains.call(dscr, "c");
      e = contains.call(dscr, "e");
    } else {
      c = true;
      e = false;
    }
  
    desc = { get: get, set: set, configurable: c, enumerable: e };
    return !options ? desc : assign(normalizeOpts(options), desc);
  };
  
  },{"es5-ext/object/assign":25,"es5-ext/object/normalize-options":37,"es5-ext/string/#/contains":44,"type/plain-function/is":77,"type/value/is":81}],12:[function(require,module,exports){
  // Inspired by Google Closure:
  // http://closure-library.googlecode.com/svn/docs/
  // closure_goog_array_array.js.html#goog.array.clear
  
  "use strict";
  
  var value = require("../../object/valid-value");
  
  module.exports = function () {
    value(this).length = 0;
    return this;
  };
  
  },{"../../object/valid-value":43}],13:[function(require,module,exports){
  "use strict";
  
  module.exports = require("./is-implemented")() ? Array.from : require("./shim");
  
  },{"./is-implemented":14,"./shim":15}],14:[function(require,module,exports){
  "use strict";
  
  module.exports = function () {
    var from = Array.from, arr, result;
    if (typeof from !== "function") return false;
    arr = ["raz", "dwa"];
    result = from(arr);
    return Boolean(result && result !== arr && result[1] === "dwa");
  };
  
  },{}],15:[function(require,module,exports){
  "use strict";
  
  var iteratorSymbol = require("es6-symbol").iterator
    , isArguments    = require("../../function/is-arguments")
    , isFunction     = require("../../function/is-function")
    , toPosInt       = require("../../number/to-pos-integer")
    , callable       = require("../../object/valid-callable")
    , validValue     = require("../../object/valid-value")
    , isValue        = require("../../object/is-value")
    , isString       = require("../../string/is-string")
    , isArray        = Array.isArray
    , call           = Function.prototype.call
    , desc           = { configurable: true, enumerable: true, writable: true, value: null }
    , defineProperty = Object.defineProperty;
  
  // eslint-disable-next-line complexity, max-lines-per-function
  module.exports = function (arrayLike /*, mapFn, thisArg*/) {
    var mapFn = arguments[1]
      , thisArg = arguments[2]
      , Context
      , i
      , j
      , arr
      , length
      , code
      , iterator
      , result
      , getIterator
      , value;
  
    arrayLike = Object(validValue(arrayLike));
  
    if (isValue(mapFn)) callable(mapFn);
    if (!this || this === Array || !isFunction(this)) {
      // Result: Plain array
      if (!mapFn) {
        if (isArguments(arrayLike)) {
          // Source: Arguments
          length = arrayLike.length;
          if (length !== 1) return Array.apply(null, arrayLike);
          arr = new Array(1);
          arr[0] = arrayLike[0];
          return arr;
        }
        if (isArray(arrayLike)) {
          // Source: Array
          arr = new Array((length = arrayLike.length));
          for (i = 0; i < length; ++i) arr[i] = arrayLike[i];
          return arr;
        }
      }
      arr = [];
    } else {
      // Result: Non plain array
      Context = this;
    }
  
    if (!isArray(arrayLike)) {
      if ((getIterator = arrayLike[iteratorSymbol]) !== undefined) {
        // Source: Iterator
        iterator = callable(getIterator).call(arrayLike);
        if (Context) arr = new Context();
        result = iterator.next();
        i = 0;
        while (!result.done) {
          value = mapFn ? call.call(mapFn, thisArg, result.value, i) : result.value;
          if (Context) {
            desc.value = value;
            defineProperty(arr, i, desc);
          } else {
            arr[i] = value;
          }
          result = iterator.next();
          ++i;
        }
        length = i;
      } else if (isString(arrayLike)) {
        // Source: String
        length = arrayLike.length;
        if (Context) arr = new Context();
        for (i = 0, j = 0; i < length; ++i) {
          value = arrayLike[i];
          if (i + 1 < length) {
            code = value.charCodeAt(0);
            // eslint-disable-next-line max-depth
            if (code >= 0xd800 && code <= 0xdbff) value += arrayLike[++i];
          }
          value = mapFn ? call.call(mapFn, thisArg, value, j) : value;
          if (Context) {
            desc.value = value;
            defineProperty(arr, j, desc);
          } else {
            arr[j] = value;
          }
          ++j;
        }
        length = j;
      }
    }
    if (length === undefined) {
      // Source: array or array-like
      length = toPosInt(arrayLike.length);
      if (Context) arr = new Context(length);
      for (i = 0; i < length; ++i) {
        value = mapFn ? call.call(mapFn, thisArg, arrayLike[i], i) : arrayLike[i];
        if (Context) {
          desc.value = value;
          defineProperty(arr, i, desc);
        } else {
          arr[i] = value;
        }
      }
    }
    if (Context) {
      desc.value = null;
      arr.length = length;
    }
    return arr;
  };
  
  },{"../../function/is-arguments":16,"../../function/is-function":17,"../../number/to-pos-integer":23,"../../object/is-value":32,"../../object/valid-callable":41,"../../object/valid-value":43,"../../string/is-string":47,"es6-symbol":56}],16:[function(require,module,exports){
  "use strict";
  
  var objToString = Object.prototype.toString
    , id = objToString.call((function () { return arguments; })());
  
  module.exports = function (value) { return objToString.call(value) === id; };
  
  },{}],17:[function(require,module,exports){
  "use strict";
  
  var objToString = Object.prototype.toString
    , isFunctionStringTag = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
  
  module.exports = function (value) {
    return typeof value === "function" && isFunctionStringTag(objToString.call(value));
  };
  
  },{}],18:[function(require,module,exports){
  "use strict";
  
  // eslint-disable-next-line no-empty-function
  module.exports = function () {};
  
  },{}],19:[function(require,module,exports){
  "use strict";
  
  module.exports = require("./is-implemented")() ? Math.sign : require("./shim");
  
  },{"./is-implemented":20,"./shim":21}],20:[function(require,module,exports){
  "use strict";
  
  module.exports = function () {
    var sign = Math.sign;
    if (typeof sign !== "function") return false;
    return sign(10) === 1 && sign(-20) === -1;
  };
  
  },{}],21:[function(require,module,exports){
  "use strict";
  
  module.exports = function (value) {
    value = Number(value);
    if (isNaN(value) || value === 0) return value;
    return value > 0 ? 1 : -1;
  };
  
  },{}],22:[function(require,module,exports){
  "use strict";
  
  var sign  = require("../math/sign")
    , abs   = Math.abs
    , floor = Math.floor;
  
  module.exports = function (value) {
    if (isNaN(value)) return 0;
    value = Number(value);
    if (value === 0 || !isFinite(value)) return value;
    return sign(value) * floor(abs(value));
  };
  
  },{"../math/sign":19}],23:[function(require,module,exports){
  "use strict";
  
  var toInteger = require("./to-integer")
    , max       = Math.max;
  
  module.exports = function (value) { return max(0, toInteger(value)); };
  
  },{"./to-integer":22}],24:[function(require,module,exports){
  // Internal method, used by iteration functions.
  // Calls a function for each key-value pair found in object
  // Optionally takes compareFn to iterate object in specific order
  
  "use strict";
  
  var callable                = require("./valid-callable")
    , value                   = require("./valid-value")
    , bind                    = Function.prototype.bind
    , call                    = Function.prototype.call
    , keys                    = Object.keys
    , objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable;
  
  module.exports = function (method, defVal) {
    return function (obj, cb /*, thisArg, compareFn*/) {
      var list, thisArg = arguments[2], compareFn = arguments[3];
      obj = Object(value(obj));
      callable(cb);
  
      list = keys(obj);
      if (compareFn) {
        list.sort(typeof compareFn === "function" ? bind.call(compareFn, obj) : undefined);
      }
      if (typeof method !== "function") method = list[method];
      return call.call(method, list, function (key, index) {
        if (!objPropertyIsEnumerable.call(obj, key)) return defVal;
        return call.call(cb, thisArg, obj[key], key, obj, index);
      });
    };
  };
  
  },{"./valid-callable":41,"./valid-value":43}],25:[function(require,module,exports){
  "use strict";
  
  module.exports = require("./is-implemented")() ? Object.assign : require("./shim");
  
  },{"./is-implemented":26,"./shim":27}],26:[function(require,module,exports){
  "use strict";
  
  module.exports = function () {
    var assign = Object.assign, obj;
    if (typeof assign !== "function") return false;
    obj = { foo: "raz" };
    assign(obj, { bar: "dwa" }, { trzy: "trzy" });
    return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
  };
  
  },{}],27:[function(require,module,exports){
  "use strict";
  
  var keys  = require("../keys")
    , value = require("../valid-value")
    , max   = Math.max;
  
  module.exports = function (dest, src /*, …srcn*/) {
    var error, i, length = max(arguments.length, 2), assign;
    dest = Object(value(dest));
    assign = function (key) {
      try {
        dest[key] = src[key];
      } catch (e) {
        if (!error) error = e;
      }
    };
    for (i = 1; i < length; ++i) {
      src = arguments[i];
      keys(src).forEach(assign);
    }
    if (error !== undefined) throw error;
    return dest;
  };
  
  },{"../keys":33,"../valid-value":43}],28:[function(require,module,exports){
  "use strict";
  
  var aFrom  = require("../array/from")
    , assign = require("./assign")
    , value  = require("./valid-value");
  
  module.exports = function (obj /*, propertyNames, options*/) {
    var copy = Object(value(obj)), propertyNames = arguments[1], options = Object(arguments[2]);
    if (copy !== obj && !propertyNames) return copy;
    var result = {};
    if (propertyNames) {
      aFrom(propertyNames, function (propertyName) {
        if (options.ensure || propertyName in obj) result[propertyName] = obj[propertyName];
      });
    } else {
      assign(result, obj);
    }
    return result;
  };
  
  },{"../array/from":13,"./assign":25,"./valid-value":43}],29:[function(require,module,exports){
  // Workaround for http://code.google.com/p/v8/issues/detail?id=2804
  
  "use strict";
  
  var create = Object.create, shim;
  
  if (!require("./set-prototype-of/is-implemented")()) {
    shim = require("./set-prototype-of/shim");
  }
  
  module.exports = (function () {
    var nullObject, polyProps, desc;
    if (!shim) return create;
    if (shim.level !== 1) return create;
  
    nullObject = {};
    polyProps = {};
    desc = { configurable: false, enumerable: false, writable: true, value: undefined };
    Object.getOwnPropertyNames(Object.prototype).forEach(function (name) {
      if (name === "__proto__") {
        polyProps[name] = {
          configurable: true,
          enumerable: false,
          writable: true,
          value: undefined
        };
        return;
      }
      polyProps[name] = desc;
    });
    Object.defineProperties(nullObject, polyProps);
  
    Object.defineProperty(shim, "nullPolyfill", {
      configurable: false,
      enumerable: false,
      writable: false,
      value: nullObject
    });
  
    return function (prototype, props) {
      return create(prototype === null ? nullObject : prototype, props);
    };
  })();
  
  },{"./set-prototype-of/is-implemented":39,"./set-prototype-of/shim":40}],30:[function(require,module,exports){
  "use strict";
  
  module.exports = require("./_iterate")("forEach");
  
  },{"./_iterate":24}],31:[function(require,module,exports){
  "use strict";
  
  var isValue = require("./is-value");
  
  var map = { function: true, object: true };
  
  module.exports = function (value) { return (isValue(value) && map[typeof value]) || false; };
  
  },{"./is-value":32}],32:[function(require,module,exports){
  "use strict";
  
  var _undefined = require("../function/noop")(); // Support ES3 engines
  
  module.exports = function (val) { return val !== _undefined && val !== null; };
  
  },{"../function/noop":18}],33:[function(require,module,exports){
  "use strict";
  
  module.exports = require("./is-implemented")() ? Object.keys : require("./shim");
  
  },{"./is-implemented":34,"./shim":35}],34:[function(require,module,exports){
  "use strict";
  
  module.exports = function () {
    try {
      Object.keys("primitive");
      return true;
    } catch (e) {
      return false;
    }
  };
  
  },{}],35:[function(require,module,exports){
  "use strict";
  
  var isValue = require("../is-value");
  
  var keys = Object.keys;
  
  module.exports = function (object) { return keys(isValue(object) ? Object(object) : object); };
  
  },{"../is-value":32}],36:[function(require,module,exports){
  "use strict";
  
  var callable = require("./valid-callable")
    , forEach  = require("./for-each")
    , call     = Function.prototype.call;
  
  module.exports = function (obj, cb /*, thisArg*/) {
    var result = {}, thisArg = arguments[2];
    callable(cb);
    forEach(obj, function (value, key, targetObj, index) {
      result[key] = call.call(cb, thisArg, value, key, targetObj, index);
    });
    return result;
  };
  
  },{"./for-each":30,"./valid-callable":41}],37:[function(require,module,exports){
  "use strict";
  
  var isValue = require("./is-value");
  
  var forEach = Array.prototype.forEach, create = Object.create;
  
  var process = function (src, obj) {
    var key;
    for (key in src) obj[key] = src[key];
  };
  
  // eslint-disable-next-line no-unused-vars
  module.exports = function (opts1 /*, …options*/) {
    var result = create(null);
    forEach.call(arguments, function (options) {
      if (!isValue(options)) return;
      process(Object(options), result);
    });
    return result;
  };
  
  },{"./is-value":32}],38:[function(require,module,exports){
  "use strict";
  
  module.exports = require("./is-implemented")() ? Object.setPrototypeOf : require("./shim");
  
  },{"./is-implemented":39,"./shim":40}],39:[function(require,module,exports){
  "use strict";
  
  var create = Object.create, getPrototypeOf = Object.getPrototypeOf, plainObject = {};
  
  module.exports = function (/* CustomCreate*/) {
    var setPrototypeOf = Object.setPrototypeOf, customCreate = arguments[0] || create;
    if (typeof setPrototypeOf !== "function") return false;
    return getPrototypeOf(setPrototypeOf(customCreate(null), plainObject)) === plainObject;
  };
  
  },{}],40:[function(require,module,exports){
  /* eslint no-proto: "off" */
  
  // Big thanks to @WebReflection for sorting this out
  // https://gist.github.com/WebReflection/5593554
  
  "use strict";
  
  var isObject         = require("../is-object")
    , value            = require("../valid-value")
    , objIsPrototypeOf = Object.prototype.isPrototypeOf
    , defineProperty   = Object.defineProperty
    , nullDesc         = { configurable: true, enumerable: false, writable: true, value: undefined }
    , validate;
  
  validate = function (obj, prototype) {
    value(obj);
    if (prototype === null || isObject(prototype)) return obj;
    throw new TypeError("Prototype must be null or an object");
  };
  
  module.exports = (function (status) {
    var fn, set;
    if (!status) return null;
    if (status.level === 2) {
      if (status.set) {
        set = status.set;
        fn = function (obj, prototype) {
          set.call(validate(obj, prototype), prototype);
          return obj;
        };
      } else {
        fn = function (obj, prototype) {
          validate(obj, prototype).__proto__ = prototype;
          return obj;
        };
      }
    } else {
      fn = function self(obj, prototype) {
        var isNullBase;
        validate(obj, prototype);
        isNullBase = objIsPrototypeOf.call(self.nullPolyfill, obj);
        if (isNullBase) delete self.nullPolyfill.__proto__;
        if (prototype === null) prototype = self.nullPolyfill;
        obj.__proto__ = prototype;
        if (isNullBase) defineProperty(self.nullPolyfill, "__proto__", nullDesc);
        return obj;
      };
    }
    return Object.defineProperty(fn, "level", {
      configurable: false,
      enumerable: false,
      writable: false,
      value: status.level
    });
  })(
    (function () {
      var tmpObj1 = Object.create(null)
        , tmpObj2 = {}
        , set
        , desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
  
      if (desc) {
        try {
          set = desc.set; // Opera crashes at this point
          set.call(tmpObj1, tmpObj2);
        } catch (ignore) {}
        if (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { set: set, level: 2 };
      }
  
      tmpObj1.__proto__ = tmpObj2;
      if (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { level: 2 };
  
      tmpObj1 = {};
      tmpObj1.__proto__ = tmpObj2;
      if (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { level: 1 };
  
      return false;
    })()
  );
  
  require("../create");
  
  },{"../create":29,"../is-object":31,"../valid-value":43}],41:[function(require,module,exports){
  "use strict";
  
  module.exports = function (fn) {
    if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
    return fn;
  };
  
  },{}],42:[function(require,module,exports){
  "use strict";
  
  var isObject = require("./is-object");
  
  module.exports = function (value) {
    if (!isObject(value)) throw new TypeError(value + " is not an Object");
    return value;
  };
  
  },{"./is-object":31}],43:[function(require,module,exports){
  "use strict";
  
  var isValue = require("./is-value");
  
  module.exports = function (value) {
    if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
    return value;
  };
  
  },{"./is-value":32}],44:[function(require,module,exports){
  "use strict";
  
  module.exports = require("./is-implemented")() ? String.prototype.contains : require("./shim");
  
  },{"./is-implemented":45,"./shim":46}],45:[function(require,module,exports){
  "use strict";
  
  var str = "razdwatrzy";
  
  module.exports = function () {
    if (typeof str.contains !== "function") return false;
    return str.contains("dwa") === true && str.contains("foo") === false;
  };
  
  },{}],46:[function(require,module,exports){
  "use strict";
  
  var indexOf = String.prototype.indexOf;
  
  module.exports = function (searchString /*, position*/) {
    return indexOf.call(this, searchString, arguments[1]) > -1;
  };
  
  },{}],47:[function(require,module,exports){
  "use strict";
  
  var objToString = Object.prototype.toString, id = objToString.call("");
  
  module.exports = function (value) {
    return (
      typeof value === "string" ||
      (value &&
        typeof value === "object" &&
        (value instanceof String || objToString.call(value) === id)) ||
      false
    );
  };
  
  },{}],48:[function(require,module,exports){
  "use strict";
  
  var generated = Object.create(null), random = Math.random;
  
  module.exports = function () {
    var str;
    do {
      str = random().toString(36).slice(2);
    } while (generated[str]);
    return str;
  };
  
  },{}],49:[function(require,module,exports){
  "use strict";
  
  var setPrototypeOf = require("es5-ext/object/set-prototype-of")
    , contains       = require("es5-ext/string/#/contains")
    , d              = require("d")
    , Symbol         = require("es6-symbol")
    , Iterator       = require("./");
  
  var defineProperty = Object.defineProperty, ArrayIterator;
  
  ArrayIterator = module.exports = function (arr, kind) {
    if (!(this instanceof ArrayIterator)) throw new TypeError("Constructor requires 'new'");
    Iterator.call(this, arr);
    if (!kind) kind = "value";
    else if (contains.call(kind, "key+value")) kind = "key+value";
    else if (contains.call(kind, "key")) kind = "key";
    else kind = "value";
    defineProperty(this, "__kind__", d("", kind));
  };
  if (setPrototypeOf) setPrototypeOf(ArrayIterator, Iterator);
  
  // Internal %ArrayIteratorPrototype% doesn't expose its constructor
  delete ArrayIterator.prototype.constructor;
  
  ArrayIterator.prototype = Object.create(Iterator.prototype, {
    _resolve: d(function (i) {
      if (this.__kind__ === "value") return this.__list__[i];
      if (this.__kind__ === "key+value") return [i, this.__list__[i]];
      return i;
    })
  });
  defineProperty(ArrayIterator.prototype, Symbol.toStringTag, d("c", "Array Iterator"));
  
  },{"./":52,"d":11,"es5-ext/object/set-prototype-of":38,"es5-ext/string/#/contains":44,"es6-symbol":56}],50:[function(require,module,exports){
  "use strict";
  
  var isArguments = require("es5-ext/function/is-arguments")
    , callable    = require("es5-ext/object/valid-callable")
    , isString    = require("es5-ext/string/is-string")
    , get         = require("./get");
  
  var isArray = Array.isArray, call = Function.prototype.call, some = Array.prototype.some;
  
  module.exports = function (iterable, cb /*, thisArg*/) {
    var mode, thisArg = arguments[2], result, doBreak, broken, i, length, char, code;
    if (isArray(iterable) || isArguments(iterable)) mode = "array";
    else if (isString(iterable)) mode = "string";
    else iterable = get(iterable);
  
    callable(cb);
    doBreak = function () {
      broken = true;
    };
    if (mode === "array") {
      some.call(iterable, function (value) {
        call.call(cb, thisArg, value, doBreak);
        return broken;
      });
      return;
    }
    if (mode === "string") {
      length = iterable.length;
      for (i = 0; i < length; ++i) {
        char = iterable[i];
        if (i + 1 < length) {
          code = char.charCodeAt(0);
          if (code >= 0xd800 && code <= 0xdbff) char += iterable[++i];
        }
        call.call(cb, thisArg, char, doBreak);
        if (broken) break;
      }
      return;
    }
    result = iterable.next();
  
    while (!result.done) {
      call.call(cb, thisArg, result.value, doBreak);
      if (broken) return;
      result = iterable.next();
    }
  };
  
  },{"./get":51,"es5-ext/function/is-arguments":16,"es5-ext/object/valid-callable":41,"es5-ext/string/is-string":47}],51:[function(require,module,exports){
  "use strict";
  
  var isArguments    = require("es5-ext/function/is-arguments")
    , isString       = require("es5-ext/string/is-string")
    , ArrayIterator  = require("./array")
    , StringIterator = require("./string")
    , iterable       = require("./valid-iterable")
    , iteratorSymbol = require("es6-symbol").iterator;
  
  module.exports = function (obj) {
    if (typeof iterable(obj)[iteratorSymbol] === "function") return obj[iteratorSymbol]();
    if (isArguments(obj)) return new ArrayIterator(obj);
    if (isString(obj)) return new StringIterator(obj);
    return new ArrayIterator(obj);
  };
  
  },{"./array":49,"./string":54,"./valid-iterable":55,"es5-ext/function/is-arguments":16,"es5-ext/string/is-string":47,"es6-symbol":56}],52:[function(require,module,exports){
  "use strict";
  
  var clear    = require("es5-ext/array/#/clear")
    , assign   = require("es5-ext/object/assign")
    , callable = require("es5-ext/object/valid-callable")
    , value    = require("es5-ext/object/valid-value")
    , d        = require("d")
    , autoBind = require("d/auto-bind")
    , Symbol   = require("es6-symbol");
  
  var defineProperty = Object.defineProperty, defineProperties = Object.defineProperties, Iterator;
  
  module.exports = Iterator = function (list, context) {
    if (!(this instanceof Iterator)) throw new TypeError("Constructor requires 'new'");
    defineProperties(this, {
      __list__: d("w", value(list)),
      __context__: d("w", context),
      __nextIndex__: d("w", 0)
    });
    if (!context) return;
    callable(context.on);
    context.on("_add", this._onAdd);
    context.on("_delete", this._onDelete);
    context.on("_clear", this._onClear);
  };
  
  // Internal %IteratorPrototype% doesn't expose its constructor
  delete Iterator.prototype.constructor;
  
  defineProperties(
    Iterator.prototype,
    assign(
      {
        _next: d(function () {
          var i;
          if (!this.__list__) return undefined;
          if (this.__redo__) {
            i = this.__redo__.shift();
            if (i !== undefined) return i;
          }
          if (this.__nextIndex__ < this.__list__.length) return this.__nextIndex__++;
          this._unBind();
          return undefined;
        }),
        next: d(function () {
          return this._createResult(this._next());
        }),
        _createResult: d(function (i) {
          if (i === undefined) return { done: true, value: undefined };
          return { done: false, value: this._resolve(i) };
        }),
        _resolve: d(function (i) {
          return this.__list__[i];
        }),
        _unBind: d(function () {
          this.__list__ = null;
          delete this.__redo__;
          if (!this.__context__) return;
          this.__context__.off("_add", this._onAdd);
          this.__context__.off("_delete", this._onDelete);
          this.__context__.off("_clear", this._onClear);
          this.__context__ = null;
        }),
        toString: d(function () {
          return "[object " + (this[Symbol.toStringTag] || "Object") + "]";
        })
      },
      autoBind({
        _onAdd: d(function (index) {
          if (index >= this.__nextIndex__) return;
          ++this.__nextIndex__;
          if (!this.__redo__) {
            defineProperty(this, "__redo__", d("c", [index]));
            return;
          }
          this.__redo__.forEach(function (redo, i) {
            if (redo >= index) this.__redo__[i] = ++redo;
          }, this);
          this.__redo__.push(index);
        }),
        _onDelete: d(function (index) {
          var i;
          if (index >= this.__nextIndex__) return;
          --this.__nextIndex__;
          if (!this.__redo__) return;
          i = this.__redo__.indexOf(index);
          if (i !== -1) this.__redo__.splice(i, 1);
          this.__redo__.forEach(function (redo, j) {
            if (redo > index) this.__redo__[j] = --redo;
          }, this);
        }),
        _onClear: d(function () {
          if (this.__redo__) clear.call(this.__redo__);
          this.__nextIndex__ = 0;
        })
      })
    )
  );
  
  defineProperty(
    Iterator.prototype,
    Symbol.iterator,
    d(function () {
      return this;
    })
  );
  
  },{"d":11,"d/auto-bind":10,"es5-ext/array/#/clear":12,"es5-ext/object/assign":25,"es5-ext/object/valid-callable":41,"es5-ext/object/valid-value":43,"es6-symbol":56}],53:[function(require,module,exports){
  "use strict";
  
  var isArguments = require("es5-ext/function/is-arguments")
    , isValue     = require("es5-ext/object/is-value")
    , isString    = require("es5-ext/string/is-string");
  
  var iteratorSymbol = require("es6-symbol").iterator
    , isArray        = Array.isArray;
  
  module.exports = function (value) {
    if (!isValue(value)) return false;
    if (isArray(value)) return true;
    if (isString(value)) return true;
    if (isArguments(value)) return true;
    return typeof value[iteratorSymbol] === "function";
  };
  
  },{"es5-ext/function/is-arguments":16,"es5-ext/object/is-value":32,"es5-ext/string/is-string":47,"es6-symbol":56}],54:[function(require,module,exports){
  // Thanks @mathiasbynens
  // http://mathiasbynens.be/notes/javascript-unicode#iterating-over-symbols
  
  "use strict";
  
  var setPrototypeOf = require("es5-ext/object/set-prototype-of")
    , d              = require("d")
    , Symbol         = require("es6-symbol")
    , Iterator       = require("./");
  
  var defineProperty = Object.defineProperty, StringIterator;
  
  StringIterator = module.exports = function (str) {
    if (!(this instanceof StringIterator)) throw new TypeError("Constructor requires 'new'");
    str = String(str);
    Iterator.call(this, str);
    defineProperty(this, "__length__", d("", str.length));
  };
  if (setPrototypeOf) setPrototypeOf(StringIterator, Iterator);
  
  // Internal %ArrayIteratorPrototype% doesn't expose its constructor
  delete StringIterator.prototype.constructor;
  
  StringIterator.prototype = Object.create(Iterator.prototype, {
    _next: d(function () {
      if (!this.__list__) return undefined;
      if (this.__nextIndex__ < this.__length__) return this.__nextIndex__++;
      this._unBind();
      return undefined;
    }),
    _resolve: d(function (i) {
      var char = this.__list__[i], code;
      if (this.__nextIndex__ === this.__length__) return char;
      code = char.charCodeAt(0);
      if (code >= 0xd800 && code <= 0xdbff) return char + this.__list__[this.__nextIndex__++];
      return char;
    })
  });
  defineProperty(StringIterator.prototype, Symbol.toStringTag, d("c", "String Iterator"));
  
  },{"./":52,"d":11,"es5-ext/object/set-prototype-of":38,"es6-symbol":56}],55:[function(require,module,exports){
  "use strict";
  
  var isIterable = require("./is-iterable");
  
  module.exports = function (value) {
    if (!isIterable(value)) throw new TypeError(value + " is not iterable");
    return value;
  };
  
  },{"./is-iterable":53}],56:[function(require,module,exports){
  "use strict";
  
  module.exports = require("./is-implemented")()
    ? require("ext/global-this").Symbol
    : require("./polyfill");
  
  },{"./is-implemented":57,"./polyfill":62,"ext/global-this":69}],57:[function(require,module,exports){
  "use strict";
  
  var global     = require("ext/global-this")
    , validTypes = { object: true, symbol: true };
  
  module.exports = function () {
    var Symbol = global.Symbol;
    var symbol;
    if (typeof Symbol !== "function") return false;
    symbol = Symbol("test symbol");
    try { String(symbol); }
    catch (e) { return false; }
  
    // Return 'true' also for polyfills
    if (!validTypes[typeof Symbol.iterator]) return false;
    if (!validTypes[typeof Symbol.toPrimitive]) return false;
    if (!validTypes[typeof Symbol.toStringTag]) return false;
  
    return true;
  };
  
  },{"ext/global-this":69}],58:[function(require,module,exports){
  "use strict";
  
  module.exports = function (value) {
    if (!value) return false;
    if (typeof value === "symbol") return true;
    if (!value.constructor) return false;
    if (value.constructor.name !== "Symbol") return false;
    return value[value.constructor.toStringTag] === "Symbol";
  };
  
  },{}],59:[function(require,module,exports){
  "use strict";
  
  var d = require("d");
  
  var create = Object.create, defineProperty = Object.defineProperty, objPrototype = Object.prototype;
  
  var created = create(null);
  module.exports = function (desc) {
    var postfix = 0, name, ie11BugWorkaround;
    while (created[desc + (postfix || "")]) ++postfix;
    desc += postfix || "";
    created[desc] = true;
    name = "@@" + desc;
    defineProperty(
      objPrototype,
      name,
      d.gs(null, function (value) {
        // For IE11 issue see:
        // https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
        //    ie11-broken-getters-on-dom-objects
        // https://github.com/medikoo/es6-symbol/issues/12
        if (ie11BugWorkaround) return;
        ie11BugWorkaround = true;
        defineProperty(this, name, d(value));
        ie11BugWorkaround = false;
      })
    );
    return name;
  };
  
  },{"d":11}],60:[function(require,module,exports){
  "use strict";
  
  var d            = require("d")
    , NativeSymbol = require("ext/global-this").Symbol;
  
  module.exports = function (SymbolPolyfill) {
    return Object.defineProperties(SymbolPolyfill, {
      // To ensure proper interoperability with other native functions (e.g. Array.from)
      // fallback to eventual native implementation of given symbol
      hasInstance: d(
        "", (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill("hasInstance")
      ),
      isConcatSpreadable: d(
        "",
        (NativeSymbol && NativeSymbol.isConcatSpreadable) ||
          SymbolPolyfill("isConcatSpreadable")
      ),
      iterator: d("", (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill("iterator")),
      match: d("", (NativeSymbol && NativeSymbol.match) || SymbolPolyfill("match")),
      replace: d("", (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill("replace")),
      search: d("", (NativeSymbol && NativeSymbol.search) || SymbolPolyfill("search")),
      species: d("", (NativeSymbol && NativeSymbol.species) || SymbolPolyfill("species")),
      split: d("", (NativeSymbol && NativeSymbol.split) || SymbolPolyfill("split")),
      toPrimitive: d(
        "", (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill("toPrimitive")
      ),
      toStringTag: d(
        "", (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill("toStringTag")
      ),
      unscopables: d(
        "", (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill("unscopables")
      )
    });
  };
  
  },{"d":11,"ext/global-this":69}],61:[function(require,module,exports){
  "use strict";
  
  var d              = require("d")
    , validateSymbol = require("../../../validate-symbol");
  
  var registry = Object.create(null);
  
  module.exports = function (SymbolPolyfill) {
    return Object.defineProperties(SymbolPolyfill, {
      for: d(function (key) {
        if (registry[key]) return registry[key];
        return (registry[key] = SymbolPolyfill(String(key)));
      }),
      keyFor: d(function (symbol) {
        var key;
        validateSymbol(symbol);
        for (key in registry) {
          if (registry[key] === symbol) return key;
        }
        return undefined;
      })
    });
  };
  
  },{"../../../validate-symbol":63,"d":11}],62:[function(require,module,exports){
  // ES2015 Symbol polyfill for environments that do not (or partially) support it
  
  "use strict";
  
  var d                    = require("d")
    , validateSymbol       = require("./validate-symbol")
    , NativeSymbol         = require("ext/global-this").Symbol
    , generateName         = require("./lib/private/generate-name")
    , setupStandardSymbols = require("./lib/private/setup/standard-symbols")
    , setupSymbolRegistry  = require("./lib/private/setup/symbol-registry");
  
  var create = Object.create
    , defineProperties = Object.defineProperties
    , defineProperty = Object.defineProperty;
  
  var SymbolPolyfill, HiddenSymbol, isNativeSafe;
  
  if (typeof NativeSymbol === "function") {
    try {
      String(NativeSymbol());
      isNativeSafe = true;
    } catch (ignore) {}
  } else {
    NativeSymbol = null;
  }
  
  // Internal constructor (not one exposed) for creating Symbol instances.
  // This one is used to ensure that `someSymbol instanceof Symbol` always return false
  HiddenSymbol = function Symbol(description) {
    if (this instanceof HiddenSymbol) throw new TypeError("Symbol is not a constructor");
    return SymbolPolyfill(description);
  };
  
  // Exposed `Symbol` constructor
  // (returns instances of HiddenSymbol)
  module.exports = SymbolPolyfill = function Symbol(description) {
    var symbol;
    if (this instanceof Symbol) throw new TypeError("Symbol is not a constructor");
    if (isNativeSafe) return NativeSymbol(description);
    symbol = create(HiddenSymbol.prototype);
    description = description === undefined ? "" : String(description);
    return defineProperties(symbol, {
      __description__: d("", description),
      __name__: d("", generateName(description))
    });
  };
  
  setupStandardSymbols(SymbolPolyfill);
  setupSymbolRegistry(SymbolPolyfill);
  
  // Internal tweaks for real symbol producer
  defineProperties(HiddenSymbol.prototype, {
    constructor: d(SymbolPolyfill),
    toString: d("", function () { return this.__name__; })
  });
  
  // Proper implementation of methods exposed on Symbol.prototype
  // They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype
  defineProperties(SymbolPolyfill.prototype, {
    toString: d(function () { return "Symbol (" + validateSymbol(this).__description__ + ")"; }),
    valueOf: d(function () { return validateSymbol(this); })
  });
  defineProperty(
    SymbolPolyfill.prototype,
    SymbolPolyfill.toPrimitive,
    d("", function () {
      var symbol = validateSymbol(this);
      if (typeof symbol === "symbol") return symbol;
      return symbol.toString();
    })
  );
  defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d("c", "Symbol"));
  
  // Proper implementaton of toPrimitive and toStringTag for returned symbol instances
  defineProperty(
    HiddenSymbol.prototype, SymbolPolyfill.toStringTag,
    d("c", SymbolPolyfill.prototype[SymbolPolyfill.toStringTag])
  );
  
  // Note: It's important to define `toPrimitive` as last one, as some implementations
  // implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
  // And that may invoke error in definition flow:
  // See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149
  defineProperty(
    HiddenSymbol.prototype, SymbolPolyfill.toPrimitive,
    d("c", SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive])
  );
  
  },{"./lib/private/generate-name":59,"./lib/private/setup/standard-symbols":60,"./lib/private/setup/symbol-registry":61,"./validate-symbol":63,"d":11,"ext/global-this":69}],63:[function(require,module,exports){
  "use strict";
  
  var isSymbol = require("./is-symbol");
  
  module.exports = function (value) {
    if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
    return value;
  };
  
  },{"./is-symbol":58}],64:[function(require,module,exports){
  "use strict";
  
  module.exports = require("./is-implemented")() ? WeakMap : require("./polyfill");
  
  },{"./is-implemented":65,"./polyfill":67}],65:[function(require,module,exports){
  "use strict";
  
  module.exports = function () {
    var weakMap, obj;
  
    if (typeof WeakMap !== "function") return false;
    try {
      // WebKit doesn't support arguments and crashes
      weakMap = new WeakMap([[obj = {}, "one"], [{}, "two"], [{}, "three"]]);
    } catch (e) {
      return false;
    }
    if (String(weakMap) !== "[object WeakMap]") return false;
    if (typeof weakMap.set !== "function") return false;
    if (weakMap.set({}, 1) !== weakMap) return false;
    if (typeof weakMap.delete !== "function") return false;
    if (typeof weakMap.has !== "function") return false;
    if (weakMap.get(obj) !== "one") return false;
  
    return true;
  };
  
  },{}],66:[function(require,module,exports){
  // Exports true if environment provides native `WeakMap` implementation, whatever that is.
  
  "use strict";
  
  module.exports = (function () {
    if (typeof WeakMap !== "function") return false;
    return Object.prototype.toString.call(new WeakMap()) === "[object WeakMap]";
  }());
  
  },{}],67:[function(require,module,exports){
  "use strict";
  
  var isValue           = require("es5-ext/object/is-value")
    , setPrototypeOf    = require("es5-ext/object/set-prototype-of")
    , object            = require("es5-ext/object/valid-object")
    , ensureValue       = require("es5-ext/object/valid-value")
    , randomUniq        = require("es5-ext/string/random-uniq")
    , d                 = require("d")
    , getIterator       = require("es6-iterator/get")
    , forOf             = require("es6-iterator/for-of")
    , toStringTagSymbol = require("es6-symbol").toStringTag
    , isNative          = require("./is-native-implemented")
  
    , isArray = Array.isArray, defineProperty = Object.defineProperty
    , objHasOwnProperty = Object.prototype.hasOwnProperty, getPrototypeOf = Object.getPrototypeOf
    , WeakMapPoly;
  
  module.exports = WeakMapPoly = function (/* Iterable*/) {
    var iterable = arguments[0], self;
  
    if (!(this instanceof WeakMapPoly)) throw new TypeError("Constructor requires 'new'");
    self = isNative && setPrototypeOf && (WeakMap !== WeakMapPoly)
      ? setPrototypeOf(new WeakMap(), getPrototypeOf(this)) : this;
  
    if (isValue(iterable)) {
      if (!isArray(iterable)) iterable = getIterator(iterable);
    }
    defineProperty(self, "__weakMapData__", d("c", "$weakMap$" + randomUniq()));
    if (!iterable) return self;
    forOf(iterable, function (val) {
      ensureValue(val);
      self.set(val[0], val[1]);
    });
    return self;
  };
  
  if (isNative) {
    if (setPrototypeOf) setPrototypeOf(WeakMapPoly, WeakMap);
    WeakMapPoly.prototype = Object.create(WeakMap.prototype, { constructor: d(WeakMapPoly) });
  }
  
  Object.defineProperties(WeakMapPoly.prototype, {
    delete: d(function (key) {
      if (objHasOwnProperty.call(object(key), this.__weakMapData__)) {
        delete key[this.__weakMapData__];
        return true;
      }
      return false;
    }),
    get: d(function (key) {
      if (!objHasOwnProperty.call(object(key), this.__weakMapData__)) return undefined;
      return key[this.__weakMapData__];
    }),
    has: d(function (key) {
      return objHasOwnProperty.call(object(key), this.__weakMapData__);
    }),
    set: d(function (key, value) {
      defineProperty(object(key), this.__weakMapData__, d("c", value));
      return this;
    }),
    toString: d(function () {
      return "[object WeakMap]";
    })
  });
  defineProperty(WeakMapPoly.prototype, toStringTagSymbol, d("c", "WeakMap"));
  
  },{"./is-native-implemented":66,"d":11,"es5-ext/object/is-value":32,"es5-ext/object/set-prototype-of":38,"es5-ext/object/valid-object":42,"es5-ext/object/valid-value":43,"es5-ext/string/random-uniq":48,"es6-iterator/for-of":50,"es6-iterator/get":51,"es6-symbol":56}],68:[function(require,module,exports){
  var naiveFallback = function () {
    if (typeof self === "object" && self) return self;
    if (typeof window === "object" && window) return window;
    throw new Error("Unable to resolve global `this`");
  };
  
  module.exports = (function () {
    if (this) return this;
  
    // Unexpected strict mode (may happen if e.g. bundled into ESM module)
  
    // Thanks @mathiasbynens -> https://mathiasbynens.be/notes/globalthis
    // In all ES5+ engines global object inherits from Object.prototype
    // (if you approached one that doesn't please report)
    try {
      Object.defineProperty(Object.prototype, "__global__", {
        get: function () { return this; },
        configurable: true
      });
    } catch (error) {
      // Unfortunate case of Object.prototype being sealed (via preventExtensions, seal or freeze)
      return naiveFallback();
    }
    try {
      // Safari case (window.__global__ is resolved with global context, but __global__ does not)
      if (!__global__) return naiveFallback();
      return __global__;
    } finally {
      delete Object.prototype.__global__;
    }
  })();
  
  },{}],69:[function(require,module,exports){
  "use strict";
  
  module.exports = require("./is-implemented")() ? globalThis : require("./implementation");
  
  },{"./implementation":68,"./is-implemented":70}],70:[function(require,module,exports){
  "use strict";
  
  module.exports = function () {
    if (typeof globalThis !== "object") return false;
    if (!globalThis) return false;
    return globalThis.Array === Array;
  };
  
  },{}],71:[function(require,module,exports){
  "use strict";
  
  var isPrototype = require("../prototype/is");
  
  module.exports = function (value) {
    if (typeof value !== "function") return false;
  
    if (!hasOwnProperty.call(value, "length")) return false;
  
    try {
      if (typeof value.length !== "number") return false;
      if (typeof value.call !== "function") return false;
      if (typeof value.apply !== "function") return false;
    } catch (error) {
      return false;
    }
  
    return !isPrototype(value);
  };
  
  },{"../prototype/is":78}],72:[function(require,module,exports){
  "use strict";
  
  var isValue       = require("../value/is")
    , isObject      = require("../object/is")
    , stringCoerce  = require("../string/coerce")
    , toShortString = require("./to-short-string");
  
  var resolveMessage = function (message, value) {
    return message.replace("%v", toShortString(value));
  };
  
  module.exports = function (value, defaultMessage, inputOptions) {
    if (!isObject(inputOptions)) throw new TypeError(resolveMessage(defaultMessage, value));
    if (!isValue(value)) {
      if ("default" in inputOptions) return inputOptions["default"];
      if (inputOptions.isOptional) return null;
    }
    var errorMessage = stringCoerce(inputOptions.errorMessage);
    if (!isValue(errorMessage)) errorMessage = defaultMessage;
    throw new TypeError(resolveMessage(errorMessage, value));
  };
  
  },{"../object/is":75,"../string/coerce":79,"../value/is":81,"./to-short-string":74}],73:[function(require,module,exports){
  "use strict";
  
  module.exports = function (value) {
    try {
      return value.toString();
    } catch (error) {
      try { return String(value); }
      catch (error2) { return null; }
    }
  };
  
  },{}],74:[function(require,module,exports){
  "use strict";
  
  var safeToString = require("./safe-to-string");
  
  var reNewLine = /[\n\r\u2028\u2029]/g;
  
  module.exports = function (value) {
    var string = safeToString(value);
    if (string === null) return "<Non-coercible to string value>";
    // Trim if too long
    if (string.length > 100) string = string.slice(0, 99) + "…";
    // Replace eventual new lines
    string = string.replace(reNewLine, function (char) {
      switch (char) {
        case "\n":
          return "\\n";
        case "\r":
          return "\\r";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        /* istanbul ignore next */
        default:
          throw new Error("Unexpected character");
      }
    });
    return string;
  };
  
  },{"./safe-to-string":73}],75:[function(require,module,exports){
  "use strict";
  
  var isValue = require("../value/is");
  
  // prettier-ignore
  var possibleTypes = { "object": true, "function": true, "undefined": true /* document.all */ };
  
  module.exports = function (value) {
    if (!isValue(value)) return false;
    return hasOwnProperty.call(possibleTypes, typeof value);
  };
  
  },{"../value/is":81}],76:[function(require,module,exports){
  "use strict";
  
  var resolveException = require("../lib/resolve-exception")
    , is               = require("./is");
  
  module.exports = function (value/*, options*/) {
    if (is(value)) return value;
    return resolveException(value, "%v is not a plain function", arguments[1]);
  };
  
  },{"../lib/resolve-exception":72,"./is":77}],77:[function(require,module,exports){
  "use strict";
  
  var isFunction = require("../function/is");
  
  var classRe = /^\s*class[\s{/}]/, functionToString = Function.prototype.toString;
  
  module.exports = function (value) {
    if (!isFunction(value)) return false;
    if (classRe.test(functionToString.call(value))) return false;
    return true;
  };
  
  },{"../function/is":71}],78:[function(require,module,exports){
  "use strict";
  
  var isObject = require("../object/is");
  
  module.exports = function (value) {
    if (!isObject(value)) return false;
    try {
      if (!value.constructor) return false;
      return value.constructor.prototype === value;
    } catch (error) {
      return false;
    }
  };
  
  },{"../object/is":75}],79:[function(require,module,exports){
  "use strict";
  
  var isValue  = require("../value/is")
    , isObject = require("../object/is");
  
  var objectToString = Object.prototype.toString;
  
  module.exports = function (value) {
    if (!isValue(value)) return null;
    if (isObject(value)) {
      // Reject Object.prototype.toString coercion
      var valueToString = value.toString;
      if (typeof valueToString !== "function") return null;
      if (valueToString === objectToString) return null;
      // Note: It can be object coming from other realm, still as there's no ES3 and CSP compliant
      // way to resolve its realm's Object.prototype.toString it's left as not addressed edge case
    }
    try {
      return "" + value; // Ensure implicit coercion
    } catch (error) {
      return null;
    }
  };
  
  },{"../object/is":75,"../value/is":81}],80:[function(require,module,exports){
  "use strict";
  
  var resolveException = require("../lib/resolve-exception")
    , is               = require("./is");
  
  module.exports = function (value/*, options*/) {
    if (is(value)) return value;
    return resolveException(value, "Cannot use %v", arguments[1]);
  };
  
  },{"../lib/resolve-exception":72,"./is":81}],81:[function(require,module,exports){
  "use strict";
  
  // ES3 safe
  var _undefined = void 0;
  
  module.exports = function (value) { return value !== _undefined && value !== null; };
  
  },{}]},{},[1]);
  