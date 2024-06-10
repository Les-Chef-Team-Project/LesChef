let flag = false;


/* 페이지 스크롤 관리 */
function pageMovement(e){
  console.log(e.deltaY);  
  if(flag){
    return;
  }

  flag = true;

  if(e.deltaY >= 0){
    window.scrollBy(0, window.innerHeight);
  }
  else if(e.deltaY < 0){
    window.scrollBy(0, -window.innerHeight);
  }

  setTimeout(() => {
    flag = false;
  }, 650);
}


//테스트


const loginButton = document.getElementById('loginButton');
const myPageButton = document.getElementById('myPageButton');

//테스트

const leftLine = document.getElementById('left_box');
const underLine = document.getElementById('under_box');
const logo = document.querySelector('.Logo');
const menu = document.getElementById('left-sidebar');
const category = document.getElementById('menu');
const blockMenu = document.getElementById('select-menu');
const phrase1 = document.querySelectorAll('.main_phrase1')
const phrase2 = document.querySelectorAll('.main_phrase2')
let menuFlag = true;

window.onload = function(){
  window.scroll(0, 0);
}
/* 로고 클릭시 새로고침 */
logo.addEventListener('click', () =>{
  location.reload(true);
})

/* 메뉴 클릭 시 작동이벤트*/
category.addEventListener('click', () => {
  if(menuFlag){
    window.removeEventListener('wheel', pageMovement);
    blockMenu.style.opacity = 1;
    leftLine.style.opacity = 0;
    underLine.style.opacity = 0;
    changeOpacity(phrase1, 0);
    changeOpacity(phrase2, 0);
    loginButton.style.display = "none"; //
    myPageButton.style.display = "none"; //
    // removeItem();
    menuFlag = false;
  }
  else{
    window.addEventListener('wheel', pageMovement);
    // location.reload(true);
    blockMenu.style.opacity = 0;
    leftLine.style.opacity = 1;
    underLine.style.opacity = 1;
    loginButton.style.display = "flex"; //
    myPageButton.style.display = "flex"; //
    changeOpacity(phrase1, 1);
    changeOpacity(phrase2, 1);
    menuFlag = true;
  }
});

/* 메뉴버튼 제거함수 */
// function removeItem() {
//   const items = menu.getElementsByTagName('li');
//   items[1].remove();
//   items[1].remove();
// }
function changeOpacity(elements, value){
  elements.forEach(element =>{
    element.style.opacity = value;
  })
}






window.addEventListener('wheel', pageMovement);
// window.addEventListener('scroll', detectBottom);