var hotItems = document.querySelectorAll('li.hot');

if(hotItems.length > 0){
  for(i = 0; i < hotItems.length; i++){
    hotItems[i].className = 'cool';
  }
}
