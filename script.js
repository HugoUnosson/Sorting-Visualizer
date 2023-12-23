function createVisualizer() {
    const visualizer = document.getElementById("visualizer");
    const randomNumber = Math.floor(Math.random() * 100) + 50; //Random number between 50-149
    console.log(randomNumber);

    for (let i = 0; i < randomNumber; i++) {
        const div = document.createElement("div");
        div.classList.add('staple');
        const randomHeight = Math.floor(Math.random() * 400) + 50;
        div.style.height = `${randomHeight}px`;
        visualizer.appendChild(div);
    }
}

function createEventListeners(){
    const buttons = document.getElementsByTagName('button');

    //Adds listeners to all the buttons.
    for (const button of buttons) {
        button.addEventListener('click', function(){
            const buttonText = this.textContent;

            switch (buttonText) {
                case "Merge Sort":
                    mergeSort();
                    break;

                case "Insertion Sort":
                    insertionSort();
                    break;

                default:
                    break;
            }
        });
    }
}

function mergeSort() {
    console.log("merge");
}

function insertionSort() {
    console.log("insertion");
}

createVisualizer();
createEventListeners();