var form = document.querySelector('form.contact');

if (form) {

  form.addEventListener('submit', function(event) {

    // Don't do anything, browser!
    event.preventDefault();

    // Get email
    var name = form.querySelector('input[name="name"]')
    var email = form.querySelector('input[name="email"]')
    var message = form.querySelector('textarea[name="message"]')

    var subject = encodeURIComponent('Message from ' + name.value);
    var body = encodeURIComponent(message.value + "\n\nEmail address: " + email.value);

    // Send newsletter email to myself
    var url = 'https://screenmessage.com/blog/mail.php?subject=' + subject + '&message=' + body + '&from=' + encodeURIComponent(email.value);
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send();

    // Show response
    var responseField = form.querySelector('.response');
    responseField.style.display = 'block';

    // Reset email field
    name.value = '';
    email.value = '';
    message.value = '';
  })
}
