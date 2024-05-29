document.addEventListener('DOMContentLoaded', function() {
  const addReplyBtns = document.querySelectorAll('.addReplyBtn');
  const replyCancleBtns = document.querySelectorAll('.replyCancle');
  const replySubmit = document.getElementById('replySubmit');

  addReplyBtns.forEach(addReplyBtn => {
    addReplyBtn.addEventListener('click', function(e) {
      var elementId = e.target.id;
      var currentReply = parseInt(elementId.replace('replyBtn', ''));
      var replyForm = document.getElementById('replyForm'+currentReply);
      replyForm.querySelector('.reply').style.display = 'block';
      addReplyBtn.style.display = 'none'
    })
  });

  replyCancleBtns.forEach(replyCancleBtn => {
    replyCancleBtn.addEventListener('click', function(e){
      var elementId = e.target.id;
      var currentReply = parseInt(elementId.replace('replyCancle', ''));
      var replyForm = document.getElementById('replyForm'+currentReply);
      replyForm.querySelector('.reply').style.display = 'none';
      var addReplyBtn = document.getElementById('replyBtn'+currentReply);
      addReplyBtn.style.display = 'inline';
    })
  });
  // replyCancle.addEventListener('click', function() {
  //     replyForm.querySelector('.reply').style.display = 'none';
  //     addReplyBtn.style.display = 'inline';
  // });

  replySubmit.addEventListener('click', function(event) {
      event.preventDefault();
      const replyContent = document.getElementById('replyContent').value;
      if (replyContent) {
          alert('답글: ' + replyContent);
          document.getElementById('replyContent').value = '';
          replyForm.querySelector('.reply').style.display = 'none';
          addReplyBtn.style.display = 'inline';
      } else {
          alert('답글을 입력하세요');
      }
  });
});
