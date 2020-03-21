class GradeTable {
  constructor(tableElement){
    this.tableElement = tableElement;
  }

  updateGrades(grades){
    var table = this.tableElement.querySelector('tbody');
    table.innerHTML = '';
    for( var i = 0; i < grades.length; i++){
      var tr = document.createElement('tr');

      var td1 = document.createElement('td');
      td1.textContent = grades[i].name;

      var td2 = document.createElement('td');
      td2.textContent = grades[i].course;

      var td3 = document.createElement('td');
      td3.textContent = grades[i].grade;

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);

      table.appendChild(tr);
    }


  }
}
