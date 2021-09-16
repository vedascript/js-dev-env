import "whatwg-fetch";

export function getUsers() {
  return get("users");
}

function get(url) {
  return fetch(url)
    .then((res) => res.json())
    .catch((e) => console.log(e));
}
