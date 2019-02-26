

const HEIGHT =10;
const WIDTH  =10;
const ARRAY = ["blue", "red", "green"]
let color = "red"

let container = document.createElement("div");
container.className = "canvas";

for (let i=0; i<HEIGHT;i++)
{
    let rowDiv = document.createElement("div");
    rowDiv.className= "rowDiv";
    for (let j=0 ; j< WIDTH ;j++)
    {

        let pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.onclick = () => {
            pixel.style.backgroundColor = color;
        }
        rowDiv.append(pixel);
    }
container.append(rowDiv);
}

let colorDiv = document.createElement('div')
colorDiv.className = "colorPickerDiv"

for(let i=0;i<3;i++) {
    let colorPickDiv = document.createElement('div')
    colorPickDiv.className = "colorPicker"
    colorPickDiv.style.backgroundColor = ARRAY[i]
    colorPickDiv.onclick = () => {
        color = colorPickDiv.style.backgroundColor
    }
    colorDiv.append(colorPickDiv);
}



document.body.append(container);
document.body.append(colorDiv);



