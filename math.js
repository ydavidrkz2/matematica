//Pitágoras//    
function pitagoras() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var c = parseInt(document.getElementById('c').value);
        if( isNaN(a)) {
            var cat1 = b * b;
            var cat2 = c * c;
            var pit1 = cat1 + cat2;
            var result = Math.sqrt(pit1);
            var escrever = document.getElementById('respostapitagoras').innerHTML = "Hipotenusa vale " + result;
        }
        if( isNaN(b)) {
            var hip = a * a;
            var cat2 = c * c;
            var pit1 = hip / cat2;
            var result = Math.sqrt(pit1);
            var escrever = document.getElementById('respostapitagoras').innerHTML = "Cateto vale " + result;
        }
        if( isNaN(c)) {
            var hip = a * a;
            var cat2 = b * b;
            var pit1 = hip / cat2;
            var result = Math.sqrt(pit1);
            var escreverd = document.getElementById('respostapitagoras').innerHTML = "Cateto vale " + result;
          }
        if( isNaN(c) && isNaN(b)) {
            var escrevere = document.getElementById('respostapitagoras').innerHTML = "Parâmetros incorretos. Insira somente uma letra";
        }
        if( isNaN(a) && isNaN(b)) {
            var escreverr = document.getElementById('respostapitagoras').innerHTML = "Parâmetros incorretos. Insira somente uma letra";
        }
        if( isNaN(a) && isNaN(c)) {
            var escrever = document.getElementById('respostapitagoras').innerHTML = "Parâmetros incorretos. Insira somente uma letra";
        }
}

