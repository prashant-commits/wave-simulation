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



/* 
The general equation for a wave exhibiting Simple Harmonic Motion (SHM) is y(x,t) = A cos(ωt - kx + φ), where 'y' is displacement, 'A' is amplitude, 'ω' is angular frequency, 'k' is wave number, 't' is time, 'x' is position, and 'φ' is the phase constant. 
Here's a more detailed breakdown:
y(x,t): Represents the displacement of the wave at position x and time t. 
A: The amplitude, which is the maximum displacement from the equilibrium position. 
ω (omega): The angular frequency, related to the frequency (f) by ω = 2πf. 
k: The wave number, related to the wavelength (λ) by k = 2π/λ. 
t: Time. 
x: Position. 
φ (phi): The phase constant, which determines the initial phase of the wave at t=0 and x=0. 
*/