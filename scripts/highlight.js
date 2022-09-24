const chars = {
    "Quân" : '<char class="quan">Quân</char>',
    "Hải" : '<char class="hai">Hải</char>',
    "Hùng" : '<char class="hung">Hùng</char>',
    "Hoàng" : '<char class="hoang">Hoàng</char>',
    "Tín" : '<char class="tin">Tín</char>',
    "Thầy" : '<char class="thay">Thầy</char>',
    "TCN" : '<char class="thay">TCN</char>',
}

for(let char in chars){
    document.body.innerHTML = document.body.innerHTML.replaceAll(`$${char}`, chars[char]);
}
