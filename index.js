function getFirstSelector(string){
  return document.querySelector(string)
}

function nestedTarget(){
  return document.querySelector(`#nested .target`)
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll(`.ranked-list`)

  for (let i=0; i<rankedLists.length; i++){
    let children = rankedLists[i].children;
    for(let y=0; y<children.length; y++){
      children[y].innerHTML = parseInt(children[y].innerHTML)+n
    }
  }
}

function deepestChild(){
  // return document.querySelector("#grand-node div div div div")
  let grandNode = document.querySelector("#grand-node")
  let innerNode = grandNode.children[0]

  while (innerNode){
    // debugger
    grandNode = innerNode
    innerNode = grandNode.children[0]
  }
  return grandNode
}
