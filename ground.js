class ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            
        }
       this.x=x
       this.y=y
       this.w=w
       this.h=h
      // this.image=loadImage("plucking magoes/mango.png")
       this.body=Bodies,rectangle(x,y,w,h,options) 
       World.add(world,this.body)
    }
  disply(){
    var groundPos=this.body.position;
     push() 
     translate(groundPos.x, groundPos.y);
      rectMode(CENTER);
      //rotate(this.body.angle) 
      fill(255,0,255) 
      //imageMode(CENTER);
       //ellipseMode(CENTER); 
      // image(this.image, 0,0,this.r*2, this.r*2) 
      rect(0,0,this.w,this.h)
       pop()

  }
}