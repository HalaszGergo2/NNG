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
        output.textContent = "HIBA, " + error
    }
}

function apiToggle(){
     const select = document.getElementById('apiSelect');
     const selected = select.value;
     const textarea = document.getElementById('input');

    /* if(selected === "Select an API"){
        textarea.value = "";
     } */

     const [api, method] = selected.split(".");
    
     const template = [
        {
            api,
            method,
            params: []
        }
     ]

     textarea.value = JSON.stringify(template)
  
}

function toggleTheme(){
    const textarea = document.getElementById('input');
    const select = document.getElementById('apiSelect');
    const button = document.getElementsByClassName('butn');
    document.body.classList.toggle('dark');
    textarea.classList.toggle('dark');
    select.classList.toggle('dark');
    
    for (let i = 0; i < button.length; i++) {
        button[i].classList.toggle('dark')
    }
}

function toggleAlign(){
    const buttons = document.getElementById('buttons')
    buttons.classList.toggle('align-end')
}