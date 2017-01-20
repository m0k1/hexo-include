/*
* Hexo include-remote tag function
*
* Feetch content of remote url. Exports function that grabs contents of url given
*/
var request = require('request');

module.exports = function(ctx)
{
  return function includeTag(args)
  {
    var req = request(args[0], function (error, response, body)
    {
      if (!error && response.statusCode == 200)
      {
        return body; // Show the HTML for the Google homepage.
      }
      else
      {
        console.warn("There was error with this request: ".error."Response: ".response);
        return;
      }
    })

    // check existence, if it does, check there is content, return content
  };
};
