var katzDeliLine = [];
function takeANumber (katzDeliLine,customer){
  katzDeliLine.push(customer);
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "There is nobody waiting to be serverd."
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }

}
