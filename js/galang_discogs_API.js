const token = ''; // Generate at ://discogs.com
const url = 'https://api.discogs.com/releases/249504';

fetch(url, {
    headers: {
        'User-Agent': 'MyDiscogsApp/1.0',
        'Authorization': `Discogs token=${token}`
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));





