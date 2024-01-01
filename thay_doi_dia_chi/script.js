


const reportBtn = document.querySelector("#report");
console.log(reportBtn);
const reportPopUp = document.querySelector(".toggle");
const overlay = document.querySelector(".overlay");
	reportBtn.addEventListener("click",()=>
	{
		reportPopUp.style.display = reportPopUp.style.display ==="block" ? "none": "block";
		overlay.style.display = overlay.style.display ==="block" ? "none": "block";
	});

overlay.addEventListener("click", ()=>{
	reportPopUp.style.display = reportPopUp.style.display ==="none" ? "block": "none";
	overlay.style.display = overlay.style.display ==="none" ? "block": "none";
})




const qrBtn = document.querySelector("#click");
console.log(reportBtn);
const qrPopUp = document.querySelector(".toggle_qr");
const overlayQr = document.querySelector(".overlay_qr");
	qrBtn.addEventListener("click",()=>
	{
		qrPopUp.style.display = qrPopUp.style.display ==="block" ? "none": "block";
		overlayQr.style.display = overlayQr.style.display ==="block" ? "none": "block";
	});

overlayQr.addEventListener("click", ()=>{
	qrPopUp.style.display = qrPopUp.style.display ==="none" ? "block": "none";
	overlayQr.style.display = overlayQr.style.display ==="none" ? "block": "none";
})
const loadActive = document.querySelector(".loading-active");
const loadImg = document.querySelector(".load-img");
const dealDone = document.querySelector(".deal-done");
loadActive.addEventListener("click", ()=>{
	loadImg.style.display = "block";

	setTimeout(() => {
        window.location.href = "../hoa_don_thanh_toan_QR/index.html";
    }, 1500);
})