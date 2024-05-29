<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submit Text</title>
</head>
<body>
    <form id="textForm" action="https://requestscript.github.io/submit" method="post">
        <label for="textInput">Enter your text:</label>
        <input type="text" id="textInput" name="textInput" required>
        <button type="submit">Submit</button>
    </form>

    <div id="logContainer">
        <h2>Logs:</h2>
        <pre id="logsList"></pre>
    </div>

    <script>
        async function fetchLogs() {
            const response = await fetch('https://requestscript.github.io/logs');
            const logs = await response.text();
            document.getElementById('logsList').textContent = logs;
        }

        document.getElementById('textForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const form = event.target;
            const formData = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: formData
            }).then(() => {
                fetchLogs();
                form.reset();
            }).catch(error => console.error('Error:', error));
        });

        // ดึง logs เมื่อโหลดหน้าเว็บ
        fetchLogs();
    </script>
</body>
</html>
