# Exercise 3: Catching Checking Response

Using the `fetch` function, make a request to the wrong endpoint `https://.typicode.com/todos/x`.

Use the `catch` method to get the error and log it to the console.

## Tips

```js
// the parameter given to the callback function
// inside the "then" method is the response.
// Check the resources to see what data contains
fetch(url).then((response) => {
  console.log(response); //<- This logs the response
});
```
