/*
      const xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function (event) {
        if (xhr.readyState == 4) {
          console.log("xhr.readyState == 4 响应已接收");
          if (xhr.status == 200) {
            console.log("响应的内容: ", JSON.parse(xhr.responseText));
          }
        }
      };

      xhr.open("GET", "http://127.0.0.1:8181/user/all", true);
      xhr.send();
*/

export function doGet(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (event) {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("错啦！");
        }
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  });
}
