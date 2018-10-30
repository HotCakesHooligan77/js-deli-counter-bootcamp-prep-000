var katzDeliLine = ["Ada", "Grace"];

function currentLine(katzDeliLine){
  if(!katzDeliLine.length){
    return "The line is currently empty."
 }
 
 
  for (let i = 0, l = katzDeliLine.length; i<l; i++){
    katzDeliLine.push('${i+1}. ${line[i]}')
  }
}

function nowServing(katzDeliLine){
  if(!katzDeliLine.length){
    return "There is nobody waiting to be served!"
  }
  return 'Currently serving ${line.shift()}.'
}

function takeANumber(katzDeliLine, [i]){
  
    katzDeliLine.push(name);
  
  return 'Welcome, ${katzDeliLine}. You are number  in line.';
}