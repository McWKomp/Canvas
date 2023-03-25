let canvas = document.querySelectorAll(".canvas");

//smile

function smile() {
    //body
    let smile = canvas[0].getContext("2d");
    smile.beginPath();
    smile.fillStyle = "yellow";
    smile.fill();
    smile.beginPath();
    smile.arc(150, 100, 60, 0, 2 * Math.PI);
    smile.fill();

    //mouth
    smile.beginPath();
    smile.moveTo(200, 100)
    smile.quadraticCurveTo(150, 200, 100, 100);
    smile.closePath();
    smile.fillStyle = "red";
    smile.fill();
    smile.lineWidth = 5;
    smile.strokeStyle = "#000";
    smile.stroke();

    //eyes
    smile.beginPath();
    smile.fillStyle = "white";
    smile.fill();
    smile.beginPath();
    smile.arc(130, 70, 15, 0, 2 * Math.PI);
    smile.fill();

    smile.beginPath();
    smile.fillStyle = "white";
    smile.fill();
    smile.beginPath();
    smile.arc(170, 70, 15, 0, 2 * Math.PI);
    smile.fill();

    smile.beginPath();
    smile.fillStyle = "black";
    smile.fill();
    smile.beginPath();
    smile.arc(130, 70, 5, 0, 2 * Math.PI);
    smile.fill();

    smile.beginPath();
    smile.fillStyle = "black";
    smile.fill();
    smile.beginPath();
    smile.arc(170, 70, 5, 0, 2 * Math.PI);
    smile.fill();
}

//boat

function boat() {
    let boat = canvas[1].getContext('2d');
    boat.beginPath();
    boat.fillStyle = "brown";
    boat.lineWidth = 4;
    boat.moveTo(80, 140);
    boat.lineTo(220, 140);
    boat.lineTo(190, 170);
    boat.lineTo(110, 170);
    boat.lineTo(80, 140)
    boat.fill();
    boat.stroke();
    boat.closePath();

    boat.beginPath();
    boat.fillStyle = "green";
    boat.lineWidth = 4;
    boat.moveTo(120, 140);
    boat.lineTo(150, 80);
    boat.lineTo(180, 140);
    boat.fill();
    boat.stroke();
    boat.closePath();

    boat.beginPath();
    boat.fillStyle = "blue";
    boat.lineWidth = 4;
    boat.moveTo(150, 80);
    boat.lineTo(150, 40);
    boat.lineTo(110, 40);
    boat.lineTo(130, 60);
    boat.lineTo(110, 80);
    boat.lineTo(150, 80);
    boat.fill();
    boat.stroke();
}

function house() {
    let house = canvas[2].getContext("2d");
    house.beginPath();
    house.fillStyle = "aqua";
    house.fillRect(0, 0, 300, 200)
    house.closePath();

    house.beginPath();
    house.fillStyle = "lime";
    house.fillRect(0, 130, 300, 70)
    house.closePath();

    house.beginPath();
    house.fillStyle = "green";
    house.fillRect(0, 175, 300, 25)
    house.closePath();

    house.beginPath();
    house.fillStyle = "maroon";

    let i = 10;
    let x = 10;
    while (i != 0) {
        i -= 1;
        house.fillRect(x, 120, 10, 80);
        x += 30;
    }

    house.fillRect(0, 130, 300, 10)
    house.fillRect(0, 170, 300, 10)
    house.closePath();

    house.beginPath();
    house.fillStyle = "orange";
    house.fillRect(55, 120, 190, 120)
    house.closePath();

    house.beginPath();
    house.fillStyle = "brown";
    house.moveTo(20, 120);
    house.lineTo(60, 70);
    house.lineTo(240, 70);
    house.lineTo(280, 120);
    house.lineTo(120, 120)
    house.fill();
    house.closePath();

    house.beginPath();
    house.fillStyle = "yellow";
    house.fillRect(75, 130, 40, 40);
    house.fillRect(185, 130, 40, 40)
    house.arc(0, 0, 60, 0, 2 * Math.PI);
    house.fill();
    house.closePath();

    house.beginPath();
    house.strokeStyle = "yellow";
    house.lineWidth = 4;

    house.moveTo(0, 0);
    house.lineTo(30, 110);
    house.moveTo(0, 0);
    house.lineTo(50, 90);
    house.moveTo(0, 0);
    house.lineTo(70, 70);
    house.moveTo(0, 0);
    house.lineTo(90, 50);
    house.moveTo(0, 0);
    house.lineTo(110, 30);
    house.moveTo(0, 0);
    house.lineTo(130, 10);

    house.stroke();
    house.closePath();

    house.beginPath();
    house.fillStyle = "white";
    house.arc(250, 40, 20, 0, 2 * Math.PI);
    house.fill();
    house.closePath();

    house.beginPath();
    house.arc(240, 30, 20, 0, 2 * Math.PI);
    house.fill();
    house.closePath();

    house.beginPath();
    house.arc(230, 40, 20, 0, 2 * Math.PI);
    house.fill();
    house.closePath();

    house.beginPath();
    house.arc(150, 30, 20, 0, 2 * Math.PI);
    house.fill();
    house.closePath();

    house.beginPath();
    house.arc(140, 20, 20, 0, 2 * Math.PI);
    house.fill();
    house.closePath();

    house.beginPath();
    house.arc(130, 30, 20, 0, 2 * Math.PI);
    house.fill();
    house.closePath();

}

