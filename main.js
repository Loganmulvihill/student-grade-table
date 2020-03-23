var form = document.querySelector('form');
var gradeForm = new GradeForm(form);
var table = document.querySelector('table');
var pElement = document.querySelector("no-grades-text");
var gradeTable = new GradeTable(table, pElement);
var header = document.querySelector('header');

var pageHeader = new PageHeader(header);

var app = new App(gradeTable,pageHeader,gradeForm);

app.start();
