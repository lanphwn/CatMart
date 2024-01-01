// Danh sách các tỉnh thành Việt Nam
const city = [
	"Hà Nội",
	"Hồ Chí Minh",
	"Hải Phòng",
	"Đà Nẵng",
	"Cần Thơ", 
];

// Lấy đối tượng dropdown
const dropdown = document.querySelector(".city");

// Tạo các phần tử option từ danh sách tỉnh thành và thêm vào dropdown
city.forEach((province) => {
	const option = document.createElement("option");
	option.value = province.toLowerCase(); // Giả sử giá trị là viết thường của tên tỉnh thành
    option.text = province;
	dropdown.add(option);
});

const chooseFileBtn = document.querySelector(".choose-file");
const chooseFileBtnActive = document.querySelector(".choose-file-active");
chooseFileBtn.addEventListener("click", ()=>{
	chooseFileBtnActive.click();
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
