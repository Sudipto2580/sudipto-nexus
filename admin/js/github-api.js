async function updateGitHubFile(
path,
content,
message
){

const url =
`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`;

let sha = null;

const existing =
await fetch(url,{
headers:{
Authorization:
`Bearer ${GITHUB_TOKEN}`
}
});

if(existing.ok){

const data =
await existing.json();

sha =
data.sha;

}

await fetch(url,{

method:"PUT",

headers:{
Authorization:
`Bearer ${GITHUB_TOKEN}`,
"Content-Type":
"application/json"
},

body:
JSON.stringify({

message,

content:
btoa(
unescape(
encodeURIComponent(
content
)
)
),

branch:
GITHUB_BRANCH,

sha

})

});

}