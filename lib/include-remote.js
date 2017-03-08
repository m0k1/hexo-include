/*
* Hexo include-remote tag function
*
* Feetch content of remote url. Exports function that grabs contents of url given
*/
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = function(ctx)
{
  return function includeTag(args)
  {
    var target = args[0];
    // exit if url is not defined
    if (!target)
    {
      console.warn("Can't find this url.");
      return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', target, false);
    xhr.setRequestHeader('Content-type', 'text/plain');
    xhr.onload = function () {

    //    console.log(this.responseText);
        return this.responseText;
    };
    xhr.send();
  };
};
