[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

![logo](examples/images/logo.svg?raw=true)

**MetricsViewer.js** is a simple JavaScript library for displaying  [Dropwizard Metrics](http://metrics.dropwizard.io/) data as line graphs. 
Dropwizard metrics are formerly known as Coda Hale/Yammer metrics. The MetricsViewer.js library is based on [MetricsGraphics.js](http://metricsgraphicsjs.org) charting library.

# Examples
This library is very easy to use. You can create a simple counter metrics viewer by calling the calling 
`addCounter`.

```js
metricsViewer.addCounter('#counter-div', 
    "Counter Metrics Viewer Example", 
    "Metric Viewer Example of Counter Metrics", 
    "counter.test.metric.a");   
```

The complete documentation can be found [here](examples/index.html). Other examples can be found on the
[examples](examples/examples.html) page. 

## Get Started
1. Download the javascript and css files from [dist](dist) directory.
2. Download the MetricsGraphics files either [lib](lib) directory or from [MetricsGraphics](https://github.com/mozilla/metrics-graphics/releases) site.The current version of MetricsViewer.js is based on MetricsGraphics.js v2.10.1 milestone.
3. The documentation can be [here](examples/index.html).
4. Follow the working examples [here](examples/examples.html).

## Dependencies
The MetricsViewer depends on the following libraries:
1. [MetricsGraphics.js](http://metricsgraphicsjs.org) is a JavaScript library for visualizing time-series data.
2. [D3](http://d3js.org) is a JavaScript library for manipulating documents based on data. MetricsGraphics.js is based
 on D3 library.
3. [jQuery](http://jquery.com/) is a quintessential JavaScriptIt for manipulating HTML documents.

## Build
1. Check out the [library](ccc).
2. Install [Node.js](http://nodejs.org).
3. Install [gulp](http://gulpjs.com) from the project root directory.
```    
    npm install gulp
```
4. Install the library's dependencies:
``` 
    npm install
``` 
5. To build the Javascript library, type:
``` 
    gulp build:js
```     
P.S. If your OS does not recognize gulp, trying installing command line interface of gulp by typing:
``` 
    npm install --global gulp-cli
``` 
6. To build the css library, type
```     
    gulp build:css
```     
7. To build everything at the same time, type
```   
    gulp
``` 
8. To build with Google closure compiler, type
```   
    gulp compile
``` 
9. To unit test, type
```   
    gulp test
``` 
## License

The __MetricsViewer.js__ code is shared under the terms of [Apache License v2.0](https://opensource.org/licenses/Apache-2.0).

