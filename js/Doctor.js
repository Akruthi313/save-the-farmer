class Doctor{
    constructor(){

        this.doc=createSprite(width/2,height/2);
        this.doc.scale=0.15;
        this.doc.addImage("doctor",doctorimg);
        //this.doc.debug=true;
       // this.doc.addAnimation("rightWalk",rightWalk);
      //  this.doc.addAnimation("leftWalk",leftWalk);
       this.heart=loadImage ("images/immunity.png");
        this.immunity=4;
        //this.doc.velocityX=-5;

    }

     showImmunity(){
         var xpos=width-250;
         var ypos=60;
        for(var i=0;i<this.immunity;i++){
            if(i===5){
                xpos=width-250;
                ypos=100;
            }
            image(this.heart,xpos,ypos,30,30);
            xpos=xpos+30;
            
        }
        //console.log("immunity");
        
    
    }

    checkImmunity(){
        for (var k = 0; k < virusGroup.length; k++) {
            if ( virusGroup.contains( virusGroup.get(k))) {
            if ( this.doc.isTouching( virusGroup.get(k))) {
               virusGroup.get(k).destroy();
                this.immunity = this.immunity - 1; 
            } 
            }
          }

          if(this.immunity===0){
            gameState="end";
          }

          
    }

    increaseImmunity(){
        for (var k = 0; k < fruitGroup.length; k++) {
            if ( fruitGroup.contains( fruitGroup.get(k))) {
            if ( this.doc.isTouching( fruitGroup.get(k))) {
               fruitGroup.get(k).destroy();
                score = score+1; 
            } 
            }
          }

          if(score%10===0){
            this.immunity = this.immunity + 1; 
            immunitySnd.play();
            if(this.immunity===10){
                gameState="won";
            }
          }

           }

    move(){
        if(this.doc.x<posX-5){
            this.doc.x+=5;
        }else if(this.doc.x>posX+5){
            this.doc.x-=5;
        }

        if(this.doc.y<posY-5){
            this.doc.y+=5;
        }else if(this.doc.y>posY+5){       
        this.doc.y-=5;
        }
    }


}