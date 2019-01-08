function getFirstSelector(selector){
    return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild(){
  let deepestChild = document.getElementById('grand-node')
  while(deepestChild.querySelector('div')){
    deepestChild = deepestChild.querySelector('div')
  };
  return deepestChild
};

function increaseRankBy(n){
  for (let i = 0; i < document.querySelectorAll('.ranked-list').length; i++) {
    let rankedLists = document.querySelectorAll('.ranked-list')[i]
    for(let j = 0; j< rankedLists.querySelectorAll('li').length; j++){
      rankedLists.querySelectorAll('li')[j].innerHTML = parseInt(rankedLists.querySelectorAll('li')[j].innerHTML) + n
    }
  }
}
