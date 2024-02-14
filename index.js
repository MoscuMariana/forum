Email.send({
    Host : "smtp.yourisp.com",
    Username : "username",
    Password : "password",
    To : 'shopmania2040@gmail.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
