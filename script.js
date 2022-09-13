let btn = document.getElementById('generateNewArray');
let container = document.getElementById('bars');
let arraySize = document.getElementById("arraySize");
const newArray = document.getElementById("generateNewArray");
let speed = document.getElementById("speed");
const bar = document.getElementById("bars");
let bubbleInfo = document.getElementById('bubbleInfo');
let selectionInfo = document.getElementById('selectionInfo');
let insertionInfo = document.getElementById('insertionInfo');
let mergeInfo = document.getElementById('mergeInfo');
let quickInfo = document.getElementById('quickInfo');
let divArr = [];
let x = Math.floor((Math.random() * 100)+1);



arraySize.addEventListener('input', function() {
    let value = arraySize.value;
    x=parseInt(value);
    generate(x)
});

window.onload = generate(50);

btn.addEventListener('click',()=>{generate(Math.floor((Math.random() * 100)+1))});


function generate(x){
    arraySize.value = x
    
    //arr = []
    divArr = []
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
        }

    while(x>0){
        let y = Math.floor((Math.random() * 50)+1);
        
       // arr.push(y);

        let div = document.createElement("div");
        div.id = `${y}` ;
        div.className = "bar";
         div.style.height = `${y}vh`;
        divArr.push(div);
        x--
    }


    for (var i=0; i<divArr.length; i+=1) {
        container.appendChild(divArr[i]);
    }
    
};

//----------------------------------------------------------------------------------------------------------
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;  
}
function disableSortingBtn(){
    document.getElementById("bubble").disabled = true;
    document.getElementById("insertion").disabled = true;
    document.getElementById("merge").disabled = true;
    document.getElementById("quick").disabled = true;
    document.getElementById("selection").disabled = true;
    //document.getElementById("heap").disabled = true;
}
function enableSortingBtn(){
    document.getElementById("bubble").disabled = false;
    document.getElementById("insertion").disabled = false;
    document.getElementById("merge").disabled = false;
    document.getElementById("quick").disabled = false;
    document.getElementById("selection").disabled = false;
    // document.getElementById("heap").disabled = false;
}
function disableSizeSlider(){
    arraySize.disabled = true;
}
function enableSizeSlider(){
    arraySize.disabled = false;
}
function disableNewArrayBtn(){
    newArray.disabled = true;
}
function enableNewArrayBtn(){
    newArray.disabled = false;
}
function waitforme(ms) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, ms); 
    }) 
}

let delay = 500;

speed.addEventListener('input', function(){
    delay = 500/parseInt(speed.value);
});


newArray.addEventListener("click", function(){
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});



//---------------------------Bubble Sort---------------------------------------------------------------------

const bubbleButton = document.getElementById('bubble');

async function bubble() {


    const ele = document.getElementsByClassName("bar");
    let higher = [];
    let lower = [];
    for(let i = 0; i < ele.length-1; i++){
        for(let j = 0; j < ele.length-i-1; j++){
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            await waitforme(delay);
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                higher = ele[j];
                lower = ele[j+1];
                higher.style.background = 'crimson';
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            else{
                higher = ele[j+1];
                lower = ele[j];
                lower.style.background = 'green';
                higher.style.background = 'green';
                await waitforme(delay);
            }
           
            lower.style.background = 'darkturquoise';
            higher.style.background = 'darkturquoise';
        }
        ele[ele.length-1-i].style.background = 'green';
    }
    
        for (let i=0; i<ele.length;i++){
            await waitforme(20);
        ele[i].style.background = 'limegreen';
    }
    
    
}


bubbleButton.addEventListener('click', async function(){
    bubbleInfo.classList.add('show')
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    bubbleInfo.classList.remove('show');
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
//----------------------------------------Selection Sort--------------------------------------------------------------------
async function selection(){
    const ele = document.querySelectorAll(".bar");
    
    for(let i = 0; i < ele.length; i++){
        
        let min_index = i;
        ele[i].style.background = 'crimson';
        
        for(let j = i+1; j < ele.length; j++){
            
            ele[j].style.background = 'steelblue';
            await waitforme(delay);
            
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                min_index = j;    
            }
        }
        
        swap(ele[min_index], ele[i]);
        ele[i].style.background = 'green';

    }

    for (let i=0; i<ele.length;i++){
        await waitforme(20);
    ele[i].style.background = 'limegreen';
        }
}

const selectionSortbtn = document.getElementById("selection");
selectionSortbtn.addEventListener('click', async function(){
    selectionInfo.classList.add('show')

    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    selectionInfo.classList.remove('show');
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});



//---------------------------------Insertion Sort---------------------------------------------------------------
const insertionButton = document.getElementById('insertion');

async function insertion(){
    const ele = document.getElementsByClassName("bar");

    ele[0].style.background = 'green';
    for(let i = 1; i < ele.length; i++){
        let j = i - 1;
        let key = ele[i].style.height;
        
        ele[i].style.background = 'blue';

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
        
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

        
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
        ele[i].style.background = 'green';
    }


    for (let i=0; i<ele.length;i++){
        await waitforme(20);
    ele[i].style.background = 'limegreen';
        }

        

}


insertionButton.addEventListener('click', async function(){
    insertionInfo.classList.add('show')

    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    insertionInfo.classList.remove('show');
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

//-------------------------------------------------Merge Sort------------------------------------------------
//let delay = 30;
async function merge(ele, low, mid, high){
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await waitforme(delay);
        // color
        ele[low + i].style.background = 'orange';
        left[i] = ele[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await waitforme(delay);
        // color
        ele[mid + 1 + i].style.background = 'yellow';
        right[i] = ele[mid + 1 + i].style.height;
    }
    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await waitforme(delay);
        // To add color for which two r being compared for merging
        if(parseInt(left[i]) <= parseInt(right[j])){
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            }
            
            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            } 
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await waitforme(delay);
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await waitforme(delay);
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }

    
}
async function mergeSort(ele, l, r){

    if(l >= r){
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
    
}

const mergeSortbtn = document.getElementById("merge");
mergeSortbtn.addEventListener('click', async function(){
    mergeInfo.classList.add('show');
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(ele, l, r);
    for (let i=0; i<ele.length;i++){
        await waitforme(20);
    ele[i].style.background = 'limegreen';
        }
    mergeInfo.classList.remove('show');
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

//-----------------------------------------Quick Sort---------------------------------------------------------------------

async function partitionLomuto(ele, l, r){
    let i = l - 1;
    // color pivot element
    ele[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        // color current element
        ele[j].style.background = 'yellow';
        // pauseChamp
        await waitforme(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            i++;
            swap(ele[i], ele[j]);
            // color 
            ele[i].style.background = 'orange';
            if(i != j) ele[j].style.background = 'orange';
            // pauseChamp
            await waitforme(delay);
        }
        else{
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
    }
    i++; 
    // pauseChamp
    await waitforme(delay);
    swap(ele[i], ele[r]); // pivot height one
    // color
    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';
    // pauseChamp
    await waitforme(delay);
    // color
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }

    return i;
}

async function quickSort(ele, l, r){
    if(l < r){
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}
const quickSortbtn = document.getElementById("quick");
quickSortbtn.addEventListener('click', async function(){
    quickInfo.classList.add('show');
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele, l, r);
    for (let i=0; i<ele.length;i++){
        await waitforme(20);
    ele[i].style.background = 'limegreen';
        }
    quickInfo.classList.remove('show');
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


//---------------------------------------------------------------------------------------------------------------------
