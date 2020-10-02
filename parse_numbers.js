function parseNumbers(string) {
  const array = string.split(",")
  const result = [];
  array.forEach (function(element) {
  if (element.includes('-')) {
  first = Number(element.split("-")[0])
  last = Number(element.split("-")[1])
  for (i = first; i <= last; i++) {
  result.push(i);
}
  } else {
    result.push(Number(element));
  }
  });
  console.log(result)
 };

parseNumbers('1-3,5,7,10,11-14');
