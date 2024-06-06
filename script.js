const targetDate = new Date("June 24, 2024 00:00:00").getTime();

    const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = days.toString().padStart(2, '0');
    document.getElementById("horas").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutos").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("segundos").innerText = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("contador").innerHTML = "CHEGOU A HORA";
        }
    }, 1000);