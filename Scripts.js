function ReadFile(name, callback)
{
  console.log("Read file function");
  const txtfile = name;
  // create a new XMLHttpRequest object to load the file
  var xhr = new XMLHttpRequest();

  // specify the path to the file
  var filePath = txtfile;

  // define a variable to store the file contents
  var fileContents;

  // define a function to handle the file loaded event
  xhr.onload = function() {
    // create a new instance of FileReader
    var reader = new FileReader();
    console.log("onload");
    // define the callback function that will be called when the file is loaded
    reader.onload = function(event) {
      // the file contents are stored in the result property
      fileContents = event.target.result;
      console.log("fileContents = "+fileContents);
      //console.log(fileContents);
      callback(fileContents);
    };

    // read the contents of the file
    reader.readAsText(xhr.response);
    console.log(reader);
  };

  // open the file
  xhr.open("GET", filePath, true);
  xhr.withCredentials = false;
  // specify the response type as text
  xhr.responseType = "blob";

  // send the request
  xhr.send();
}

addEventListener("load", (event) => {
  setTimeout(PageOnLoad(), 10);
})

function PageOnLoad()
{
  var Sidebar = document.querySelector('.sidebar');
  ReadFile("SidebarTemplate.html", function (fileContents) {
    Sidebar.outerHTML = fileContents
    UpdateSidebar();
  });
}

function UpdateSidebar()
{
  var Sidebar = document.querySelector('.sidebar');
  //console.log(Sidebar);
  var SidebarList = Sidebar.querySelector('.sidebarList');
  SidebarList = SidebarList.firstElementChild; //the ul
  //console.log(SidebarList);
  var MRows = SidebarList.getElementsByClassName('M');
  //console.log(MRows);
  var Rows = new Array(0);

  //create an array of each row of the list
  for (let row of MRows) {
    var n = row.nextElementSibling;
    //console.log(n);
    var p = row.previousElementSibling;
    //console.log(p);
    Rows.push([p, row, n]);
  }
  //console.log(Rows);
  AppendSidebarRows(Rows);
}

function AppendSidebarRows(Rows)
{
  Rows.forEach((row) => {
    var middle = row[1];
    //console.log(typeof middle);
    //console.log(middle.parentNode);
    var location = middle.dataset.link;
    //console.log(location);
    row.forEach((item) => {
      let a = document.createElement("a");
      a.href = location+".html";
      item.appendChild(a);
    });
    //console.log(middle.children);

    middle.firstChild.innerHTML = location;
  });
}
