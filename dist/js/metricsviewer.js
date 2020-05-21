;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'MG', 'd3'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'), require('MG'), require('d3'));
  } else {
    root.metricsViewer = factory(root.jQuery, root.MG, root.d3);
  }
}(this, function($, MG, d3) {
/**
 * Copyright [2020] [Indra Basak]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
**/

/**
 *
 * @file MetricsViewer is used for viewing Drop Wizard metrics as line charts. The charts
 * are based on <code>MetricsGraphics.js</code> library. Here is an example, on how to use the library.
 *
 * @example
 * //create different charts
 *   metricsViewer.addCounter("#my-div-counter", "Counter Example Title",
 *       "Counter Example Description", "counter.test.metric.a");
 *
 *   metricsViewer.addMultiCounter("#my-div-multi-counter", "Counter Example Title",
 *       "Counter Example Description", ["counter.test.metric.a", "counter.test.metric.b"]);
 *
 *   metricsViewer.addGauge("#my-div-gauge", "Gauge Example Title",
 *       "Gauge Example Description", "gauge.test.metric.a");
 *
 *   metricsViewer.addMultiGauge("#my-div-multi-gauge", "Gauge Example Title",
 *       "Gauge Example Description", ["gauge.test.metric.a", "gauge.test.metric.b"]);
 *
 *   metricsViewer.addMeter("#my-div-meter", "Meter Example Title",
 *       "Meter Example Description", "meter.test.metric.a");
 *
 *   metricsViewer.addTimer("#my-div-timer", "Timer Example",
 *       "Timer Example Description", "timer.test.metric.a");
 *
 *   metricsViewer.addJvm("#my-div-jvm", "JVM Example Title", "JVM Example Description");
 *
 *   //initialize the metric viewer before displaying for the first time
 *   metricsViewer.init();
 *
 *   //refreshing the metric viewer with new metric data
 *   metricsViewer.refresh(data);
 *
 * @name metricsViewer
 * @namespace metricsViewer
 *
 * @author Indra Basak
 * @since November 2016
 * @license Apache-2.0
 */
(function (metricsViewer, $) {
    'use strict';

    /**
     * Create a metric viewer to display a metric of type 'counter'.
     * @function
     * @name metricsViewer#addCounter
     *
     * @param {string} divId the id of the HTML division tag where the metric chart will be displayed
     * @param {string} title the title of the chart
     * @param {string} description the description of the chart
     * @param {string} metricName the qualified name of the metric
     */
    metricsViewer.addCounter = function (divId, title, description, metricName) {
        var legend = [];
        legend.push(new LegendData(metricName, "count", null, null));
        graphs.push(addGraph(divId, "counter", METRIC_TYPE.COUNTER, metricName, title,
            description, legend, METRIC_TYPE.COUNTER.xLabel, METRIC_TYPE.COUNTER.yLabel,
            null, false));
    };

    /**
     * Creates a metric viewer to display multiple metrics of type 'counter'
     * @function
     * @name metricsViewer#addMultiCounter
     *
     * @param {string} divId the id of the HTML division tag where the metric chart will be displayed
     * @param {string} title the title of the chart
     * @param {string} description the description of the chart
     * @param {Array.<string>} metricNames an array of qualified metric names
     */
    metricsViewer.addMultiCounter = function (divId, title, description, metricNames) {
        if (metricNames.constructor !== Array || !metricNames.length) {
            return;
        }

        var legend = [];
        for (var i = 0; i < metricNames.length; i++) {
            legend.push(new LegendData(metricNames[i], "count", metricNames[i], null));
        }

        graphs.push(addGraph(divId, "counter", METRIC_TYPE.COUNTER, "metricName", title,
            description, legend, METRIC_TYPE.COUNTER.xLabel, METRIC_TYPE.COUNTER.yLabel,
            null, true));
    };

    /**
     * Create a metric viewer to display a metric of type 'gauge'.
     * @function
     * @name metricsViewer#addGauge
     *
     * @param {string} divId the id of the HTML division tag where the metric chart will be displayed
     * @param {string} title the title of the chart
     * @param {string} description the description of the chart
     * @param {string} metricName the qualified name of the metric
     */
    metricsViewer.addGauge = function (divId, title, description, metricName) {
        var legend = [];
        legend.push(new LegendData(metricName, "value", null, null));
        graphs.push(addGraph(divId, "gauge", METRIC_TYPE.GAUGE, metricName, title,
            description, legend, METRIC_TYPE.GAUGE.xLabel, METRIC_TYPE.GAUGE.yLabel,
            null, false));
    };

    /**
     * Creates a metric viewer to display multiple metrics of type 'gauge'
     * @function
     * @name metricsViewer#addMultiGauge
     *
     * @param {string} divId the id of the HTML division tag where the metric chart will be displayed
     * @param {string} title the title of the chart
     * @param {string} description the description of the chart
     * @param {Array.<string>} metricNames an array of qualified metric names
     */
    metricsViewer.addMultiGauge = function (divId, title, description, metricNames) {
        if (metricNames.constructor !== Array || !metricNames.length) {
            return;
        }

        var legend = [];
        for (var i = 0; i < metricNames.length; i++) {
            legend.push(new LegendData(metricNames[i], "value", metricNames[i], null));
        }

        graphs.push(addGraph(divId, "gauge", METRIC_TYPE.GAUGE, "metricName", title,
            description, legend, METRIC_TYPE.GAUGE.xLabel, METRIC_TYPE.GAUGE.yLabel,
            null, true));
    };

    /**
     * Create a metric viewer to display a metric of type 'meter'. It displays four different values in
     * one chart - 1 min rate, 5 min rate, 15 min rate, and mean rate.
     * @function
     * @name metricsViewer#addMeter
     *
     * @param {string} divId the id of the HTML division tag where the metric chart will be displayed
     * @param {string} title the title of the chart
     * @param {string} description the description of the chart
     * @param {string} metricName the qualified name of the metric
     */
    metricsViewer.addMeter = function (divId, title, description, metricName) {
        var legend = [];

        for (var key in meterLegendMap) {
            var value = meterLegendMap[key];
            legend.push(value);
        }

        graphs.push(addGraph(divId, "meter", METRIC_TYPE.METER, metricName, title,
            description, legend, METRIC_TYPE.METER.xLabel, METRIC_TYPE.METER.yLabel,
            "units", false));
    };

    /**
     * Create a metric viewer to display a metric property of type 'meter'.
     * @function
     * @name metricsViewer#addMeterWithProperty
     *
     * @param {string} divId the id of the HTML division tag where the metric chart will be displayed
     * @param {string} title the title of the chart
     * @param {string} description the description of the chart
     * @param {string} metricName the qualified name of the metric
     * @param {string} property the name of the metric property to be displayed, e.g., 1-min rate, 5-min rate, etc.
     */
    metricsViewer.addMeterWithProperty = function (divId, title, description, metricName, property) {
        var data = meterLegendMap[property];
        if (data) {
            var legend = [];
            legend.push(data);

            graphs.push(addGraph(divId, "meter", METRIC_TYPE.METER, metricName, title,
                description, legend, METRIC_TYPE.METER.xLabel, METRIC_TYPE.METER.yLabel,
                "units", false));
        }
    };

    /**
     * Create a metric viewer to display a metric of type 'time'. It displays 3 line charts:
     *
     * <ul>
     *     <li>Duration chart showing the min, mean, and max metrics</li>
     *     <li>Histogram chart showing the percentile metrics</li>
     *     <li>Frequency chart showing the rate metrics</li>
     * </ul>
     *
     * @function
     * @name metricsViewer#addTimer
     *
     * @param {string} divId the id of the HTML division tag where the metric chart will be displayed
     * @param {string} title the title of the chart
     * @param {string} description the description of the chart
     * @param {string} metricName the qualified name of the metric
     */
    metricsViewer.addTimer = function (divId, title, description, metricName) {
        var key, value;

        var durLegend = [];
        for (key in timerDurationLegendMap) {
            value = timerDurationLegendMap[key];
            durLegend.push(value);
        }
        graphs.push(addGraph(divId, "duration", METRIC_TYPE.TIMER, metricName, title,
            description, durLegend, METRIC_TYPE.TIMER.xLabel, METRIC_TYPE.TIMER.yLabel,
            "duration_units", false));

        var histLegend = [];
        for (key in timerHistogramLegendMap) {
            value = timerHistogramLegendMap[key];
            histLegend.push(value);
        }
        graphs.push(addGraph(divId, "histogram", METRIC_TYPE.TIMER, metricName, title,
            description, histLegend, METRIC_TYPE.TIMER.xLabel, METRIC_TYPE.TIMER.yLabel,
            "duration_units", false));

        var freqLegend = [];
        for (key in timerFrequencyLegendMap) {
            value = timerFrequencyLegendMap[key];
            freqLegend.push(value);
        }
        graphs.push(addGraph(divId, "frequency", METRIC_TYPE.TIMER, metricName, title,
            description, freqLegend, METRIC_TYPE.TIMER.xLabel, METRIC_TYPE.TIMER.yLabel,
            "rate_units", false));
    };

    /**
     * Create a metric viewer to display a metric property of type 'time'.
     * @function
     * @name metricsViewer#addTimerWithProperty
     *
     * @param {string} divId the id of the HTML division tag where the metric chart will be displayed
     * @param {string} title the title of the chart
     * @param {string} description the description of the chart
     * @param {string} metricName the qualified name of the metric
     * @param {string} property the name of the metric property to be displayed
     */
    metricsViewer.addTimerWithProperty = function (divId, title, description, metricName, property) {
        var data;
        var legend = [];

        if (timerDurationLegendMap[property]) {
            data = timerDurationLegendMap[property];
            legend.push(data);
            graphs.push(addGraph(divId, "duration", METRIC_TYPE.TIMER, metricName, title,
                description, legend, METRIC_TYPE.TIMER.xLabel, METRIC_TYPE.TIMER.yLabel,
                "duration_units", false));
        } else if (timerHistogramLegendMap[property]) {
            data = timerHistogramLegendMap[property];
            legend.push(data);
            graphs.push(addGraph(divId, "histogram", METRIC_TYPE.TIMER, metricName, title,
                description, legend, METRIC_TYPE.TIMER.xLabel, METRIC_TYPE.TIMER.yLabel,
                "duration_units", false));
        } else if (timerFrequencyLegendMap[property]) {
            data = timerFrequencyLegendMap[property];
            legend.push(data);
            graphs.push(addGraph(divId, "frequency", METRIC_TYPE.TIMER, metricName, title,
                description, legend, METRIC_TYPE.TIMER.xLabel, METRIC_TYPE.TIMER.yLabel,
                "rate_units", false));
        }
    };

    /**
     * Create a metric viewer to display the JVM metrics. It displays the following line charts:
     *
     * <ul>
     *   <li>Memory usage</li>
     *   <li>Heap usage</li>
     *   <li>Eden space usage</li>
     *   <li>Survivor space usage</li>
     *   <li>Old Gen usage</li>
     *   <li>Thread usage</li>
     * </ul>
     *
     * @function
     * @name metricsViewer#addJvm
     *
     * @param {string} divId the id of the HTML division tag where the metric chart will be displayed
     * @param {string} title the title of the chart
     * @param {string} description the description of the chart
     */
    metricsViewer.addJvm = function (divId, title, description) {
        var memGraphs = ["total", "heap"];
        for (var m = 0; m < memGraphs.length; m++) {
            var memLegend = [];
            memLegend.push(new LegendData(capitalizeFirstLetter(memGraphs[m]) + " Init", "value",
                "jvm.memory." + memGraphs[m] + ".init", null));
            memLegend.push(new LegendData(capitalizeFirstLetter(memGraphs[m]) + " Used", "value",
                "jvm.memory." + memGraphs[m] + ".used", null));
            memLegend.push(new LegendData(capitalizeFirstLetter(memGraphs[m]) + " Max", "value",
                "jvm.memory." + memGraphs[m] + ".max", null));
            memLegend.push(new LegendData(capitalizeFirstLetter(memGraphs[m]) + " Committed", "value",
                "jvm.memory." + memGraphs[m] + ".committed", null));
            graphs.push(addGraph(divId, memGraphs[m], METRIC_TYPE.GAUGE, "metricName", title,
                description, memLegend, METRIC_TYPE.GAUGE.xLabel, "usage", null, true));
        }

        var gcGraphs = ["Eden-Space", "Survivor-Space", "Old-Gen"];
        for (var i = 0; i < gcGraphs.length; i++) {
            var gcLegend = [];
            gcLegend.push(new LegendData(gcGraphs[i] + " Init", "value",
                "jvm.memory.pools.PS-" + gcGraphs[i] + ".init",
                "jvm.memory.pools.Par-" + gcGraphs[i] + ".init"));
            gcLegend.push(new LegendData(gcGraphs[i] + " Used", "value",
                "jvm.memory.pools.PS-" + gcGraphs[i] + ".used",
                "jvm.memory.pools.Par-" + gcGraphs[i] + ".used"));
            gcLegend.push(new LegendData(gcGraphs[i] + " Max", "value",
                "jvm.memory.pools.PS-" + gcGraphs[i] + ".max",
                "jvm.memory.pools.Par-" + gcGraphs[i] + ".max"));
            gcLegend.push(new LegendData(gcGraphs[i] + " Committed", "value",
                "jvm.memory.pools.PS-" + gcGraphs[i] + "-.committed",
                "jvm.memory.pools.Par-" + gcGraphs[i] + "-.committed"));
            graphs.push(addGraph(divId, gcGraphs[i], METRIC_TYPE.GAUGE, "metricName", title,
                description, gcLegend, METRIC_TYPE.GAUGE.xLabel, "usage", null, true));
        }

        var threadLegend = [];
        threadLegend.push(new LegendData("Daemon Threads", "value", "jvm.thread-states.daemon.count", null));
        threadLegend.push(new LegendData("Deadlocks", "value", "jvm.thread-states.deadlock.count", null));
        threadLegend.push(new LegendData("Terminated", "value", "jvm.thread-states.terminated.count", null));
        threadLegend.push(new LegendData("Timed Waiting", "value", "jvm.thread-states.timed_waiting.count", null));
        threadLegend.push(new LegendData("Blocked", "value", "jvm.thread-states.blocked.count", null));
        threadLegend.push(new LegendData("Waiting", "value", "jvm.thread-states.waiting.count", null));
        threadLegend.push(new LegendData("Runnable", "value", "jvm.thread-states.runnable.count", null));
        threadLegend.push(new LegendData("New", "value", "jvm.thread-states.new.count", null));
        graphs.push(addGraph(divId, "thread", METRIC_TYPE.GAUGE, "metricName", title,
            description, threadLegend, METRIC_TYPE.GAUGE.xLabel, "count", null, true));
    };

    /**
     * Initializes the metric viewer
     * @function
     * @name metricsViewer#init
     */
    metricsViewer.init = function () {
        for (var i = 0; i < graphs.length; i++) {
            graphs[i].render();
        }
    };

    /**
     * Refreshes the metric view with new data. Each metric is cashed up to the 100 metric points. Older metrics are
     * removed once it reaches the threshold.
     * @function
     * @name metricsViewer#refresh
     *
     * @param {string} json the metric data in json format
     */
    metricsViewer.refresh = function (json) {
        var date = new Date();
        for (var i = 0; i < graphs.length; i++) {
            refreshGraph(graphs[i], date, json);
        }
    };

    /**
     * Clears all the graphs from the metrics viewer
     * @function
     * @name metricsViewer#clear
     */
    metricsViewer.clear = function () {
        while(graphs.length) {
            var graph = graphs.pop();

            $(graph.divId).empty();
            delete graph.divId;

            graph.values.clear();
            delete graph.values;

            graph.legendData.clear();
            delete graph.legendData;

            graph = undefined;
        }
    };

    Array.prototype.clear = function() {
        while (this.length) {
            this.pop();
        }
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // PRIVATE FUNCTIONS
    //////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Types of metrics
     * @readonly
     * @enum {Object}
     *
     */
    var METRIC_TYPE = {
        COUNTER: {type: "counters", xLabel: "time", yLabel: "count"},
        GAUGE: {type: "gauges", xLabel: "time", yLabel: "value"},
        METER: {type: "meters", xLabel: "time", yLabel: ""},
        TIMER: {type: "timers", xLabel: "time", yLabel: ""}
    };
    Object.freeze(METRIC_TYPE);

    /**
     * The size of metric queue
     * @type {number}
     */
    var QUEUE_SIZE = 100;
    Object.freeze(QUEUE_SIZE);

    /**
     * The width of the metric chart area
     * @type {number}
     */
    var CHART_WIDTH = 650;
    Object.freeze(CHART_WIDTH);

    /**
     * The height of the metric chart area
     * @type {number}
     */
    var CHART_HEIGHT = 250;
    Object.freeze(CHART_HEIGHT);

    /**
     * The ratio to which the height of the metric chart area needs
     * to be increased to accommodate legend area
     * @type {number}
     */
    var CHART_HEIGHT_RATIO = 1.2;
    Object.freeze(CHART_HEIGHT_RATIO);

    /**
     * Size of left margin of charge
     * @type {number}
     */
    var LEFT_MARGIN = 120;
    Object.freeze(LEFT_MARGIN);

    /**
     * Size of right margin of charge
     * @type {number}
     */
    var RIGHT_MARGIN = 90;
    Object.freeze(RIGHT_MARGIN);

    /**
     * Size of bottom margin of charge
     * @type {number}
     */
    var BOTTOM_MARGIN = 50;
    Object.freeze(BOTTOM_MARGIN);

    /**
     * Maps meter metric property to legend
     */
    var meterLegendMap = {};
    meterLegendMap["count"] = new LegendData("Count", "count", null, null);
    meterLegendMap["m1_rate"] = new LegendData("1 min", "m1_rate", null, null);
    meterLegendMap["m5_rate"] = new LegendData("5 min", "m5_rate", null, null);
    meterLegendMap["m15_rate"] = new LegendData("15 min", "m15_rate", null, null);
    meterLegendMap["mean_rate"] = new LegendData("Mean", "mean_rate", null, null);
    Object.freeze(meterLegendMap);

    /**
     * Maps timer duration metric property to legend
     */
    var timerDurationLegendMap = {};
    timerDurationLegendMap["count"] = new LegendData("Count", "count", null, null);
    timerDurationLegendMap["min"] = new LegendData("Min", "min", null, null);
    timerDurationLegendMap["mean"] = new LegendData("Mean", "mean", null, null);
    timerDurationLegendMap["max"] = new LegendData("Max", "max", null, null);
    timerDurationLegendMap["stddev"] = new LegendData("Std. dev", "stddev", null, null);
    timerDurationLegendMap["p50"] = new LegendData("Median", "p50", null, null);
    Object.freeze(timerDurationLegendMap);

    /**
     * Maps timer histogram metric property to legend
     */
    var timerHistogramLegendMap = {};
    timerHistogramLegendMap["p999"] = new LegendData("99.9%", "p999", null, null);
    timerHistogramLegendMap["p99"] = new LegendData("99%", "p99", null, null);
    timerHistogramLegendMap["p98"] = new LegendData("98%", "p98", null, null);
    timerHistogramLegendMap["p95"] = new LegendData("95%", "p95", null, null);
    timerHistogramLegendMap["p75"] = new LegendData("75%", "p75", null, null);
    Object.freeze(timerHistogramLegendMap);

    /**
     * Maps timer frequency metric property to legend
     */
    var timerFrequencyLegendMap = {};
    timerFrequencyLegendMap["m1_rate"] = new LegendData("1 min", "m1_rate", null, null);
    timerFrequencyLegendMap["m5_rate"] = new LegendData("5 min", "m5_rate", null, null);
    timerFrequencyLegendMap["m15_rate"] = new LegendData("15 min", "m15_rate", null, null);
    timerFrequencyLegendMap["mean_rate"] = new LegendData("Mean", "mean_rate", null, null);
    Object.freeze(timerFrequencyLegendMap);

    /**
     * A cache of graph that will be displayed in a page
     * @type {Array}
     */
    var graphs = [];

    /**
     * Represents a metric data point
     * @param {Date} date the time of the metric
     * @param {number} value the value of the metric
     * @constructor
     */
    function MetricData(date, value) {
        this.date = new Date(date.valueOf());
        this.value = value;
    }

    /**
     * The data used to display the metric chart legend.
     *
     * @param {string} legend the name of the legend
     * @param {string} key the metric key for the metric value
     * @param {string|?} metricName the metric name if each line has a different metric source, otherwise null
     * @param {string|null} altMetricName the alternate metric if the metric name is specified. It is used for look up
     * when the metric doesn't exist for the provided metric name
     * @constructor
     */
    function LegendData(legend, key, metricName, altMetricName) {
        this.legend = legend;
        this.key = key;
        this.metricName = metricName;
        this.altMetricName = altMetricName;
    }

    /**
     * The metric configuration which holds the chart properties and the data.
     *
     * @param {string} divId the id of the HTML division tag where the metric chart will be displayed
     * @param {string} childDiv the name of the child division tag which will be created dynamically. Used for displaying
     * multiple charts on a same division tag
     * @param {METRIC_TYPE} metricType the type of metric class.
     * @param {string} metricName the name of the metric
     * @param {string} title the title of the chart
     * @param {string} description the description of the chart
     * @param {Array.<Array.<MetricData>>} values an array containing the initial metric values
     * @param {Array.<LegendData>} legendData an array of legend data.
     * @param {string} x_label the label for x-axis
     * @param {string} y_label the label for y-axis
     * @param {string|null} y_label_key the key for y-axis. If the value is not null, the y-axis label will be dynamically set
     * by looking up the value in the metric node.
     * @param {boolean} ignoreMetricName if the vale is set to true, use the metric name from the legend data.
     * See @code{LegendData}.
     * @constructor
     */
    function MetricConfig(divId, childDiv, metricType, metricName, title, description, values, legendData,
                          x_label, y_label, y_label_key, ignoreMetricName) {
        this.divId = divId;
        this.childDiv = childDiv;
        this.metricType = metricType;
        this.metricName = metricName;
        this.title = title;
        this.description = description;
        this.values = values;
        this.legendData = legendData;
        this.legend = [];
        this.x_label = x_label;
        this.y_label = y_label;
        this.y_label_key = y_label_key;
        this.legendDivId = null;
        this.ignoreMetricName = ignoreMetricName;
        this.initialized = false;

        for (var i = 0; i < this.legendData.length; i++) {
            this.legend.push(this.legendData[i].legend);
        }

        /**
         * Renders the metric graph.
         */
        this.render = function render() {
            var containerId = null;
            if (!this.initialized) {
                //if the div is not initialized, create a title header
                //and add a container div with a border
                if ($(this.divId).is(':empty')) {
                    var $h3 = $('<h3>').text(this.title);
                    $(this.divId).append($h3);

                    var $hr = $('<hr>').addClass('mv-title-hr');
                    $(this.divId).append($hr);

                    containerId = getChildDivId(this.divId, "container");
                    var $containerDiv = $("<div></div>").attr('id', containerId).addClass('mv-outer');
                    $(this.divId).append($containerDiv);
                    this.divId = document.getElementById(containerId);
                } else {
                    containerId = getChildDivId(this.divId, "container");
                    this.divId = document.getElementById(containerId);
                }

                //if there is a child chart, create a separate
                //div to hold the chart
                if (this.childDiv) {
                    var childDivId = getChildDivId(this.divId, this.childDiv);
                    var $childDiv = $("<div></div>").attr('id', childDivId).addClass('mv-inner');
                    $($childDiv).css("width", CHART_WIDTH).css("height", CHART_HEIGHT * CHART_HEIGHT_RATIO);
                    $(this.divId).append($childDiv);
                    this.title = capitalizeFirstLetter(this.childDiv);

                    var chartDivId = getChildDivId(childDivId, "chart");
                    var $chartDiv = $("<div></div>").attr('id', chartDivId);
                    $($childDiv).append($chartDiv);

                    //create a legend div and make it a child
                    //of the child div. Legend div displays the
                    //legend while the chart is displayed in the child div
                    var legDivId = getChildDivId(childDivId, "legend");
                    var $legDiv = $("<div></div>").attr('id', legDivId).addClass('mv-legend');
                    $($childDiv).append($legDiv);

                    this.legendDivId = document.getElementById(legDivId);
                    this.divId = document.getElementById(chartDivId);
                }
                this.initialized = true;
            }

            $(this.divId).empty();

            //call the metric graphics to create the line chart
            MG.data_graphic({
                title: this.title,
                description: this.description,
                //animate_on_load: true,
                area: false,
                data: this.values,
                width: CHART_WIDTH,
                height: CHART_HEIGHT,
                target: this.divId,
                x_accessor: "date",
                y_accessor: "value",
                x_label: this.x_label,
                y_label: this.y_label,
                x_extended_ticks: true,
                y_extended_ticks: true,
                right: RIGHT_MARGIN,
                left: LEFT_MARGIN,
                bottom: BOTTOM_MARGIN,
                legend: this.legend,
                legend_target: this.legendDivId,
                mouseover: function(d, i) {
                    var format = d3.timeFormat("%b %d, %Y %H:%M:%S %p");
                    d3.select(this.divId + ' svg .mg-active-datapoint')
                        .text(format(d.date));
                }
            });
        };

        /**
         * Refreshes the metric graph. It is called every new metric data is received.
         * @param {string} x_label the updated x-axis label
         * @param {string} y_label the updated y-axis label
         */
        this.refresh = function update(x_label, y_label) {
            this.x_label = x_label;
            this.y_label = y_label;
            this.render();
        };

        /**
         * Creates a child HTML division tag id from a parent diviison tag
         * @param {Object|string} parentDiv the parent division tag
         * @param {string} child the child division suffix which is appended at to the parent div id
         * @returns {string} the child div id
         */
        function getChildDivId(parentDiv, child) {
            var prefix = null;

            if (parentDiv instanceof HTMLElement) {
                prefix = parentDiv.id;
            } else {
                prefix = parentDiv;
                var indexAt0 = parentDiv.charAt(0);
                if (indexAt0 === "#") {
                    prefix = parentDiv.substring(1);
                }
            }
            return prefix + "." + child;
        }
    }

    /**
     * Creates a new metric viewer graph and and add to graph cache.
     *
     * @param {string} divId the id of the HTML division tag where the metric chart will be displayed
     * @param {string} childDiv the name of the child division tag which will be created dynamically. Used for displaying
     * multiple charts on a same division tag
     * @param {METRIC_TYPE} metricType the type of metric class
     * @param {string} metricName the name of the metric
     * @param {string} title the title of the chart
     * @param {string} description the description of the chart
     * @param {Array.<LegendData>} legend an array of legend data.
     * @param {string} x_label the label for x-axis
     * @param {string} y_label the label for y-axis
     * @param {string|null} y_label_key the key for y-axis. If the value is not null, the y-axis label will be dynamically set
     * by looking up the value in the metric node.
     * @param {boolean} ignoreMetricName if the vale is set to true, use the metric name from the legend data.
     *
     * @returns {MetricConfig}
     */
    function addGraph(divId, childDiv, metricType, metricName, title, description, legend,
                      x_label, y_label, y_label_key, ignoreMetricName) {
        var values = [];
        for (var i = 0; i < legend.length; i++) {
            values[i] = [];
            values[i].push(new MetricData(new Date(), 0));
        }

        return new MetricConfig(divId, childDiv, metricType, metricName, title,
            description, values, legend, x_label, y_label, y_label_key, ignoreMetricName);
    }

    /**
     * Refreshes the metric viewer with new data.
     *
     * @param {MetricConfig} config representing one metric viewer chart
     * @param {Date} date the time at which the metric was received by the Metric Viewer
     * @param json the metric data in JSON format
     */
    function refreshGraph(config, date, json) {
        var metricData = null;
        var x_label = config.x_label;
        var y_label = config.y_label;

        if (config.ignoreMetricName) {
            for (var i = 0; i < config.legendData.length; i++) {
                metricData = getMetricNode(json, config.metricType.type,
                    config.legendData[i].metricName, config.legendData[i].altMetricName);

                updateMetric(metricData, config.legendData[i].key, date, config.values[i]);
            }
        } else {
            metricData = getMetricNode(json, config.metricType.type, config.metricName, null);
            for (var j = 0; j < config.legendData.length; j++) {
                updateMetric(metricData, config.legendData[j].key, date, config.values[j]);
            }

            if (metricData && config.y_label_key) {
                try {
                    y_label = metricData[config.y_label_key];
                } catch (err) {
                    //do nothing
                }
            }
        }

        config.refresh(x_label, y_label);
    }

    /**
     * Creates a metric data point and pushes into data cache of the particular metric. If the cache gets bigger than
     * QUEUE_SIZE, the old data is trimmed
     * @param metricData the metric data containing value(s)
     * @param {string} key the key of the metric
     * @param {Date} date the time at which the metric was received by the Metric Viewer
     * @param {Array.<MetricData>} container the metric data cache/array
     */
    function updateMetric(metricData, key, date, container) {
        var val = 0;
        if (metricData) {
            val = getValue(metricData, key);
        }

        var data = new MetricData(date, val);
        container.push(data);

        while (container.length > QUEUE_SIZE) {
            container.shift();
        }
    }

    /**
     * Retrieves a metric JSON node from metric JSON array
     *
     * @param jsonRoot all the metric data
     * @param {METRIC_TYPE} metricType the metric class type
     * @param {string} metricName the metric name
     * @param {string|null} altMetricName the alternate metric name
     *
     * @returns the metric JSON node
     */
    function getMetricNode(jsonRoot, metricType, metricName, altMetricName) {
        var metricNode = null;
        if (jsonRoot[metricType]) {
            metricNode = jsonRoot[metricType][metricName];
            if (!metricNode && altMetricName) {
                metricNode = jsonRoot[metricType][altMetricName];
            }
        }
        return metricNode;
    }

    /**
     * Retrieves the vale of a metric
     * @param metricData the metric JSON data
     * @param {string} key the metric key
     *
     * @returns {number} the value of the metric; zero if missing
     */
    function getValue(metricData, key) {
        var value = 0;
        try {
            if (metricData[key]) {
                value = formatNumber(metricData[key], 4);
            }
        } catch (err) {
            //do nothing
        }
        return value;
    }

    /**
     * Formats a number with the provided precision
     * @param {number} number the number to be formatted
     * @param {number} precision the number of decimal places
     * @returns {number} the formatted number
     */
    function formatNumber(number, precision) {
        if (!precision) {
            precision = 4;
        }

        var factor = Math.pow(10, precision);
        var tempNumber = number * factor;
        var roundedTempNumber = Math.round(tempNumber);

        return roundedTempNumber / factor;
    }

    /**
     * Capitalizes the first letter of a string
     * @param {string} str the string whose first letter to be capitalized
     * @returns {string} the updated string
     */
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

}(window.metricsViewer = window.metricsViewer || {}, jQuery));
return metricsViewer;
}));
