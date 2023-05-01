const provS = document.querySelector("#provSamp");

for (let i = 0; i < province.length; i++) {
  const op = document.createElement("option");
  op.setAttribute("value", province[i].name);
  op.textContent = province[i].name;
  provS.appendChild(op);
}

const cityS = document.querySelector("#cityIn");
cityS.disabled = true;

provS.addEventListener("change", (e) => {
  const selectedProv = e.target.value;
  const filteredCity = city.filter(
    (city) =>
      city.province_id ===
      province.find((prov) => prov.name === selectedProv).province_id
  );

  cityS.innerHTML = "";

  for (let i = 0; i < filteredCity.length; i++) {
    const op = document.createElement("option");
    op.setAttribute("value", filteredCity[i].name);
    op.textContent = filteredCity[i].name;
    cityS.appendChild(op);
  }
  // enable second select tag
  cityS.disabled = false;
});

const brgyS = document.querySelector("#brgySamp");
brgyS.disabled = true;

cityS.addEventListener("change", (e) => {
  const selectedCity = e.target.value;
  const filteredBrgys = barangay.filter(
    (brgy) =>
      brgy.municipality_id ===
      city.find((city) => city.name === selectedCity).municipality_id
  );
  // clear existing options
  brgyS.innerHTML = "";
  // add new options
  for (let i = 0; i < filteredBrgys.length; i++) {
    const op = document.createElement("option");
    op.setAttribute("value", filteredBrgys[i].name);
    op.textContent = filteredBrgys[i].name;
    brgyS.appendChild(op);
  }
  // enable second select tag
  brgyS.disabled = false;
});
