module('metricsviewer');

test('Counter Viewer container div is added', function () {
    metricsViewer.addCounter('#qunit-fixture', "Counter Metrics Viewer Example",
        "Metric Viewer Example of Counter Metrics", "counter.test.metric.a");

    metricsViewer.init();
    ok(document.getElementById('qunit-fixture.container'),
        'Counter Viewer container div is added');
});

test('Counter Viewer chart div is added', function () {
    metricsViewer.addCounter('#qunit-fixture', "Counter Metrics Viewer Example",
        "Metric Viewer Example of Counter Metrics", "counter.test.metric.a");

    metricsViewer.init();
    ok(document.getElementById('qunit-fixture.container.counter.chart'),
        'Counter Viewer container div is added');
});

test('Counter Viewer legend div is added', function () {
    metricsViewer.addCounter('#qunit-fixture', "Counter Metrics Viewer Example",
        "Metric Viewer Example of Counter Metrics", "counter.test.metric.a");

    metricsViewer.init();
    ok(document.getElementById('qunit-fixture.container.counter.legend'),
        'Counter Viewer legend div is added');
});

/////////////////

test('Multi Counter Viewer container div is added', function () {
    metricsViewer.addMultiCounter('#qunit-fixture', "Multi Counter Metrics Viewer Example",
        "Metric Viewer Example of Multi Counter Metrics",
        ["counter.test.metric.a", "counter.test.metric.a"]);

    metricsViewer.init();
    ok(document.getElementById('qunit-fixture.container'),
        'Multi Counter Viewer container div is added');
});

test('Multi Counter Viewer chart div is added', function () {
    metricsViewer.addMultiCounter('#qunit-fixture', "Multi Counter Metrics Viewer Example",
        "Metric Viewer Example of Multi Counter Metrics",
        ["counter.test.metric.a", "counter.test.metric.a"]);

    metricsViewer.init();
    ok(document.getElementById('qunit-fixture.container.counter.chart'),
        'Multi Counter Viewer container div is added');
});

test('Multi Counter Viewer legend div is added', function () {
    metricsViewer.addMultiCounter('#qunit-fixture', "Multi Counter Metrics Viewer Example",
        "Metric Viewer Example of MultiCounter Metrics",
        ["counter.test.metric.a", "counter.test.metric.a"]);

    metricsViewer.init();
    ok(document.getElementById('qunit-fixture.container.counter.legend'),
        'Multi Counter Viewer legend div is added');
});

/////////////////

test('Gauge Viewer container div is added', function () {
    metricsViewer.addGauge('#qunit-fixture', "Gauge Metrics Viewer Example",
        "Metric Viewer Example of Gauge Metrics", "gauge.test.metric.a");

    metricsViewer.init();
    ok(document.getElementById('qunit-fixture.container'),
        'Gauge Viewer container div is added');
});

test('Gauge Viewer chart div is added', function () {
    metricsViewer.addGauge('#qunit-fixture', "Gauge Metrics Viewer Example",
        "Metric Viewer Example of Gauge Metrics", "gauge.test.metric.a");

    metricsViewer.init();
    ok(document.getElementById('qunit-fixture.container.gauge.chart'),
        'Gauge Viewer chart div is added');
});

test('Gauge Viewer legend div is added', function () {
    metricsViewer.addGauge('#qunit-fixture', "Gauge Metrics Viewer Example",
        "Metric Viewer Example of Gauge Metrics", "gauge.test.metric.a");

    metricsViewer.init();
    ok(document.getElementById('qunit-fixture.container.gauge.legend'),
        'Gauge Viewer legend div is added');
});

/////////////////

test('Multi Gauge Viewer container div is added', function () {
    metricsViewer.addMultiGauge('#qunit-fixture', "Multi Gauge Metrics Viewer Example",
        "Metric Viewer Example of Multi Gauge Metrics",
        ["gauge.test.metric.a", "gauge.test.metric.b"]);

    metricsViewer.init();
    ok(document.getElementById('qunit-fixture.container'),
        'Multi Gauge Viewer container div is added');
});

test('Multi Gauge Viewer chart div is added', function () {
    metricsViewer.addMultiGauge('#qunit-fixture', "Multi Gauge Metrics Viewer Example",
        "Metric Viewer Example of Gauge Metrics",
        ["gauge.test.metric.a", "gauge.test.metric.b"]);

    metricsViewer.init();
    ok(document.getElementById('qunit-fixture.container.gauge.chart'),
        'Multi Gauge Viewer chart div is added');
});

test('Multi Gauge Viewer legend div is added', function () {
    metricsViewer.addMultiGauge('#qunit-fixture', "Multi Gauge Metrics Viewer Example",
        "Metric Viewer Example of Multi Gauge Metrics",
        ["gauge.test.metric.a", "gauge.test.metric.b"]);

    metricsViewer.init();
    ok(document.getElementById('qunit-fixture.container.gauge.legend'),
        'Multi Gauge Viewer legend div is added');
});

/////////////////

test('Meter Viewer container div is added', function () {
    metricsViewer.addMeter('#qunit-fixture', "Meter Metrics Viewer Example",
        "Metric Viewer Example of Meter Metrics", "meter.test.metric.a");

    metricsViewer.init();
    ok(document.getElementById('qunit-fixture.container'),
        'Meter Viewer container div is added');
});

test('Meter Viewer chart div is added', function () {
    metricsViewer.addMeter('#qunit-fixture', "Meter Metrics Viewer Example",
        "Metric Viewer Example of Meter Metrics", "meter.test.metric.a");

    metricsViewer.init();
    ok(document.getElementById('qunit-fixture.container.meter.chart'),
        'Meter Viewer chart div is added');
});

test('Meter Viewer legend div is added', function () {
    metricsViewer.addMeter('#qunit-fixture', "Meter Metrics Viewer Example",
        "Metric Viewer Example of Meter Metrics", "meter.test.metric.a");

    metricsViewer.init();
    ok(document.getElementById('qunit-fixture.container.meter.legend'),
        'Meter Viewer legend div is added');
});

/////////////////

test('Timer Viewer container div is added', function () {
    metricsViewer.addTimer('#qunit-fixture', "Timer Metrics Viewer Example",
        "Metric Viewer Example of Timer Metrics", "timer.test.metric.a");

    metricsViewer.init();
    ok(document.getElementById('qunit-fixture.container'),
        'Timer Viewer container div is added');
});

test('Timer Viewer multiple chart div are added', function () {
    metricsViewer.addTimer('#qunit-fixture', "Timer Metrics Viewer Example",
        "Metric Viewer Example of Timer Metrics", "timer.test.metric.a");

    metricsViewer.init();
    equal(document.getElementById('qunit-fixture.container').childNodes.length, 3,
        'Timer Viewer multiple chart div are added');
});

/////////////////

test('JVM Viewer container div is added', function () {
    metricsViewer.addJvm('#qunit-fixture', "JVM Metrics Viewer Example",
        "Metric Viewer Example of JVM Metrics");

    metricsViewer.init();
    ok(document.getElementById('qunit-fixture.container'),
        'JVM Viewer container div is added');
});

test('JVM Viewer multiple chart div are added', function () {
    metricsViewer.addJvm('#qunit-fixture', "JVM Metrics Viewer Example",
        "Metric Viewer Example of JVM Metrics");

    metricsViewer.init();
    equal(document.getElementById('qunit-fixture.container').childNodes.length, 6,
        'JVM Viewer multiple chart div are added');
});