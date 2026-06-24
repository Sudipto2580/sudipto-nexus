let subjects = [];

function addSubject(){

    const subject = {

        courseCode:
        document.getElementById(
        "courseCode"
        ).value,

        subjectName:
        document.getElementById(
        "subjectName"
        ).value,

        credits:
        document.getElementById(
        "credits"
        ).value,

        grade:
        document.getElementById(
        "grade"
        ).value

    };

    subjects.push(subject);

    renderSubjects();

    document.getElementById(
    "courseCode"
    ).value = "";

    document.getElementById(
    "subjectName"
    ).value = "";

    document.getElementById(
    "credits"
    ).value = "";

    document.getElementById(
    "grade"
    ).value = "";
}

function renderSubjects(){

    const tbody =
    document.querySelector(
    "#subjectTable tbody"
    );

    tbody.innerHTML = "";

    subjects.forEach(subject=>{

        tbody.innerHTML += `

        <tr>

            <td>
            ${subject.courseCode}
            </td>

            <td>
            ${subject.subjectName}
            </td>

            <td>
            ${subject.credits}
            </td>

            <td>
            ${subject.grade}
            </td>

        </tr>

        `;

    });

}

function generateAcademic(){

    const academic = {

        semester:
        document.getElementById(
        "semester"
        ).value,

        sgpa:
        document.getElementById(
        "sgpa"
        ).value,

        cgpa:
        document.getElementById(
        "cgpa"
        ).value,

        subjects:
        subjects

    };

    document.getElementById(
    "output"
    ).value =
    JSON.stringify(
        academic,
        null,
        4
    );

}