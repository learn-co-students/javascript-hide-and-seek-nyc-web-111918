// const graph = require('./graph.js');
// const bfs = require('./bfs.js');
function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget() {
	return document.querySelector('#nested .target')
}

function deepestChild() {
  let gn = document.querySelectorAll('#grand-node div');
  return gn[gn.length-1]
}

function increaseRankBy(n) {
  let rankedEls = document.querySelectorAll('.ranked-list li')
  for(let i=0; i < rankedEls.length; i++) {
    console.log(rankedEls.innerHtml)
    rankedEls[i].innerHTML = parseInt(rankedEls[i].innerHTML)+n;
  }
}
