async function loadStats(){

const projects =
await fetch("data/projects.json")
.then(r=>r.json());

const certificates =
await fetch("data/certificates.json")
.then(r=>r.json());

const achievements =
await fetch("data/achievements.json")
.then(r=>r.json());

console.log(
projects.length,
certificates.length,
achievements.length
);

}

loadStats();