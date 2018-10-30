var katzDeliLine = [];

function currentLine(katzDeliLine){
  if(!line.length){
    return "The line is currently empty."
 }
 
 
  for (let i = 0, l = line.length; i<l; i++){
    katzDeliLine.push('${i+1}. ${line[i]}')
  }
}

function nowServing(line){
  if(!line.length){
    return "There is nobody waiting to be served!"
  }
  return 'Currently serving ${line.shift()}.'
}

function takeANumber(katzDeliLine, name){
  
    line.push(name);
  
  return 'Welcome, ${katzDeliLine}. You are number 1 in line.';
}