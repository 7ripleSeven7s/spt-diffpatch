import { request, gql } from 'graphql-request'

const tarkovChangesAPI = {
  "tarkov-changes.com": "dc9e65e1795616cc6034",
};

/*  Browser JS Example
  fetch('https://api.tarkov.dev/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: `{
    items(name: "m855a1") {
        id
        name
        shortName
    }
}`})
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
*/

// ------------------------------------------------------

/* Node.js Example
import { request, gql } from 'graphql-request'

const query = gql`
{
    items(name: "m855a1") {
        id
        name
        shortName
    }
}
`

request('https://api.tarkov.dev/graphql', query).then((data) => console.log(data))
*/

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
    });
  return out;
}

// parse object?
function buildMarkup(str) {
  let mkup = "";

  return mkup;
}

function fetchJsonArray(resource) {
  fetch(resource)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP fetchJsonArray error, status = ${response.status}`);
      }
    })
    .then(function (obj) {
      let out = "";
      for (let prop in obj) {
        // <td><img src='${item.icon}'></td>
        out += `
      <tr>
        <td>${key.value3}</td>
        <td>${key.value4}</td>
        <td>${item.value5}</td>
        <td>${item.value6}</td>
      </tr>`;
      }
    });
  return out;
}

export default { fetchJson, fetchJsonArray, tarkovChangesAPI };
