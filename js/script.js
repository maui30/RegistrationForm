const brgy = document.querySelector("#brgy");
const suggestions1 = document.querySelector(".suggestions1 ul");

const cityIn = document.querySelector("#city");
const suggestions2 = document.querySelector(".suggestions2 ul");

const provinceIn = document.querySelector("#province");
const suggestions3 = document.querySelector(".suggestions3 ul");

let inputUser;
let input;
let suggestions;

function search(str) {
  let results = [];
  const val = str.toLowerCase();

  for (i = 0; i < inputUser.length; i++) {
    if (inputUser[i].name.toLowerCase().indexOf(val) > -1) {
      results.push(inputUser[i].name);
    }
  }

  return results;
}

function searchHandler(e) {
  const inputVal = e.currentTarget.value;
  let results = [];
  if (inputVal.length > 0) {
    results = search(inputVal);
  }
  showSuggestions(results, inputVal);
}

function useSuggestion(e) {
  input.value = e.target.innerText;
  input.focus();
}

brgy.addEventListener("focus", (e) => {
  inputUser = barangay;
  input = brgy;
  suggestions = suggestions1;
});

brgy.addEventListener("input", searchHandler);

suggestions1.addEventListener("click", useSuggestion);

cityIn.addEventListener("focus", (e) => {
  inputUser = city;
  input = cityIn;
  suggestions = suggestions2;
});

cityIn.addEventListener("input", searchHandler);

suggestions2.addEventListener("click", useSuggestion);

provinceIn.addEventListener("focus", (e) => {
  inputUser = province;
  input = provinceIn;
  suggestions = suggestions3;
});

provinceIn.addEventListener("input", searchHandler);

suggestions3.addEventListener("click", useSuggestion);

function showSuggestions(results, inputVal) {
  maxIn = 10;
  suggestions.innerHTML = "";

  if (results.length > 0) {
    for (i = 0; i < results.length && i < maxIn; i++) {
      let item = results[i];
      // Highlights only the first match
      const match = item.match(new RegExp(inputVal, "i"));
      item = item.replace(match[0], `<strong>${match[0]}</strong>`);
      suggestions.innerHTML += `<li>${item}</li>`;
    }
    suggestions.classList.add("has-suggestions");
  } else {
    results = [];
    suggestions.innerHTML = "";
    suggestions.classList.remove("has-suggestions");
  }
}

// Add event listener to window object to remove suggestions when user clicks outside of input fields
window.addEventListener("click", (e) => {
  if (!e.target.closest(".suggestions")) {
    suggestions1.innerHTML = "";
    suggestions1.classList.remove("has-suggestions");
    suggestions2.innerHTML = "";
    suggestions2.classList.remove("has-suggestions");
    suggestions3.innerHTML = "";
    suggestions3.classList.remove("has-suggestions");
  }
});
