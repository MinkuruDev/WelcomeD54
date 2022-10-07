const chars = {
    "Quân" : '<char class="deeppink">Quân</char>',
    "Hải" : '<char class="burlywood">Hải</char>',
    "Hùng" : '<char class="aqua">Hùng</char>',
    "Hoàng" : '<char class="darkorange">Hoàng</char>',
    "Tín" : '<char class="limegreen">Tín</char>',
    "Thầy" : '<char class="peru">Thầy</char>',
    "TCN" : '<char class="peru">TCN</char>',
    "An" : '<char class="deeppink">An</char>',
    "Ninh" : '<char class="burlywood">Ninh</char>',
    "Đại" : '<char class="aqua">Đại</char>',
    "Đoàn" : '<char class="darkorange">Đoàn</char>',
    "Kết" : '<char class="limegreen">Kết</char>',
    "Thắng" : '<char class="peru">Thắng</char>',
    "Đức" : '<char class="peru">Đức</char>',
}

for(let char in chars){
    document.body.innerHTML = document.body.innerHTML.replaceAll(`$${char}`, chars[char]);
}
