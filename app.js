var OpmlParser = require('opmlparser')
	, request = require('request');

// parser = new OpmlParser();

// parser.on('meta', function (meta){
//   console.log('This OPML is entitled: "%s"', meta.title);
// });
// parser.on('feed', function (feed){
//   console.log('Got feed: "%s" <%s>', feed.title, feed.xmlurl);
// });
// console.log(require('path').normalize(__dirname + '/opml'));

  

request('file://C:/Users/Pablo/Documents/GitHub/podhub/opml/Downcast.opml')
  .pipe(new OpmlParser([options]))
  .on('error', function(error) {
    // always handle errors
  })
  .on('meta', function (meta) {
		console.log('This OPML is entitled: "%s"', meta.title);
  })
  .on('feed', function (feed) {
   		console.log('Got feed: "%s" <%s>', feed.title, feed.xmlurl);
  })
  .on('outline', function (outline) {
    // do something else
  })
  .on('end', function () {
   // do the next thing
  });
