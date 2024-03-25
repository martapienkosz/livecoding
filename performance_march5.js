update = () => {
  let n = ccActual[2]+1
  let k = ccActual[4]
  shape(2, ()=>ccActual[6]*0.1) //()=>ccActual[6]*0.1
    .modulate(osc(1)) //*0.2
//    .pixelate(()=>ccActual[0])
    .rotate(()=>ccActual[1])
//    .scrollX(1/n)
//    .scrollY(1/k)
//    .mult(shape(()=>ccActual[5],()=>ccActual[5]*0.2))
//    .modulate(noise(()=>cc[3]*5,0,1))
    .scale(1, ()=>window.innerHeight/window.innerWidth,1)
    .out()
  }

  ()=>cc[0]
  ()=>(cc[4])*2
  ()=>(cc[4])*2)
()=>(cc[3])*0.5

  .modulate(noise(()=>(cc[3])*6,.1))

  .modulate(noise(()=>(cc[3])*6,.1))

.modulate(noise(()=>(cc[0])*3,.1))

  update = () =>{
    console.log(cc[3]);
  }


.modulate(noise(()=>(cc[0])*3,.1))
  .scale(1,()=>window.innerHeight/window.innerWidth,1)

  .mult(shape(4,0.5))





solid().out(o1)




///
navigator.requestMIDIAccess()
    .then(onMIDISuccess, onMIDIFailure);

function onMIDISuccess(midiAccess) {
    console.log(midiAccess);
    var inputs = midiAccess.inputs;
    var outputs = midiAccess.outputs;
    for (var input of midiAccess.inputs.values()){
        input.onmidimessage = getMIDIMessage;
    }
}

function onMIDIFailure() {
    console.log('Could not access your MIDI devices.');
}

//create an array to hold our cc values and init to a normalized value
var cc=Array(128).fill(0.5)
var ccActual=Array(128).fill(0)

getMIDIMessage = function(midiMessage) {
    var arr = midiMessage.data
    var index = arr[1]
    //console.log('Midi received on cc#' + index + ' value:' + arr[2])    // uncomment to monitor incoming Midi
    var val = (arr[2])/127.0  // normalize CC values to 0.0 - 1.0
    cc[index] = val
    ccActual[index] = arr[2]
}
