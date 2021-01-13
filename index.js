// This function loads pokemon data from the Pokemon API
function fetchSimpsonsJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios
    .get(url)
    .then(function (response) {
      return response.data; // response.data instead of response.json() with fetch
    })
    .then(function (simp) {
      console.log("data decoded from JSON:", simp[0]);

      // Build a block of HTML
      const simpHtml = `
          <p><strong>${simp[0].quote}</strong></p>
          <img src="${simp[0].image}" />
        `;
      document.querySelector("#simp").innerHTML = simpHtml;
    });
}

fetchSimpsonsJSON();
