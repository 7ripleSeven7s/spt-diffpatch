const tarkovChangesAPI = {
  "tarkov-changes.com": "dc9e65e1795616cc6034",
};

/**
 * @param {string} resource - A string representing a network resource
 * 
 * @return returns an object with unknown properties.
 */
function fetchJson(resource) {
  //const req = "fileName.json";
  fetch(resource)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP fetch error, status = ${response.status}`);
      }
      return response.json();
      //return response.blob();
    })
    .then(function (obj) {
      let placeholder = document.querySelector("#spt-data"); //  json-data | spt-data
      let out = "";
      for (let prop in obj) {
        // <td><img src='${item.icon}'></td>
        out += `
      <tr>
        <td>${prop}</td>
        <td>${obj[prop]}</td>
      </tr>`;
      }
    })
    return out;
}

// parse object?
function buildMarkup(str) {
  let mkup = "";

  return mkup;
}

function fetchJsonArray(resource) {
  fetch(resource) 
    .then(function(response) {
      if (!response.ok) {
        throw new Error(`HTTP fetchJsonArray error, status = ${response.status}`);
      }
    })
    .then(function(obj) {
      let out = "";
      for (let prop in obj) {
        // <td><img src='${item.icon}'></td>
        out += `
      <tr>
        <td>${}</td>
        <td>${key.value3}</td>
        <td>${key.value4}</td>
        <td>${item.value5}</td>
        <td>${item.value6}</td>
      </tr>`;
      }
    })
  return out;
}

export default {fetchJson, fetchJsonArray, tarkovChangesAPI};