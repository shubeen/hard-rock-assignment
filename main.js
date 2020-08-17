function searchSong(){
    const songSearch = document.getElementById('song-search').value;
    fetch(`https://api.lyrics.ovh/suggest/${songSearch}`)
    .then(res => res.json())
    .then(data =>{      
        // console.log(data);
        
            const arrays = data.data;
            for (let i=0; i< 10 ; i++){
                const detail = arrays[i];
        
                const songTitle = detail.title;
                const songArtist = detail.artist.name;
                const songAlbum = detail.album.title;
                
            
        
            document.getElementById('show-result').innerHTML +=
            `<div class="single-result row align-items-center my-3 p-3">
            <div class="col-md-9">
                <h3 class="lyrics-name">${songTitle}</h3>
                <h5 class="album-title">Album title: <span>${songAlbum}</span></h5>
                <p class="author lead">Album by <span class="artist-name">${songArtist}</span></p>
                

            </div>
            <div class="col-md-3 text-md-right text-center">
                <button get-lyrics class="btn btn-success " >Get Lyrics</button>
            </div>
        </div>`
            }

            // document.getElementById('song-search').value.style.display= 'block';
       
    })
    // .catch(err => alert('song not found, please try with different name'));
}
// function getLyrics(id) {
//     document.getElementById(id).style.display = "block";
// }
const artistName = document.querySelectorAll(".artist-name");
const btnGetLyrics = document.querySelectorAll(`[get-lyrics]`);

for (let i = 0; i < btnGetLyrics.length; i++) {
    btnGetLyrics[i].addEventListener("click", function () {
      console.log(artistName[i], );
  
      fetch(`https://api.lyrics.ovh/v1/${artistName[i].innerText}`)
        .then(res => res.json())
        .then((data) => {
          console.log(data);
        })
    })
}
