
const getFirstSelector = function(selector){
  return document.querySelector(selector);
}

const nestedTarget = function() {
  return document.querySelector('#nested .target');
}

const increaseRankBy = function(n) {
  // select all of the li under the ranked-list class
    const rankedNums = document.querySelectorAll('.ranked-list')
// loop over each li and update the value.
  for (let i = 0; i < rankedNums.length; i++) {
      //text of the li element.   Made it into a an integer
    let children = rankedNums[i].children;
        for (let j = 0; j < children.length; j++) {
          children[j].innerHTML = parseInt(children[j].innerHTML) + n;
        }
  }
  // rankedNums.forEach(function(nums){
  //   nums.innerText = parseInt(nums.innerText) + n;
  // })
}

function deepestChild() {
  let nodes = document.querySelectorAll('#grand-node div')
  return nodes[nodes.length - 1]
}
