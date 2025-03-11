function DTB() {
    let Hoa = parseFloat(document.getElementById("Hoa").value);
    let Ly = parseFloat(document.getElementById("Ly").value);
    let Sinh = parseFloat(document.getElementById("Sinh").value);
    let KetQua = document.getElementById("KetQua");
    let DTB = (Hoa + Ly + Sinh)/3;
    KetQua.innerText = "Diem Trung Binh :" + DTB;
}