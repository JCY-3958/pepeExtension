console.log("오예 성공이얌");

const button = document.getElementById("open-popup");
  
button.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "showAlert", message: "Hello from extension!" });
    });
  });

document.addEventListener("DOMContentLoaded", () => {
    
  });