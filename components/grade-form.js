class GradeForm {

  constructor(formElement){
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener('submit',this.handleSubmit);
  }

  onSubmit(createGrade) {
  this.createGrade = createGrade;
  }

  handleSubmit(event){
  event.preventDefault();
  console.log("Hi");
  var formData = new FormData(event.target);
   var name = formData.get("name");
   var grade = formData.get('grade');
   var course = formData.get('course');
   this.createGrade(name,course,grade);
   event.target.reset();
  }

}
