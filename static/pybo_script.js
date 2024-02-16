function sendAjaxRequest(url, method, successCallback, errorCallback) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                if (successCallback) {
                    successCallback(response);
                }
            } else {
                var response = JSON.parse(xhr.responseText);
                if (errorCallback) {
                    errorCallback(response);
                }
            }
        }
    };
    xhr.send();
}
