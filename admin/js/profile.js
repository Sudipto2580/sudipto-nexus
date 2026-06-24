let skills = [];

let roles = [];

let profileImagePath = "";

let resumePath = "";

/* PROFILE IMAGE */

const imageUpload =
document.getElementById(
"imageUpload"
);

if(imageUpload){

imageUpload.addEventListener(
"change",
function(e){

const file =
e.target.files[0];

if(!file) return;

profileImagePath =
"assets/images/profile/" +
file.name;

document.getElementById(
"imagePreview"
).src =
URL.createObjectURL(file);

});

}

/* RESUME */

const resumeUpload =
document.getElementById(
"resumeUpload"
);

if(resumeUpload){

resumeUpload.addEventListener(
"change",
function(e){

const file =
e.target.files[0];

if(!file) return;

resumePath =
"assets/pdf/resume/" +
file.name;

document.getElementById(
"resumePreview"
).src =
URL.createObjectURL(file);

});

}

/* SKILLS */

function addSkill(){

const skill =
document.getElementById(
"skillInput"
).value;

if(!skill) return;

skills.push(skill);

renderSkills();

document.getElementById(
"skillInput"
).value = "";

}

function renderSkills(){

document.getElementById(
"skillsList"
).innerHTML =
skills.map(
skill =>
`<li>${skill}</li>`
).join("");

}

/* ROLES */

function addRole(){

const role =
document.getElementById(
"roleInput"
).value;

if(!role) return;

roles.push(role);

renderRoles();

document.getElementById(
"roleInput"
).value = "";

}

function renderRoles(){

document.getElementById(
"rolesList"
).innerHTML =
roles.map(
role =>
`<li>${role}</li>`
).join("");

}

/* GENERATE */

function generateProfileJSON(){

const profile = {

name:
document.getElementById(
"fullName"
).value,

headline:
document.getElementById(
"headline"
).value,

cgpa:
parseFloat(
document.getElementById(
"cgpa"
).value
),

semester:
parseInt(
document.getElementById(
"semester"
).value
),

branch:
document.getElementById(
"branch"
).value,

college:
document.getElementById(
"college"
).value,

batch:
document.getElementById(
"batch"
).value,

email:
document.getElementById(
"email"
).value,

phone:
document.getElementById(
"phone"
).value,

github:
document.getElementById(
"github"
).value,

linkedin:
document.getElementById(
"linkedin"
).value,

description:
document.getElementById(
"description"
).value,

profileImage:
profileImagePath,

resume:
resumePath,

skills:
skills,

roles:
roles

};

const jsonText =
JSON.stringify(
profile,
null,
4
);

document.getElementById(
"output"
).value =
jsonText;

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
"profile.json";

link.click();

}