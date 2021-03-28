const url = "https://jsonplacehos/x";

fetch(url)
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`HTTP Status: ${res.status}`);
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error.toString()));
