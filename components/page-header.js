class PageHeader {
  constructor(headerElement){
this.headerElement = headerElement;
  }

  updateAverage(newAverage) {
    var badgeElement = this.headerElement.querySelector('.badge');
    console.log(badgeElement);
    badgeElement.textContent = newAverage;
  }
}
