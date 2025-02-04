document.addEventListener("DOMContentLoaded", function () {
    chrome.runtime.sendMessage({ action: "getImages" }, response => {
      if (chrome.runtime.lastError) {
        console.error("Background에 메시지 요청 실패:", chrome.runtime.lastError);
        return;
      }
  
      const imageList = response?.images || [];
      const listElement = document.getElementById("image-list");
  
      if (imageList.length === 0) {
        listElement.innerHTML = "<p>이미지가 없습니다.</p>";
        return;
      }
  
      imageList.forEach(src => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = src;
        img.style.width = "100px"; // 썸네일 크기 조정
        img.style.margin = "5px";
        li.appendChild(img);
        listElement.appendChild(li);
      });
    });
  });
  