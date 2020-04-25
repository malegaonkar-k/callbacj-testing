fetch('http://www.omdbapi.com/?i=tt3896198&apikey=16c7e7cd')
.then(response => response.json())
.then(data => console.log(data));

