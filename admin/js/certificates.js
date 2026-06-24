let certificates = [];

let certificateImagePath = "";
let certificatePdfPath = "";

/* IMAGE PREVIEW */

const certificateImage =
document.getElementById(
"certificateImage"
);

if(certificateImage){

certificateImage.addEventListener(
"change",
function(e){

const file =
e.target.files[0];

if(!file) return;

certificateImagePath =
"assets/images/certificates/" +
file.name;

const preview =
document.getElementById(
"certificatePreview"
);

preview.src =
URL.createObjectURL(file);

preview.style.display =
"block";

});

}

/* PDF PREVIEW */

const certificatePDF =
document.getElementById(
"certificatePDF"
);

if(certificatePDF){

certificatePDF.addEventListener(
"change",
function(e){

const file =
e.target.files[0];

if(!file) return;

certificatePdfPath =
"assets/pdf/certificates/" +
file.name;

const pdfPreview =
document.getElementById(
"certificatePdfPreview"
);

pdfPreview.src =
URL.createObjectURL(file);

});

}

/* ADD CERTIFICATE */

function addCertificate(){

const certificate = {

title:
document.getElementById(
"title"
).value,

issuer:
document.getElementById(
"issuer"
).value,

date:
document.getElementById(
"date"
).value,

credential:
document.getElementById(
"credential"
).value,

link:
document.getElementById(
"link"
).value,

image:
certificateImagePath,

pdf:
certificatePdfPath

};

certificates.push(
certificate
);

renderCertificates();

clearForm();

}

/* PREVIEW TABLE */

function renderCertificates(){

const tbody =
document.querySelector(
"#certificateTable tbody"
);

tbody.innerHTML = "";

certificates.forEach(cert=>{

tbody.innerHTML += `

<tr>

<td>${cert.title}</td>

<td>${cert.issuer}</td>

<td>${cert.date}</td>

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
"issuer"
).value = "";

document.getElementById(
"date"
).value = "";

document.getElementById(
"credential"
).value = "";

document.getElementById(
"link"
).value = "";

}

/* GENERATE JSON */

function generateCertificates(){

const jsonText =
JSON.stringify(
certificates,
null,
4
);

document.getElementById(
"certificateOutput"
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
"certificates.json";

link.click();

}