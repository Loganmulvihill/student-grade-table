class GradeTable {

  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades){
    var table = this.tableElement.querySelector('tbody');

    var pElement = document.querySelector('p');

    table.innerHTML = '';

    for( var i = 0; i < grades.length; i++){

      this.renderGradeRow(grades[i],this.deleteGrade);

    }

      if(grades.length < 0) {
        pElement.classList.remove("d-none")
      } else if (grades.length >= 0){
        pElement.classList.add("d-none")
      }


  }

  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }



  renderGradeRow(data,deleteGrade){

    var table = this.tableElement.querySelector('tbody');

      var tr = document.createElement('tr');
      var name = document.createElement('td');
      name.textContent = data.name;

      var course = document.createElement('td');
      course.textContent = data.course;

      var grade = document.createElement('td');
      grade.textContent = data.grade;

      var td = document.createElement('td');
      var deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";
      deleteButton.className += "btn btn-danger";

      deleteButton.addEventListener('click', function () {
        deleteGrade(data.id);
      });


      td.appendChild(deleteButton);
      tr.appendChild(name);
      tr.appendChild(course);
      tr.appendChild(grade);
      tr.appendChild(td);
      table.appendChild(tr);
      return tr;

  }

    }
