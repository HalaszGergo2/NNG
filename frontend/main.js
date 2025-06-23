async function runApi() {
    const input = document.getElementById('input').value;
    const output = document.getElementById('result');

    try {
        const json = JSON.parse(input);
        const response = await fetch("/api/dispatch", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        });

        const result = await response.json();
        output.textContent = JSON.stringify(result)
    } catch (error) {
        output.textContent = "HIBA"
    }
}