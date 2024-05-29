<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>send request script map</title>
</head>
<body>
<h1>send requests script map </h1>

<form id="messageForm">
  <label for="message">add messages:</label><br>
  <input type="text" id="message" name="message"><br>
  <button type="submit">request</button>
</form>

<h2>send logs:</h2>
<ul id="messageList">
  <!--send massage here-->
</ul>

<script>
document.getElementById("messageForm").addEventListener("submit", function(event) {
  event.preventDefault(); // ไม่ให้ฟอร์มส่งข้อมูล
  var messageInput = document.getElementById("message");
  var message = messageInput.value; // ข้อความที่ผู้ใช้ป้อน
  if (message.trim() !== "") { // ตรวจสอบว่าข้อความไม่ว่างเปล่า
    var listItem = document.createElement("li");
    var boldText = document.createElement("b");
    boldText.textContent = message; // ข้อความที่ผู้ใช้ป้อน
    listItem.appendChild(boldText);
    var messageList = document.getElementById("messageList");
    messageList.insertBefore(listItem, messageList.childNodes[0]); // เพิ่มข้อความที่บันทึกไว้ล่าสุดด้านบน
    messageInput.value = ""; // clear
  } else {
    alert("please add messages");
  }
});
</script>

</body>
</html>
