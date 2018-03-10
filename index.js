var katzDeliLine = [];
function takeANumber (katzDeliLine,customer){
  katzDeliLine.push(customer);
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`;
}