//Área//
function abrir() {
    var verArea = document.getElementById('areas').value;
        if( verArea == 'ret'){
            var write0 = document.getElementById("uno").innerHTML = "<br><br>Insira o valor da base</br> <br>"
            var write1 = document.getElementById("duno").innerHTML = "<input id='ret1' type='text'><br>"
            var write2 = document.getElementById("tre").innerHTML = "<br>Insira o valor da altura</br> <br>"
            var write3 = document.getElementById("quatre").innerHTML = "<input id='ret2' type='text'><br>"
            var write4 = document.getElementById("cinque").innerHTML = "<button onclick='arearet()'>Resultado</button>"
            var write5 = document.getElementById("seix").innerHTML = ""
            var write6 = document.getElementById("cete").innerHTML = ""
            var write7 = document.getElementById("otxo").innerHTML = ""
            var write8 = document.getElementById("nueve").innerHTML = "<button onclick='apagar()'>Apagar</button>"
          }
        if( verArea == 'non'){
            var write0 = document.getElementById("uno").innerHTML = ""
            var write1 = document.getElementById("duno").innerHTML = ""
            var write2 = document.getElementById("tre").innerHTML = ""
            var write3 = document.getElementById("quatre").innerHTML = ""
            var write4 = document.getElementById("cinque").innerHTML = ""
            var write5 = document.getElementById("seix").innerHTML = ""
            var write6 = document.getElementById("cete").innerHTML = ""
            var write7 = document.getElementById("otxo").innerHTML = ""
            var write8 = document.getElementById("nueve").innerHTML = ""
          }
        if( verArea == 'cir'){
            var write0 = document.getElementById("uno").innerHTML = "<br>Insira o valor do raio <br>"
            var write1 = document.getElementById("duno").innerHTML = "<input id='rai1' type='text'><br>"
            var write2 = document.getElementById("tre").innerHTML = "<button onclick='areacir()'>Resultado</button>"
            var write3 = document.getElementById("quatre").innerHTML = ""
            var write4 = document.getElementById("cinque").innerHTML = ""
            var write5 = document.getElementById("seix").innerHTML = ""
            var write6 = document.getElementById("cete").innerHTML = ""
            var write7 = document.getElementById("otxo").innerHTML = ""
            var write8 = document.getElementById("nueve").innerHTML = "<button onclick='apagar()'>Apagar</button>"
          }
        if( verArea == 'los'){
            var write0 = document.getElementById("uno").innerHTML = "<br><br>Insira o valor da diagonal maior</br> <br>"
            var write1 = document.getElementById("duno").innerHTML = "<input id='dia1' type='text'><br>"
            var write2 = document.getElementById("tre").innerHTML = "<br>Insira o valor da diagonal menor</br> <br>"
            var write3 = document.getElementById("quatre").innerHTML = "<input id='dia2' type='text'><br>"
            var write4 = document.getElementById("cinque").innerHTML = "<button onclick='arealos()'>Resultado</button>"
            var write5 = document.getElementById("seix").innerHTML = ""
            var write6 = document.getElementById("cete").innerHTML = ""
            var write7 = document.getElementById("otxo").innerHTML = ""
            var write8 = document.getElementById("nueve").innerHTML = "<button onclick='apagar()'>Apagar</button>"
          }
        if( verArea == 'qua'){
            var write0 = document.getElementById("uno").innerHTML = "<br><br>Insira o valor do lado</br> <br>"
            var write1 = document.getElementById("duno").innerHTML = "<input id='qua1' type='text'><br>"
            var write2 = document.getElementById("tre").innerHTML = "<button onclick='areaqua()'>Resultado</button>"
            var write3 = document.getElementById("quatre").innerHTML = ""
            var write4 = document.getElementById("cinque").innerHTML = ""
            var write5 = document.getElementById("seix").innerHTML = ""
            var write6 = document.getElementById("cete").innerHTML = ""
            var write7 = document.getElementById("otxo").innerHTML = ""
            var write8 = document.getElementById("nueve").innerHTML = "<button onclick='apagar()'>Apagar</button>"
          }
        if( verArea == 'tEs'){
            var write0 = document.getElementById("uno").innerHTML = "<br><br>Insira o valor da base</br> <br>"
            var write1 = document.getElementById("duno").innerHTML = "<input id='tEs1' type='text'><br>"
            var write2 = document.getElementById("tre").innerHTML = "<br>Insira o valor da altura</br> <br>"
            var write3 = document.getElementById("quatre").innerHTML = "<input id='tEs2' type='text'><br>"
            var write4 = document.getElementById("cinque").innerHTML = "<button onclick='areatEs()'>Resultado</button>"
            var write5 = document.getElementById("seix").innerHTML = ""
            var write6 = document.getElementById("cete").innerHTML = ""
            var write7 = document.getElementById("otxo").innerHTML = ""
            var write8 = document.getElementById("nueve").innerHTML = "<button onclick='apagar()'>Apagar</button>"
          }
        if( verArea == 'tEq'){
            var write0 = document.getElementById("uno").innerHTML = "<br><br>Insira o valor da base</br> <br>"
            var write1 = document.getElementById("duno").innerHTML = "<input id='tEs1' type='text'><br>"
            var write2 = document.getElementById("tre").innerHTML = "<br>Insira o valor da altura</br> <br>"
            var write3 = document.getElementById("quatre").innerHTML = "<input id='tEs2' type='text'><br>"
            var write4 = document.getElementById("cinque").innerHTML = "<button onclick='areatEs()'>Resultado</button>"
            var write5 = document.getElementById("seix").innerHTML = ""
            var write6 = document.getElementById("cete").innerHTML = ""
            var write7 = document.getElementById("otxo").innerHTML = ""
            var write8 = document.getElementById("nueve").innerHTML = "<button onclick='apagar()'>Apagar</button>"
          }
        if( verArea == 'tIs'){
            var write0 = document.getElementById("uno").innerHTML = "<br><br>Insira o valor do lado</br> <br>"
            var write1 = document.getElementById("duno").innerHTML = "<input id='tIs1' type='text'><br>"
            var write2 = document.getElementById("tre").innerHTML = "<button onclick='areatIs()'>Resultado</button>"
            var write3 = document.getElementById("quatre").innerHTML = ""
            var write4 = document.getElementById("cinque").innerHTML = ""
            var write5 = document.getElementById("seix").innerHTML = ""
            var write6 = document.getElementById("cete").innerHTML = ""
            var write7 = document.getElementById("otxo").innerHTML = ""
            var write8 = document.getElementById("nueve").innerHTML = "<button onclick='apagar()'>Apagar</button>"
          }
        if(verArea == 'sCr'){
            var write0 = document.getElementById("uno").innerHTML = "Digite o valor do ângulo central";
            var write1 = document.getElementById("duno").innerHTML = "<input id='anc' type='text'><br>"
            var write2 = document.getElementById("tre").innerHTML = "Digite o valor do Raio"
            var write3 = document.getElementById("quatre").innerHTML = "<input id='raio' type='text'><br>"
            var write4 = document.getElementById("cinque").innerHTML = "<button onclick='setorCir()'>Resultado</button>"
            var write5 = document.getElementById("seix").innerHTML = ""
            var write6 = document.getElementById("cete").innerHTML = ""
            var write7 = document.getElementById("otxo").innerHTML = ""
            var write8 = document.getElementById("nueve").innerHTML = "<button onclick='apagar()'>Apagar</button>"
          }
}
function arearet() {
    var retan = parseInt(document.getElementById('ret1').value);
    var retaN = parseInt(document.getElementById('ret2').value);
    var conta = retan * retaN;
    var write5 = document.getElementById("seix").innerHTML = "<br>O valor da área é " + conta;
}
function areacir() {
    var raion = parseInt(document.getElementById('rai1').value);
    var conta = 3.14 * (raion * raion) ;
    var write5 = document.getElementById("seix").innerHTML = "<br>O valor da área é " + conta;
}
function arealos() {
    var diaON = parseInt(document.getElementById('dia1').value);
    var diaon = parseInt(document.getElementById('dia2').value);
    var conta = (diaON * diaon) /2 ;
    var write5 = document.getElementById("seix").innerHTML = "<br>O valor da área é " + conta;
}
function areaqua() {
    var quaon = parseInt(document.getElementById('qua1').value);
    var conta = quaon * quaon
    var write5 = document.getElementById("seix").innerHTML = "<br>O valor da área é " + conta;
}
function areatEs() {
    var tEsON = parseInt(document.getElementById('tEs1').value);
    var tEson = parseInt(document.getElementById('tEs2').value);
    var conta = (tEsON * tEson) /2 ;
    var write5 = document.getElementById("seix").innerHTML = "<br>O valor da área é " + conta;
}
function areatIs() {
    var tIsON = parseInt(document.getElementById('tIs1').value);
    var conta = (tIsON * tIsON) * Math.sqrt(3) / 4 ;
    var write5 = document.getElementById("seix").innerHTML = "<br>O valor da área é " + conta;
}
function setorCir() {
    var valAng = parseInt(document.getElementById('anc').value);
    var valRai = parseInt(document.getElementById('raio').value);
    var primCont = valAng / 360;
    var segCont = valRai * valRai;
    var terCont = primCont * 3.14 * segCont;
    var respostina = document.getElementById("seix").innerHTML = "<br>O valor da área é " + terCont;
}
//Perimetro//
function abrir2() {
    var verper = document.getElementById('perimetros').value;

        if( verper == 'ret'){
        var write0 = document.getElementById("uno2").innerHTML = "<br><br>Insira o valor da base<br><br>"
        var write1 = document.getElementById("duno2").innerHTML = "<input id='retp1' type='text'>"
        var write2 = document.getElementById("tre2").innerHTML = "<br><br>Insira o valor da altura<br><br>"
        var write3 = document.getElementById("quatre2").innerHTML = "<input id='retp2' type='text'>"
        var write4 = document.getElementById("cinque2").innerHTML = "<button onclick='perret()'>Resultado</button>"
        var write5 = document.getElementById("seix2").innerHTML = ""
        var write6 = document.getElementById("cete2").innerHTML = ""
        var write7 = document.getElementById("otxo2").innerHTML = "<button onclick='apagar2()'>Apagar</button>"
        var write8 = document.getElementById("nueve2").innerHTML = ""
        }

        if( verper == 'non'){
        var write0 = document.getElementById("uno2").innerHTML = ""
        var write1 = document.getElementById("duno2").innerHTML = ""
        var write2 = document.getElementById("tre2").innerHTML = ""
        var write3 = document.getElementById("quatre2").innerHTML = ""
        var write4 = document.getElementById("cinque2").innerHTML = ""
        var write5 = document.getElementById("seix2").innerHTML = ""
        var write6 = document.getElementById("cete2").innerHTML = ""
        var write7 = document.getElementById("otxo2").innerHTML = "<button onclick='apagar2()'>Apagar</button>"
        var write8 = document.getElementById("nueve2").innerHTML = ""
        }

        if( verper == 'cir'){
        var write0 = document.getElementById("uno2").innerHTML = "<br><br>Insira o valor do raio<br><br>"
        var write1 = document.getElementById("duno2").innerHTML = "<input id='raip1' type='text'>"
        var write2 = document.getElementById("tre2").innerHTML = "<button onclick='percir()'>Resultado</button>"
        var write3 = document.getElementById("quatre2").innerHTML = ""
        var write4 = document.getElementById("cinque2").innerHTML = ""
        var write5 = document.getElementById("seix2").innerHTML = ""
        var write6 = document.getElementById("cete2").innerHTML = ""
        var write7 = document.getElementById("otxo2").innerHTML = "<button onclick='apagar2()'>Apagar</button>"
        var write8 = document.getElementById("nueve2").innerHTML = ""
        }

        if( verper == 'los'){
        var write0 = document.getElementById("uno2").innerHTML = "<br><br>Insira o valor do lado<br><br>"
        var write1 = document.getElementById("duno2").innerHTML = "<input id='losp1' type='text'>"
        var write2 = document.getElementById("tre2").innerHTML = "<button onclick='perlos()'>Resultado</button>"
        var write3 = document.getElementById("quatre2").innerHTML = ""
        var write4 = document.getElementById("cinque2").innerHTML = ""
        var write5 = document.getElementById("seix2").innerHTML = ""
        var write6 = document.getElementById("cete2").innerHTML = ""
        var write7 = document.getElementById("otxo2").innerHTML = "<button onclick='apagar2()'>Apagar</button>"
        var write8 = document.getElementById("nueve2").innerHTML = ""
        }

        if( verper == 'qua'){
        var write0 = document.getElementById("uno2").innerHTML = "<br><br>Insira o valor do lado<br><br>"
        var write1 = document.getElementById("duno2").innerHTML = "<input id='quap1' type='text'>"
        var write2 = document.getElementById("tre2").innerHTML = "<button onclick='perqua()'>Resultado</button>"
        var write3 = document.getElementById("quatre2").innerHTML = ""
        var write4 = document.getElementById("cinque2").innerHTML = ""
        var write5 = document.getElementById("seix2").innerHTML = ""
        var write6 = document.getElementById("cete2").innerHTML = ""
        var write7 = document.getElementById("otxo2").innerHTML = "<button onclick='apagar2()'>Apagar</button>"
        var write8 = document.getElementById("nueve2").innerHTML = ""
        }

        if( verper == 'tEs'){
        var write0 = document.getElementById("uno2").innerHTML = "<br><br>Insira o valor do lado um<br><br>"
        var write1 = document.getElementById("duno2").innerHTML = "<input id='tEs1' type='text'>"
        var write2 = document.getElementById("tre2").innerHTML = "<br><br>Insira o valor do lado dois<br><br>"
        var write3 = document.getElementById("quatre2").innerHTML = "<input id='tEs2' type='text'>"
        var write4 = document.getElementById("cinque2").innerHTML = "<br><br>Insira o valor do lado três<br><br>"
        var write5 = document.getElementById("seix2").innerHTML = "<input id='tEs3' type='text'>"
        var write6 = document.getElementById("cete2").innerHTML = "<button onclick='pertEs()'>Resultado</button>"
        var write7 = document.getElementById("otxo2").innerHTML = "<button onclick='apagar2()'>Apagar</button>"
        var write8 = document.getElementById("nueve2").innerHTML = ""
        }

        if( verper == 'tEq'){
        var write0 = document.getElementById("uno2").innerHTML = "<br><br>Insira o valor do lado<br><br>"
        var write1 = document.getElementById("duno2").innerHTML = "<input id='tEq1' type='text'>"
        var write2 = document.getElementById("tre2").innerHTML = "<button onclick='pertEq()'>Resultado</button>"
        var write3 = document.getElementById("quatre2").innerHTML = ""
        var write4 = document.getElementById("cinque2").innerHTML = ""
        var write5 = document.getElementById("seix2").innerHTML = ""
        var write6 = document.getElementById("cete2").innerHTML = ""
        var write7 = document.getElementById("otxo2").innerHTML = "<button onclick='apagar2()'>Apagar</button>"
        var write8 = document.getElementById("nueve2").innerHTML = ""
        }

        if( verper == 'tIs'){
        var write0 = document.getElementById("uno2").innerHTML = "<br><br>Insira o valor do lado duplicado<br><br>"
        var write1 = document.getElementById("duno2").innerHTML = "<input id='tIs1' type='text'>"
        var write2 = document.getElementById("tre2").innerHTML = "<br><br>Insira o valor do lado diferente<br><br>"
        var write3 = document.getElementById("quatre2").innerHTML = "<input id='tIs2' type='text'>"
        var write4 = document.getElementById("cinque2").innerHTML = "<button onclick='pertIs()'>Resultado</button>"
        var write5 = document.getElementById("seix2").innerHTML = ""
        var write6 = document.getElementById("cete2").innerHTML = ""
        var write7 = document.getElementById("otxo2").innerHTML = "<button onclick='apagar2()'>Apagar</button>"
        var write8 = document.getElementById("nueve2").innerHTML = ""
        }
}
function perret() {
    var retpe = parseInt(document.getElementById('retp1').value);
    var retPE = parseInt(document.getElementById('retp2').value);
    var conta = retpe * 2 + retPE * 2;
    var write = document.getElementById("nueve2").innerHTML = "<br>O valor do perímetro é " + conta;
}
function percir() {
    var raip = parseInt(document.getElementById('raip1').value);
    var conta = 2 * 3.14 * raip;
    var write = document.getElementById("nueve2").innerHTML = "<br>O valor do perímetro  é " + conta;
}
function perlos() {
    var lospe = parseInt(document.getElementById('losp1').value);
    var conta = lospe * 4;
    var write = document.getElementById("nueve2").innerHTML = "<br>O valor do perímetro é " + conta;
}
function perqua() {
    var quape = parseInt(document.getElementById('quap1').value);
    var conta = quape * 4;
    var write = document.getElementById("nueve2").innerHTML = "<br>O valor do perímetro é " + conta;
}
function pertEs() {
    var tEspe = parseInt(document.getElementById('tEs1').value);
    var tESpe = parseInt(document.getElementById('tEs2').value);
    var tEspE = parseInt(document.getElementById('tEs3').value);
    var conta = tEspe + tESpe + tEspE;
    var write = document.getElementById("nueve2").innerHTML = "<br>O valor do perímetro é " + conta;
}
function pertEq() {
    var tEqpe = parseInt(document.getElementById('tEq1').value);
    var conta = tEqpe * 3
    var write = document.getElementById("nueve2").innerHTML = "<br>O valor do perímetro é " + conta;
}
function pertIs() {
    var tIspe = parseInt(document.getElementById('tIs1').value);
    var tiSpe = parseInt(document.getElementById('tIs2').value);
    var conta = tIspe * 2 + tiSpe;
    var write = document.getElementById("nueve2").innerHTML = "<br>O valor do perímetro é " + conta;
}

