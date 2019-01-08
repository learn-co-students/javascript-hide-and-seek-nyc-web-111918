function getFirstSelector(selector){
  return document.querySelector(`${selector}`);
}

function nestedTarget(selector){
  return document.getElementById('nested').querySelector('.target');
}

function deepestChild(target=null){
  if (target==null){
    target = document.getElementById('grand-node')
  }
  if (target.querySelectorAll('div').length>0){
    return deepestChild(target.querySelectorAll('div')[0])
  }else{
    return target
  }
}

function increaseRankBy(n){
  for (let list of document.querySelectorAll('.ranked-list')){
    for (let node of list.querySelectorAll('li')){
      node.innerHTML=parseInt(node.innerHTML)+n
    }
  }
}
