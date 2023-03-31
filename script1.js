function subscribe() {
    var email = document.getElementById("email").value;
    if (validateEmail(email)) {
      if (localStorage.getItem("subscribedEmails")) {
        var subscribedEmails = JSON.parse(localStorage.getItem("subscribedEmails"));
        if (subscribedEmails.includes(email)) {
          document.getElementById("message").innerHTML = "You have already subscribed to our newsletter!";
        } else {
          subscribedEmails.push(email);
          localStorage.setItem("subscribedEmails", JSON.stringify(subscribedEmails));
          document.getElementById("message").innerHTML = "Thank you for subscribing to our newsletter!";
        }
      } else {
        var subscribedEmails = [email];
        localStorage.setItem("subscribedEmails", JSON.stringify(subscribedEmails));
        document.getElementById("message").innerHTML = "Thank you for subscribing to our newsletter!";
      }
    } else {
      document.getElementById("message").innerHTML = "Invalid email address!";
    }
  }
  
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  