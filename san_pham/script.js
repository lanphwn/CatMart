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
const upBtn = document.querySelector("#upBtn");
const uppload = document.querySelector("#upload");
upBtn.addEventListener("click", ()=>{
    uppload.click();
})