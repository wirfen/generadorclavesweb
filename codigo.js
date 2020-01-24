document.getElementById("copiar").disabled=true;
function generarCodigo() {
    var n = document.getElementById("numbers").value
    if(!document.getElementById("letras").checked && !document.getElementById("numeros").checked && !document.getElementById("caracteres").checked){
        document.getElementById("copiar").disabled=true;
        alert("Escoge el tipo de caracteres que quieras");
    }
    else if(n>99 || n<1){
        alert("Numero entre 1 y 99");
    }
    else{
        document.getElementById("phrase").value = "";
        document.getElementById("copiar").disabled=false;
        var vector = new Array (n);
        //Letras mayusculas
        if(document.getElementById("letras").checked && !document.getElementById("numeros").checked && !document.getElementById("caracteres").checked && document.getElementById("mayusculas").checked){
            for(var i=0;i<n; i++){
                vector[i]=String.fromCharCode(Math.floor(26 * Math.random() + 65));
            }
        }
        //Letras minusculas
        if(document.getElementById("letras").checked && !document.getElementById("numeros").checked && !document.getElementById("caracteres").checked && document.getElementById("minusculas").checked){
            for(var i=0;i<n; i++){
                vector[i]=String.fromCharCode(Math.floor(26 * Math.random() + 97));
            }
        }
        //Letras ambos
        if(document.getElementById("letras").checked && !document.getElementById("numeros").checked && !document.getElementById("caracteres").checked && document.getElementById("ambos").checked){
            for(var i=0;i<n; i++){
                vector[i]=Math.floor(2 * Math.random());
            }

            for(var i=0;i<n; i++){
                if(vector[i]==0)
                vector[i]=String.fromCharCode(Math.floor(26 * Math.random() + 65));
                if(vector[i]==1)
                vector[i]=String.fromCharCode(Math.floor(26 * Math.random() + 97));
            }
        }
        //Numeros
        if(!document.getElementById("letras").checked && document.getElementById("numeros").checked && !document.getElementById("caracteres").checked){
            for(var i=0;i<n; i++){
                vector[i]=Math.floor(10 * Math.random());
            }
        }
        //Caracteres
        if(!document.getElementById("letras").checked && !document.getElementById("numeros").checked && document.getElementById("caracteres").checked){
            for(var i=0;i<n; i++){
                vector[i]=Math.floor(3 * Math.random());
            }
            for(var i=0;i<n; i++){
                if(vector[i]==0)
                vector[i]=String.fromCharCode(Math.floor(15 * Math.random() + 33));
                if(vector[i]==1)
                vector[i]=String.fromCharCode(Math.floor(7 * Math.random() + 58));
                if(vector[i]==2)
                vector[i]=String.fromCharCode(Math.floor(6 * Math.random() + 91));
            }
        }
        //Numeros y letras mayusculas
        if(document.getElementById("letras").checked && document.getElementById("numeros").checked && !document.getElementById("caracteres").checked && document.getElementById("mayusculas").checked){
            for(var i=0;i<n; i++){
                vector[i]=Math.floor(2 * Math.random());
            }
            for(var i=0;i<n; i++){
                if(vector[i]==0)
                vector[i]=Math.floor(10 * Math.random());
                if(vector[i]==1)
                vector[i]=String.fromCharCode(Math.floor(26 * Math.random() + 65));
            }
        }
        //Numeros y letras minusculas
        if(document.getElementById("letras").checked && document.getElementById("numeros").checked && !document.getElementById("caracteres").checked && document.getElementById("minusculas").checked){
            for(var i=0;i<n; i++){
                vector[i]=Math.floor(2 * Math.random());
            }
            for(var i=0;i<n; i++){
                if(vector[i]==0)
                vector[i]=Math.floor(10 * Math.random());
                if(vector[i]==1)
                vector[i]=String.fromCharCode(Math.floor(26 * Math.random() + 97));
            }
        }
        //Numeros y letras ambas
        if(document.getElementById("letras").checked && document.getElementById("numeros").checked && !document.getElementById("caracteres").checked && document.getElementById("ambos").checked){
            for(var i=0;i<n; i++){
                vector[i]=Math.floor(3 * Math.random());
            }
            for(var i=0;i<n; i++){
                if(vector[i]==0)
                vector[i]=Math.floor(10 * Math.random());
                if(vector[i]==1)
                vector[i]=String.fromCharCode(Math.floor(26 * Math.random() + 65));
                if(vector[i]==2)
                vector[i]=String.fromCharCode(Math.floor(26 * Math.random() + 97));
            }
        }
        //Caracteres, letras mayus
        if(document.getElementById("letras").checked && !document.getElementById("numeros").checked && document.getElementById("caracteres").checked && document.getElementById("mayusculas").checked){
            for(var i=0;i<n; i++){
                vector[i]=Math.floor(4 * Math.random());
            }
            for(var i=0;i<n; i++){
                if(vector[i]==0)
                vector[i]=String.fromCharCode(Math.floor(15 * Math.random() + 33));
                if(vector[i]==1)
                vector[i]=String.fromCharCode(Math.floor(7 * Math.random() + 58));
                if(vector[i]==2)
                vector[i]=String.fromCharCode(Math.floor(6 * Math.random() + 91));
                if(vector[i]==3)
                vector[i]=String.fromCharCode(Math.floor(26 * Math.random() + 65));
            }
        }
        //Caracteres, letras minus
        if(document.getElementById("letras").checked && !document.getElementById("numeros").checked && document.getElementById("caracteres").checked && document.getElementById("minusculas").checked){
            for(var i=0;i<n; i++){
                vector[i]=Math.floor(4 * Math.random());
            }
            for(var i=0;i<n; i++){
                if(vector[i]==0)
                vector[i]=String.fromCharCode(Math.floor(15 * Math.random() + 33));
                if(vector[i]==1)
                vector[i]=String.fromCharCode(Math.floor(7 * Math.random() + 58));
                if(vector[i]==2)
                vector[i]=String.fromCharCode(Math.floor(6 * Math.random() + 91));
                if(vector[i]==3)
                vector[i]=String.fromCharCode(Math.floor(26 * Math.random() + 97));
            }
        }
        //Caracteres, letras ambos
        if(document.getElementById("letras").checked && !document.getElementById("numeros").checked && document.getElementById("caracteres").checked && document.getElementById("ambos").checked){
            for(var i=0;i<n; i++){
                vector[i]=Math.floor(5 * Math.random());
            }
            for(var i=0;i<n; i++){
                if(vector[i]==0)
                vector[i]=String.fromCharCode(Math.floor(15 * Math.random() + 33));
                if(vector[i]==1)
                vector[i]=String.fromCharCode(Math.floor(7 * Math.random() + 58));
                if(vector[i]==2)
                vector[i]=String.fromCharCode(Math.floor(6 * Math.random() + 91));
                if(vector[i]==3)
                vector[i]=String.fromCharCode(Math.floor(26 * Math.random() + 65));
                if(vector[i]==4)
                vector[i]=String.fromCharCode(Math.floor(26 * Math.random() + 97));
            }
        }
        //Caracteres y numeros
        if(!document.getElementById("letras").checked && document.getElementById("numeros").checked && document.getElementById("caracteres").checked){
            for(var i=0;i<n; i++){
                vector[i]=Math.floor(4 * Math.random());
            }
            for(var i=0;i<n; i++){
                if(vector[i]==0)
                vector[i]=String.fromCharCode(Math.floor(15 * Math.random() + 33));
                if(vector[i]==1)
                vector[i]=String.fromCharCode(Math.floor(7 * Math.random() + 58));
                if(vector[i]==2)
                vector[i]=String.fromCharCode(Math.floor(6 * Math.random() + 91));
                if(vector[i]==3)
                vector[i]=Math.floor(10 * Math.random());
            }
        }
        //Caracteres, numeros y letras mayusculas
        if(document.getElementById("letras").checked && document.getElementById("numeros").checked && document.getElementById("caracteres").checked && document.getElementById("mayusculas").checked){
            for(var i=0;i<n; i++){
                vector[i]=Math.floor(5 * Math.random());
            }
            for(var i=0;i<n; i++){
                if(vector[i]==0)
                vector[i]=Math.floor(10 * Math.random());
                if(vector[i]==1)
                vector[i]=String.fromCharCode(Math.floor(15 * Math.random() + 33));
                if(vector[i]==2)
                vector[i]=String.fromCharCode(Math.floor(7 * Math.random() + 58));
                if(vector[i]==3)
                vector[i]=String.fromCharCode(Math.floor(6 * Math.random() + 91));
                if(vector[i]==4)
                vector[i]=String.fromCharCode(Math.floor(26 * Math.random() + 65));
            }
        }
        //Caracteres, numeros y letras minusculas
        if(document.getElementById("letras").checked && document.getElementById("numeros").checked && document.getElementById("caracteres").checked && document.getElementById("minusculas").checked){
            for(var i=0;i<n; i++){
                vector[i]=Math.floor(5 * Math.random());
            }
            for(var i=0;i<n; i++){
                if(vector[i]==0)
                vector[i]=Math.floor(10 * Math.random());
                if(vector[i]==1)
                vector[i]=String.fromCharCode(Math.floor(15 * Math.random() + 33));
                if(vector[i]==2)
                vector[i]=String.fromCharCode(Math.floor(7 * Math.random() + 58));
                if(vector[i]==3)
                vector[i]=String.fromCharCode(Math.floor(6 * Math.random() + 91));
                if(vector[i]==4)
                vector[i]=String.fromCharCode(Math.floor(26 * Math.random() + 97));
            }
        }
        //Caracteres, numeros y letras ambos
        if(document.getElementById("letras").checked && document.getElementById("numeros").checked && document.getElementById("caracteres").checked && document.getElementById("ambos").checked){
            for(var i=0;i<n; i++){
                vector[i]=Math.floor(6 * Math.random());
            }
            for(var i=0;i<n; i++){
                if(vector[i]==0)
                vector[i]=Math.floor(10 * Math.random());
                if(vector[i]==1)
                vector[i]=String.fromCharCode(Math.floor(15 * Math.random() + 33));
                if(vector[i]==2)
                vector[i]=String.fromCharCode(Math.floor(7 * Math.random() + 58));
                if(vector[i]==3)
                vector[i]=String.fromCharCode(Math.floor(6 * Math.random() + 91));
                if(vector[i]==4)
                vector[i]=String.fromCharCode(Math.floor(26 * Math.random() + 65));
                if(vector[i]==5)
                vector[i]=String.fromCharCode(Math.floor(26 * Math.random() + 97));
            }
        }
        document.getElementById("phrase").value = vector.join("");
    }
}

function copiar(){
    var copyText = document.getElementById("phrase");
    copyText.select();
    document.execCommand("copy");
}