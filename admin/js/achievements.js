let achievements = [];

let achievementImagePath = "";
let achievementPdfPath = "";

/* IMAGE PREVIEW */

const achievementImage =
document.getElementById(
"achievementImage"
);

if (achievementImage) {

achievementImage.addEventListener(
"change",
function(e){

const file =
e.target.files[0];

if(!file) return;

achievementImagePath =
"assets/images/achievements/" +
file.name;

const preview =
document.getElementById(
"achievementPreview"
);

preview.src =
URL.createObjectURL(file);

preview.style.display =
"block";

});

}

/* PDF PREVIEW */

const achievementPDF =
document.getElementById(
"achievementPDF"
);

if (achievementPDF) {

achievementPDF.addEventListener(
"change",
function(e){

const file =
e.target.files[0];

if(!file) return;

achievementPdfPath =
"assets/pdf/achievements/" +
file.name;

const pdfPreview =
document.getElementById(
"achievementPdfPreview"
);

pdfPreview.src =
URL.createObjectURL(file);

});

}

/* ADD ACHIEVEMENT */

function addAchievement(){

const achievement = {

title:
document.getElementById(
"title"
).value,

description:
document.getElementById(
"description"
).value,

date:
document.getElementById(
"date"
).value,

organization:
document.getElementById(
"organization"
).value,

proof:
achievementPdfPath,

image:
achievementImagePath

};

achievements.push(
achievement
);

renderAchievements();

clearForm();

}

/* PREVIEW TABLE */

function renderAchievements(){

const tbody =
document.querySelector(
"#achievementTable tbody"
);

tbody.innerHTML = "";

achievements.forEach(item=>{

tbody.innerHTML += `

<tr>

<td>${item.title}</td>

<td>${item.organization}</td>

<td>${item.date}</td>

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
"date"
).value = "";

document.getElementById(
"organization"
).value = "";

}

/* GENERATE JSON */

function generateAchievements(){

const jsonText =
JSON.stringify(
achievements,
null,
4
);

document.getElementById(
"achievementOutput"
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
"achievements.json";

link.click();

}