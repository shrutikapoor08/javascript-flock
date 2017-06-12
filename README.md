# javascript-flock
This repo is organized into folders. Each folder represents the question in the code challenge document. Description of the completion status of the questions is as follows

Question 1:
Complete

Question 2:
Current status: The app is performing email validation using simple regex. When a valid email is entered, user is given feedback that the input is valid. When email does not match the format 's@s.com', an error is displayed.

TODO:
1. Remove stale validation message: On subsequent validations of the email, the previous validation message is not removed. Need to remove this. 
2. In field validation: Instead of showing the message as a text after the input field, it could appear next to the email (check for text overflow).
3. CSS improvements: The feedback message can be styled better. 

Resources: 
1. http://www.w3resource.com/javascript/form/email-validation.php


Question 3:
Current status: Created an XHR request and sending request to Meetup API. Avoided CORS by adding a proxy server. Input field calls sendRequest function on click. 
TODO:
1. Debug error with the Meetup API's request.There seems to be an error thrown after the request is being made. This is probably due to incorrect url parameters.
2. Update the UI with the responseText received from above. 
3. Style the UI after responseText is rendered. 