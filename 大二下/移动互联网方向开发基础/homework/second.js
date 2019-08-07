function foo(arr){
    var brr = new Array();
    for(var i = 0;i<arr.length;i++){
        switch(typeof arr[i]){
            case "string":
                arr[i] = arr[i].trim();
                break;
            case "boolean":
                arr[i] = Number(arr[i]);
                break;
            case "number":
                arr[i] = Number(arr[i].toFixed(2)); 
                break;
        }
        brr[i] = arr[i];
    }
    console.log(brr);
}
var arr = [" fgi ",false,12.345];
foo(arr);