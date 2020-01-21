window.addEventListener('load',function(){
    figure = document.getElementById('multiSlide');
    topButton       = document.getElementById('top');
    bottomButton    = document.getElementById('bottom');
    leftButton      = document.getElementById('left');
    rightButton     = document.getElementById('right');  
    new Box(-2,2,'images/1.jpg');
    new Box(-1,2,'images/2.jpg');
    new Box(0,2,'images/3.jpg');
    new Box(1,2,'images/4.jpg');
    new Box(2,2,'images/5.jpg');
    new Box(3,2,'images/6.jpg');
    new Box(4,2,'images/7.jpg');
    new Box(5,2,'images/8.jpg');
    new Box(2,-2,'images/9.jpg');
    new Box(2,-1,'images/10.jpg');
    new Box(2,0,'images/11.jpg');
    new Box(2,1,'images/12.jpg');
    new Box(2,2,'images/13.jpg');
    new Box(2,3,'images/14.jpg');
    new Box(2,4,'images/15.jpg');
    new Box(2,5,'images/16.jpg');
    
    topButton.addEventListener('click', function(){
        if(slidePosY>-3)
            slide('Y',-1);
    });
    bottomButton.addEventListener('click', function(){
        if(slidePosY<4)
            slide('Y',1);
    });
    leftButton.addEventListener('click', function(){
        if(slidePosX>-3)
            slide('X',-1);
    });
    rightButton.addEventListener('click', function(){
        if(slidePosX<4)
            slide('X',1);
    });
});

var unit            = 160;
var registeredBoxes = [];
var slidePosX       = 0;
var slidePosY       = 0;
var Box = function(posX,posY,img){
    this.pos    = {};
    this.pos.X  = posX;
    this.pos.Y  = posY;
    this.img    = img;
    this.init();
}
Box.prototype = {
    init : function(){
        this.DOMElement             = document.createElement('div');
        this.DOMElement.className   = 'box';
        this.DOMElement.style.left  = (this.pos.X*unit)-unit+'px';
        this.DOMElement.style.top   = (this.pos.Y*unit)-unit+'px';
        this.DOMElement.setAttribute('data-pos',this.pos.X.toString()+this.pos.Y.toString());  
        var img = document.createElement('img');
        img.src = this.img;
        this.DOMElement.appendChild(img);
        figure.appendChild(this.DOMElement);
        registeredBoxes.push(this); 
    },
    setPosition : function(axis,val){
        this.pos[axis] = val;
        if(axis == 'X'){
            this.DOMElement.style.left  = (this.pos[axis]*unit)-unit+'px';
        }else if(axis == 'Y'){
            this.DOMElement.style.top   = (this.pos[axis]*unit)-unit+'px';
        }
        this.DOMElement.setAttribute('data-pos',this.pos.X.toString()+this.pos.Y.toString());
    }
}

function slide(axis,dir){
    var len = registeredBoxes.length;
    if(axis == 'Y'){
        for(var i=0; i<len; i++){
            if(registeredBoxes[i].pos['X']=='2'){
                registeredBoxes[i].setPosition(axis,registeredBoxes[i].pos['Y']+(1*dir));
            }
        }
        slidePosY = slidePosY+dir;
    }else if(axis == 'X'){
        for(var i=0; i<len; i++){
            if(registeredBoxes[i].pos['Y']=='2'){
                registeredBoxes[i].setPosition(axis,registeredBoxes[i].pos['X']+(1*dir));
            }
        }
        slidePosX = slidePosX+dir;
    }
}


var text = document.getElementsByClassName('text2')[0];  

var together =(function (){
    var together = new Date();
    together.setFullYear(2018, 3, 16); 			//时间年月日
    together.setHours(0);						//小时	
    together.setMinutes(0);					//分钟
    together.setSeconds(0);					//秒前一位
    together.setMilliseconds(0);
    return together;
})();

setInterval(() => { 
    var current = Date();
    var seconds = (Date.parse(current) - Date.parse(together)) / 1000;
    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);
    var hours = Math.floor(seconds / 3600);
    if (hours < 10) {
        hours = "0" + hours;
    }
    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    seconds = seconds % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    } 
    text.innerHTML=`第<span class='gits'>${days}</span>天<span class='gits'>${hours}</span>小时<span class='gits'>${minutes}</span>分钟<span class='gits'>${seconds}</span>秒`
}, 1000,together); 