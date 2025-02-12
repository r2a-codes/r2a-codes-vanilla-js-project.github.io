const img = document.querySelector('#current')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

let index = 0 ;


const imgs =  [ 
"https://img.freepik.com/free-photo/medium-shot-robots-hugging-fantasy-world_23-2150900533.jpg?t=st=1739368715~exp=1739372315~hmac=0ac21f324cb762c7d6b8440b71dbec541ef2d76947571c9fa38d4d624f59e0dc&w=826",

"https://img.freepik.com/free-photo/view-futuristic-music-robot-droid_23-2151072903.jpg?t=st=1739368809~exp=1739372409~hmac=50404890edf5c35b084af9cf9ee1e0dfba36e8939f1aaad458915360978e6665&w=996",

"https://img.freepik.com/premium-vector/hand-drawn-robot-character-illustration_23-2151720820.jpg?w=826",

"https://img.freepik.com/premium-psd/avatar-portrait-wearing-tshirt-hoodie-mockup_23-2151766856.jpg?w=740",

"https://img.freepik.com/free-photo/futuristic-cat-concept_23-2150969625.jpg?t=st=1739369263~exp=1739372863~hmac=d58a24eff83a30860502c9101f42daf7c5e1db2a1095ed586b206d458f101e0c&w=996",

"https://img.freepik.com/free-photo/ferocious-tiger-jungle_23-2150844497.jpg?t=st=1739369925~exp=1739373525~hmac=67c65f84fe5b6918b9a9aa7ffb1aaf34159e9d632b5ae8eb0bb87b180d49d3a4&w=740",

"https://img.freepik.com/free-photo/medium-shot-woman-hugging-cat_23-2151111317.jpg?t=st=1739369558~exp=1739373158~hmac=7f9ca74e6182ab3dbb45e292a4eef985c1e5b5a084f7c3b8f9ac0ca4ca2fb3a5&w=996",

"https://img.freepik.com/free-photo/side-view-futuristic-dogs-beach_23-2151111322.jpg?t=st=1739369268~exp=1739372868~hmac=3d1d4edebdf5af9fd1970cfa5201ea45bff0cff8b1bcd552b515d2ba778288e9&w=996",

"https://img.freepik.com/free-photo/3d-rendering-robotic-dog_23-2150780824.jpg?t=st=1739369670~exp=1739373270~hmac=48ff47526c2ec9b56fd1a39ef660f78ff7949a81b0558a984e1a0eeabee3b4ec&w=740",

"https://img.freepik.com/free-photo/futuristic-football-game-player_23-2151152969.jpg?t=st=1739369734~exp=1739373334~hmac=89124d2afa3ae6058f5c8d84306e1d8c8bbcc35df2762a6c00ef8c5618ee3b0e&w=740",

"https://img.freepik.com/premium-vector/mexican-wrestler-illustration-design_23-2149612444.jpg?w=826",

"https://img.freepik.com/free-photo/shoot-fantastic-alien_23-2151648306.jpg?t=st=1739369782~exp=1739373382~hmac=9cd8662d933c6f713f08eff77514d067f2bfcc24151af60bc138b332548a9358&w=740",
"https://img.freepik.com/free-photo/view-half-rhino-with-futuristic-robotic-parts_23-2151742136.jpg?t=st=1739369971~exp=1739373571~hmac=ce5a2bd0301bbc656735e19ec9e67fe7f52bee7876516ea2e55362834ca99dbe&w=996",
"https://img.freepik.com/free-photo/half-fox-half-robot-fantasy-style_23-2151601053.jpg?t=st=1739370015~exp=1739373615~hmac=2b2677aaa50cba77b1b9f691e357ea5353f237b8c1bf9158f921925ea15db6f6&w=740",
"https://img.freepik.com/free-photo/futuristic-robot-hummingbird_23-2151443854.jpg?t=st=1739370038~exp=1739373638~hmac=40434e23006f51e23e05cf73332f631171c92425f712b67d884dc3f90b9b9113&w=996",
"https://img.freepik.com/free-photo/half-horse-half-robot-animal-with-futuristic-tech-parts_23-2151626119.jpg?t=st=1739370067~exp=1739373667~hmac=cfe16a6cb378185837e66983970493daf293ff6d37d2a546d996bedd444badde&w=996",
"https://img.freepik.com/premium-photo/3d-cute-animated-bird_889227-52016.jpg?w=826"

];


img.setAttribute("src",imgs[0])



next.addEventListener('click', () => {
     if(index ===imgs.length - 1){
        index = -1
    }
    img.setAttribute("src",imgs[index + 1])
    index++;
})

prev.addEventListener('click', () => {
    if(index === 0){
        index = imgs.length 
    }
    img.setAttribute("src",imgs[index - 1])
    index--;
    
})