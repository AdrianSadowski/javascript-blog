{
  'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/

  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);

    /* [DONE] remove class 'active' for all arcitle links */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* add class 'active' to the clicked link*/
    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all arcitles */
    const activeArticles = document.querySelectorAll('.posts article.active');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log('articleSelector', articleSelector);

    /* find the correct article using the selector (value of 'href' attribute)*/
    const targetArticle = document.querySelector(articleSelector);
    console.log('targetArticle', targetArticle);

    /* add class 'active' to the correst arcitle */
    targetArticle.classList.add('active');
  } 

  const optArticleSelector  = '.post'
    optTitleSelector = '.post-title'
    optTitleListSelector = '.titles'


  
  function generateTitleLinks(){
    
  /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
  /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    let html = '';
    //console.log('optArticleSelector', optArticleSelector);
    for(let article of articles){

    /* get the article id */
      const articleId = article.getAttribute('id');
      //console.log('articleId', articleId);
      
    /* find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
  
    /* get the title from the title element */
    
    /* create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      //console.log('linkHTML', linkHTML);

    /* insert link into titleList */
      html = html + linkHTML;
    }
    titleList.innerHTML = html;
    //console.log('html', html);
  }

  generateTitleLinks();
  const links = document.querySelectorAll('.titles a');
  console.log('links', links)
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  function clearMessages(){
    document.getElementById('messages').innerHTML = '';
  }
}