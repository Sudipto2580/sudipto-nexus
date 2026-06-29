let academicData;

async function loadAcademics(){

const response =
await fetch(
"../data/academics.json"
);

academicData =
await response.json();

document.getElementById(
"cgpa"
).textContent =
academicData.cgpa;

document.getElementById(
"semester"
).textContent =
academicData.currentSemester;

document.getElementById(
"program"
).textContent =
academicData.program;

document.getElementById(
"totalSemesters"
).textContent = 8;

loadSemesterCards();

loadTranscriptCards();

}

function loadSemesterCards(){

const grid =
document.getElementById(
"semesterGrid"
);

grid.innerHTML = "";

academicData.semesters.forEach(
sem => {

const card =
document.createElement(
"div"
);

card.className =
"semester-card";

card.innerHTML = `

<h3>
Semester ${sem.semester}
</h3>

<p>
SGPA :
${sem.sgpa}
</p>

<p>
Credits :
${sem.credits}
</p>

<p>
Subjects :
${sem.subjects.length}
</p>

<button
onclick="
showSemester(
${sem.semester}
)">

View Subjects

</button>

`;

grid.appendChild(
card
);

});

}

function loadTranscriptCards(){

const grid =
document.getElementById(
"transcriptGrid"
);

grid.innerHTML = "";

academicData.semesters.forEach(
sem => {

const card =
document.createElement(
"div"
);

card.className =
"transcript-card";

card.innerHTML = `

<i class="fas fa-file-pdf pdf-icon"></i>

<h3>
Semester ${sem.semester} Transcript
</h3>

<p>
Official Grade Transcript
</p>

<a
href="../assets/pdf/transcripts/semester${sem.semester}.pdf"
target="_blank"
onclick="event.stopPropagation();"
class="transcript-btn">

Open Transcript

</a>

`;
card.onclick = () => {

window.open(
`../assets/pdf/transcripts/semester${sem.semester}.pdf`,
"_blank"
);

};

grid.appendChild(
card
);

});

}

function showSemester(
semester
){

const sem =
academicData.semesters.find(
s =>
s.semester === semester
);

document.getElementById(
"modalTitle"
).textContent =
`Semester ${semester}`;

let html = `

<table
class="subject-table">

<tr>

<th>Code</th>
<th>Subject</th>
<th>Credits</th>
<th>Grade</th>

</tr>

`;

sem.subjects.forEach(
subject => {

html += `

<tr>

<td>
${subject.code}
</td>

<td>
${subject.name}
</td>

<td>
${subject.credits}
</td>

<td class="grade">
${subject.grade}
</td>

</tr>

`;

});

html += "</table>";

document.getElementById(
"subjectTableContainer"
).innerHTML =
html;

document.getElementById(
"subjectModal"
).style.display =
"flex";

}
function closeModal(){

document.getElementById(
"subjectModal"
).style.display =
"none";

}

loadAcademics();