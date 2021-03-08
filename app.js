function clock() {
    let soat = document.getElementById('soat'),
        min = document.getElementById('min'),
        sec = document.getElementById('sec');

    let h = new Date().getHours(),
        m = new Date().getMinutes(),
        s = new Date().getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
     soat.innerHTML = h
     min.innerHTML = m
     sec.innerHTML = s
    
    setTimeout(clock, 1000)
}
  clock()