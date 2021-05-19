var index = 0; 
var totalcost = 0;
var p1 = 1; 
var p2 = 1; 
var p3 = 1; 
var p4 = 1; 
var p5 = 1; 
var p6 = 1; 
var price1 = 7474.99;
var price2 = 5825.38; 
var price3 = 7995.99;
var price4 = 734.56;
var price5 = 219.99;
var price6 = 7777.77;
var cost1 = 0.00;
var cost2 = 0.00;
var cost3 = 0.00;
var cost4 = 0.00;
var cost5 = 0.00;
var cost6 = 0.00;
var info1 = "Alienware M15 Gaming";
var info2 = "Acer Predator Helios 300 PH315-53";
var info3 = "OMEN X Laptop - 17t";
var info4 = "Razer Anzu Smart Glasses";
var info5 = "SMART-4.0 Gaming Mouse";
var info6 = "OMEN X Laptop - 17t and SMART-4.0 Gaming Mouse";
var choice1;
var choice2;
var choice3;
var choice4;
var choice5;
var choice6;
var changes = false;
var b1 = false;
var b2 = false;
var b3 = false;
var b4 = false;
var b5 = false;
var b6 = false;
var z1 = false;
var z2 = false;
var z3 = false;
var remove = "no";
var extra1;
var extra2;
var extra3;
var extra4;
var extra5;
var extra6;
var displayname;
var switcher1;
var switcher2;
var switcher3;
var switcher4;
var switcher5;
var changer1;
var changer2;
var changer3;
var changer4;
var changer5;
var changer6;
var changer7;
var changer8;
var changer9;
var changer10;
var changer11;
var changer12;
function slideshow() {
    var count;
    var x = document.getElementsByClassName("mySlides");
    for (count = 0; count < x.length; count++) {
        x[count].style.display = "none";  
    }
    index++;
    if (index > x.length) {index = 1}    
    x[index-1].style.display = "block";  
    setTimeout(slideshow, 5000);
}  
function slideshow1() {
    var count;
    var x = document.getElementsByClassName("mySlides1");
    for (count = 0; count < x.length; count++) {
        x[count].style.display = "none";  
    }
    index++;
    if (index > x.length) {index = 1}    
    x[index-1].style.display = "block";  
    switcher1 = setTimeout(slideshow1, 5000);
}  
function slideshow2() {
    var count;
    var x = document.getElementsByClassName("mySlides2");
    for (count = 0; count < x.length; count++) {
        x[count].style.display = "none";  
    }
    index++;
    if (index > x.length) {index = 1}    
    x[index-1].style.display = "block";  
    switcher2 = setTimeout(slideshow2, 5000);
}  
function slideshow3() {
    var count;
    var x = document.getElementsByClassName("mySlides3");
    for (count = 0; count < x.length; count++) {
        x[count].style.display = "none";  
    }
    index++;
    if (index > x.length) {index = 1}    
    x[index-1].style.display = "block";  
    switcher3 = setTimeout(slideshow3, 5000);
}  
function slideshow4() {
    var count;
    var x = document.getElementsByClassName("mySlides4");
    for (count = 0; count < x.length; count++) {
        x[count].style.display = "none";  
    }
    index++;
    if (index > x.length) {index = 1}    
    x[index-1].style.display = "block";  
    switcher4 = setTimeout(slideshow4, 5000);
}  
function slideshow5() {
    var count;
    var x = document.getElementsByClassName("mySlides5");
    for (count = 0; count < x.length; count++) {
        x[count].style.display = "none";  
    }
    index++;
    if (index > x.length) {index = 1}    
    x[index-1].style.display = "block";  
    switcher5 = setTimeout(slideshow5, 5000);
}  
function check() {
    var z = sessionStorage.getItem("key20");
    if (z <= 0) {
        alert("No item(s) added to the cart.")
    }
    else {
        window.open("cart.html","_self");
    }
}
function clear1() {
    sessionStorage.clear();
}
function second() {
    window.open("products.html","_self");
}
function third() {
    window.open("product1.html","_self");
}
function fourth() {
    window.open("product2.html","_self");
}
function fifth() {
    window.open("product3.html","_self");
}
function sixth() {
    window.open("product4.html","_self");
}
function seventh() {
    window.open("product5.html","_self");
}
function eighth() {
    window.open("product6.html","_self");
}
function edit() {
    changes = true;
}
function confirmation1() {
    if (changes == true) {
        choice1 = confirm("Changes made to the form will not be saved. Proceed anyway?");
        if (choice1 == true) {
            window.open("index.html","_self");
        }
    }
    else {
        window.open("index.html","_self");
    }
}
function confirmation2() {
    if (changes == true) {
        choice2 = confirm("Changes made to the form will not be saved. Proceed anyway?");
        if (choice2 == true) {
            window.open("products.html","_self");
        }
    }
    else {
        window.open("products.html","_self");
    }
}
function confirmation3() {
    if (changes == true) {
        choice3 = confirm("Changes made to the form will not be saved. Proceed anyway?");
        if (choice3 == true) {
            window.open("contact.html","_self");
        }
    }
    else {
        window.open("contact.html","_self");
    }
}
function confirmation4() {
    if (changes == true) {
        choice4 = confirm("Changes made to the form will not be saved. Proceed anyway?");
        if (choice4 == true) {
            window.open("about.html","_self");
        }
    }
    else {
        window.open("about.html","_self");
    }
}
function confirmation5() {
    if (changes == true) {
        choice5 = confirm("Changes made to the form will not be saved. Proceed anyway?");
        if (choice5 == true) {
            window.open("cart.html","_self");
        }
    }
    else {
        window.open("cart.html","_self");
    }
}
function confirmation6() {
    if (changes == true) {
        choice6 = confirm("Changes made to the form will not be saved. Proceed anyway?");
        if (choice6 == true) {
            window.open("signin.html","_self");
        }
    }
    else {
        window.open("signin.html","_self");
    }
}
function transfer() {
    totalcost = sessionStorage.getItem("key1");
    p1 = sessionStorage.getItem("key2");
    p2 = sessionStorage.getItem("key3");
    p3 = sessionStorage.getItem("key4");
    p4 = sessionStorage.getItem("key5");
    p5 = sessionStorage.getItem("key6");
    p6 = sessionStorage.getItem("key7");
    cost1 = sessionStorage.getItem("key8");
    cost2 = sessionStorage.getItem("key9");
    cost3 = sessionStorage.getItem("key10");
    cost4 = sessionStorage.getItem("key11");
    cost5 = sessionStorage.getItem("key12");
    cost6 = sessionStorage.getItem("key13");
    info1 = sessionStorage.getItem("key14");
    info2 = sessionStorage.getItem("key15");
    info3 = sessionStorage.getItem("key16");
    info4 = sessionStorage.getItem("key17");
    info5 = sessionStorage.getItem("key18");
    info6 = sessionStorage.getItem("key19");
    var hr = new XMLHttpRequest();
    var url = "scripts2.php";
    var vars = "totalcost="+totalcost+"&quantity1="+p1+"&quantity2="+p2+"&quantity3="+p3+"&quantity4="+p4+"&quantity5="+p5+"&quantity6="+p6
    +"&cost1="+cost1+"&cost2="+cost2+"&cost3="+cost3+"&cost4="+cost4+"&cost5="+cost5+"&cost6="+cost6
    +"&description1="+info1+"&description2="+info2+"&description3="+info3+"&description4="+info4+"&description5="+info5+"&description6="+info6;
    hr.open("POST",url,true);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    hr.send(vars);
    remove = "yes";
    sessionStorage.setItem("key30",remove);
}
function total() {
    var y = sessionStorage.getItem("key29");
    if (y > 0) {
        p1 = parseFloat(sessionStorage.getItem("key2"));
        p2 = parseFloat(sessionStorage.getItem("key3"));
        p3 = parseFloat(sessionStorage.getItem("key4"));
        p4 = parseFloat(sessionStorage.getItem("key5"));
        p5 = parseFloat(sessionStorage.getItem("key6"));
        p6 = parseFloat(sessionStorage.getItem("key7"));
        cost1 = parseFloat(sessionStorage.getItem("key8"));
        cost2 = parseFloat(sessionStorage.getItem("key9"));
        cost3 = parseFloat(sessionStorage.getItem("key10"));
        cost4 = parseFloat(sessionStorage.getItem("key11"));
        cost5 = parseFloat(sessionStorage.getItem("key12"));
        cost6 = parseFloat(sessionStorage.getItem("key13"));
        var num1 = cost1 + cost2 + cost3 + cost4 + cost5 + cost6;
        cost1=cost1.toFixed(2);
        cost2=cost2.toFixed(2);
        cost3=cost3.toFixed(2);
        cost4=cost4.toFixed(2);
        cost5=cost5.toFixed(2);
        cost6=cost6.toFixed(2);
        var n= num1.toFixed(2);
        totalcost = n;
        sessionStorage.setItem("key1",totalcost);
        sessionStorage.setItem("key2",p1);
        sessionStorage.setItem("key3",p2);
        sessionStorage.setItem("key4",p3);
        sessionStorage.setItem("key5",p4);
        sessionStorage.setItem("key6",p5);
        sessionStorage.setItem("key7",p6);
        sessionStorage.setItem("key8",cost1);
        sessionStorage.setItem("key9",cost2);
        sessionStorage.setItem("key10",cost3);
        sessionStorage.setItem("key11",cost4);
        sessionStorage.setItem("key12",cost5);
        sessionStorage.setItem("key13",cost6);
        sessionStorage.setItem("key14",info1);
        sessionStorage.setItem("key15",info2);
        sessionStorage.setItem("key16",info3);
        sessionStorage.setItem("key17",info4);
        sessionStorage.setItem("key18",info5);
        sessionStorage.setItem("key19",info6);
        var x= totalcost;
        sessionStorage.setItem("key20",x);
    }
    else {
        var num2 = cost1 + cost2 + cost3 + cost4 + cost5 + cost6;
        cost1=parseFloat(cost1).toFixed(2);
        cost2=parseFloat(cost2).toFixed(2);
        cost3=parseFloat(cost3).toFixed(2);
        cost4=parseFloat(cost4).toFixed(2);
        cost5=parseFloat(cost5).toFixed(2);
        cost6=parseFloat(cost6).toFixed(2);
        var o= parseFloat(num2).toFixed(2);
        totalcost = o;
        sessionStorage.setItem("key1",totalcost);
        sessionStorage.setItem("key2",p1);
        sessionStorage.setItem("key3",p2);
        sessionStorage.setItem("key4",p3);
        sessionStorage.setItem("key5",p4);
        sessionStorage.setItem("key6",p5);
        sessionStorage.setItem("key7",p6);
        sessionStorage.setItem("key8",cost1);
        sessionStorage.setItem("key9",cost2);
        sessionStorage.setItem("key10",cost3);
        sessionStorage.setItem("key11",cost4);
        sessionStorage.setItem("key12",cost5);
        sessionStorage.setItem("key13",cost6);
        sessionStorage.setItem("key14",info1);
        sessionStorage.setItem("key15",info2);
        sessionStorage.setItem("key16",info3);
        sessionStorage.setItem("key17",info4);
        sessionStorage.setItem("key18",info5);
        sessionStorage.setItem("key19",info6);
        var x= totalcost;
        sessionStorage.setItem("key20",x);
        var flip = 1;
        sessionStorage.setItem("key29",flip);
    }
}
function index1() {
    var flag = localStorage.getItem("key32");
    var fullname = localStorage.getItem("key39");
    document.getElementById("fullname").innerHTML = fullname;
    if(flag == "yes") {
        document.getElementById("s1").style.display = "none";
        document.getElementById("s15").style.display = "inline-block";
    }
    else {
        document.getElementById("s1").style.display = "inline-block";
        document.getElementById("s15").style.display = "none";
    }
    var h = sessionStorage.getItem("key20");
    if (h > 0) {
        document.getElementById("total9").innerHTML = sessionStorage.getItem("key1");
    }
    else {
        document.getElementById("total9").innerHTML = "0.00";
    }
}
function checkout() {
    var flag = localStorage.getItem("key32");
    var flag1 = localStorage.getItem("key37");
    remove = sessionStorage.getItem("key30");
    var fullname = localStorage.getItem("key39");
    document.getElementById("fullname").innerHTML = fullname;
    if(flag == "yes") {
        document.getElementById("s10").style.display = "none";
        document.getElementById("s24").style.display = "inline-block";
    }
    else {
        document.getElementById("s10").style.display = "inline-block";
        document.getElementById("s24").style.display = "none";
    }
    if (remove == "yes") {
        clear1();
        i = 0;
    }
    var i = sessionStorage.getItem("key20");
    if (i > 0) {
        document.getElementById("total10").innerHTML = sessionStorage.getItem("key1");
    }
    else {
        document.getElementById("total10").innerHTML = "0.00";
    }
    if (flag1 == "yes") {
        document.getElementById("alert7").innerHTML = "Checkout form submitted successfully.";
        document.getElementById("alert7").style.color = "yellow";
        flag1 = "no";
        localStorage.setItem("key37",flag1);
        setTimeout(checkout, 15000);
    }
    else if (flag1 == "no") {
        document.getElementById("alert7").innerHTML = "";
        flag1 = "nope";
        localStorage.setItem("key37",flag1);
        window.open("products.html","_self");
    }
    else {
        document.getElementById("alert7").innerHTML = "";
    }
}
function contact() {
    var j = sessionStorage.getItem("key20");
    var flag = localStorage.getItem("key32");
    var flag1 = localStorage.getItem("key36");
    var fullname = localStorage.getItem("key39");
    document.getElementById("fullname").innerHTML = fullname;
    if(flag == "yes") {
        document.getElementById("s11").style.display = "none";
        document.getElementById("s25").style.display = "inline-block";
    }
    else {
        document.getElementById("s11").style.display = "inline-block";
        document.getElementById("s25").style.display = "none";
    }
    if (j > 0) {
        document.getElementById("total11").innerHTML = sessionStorage.getItem("key1");
    }
    else {
        document.getElementById("total11").innerHTML = "0.00";
    }
    if (flag1 == "yes") {
        document.getElementById("alert6").innerHTML = "Contact form submitted successfully.";
        document.getElementById("alert6").style.color = "yellow";
        flag1 = "none";
        localStorage.setItem("key36",flag1);
        setTimeout(contact, 15000);
    }
    else {
        document.getElementById("alert6").innerHTML = "";
    }
}
function about() { 
    var k = sessionStorage.getItem("key20");
    var flag = localStorage.getItem("key32");
    var fullname = localStorage.getItem("key39");
    document.getElementById("fullname").innerHTML = fullname;
    if(flag == "yes") {
        document.getElementById("s12").style.display = "none";
        document.getElementById("s26").style.display = "inline-block";
    }
    else {
        document.getElementById("s12").style.display = "inline-block";
        document.getElementById("s26").style.display = "none";
    }
    if (k > 0) {
        document.getElementById("total12").innerHTML = sessionStorage.getItem("key1");
    }
    else {
        document.getElementById("total12").innerHTML = "0.00";
    }
}
function signin() { 
    var l = sessionStorage.getItem("key20");
    var flag = localStorage.getItem("key33") 
    if (l > 0) {
        document.getElementById("total13").innerHTML = sessionStorage.getItem("key1");
    }
    else {
        document.getElementById("total13").innerHTML = "0.00";
    }
    if (flag == "yes") {
        document.getElementById("alert4").innerHTML = "Invalid username or email and/or password.";
        document.getElementById("alert4").style.color = "red";
        flag = "none";
        localStorage.setItem("key33",flag);
        setTimeout(signin, 15000);
    }
    else if (flag == "no") {
        document.getElementById("alert4").innerHTML = "Password updated successfully.";
        document.getElementById("alert4").style.color = "yellow";
        flag = "none";
        localStorage.setItem("key33",flag);
        setTimeout(signin, 15000);
    }
    else if (flag == "yesss") {
        document.getElementById("alert4").innerHTML = "Account registered successfully.";
        document.getElementById("alert4").style.color = "yellow";
        flag = "none";
        localStorage.setItem("key33",flag);
        setTimeout(signin, 15000);
    }
    else if (flag == "noooo") {
        document.getElementById("alert4").innerHTML = "Account deleted successfully.";
        document.getElementById("alert4").style.color = "yellow";
        flag = "none";
        localStorage.setItem("key33",flag);
        setTimeout(signin, 15000);
    }
    else {
        document.getElementById("alert4").innerHTML = "";
    }
}
function signup() { 
    var m = sessionStorage.getItem("key20");
    var flag = localStorage.getItem("key35")
    if (m > 0) {
        document.getElementById("total14").innerHTML = sessionStorage.getItem("key1");
    }
    else {
        document.getElementById("total14").innerHTML = "0.00";
    }
    if (flag == "yes") {
        document.getElementById("alert5").innerHTML = "Email sent successfully. Check your email with which you will register your account.";
        document.getElementById("alert5").style.color = "yellow";
        flag = "none";
        localStorage.setItem("key35",flag);
        setTimeout(signup, 15000);
    }
    else if (flag == "no") {
        document.getElementById("alert5").innerHTML = "The account registration link is either invalid or does not exist.";
        document.getElementById("alert5").style.color = "red";
        flag = "none";
        localStorage.setItem("key35",flag);
        setTimeout(signup, 15000);
    }
    else {
        document.getElementById("alert5").innerHTML = "";
    }
}
function reset() {
    var n = sessionStorage.getItem("key20");
    var flag = localStorage.getItem("key34")
    if (n > 0) {
        document.getElementById("total15").innerHTML = sessionStorage.getItem("key1");
    }
    else {
        document.getElementById("total15").innerHTML = "0.00";
    }
    if (flag == "yes") {
        document.getElementById("alert5").innerHTML = "Invalid username or email.";
        document.getElementById("alert5").style.color = "red";
        flag = "none";
        localStorage.setItem("key34",flag);
        setTimeout(reset, 7500);
    }
    else if (flag == "no") {
        document.getElementById("alert5").innerHTML = "Email sent successfully. Check your email with which you registered your account.";
        document.getElementById("alert5").style.color = "yellow";
        flag = "none";
        localStorage.setItem("key34",flag);
        setTimeout(reset, 15000);
    }
    else if (flag == "noo") {
        document.getElementById("alert5").innerHTML = "The password reset link is either invalid or does not exist.";
        document.getElementById("alert5").style.color = "red";
        flag = "none";
        localStorage.setItem("key34",flag);
        setTimeout(reset, 15000);
    }
    else {
        document.getElementById("alert5").innerHTML = "";
    }
}
function passwordreset() {
    var o = sessionStorage.getItem("key20");
    if (o > 0) {
        document.getElementById("total16").innerHTML = sessionStorage.getItem("key1");
    }
    else {
        document.getElementById("total16").innerHTML = "0.00";
    }
}
function passwordchange() {
    var p = sessionStorage.getItem("key20");
    var flag = localStorage.getItem("key38")
    var flag1 = localStorage.getItem("key32"); 
    var fullname = localStorage.getItem("key39");
    document.getElementById("fullname").innerHTML = fullname;
    if(flag1 == "yes") {
        document.getElementById("s10").style.display = "none";
        document.getElementById("s24").style.display = "inline-block";
    }
    else {
        document.getElementById("s10").style.display = "inline-block";
        document.getElementById("s24").style.display = "none";
    }
    if (p > 0) {
        document.getElementById("total17").innerHTML = sessionStorage.getItem("key1");
    }
    else {
        document.getElementById("total17").innerHTML = "0.00";
    }
    if (flag == "yes") {
        document.getElementById("alert8").innerHTML = "Password updated successfully.";
        document.getElementById("alert8").style.color = "yellow";
        flag = "none";
        localStorage.setItem("key38",flag);
        setTimeout(passwordchange, 15000);
    }
    else if (flag == "no") {
        document.getElementById("alert8").innerHTML = "Invalid password.";
        document.getElementById("alert8").style.color = "red";
        flag = "none";
        localStorage.setItem("key38",flag);
        setTimeout(passwordchange, 15000);
    }
    else {
        document.getElementById("alert8").innerHTML = "";
    }
}
function accountdelete() {
    var q = sessionStorage.getItem("key20");
    var flag = localStorage.getItem("key32"); 
    var flag1 = localStorage.getItem("key40"); 
    var fullname = localStorage.getItem("key39");
    document.getElementById("fullname").innerHTML = fullname;
    if(flag == "yes") {
        document.getElementById("s10").style.display = "none";
        document.getElementById("s24").style.display = "inline-block";
    }
    else {
        document.getElementById("s10").style.display = "inline-block";
        document.getElementById("s24").style.display = "none";
    }
    if (q > 0) {
        document.getElementById("total18").innerHTML = sessionStorage.getItem("key1");
    }
    else {
        document.getElementById("total18").innerHTML = "0.00";
    }
    if (flag1 == "no") {
        document.getElementById("alert5").innerHTML = "Invalid password.";
        document.getElementById("alert5").style.color = "red";
        flag1 = "none";
        localStorage.setItem("key40",flag1);
        setTimeout(accountdelete, 15000);
    }
    else {
        document.getElementById("alert5").innerHTML = "";
    }
}
function products() {
    var a = sessionStorage.getItem("key20");
    var flag = localStorage.getItem("key32");
    var fullname = localStorage.getItem("key39");
    document.getElementById("fullname").innerHTML = fullname;
    if(flag == "yes") {
        document.getElementById("s2").style.display = "none";
        document.getElementById("s16").style.display = "inline-block";
    }
    else {
        document.getElementById("s2").style.display = "inline-block";
        document.getElementById("s16").style.display = "none";
    }
    if (a > 0) {
        document.getElementById("total0").innerHTML = sessionStorage.getItem("key1");
    }
    else {
        document.getElementById("total0").innerHTML = "0.00";
    }
}
function products1() {
    var b = sessionStorage.getItem("key20");
    b1 = sessionStorage.getItem("key21");
    var flag = localStorage.getItem("key32");
    var fullname = localStorage.getItem("key39");
    document.getElementById("fullname").innerHTML = fullname;
    if(flag == "yes") {
        document.getElementById("s3").style.display = "none";
        document.getElementById("s17").style.display = "inline-block";
    }
    else {
        document.getElementById("s3").style.display = "inline-block";
        document.getElementById("s17").style.display = "none";
    }
    if (b1 == "true") {
        document.getElementById("b1").style.display = "block";
    }
    else {
        document.getElementById("b1").style.display = "none";
    }
    if (b > 0) {
        document.getElementById("total1").innerHTML = sessionStorage.getItem("key1");
        changer11 = sessionStorage.getItem("key2");
        if (changer11 !== changer12) {
            document.getElementById("product1").value = sessionStorage.getItem("key2");
            changer12 = sessionStorage.getItem("key2");
        }
    }
    else {
        document.getElementById("total1").innerHTML = "0.00";
    }
}
function products2() {
    var c = sessionStorage.getItem("key20");
    b2 = sessionStorage.getItem("key22");
    var flag = localStorage.getItem("key32");
    var fullname = localStorage.getItem("key39");
    document.getElementById("fullname").innerHTML = fullname;
    if(flag == "yes") {
        document.getElementById("s4").style.display = "none";
        document.getElementById("s18").style.display = "inline-block";
    }
    else {
        document.getElementById("s4").style.display = "inline-block";
        document.getElementById("s18").style.display = "none";
    }
    if (b2 == "true") {
        document.getElementById("b2").style.display = "block";
    }
    else {
        document.getElementById("b2").style.display = "none";
    }
    if (c > 0) {        
        document.getElementById("total2").innerHTML = sessionStorage.getItem("key1");
        changer9 = sessionStorage.getItem("key3");
        if (changer9 !== changer10) {
            document.getElementById("product2").value = sessionStorage.getItem("key3");
            changer10 = sessionStorage.getItem("key3");
        }
    }
    else {
        document.getElementById("total2").innerHTML = "0.00";
    }
}
function products3() {
    var d = sessionStorage.getItem("key20");
    b3 = sessionStorage.getItem("key23");
    var flag = localStorage.getItem("key32");
    var fullname = localStorage.getItem("key39");
    document.getElementById("fullname").innerHTML = fullname;
    if(flag == "yes") {
        document.getElementById("s5").style.display = "none";
        document.getElementById("s19").style.display = "inline-block";
    }
    else {
        document.getElementById("s5").style.display = "inline-block";
        document.getElementById("s19").style.display = "none";
    }
    if (b3 == "true") {
        document.getElementById("b3").style.display = "block";
    }
    else {
        document.getElementById("b3").style.display = "none";
    }
    if (d > 0) {
        document.getElementById("total3").innerHTML = sessionStorage.getItem("key1");
        changer7 = sessionStorage.getItem("key4");
        if (changer7 !== changer8) {
            document.getElementById("product3").value = sessionStorage.getItem("key4");
            changer8 = sessionStorage.getItem("key4");
        }
    }
    else {
        document.getElementById("total3").innerHTML = "0.00";
    }
}
function products4() {
    var e = sessionStorage.getItem("key20");
    b4 = sessionStorage.getItem("key24");
    var flag = localStorage.getItem("key32");
    var fullname = localStorage.getItem("key39");
    document.getElementById("fullname").innerHTML = fullname;
    if(flag == "yes") {
        document.getElementById("s6").style.display = "none";
        document.getElementById("s20").style.display = "inline-block";
    }
    else {
        document.getElementById("s6").style.display = "inline-block";
        document.getElementById("s20").style.display = "none";
    }
    if (b4 == "true") {
        document.getElementById("b4").style.display = "block";
    }
    else {
        document.getElementById("b4").style.display = "none";
    }
    if (e > 0) {
        document.getElementById("total4").innerHTML = sessionStorage.getItem("key1");
        changer5 = sessionStorage.getItem("key5");
        if (changer5 !== changer6) {
            document.getElementById("product4").value = sessionStorage.getItem("key5");
            changer6 = sessionStorage.getItem("key5");
        }
    }
    else {
        document.getElementById("total4").innerHTML = "0.00";
    }
}
function products5() {
    var f = sessionStorage.getItem("key20");
    b5 = sessionStorage.getItem("key25");
    var flag = localStorage.getItem("key32");
    var fullname = localStorage.getItem("key39");
    document.getElementById("fullname").innerHTML = fullname;
    if(flag == "yes") {
        document.getElementById("s7").style.display = "none";
        document.getElementById("s21").style.display = "inline-block";
    }
    else {
        document.getElementById("s7").style.display = "inline-block";
        document.getElementById("s21").style.display = "none";
    }
    if (b5 == "true") {
        document.getElementById("b5").style.display = "block";
    }
    else {
        document.getElementById("b5").style.display = "none";
    }
    if (f > 0) {
        document.getElementById("total5").innerHTML = sessionStorage.getItem("key1");
        changer3 = sessionStorage.getItem("key6");
        if (changer3 !== changer4) {
            document.getElementById("product5").value = sessionStorage.getItem("key6");
            changer4 = sessionStorage.getItem("key6");
        }
    }
    else {
        document.getElementById("total5").innerHTML = "0.00";
    }
}
function products6() {
    var g = sessionStorage.getItem("key20");
    b6 = sessionStorage.getItem("key26");
    var flag = localStorage.getItem("key32");
    var fullname = localStorage.getItem("key39");
    document.getElementById("fullname").innerHTML = fullname;
    if(flag == "yes") {
        document.getElementById("s8").style.display = "none";
        document.getElementById("s22").style.display = "inline-block";
    }
    else {
        document.getElementById("s8").style.display = "inline-block";
        document.getElementById("s22").style.display = "none";
    }
    if (b6 == "true") {
        document.getElementById("b6").style.display = "block";
    }
    else {
        document.getElementById("b6").style.display = "none";
    }
    if (g > 0) {
        document.getElementById("total6").innerHTML = sessionStorage.getItem("key1");
        changer1 = sessionStorage.getItem("key7");
        if (changer1 !== changer2) {
            document.getElementById("product6").value = sessionStorage.getItem("key7");
            changer2 = sessionStorage.getItem("key7");
        }
    }
    else {
        document.getElementById("total6").innerHTML = "0.00";
    }
}
function cart() {
    document.getElementById("total7").innerHTML = sessionStorage.getItem("key1");
    document.getElementById("total8").innerHTML = sessionStorage.getItem("key1");
    cost1 = sessionStorage.getItem("key8");
    cost2 = sessionStorage.getItem("key9");
    cost3 = sessionStorage.getItem("key10");
    cost4 = sessionStorage.getItem("key11");
    cost5 = sessionStorage.getItem("key12");
    cost6 = sessionStorage.getItem("key13");
    var flag = localStorage.getItem("key32");
    var fullname = localStorage.getItem("key39");
    document.getElementById("fullname").innerHTML = fullname;
    if(flag == "yes") {
        document.getElementById("s9").style.display = "none";
        document.getElementById("s23").style.display = "inline-block";
    }
    else {
        document.getElementById("s9").style.display = "inline-block";
        document.getElementById("s23").style.display = "none";
    }
    if (cost1 <= 0) {
        document.getElementById("cart11").style.display = "none";
        document.getElementById("cart12").style.display = "none";
        document.getElementById("cart13").style.display = "none";
    }
    else {
        document.getElementById("cart11").style.display = "inline-block";
        document.getElementById("cart12").style.display = "inline-block";
        document.getElementById("cart13").style.display = "inline-block";
        document.getElementById("cart11").innerHTML = sessionStorage.getItem("key14");
        document.getElementById("cart12").innerHTML = sessionStorage.getItem("key2");
        document.getElementById("cart13").innerHTML = sessionStorage.getItem("key8");
    }
    if (cost2 <= 0) {
        document.getElementById("cart21").style.display = "none";
        document.getElementById("cart22").style.display = "none";
        document.getElementById("cart23").style.display = "none";
    }
    else {
        document.getElementById("cart21").style.display = "inline-block";
        document.getElementById("cart22").style.display = "inline-block";
        document.getElementById("cart23").style.display = "inline-block";
        document.getElementById("cart21").innerHTML = sessionStorage.getItem("key15");
        document.getElementById("cart22").innerHTML = sessionStorage.getItem("key3");
        document.getElementById("cart23").innerHTML = sessionStorage.getItem("key9");
    }
    if (cost3 <= 0) {
        document.getElementById("cart31").style.display = "none";
        document.getElementById("cart32").style.display = "none";
        document.getElementById("cart33").style.display = "none";
    }
    else {
        document.getElementById("cart31").style.display = "inline-block";
        document.getElementById("cart32").style.display = "inline-block";
        document.getElementById("cart33").style.display = "inline-block";
        document.getElementById("cart31").innerHTML = sessionStorage.getItem("key16");
        document.getElementById("cart32").innerHTML = sessionStorage.getItem("key4");
        document.getElementById("cart33").innerHTML = sessionStorage.getItem("key10");
    }
    if (cost4 <= 0) {
        document.getElementById("cart41").style.display = "none";
        document.getElementById("cart42").style.display = "none";
        document.getElementById("cart43").style.display = "none";
    }
    else {
        document.getElementById("cart41").style.display = "inline-block";
        document.getElementById("cart42").style.display = "inline-block";
        document.getElementById("cart43").style.display = "inline-block";
        document.getElementById("cart41").innerHTML = sessionStorage.getItem("key17");
        document.getElementById("cart42").innerHTML = sessionStorage.getItem("key5");
        document.getElementById("cart43").innerHTML = sessionStorage.getItem("key11");
    }
    if (cost5 <= 0) {
        document.getElementById("cart51").style.display = "none";
        document.getElementById("cart52").style.display = "none";
        document.getElementById("cart53").style.display = "none";
    }
    else {
        document.getElementById("cart51").style.display = "inline-block";
        document.getElementById("cart52").style.display = "inline-block";
        document.getElementById("cart53").style.display = "inline-block";
        document.getElementById("cart51").innerHTML = sessionStorage.getItem("key18");
        document.getElementById("cart52").innerHTML = sessionStorage.getItem("key6");
        document.getElementById("cart53").innerHTML = sessionStorage.getItem("key12");
    }
    if (cost6 <= 0) {
        document.getElementById("cart61").style.display = "none";
        document.getElementById("cart62").style.display = "none";
        document.getElementById("cart63").style.display = "none";
    }
    else {
        document.getElementById("cart61").style.display = "inline-block";
        document.getElementById("cart62").style.display = "inline-block";
        document.getElementById("cart63").style.display = "inline-block";
        document.getElementById("cart61").innerHTML = sessionStorage.getItem("key19");
        document.getElementById("cart62").innerHTML = sessionStorage.getItem("key7");
        document.getElementById("cart63").innerHTML = sessionStorage.getItem("key13");
    }
}
function change1() {
    var flag = "yes";
    localStorage.setItem("key33",flag);
} 
function change2() {
    var flag = "yes";
    localStorage.setItem("key34",flag);
} 
function change3() {
    var flag = "no";
    localStorage.setItem("key34",flag);
} 
function change4() {
    var flag = "noo";
    localStorage.setItem("key34",flag);
} 
function change6() {
    var flag = "no";
    localStorage.setItem("key33",flag);
}
function change7() {
    var flag = "yes";
    localStorage.setItem("key35",flag);
}
function change8() {
    var flag = "no";
    localStorage.setItem("key35",flag);
}
function change9() {
    var flag = "yesss";
    localStorage.setItem("key33",flag);
}
function change10() {
    var flag = "yes";
    localStorage.setItem("key36",flag);
}
function change11() {
    var flag = "yes";
    localStorage.setItem("key37",flag);
}
function change12() {
    var flag = "yes";
    localStorage.setItem("key38",flag);
}
function change13() {
    var flag = "no";
    localStorage.setItem("key38",flag);
}
function change14() {
    var flag = "no";
    localStorage.setItem("key40",flag);
}
function change15() {
    var flag = "noooo";
    localStorage.setItem("key33",flag);
}
function usernamecheck(){
    var username = document.getElementById('username');
    if(username.value != "")
    {
        xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange=function()
        {
          if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                var value = xmlhttp.responseText;
                if(value.length > 1)
                {
                    document.getElementById("username").value="";
                    document.getElementById("username").style.border = "5px solid red";
                    document.getElementById("alert2").innerHTML="Username already exists. Please enter a different username.";
                    document.getElementById("alert2").style.color = "red";
                }
            }
        }
        xmlhttp.open("GET","scripts12.php?q="+username.value,true);
        xmlhttp.send();
    }
    document.getElementById("username").style.border = "none";
    document.getElementById("alert2").innerHTML="";
}
function emailcheck(){
    var email = document.getElementById('email');
    if(email.value != "")
    {
        xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange=function()
        {
          if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                var value = xmlhttp.responseText;
                if(value.length > 1)
                {
                    document.getElementById("email").value="";
                    document.getElementById("email").style.border = "5px solid red";
                    document.getElementById("alert3").innerHTML="Email already exists. Please enter a different email.";
                    document.getElementById("alert3").style.color = "red";
                }
            }
        }
        xmlhttp.open("GET","scripts11.php?q="+email.value,true);
        xmlhttp.send();
    }
    document.getElementById("email").style.border = "none";
    document.getElementById("alert3").innerHTML="";
}
function passwordcheck() {
    var currentpassword = document.getElementById("password").value;
    var verifypassword = document.getElementById("confirmpassword").value;
    if(verifypassword !== currentpassword) {
        if(verifypassword !== "") {
            document.getElementById("confirmpassword").value = "";
            document.getElementById("confirmpassword").style.border = "5px solid red";
            document.getElementById("alert1").innerHTML = "Password does not match. Please enter the password again.";
            document.getElementById("alert1").style.color = "red";
        }
    }
    else {
        document.getElementById("confirmpassword").style.border = "none";
        document.getElementById("alert1").innerHTML = "";
    }
}
function successful() {
    var flag = "yes";
    localStorage.setItem("key32",flag);
}
function unsuccessful() {
    var flag = "no";
    localStorage.setItem("key32",flag);
}
function signout() {
    var hr = new XMLHttpRequest();
    var url = "scripts14.php";
    hr.open("POST",url,true);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    hr.send();
    var flag = "no";
    localStorage.setItem("key32",flag);
    sessionStorage.clear();
    window.open("index.html","_self");
}
function authenticate() {
    var flag = localStorage.getItem("key32");
    if (flag == "yes") {
        var hr = new XMLHttpRequest();
        var url = "scripts10.php";
        hr.open("POST",url,true);
        hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        hr.onreadystatechange = function() {
            if(hr.readyState == 4 && hr.status == 200) {
                var return_data = hr.responseText;
                var splitter = return_data.split(", ");
                var info1 = splitter[0];
                var p1 = splitter[1];
                var cost1 = splitter[2];
                var info2 = splitter[3];
                var p2 = splitter[4];
                var cost2 = splitter[5];
                var info3 = splitter[6];
                var p3 = splitter[7];
                var cost3 = splitter[8];
                var info4 = splitter[9];
                var p4 = splitter[10];
                var cost4 = splitter[11];
                var info5 = splitter[12];
                var p5 = splitter[13];
                var cost5 = splitter[14];
                var info6 = splitter[15];
                var p6 = splitter[16];
                var cost6 = splitter[17];
                var totalcost = splitter[18];
                if(info1 !== "00") {
                    if(cost1 > 0 ) {
                        sessionStorage.setItem("key21","true");
                    }
                    if(cost2 > 0 ) {
                        sessionStorage.setItem("key22","true");
                    }
                    if(cost3 > 0 ) {
                        sessionStorage.setItem("key23","true");
                    }
                    if(cost4 > 0 ) {
                        sessionStorage.setItem("key24","true");
                    }
                    if(cost5 > 0 ) {
                        sessionStorage.setItem("key25","true");
                    }
                    if(cost6 > 0 ) {
                        sessionStorage.setItem("key26","true");
                    }
                    sessionStorage.setItem("key1",totalcost);
                    sessionStorage.setItem("key2",p1);
                    sessionStorage.setItem("key3",p2);
                    sessionStorage.setItem("key4",p3);
                    sessionStorage.setItem("key5",p4);
                    sessionStorage.setItem("key6",p5);
                    sessionStorage.setItem("key7",p6);
                    sessionStorage.setItem("key8",cost1);
                    sessionStorage.setItem("key9",cost2);
                    sessionStorage.setItem("key10",cost3);
                    sessionStorage.setItem("key11",cost4);
                    sessionStorage.setItem("key12",cost5);
                    sessionStorage.setItem("key13",cost6);
                    sessionStorage.setItem("key14",info1);
                    sessionStorage.setItem("key15",info2);
                    sessionStorage.setItem("key16",info3);
                    sessionStorage.setItem("key17",info4);
                    sessionStorage.setItem("key18",info5);
                    sessionStorage.setItem("key19",info6);
                    sessionStorage.setItem("key20",totalcost);
                    sessionStorage.setItem("key29",1);
                    totalcost = sessionStorage.getItem("key20");
                }
            }
        }
        hr.send();
    }

}
function productadd() {
    totalcost = sessionStorage.getItem("key1");
    p1 = sessionStorage.getItem("key2");
    p2 = sessionStorage.getItem("key3");
    p3 = sessionStorage.getItem("key4");
    p4 = sessionStorage.getItem("key5");
    p5 = sessionStorage.getItem("key6");
    p6 = sessionStorage.getItem("key7");
    cost1 = sessionStorage.getItem("key8");
    cost2 = sessionStorage.getItem("key9");
    cost3 = sessionStorage.getItem("key10");
    cost4 = sessionStorage.getItem("key11");
    cost5 = sessionStorage.getItem("key12");
    cost6 = sessionStorage.getItem("key13");
    info1 = sessionStorage.getItem("key14");
    info2 = sessionStorage.getItem("key15");
    info3 = sessionStorage.getItem("key16");
    info4 = sessionStorage.getItem("key17");
    info5 = sessionStorage.getItem("key18");
    info6 = sessionStorage.getItem("key19");
    var hr = new XMLHttpRequest();
    var url = "scripts9.php";
    var vars = "totalcost="+totalcost+"&quantity1="+p1+"&quantity2="+p2+"&quantity3="+p3+"&quantity4="+p4+"&quantity5="+p5+"&quantity6="+p6
    +"&cost1="+cost1+"&cost2="+cost2+"&cost3="+cost3+"&cost4="+cost4+"&cost5="+cost5+"&cost6="+cost6
    +"&description1="+info1+"&description2="+info2+"&description3="+info3+"&description4="+info4+"&description5="+info5+"&description6="+info6;
    hr.open("POST",url,true);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    hr.send(vars);
}
function add1() {
    var flag = localStorage.getItem("key32");
    if(flag == "yes") {
        b1 = true;
        sessionStorage.setItem("key21",b1);
        p1 = document.getElementById("product1").value;
        cost1 = p1 * price1;
        sessionStorage.setItem("key2",p1);
        sessionStorage.setItem("key8",cost1);
        document.getElementById("productstatus1").innerHTML = "Added to Cart!";
        document.getElementById("productstatus1").style.color = "limegreen";
        document.getElementById("productstatus2").innerHTML = "";
        setTimeout(function(){ 
            document.getElementById("productstatus1").innerHTML = "";
        }, 5000);
        total();
        products1();
        productadd();
    }
    else {
        alert("Please sign in to purchase products and gain benefits!");
    }
}
function add2() {
    var flag = localStorage.getItem("key32");
    if(flag == "yes") {
    b2 = true;
    sessionStorage.setItem("key22",b2);
    p2 = document.getElementById("product2").value;
    cost2 = p2 * price2;
    sessionStorage.setItem("key3",p2);
    sessionStorage.setItem("key9",cost2);
    document.getElementById("productstatus1").innerHTML = "Added to Cart!";
    document.getElementById("productstatus1").style.color = "limegreen";
    document.getElementById("productstatus2").innerHTML = "";
    setTimeout(function(){ 
        document.getElementById("productstatus1").innerHTML = "";
    }, 5000);
    total();
    products2();
    productadd();
    }
    else {
        alert("Please sign in to purchase products and gain benefits!");
    }
}
function add3() {
    var flag = localStorage.getItem("key32");
    if(flag == "yes") {
    b3 = true;
    sessionStorage.setItem("key23",b3);
    p3 = document.getElementById("product3").value;
    cost3 = p3 * price3;
    sessionStorage.setItem("key4",p3);
    sessionStorage.setItem("key10",cost3);
    document.getElementById("productstatus1").innerHTML = "Added to Cart!";
    document.getElementById("productstatus1").style.color = "limegreen";
    document.getElementById("productstatus2").innerHTML = "";
    setTimeout(function(){ 
        document.getElementById("productstatus1").innerHTML = "";
    }, 5000);
    total();
    products3();
    productadd();
    }
    else {
        alert("Please sign in to purchase products and gain benefits!");
    }
}
function add4() {
    var flag = localStorage.getItem("key32");
    if(flag == "yes") {
    b4 = true;
    sessionStorage.setItem("key24",b4);
    p4 = document.getElementById("product4").value;
    cost4 = p4 * price4;
    sessionStorage.setItem("key5",p4);
    sessionStorage.setItem("key11",cost4);
    document.getElementById("productstatus1").innerHTML = "Added to Cart!";
    document.getElementById("productstatus1").style.color = "limegreen";
    document.getElementById("productstatus2").innerHTML = "";
    setTimeout(function(){ 
        document.getElementById("productstatus1").innerHTML = "";
    }, 5000);
    total();
    products4();
    productadd();
    }
    else {
        alert("Please sign in to purchase products and gain benefits!");
    }
}
function add5() {
    var flag = localStorage.getItem("key32");
    if(flag == "yes") {
    b5 = true;
    sessionStorage.setItem("key25",b5);
    p5 = document.getElementById("product5").value;
    cost5 = p5 * price5;
    sessionStorage.setItem("key6",p5);
    sessionStorage.setItem("key12",cost5);
    document.getElementById("productstatus1").innerHTML = "Added to Cart!";
    document.getElementById("productstatus1").style.color = "limegreen";
    document.getElementById("productstatus2").innerHTML = "";
    setTimeout(function(){ 
        document.getElementById("productstatus1").innerHTML = "";
    }, 5000);
    total();
    products5();
    productadd();
    }
    else {
        alert("Please sign in to purchase products and gain benefits!");
    }
}
function add6() {
    var flag = localStorage.getItem("key32");
    if(flag == "yes") {
    b6 = true;
    sessionStorage.setItem("key26",b6);
    p6 = document.getElementById("product6").value;
    cost6 = p6 * price6;
    sessionStorage.setItem("key7",p6);
    sessionStorage.setItem("key13",cost6);
    document.getElementById("productstatus1").innerHTML = "Added to Cart!";
    document.getElementById("productstatus1").style.color = "limegreen";
    document.getElementById("productstatus2").innerHTML = "";
    setTimeout(function(){ 
        document.getElementById("productstatus1").innerHTML = "";
    }, 5000);
    total();
    products6();
    productadd();
    }
    else {
        alert("Please sign in to purchase products and gain benefits!");
    }
}
function remove1() {
    b1 = false;
    sessionStorage.setItem("key21",b1);
    var r1 = 0;
    p1 = 1;
    cost1 = r1 * price1;
    document.getElementById("product1").value = "1";
    sessionStorage.setItem("key2",p1);
    sessionStorage.setItem("key8",cost1);
    document.getElementById("productstatus2").innerHTML = "Removed from Cart!";
    document.getElementById("productstatus2").style.color = "limegreen";
    document.getElementById("productstatus1").innerHTML = "";
    setTimeout(function(){ 
        document.getElementById("productstatus2").innerHTML = "";
    }, 5000);
    total();
    products1();
    productadd();
}
function remove2() {
    b2 = false;
    sessionStorage.setItem("key22",b2);
    var r2 = 0;
    p2 = 1;
    cost2 = r2 * price2;
    document.getElementById("product2").value = "1";
    sessionStorage.setItem("key3",p2);
    sessionStorage.setItem("key9",cost2);
    document.getElementById("productstatus2").innerHTML = "Removed from Cart!";
    document.getElementById("productstatus2").style.color = "limegreen";
    document.getElementById("productstatus1").innerHTML = "";
    setTimeout(function(){ 
        document.getElementById("productstatus2").innerHTML = "";
    }, 5000);
    total();
    products2();
    productadd();
}
function remove3() {
    b3 = false;
    sessionStorage.setItem("key23",b3);
    var r3 = 0;
    p3 = 1;
    cost3 = r3 * price3;
    document.getElementById("product3").value = "1";
    sessionStorage.setItem("key4",p3);
    sessionStorage.setItem("key10",cost3);
    document.getElementById("productstatus2").innerHTML = "Removed from Cart!";
    document.getElementById("productstatus2").style.color = "limegreen";
    document.getElementById("productstatus1").innerHTML = "";
    setTimeout(function(){ 
        document.getElementById("productstatus2").innerHTML = "";
    }, 5000);
    total();
    products3();
    productadd();
}
function remove4() {
    b4 = false;
    sessionStorage.setItem("key24",b4);
    var r4 = 0;
    p4 = 1;
    cost4 = r4 * price4;
    document.getElementById("product4").value = "1";
    sessionStorage.setItem("key5",p4);
    sessionStorage.setItem("key11",cost4);
    document.getElementById("productstatus2").innerHTML = "Removed from Cart!";
    document.getElementById("productstatus2").style.color = "limegreen";
    document.getElementById("productstatus1").innerHTML = "";
    setTimeout(function(){ 
        document.getElementById("productstatus2").innerHTML = "";
    }, 5000);
    total();
    products4();
    productadd();
}
function remove5() {
    b5 = false;
    sessionStorage.setItem("key25",b5);
    var r5 = 0;
    p5 = 1;
    cost5 = r5 * price5;
    document.getElementById("product5").value = "1";
    sessionStorage.setItem("key6",p5);
    sessionStorage.setItem("key12",cost5);
    document.getElementById("productstatus2").innerHTML = "Removed from Cart!";
    document.getElementById("productstatus2").style.color = "limegreen";
    document.getElementById("productstatus1").innerHTML = "";
    setTimeout(function(){ 
        document.getElementById("productstatus2").innerHTML = "";
    }, 5000);
    total();
    products5();
    productadd();
}
function remove6() {
    b6 = false;
    sessionStorage.setItem("key26",b6);
    var r6 = 0;
    p6 = 1;
    cost6 = r6 * price6;
    document.getElementById("product6").value = "1";
    sessionStorage.setItem("key7",p6);
    sessionStorage.setItem("key13",cost6);
    document.getElementById("productstatus2").innerHTML = "Removed from Cart!";
    document.getElementById("productstatus2").style.color = "limegreen";
    document.getElementById("productstatus1").innerHTML = "";
    setTimeout(function(){ 
        document.getElementById("productstatus2").innerHTML = "";
    }, 5000);
    total();
    products6();
    productadd();
}