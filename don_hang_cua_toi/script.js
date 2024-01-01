const productDrop = document.querySelector(".nav-drop-product");
const productHover = document.querySelector(".have-drop");
productHover.addEventListener("mouseover", ()=>
{
	productDrop.style.display = productDrop.style.display === "block" ? "none":"block";
});
productHover.addEventListener("mouseout", ()=>
{
	productDrop.style.display = productDrop.style.display === "none" ? "block":"none";
})


const dropBtn = document.querySelector(".dropdown");
const dropContent = document.querySelector(".dropdown-content");
dropBtn.addEventListener("mouseover", ()=>
{
	dropContent.style.display = dropContent.style.display === "block" ? "none":"block";
});
dropBtn.addEventListener("mouseout", ()=>
{
	dropContent.style.display = dropContent.style.display === "none" ? "block":"none";
})
const reportBtn = document.querySelectorAll("#report");
console.log(reportBtn);
const reportPopUp = document.querySelector(".toggle");
const overlay = document.querySelector(".overlay");
reportBtn.forEach((btn) =>{
	btn.addEventListener("click",()=>
	{
		reportPopUp.style.display = reportPopUp.style.display ==="block" ? "none": "block";
		overlay.style.display = overlay.style.display ==="block" ? "none": "block";
	});
})
overlay.addEventListener("click", ()=>{
	reportPopUp.style.display = reportPopUp.style.display ==="none" ? "block": "none";
	overlay.style.display = overlay.style.display ==="none" ? "block": "none";
})
const chooseFileBtn = document.querySelector(".choose-file");
const chooseFile = document.querySelector("#choose-file-true");
chooseFileBtn.addEventListener("click", ()=>{
	chooseFile.click();
})

// const tabbar = document.querySelectorAll(".status");
// const line = document.querySelectorAll(".status-line");
// const orders = document.querySelector(".orders");
// const orderPaid = document.querySelectorAll(".order.paid");
// const orderWait = document.querySelector(".order.wait");
// const orderCanceled = document.querySelector(".order.canceled");
// console.log(tabbar.getAttribute);
// tabbar.forEach((status, pos) =>{
//     status.addEventListener("click", ()=>{
        
//         tabbar.forEach((i, index) =>{
//             i.style.color = i.style.color === "#E69E83" ? "#AC3C12" : "#E69E83";
//             i.classList.remove("active");
//         })
//         status.classList.add("active");
//         status.style.color = status.style.color === "#AC3C12" ? "#E69E83" : "#AC3C12";    
//         console.log(orders.innerHTML);
//         if(status.classList == "status paid active")
//         {
//             orderWait.innerHTML = ``;
//             orderCanceled.innerHTML =``;
//         }
//         if(status.classList == "status paid active")
//         {
//             orderWait.innerHTML = ``;
//             orderCanceled.innerHTML =``;
//         }
//         if(status.classList == "status paid active")
//         {
//             orderWait.innerHTML = ``;
//             orderCanceled.innerHTML =``;
//         }

//     })
// })