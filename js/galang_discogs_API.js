const secret_token = document.getElementById("secret_token");

const artist_load_text = document.getElementById("artist_load_text");
const album_load_text = document.getElementById("album_load_text");
const anio_load_text = document.getElementById("anio_load_text");
const tracklist_load = document.getElementById("tracklist_load");
const imgAlbum = document.getElementById("imgAlbum");
const notes_load = document.getElementById("notes_load");
const label_load_text = document.getElementById("label_load_text");
const country_load_text = document.getElementById("country_load_text");
const genres_load_text = document.getElementById("genres_load_text");
const styles_load_text = document.getElementById("styles_load_text");
const format_text = document.getElementById("format_text");

const recorded_load = document.getElementById("recorded_load");
const mixed_load = document.getElementById("mixed_load");
const cuted_load = document.getElementById("cuted_load");

const credits_load = document.getElementById("credits_load");


const token = ''; // Generate at ://discogs.com
const url = 'https://api.discogs.com/releases/509137';
//[m182514]
fetch(url, {
    headers: {
        'User-Agent': 'MyDiscogsApp/1.0',
        'Authorization': `Discogs token=${token}`
    }
})
    .then(response => response.json())
    .then(data => printsData(data))
    .catch(error => console.error('Error:', error));

function printsData(data) {
    console.log(data)
    imgAlbum.src = data.images[0].uri;

    artist_load_text.innerHTML = data.artists[0].name;
    album_load_text.innerHTML = data.title;

    for (i = 0; i < data.labels.length; i++) {
        label_load_text.append(`${data.labels[i].name} ${data.labels[i].catno} `);
        //label_load_text.append(document.createElement('br'));
        label_load_text.append(", ");
    };

    for (i = 0; i < data.formats.length; i++) {
        format_text.append(`${data.formats[i].name}`);
        format_text.append(", ");
    };
    country_load_text.innerHTML = "Country: " + data.country;
    anio_load_text.innerHTML = "Published: " + data.year;

    for (i = 0; i < data.genres.length; i++) {
        genres_load_text.append(`${data.genres[i]}`);
        genres_load_text.append(", ");
    };

    for (i = 0; i < data.styles.length; i++) {
        styles_load_text.append(`${data.styles[i]}`);
        styles_load_text.append(", ");
    };

    for (i = 0; i < data.tracklist.length; i++) {
        tracklist_load.append(`${data.tracklist[i].position} ${data.tracklist[i].title} ${data.tracklist[i].duration}`);
        tracklist_load.append(document.createElement('br'));
    };

    for (i = 0; i < data.companies.length; i++) {
        if (data.companies[i].entity_type_name === "Recorded At") {
            recorded_load.append(`${data.companies[i].name}`);
            recorded_load.append(document.createElement('br'));
        }
    };

    for (i = 0; i < data.companies.length; i++) {
        if (data.companies[i].entity_type_name === "Mixed At") {
            mixed_load.append(`${data.companies[i].name}`);
            mixed_load.append(document.createElement('br'));
        }
    };

    for (i = 0; i < data.companies.length; i++) {
        if (data.companies[i].entity_type_name === "Lacquer Cut At") {
            cuted_load.append(`${data.companies[i].name}`);
            cuted_load.append(document.createElement('br'));
        }
    };

    for (i = 0; i < data.extraartists.length; i++) {
        credits_load.append(`${data.extraartists[i].role} ${' - '} ${data.extraartists[i].name}`);
        credits_load.append(document.createElement('br'));
    };

    notes_load.innerHTML = data.notes;

}//CLOSES PrintsData



/*
const request = require('request');
const options = {
url: 'https://api.discogs.com/oauth/identity',
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
'Authorization': 'OAuth oauth_consumer_key="OAUTH_CONSUMER_KEY",
oauth_nonce="' + Date.now() + '",oauth_token="OAUTH_TOKEN_RECEIVED_FROM_STEP_4",
oauth_signature="YOUR_CONSUMER_SECRET&OAUTH_TOKEN_SECRET_RECEIVED_FROM_STEP_4", 
oauth_signature_method="PLAINTEXT",  oauth_timestamp="' + Date.now() +'" ', 
'User-Agent': 'YOUR_USER_AGENT/1.0'
} 
};

request(options, (err, res, body)=>{
    if(!err && res.statusCode == 200){
    console.log(JSON.parse(body));
    }
});
*/



// Tus credenciales de Discogs
const TOKEN = 'TU_PERSONAL_ACCESS_TOKEN';
const URL = 'https://api.discogs.com';

async function buscarEnDiscogs(query) {
    try {
        const response = await fetch(`${URL}/database/search?q=${encodeURIComponent(query)}`, {
            method: 'GET',
            headers: {
                // La autenticación se pasa en la cabecera Authorization
                'Authorization': `Discogs token=${TOKEN}`,
                'Content-Type': 'application/json',
                // Discogs requiere un User-Agent personalizado
                'User-Agent': 'MiAplicacionMusical/1.0'
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error al consultar Discogs:', error);
    }
}

// Uso de la función
//buscarEnDiscogs('Nirvana Nevermind');

function releaseSearch(value){
let nombre = 'https://api.discogs.com/releases/';
let edad = value;
let url = `${nombre}${edad}`;




console.log(value);
fetch(url, {
    headers: {
        'User-Agent': 'MyDiscogsApp/1.0',
        'Authorization': `Discogs token=${token}`
    }
})
    .then(response => response.json())
    .then(data => printsData(data))
    .catch(error => console.error('Error:', error));
}
