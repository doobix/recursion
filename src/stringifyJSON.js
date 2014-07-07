// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var stringified;
  var objCopy;
  var objSize=0;

  if (Array.isArray(obj)) {
    objCopy = obj.splice(0);
    stringified = '[';
  } else if (typeof obj == "object" && obj !== null) {
    for (var key in obj)
      objSize++;
    stringified = '{';
  }

  if (!isNaN(obj) && !Array.isArray(obj))
    stringified = '' + obj + '';
  else if (Array.isArray(obj)) {
    if (!obj.length)
      stringified += '';
    else if (obj.length == 1 && !isNaN(obj))
      stringified += obj;
    else
      stringified += stringifyJSON(objCopy.pop());
  } else if (typeof obj == "object") {
    var currentSize=0;
    var temp;
    for (var key in obj) {
      currentSize++;
      
      temp = stringifyJSON(obj[key]);
      if (temp != "") {
        stringified += '"' + key + '":' + temp;
        
        if (currentSize < objSize) 
          stringified += ',';
      }

    }
  } else if (typeof obj == "function" || typeof obj == "undefined")
    stringified = "";
  else
    stringified = '"' + obj + '"';

  if (Array.isArray(obj))
    stringified += ']';
  else if (typeof obj == "object" && obj !== null)
    stringified += '}';

  return stringified;
};