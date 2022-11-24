console.log("我是main.js");
const request = new XMLHttpRequest();
let n = 1;
getCSS.onclick = () => {
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("请求CSS成功");
        console.log(request.response);
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        console.log("请求CSS失败");
      }
    }
  };
  request.send();
};
getJS.onclick = () => {
  request.open("GET", "/2.js");

  request.onload = () => {
    console.log("请求JS成功");
    console.log(request.response);
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("请求JS失败");
  };
  request.send();
};
getHTML.onclick = () => {
  request.open("GET", "/3.html");

  request.onload = () => {
    console.log("请求HTML成功");
    console.log(request.response);
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {
    console.log("请求HTML失败");
  };
  request.send();
};

getXML.onclick = () => {
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("请求XML成功");
        console.log(request.responseXML);
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        console.log("请求XML失败");
      }
    }
  };
  request.send();
};

getJSON.onclick = () => {
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("请求JSON成功");
        console.log(request.response);
        const object = JSON.parse(request.response);
        console.log(object);
        myName.textContent = object.name;
      } else {
        console.log("请求XML失败");
      }
    }
  };
  request.send();
};
getPage.onclick = () => {
  request.open("GET", `/page${++n}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
    }
  };
  request.send();
};
