// Summary.
// Description.
// @Link URl
// @file These files define the MyClass class.
// @author Yasmin Kashani
//@since 2022.4.27


//Define Variables
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);

  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray=", nameArray);

  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  //join array back to string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

//Output
document.writeIn("Oh hey, I've fixed your name: "),
    sortUserName(), "</br>");
