//IMG_0897.JPG, IMG_1454.JPG, IMG_1605.JPG, IMG_1606.JPG, IMG_3944.JPG, IMG_3980.JPG, IMG_4162.JPG
loadScript('https://cdn.rawgit.com/fnassar/live_coding_final/main/images0100.js')
loadScript('https://cdn.rawgit.com/fnassar/live_coding_final/main/blur.js')

osc(15,0,1).modulate(noise(2,()=>cc[0]*127))
  .repeat(()=>cc[0]*127, ()=>cc[0]*127)
  //.scrollX(({time})=>Math.sin(time*0.05),0)
  .out(o1)

// can use update and switch case with midi:
let whichVisual = 0
let whichImage = 0
update = () =>{
  // very important! only change source once, when necessary
  if (whichVisual != (cc[15]*127|0)){
    whichVisual = (cc[15]*127|0);
    visuals[whichVisual](3,10,0.9);
  }
  if (whichImage != (cc[14]*127|0)){
    whichImage = (cc[14]*127|0);
    images[whichImage]();
  }
}

images[0]()

// hush()
render(o2)

visuals[0](3,100,0.9)


// clear update
hush()
// OR (without stopping visuals all together)
update = ()=> {}

visuals = [
  ()=>{//0
    src(o2)
      .modulate(src(o1),0.01)
      .blend(o0,0.1)
      .mult(shape(2, 0.3).scrollY(()=>cc[1]))
    .out(o2)
  },
  ()=>{//1
    src(o2)
      .modulate(src(o1),.01)
      .blend(o0,0.1)
      .mult(shape(2, 0.3).scrollY(()=>cc[2]))
      .modulateRotate(shape(999,0.3,0.5),({time})=>Math.sin(time*0.1))
    .out(o2)
  },
  ()=>{//2
    src(o2)
      .modulate(src(o1),0.01)
      .blend(o0,0.1)
    .out(o2)
  },
  ()=>{//3
    src(o2)
      .modulate(src(o1),.01)
      .blend(o0,0.2)
      .mult(shape(2,()=>cc[3]))
      .modulateRotate(shape(999,0.3,0.5),({time})=>Math.sin(time*0.1))
    .out(o2)
  },
  ()=>{//4
    src(o2)
      .modulate(src(o1),.01)
      .blend(o0,0.3)
      .mult(shape(2,0.8))
      .modulateRotate(shape(999,0.3,0.5),({time})=>Math.sin(time*0.1))
      .mult(shape(4, 0.6).scrollX(()=>cc[4]*127))
    .out(o2)
  },
  ()=>{//5
    src(o2)
    .kaleid(()=>4+Math.sin(time)*0.05)
    .modulate(src(o1),.01)
    .blend(o0,0.5)
    .modulate(noise(0.2,0,1).scale(({time})=>Math.sin(time*0.5)*2+1),4)
    .mult(shape(4, 0.5).scrollX(()=>cc[5]*127))
    .out(o2)
  },
  ()=>{//6
    src(o2)
    .kaleid(()=>6+Math.sin(time)*0.05)
    .modulate(src(o1),.01)
    .blend(o0,0.4)
    .modulate(noise(0.2,0,1).scale(({time})=>Math.sin(time*1)*2+1),4)
    .modulateScale(osc(2,-0.5,0).kaleid(()=>cc[6]*127).scale(0.5),2,0)
    .blend(o2).blend(o2).blend(o2)
    // .mult(shape(4, 1))
    .out(o2)
  },
  ()=>{//7
    src(o2)
    .modulate(src(o1),.01)
    .blend(o0,0.5)
    .modulateScale(osc(2,-0.5,0).scale(1),2,0)
    // .mult(shape(4, 0.7).scrollX(()=>cc[7]*127))
    .out(o2)
  },
  ()=>{//8
    src(o2)
      .modulate(src(o1),.01)
      .blend(o0,0.1)
      .mult(shape(2, 0.3).scrollY(()=>cc[2]))
      .scrollX(()=>cc[8])
      // .modulateRotate(shape(999,0.3,0.5),({time})=>Math.sin(time*0.1))
    .out(o2)
  },
  // ()=>{//8
  //   src(o2)
  //   .kaleid(()=>6+Math.sin(time)*0.05)
  //   .modulate(src(o1),.01)
  //   .blend(o0,0.5)
  //   .modulate(noise(0.2,0,1).scale(({time})=>Math.sin(time*1)*2+1),4)
  //   .modulateScale(osc(2,-0.5,0).kaleid(2).scale(0.5),2,0)
  //   //
  //   .add(src(s2).modulateRepeat(osc(10), 3.0, 3.0, 0.5, 0.5),0.2)
  //   // .brightness(0.1)
  //   .mult(shape(4, 0.4).scrollX(()=>cc[1]))
  //   .out(o2)
  // },
  ()=>{//9
    src(o2)
    .kaleid(()=>6+Math.sin(time)*0.05)
    .modulate(src(o1),.01)
    .blend(o0,0.5)
    .modulate(noise(0.2,0,1).scale(({time})=>Math.sin(time*1)*2+1),4)
    .add(src(s2).modulateRepeat(osc(10), 3.0, 3.0, 0.5, 0.5),0.2)
    .mult(shape(4, 0.4).scrollX([-0.2,0.2].smooth(0.5)))
    .scrollY(()=>cc[1])
    .modulateRotate(shape(999,0.3,0.5),1)
    // .pixelate(100,100)
    .out(o2)
  },
  (x)=>{//10
    src(o2)
    .kaleid(()=>6+Math.sin(time)*0.05)
    .modulate(src(o1),.01)
    .blend(o0,1)
    .modulate(noise(0.2,0,1).scale(({time})=>Math.sin(time*1)*2+1),4)
    .add(src(s2).modulateRepeat(osc(10), 3.0, 3.0, 0.5, 0.5),0.2)
    // .add(shape(4, 0.4).scrollX([-0.2,0.2].smooth(0.5)))
    .scrollY(()=>cc[1])
    .modulateRotate(shape(999,0.3,0.5),x)
    // .mult(shape(4, 0.8).scrollX(()=>cc[10]*127))
    // .pixelate(100,100)
    .out(o2)
  },
  (x)=>{//11
    src(o2)
    .kaleid(()=>6+Math.sin(time)*0.05)
    .modulate(src(o1),.01)
    .blend(o0,0.5)
    .modulate(noise(0.2,0,1).scale(({time})=>Math.sin(time*1)*2+1),4)
    .add(src(s2).modulateRepeat(osc(10), 3.0, 3.0, 0.5, 0.5),0.2)
    // .mult(shape(4, 0.4).scrollX([-0.2,0.2].smooth(0.5)))
    .scrollY(()=>cc[1])
    .modulateRotate(shape(999,0.3,0.5),x) // -5
    // .mult(shape(4, 0.7))//.scrollX([-0.4,0.4].smooth(0.5).fast(0.5)))
    .out(o2)
  },
  (a,x,y)=>{//12
    src(o2)
    // .kaleid(()=>6+Math.sin(time)*0.05)
    .modulate(src(o1),.01)
    .blend(o0,0.6)
    .modulate(noise(0.2,0,1))//scale(({time})=>Math.sin(time*0.5)*2+1),4)
    .add(src(s2)
         .modulateRepeat(osc(10), 3.0, 3.0, 0.5, 0.5),0.3)
    // .mult(shape(4, 0.4).scrollX([-0.2,0.2].smooth(0.5)))
    .scrollY(()=>cc[10])
    .modulateRotate(shape(999,0.3,0.5),0.5) // -5
    .mult(shape(4, y))//.scrollX([-0.4,0.4].smooth(0.5).fast(0.5)))
    .out(o2)
  }
]
