function control() {
    const nombre = document.querySelector("#first_name").value;
    const apellido = document.querySelector("#last_name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    var er1 = document.getElementById("er1");
    var er2 = document.getElementById("er2");
    var er3 = document.getElementById("er3");
    var er4 = document.getElementById("er4");
    if (nombre === "") {
      er1.style.display = "block";
    } else {
      er1.style.display = "none";
    }
    if (apellido === "") {
        er2.style.display = "block";
      } else {
        er2.style.display = "none";
      }
    if (email === "") {
        er3.style.display = "block";
      } else {
        er3.style.display = "none";
      }
    if (password === "") {
        er4.style.display = "block";
      } else {
        er4.style.display = "none";
      }
  }