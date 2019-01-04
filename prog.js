const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
canvas.width = 1250;
canvas.height = 670;
const canvasWidth=canvas.width;
const canvasHeight=canvas.height;



 const randomWithRange= function(min, max)
{
    range = (max - min);     
   return (Math.random() * range)+min;
}
;

const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;

};
const presentImg=new Image();
presentImg.src='present.png';
const goodSantaImg = new Image();
goodSantaImg.src = "goodSanta.png";
const backImage = new Image();
backImage.src = 'https://vignette.wikia.nocookie.net/clubpenguinfanon/images/4/41/North_Pole_image.PNG/revision/latest?cb=20091224154210';

const badSantaImg = new Image();
badSantaImg.src = 'badSanta.png';

const RaindeerImg = new Image();
RaindeerImg.src = 'Raindeer.png'
 
 
  
const raindeer = {
    x: 0,
    y: 0,
    xDelta: 1,
    yDelta: 1,
    width: 80,
    height: 140,
    image: RaindeerImg,
    draw: function() {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    },
    update: function() {

        if (this.x < 0 || this.x > canvas.width - this.width) {
            this.xDelta = this.xDelta * -1
        }
        if (this.y < 0 || this.y > canvas.height - this.height ) {
            this.yDelta = this.yDelta * -1
        }

        this.x +=this.xDelta;
        this.y += this.yDelta;
    },
}



const badSantas = function(count, canvasWidth, canvasHeight) {
    const array = [];
    for (let i = 0; i < count; i++) {

        array[array.length] = {

            x: rand(canvasWidth - 40),
            y: rand(canvasHeight - 60),
            width: 40,
            height: 60,
            xDelta:2, 
            yDelta:2,
            draw: function() {
                context.drawImage(badSantaImg, this.x, this.y, this.width, this.height)

            },
            update: function() {
                if (this.x < 0 || this.x > canvasWidth - 40) {
                   this.xDelta*=-1
                }
                if (this.y < 0 || this.y > canvasHeight - 60) {
                    this.yDelta *= -1
                }

                    


                if (this.x < raindeer.x + raindeer.width && this.x + this.width > raindeer.x && this.y < raindeer.y + raindeer.height &&
                    this.height + this.y > raindeer.y) {

                    alert("Game Over!");
                }
                this.xDelta+=.0095;
                this.yDelta+=.0095;
                this.x+=this.xDelta;
                this.y+=this.yDelta;
            }
        };
    }
    return array;
};
const Boost =  {
                x:randomWithRange(350,870),
                y: rand(canvas.height-80),
                width: 70,
                height: 70,
                xDelta: 0,
                yDelta: 0,
                draw: function() {
                    context.drawImage(presentImg, this.x, this.y, this.width, this.height)
                },
                update: function() {
                    

                    if (this.x < raindeer.x + raindeer.width && this.x + this.width > raindeer.x && this.y < raindeer.y + raindeer.height &&
                        this.height + this.y > raindeer.y) {

                         raindeer.xDelta*=1.1;
                         raindeer.yDelta*=1.1;
                         
                    
                }
            }
        }
const goodSantas =  {
                x:randomWithRange(900,1150),
                y: rand(canvas.height-80),
                width: 70,
                height: 70,
                xDelta: 0,
                yDelta: 0,
                draw: function() {
                    context.drawImage(goodSantaImg, this.x, this.y, this.width, this.height)
                },
                update: function() {
                    

                    if (this.x < raindeer.x + raindeer.width && this.x + this.width > raindeer.x && this.y < raindeer.y + raindeer.height &&
                        this.height + this.y > raindeer.y) {

                        raindeer.width+=0.1;
                        raindeer.height+=0.1;
                    
                }
            }
        }
        const vgoodSantas =  {
                x:randomWithRange(100,300),
                y: rand(canvas.height-80),
                width: 50,
                height: 50,
                xDelta: 0,
                yDelta: 0,
                draw: function() {
                    context.drawImage(goodSantaImg, this.x, this.y, this.width, this.height)
                },
                update: function() {
                    

                    if (this.x < raindeer.x + raindeer.width && this.x + this.width > raindeer.x && this.y < raindeer.y + raindeer.height &&
                        this.height + this.y > raindeer.y) {

                        raindeer.width-=0.1;
                        raindeer.height-=0.1;
                    
                }
            }
        }
            
        


        
            const BadSantas = badSantas(rand(8), canvas.width, canvas.height);

            const leftKey = 37;
            const upKey = 38;
            const rightKey = 39;
            const downKey = 40;
            document.addEventListener('keydown', function(event) {
                if (event.keyCode === rightKey) {
                    raindeer.xDelta = 5;
                }
            }, false);
            document.addEventListener('keyup', function(event) {
                raindeer.xDelta = 0;
            }, false);
            document.addEventListener('keydown', function(event) {
                if (event.keyCode === leftKey) {
                    raindeer.xDelta = -5;
                }
            }, false);
            document.addEventListener('keyup', function(event) {
                raindeer.xDelta = 0;
            }, false);
            document.addEventListener('keydown', function(event) {
                if (event.keyCode === downKey) {
                    raindeer.yDelta = 5;
                }
            }, false);
            document.addEventListener('keyup', function(event) {
                raindeer.yDelta = 0;
            }, false);
            document.addEventListener('keydown', function(event) {
                if (event.keyCode === upKey) {
                    raindeer.yDelta = -5;
                }
                if (raindeer.x + raindeer.width === canvas.width) {
                    raindeer.xDelta = 0;
                }
            }, false);
            document.addEventListener('keyup', function(event) {
                raindeer.yDelta = 0;
            }, false);

             

            const draw = function(arrayy) {

                for (let i = 0; i < arrayy.length; i = i + 1) {
                    badSantas(arrayy[i].draw())

                }
            };

            const update = function(array1) {
                for (let i = 0; i < array1.length; i++) {
                    badSantas(array1[i].update());


                }
            };

             
            const loop = function() {
                context.drawImage(backImage, 0, 0, canvas.width, canvas.height)
                Boost.draw();
                Boost.update();
                vgoodSantas.draw();
                vgoodSantas.update();
                goodSantas.draw();
                goodSantas.update();
                draw(BadSantas);
                update(BadSantas);
                raindeer.draw();
                raindeer.update();
               
                requestAnimationFrame(loop);
            }

            loop(); 
            

  		
 
