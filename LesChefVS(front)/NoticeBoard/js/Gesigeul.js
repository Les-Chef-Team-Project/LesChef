/* 댓글 추가 */
function addComment(event){
  event.preventDefault();
  var commentInput = event.target.querySelector("input");
  var commentText = commentInput.value;
  var date = new Date().toLocaleString();

  var commentDiv = document.createElement("div");
  commentDiv.className = "card my-3";
  commentDiv.innerHTML = 
  `<div class="comment">
    <img src="../img/fubao.jpg" class="commentWriterImg">
      <div class="commentContent">
      <p>
        <span class="commentWriterName">푸바오</span>
        <span class="commentDate">${date}</span>
      </p>
      <p class="commentText">${commentText}</p>
  </div>`;
  
  var commentsDiv = event.target.parentNode.querySelector(".commentRepeat");
  commentsDiv.insertBefore(commentDiv, commentsDiv.firstChild);

  commentInput.value= "";
}