const indicator = document.querySelector(".indicator"),
  input = document.querySelector("input"),
  weak = document.querySelector(".weak"),
  medium = document.querySelector(".medium"),
  strong = document.querySelector(".strong"),
  text = document.querySelector(".text");
  showBtn = document.querySelector(".showBtn");
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
function trigger() {
  if (input.value != "") {
    indicator.style.display = "block";
    indicator.style.display = "flex";
    if (
      input.value.length <= 3 &&
      (input.value.match(regExpWeak) ||
        input.value.match(regExpMedium) ||
        input.value.match(regExpStrong))
    )no = 1;
    if (
      input.value.length >= 6 &&
      ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) ||
        (input.value.match(regExpMedium) && input.value.match(regExpStrong)) ||
        (input.value.match(regExpWeak) && input.value.match(regExpStrong)))
    )no = 2;
    if (
      input.value.length >= 6 &&
      input.value.match(regExpWeak) &&
      input.value.match(regExpMedium) &&
      input.value.match(regExpStrong)
    )no = 3;
    if(no == 1){
      weak.classList.add("active");
      text.style.display = "block";
      text.textContent = "Your password is too week";
      text.classList.add = "weak";
      text.style.color = "#ff4757";
    }
    if(no == 2){
      medium.classList.add("active");
      text.textContent = "Your password is medium";
      text.classList.add = "medium";
      text.style.color = "orange";
    }
    else{
      medium.classList.remove("active");
      text.classList.remove = "medium";
      
    }
    if(no == 3){
      medium.classList.add("active");
      strong.classList.add("active");
      text.textContent = "Your password is strong";
      text.classList.add = "strong";
      text.style.color = "#23ad5c";
    }
    else{
      strong.classList.remove("active");
      text.classList.remove = "strong";
    }
    showBtn.style.display = "block";
    showBtn.onclick = function() {
      if(input.type == "password"){
        input.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "green";
      }else{
        input.type = "password";
        showBtn.textContent = "SHOW";
    };
  }
  } else {
    indicator.style.display = "none";
    text.style.display = "none";
    showBtn.style.display = "none";
  }
}
