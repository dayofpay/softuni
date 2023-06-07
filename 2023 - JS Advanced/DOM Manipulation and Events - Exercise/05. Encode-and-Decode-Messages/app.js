function encodeAndDecodeMessages() {
    let encodeButton = document.querySelector('div:nth-of-type(1) button');
    let decodeButton = document.querySelector('div:nth-of-type(2) button');
    let messageInput = document.querySelector('div:nth-of-type(1) textarea');
    let receivedMessageInput = document.querySelector('div:nth-of-type(2) textarea');
  
    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);
  
    function encodeMessage() {
      let message = messageInput.value;
      let encodedMessage = '';
  
      for (let i = 0; i < message.length; i++) {
        let currentChar = message[i];
        let currentCharCode = currentChar.charCodeAt(0);
        let encodedCharCode = currentCharCode + 1;
        let encodedChar = String.fromCharCode(encodedCharCode);
        encodedMessage += encodedChar;
      }
  
      messageInput.value = '';
      receivedMessageInput.value = encodedMessage;
    }
  
    function decodeMessage() {
      let encodedMessage = receivedMessageInput.value;
      let decodedMessage = '';
  
      for (let i = 0; i < encodedMessage.length; i++) {
        let currentChar = encodedMessage[i];
        let currentCharCode = currentChar.charCodeAt(0);
        let decodedCharCode = currentCharCode - 1;
        let decodedChar = String.fromCharCode(decodedCharCode);
        decodedMessage += decodedChar;
      }
  
      receivedMessageInput.value = decodedMessage;
    }
  }
  