document.addEventListener("DOMContentLoaded", function() {
    const coords = { x: 0, y: 0 };
    const circles = [];

    for (let i = 0; i < 8; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.x = 0;
        circle.y = 0;
        document.body.appendChild(circle);
        circles.push(circle);
    }

    window.addEventListener("mousemove", function(e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });

    function animateCircles() {
        let x = coords.x;
        let y = coords.y;

        circles.forEach(function (circle, index) {
            circle.style.left = x - 12 + "px"; 
            circle.style.top = y - 12 + "px";  

            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.5;
            y += (nextCircle.y - y) * 0.5;

            circle.x = x;
            circle.y = y;
        });

        requestAnimationFrame(animateCircles);
    }

    requestAnimationFrame(animateCircles);
});
