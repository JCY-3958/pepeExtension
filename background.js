let imageUrls = []; // 크롤링한 이미지 목록 저장

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "sendImages") {
    console.log("받은 이미지 리스트:", message.images);
    imageUrls = message.images; // 이미지 목록 저장
    sendResponse({ status: "ok" });
  } else if (message.action === "getImages") {
    sendResponse({ images: imageUrls }); // 저장된 이미지 목록 응답
  }
  return true; // 비동기 응답을 처리하려면 true 반환
});
