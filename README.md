# hexo-include-remote

A [Hexo](https://github.com/hexojs/hexo) plugin for including the raw content of any HTTP/S url into a post directly from its markdown. Easily insert pre-written HMTL, JS, or the contents of _any_ remote-url into the body of your post or page.

## Usage

Insert the following into the post's markdown where you want the contents of the remote-url inserted. You can use both HTTP or HTTPS !
```
{% include-remote https://example.com/url/to/file %}
```

## Install

Install with [npm](https://www.npmjs.com/) from the base directory of your Hexo site:

```
$ npm install --save --only=prod hexo-include-remote
```

The `--only=prod` ensures that the development dependencies are not installed. If you want to run the tests, remove this flag. More info [here](https://docs.npmjs.com/cli/install).

## License

MIT (c) 2016 Momčilo  Mićanović
