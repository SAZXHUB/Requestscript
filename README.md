<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Send Request Script Map</title>
</head>
<body>
<h1>Send Requests Script Map</h1>

<form id="messageForm">
  <label for="message">Add message:</label><br>
  <input type="text" id="message" name="message"><br>
  <button type="submit">Request</button>
</form>

<h2>Send Logs:</h2>
<ul id="messageList">
  <!--Messages will appear here-->
</ul>

<h2>Logs:</h2>
<iframe id="logFrame" src="log.txt" style="width:100%;height:200px;border:1px solid #ccc;"></iframe>

<script>
document.getElementById("messageForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  var messageInput = document.getElementById("message");
  var message = messageInput.value; // Message entered by the user
  if (message.trim() !== "") { // Check if message is not empty
    var listItem = document.createElement("li");
    var boldText = document.createElement("b");
    boldText.textContent = message; // Message entered by the user
    listItem.appendChild(boldText);
    var messageList = document.getElementById("messageList");
    messageList.insertBefore(listItem, messageList.childNodes[0]); // Add the latest message at the top
    messageInput.value = ""; // Clear the message input field

    // Save the message to logs.txt
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "log.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("message=" + encodeURIComponent(message));
  } else {
    alert("Please enter a message");
  }
});
</script>

</body>
</html>
