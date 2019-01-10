function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}


// code from solution
function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

// my code -- in theory does exactly what lab is asking for but is not passing the test. Why is this?
// function increaseRankBy(n) {
//   const lis =  document.querySelectorAll('.ranked-list li')
//   for (let i = 0; i < lis.length; i++) {
//     lis[i].innerText = parseInt(lis[i].innerText) + n
//   }
// }
