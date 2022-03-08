
var srcPaths = {
    styles: "../css/style.css",
    aptInfo: "../aptInfo.js",
}


function getSrc(srcKey) {
    if (srcKey in srcPaths) {
        var value = srcPaths[srcKey];
    } else {value = ""};
    
    return(value);
}

export default getSrc(srcKey);