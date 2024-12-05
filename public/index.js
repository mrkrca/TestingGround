const form = document.querySelector('form')
const FullName = document.getElementById("name");
const emailing = document.getElementById("email");
const mess = document.getElementById("message");


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: FullName.value,
        email: emailing.value,
        message: mess.value
      })
    });

    

    const data = await response.json();

    if (data.success) {
      checkInput(true); 
      form.reset();
    } else {
      checkInput(false); 
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    checkInput(false); 
  }
});


function checkInput(success) {
  if (success) {
    Swal.fire({
      title: "SENT",
      text: "YOUR EMAIL WAS SENT",
      icon: "success"
    });
  } else {
    Swal.fire({
      title: "NOT SENT",
      text: "An error occurred while sending your email",
      icon: "error"
    });
  }
}