// PORCENTAGEM //
function porcentagem() {
    var parte1 = parseInt(document.getElementById('porcentagem').value);
    var parte2 = parseInt(document.getElementById('porcentagem2').value);
    var parte3 = ( parte1 * 100 ) 
    var divisao = parte3 / parte2
    var resultt = document.getElementById('ola').innerHTML = "<br>O valor da porcentagem é " + divisao + "%" ;
}
function porcentagem2() {
    var parte6 = parseInt(document.getElementById('porcentagem3').value);
    var parte7 = parseInt(document.getElementById('porcentagem4').value);
    var parte8 = (parte6 * parte7 ) / 100 ;
    var resultadoo = document.getElementById('ola').innerHTML = "<br>O valor é " + parte8 ;
}
function mudar() {
    var novoCalc = document.getElementById("mudartudo").innerHTML = "<p>Digite a porcentagem (somente numeros)</p><br><input id='porcentagem3' type='text'>%<br><p>Digite o total</p><br><input id='porcentagem4' type='text'><br><button onclick='porcentagem2()'>Resposta</button><br><div id='ola'></div><br><div id='oi'></div><br><div id='oie'></div><br><div id='alo'><p id='acao' onclick='mudar2()'><small>Tem a parte e quer descobrir a porcentagem? clique aqui.</small></p></div><br>";
}
function mudar2() {
    var novoCalc2 = document.getElementById("mudartudo").innerHTML = "<p>Digite a parte</p><input id='porcentagem' type='text' value=''><br><p>Digite o total</p><input id='porcentagem2' type='text' value=''><br><button onclick='porcentagem()'>Resposta</button><div id='ola'></div><div id='oi'></div><div id='oie'></div><div id='alo'><p id='acao' onclick='mudar()'><small>Tem a porcentagem e quer descobrir a parte? clique aqui.</small></p></div>";
}
function apagar() {
    var write0 = document.getElementById("uno").innerHTML = ""
    var write1 = document.getElementById("duno").innerHTML = ""
    var write2 = document.getElementById("tre").innerHTML = ""
    var write3 = document.getElementById("quatre").innerHTML = ""
    var write4 = document.getElementById("cinque").innerHTML = ""
    var write5 = document.getElementById("seix").innerHTML = ""
    var write6 = document.getElementById("cete").innerHTML = ""
    var write7 = document.getElementById("otxo").innerHTML = ""
    var write8 = document.getElementById("nueve").innerHTML = ""
}
function apagar2() {
    var write0 = document.getElementById("uno2").innerHTML = ""
    var write1 = document.getElementById("duno2").innerHTML = ""
    var write2 = document.getElementById("tre2").innerHTML = ""
    var write3 = document.getElementById("quatre2").innerHTML = ""
    var write4 = document.getElementById("cinque2").innerHTML = ""
    var write5 = document.getElementById("seix2").innerHTML = ""
    var write6 = document.getElementById("cete2").innerHTML = ""
    var write7 = document.getElementById("otxo2").innerHTML = ""
    var write8 = document.getElementById("nueve2").innerHTML = ""
}
function apagarpit() {
    var apagapit = document.getElementById('a').value = ""
    var apagapit2 = document.getElementById('b').value = ""
    var apagapit3 = document.getElementById('c').value = ""
    var write0 = document.getElementById('respostapitagoras').innerHTML = ""
}

