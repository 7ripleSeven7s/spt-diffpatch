const tarkovChangesAPI = {
  "tarkov-changes.com": "dc9e65e1795616cc6034",
};

// Display json logic
const req = "fileName.json";
fetch(req)
  .then(function (response) {
    return response.json();
  })
  .then(function (items) {
    let placeholder = document.querySelector("#json-data"); //  json-data | spt-data
    let out = "";
    for (let item of items) {
      out += `
      <tr>
        <td><img src='${item.icon}'></td>
        <td>${item.value2}</td>
        <td>${item.value3}</td>
        <td>${item.value4}</td>
        <td>${item.value5}</td>
        <td>${item.value6}</td>
      </tr>`;
    }
  });
