function login() {
    localStorage.setItem("P1", document.getElementById("p1input").value)
    localStorage.setItem("P2", document.getElementById("p2input").value)
    window.location="wordgame.html";
}