// const anhDech = document.getElementById("anhDech");
const hayDen = document.getElementById("hayDen");
// const silent = document.getElementById("silentOpen");

// anhDech.addEventListener("play", () => {
//     setTimeout(() => {
//         anhDech.currentTime = 0;
//     }, 6500);
//     setTimeout(() => {
//         anhDech.currentTime = 0;
//     }, 11000);
// });

hayDen.currentTime = 88;
hayDen.addEventListener("pause", () => {
    hayDen.currentTime = 88;
});
const LaConGai = document.getElementById("LaConGai");

LaConGai.currentTime = 68;
LaConGai.addEventListener("pause", () => {
    LaConGai.currentTime = 68;
});

const BiThuong = document.getElementById("BiThuong");

BiThuong.currentTime = 1;
BiThuong.addEventListener("pause", () => {
    BiThuong.currentTime = 1;
});

const MaiDetTiNi = document.getElementById("MaiDetTiNi");

MaiDetTiNi.currentTime = 5;
MaiDetTiNi.addEventListener("pause", () => {
    MaiDetTiNi.currentTime = 5;
});

const TuThoai = document.getElementById("TuThoai");

TuThoai.currentTime = 53;
TuThoai.addEventListener("pause", () => {
    TuThoai.currentTime = 53;
});

Slap.currentTime = 1;
Slap.addEventListener("pause", () => {
    Slap.currentTime = 1;
});