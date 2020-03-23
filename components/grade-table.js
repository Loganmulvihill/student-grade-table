class GradeTable {

  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades){
    var table = this.tableElement.querySelector('tbody');
    var pElement = this.querySelector('no-grades-text')
    table.innerHTML = '';
    // console.log(table);
    for( var i = 0; i < grades.length; i++){
      var tr = document.createElement('tr');

      var td1 = document.createElement('td');
      td1.textContent = grades[i].name;

      var td2 = document.createElement('td');
      td2.textContent = grades[i].course;

      var td3 = document.createElement('td');
      td3.textContent = grades[i].grade;
      this.renderGradeRow(grades,this.deleteGrade();)
      // var button = document.createElement('button');
      // button.textContent = "Delete";
      // button.className += "btn btn-danger"

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      // tr.appendChild(button);
      table.appendChild(tr);
    }

    if(grades.length < 0) {
      pElement.classList.remove("d-none")
    } else {pElement.classList.add("d-none")}
  }

  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }



  renderGradeRow(data,deleteGrade){

    // data = grade;

    var table = this.tableElement.querySelector('tbody');
    // table.innerHTML = '';
    // console.log(table);
    for (var i = 0; i < data.length; i++) {
      var tr = document.createElement('tr');

      var td = document.createElement('td');
      var deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";
      deleteButton.className += "btn btn-danger"

      td.appendChild(deleteButton);
      tr.appendChild(deleteButton);
      table.appendChild(tr);
  }
  deleteButton.addEventListener('click',deleteGrade(data.id));
  console.log(data);

    return tr;

    function deleteGrade() {

    }

 }

}
