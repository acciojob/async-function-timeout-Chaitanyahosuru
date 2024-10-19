//your JS code here. If required.
document.getElementById("messageForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the form from submitting

    const text = document.getElementById("text").value; // Get user-provided text
    const delay = Number(document.getElementById("delay").value); // Get user-provided delay

    // Call the async function to display the message after the delay
    await displayMessageAfterDelay(text, delay);
});

async function displayMessageAfterDelay(message, delay) {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });

    // Display the message in the output div
    document.getElementById("output").innerText = message;
}
