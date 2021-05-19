
function changeColor(colorValue) {
    document.body.style.background = document.getElementById(colorValue).dataset.color;
}


function Rnd()
    {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        document.getElementById('Navic').style.backgroundColor=color
    }


    var  name="Осьминкин Дмитрий";
document.getElementById('FIO').innerHTML= name;
function rename(){
    var input = document.getElementById('txt').value;
    document.getElementById('FIO').innerHTML=input;
}