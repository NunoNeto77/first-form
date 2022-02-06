function checkAge() {
  let message = document.getElementById("invalidAge");
  message.innerHTML = "";
  let x = document.getElementById("ageRange").value;

  try {
    if (x < 18) throw "You have to be 18+";
  } catch (error) {
    message.innerHTML = error;
    return false;
  }
  return true;
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

   
  
});

function saveData() {
  //VALUES
  const nameValue = document.getElementById("name").value;
  const cellPhoneValue = document.getElementById("cellPhone").value;
  const genderValue = new FormData(document.forms[0]).getAll("gender");
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;
  const hobbiesValue = new FormData(document.forms[0])
    .getAll("hobbies")
    .join(" | ");
  const ageValue = document.getElementById("ageRange").value;

  if (checkAge()) {
    // Get the data from each element on the form.
    document.forms[0].reset();

    document.getElementById("itemsContainer").insertAdjacentHTML(
      "afterbegin",

      `<div id ="itemsContainer">

      <p>name: ${nameValue}</p> 
      <p>cell phone: ${cellPhoneValue}</p> 
      <p>sex: ${genderValue}</p>
      <p>email: ${emailValue}</p> 
      <p>password: ${passwordValue}</p>
      <p>hobbies: ${hobbiesValue}</p> 
      <p>age: ${ageValue}</p>
      </div>`
      
    );

    //local Storage
    localStorage.setItem("name", nameValue);
    localStorage.setItem("cellPhone", cellPhoneValue);
    localStorage.setItem("gender", genderValue);
    localStorage.setItem("email", emailValue);
    localStorage.setItem("password", passwordValue);
    localStorage.setItem("hobbies", hobbiesValue);
    localStorage.setItem("age", ageValue);
  }
}

function deleteData() {
  document.getElementById("itemsContainer").innerHTML = "";
}

// to range buttom
/*let slider = document.getElementById("ageRange");
let output = document.getElementById("demo");

output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}*/