//RETRAÇÃO//

function desretrairpitagoras() {
    var trocaimg = document.getElementById('trocaimg1').innerHTML = "<img onclick='retrairpitagoras()'' class='icon' src='https://image.flaticon.com/icons/svg/149/149146.svg' alt='Seta Menos'>"
    var trocatxt = document.getElementById('retrair1').innerHTML = "<p>Hipotenusa</p><input id='a' type='text' value=''><p>Cateto</p><input id='b' type='text' value=''><p>Cateto</p><input id='c' type='text' value=''><br><br><button onclick='pitagoras()'>Resposta</button><button onclick='apagarpit()'>Apagar</button>"
}
function retrairpitagoras() {
    var trocaimg1 = document.getElementById('trocaimg1').innerHTML = "<img onclick='desretrairpitagoras()' class='icon' src='https://image.flaticon.com/icons/svg/149/149145.svg' alt='Seta'>"
    var trocatxt1 = document.getElementById('retrair1').innerHTML = ""
    var trocaresp = document.getElementById('respostapitagoras').innerHTML = ""
}
function desretrairareas() {
    var trocaimg = document.getElementById('trocaimg2').innerHTML = "<img onclick='retrairareas()' class='icon' src='https://image.flaticon.com/icons/svg/149/149146.svg' alt='Seta Menos'>"
    var trocatxt = document.getElementById('retrair2').innerHTML = "<select id='areas'><option value='non'>Selecione sua figura</option><option value='ret'>Retângulo</option><option value='cir'>Círculo</option><option value='los'>Losango</option><option value='qua'>Quadrado</option><option value='tEs'>Triângulo Escaleno</option> <option value='tEq'>Triângulo Equilátero</option><option value='tIs'>Triângulo Isósceles</option><option value='sCr'>Setor Circular</option></select><br><br><button onclick='abrir()'>Continuar</button>"
}
function retrairareas() {
    var trocaimg1 = document.getElementById('trocaimg2').innerHTML = "<img onclick='desretrairareas()' class='icon' src='https://image.flaticon.com/icons/svg/149/149145.svg' alt='Seta'>"
    var trocatxt1 = document.getElementById('retrair2').innerHTML = ""
    var trocaresp2 = apagar();
}
function desretrairperimetro() {
    var trocaimg2 = document.getElementById('trocaimg3').innerHTML = "<img onclick='retrairperimetro()' class='icon' src='https://image.flaticon.com/icons/svg/149/149146.svg' alt='Seta Menos'>"
    var trocatxt2 = document.getElementById('retrair3').innerHTML = "<select id='perimetros'><option value='non'>Selecione sua figura</option><option value='ret'>Retângulo</option><option value='cir'>Círculo</option><option value='los'>Losango</option><option value='qua'>Quadrado</option><option value='tEs'>Triângulo Escaleno</option><option value='tEq'>Triângulo Equilátero</option><option value='tIs'>Triângulo Isósceles</option></select><br><br><button onclick='abrir2()'>Continuar</button>"
}
function retrairperimetro() {
    var trocaimg3 = document.getElementById('trocaimg3').innerHTML = "<img onclick='desretrairperimetro()' class ='icon' src='https://image.flaticon.com/icons/svg/149/149145.svg' alt='Seta'>"
    var trocatxt3 = document.getElementById('retrair3').innerHTML = ""
    var trocaresp3 = apagar2();
}
function desretrairporcentagem() {
    var trocaimg4 = document.getElementById('trocaimg4').innerHTML = "<img onclick='retrairporcentagem()' class='icon' src='https://image.flaticon.com/icons/svg/149/149146.svg' alt='Seta Menos'>"
    var trocatxt4 = document.getElementById('retrair4').innerHTML = "<div id='mudartudo'><p>Digite a parte</p><input id='porcentagem' type='text'><br><p>Digite o total</p><input id='porcentagem2' type='text'><br><button onclick='porcentagem()'>Resposta</button><div id='ola'></div><div id='oi'></div><div id='oie'></div><div id='alo'><p id='acao' onclick='mudar()'><small>Tem a porcentagem e quer descobrir a parte? clique aqui.</small></p></div></div>"
}
function retrairporcentagem() {
    var trocaimg5 = document.getElementById('trocaimg4').innerHTML = "<img onclick='desretrairporcentagem()' class ='icon' src='https://image.flaticon.com/icons/svg/149/149145.svg' alt='Seta'>"
    var trocatxt5 = document.getElementById('retrair4').innerHTML = ""
}

