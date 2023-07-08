function cancelEvent(e){
    e.preventDefault();
    document.getElementById('topicName').value = "";
    document.getElementById('username').value = "";
    document.getElementById('postText').value = "";
}

export { cancelEvent }