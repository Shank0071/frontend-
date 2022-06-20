var element2 = document.getElementById("mon");
var element3 = document.getElementById("tue");
var element4 = document.getElementById("wed");
var element5 = document.getElementById("thu");
var element6 = document.getElementById("fri");
var element7 = document.getElementById("sat");
var element8 = document.getElementById("sun");



element2.addEventListener("mouseover", function() {
    document.getElementById("mon1").innerHTML = "$17.45";
    document.getElementById("mon1").classList.add("price");
})
element2.addEventListener("mouseout", function() {
    document.getElementById("mon1").innerHTML = "";
    document.getElementById("mon1").classList.remove("price");
})
element3.addEventListener("mouseover", function() {
    document.getElementById("tue1").innerHTML = "$34.91";
    document.getElementById("tue1").classList.add("price");
})
element3.addEventListener("mouseout", function() {
    document.getElementById("tue1").innerHTML = "";
    document.getElementById("tue1").classList.remove("price");
})
element4.addEventListener("mouseover", function() {
    document.getElementById("wed1").innerHTML = "$52.36";
    document.getElementById("wed1").classList.add("price");
})
element4.addEventListener("mouseout", function() {
    document.getElementById("wed1").innerHTML = "";
    document.getElementById("wed1").classList.remove("price");
})
element5.addEventListener("mouseover", function() {
    document.getElementById("thu1").innerHTML = "$31.07";
    document.getElementById("thu1").classList.add("price");
})
element5.addEventListener("mouseout", function() {
    document.getElementById("thu1").innerHTML = "";
    document.getElementById("thu1").classList.remove("price");
})

element6.addEventListener("mouseover", function() {
    document.getElementById("fri1").innerHTML = "$23.39";
    document.getElementById("fri1").classList.add("price");
})
element6.addEventListener("mouseout", function() {
    document.getElementById("fri1").innerHTML = "";
    document.getElementById("fri1").classList.remove("price");
})
element7.addEventListener("mouseover", function() {
    document.getElementById("sat1").innerHTML = "$43.48";
    document.getElementById("sat1").classList.add("price");
})
element7.addEventListener("mouseout", function() {
    document.getElementById("sat1").innerHTML = "";
    document.getElementById("sat1").classList.remove("price");
})
element8.addEventListener("mouseover", function() {
    document.getElementById("sun1").innerHTML = "$25.48";
    document.getElementById("sun1").classList.add("price");
})
element8.addEventListener("mouseout", function() {
    document.getElementById("sun1").innerHTML = "";
    document.getElementById("sun1").classList.remove("price");
})


