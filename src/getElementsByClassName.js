// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var checkClass = function(node) {
    if (node.classList.contains(className))
      results.push(node);

    var theChildren = node.childNodes;
    
    for (var x=0; x<theChildren.length; x++)
      if (theChildren[x] != "[object Text]")
        checkClass(theChildren[x]);
  }

  var results=[];

  // Check the classes in <body>
  checkClass(document.body);

  return results;
};
