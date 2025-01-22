chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "showAlert") {
    alert(request.message); // 브라우저 페이지에서 alert 창을 띄움
    sendResponse({ success: true });
  }
});