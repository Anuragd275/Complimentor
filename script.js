var compliments = ["You always choose funny names for your wi-fi",
    "You select the best emojis in chat",
    "You never hurted someone intentionally",
    "Taking care is a Habit of yours"]
document.getElementById("complimentor").onclick = function () {
    document.getElementById("text").innerText = compliments[Math.floor(Math.random() * compliments.length)];
}