/**
* hexo-include-remote
* https://github.com/m0k1/hexo-include-remote.git
* Copyright (c) 2015, Momčilo  Mićanović
* Licensed under MIT License
*
* Inserts the raw content of any HTTP/S url into a hexo markdown file.
*
* Syntax:
*   {% include-remote http://example.com/url/to/file %}
*/

var include = require('./include-remote')(hexo);

hexo.extend.tag.register('include-remote', include, {asyn: true});
