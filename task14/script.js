const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
];

function sortStudentsByGroups(arr) {
  const teamSize = 3;
  const result = [];
  
  arr.sort();
  console.log(arr);
  const groupsNumber = Math.floor(arr.length / 3);
  for (let i = 0; i < groupsNumber; i++) {
    let team = [];
    for (let j = 1; j <= teamSize; j++) {
      team[j - 1] = arr[j - 1 + i * 3];
    }
    result.push(team);
  }
  let left = 'Оставшиеся студенты: ';
  const leftNumber = arr.length - teamSize * groupsNumber;
  if (leftNumber) {
    for (let k = teamSize * groupsNumber + 1; k <= arr.length; k++) {
      if (k == arr.length) {
        left += arr[k - 1];
      } else {
        left += `${arr[k - 1]}, `;
      }
  }}
  else {
    left += "-";
  }
  result.push(left)
  console.log(result);
}

sortStudentsByGroups(students);
