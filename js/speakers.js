const speakersection = document.getElementById('speakers')
const speakerinfo = [{
        picture: 'imgs/chad.jpg',
        name: 'Tizio Chad Dice Cose',
        subtitle: 'Professor of Entrepreneurial Legal Studies at Harvard Law School',
        description: 'Chad studies the ectics and legalities related to the development of the CGI Project.',
    },
    {
        picture: 'imgs/tyler.jpg',
        name: 'Tyler Steinkamp',
        subtitle: 'Soft Skills Managing Director at CGI Project',
        description: 'With his empathy and communication skills he turned teamwork to another level, the increased productivity and decision-making capacity provided the possibility of this Project to go on.',
    },
    {
        picture: 'imgs/zyzz.png',
        name: 'Aziz "Zyzz" Shavershian',
        subtitle: 'Executive director of the CGI Project',
        description: 'After he published his last book "Cat girls, a dream?" he was contacted by CGI CEO and became one of the most important faces of the Project.',
    },
    {
        picture: 'imgs/milos.jpg',
        name: 'Ricardo Milos',
        subtitle: 'Development and Research Director at Harvard Medical School',
        description: 'The face that leads CGI Project, with his brilliant mind and eloquency he keeps his team together even when the odds seems against him.',
    },
    {
        picture: 'imgs/billy.jpg',
        name: 'Billy "Aniki" Herrington',
        subtitle: 'Head Marketing Director on CGI',
        description: 'A extremely important face for CGI sustainability, he alone was able to get the support needed to the fundation of the Program',
    },
    {
        picture: 'imgs/vandarkholme.jpg',
        name: 'Van Darkholme',
        subtitle: 'Dungeon Master at CGI',
        description: 'Thanks to his experience as a dungeon master, all of our subjects are well trained to follow up even the slightest tasks.',
    }
]
speakersection.id = 'speakers';
speakersection.innerHTML =
    `<div class="speakers">
<h4>Featured Speakers</h4>
<hr class="orangehr">
<ul class="speakersul">
    <li class="speakercard">
        <img src="${speakerinfo[0].picture}">
        <div class="descrip">
            <h5>${speakerinfo[0].name}</h5>
            <p class="subtitle">${speakerinfo[0].subtitle}</p>
            <hr class="grayhr">
            <p class="speakerdescrip">${speakerinfo[0].description}</p>
        </div>
    </li> <li class="speakercard">
    <img src="${speakerinfo[1].picture}">
    <div class="descrip">
        <h5>${speakerinfo[1].name}</h5>
        <p class="subtitle">${speakerinfo[1].subtitle}</p>
        <hr class="grayhr">
        <p class="speakerdescrip">${speakerinfo[1].description}</p>
    </div>
</li>
    <div class="morebutton ">MORE<i class="material-icons">arrow_drop_down</i></div>
</ul>
<ul class="speakersul mobilecollapse">
<li class="speakercard">
<img src="${speakerinfo[2].picture}">
<div class="descrip">
    <h5>${speakerinfo[2].name}</h5>
    <p class="subtitle">${speakerinfo[2].subtitle}</p>
    <hr class="grayhr">
    <p class="speakerdescrip">${speakerinfo[2].description}</p>
</div>
</li> <li class="speakercard">
<img src="${speakerinfo[3].picture}">
<div class="descrip">
    <h5>${speakerinfo[3].name}</h5>
    <p class="subtitle">${speakerinfo[3].subtitle}</p>
    <hr class="grayhr">
    <p class="speakerdescrip">${speakerinfo[3].description}</p>
</div>
</li> <li class="speakercard">
<img src="${speakerinfo[4].picture}">
<div class="descrip">
    <h5>${speakerinfo[4].name}</h5>
    <p class="subtitle">${speakerinfo[4].subtitle}</p>
    <hr class="grayhr">
    <p class="speakerdescrip">${speakerinfo[4].description}</p>
</div>
</li> <li class="speakercard">
<img src="${speakerinfo[5].picture}">
<div class="descrip">
    <h5>${speakerinfo[5].name}</h5>
    <p class="subtitle">${speakerinfo[5].subtitle}</p>
    <hr class="grayhr">
    <p class="speakerdescrip">${speakerinfo[5].description}</p>
</div>
</li>
</ul>
</div>`;