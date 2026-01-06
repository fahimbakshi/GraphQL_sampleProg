const GRAPHQL_URL = "http://localhost:4000/graphql";

// helper function
async function graphqlRequest(query) {
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  });
  return res.json();
}

// CREATE USER
async function createUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const query = `
    mutation {
      createUser(name: "${name}", email: "${email}") {
        id
        name
      }
    }
  `;

  const data = await graphqlRequest(query);
  document.getElementById("output").textContent =
    JSON.stringify(data, null, 2);
}

// CREATE POST
async function createPost() {
  const title = document.getElementById("title").value;
  const userId = document.getElementById("userId").value;

  const query = `
    mutation {
      createPost(title: "${title}", userId: ${userId}) {
        id
        title
      }
    }
  `;

  const data = await graphqlRequest(query);
  document.getElementById("output").textContent =
    JSON.stringify(data, null, 2);
}

// FETCH USERS
async function fetchUsers() {
  const query = `
    query {
      users {
        id
        name
        email
        posts {
          title
        }
      }
    }
  `;

  const data = await graphqlRequest(query);
  document.getElementById("output").textContent =
    JSON.stringify(data, null, 2);
}
