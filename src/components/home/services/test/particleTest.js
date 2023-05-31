export function startCanvas() {
  /** 
   * 
   *  var c = document.getElementById("nokey");
 
 
   var ctx = c.getContext('2d'),
     cw = c.width = 200,
     ch = c.height = 200;
 
   for (var x = 0; x < cw; x++) {
     for (var y = 0; y < ch; y++) {
       ctx.fillStyle = 'hsl(0, 0%, ' + (100 - (Math.random() * 15)) + '%)';
       ctx.fillRect(x, y, 1, 1);
     }
   }
 
   document.getElementById('test').style.background = 'url(' + c.toDataURL() + ')'
  */



  function id(el) {
    return document.getElementById(el);
  }

  var canvas = id('nokey');
  var c = canvas.getContext('2d');

  var screen = {
    width: 1536,
    height: 722
  }
  canvas.width = screen.width;
  canvas.height = screen.height;
  var colors = ['LightCoral'];

  function Rain(x, y, w, h, fall_speed, color) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.fall_speed = fall_speed;
    this.color = color;
    this.draw = function () {
      c.fillStyle = this.color;
      c.fillRect(this.x, this.y, this.w, this.h);

    }
    this.update = function () {
      // this.x += this.dx;
      this.y += this.fall_speed;

      if (this.y >= screen.height) {
        this.y = -this.h;
        this.x = Math.floor(Math.random() * screen.width);
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      // this.y = screen.floor - this.h;

      this.draw();

    }

  }


  var w = 1;
  var h = 100;
  var fall_speed = 20;
  var rains = [

  ];

  for (var i = 0; i < 30; i++) {
    var x = Math.floor(Math.random() * screen.width);
    var y = Math.floor(Math.random() * screen.height);
    rains.push(new Rain(x, y, w, h, fall_speed, colors[Math.floor(Math.random() * colors.length)]));
  }
  var lastFrame = 0;

  function render(time) {
    var FPS = Math.floor(1000 / (time - lastFrame));
    lastFrame = time;

    requestAnimationFrame(render);
    c.clearRect(0, 0, screen.width, screen.height);
    c.font = '20px Verdana';
    c.fillStyle = 'white';
    c.fillText(FPS + ' FPS', 10, 50);
    for (var i = 0; i < rains.length; i++) {
      rains[i].update();
    }
  }
  render();

}
