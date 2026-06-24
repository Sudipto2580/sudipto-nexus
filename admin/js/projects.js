let projects = [];

let projectImagePath = "";

/* IMAGE PREVIEW */

const imageInput =
document.getElementById(
"projectImage"
);

if(imageInput){

imageInput.addEventListener(
"change",
function(e){

const file =
e.target.files[0];

if(!file) return;

projectImagePath =
"assets/images/projects/" +
file.name;

document.getElementById(
"projectPreview"
).src =
URL.createObjectURL(file);

document.getElementById(
"projectPreview"
).style.display =
"block";

});

}

/* ADD PROJECT */

function addProject(){

const project = {

title:
document.getElementById(
"title"
).value,

description:
document.getElementById(
"description"
).value,

category:
document.getElementById(
"category"
).value,

github:
document.getElementById(
"github"
).value,

demo:
document.getElementById(
"demo"
).value,

image:
projectImagePath,

status:
document.getElementById(
"status"
).value

};

projects.push(
project
);

renderProjects();

clearForm();

}

/* PREVIEW TABLE */

function renderProjects(){

const tbody =
document.querySelector(
"#projectTable tbody"
);

tbody.innerHTML = "";

projects.forEach(project=>{

tbody.innerHTML += `

<tr>

<td>${project.title}</td>

<td>${project.status}</td>

<td>${project.category}</td>

</tr>

`;

});

}

/* CLEAR FORM */

function clearForm(){

document.getElementById(
"title"
).value = "";

document.getElementById(
"description"
).value = "";

document.getElementById(
"category"
).value = "";

document.getElementById(
"github"
).value = "";

document.getElementById(
"demo"
).value = "";

}

/* GENERATE JSON */

function generateProjects(){

const jsonText =
JSON.stringify(
projects,
null,
4
);

document.getElementById(
"projectOutput"
).value =
jsonText;

/* DOWNLOAD */

const blob =
new Blob(
[jsonText],
{
type:
"application/json"
}
);

const link =
document.createElement(
"a"
);

link.href =
URL.createObjectURL(
blob
);

link.download =
"projects.json";

link.click();

}