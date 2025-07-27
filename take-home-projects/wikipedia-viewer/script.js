document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-tag");
  const resultList = document.getElementById("result");
  const spinner = document.getElementById("spinner");

  searchButton.addEventListener("click", function () {
    const query = searchInput.value.trim();
    if (!query) return;

    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${query}&format=json&origin=*`;

    // Clear previous results and show spinner
    resultList.innerHTML = "";
    spinner.style.display = "block";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const [_, titles, descriptions, links] = data;
        resultList.innerHTML = "";

        if (titles.length === 0) {
          resultList.innerHTML = "<li class='fade-in'><h4>No results found</h4></li>";
        } else {
          for (let i = 0; i < titles.length; i++) {
            const li = document.createElement("li");
            li.classList.add("fade-in");
            li.innerHTML = `
              <a href="${links[i]}" target="_blank">
                <h4>${titles[i]}</h4>
              </a>
              <p>${descriptions[i]}</p>
            `;
            resultList.appendChild(li);
          }
        }
      })
      .catch(err => {
        alert("Error fetching data.");
        console.error(err);
      })
      .finally(() => {
        spinner.style.display = "none";
        searchInput.value = "";
      });
  });
});