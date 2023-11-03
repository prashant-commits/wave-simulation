const shmConfigFormEle = document.querySelector("form[name=shm-config]")
const containerDiv = document.getElementsByClassName("container")[0]

setBeads(50)

function setBeads(numberOfBeads) {
    Array.from(Array(numberOfBeads).keys()).forEach((key, index, arr) => {
        const bead = document.createElement("span");
        const loops = 1; //Number of loops for Pi sin range
        bead.classList = ["bead"];
        bead.style.setProperty("--offset", index / numberOfBeads + "s")
        containerDiv.appendChild(bead);
    })
}

shmConfigFormEle.addEventListener("change", function (event) {
    event.preventDefault()
    const name = event.target.name;

    if (name === "amplitude") {
        containerDiv.style.setProperty("--amplitude", parseInt(event.target.value) + "px")
    }

    if (name === "frequency") {
        containerDiv.style.setProperty("--time-delay", parseInt(event.target.value))
    }

    if (name === "noOfBeads") {
        containerDiv.innerHTML = ``;
        setBeads(parseInt(event.target.value))
    }
})

shmConfigFormEle.addEventListener("submit", function (event) {
    event.preventDefault()
})



