const images = [...document.querySelectorAll("div.H8Rx8c img")].map(img => img.src);

chrome.runtime.sendMessage({ action: "sendImages", images }, response => {
  if (chrome.runtime.lastError) {
    console.error("메시지 전송 중 오류:", chrome.runtime.lastError);
  } else {
    console.log("Background에서 응답 받음:", response);
  }
});
