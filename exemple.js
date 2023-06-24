let students = {
  'group1': ['student11', 'student12', 'student13'],
  'group2': ['student21', 'student22', 'student23'],
  'group3': ['student31', 'student32'],
};
for (const key in students) {
  for (const name of students[key]) {
    console.log(name)
  }
}
