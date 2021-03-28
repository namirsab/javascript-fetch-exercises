// Use fetch here
const main = document.querySelector("main");

const endpoint =
  "https://randomuser.me/api/?inc=gender,name,picture&results=10";

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.results.forEach((person) => {
      main.append(createPersonElement(person));
    });
  });

function createPersonElement(person) {
  // Your code to create the person element here
  const personSection = document.createElement("section");
  personSection.classList.add("person");

  const h2Name = document.createElement("h2");
  const personName = `${person.name.title} ${person.name.first} ${person.name.last}`;
  h2Name.textContent = personName;

  const img = document.createElement("img");

  img.src = person.picture.large;
  img.alt = personName;

  personSection.append(h2Name);
  personSection.append(img);

  return personSection;
}
