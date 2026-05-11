document.addEventListener('DOMContentLoaded', async () => {
    const namespace = "iq-test-project"; // frei wählbar
    const key = "visits"; // frei wählbar

    try {
        // Zähler aufrufen + automatisch +1 erhöhen
        const response = await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`);
        const data = await response.json();

        const countDisplay = document.getElementById('visitor-count');

        // Anzeige formatieren (z.B. 0001, 0012, ...)
        countDisplay.innerText = data.value.toString().padStart(4, '0');

    } catch (error) {
        console.error("Counter konnte nicht geladen werden:", error);

        // Fallback falls API nicht erreichbar ist
        document.getElementById('visitor-count').innerText = "----";
    }
});
