
function get(page, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        data = xhr.responseText;
        //alert("executing callback with: " + data)
        callback(data);
        //alert("now, pushing to history")
        }
    };
    xhr.open('GET', page, true);
    xhr.send();
}

const timerFunc1 = function() {
    get("body1.html", (loadedData)=>{
        var element = document.getElementsByTagName("div")[0];
        element.innerHTML = loadedData;
       setTimeout(timerFunc2, 2000);    
    });
};
    
const timerFunc2 = function()  {
    get("body2.html", (loadedData) => {
        var element = document.getElementsByTagName("div")[0];
        element.innerHTML = loadedData;
    });
};

const replaceHtml = function() {
    setTimeout(timerFunc1, 1000);    
};

window.onload = replaceHtml;