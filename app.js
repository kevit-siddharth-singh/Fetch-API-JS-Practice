//![Not Working For Images] const apiUrl = "https://dummyapi.online/api/movies";
const apiUrl =
  "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies";

let count = 0;

async function findMovie() {
  try {
    const movieName = document.getElementById("movie-input").value;
    const loadData = await fetch(`${apiUrl}`);
    const setName = document.getElementById("mv-name");
    const setImage = document.getElementById("img-section");
    const loadJson = await loadData.json();
    // console.log(loadJson);
    loadJson.forEach((element) => {
      if (element.Title === movieName) {
        count++;
        console.log(element.Title);
        const data = document.createElement("p");
        data.innerHTML = `${count}.${element.Title}`;
        const img = document.createElement("img");
        img.src = `${element.Poster}`;
        setName.append(data);
        setImage.append(img);
      }
      else{
        

      }
    });
  } catch (error) {
    console.log(error);
  }
}
