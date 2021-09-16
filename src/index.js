import "./index.css";
import { getUsers } from "./api/userApi";

getUsers().then((res) => {
  let userBody = "";
  res.forEach((user) => {
    userBody += `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
      </tr>`;
  });
  global.document.getElementById("users").innerHTML = userBody;
  console.log("body", userBody);
});
