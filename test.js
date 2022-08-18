grades = 42;
let nextMultiple = (Math.floor(grades / 5) + 1) * 5;
console.log(nextMultiple);


 // Write your code here******************
    // Write your code here
    //console.log(path);
    let valley = 0;
    let elevation = 0;
    let prevStep = "";
    for (let i = 0; i < path.length; i++){
        if (path[i] === "D"){
            elevation--;
            if (prevStep === "D" && elevation < -1) {
                valley++;
            }
            //console.log("Down:", path[i], "Elevation:", elevation);
            prevStep = "D";
        } else {
            elevation++;
            //
            console.log("Down:", path[i], "Elevation:", elevation);
            prevStep = "U";
        }
    }
    return valley;


    //****************** */

    // Write your code here
    // Write your code here
    //console.log(path);
    let valley = 0;
    let elevation = 0;
    let stepCount = 0;
    //let prevStep = "";
    for (let i = 0; i < path.length; i++){
        if (path[i] === "D"){
            elevation--;
            if (elevation < 0){
                stepCount++;
            }
            //console.log("Down:", path[i], "Elevation:", elevation);
            //prevStep = "D";
        } else {
            elevation++;
            if (stepCount > 1){
                valley++;
                stepCount = 0;
            } 
            //
            //console.log("Down:", path[i], "Elevation:", elevation);
            //prevStep = "U";
        }
    }
    return valley;



    let valley = 0;
    let elevation = 0;
    let stepCount = 0;
    let prevStep = "";
    for (let i = 0; i < path.length; i++){
        if (path[i] === "D"){
            elevation--;
            if (elevation <= 0){
                stepCount++;
            }
            //console.log("Down:", path[i], "Elevation:", elevation);
            prevStep = "D";
        } else {
            elevation++;
            if (stepCount > 1){
                valley++;
                stepCount = 0;
            } 
            //
            //console.log("Down:", path[i], "Elevation:", elevation);
            prevStep = "U";
        }
    }
    return valley;
