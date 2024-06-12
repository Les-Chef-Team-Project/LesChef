// 공유 카테고리 선택 시 사용자 아이디 및 이미지 부여 

const nickname = document.querySelectorAll('.nickname');
const nickname2 = document.querySelectorAll('.icon');
const sharepage = document.querySelectorAll('.categorybox');

sharepage.forEach((share, index) => {
  share.addEventListener("click", function(){
    if(index == 4){
    nickname.forEach(function(name){
      name.style.display = "block";
    });
    nickname2.forEach(function(name2){
      name2.style.display = "block";  
    });
  }else{
    nickname.forEach(function(name){
      name.style.display = "none";
    });
    nickname2.forEach(function(name2){
      name2.style.display = "none";  
    });
    }
  })
})

// 세부 카테고리 컬러 바꾸기
const categoryname = document.querySelectorAll('.subcategory');
categoryname.forEach((name, index) =>{
  name.addEventListener('click',()=>{
    categoryname.forEach((name2, index2) => {
      if(index == index2){
        name2.style.color = 'black';
      }else{
        name2.style.color = '#616161';
      }
    })
  })
})

// 검색바 구현
  // const textbar = document.querySelector('#search');
  // const textarea = document.querySelector('#searchtext');
  // textarea.style.display = "none";
  //   textbar.addEventListener('click',()=>{
  //     if('none' === textarea.style.display){
  //       textarea.style.display = 'block';
  //       textarea.classList.add('active');
  //     }else{
  //       textarea.style.display = 'none';        
  //       textarea.classList.remove('active');
  //     }
  //   });
  const textbar = document.querySelector('#search');
  const textarea = document.querySelector('#searchtext');
  // textarea.style.display = "none";
    textbar.addEventListener('click',()=>{
      if(!textarea.classList.contains('active')){
        // textarea.style.display = 'block';
        textarea.classList.add('active');
      }else{
        // textarea.style.display = 'none';        
        textarea.classList.remove('active');
      }
    });



//로그인 모달
const loginModal = document.querySelector('.loginModal');
const loginBox = document.querySelector('.Login-box');
const loginButton = document.getElementById('login');
const goToFindButton = document.querySelector('#FindIdPw');
const loginInputForm = document.querySelector('.login-form-container');
const findInputForm = document.querySelector('.find-form-container');
const findIdForm = document.querySelector('.id-form-container');
const findPwForm = document.querySelector('.pw-form-container');
const findIdButton = document.querySelector('.id-button');
const findPwButton = document.querySelector('.pw-button');
const findToLogin = document.querySelector('.find-to-login span');
const findToLoginText = document.querySelector('.find-to-login');

function loginModalActive() {
  loginInputForm.style.display = "block";
  findInputForm.style.display = "none";
  findToLoginText.style.display = "none";
  if(loginModal.classList.contains('active')){
    loginBox.style.transition = "none";
    loginBox.classList.remove('active');
    loginModal.classList.remove('active');
  }else{
    loginBox.style.transition = "all 0.5s";
    loginBox.querySelector("input").value = "";
    loginModal.classList.add('active');
    loginBox.classList.add('active');
  }
}

loginBox.addEventListener('click', function(event) {
  event.stopPropagation();
});

loginButton.addEventListener('click', loginModalActive);
loginModal.addEventListener('click', loginModalActive);

goToFindButton.addEventListener('click', () => {
  loginInputForm.style.display = "none";
  findInputForm.style.display = "block";
  findIdForm.style.display = "block";
  findPwForm.style.display = "none";
  findIdButton.style.backgroundColor = "#79AE84";
  findPwButton.style.backgroundColor = "#28442d";
  findToLoginText.style.display = "block";
});

findIdButton.addEventListener('click',() => {
  findIdButton.style.backgroundColor = "#79AE84";
  findPwButton.style.backgroundColor = "#28442d";
  findIdForm.style.display = "block";
  findPwForm.style.display = "none";
});

findPwButton.addEventListener('click', () => {
  findIdButton.style.backgroundColor = "#28442d";
  findPwButton.style.backgroundColor = "#79AE84";
  findIdForm.style.display = "none";
  findPwForm.style.display = "block";
});

findToLogin.addEventListener('click', () => {
  loginInputForm.style.display = "block";
  findInputForm.style.display = "none";
  findToLoginText.style.display = "none";
});
