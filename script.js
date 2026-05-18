document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch("https://api.api-ninjas.com/v1/counter", {
            method: "GET",
            headers: {
                "X-Api-Key": "DEIN_API_KEY"
            }
        });

        const data = await response.json();

        console.log(data);

        document.getElementById('visitor-count').innerText =
            data.value.toString().padStart(4, '0');

    } catch (error) {
        console.error("Counter Fehler:", error);
        document.getElementById('visitor-count').innerText = "----";
    }
});
