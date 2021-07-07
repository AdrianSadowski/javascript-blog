'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/
  const titleClickHandler = function(){
    console.log('Link was clicked!');
    console.log(event);
    /* remove class 'active' for all arcitle links */

    /* add class 'active' to the clicked link*/

    /* remove class 'active' from all arcitles */

    /* get 'href' attribute from the clicked link */

    /* find the correct article using the selector (value of 'href' attribute)*/

    /* add class 'active' to the correst arcitle */

  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }