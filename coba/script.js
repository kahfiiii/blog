const txt = ['Freelancer','Chatbot Developer','Web Developer']
let count = 0;
let txtindex= 0;
let currenttxt= '';
let words ='';

(function ketik (){
    if(count == txt.length){
        count=0;
    }
    currenttxt = txt[count]
    words = currenttxt.slice(0,++txtindex);
    document.querySelector('.efek').textContent=words;

    if(words.length == currenttxt.length){
        count++;
        txtindex = 0;
    }

    setTimeout(ketik,300);

})();

