
exports.min = function min (array) {
  if (!array|| array.length==0) {
    return 0;
  }
  
  let m = array[0];
  for (let i =1; i<array.length; i++) {
    if(array[i]<m) {
      m = array[i];
    }
  }
  return m;
}

exports.max = function max (array) {
  if (!array|| array.length==0) {
    return 0;
  }
  let ma = array[0];
  for (let i =1; i<array.length; i++) {
    if(array[i]>ma) {
      ma = array[i];
    }
  }
  return ma;
}

exports.avg = function avg (array) {
  if (!array|| array.length==0) {
    return 0;
  }
 
  let sum = 0;
  for (let i =0; i<array.length; i++) {
    sum = sum +array[i];
  }
  av = sum/array.length;
  
  return av;
}
