function createRandomNumbers() {
    const randomSize = Math.floor(Math.random() * 100) + 50; //Random number between 50-549
    let randomNumbers = [];

    for (let i = 0; i < randomSize; i++) {
        const randomHeight = Math.floor(Math.random() * 400) + 50; //Random number between 50-449
        randomNumbers.push(randomHeight);
    }

    return randomNumbers;
}

function createVisualizer() {
    const visualizer = document.getElementById("visualizer");

    for (const number of randomNumbers) {
        const div = document.createElement("div");
        div.classList.add('staple');
        div.style.height = `${number}px`;
        visualizer.appendChild(div);
    }
}

function removeVisualizerContent() {    
    const visualizer = document.getElementById("visualizer");

    while (visualizer.lastElementChild) {
        visualizer.lastElementChild.remove();
    }
}

function repaintVisualizer() {      //Repaints the visualizer
    removeVisualizerContent();
    createVisualizer();
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

/*
mergeSort(inlist)
    if length of inlist <= 1:
        return inlist
    L1 = half of the items from inlist
    L2 = other half of the items from inlist
    return merge(mergeSort(L1), mergeSort(L2))
*/

/*
merge(L1, L2)
    answer = new empty list
    while L1 is not empty and L2 is not empty
        x = first element of L1
        y = first element of L2
        if x <= y
            append x to answer
            remove first element from L1
        else
            append y to answer
            remove first element from L2
    // Now one of L1 and L2 is empty, so append all remaining elements
    append all elements of L1 to answer
    append all elements of L2 to answer
    return answer
*/

async function insertionSort() {
    for (let i = 0; i < randomNumbers.length; i++) {
       let j = i;
       while (j > 0 && randomNumbers[j] < randomNumbers[j-1]) {
            [randomNumbers[j-1], randomNumbers[j]] = [randomNumbers[j], randomNumbers[j-1]]; 
            j--;
            repaintVisualizer();
            await new Promise(resolve => setTimeout(resolve, 10)); // Adjust the delay time as needed
       }
    }
}

let randomNumbers = createRandomNumbers();
createVisualizer();
createEventListeners();