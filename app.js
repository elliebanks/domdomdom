document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    let btnText = document.createTextNode("Add Square");
    let squareCounter = 1;
    button.className = "button";
    button.appendChild(btnText);
    document.body.appendChild(button);

    let div = document.createElement("div");
    div.className = "div";
    document.body.appendChild(div);
    
    
    button.addEventListener("click", function () {
        
        let square = document.createElement("div");
        let container = document.createElement("div");
        let squareText = document.createElement("h2");
        
        container.id = "container";
        square.className = "square";
        squareText.className = "squareText";
        square.id = squareCounter++;
        squareText.innerHTML = `${square.id}`;
        container.appendChild(squareText);
        container.style.visibility = "hidden";
        square.appendChild(container);
        
        div.appendChild(square);

        square.addEventListener("mouseover", function () {
            container.style.visibility = "visible";
        });

        square.addEventListener("mouseout", function () {
            container.style.visibility = "hidden";
        });

        square.addEventListener("click", function () {
            let colors = [
                "yellow",
                "pink",
                "blue",
                "orange",
                "red",
            ];
            let randomColor = Math.floor(Math.random() * colors.length);
            square.style.backgroundColor = colors[randomColor];
        });

        square.addEventListener("dblclick", function () {
            if (square.nextSibling && square.id % 2 == 0) {
                square.nextSibling.remove();
            } else if (!square.nextSibling && square.id % 2 == 0) {
                alert("no square after this to remove!");
            } else if (square.previousSibling && square.id % 2 == 0) {
                square.previousSibling.remove();
            } else if (!square.previousSibling && square.id % 2 !== 0) {
                alert("no square before this to remove!");
            }
        });
    });
});

