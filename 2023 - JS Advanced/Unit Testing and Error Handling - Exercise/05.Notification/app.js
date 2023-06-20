function notify(message) {

  let getNotificationElement = document.getElementById('notification');
  getNotificationElement.style.display = "block";
  getNotificationElement.textContent = message;

  getNotificationElement.addEventListener('click',eListener);

  function eListener(e){
    getNotificationElement.style.display = "none";
  }
}