var newdoctitle = "";
var newdoctxt = '';

addEventListener("load", (event) => {
  let html = document.querySelector('html');
  InsertHTML(html.getAttribute('data-doctitle'), html.getAttribute('data-doctxt'));
  let el = document.body;
  let divplace = el.firstElementChild;
  let scriptplace = el.getElementsByTagName('div')[1];
  let content = ""
  //console.log(content);
  //el.removeChild(el.firstElementChild);
  //console.log(el.innerHTML);
  newdoctitle = divplace.getAttribute('data-doctitle');
  newdoctxt = BaseUrl + divplace.getAttribute('data-doctxt');
  ReadFile("ScrollTemplate.html", function(TemplateContent){
    content = TemplateContent;
    let scripts = scriptplace.innerHTML;
    //console.log(scripts);
    content += scripts;
    //console.log(content);
    el.innerHTML = content;
  });
})

function InsertHTML(doctitle, doctxt) {
  ReadFile("GenericLetter.html", function(Information) {
    console.log("Loaded Letter template");
    document.querySelector('html').innerHTML = Information;
    let scriptplace = document.body.getElementsByTagName('div')[0];
    scriptplace.setAttribute('data-doctitle',doctitle);
    scriptplace.setAttribute('data-doctxt',doctxt);
  })
}

/*window.onload = function()
{
  let el = document.body;
  let divplace = el.firstElementChild;
  let scriptplace = el.getElementsByTagName('div')[1];
  let content = ""
  //console.log(content);
  //el.removeChild(el.firstElementChild);
  //console.log(el.innerHTML);
  newdoctitle = divplace.getAttribute('data-doctitle');
  newdoctxt = BaseUrl + divplace.getAttribute('data-doctxt');
  ReadFile("ScrollTemplate.html", function(TemplateContent)
  {
    content = TemplateContent;
    let scripts = scriptplace.innerHTML;
    //console.log(scripts);
    content += scripts;
    //console.log(content);
    el.innerHTML = content;
  });*/

  //content += scripts.innerHTML;
  //el.innerHTML = content;
  //el.removeAttributeNode(el.attributes[0]);el.removeAttributeNode(el.attributes[0]);
  //el.id = ""
  /*console.log("Loaded JS");

  InsertImages();
};*/

function ReadScroll()
{
  SwapScroll(newdoctitle, newdoctxt);
};
