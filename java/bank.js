var balance = 14.09;

function pinNum(){
     event.preventDefault()
     var pinINPUT = document.getElementById("pinINPUT");
     if(pinINPUT.value == 1738){
          var homepage = document.getElementById("homepage");
          homepage.style.display = "block";
          var beginning = document.getElementById("beginning");
          beginning.style.display = "none";
          puesdo.style.display = "none";
     }
}

function puesodelink(){
     event.preventDefault()
     var homepage = document.getElementById("homepage");
     homepage.style.display = "none";
     var puesdo = document.getElementById("puesdo");
     puesdo.style.display = "block";
}

function withdrawlink(){
     event.preventDefault()
     var homepage = document.getElementById("homepage");
     homepage.style.display = "none";
     var withdrawpage = document.getElementById("withdrawpage");
     withdrawpage.style.display = "block";
}

function depositlink(){
     event.preventDefault()
     var depositpage = document.getElementById("depositpage");
     depositpage.style.display = "block";
     var homepage = document.getElementById("homepage");
     homepage.style.display = "none";
}

function nextlink(){
     event.preventDefault()
     var depositpage = document.getElementById("depositpage");
     depositpage.style.display = "none";
     var accountpage = document.getElementById("accountpage");
     accountpage.style.display = "block";
     var enterAmn = document.getElementById("enterAmn").value;
     var checkings = document.getElementById("Checkings");
     var newbal = Number(balance) + Number(enterAmn);
     var table2 = document.getElementById("table2");
     table2.innerHTML = "<tr><th>DATE</th><th>PURCHASE</th><th>AMOUNT</th></tr><tr><td>12/08/2017</td><td>DEPOSIT</td><td> + " + enterAmn +"</td>"
     var opt = document.getElementById("options");
     if(opt.value == 1){
          var pendCharges = document.getElementById("pendCharges")
          pendCharges.innerHTML = "$ " + enterAmn;
     }

     if(opt.value == 2){
          checkings.innerHTML = "$ "+ newbal;
          var pendCharges = document.getElementById("pendCharges")
          pendCharges.innerHTML = "$ " + 0;
     }
     console.log(opt.value)
}

function withdrawn60(){
     event.preventDefault();
     var accountpage = document.getElementById("accountpage");
     accountpage.style.display = "block";
     var withdrawpage = document.getElementById("withdrawpage");
     withdrawpage.style.display = "none";
     var checkings = document.getElementById("Checkings");
     checkings.innerHTML = Number(balance) - 60;
     var table2 = document.getElementById("table2");
     table2.innerHTML = "<tr><th>DATE</th><th>PURCHASE</th><th>AMOUNT</th></tr><tr><td>12/08/2017</td><td>WITHDRAW</td><td>-60</td>"
}

function withdrawn40(){
     event.preventDefault();
     var accountpage = document.getElementById("accountpage");
     accountpage.style.display = "block";
     var withdrawpage = document.getElementById("withdrawpage");
     withdrawpage.style.display = "none";
     var checkings = document.getElementById("Checkings");
     checkings.innerHTML = Number(balance) - 40;
     var table2 = document.getElementById("table2");
     table2.innerHTML = "<tr><th>DATE</th><th>PURCHASE</th><th>AMOUNT</th></tr><tr><td>12/08/2017</td><td>WITHDRAW</td><td>-40</td>"
}

function withdrawn20(){
     event.preventDefault();
     var accountpage = document.getElementById("accountpage");
     accountpage.style.display = "block";
     var withdrawpage = document.getElementById("withdrawpage");
     withdrawpage.style.display = "none";
     var checkings = document.getElementById("Checkings");
     checkings.innerHTML = Number(balance) - 20;
     var table2 = document.getElementById("table2");
     table2.innerHTML = "<tr><th>DATE</th><th>PURCHASE</th><th>AMOUNT</th></tr><tr><td>12/08/2017</td><td>WITHDRAW</td><td>-20</td>"
}

function withdrawn80(){
     event.preventDefault();
     var accountpage = document.getElementById("accountpage");
     accountpage.style.display = "block";
     var withdrawpage = document.getElementById("withdrawpage");
     withdrawpage.style.display = "none";
     var checkings = document.getElementById("Checkings");
     checkings.innerHTML =  Number(balance) - 80;
     var table2 = document.getElementById("table2");
     table2.innerHTML = "<tr><th>DATE</th><th>PURCHASE</th><th>AMOUNT</th></tr><tr><td>12/08/2017</td><td>WITHDRAW</td><td>-80</td>"
}

function withdrawn100(){
     event.preventDefault();
     var accountpage = document.getElementById("accountpage");
     accountpage.style.display = "block";
     var withdrawpage = document.getElementById("withdrawpage");
     withdrawpage.style.display = "none";
     var checkings = document.getElementById("Checkings");
     checkings.innerHTML = Number(balance) - 100;
     var table2 = document.getElementById("table2");
     table2.innerHTML = "<tr><th>DATE</th><th>PURCHASE</th><th>AMOUNT</th></tr><tr><td>12/08/2017</td><td>WITHDRAW</td><td>-100</td>"
}

function withdrawn(){
     event.preventDefault();
     var accountpage = document.getElementById("accountpage");
     accountpage.style.display = "block";
     var withdrawpage = document.getElementById("withdrawpage");
     withdrawpage.style.display = "none";
     var checkings = document.getElementById("Checkings");
     checkings.innerHTML = Number(balance) - 200;
     var table2 = document.getElementById("table2");
     table2.innerHTML = "<tr><th>DATE</th><th>PURCHASE</th><th>AMOUNT</th></tr><tr><td>12/08/2017</td><td>WITHDRAW</td><td>-200</td>"
}

function returnCard(){
     event.preventDefault();
     var accountpage = document.getElementById("accountpage");
     accountpage.style.display = "none";
     var homepage = document.getElementById("homepage");
     homepage.style.display = "block";
     var withdrawpage = document.getElementById("withdrawpage");
     withdrawpage.style.display = "none";
}

function goback(){
     event.preventDefault();
     var accountpage = document.getElementById("accountpage");
     accountpage.style.display = "none";
     var homepage = document.getElementById("homepage");
     homepage.style.display = "block";
}

function accountlink(){
     event.preventDefault();
     var accountpage = document.getElementById("accountpage");
     accountpage.style.display = "block";
     var homepage = document.getElementById("homepage");
     homepage.style.display = "none";
}

function exit(){
     event.preventDefault();
     var homepage = document.getElementById("homepage");
     homepage.style.display = "none";
     var puesdo = document.getElementById("puesdo");
     puesdo.style.display = "block";
}

function password(){
     event.preventDefault();
     var recovery = document.getElementById("recovery");
     recovery.innerHTML = "1738";
}