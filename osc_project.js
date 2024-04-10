s0.initImage("/Users/martapienkosz/Desktop/IMG_3980.jpg")
s1.initImage("/Users/martapienkosz/Desktop/IMG_1606.JPG")
s2.initImage("/Users/martapienkosz/Desktop/IMG_1605.JPG")

src(s0).out(o0)
let p5 = new P5();
let scrollPos = 0; // Define scroll position variable outside ‹
p5.draw = () => {
  if (p5.mouseIsPressed) {
      scrollPos = p5.map(p5.mouseX, 0, p5.width, 0, p5.TWO_PI);
      src(s1).scrollX(() => scrollPos).out(o0);
    }
}
// ()=>ccActual[3]
osc(15,0,1).modulate(noise(()=>ccActual[0],0.1))
  //.repeat(, ()=>ccActual[1])
  .out(o1)

src(o2)
  .modulate(src(o1),.01)
  .blend(o0,0.1)
  //.rotate(()=>ccActual[3])
  //.kaleid(()=>ccActual[2]+1)
  .out(o2)

render(o2)
