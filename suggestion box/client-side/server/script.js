import { db } from "/client-side/server/firebase-config.js"; // Ensure correct path
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js"; // Direct import


const badWords = ["badword1", "badword2", "insult"]; // List of offensive words

async function submitSuggestion() {
    let suggestion = document.getElementById("suggestion").value.trim();

    if (!suggestion) {
        document.getElementById("message").innerText = "Suggestion cannot be empty!";
        return;
    }

    // Check for bad words
    for (let word of badWords) {
        if (suggestion.toLowerCase().includes(word)) {
            document.getElementById("message").innerText = "Inappropriate content detected!";
            return;
        }
    }

    try {
        await addDoc(collection(db, "suggestions"), { text: suggestion, timestamp: new Date() });
        document.getElementById("message").innerText = "Suggestion submitted!";
        document.getElementById("suggestion").value = ""; // Clear input
    } catch (error) {
        console.error("Error adding document: ", error);
        document.getElementById("message").innerText = "Error submitting suggestion.";
    }
}

// Attach function to button click
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitBtn").addEventListener("click", submitSuggestion);
});

