var audio = new Audio('Music/On-and-On.mp3');
var index=0;

var details=[
    {song:"On and On",
     label:"NCS",
     artist:"Daniel Levi"
    },
    {song:"Candyland",
    label:"NCS",
    artist:"Tobu"
    },
    {song:"Superhero",
    label:"NCS",
    artist:"Chris Linton"
    }
]

var check=false;
var num=7;

const progressEl = document.querySelector('#seekbar');


audio.addEventListener("loadeddata", () => {
    progressEl.value = 0;
});


setInterval(function () {
    if(audio.currentTime==audio.duration){
        document.getElementById("pause").innerHTML=`<i class="fa-solid fa-pause fa-2xl"></i>`;
        check=false;
    }
    progressEl.value=audio.currentTime/audio.duration*100;
}, 2000);

progressEl.addEventListener("change", () => {
    const pct = progressEl.value / 100;
    audio.currentTime = (audio.duration || 0) * pct;
  });

document.getElementById("poster").src="Album Art/"+details[index].song+'.jpg';
document.getElementById("song").innerText=details[index].song;
document.getElementById("label").innerText=details[index].label;
document.getElementById("artist").innerText=details[index].artist;


document.getElementById("prev").addEventListener("click", ()=>{
    if(index==0){
        index=details.length-1;
    }
    else{
        index--;
    }
    audio.pause();
    audio =new Audio("Music/"+details[index].song+'.mp3');
    document.getElementById("poster").src="Album Art/"+details[index].song+'.jpg';
    document.getElementById("song").innerText=details[index].song;
    document.getElementById("label").innerText=details[index].label;
    document.getElementById("artist").innerText=details[index].artist;
    progressEl.value = 0;
    audio.play();
    document.getElementById("pause").innerHTML=`<i class="fa-solid fa-play fa-2xl"></i>`;
    check=true;
    num=Math.floor(Math.random()*14);
    document.getElementById("back").style="background-image:url(Backgrounds/"+num+".gif);";
});

document.getElementById("next").addEventListener("click", ()=>{
    index=(index+1)%(details.length);
    audio.pause();
    audio =new Audio("Music/"+details[index].song+'.mp3');
    document.getElementById("poster").src="Album Art/"+details[index].song+'.jpg';
    document.getElementById("song").innerText=details[index].song;
    document.getElementById("label").innerText=details[index].label;
    document.getElementById("artist").innerText=details[index].artist;
    progressEl.value = 0;
    audio.play();
    document.getElementById("pause").innerHTML=`<i class="fa-solid fa-play fa-2xl"></i>`;
    check=true;
    num=Math.floor(Math.random()*14);
    document.getElementById("back").style="background-image:url(Backgrounds/"+num+".gif);";
});

document.getElementById("pause").addEventListener("click", ()=>{
    if(check==false){
        check=true;
        audio.play();
        document.getElementById("pause").innerHTML=`<i class="fa-solid fa-play fa-2xl"></i>`;
        num=Math.floor(Math.random()*14);
        document.getElementById("back").style="background-image:url(Backgrounds/"+num+".gif);";
    }
    else{
        check=false;
        audio.pause();
        document.getElementById("pause").innerHTML=`<i class="fa-solid fa-pause fa-2xl"></i>`;
        document.getElementById("back").style="background-image:url(Landscape.jpg);";
    }
});

