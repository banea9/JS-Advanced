function solve() {
   let typesObj = {};
   for (let input of arguments) {

      let element = input;
      let type = typeof input;
      console.log(`${type}: ${element}`);

      if (typesObj.hasOwnProperty(type)) {
         typesObj[type]++;
      }
      else {
         typesObj[type] = 1;
      }
   }
   let sorted = [...Object.entries(typesObj)].sort((a, b) => b[1] - a[1]);
   

   for (let [key, value] of sorted) {
      console.log(`${key} = ${value}`)
   }
}
solve('cat', 42, function () { console.log('Hello world!'); })