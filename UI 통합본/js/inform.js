// 평점: 별 선택시 갯수 채우는 함수

const stars = document.querySelectorAll('.countingstar');

stars.forEach(star => {
  star.addEventListener('click', function(){
    const value = parseInt(star.getAttribute('star'));
    
    // 별 초기화 
    stars.forEach(function(s, index) {
      s.setAttribute('src',"../img/레시피 아이콘/사용자빈별.png");
      if (index < value) {
        s.setAttribute("src","../img/레시피 아이콘/사용자별.png");
      }
    });
  });
});

// 댓글 작성 버튼 클릭 시 조회에 뿌리기

const send = document.querySelector('#resist');
const coment = document.querySelector('#areasize');
const container = document.querySelector('#comentcontainer');

const firsttext = document.querySelector('.comentbox:nth-of-type(1)');

  send.addEventListener('click',()=>{
    const cloneBox = firsttext.cloneNode(true);
    const cloneStars = cloneBox.querySelectorAll('.comentstar');

    let count = 0;

    cloneBox.querySelector('.comenttext').textContent = coment.value;

    stars.forEach(function(star){
      if(star.getAttribute('src') == '../img/레시피 아이콘/사용자별.png'){
        count += 1;
      }
    });

    cloneStars.forEach(function(cloneStar, index){
      if(index < count){
        cloneStar.setAttribute('src', "../img/레시피 아이콘/사용자별.png");
      }else{
        cloneStar.setAttribute("src", "../img/레시피 아이콘/사용자빈별.png");
      }
    })


    container.append(cloneBox);
    
    coment.value = "";
  })



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
