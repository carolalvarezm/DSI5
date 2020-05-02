function crearCuadricula() {
    const container = document.querySelector(".container");
    for (i = 0; i < 155; i++) {
        const div = document.createElement("div");
        div.classList.add("elemento");
        div.classList.add("round");
        div.classList.add("shadow");
        container.appendChild(div);
    }


}

crearCuadricula()