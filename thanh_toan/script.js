


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
