//alert("Hello to js");
//console.log("CHAVALERIA!!!");
    var table = "Normal table";
    let chair= "One chair";
    console.log(table);
    console.log(chair);
    let testBoolean = true;
    console.log(testBoolean);
    let testNumber = 10;
    console.log(testNumber);
    let testString = "text";
    console.log(testString);
    let testBooleanObject = new Boolean(true);
    console.log(testBooleanObject);
    let testNumberObject = new Number(10);
    console.log(testNumberObject);
    let testStringObject = new String("text");
    console.log(testStringObject);
    let name1 = "John";
    let surname = "Doe";
    let age = 23;
    let question = "How are you "+name1+" "+surname+"?";
    let question3 = "How are you ".concat(name1)+" ".concat(surname)+"?";
    let question2 = `How old is ${name1} ${surname}?`;
    let answer = "He is "+age+" years old";
    console.log(question2);
    console.log(answer);
    console.log(question3);
//Operadores
    let operator_a = 12;
    let operator_b = 6;
    let sum = operator_a + operator_b;
    let rest = operator_a - operator_b;
    let mult = operator_a * operator_b;
    let division = operator_a / operator_b;
    console.log(sum);
    console.log(rest);
    console.log(mult);
    console.log(division);
    let expo = operator_a ** operator_b;
    let incr = ++operator_a;// Sin asignar a incr seria opeador_a++ a secas
    let decr = --operator_a;
    console.log(expo);
    console.log(incr);
    console.log(decr);
//Operadores de mayores xD
    let x = 5;
    let y = 6;
    console.log(x+=5);
    console.log(x-=5);
    console.log(x*=3);
    console.log(y/=2);
//Typeof
    console.log(typeof(testBoolean));
    console.log(typeof(testNumber));
    console.log(typeof(testString));
    console.log(typeof(testBooleanObject));
//Null
    let testNull = null;
    console.log(testNull);
//Undefinied
    let testUndefined;
    console.log(typeof(testUndifinied));
//Array
    var first_array = [];
    var second_array = new Array(3);
    var third_array = new Array(3,5);
    var fourth_array = new Array(3,5,"Seville",true,third_array);
    console.log(first_array);//Esta 
    console.log(second_array);//Esta con 3 huecos vacio
    console.log(third_array);//Esta con los valores 3 y 5
    console.log(fourth_array);//Esta con los valores introducidos y un Array
//Acceso
    console.log(third_array[1]);
    console.log(fourth_array[2][3]);
//Longitus
    console.log(fourth_array.length);
//Meter elementos
    console.log(fourth_array.push("Spain"));
    fourth_array.push("Spain")//Al final
    console.log(fourth_array.length);
    fourth_array.unshift(1);//Al prinsicipio
    console.log(fourth_array);
    //For
    for(var i = 0; i<fourth_array.length;i++){
        console.log("Entramos en la iteracion de "+fourth_array[i]);
    }
    for(var i =fourth_array.length-1; i>=0; i--){
        console.log("Entramos en la iteracion de "+fourth_array[i]);
    }//Mas rapi-ditto
    var i =fourth_array.length-1;
    for(; i>=0; i--){
        console.log("Entramos en la iteracion de "+fourth_array[i]);
    }//Mas fast and furius
//Foreach
    fourth_array.forEach(function(element){
        console.log("Entramos en la iteracion de "+element);
    });//El mas mejor
//if/ else if / else
    let aux = 3;
    if(aux > 0){
        console.log("This number is positive");
    }else if(aux < 0){
        console.log("This number is negative");
    }else{
        console.log("This number is 0");
    }
//Regular espressions
    var DNI_REGEX = /^(\d{8})([A-Z])$/;
    let dni = "12345678K";
    if(dni.match(DNI_REGEX)){
        console.log("Correct DNI");
    }else{
        console.log("Incorrect DNI");
    }
//Comparacion
    console.log(8==8);
    console.log(8=="8");
    console.log(8===8);
    console.log(8==="8");
    console.log(5>8);
    console.log(5<8);
    console.log(5>=8);
    console.log(5<=8);
    console.log(8!=8);
    console.log(8!="8");
    console.log(8!==8);
    console.log(8!=="8");
    console.log("text"=="text");
    console.log("text"==='text');
    console.log("text"=="Text");
//While
    var i = 1;
    while(i<10){
        console.log("The number is "+i);
        i++;
    }
//Date
    let today = new Date();
    let first_october = new Date(2019, 9, 1);
    console.log(today);
    console.log(first_october);
    console.log(today.getDay());
    if(today>first_october){
        console.log("Today is after first October")
    }else{
        console.log("Today is before first October")
    }
//Eventos
    function myFisrstFunction(){
        console.log("Thank you for you click");
    }
    function mySecondFunction(){
        console.log("Thank you for you interest");  
    }
//Select DOM
    var div = document.getElementById("my_div");
    div.classList.add("my_class");
    console.log(div);
    var div = document.getElementsByTagName("div");
    console.log(div);
    var second_div = document.querySelector("#my_second_div");
    console.log(second_div);
    function $(selector){
        return document.querySelector(selector);
    }
    console.log($("#my_third_div"));
    console.log($(".div_especial"));
//Funciones
    var numbers = [1,2,3,4];
    var n_elevator_1 = numbers.map(function(n){ return n*n;});
    console.log(n_elevator_1);
   //Funcion flecha
    var n_elevator_2 = numbers.map((n) => { return n*n;});
    console.log(n_elevator_2);
    var n_elevator_3 = numbers.map((n) => {console.log(n); return n*n;});
    console.log(n_elevator_3);
    var n_elevator_4 = numbers.map(n => n*n);
    console.log(n_elevator_4);
    let number =[[1,2],[2,3],[3,4],[4,5]];
    let itself = number.map(([x,y]) => x*y);
    console.log(itself);
//Agregar elementos
    $("#btn2").addEventListener("click",function(){
        var input = document.createElement("input");
        input.setAttribute("type", "email");
        input.setAttribute("placeholder", "E-mail");
        input.setAttribute("name", "email");
        $("#form").appendChild(input);
        myAlert("Add new email input");
    });
    function myAlert(msg){
        var div = document.createElement("div");
        div.classList.add("alert");
        div.innerHTML = msg;
        var close = document.createElement("span");
        close.style.float="right";
        close.classList.add("close");
        close.innerHTML = "X";
        div.appendChild(close);
        $("body").insertBefore(div,$("body").firstChild);
        bind_close();
    }
    function bind_close ( ) {
        let elements = document.querySelectorAll ( ".close") ;
        for ( var i=elements.length-1;i>=0;i--) {
            let el = elements[i];
            el.addEventListener ("click",function( ){
                this.parentNode.style.display = "none";
            } );

       }
    }