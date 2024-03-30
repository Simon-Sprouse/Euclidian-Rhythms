
function range(start, stop, step = 1) {
    return Array.from({ length: (stop - start) / step }, (_, i) => start + (i * step));
}
  
function arrayMod(arr, mod) {
    return arr.map(x => x % mod);
}
  
function arrayMul(arr, multiplier) {
    return arr.map(x => x * multiplier);
}
  
function diff(arr) {
    return arr.slice(1).map((n, i) => n - arr[i]);
}
  
function bjorklund(pulses, steps, shift = 0) {

  
    let arr = range(shift, steps + shift + 1, 1);
    // console.log(arr);
  
    arr = arrayMul(arr, pulses);
    // console.log(arr);
  
    arr = arrayMod(arr, steps);
    // console.log(arr);
  
    let differences = diff(arr);
    // console.log(differences);
  
    let result = differences.map(d => d < 0 ? 1 : 0);
    // console.log(result);
  
    return result;
}

export default bjorklund;