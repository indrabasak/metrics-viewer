/**
 * @fileoverview Definitions for the D3.js library, based on the D3 API
 * reference at https://github.com/d3/d3/blob/master/API.md
 *
 * Some definitions had to be dumbed down, because of Closure Compiler's
 * limited support for function properties, overloads and tuples.
 * A complete list of TypeScript definitions is available at
 * https://github.com/tomwanzek/d3-v4-definitelytyped/tree/master/src
 *
 * Usage examples can be found at http://blockbuilder.org/search#d3version=v4
 *
 * Author: Peter Pallos
 *
 * @externs
 */

var d3 = {};

/**
 * @type {string}
 */
d3.version;

////////////////////////////////////////////////////////////////////////////////
// Common types
////////////////////////////////////////////////////////////////////////////////

/**
 * @record
 * @template NodeType
 */
d3.Link = function() {};

/**
 * @type {NodeType}
 */
d3.Link.prototype.source;

/**
 * @type {NodeType}
 */
d3.Link.prototype.target;

////////////////////////////////////////////////////////////////////////////////
// Arrays
// https://github.com/d3/d3-array
////////////////////////////////////////////////////////////////////////////////

// API Reference

// Statistics

/**
 * TODO(pallosp): Narrow down opt_accessor's type when
 *     https://github.com/google/closure-compiler/issues/2052 is fixed.
 * @param {!Array} array
 * @param {?Function=} opt_accessor
 */
d3.min = function(array, opt_accessor) {};

/**
 * @param {!Array} array
 * @param {?Function=} opt_accessor
 */
d3.max = function(array, opt_accessor) {};

/**
 * @param {!Array} array
 * @param {?Function=} opt_accessor
 */
d3.extent = function(array, opt_accessor) {};

/**
 * @param {!Array} array
 * @param {?Function=} opt_accessor
 * @return {number}
 */
d3.sum = function(array, opt_accessor) {};

/**
 * @param {!Array} array
 * @param {?Function=} opt_accessor
 * @return {number | undefined}
 */
d3.mean = function(array, opt_accessor) {};

/**
 * @param {!Array} array
 * @param {?Function=} opt_accessor
 * @return {number | undefined}
 */
d3.median = function(array, opt_accessor) {};

/**
 * @param {!Array} array
 * @param {number} p
 * @param {?Function=} opt_accessor
 * @return {number | undefined}
 */
d3.quantile = function(array, p, opt_accessor) {};

/**
 * @param {!Array} array
 * @param {?Function=} opt_accessor
 * @return {number | undefined}
 */
d3.variance = function(array, opt_accessor) {};

/**
 * @param {!Array} array
 * @param {?Function=} opt_accessor
 * @return {number | undefined}
 */
d3.deviation = function(array, opt_accessor) {};

// Search

/**
 * @param {!Array<T>} array
 * @param {function(T, T): number=} opt_comparator
 * @return {number}
 * @template T
 */
d3.scan = function(array, opt_comparator) {};

/**
 * @param {!Array<T>} array
 * @param {T} x
 * @param {number=} opt_lo
 * @param {number=} opt_hi
 * @return {number}
 * @template T
 */
d3.bisectLeft = function(array, x, opt_lo, opt_hi) {};

/**
 * @param {!Array<T>} array
 * @param {T} x
 * @param {number=} opt_lo
 * @param {number=} opt_hi
 * @return {number}
 * @template T
 */
d3.bisect = function(array, x, opt_lo, opt_hi) {};

/**
 * @param {!Array<T>} array
 * @param {T} x
 * @param {number=} opt_lo
 * @param {number=} opt_hi
 * @return {number}
 * @template T
 */
d3.bisectRight = function(array, x, opt_lo, opt_hi) {};

/**
 * @param {!Function} accessorOrComparator
 * @return {{
 *   left: function(!Array, ?, number=, number=): number,
 *   right: function(!Array, ?, number=, number=): number
 * }}
 */
d3.bisector = function(accessorOrComparator) {};

/**
 * @param {?} a
 * @param {?} b
 * @return {number}
 */
d3.ascending = function(a, b) {};

/**
 * @param {?} a
 * @param {?} b
 * @return {number}
 */
d3.descending = function(a, b) {};

// Transformations

/**
 * @param {!Array<T>} a
 * @param {!Array<U>} b
 * @param {function(T, U)=} opt_reducer
 * @return {!Array}
 * @template T, U
 */
d3.cross = function(a, b, opt_reducer) {};

/**
 * @param {!Array<!Array<T>>} arrays
 * @return {!Array<T>}
 * @template T
 */
d3.merge = function(arrays) {};

/**
 * @param {!Array<T>} array
 * @param {function(T, T)=} opt_reducer
 * @return {!Array<!Array>}
 * @template T
 */
d3.pairs = function(array, opt_reducer) {};

/**
 * @param {!Object<K, V>} arrayOrMap
 * @param {!Array<K>} indexes
 * @return {!Array<V>}
 * @template K, V
 */
d3.permute = function(arrayOrMap, indexes) {};

/**
 * @param {!Array<T>} array
 * @param {number=} opt_lo
 * @param {number=} opt_hi
 * @return {!Array<T>}
 * @template T
 */
d3.shuffle = function(array, opt_lo, opt_hi) {};

/**
 * @param {number} start
 * @param {number} stop
 * @param {number} count
 * @return {!Array<number>}
 */
d3.ticks = function(start, stop, count) {};

/**
 * @param {number} start
 * @param {number} stop
 * @param {number} count
 * @return {number}
 */
d3.tickStep = function(start, stop, count) {};

/**
 * @param {number} startOrStop
 * @param {number=} opt_stop
 * @param {number=} opt_step
 * @return {!Array<number>}
 */
d3.range = function(startOrStop, opt_stop, opt_step) {};

/**
 * @param {!Array<!Array<T>>} matrix
 * @return {!Array<!Array<T>>}
 * @template T
 */
d3.transpose = function(matrix) {};

/**
 * @param {...!Array<T>} var_args
 * @return {!Array<!Array<T>>}
 * @template T
 */
d3.zip = function(var_args) {};

// Histograms

/**
 * @return {!d3.Histogram}
 */
d3.histogram = function() {};

/**
 * @typedef {function(!Array<number>): !Array<!Array<number>>}
 */
d3.Histogram;

/**
 * @private {!d3.Histogram}
 */
d3.Histogram_;

/**
 * @param {function(T, number, !Array<T>): (number | !Date)=} opt_value
 * @template T
 */
d3.Histogram_.value = function(opt_value) {};

/**
 * @param {!Array<number | !Date> |
 *     function(!Array): !Array<number | !Date>=} opt_domain
 */
d3.Histogram_.domain = function(opt_domain) {};

/**
 * @param {number | !Array<number | !Date> | function(!Array, ?, ?)=}
 *     opt_countOrThresholds
 */
d3.Histogram_.thresholds = function(opt_countOrThresholds) {};

// Histogram Thresholds

/**
 * @param {!Array<number>} values
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
d3.thresholdFreedmanDiaconis = function(values, min, max) {};

/**
 * @param {!Array<number>} values
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
d3.thresholdScott = function(values, min, max) {};

/**
 * @param {!Array<number>} values
 * @return {number}
 */
d3.thresholdSturges = function(values) {};

////////////////////////////////////////////////////////////////////////////////
// Axes
// https://github.com/d3/d3-axis
////////////////////////////////////////////////////////////////////////////////

/**
 * @param {function(?): ?} scale
 * @return {!d3.Axis}
 */
d3.axisTop = function(scale) {};

/**
 * @param {function(?): ?} scale
 * @return {!d3.Axis}
 */
d3.axisRight = function(scale) {};

/**
 * @param {function(?): ?} scale
 * @return {!d3.Axis}
 */
d3.axisBottom = function(scale) {};

/**
 * @param {function(?): ?} scale
 * @return {!d3.Axis}
 */
d3.axisLeft = function(scale) {};

/**
 * @typedef {function(!(d3.selection | d3.transition))}
 */
d3.Axis;

/**
 * @private {!d3.Axis}
 */
d3.Axis_;

/**
 * @param {function(?): ?=} opt_scale
 */
d3.Axis_.scale = function(opt_scale) {};

/**
 * @param {?} countOrIntervalOrAny
 * @param {...?} var_args
 * @return {!d3.Axis}
 */
d3.Axis_.ticks = function(countOrIntervalOrAny, var_args) {};

/**
 * @param {!Array=} opt_arguments
 */
d3.Axis_.tickArguments = function(opt_arguments) {};

/**
 * @param {?Array=} opt_values
 */
d3.Axis_.tickValues = function(opt_values) {};

/**
 * @param {?function(?): string=} opt_format
 */
d3.Axis_.tickFormat = function(opt_format) {};

/**
 * @param {number=} opt_size
 */
d3.Axis_.tickSize = function(opt_size) {};

/**
 * @param {number=} opt_size
 */
d3.Axis_.tickSizeInner = function(opt_size) {};

/**
 * @param {number=} opt_size
 */
d3.Axis_.tickSizeOuter = function(opt_size) {};

/**
 * @param {number=} opt_padding
 */
d3.Axis_.tickPadding = function(opt_padding) {};

////////////////////////////////////////////////////////////////////////////////
// Brushes
// https://github.com/d3/d3-brush
////////////////////////////////////////////////////////////////////////////////

// API Reference

/**
 * @return {!d3.Brush}
 */
d3.brush = function() {};

/**
 * @return {!d3.Brush}
 */
d3.brushX = function() {};

/**
 * @return {!d3.Brush}
 */
d3.brushY = function() {};

/**
 * @typedef {function(!d3.selection)}
 */
d3.Brush;

/**
 * @private {!d3.Brush}
 */
d3.Brush_;

/**
 * @param {!(d3.selection | d3.transition)} group
 * @param {!d3.BrushSelection |
 *     function(this:Element, T, number, !Array<T>): !d3.BrushSelection}
 *     selection
 * @return {void}
 * @template T
 */
d3.Brush_.move = function(group, selection) {};

/**
 * @param {!Array<!Array<number>> |
 *     function(this:Element, T, number, !Array<T>): !Array<!Array<number>>=}
 *     opt_extent
 * @template T
 */
d3.Brush_.extent = function(opt_extent) {};

/**
 * @param {function(this:Element, T, number, !Array<T>): boolean=} opt_filter
 * @template T
 */
d3.Brush_.filter = function(opt_filter) {};

/**
 * @param {number=} opt_size
 */
d3.Brush_.handleSize = function(opt_size) {};

/**
 * @param {string} typenames
 * @param {?function(this:Element, T, number, !Array<T>): void=} opt_listener
 * @template T
 */
d3.Brush_.on = function(typenames, opt_listener) {};

/**
 * @param {!Element} node
 * @return {?d3.BrushSelection}
 */
d3.brushSelection = function(node) {};

/**
 * @typedef {!Array<number> | !Array<!Array<number>>}
 */
d3.BrushSelection;

// Brush Events

/**
 * @record
 */
d3.BrushEvent = function() {};

/**
 * @type {!d3.Brush}
 */
d3.BrushEvent.prototype.target;

/**
 * @type {string}
 */
d3.BrushEvent.prototype.type;

/**
 * @type {!d3.BrushSelection}
 */
d3.BrushEvent.prototype.selection;

/**
 * @type {!Event}
 */
d3.BrushEvent.prototype.sourceEvent;

////////////////////////////////////////////////////////////////////////////////
// Chords
// https://github.com/d3/d3-chord
////////////////////////////////////////////////////////////////////////////////

// API Reference

/**
 * Not a real constructor, but an interface or record extending Array or
 * IArrayLike would break externs_build_test.
 * @constructor
 * @extends {Array<!d3.Link<{
 *   startAngle: number,
 *   endAngle: number,
 *   value: number,
 *   index: number,
 *   subindex: number
 * }>>}
 */
d3.ChordList = function() {};

/**
 * @type {!Array<{
 *   startAngle: number,
 *   endAngle: number,
 *   value: number,
 *   index: number
 * }>}
 */
d3.ChordList.prototype.groups;

/**
 * @return {!d3.Chord}
 */
d3.chord = function() {};

/**
 * @typedef {function(!Array<!Array<number>>): !d3.ChordList}
 */
d3.Chord;

/**
 * @private {!d3.Chord}
 */
d3.Chord_;

/**
 * @param {number=} opt_angle
 */
d3.Chord_.padAngle = function(opt_angle) {};

/**
 * @param {?function(number, number): number=} opt_compare
 */
d3.Chord_.sortGroups = function(opt_compare) {};

/**
 * @param {?function(number, number): number=} opt_compare
 */
d3.Chord_.sortSubgroups = function(opt_compare) {};

/**
 * @param {?function(number, number): number=} opt_compare
 */
d3.Chord_.sortChords = function(opt_compare) {};

/**
 * @return {!d3.Ribbon}
 */
d3.ribbon = function() {};

/**
 * @typedef {function(...?)}
 */
d3.Ribbon;

/**
 * @private {!d3.Ribbon}
 */
d3.Ribbon_;

/**
 * @param {!Function=} opt_source
 */
d3.Ribbon_.source = function(opt_source) {};

/**
 * @param {!Function=} opt_target
 */
d3.Ribbon_.target = function(opt_target) {};

/**
 * @param {number | function(...?): number=} opt_radius
 */
d3.Ribbon_.radius = function(opt_radius) {};

/**
 * @param {number | function(...?): number=} opt_angle
 */
d3.Ribbon_.startAngle = function(opt_angle) {};

/**
 * @param {number | function(...?): number=} opt_angle
 */
d3.Ribbon_.endAngle = function(opt_angle) {};

/**
 * @param {?CanvasPathMethods=} opt_context
 */
d3.Ribbon_.context = function(opt_context) {};

////////////////////////////////////////////////////////////////////////////////
// Collections
// https://github.com/d3/d3-collection
////////////////////////////////////////////////////////////////////////////////

// API Reference

// Objects

/**
 * @param {!Object<?, ?>} object
 * @return {!Array<string>}
 */
d3.keys = function(object) {};

/**
 * @param {!Object<?, V>} object
 * @return {!Array<V>}
 * @template V
 */
d3.values = function(object) {};

/**
 * @param {!Object<K, V>} object
 * @return {!Array<!Object<K, V>>}
 * @template K, V
 */
d3.entries = function(object) {};

// Maps

/**
 * @param {!(d3.map<V> | Object<?, V> | Array<V>)=} opt_object
 * @param {function(V, number): (string | number | boolean)=} opt_keyFunction
 * @return {!d3.map<V>}
 * @constructor
 * @template V
 */
d3.map = function(opt_object, opt_keyFunction) {};

/**
 * @param {string | number | boolean} key
 * @return {boolean}
 */
d3.map.prototype.has = function(key) {};

/**
 * @param {string | number | boolean} key
 * @return {V | undefined}
 */
d3.map.prototype.get = function(key) {};

/**
 * @param {string | number | boolean} key
 * @param {V} value
 * @return {!d3.map<V>}
 */
d3.map.prototype.set = function(key, value) {};

/**
 * @param {string | number | boolean} key
 * @return {boolean}
 */
d3.map.prototype.remove = function(key) {};

/**
 * @return {void}
 */
d3.map.prototype.clear = function() {};

/**
 * @return {!Array<string>}
 */
d3.map.prototype.keys = function() {};

/**
 * @return {!Array<V>}
 */
d3.map.prototype.values = function() {};

/**
 * @return {!Array<{key: string, value: V}>}
 */
d3.map.prototype.entries = function() {};

/**
 * @param {function(string, V)} callback
 * @return {void}
 */
d3.map.prototype.each = function(callback) {};

/**
 * @return {boolean}
 */
d3.map.prototype.empty = function() {};

/**
 * @return {number}
 */
d3.map.prototype.size = function() {};

// Sets

/**
 * @param {!(Array | d3.set)=} opt_arrayOrSet
 * @param {function(?, number): (string | number | boolean)=} opt_mapper
 * @return {!d3.set}
 * @constructor
 */
d3.set = function(opt_arrayOrSet, opt_mapper) {};

/**
 * @param {string | number | boolean} value
 * @return {boolean}
 */
d3.set.prototype.has = function(value) {};

/**
 * @param {string | number | boolean} value
 * @return {!d3.set}
 */
d3.set.prototype.add = function(value) {};

/**
 * @param {string | number | boolean} value
 * @return {boolean}
 */
d3.set.prototype.remove = function(value) {};

/**
 * @return {void}
 */
d3.set.prototype.clear = function() {};

/**
 * @return {!Array<string>}
 */
d3.set.prototype.values = function() {};

/**
 * @param {function(string)} callback
 * @return {void}
 */
d3.set.prototype.each = function(callback) {};

/**
 * @return {boolean}
 */
d3.set.prototype.empty = function() {};

/**
 * @return {number}
 */
d3.set.prototype.size = function() {};

// Nests

/**
 * @return {!d3.Nest}
 */
d3.nest = function() {};

/**
 * @record
 */
d3.Nest = function() {};

/**
 * @param {!Function} keyFunction
 * @return {!d3.Nest}
 */
d3.Nest.prototype.key = function(keyFunction) {};

/**
 * @param {function(?, ?): number} comparator
 * @return {!d3.Nest}
 */
d3.Nest.prototype.sortKeys = function(comparator) {};

/**
 * @param {function(?, ?): number} comparator
 * @return {!d3.Nest}
 */
d3.Nest.prototype.sortValues = function(comparator) {};

/**
 * @param {!Function} rollupFunction
 * @return {!d3.Nest}
 */
d3.Nest.prototype.rollup = function(rollupFunction) {};

/**
 * @param {!Array<?>} array
 * @return {!d3.map}
 */
d3.Nest.prototype.map = function(array) {};

/**
 * @param {!Array<?>} array
 * @return {!Object<string, ?>}
 */
d3.Nest.prototype.object = function(array) {};

/**
 * @param {!Array<?>} array
 * @return {!Array<{key: string, values: !Array<?>}>}
 */
d3.Nest.prototype.entries = function(array) {};

////////////////////////////////////////////////////////////////////////////////
// Colors
// https://github.com/d3/d3-color
////////////////////////////////////////////////////////////////////////////////

// API Reference

/**
 * @param {string} specifier
 * @return {?d3.color}
 * @constructor
 */
d3.color = function(specifier) {};

/**
 * @type {number}
 */
d3.color.prototype.opacity;

/**
 * @return {!d3.rgb}
 */
d3.color.prototype.rgb = function() {};

/**
 * @param {number=} opt_k
 * @return {!d3.color}
 */
d3.color.prototype.brighter = function(opt_k) {};

/**
 * @param {number=} opt_k
 * @return {!d3.color}
 */
d3.color.prototype.darker = function(opt_k) {};

/**
 * @return {boolean}
 */
d3.color.prototype.displayable = function() {};

/**
 * @override
 * @return {string}
 */
d3.color.prototype.toString = function() {};

/**
 * @param {number | string | !d3.color} redOrSpecifierOrColor
 * @param {number=} opt_green
 * @param {number=} opt_blue
 * @param {number=} opt_opacity
 * @return {!d3.rgb}
 * @constructor
 * @extends {d3.color}
 */
d3.rgb = function(redOrSpecifierOrColor, opt_green, opt_blue, opt_opacity) {};

/**
 * @type {number}
 */
d3.rgb.prototype.r;

/**
 * @type {number}
 */
d3.rgb.prototype.g;

/**
 * @type {number}
 */
d3.rgb.prototype.b;

/**
 * @param {number | string | !d3.color} hueOrSpecifierOrColor
 * @param {number=} opt_saturation
 * @param {number=} opt_lightness
 * @param {number=} opt_opacity
 * @return {!d3.hsl}
 * @constructor
 * @extends {d3.color}
 */
d3.hsl = function(hueOrSpecifierOrColor, opt_saturation, opt_lightness,
    opt_opacity) {};

/**
 * @type {number}
 */
d3.hsl.prototype.h;

/**
 * @type {number}
 */
d3.hsl.prototype.s;

/**
 * @type {number}
 */
d3.hsl.prototype.l;

/**
 * @param {number | string | !d3.color} lightnessOrSpecifierOrColor
 * @param {number=} opt_a
 * @param {number=} opt_b
 * @param {number=} opt_opacity
 * @return {!d3.lab}
 * @constructor
 * @extends {d3.color}
 */
d3.lab = function(lightnessOrSpecifierOrColor, opt_a, opt_b, opt_opacity) {};

/**
 * @type {number}
 */
d3.lab.prototype.l;

/**
 * @type {number}
 */
d3.lab.prototype.a;

/**
 * @type {number}
 */
d3.lab.prototype.b;

/**
 * @param {number | string | !d3.color} hueOrSpecifierOrColor
 * @param {number=} opt_chroma
 * @param {number=} opt_luminance
 * @param {number=} opt_opacity
 * @return {!d3.hcl}
 * @constructor
 * @extends {d3.color}
 */
d3.hcl = function(hueOrSpecifierOrColor, opt_chroma, opt_luminance,
    opt_opacity) {};

/**
 * @type {number}
 */
d3.hcl.prototype.h;

/**
 * @type {number}
 */
d3.hcl.prototype.c;

/**
 * @type {number}
 */
d3.hcl.prototype.l;

/**
 * @param {number | string | !d3.color} hueOrSpecifierOrColor
 * @param {number=} opt_saturation
 * @param {number=} opt_lightness
 * @param {number=} opt_opacity
 * @return {!d3.cubehelix}
 * @constructor
 * @extends {d3.color}
 */
d3.cubehelix = function(hueOrSpecifierOrColor, opt_saturation, opt_lightness,
    opt_opacity) {};

/**
 * @type {number}
 */
d3.cubehelix.prototype.h;

/**
 * @type {number}
 */
d3.cubehelix.prototype.s;

/**
 * @type {number}
 */
d3.cubehelix.prototype.l;

////////////////////////////////////////////////////////////////////////////////
// Dispatches
// https://github.com/d3/d3-dispatch
////////////////////////////////////////////////////////////////////////////////

// API Reference

/**
 * @param {...string} var_args
 * @return {!d3.dispatch}
 * @constructor
 */
d3.dispatch = function(var_args) {};

/**
 * @param {string} typenames
 * @param {?Function=} opt_listener
 */
d3.dispatch.prototype.on = function(typenames, opt_listener) {};

/**
 * @return {!d3.dispatch}
 */
d3.dispatch.prototype.copy = function() {};

/**
 * @param {string} type
 * @param {?Object=} opt_that
 * @param {...?} var_args
 * @return {void}
 */
d3.dispatch.prototype.call = function(type, opt_that, var_args) {};

/**
 * @param {string} type
 * @param {?Object=} opt_that
 * @param {!(Arguments | Array<?>)=} opt_arguments
 * @return {void}
 */
d3.dispatch.prototype.apply = function(type, opt_that, opt_arguments) {};

////////////////////////////////////////////////////////////////////////////////
// Dragging
// https://github.com/d3/d3-drag
////////////////////////////////////////////////////////////////////////////////

// API Reference

/**
 * @return {!d3.Drag}
 */
d3.drag = function() {};

/**
 * @typedef {function(!d3.selection)}
 */
d3.Drag;

/**
 * @private {!d3.Drag}
 */
d3.Drag_;

/**
 * @param {!Element | function(this:Element, T, !Array<T>): !Element=}
 *     opt_container
 * @template T
 */
d3.Drag_.container = function(opt_container) {};

/**
 * @param {function(this:Element, T, !Array<T>): boolean=} opt_filter
 * @template T
 */
d3.Drag_.filter = function(opt_filter) {};

/**
 * @param {function(this:Element, T, !Array<T>)=} opt_subject
 * @template T
 */
d3.Drag_.subject = function(opt_subject) {};

/**
 * @param {?function(this:Element, T, number, !Array<T>): void=}
 *     opt_listener
 * @template T
 */
d3.Drag_.on = function(typenames, opt_listener) {};

/**
 * @param {!Window} window
 * @return {void}
 */
d3.dragDisable = function(window) {};

/**
 * @param {!Window} window
 * @param {boolean=} opt_noclick
 * @return {void}
 */
d3.dragEnable = function(window, opt_noclick) {};

// Drag Events

/**
 * @record
 */
d3.DragEvent = function() {};

/**
 * @type {!d3.Drag}
 */
d3.DragEvent.prototype.target;

/**
 * @type {string}
 */
d3.DragEvent.prototype.type;

/**
 * @type {?}
 */
d3.DragEvent.prototype.subject;

/**
 * @type {number}
 */
d3.DragEvent.prototype.x;

/**
 * @type {number}
 */
d3.DragEvent.prototype.y;

/**
 * @type {number}
 */
d3.DragEvent.prototype.dx;

/**
 * @type {number}
 */
d3.DragEvent.prototype.dy;

/**
 * @type {number | string}
 */
d3.DragEvent.prototype.identifier;

/**
 * @type {number}
 */
d3.DragEvent.prototype.active;

/**
 * @type {!Event}
 */
d3.DragEvent.prototype.sourceEvent;

/**
 * @param {string} typenames
 * @param {?function(this:Element, ?, number, !IArrayLike<!Element>)=}
 *     opt_listener
 */
d3.DragEvent.prototype.on = function(typenames, opt_listener) {};

////////////////////////////////////////////////////////////////////////////////
// Delimiter-Separated Values
// https://github.com/d3/d3-dsv
////////////////////////////////////////////////////////////////////////////////

/**
 * @constructor
 * @extends {Array}
 */
d3.DsvParseResult = function() {};

/**
 * @type {!Array<string>}
 */
d3.DsvParseResult.prototype.columns;

// API Reference

/**
 * @param {string} string
 * @param {function(!Object<string, string>, number, !Array<string>)=}
 *     opt_rowMapper
 * @return {!d3.DsvParseResult}
 */
d3.csvParse = function(string, opt_rowMapper) {};

/**
 * @param {string} string
 * @param {function(!Array<string>, number)=} opt_rowMapper
 * @return {!Array}
 */
d3.csvParseRows = function(string, opt_rowMapper) {};

/**
 * @param {!Array<!Object>} rows
 * @param {!Array<string>=} opt_columnsToInclude
 * @return {string}
 */
d3.csvFormat = function(rows, opt_columnsToInclude) {};

/**
 * @param {!Array<!Array>} rows
 * @return {string}
 */
d3.csvFormatRows = function(rows) {};

/**
 * @param {string} string
 * @param {function(!Object<string, string>, number, !Array<string>)=}
 *     opt_rowMapper
 * @return {!d3.DsvParseResult}
 */
d3.tsvParse = function(string, opt_rowMapper) {};

/**
 * @param {string} string
 * @param {function(!Array<string>, number)=} opt_rowMapper
 * @return {!Array}
 */
d3.tsvParseRows = function(string, opt_rowMapper) {};

/**
 * @param {!Array<!Object>} rows
 * @param {!Array<string>=} opt_columnsToInclude
 * @return {string}
 */
d3.tsvFormat = function(rows, opt_columnsToInclude) {};

/**
 * @param {!Array<!Array>} rows
 * @return {string}
 */
d3.tsvFormatRows = function(rows) {};

/**
 * @param {string} delimiter
 * @return {!d3.Dsv}
 */
d3.dsvFormat = function(delimiter) {};

/**
 * @record
 */
d3.Dsv = function() {};

/**
 * @param {string} string
 * @param {function(!Object<string, string>, number, !Array<string>)=}
 *     opt_rowMapper
 * @return {!d3.DsvParseResult}
 */
d3.Dsv.prototype.parse = function(string, opt_rowMapper) {};

/**
 * @param {string} string
 * @param {function(!Array<string>, number)=} opt_rowMapper
 * @return {!Array}
 */
d3.Dsv.prototype.parseRows = function(string, opt_rowMapper) {};

/**
 * @param {!Array<!Object>} rows
 * @param {!Array<string>=} opt_columns
 * @return {string}
 */
d3.Dsv.prototype.format = function(rows, opt_columns) {};

/**
 * @param {!Array<!Array>} rows
 * @return {string}
 */
d3.Dsv.prototype.formatRows = function(rows) {};

////////////////////////////////////////////////////////////////////////////////
// Easings
// https://github.com/d3/d3-ease
////////////////////////////////////////////////////////////////////////////////

// API Reference

/**
 * @param {number} t
 * @return {number}
 */
d3.easeLinear = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easePolyIn = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easePolyOut = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easePoly = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easePolyInOut = function(t) {};

/**
 * This declaration is not completely correct. It disallows the call pattern
 * d3.easePolyIn.exponent(e1).exponent(e2) which is technially valid, but not
 * very useful in practice. The alternative would be a typedef like
 * d3.ElasticEasing, but it would degrade type checking, because JSCompiler
 * doesn't understand function properties.
 *
 * @param {number} e
 * @return {function(number): number}
 */
d3.easePolyIn.exponent = function(e) {};

/**
 * @param {number} e
 * @return {function(number): number}
 */
d3.easePolyOut.exponent = function(e) {};

/**
 * @param {number} e
 * @return {function(number): number}
 */
d3.easePoly.exponent = function(e) {};

/**
 * @param {number} e
 * @return {function(number): number}
 */
d3.easePolyInOut.exponent = function(e) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeQuadIn = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeQuadOut = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeQuad = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeQuadInOut = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeCubicIn = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeCubicOut = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeCubic = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeCubicInOut = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeSinIn = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeSinOut = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeSin = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeSinInOut = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeExpIn = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeExpOut = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeExp = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeExpInOut = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeCircleIn = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeCircleOut = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeCircle = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeCircleInOut = function(t) {};

/**
 * @type {!d3.ElasticEasing}
 */
d3.easeElasticIn;

/**
 * @type {!d3.ElasticEasing}
 */
d3.easeElastic;

/**
 * @type {!d3.ElasticEasing}
 */
d3.easeElasticOut;

/**
 * @type {!d3.ElasticEasing}
 */
d3.easeElasticInOut;

/**
 * @typedef {function(number): number}
 */
d3.ElasticEasing;

/**
 * @private {!d3.ElasticEasing}
 */
d3.ElasticEasing_;

/**
 * @param {number} a
 * @return {!d3.ElasticEasing}
 */
d3.ElasticEasing_.amplitude = function(a) {};

/**
 * @param {number} p
 * @return {!d3.ElasticEasing}
 */
d3.ElasticEasing_.period = function(p) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeBackIn = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeBackOut = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeBack = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeBackInOut = function(t) {};

/**
 * @param {number} s
 * @return {function(number): number}
 */
d3.easeBackIn.overshoot = function(s) {};

/**
 * @param {number} s
 * @return {function(number): number}
 */
d3.easeBackOut.overshoot = function(s) {};

/**
 * @param {number} s
 * @return {function(number): number}
 */
d3.easeBack.overshoot = function(s) {};

/**
 * @param {number} s
 * @return {function(number): number}
 */
d3.easeBackInOut.overshoot = function(s) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeBounceIn = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeBounceOut = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeBounce = function(t) {};

/**
 * @param {number} t
 * @return {number}
 */
d3.easeBounceInOut = function(t) {};

////////////////////////////////////////////////////////////////////////////////
// Forces
// https://github.com/d3/d3-force
////////////////////////////////////////////////////////////////////////////////

// Simulation

/**
 * @param {!Array<!d3.ForceNode>=} opt_nodes
 * @return {!d3.ForceSimulation}
 */
d3.forceSimulation = function(opt_nodes) {};

/**
 * @record
 */
d3.ForceSimulation = function() {};

/**
 * @return {!d3.ForceSimulation}
 */
d3.ForceSimulation.prototype.restart = function() {};

/**
 * @return {!d3.ForceSimulation}
 */
d3.ForceSimulation.prototype.stop = function() {};

/**
 * @return {void}
 */
d3.ForceSimulation.prototype.tick = function() {};

/**
 * @param {!Array<!d3.ForceNode>=} opt_nodes
 */
d3.ForceSimulation.prototype.nodes = function(opt_nodes) {};

/**
 * @param {number=} opt_alpha
 */
d3.ForceSimulation.prototype.alpha = function(opt_alpha) {};

/**
 * @param {number=} opt_min
 */
d3.ForceSimulation.prototype.alphaMin = function(opt_min) {};

/**
 * @param {number=} opt_decay
 */
d3.ForceSimulation.prototype.alphaDecay = function(opt_decay) {};

/**
 * @param {number=} opt_target
 */
d3.ForceSimulation.prototype.alphaTarget = function(opt_target) {};

/**
 * @param {number=} opt_decay
 */
d3.ForceSimulation.prototype.velocityDecay = function(opt_decay) {};

/**
 * @param {string} name
 * @param {!d3.Force=} opt_force
 */
d3.ForceSimulation.prototype.force = function(name, opt_force) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number=} opt_radius
 * @return {!d3.ForceNode | undefined}
 */
d3.ForceSimulation.prototype.find = function(x, y, opt_radius) {};

/**
 * @param {string} typenames
 * @param {?function(this:d3.ForceSimulation): void=} opt_listener
 */
d3.ForceSimulation.prototype.on = function(typenames, opt_listener) {};

/**
 * @record
 */
d3.ForceNode = function() {};

/**
 * @type {number}
 */
d3.ForceNode.prototype.index;

/**
 * @type {number}
 */
d3.ForceNode.prototype.x;

/**
 * @type {number}
 */
d3.ForceNode.prototype.y;

/**
 * @type {number}
 */
d3.ForceNode.prototype.vx;

/**
 * @type {number}
 */
d3.ForceNode.prototype.vy;

/**
 * @type {?number | undefined}
 */
d3.ForceNode.prototype.fx;

/**
 * @type {?number | undefined}
 */
d3.ForceNode.prototype.fy;

// Forces

/**
 * @typedef {function(number)}
 */
d3.Force;

/**
 * @param {!Array<!d3.ForceNode>} nodes
 */
d3.Force.prototype.initialize = function(nodes) {};

// Centering

/**
 * @param {number=} opt_x
 * @param {number=} opt_y
 * @return {!d3.CenterForce}
 */
d3.forceCenter = function(opt_x, opt_y) {};

/**
 * @typedef {!d3.Force}
 */
d3.CenterForce;

/**
 * @param {number=} opt_x
 */
d3.CenterForce.prototype.x = function(opt_x) {};

/**
 * @param {number=} opt_y
 */
d3.CenterForce.prototype.y = function(opt_y) {};

// Collision

/**
 * @param {number=} opt_radius
 * @return {!d3.CollideForce}
 */
d3.forceCollide = function(opt_radius) {};

/**
 * @typedef {!d3.Force}
 */
d3.CollideForce;

/**
 * @param {number |
 *     function(!d3.ForceNode, number, !Array<!d3.ForceNode>): number=}
 *     opt_radius
 * @template T
 */
d3.CollideForce.prototype.radius = function(opt_radius) {};

/**
 * @param {number=} opt_strength
 */
d3.CollideForce.prototype.strength = function(opt_strength) {};

/**
 * @param {number=} opt_iterations
 */
d3.CollideForce.prototype.iterations = function(opt_iterations) {};

// Links

/**
 * @typedef {!d3.Link<!d3.ForceNode>}
 */
d3.ForceLink;

/**
 * @param {!Array<!d3.ForceLink>=} opt_links
 * @return {!d3.LinkForce}
 */
d3.forceLink = function(opt_links) {};

/**
 * @typedef {!d3.Force}
 */
d3.LinkForce;

/**
 * @param {!Array<!d3.ForceLink>=} opt_links
 */
d3.LinkForce.prototype.links = function(opt_links) {};

/**
 * @param {function(!d3.ForceNode, number, !Array<!d3.ForceNode>): string=}
 *     opt_id
 */
d3.LinkForce.prototype.id = function(opt_id) {};

/**
 * @param {number |
 *     function(!d3.ForceLink, number, !Array<!d3.ForceLink>): number=}
 *     opt_distance
 */
d3.LinkForce.prototype.distance = function(opt_distance) {};

/**
 * @param {number |
 *     function(!d3.ForceLink, number, !Array<!d3.ForceLink>): number=}
 *     opt_strength
 */
d3.LinkForce.prototype.strength = function(opt_strength) {};

/**
 * @param {number=} opt_iterations
 */
d3.LinkForce.prototype.iterations = function(opt_iterations) {};

// Many-Body

/**
 * @return {!d3.ManyBodyForce}
 */
d3.forceManyBody = function() {};

/**
 * @typedef {!d3.Force}
 */
d3.ManyBodyForce;

/**
 * @param {number |
 *     function(!d3.ForceNode, number, !Array<!d3.ForceNode>): number=}
 *     opt_strength
 */
d3.ManyBodyForce.prototype.strength = function(opt_strength) {};

/**
 * @param {number=} opt_theta
 */
d3.ManyBodyForce.prototype.theta = function(opt_theta) {};

/**
 * @param {number=} opt_distance
 */
d3.ManyBodyForce.prototype.distanceMin = function(opt_distance) {};

/**
 * @param {number=} opt_distance
 */
d3.ManyBodyForce.prototype.distanceMax = function(opt_distance) {};

// Positioning

/**
 * @return {!d3.XForce}
 */
d3.forceX = function() {};

/**
 * @typedef {!d3.Force}
 */
d3.XForce;

/**
 * @param {number |
 *     function(!d3.ForceNode, number, !Array<!d3.ForceNode>): number=}
 *     opt_strength
 */
d3.XForce.prototype.strength = function(opt_strength) {};

/**
 * @param {number |
 *     function(!d3.ForceNode, number, !Array<!d3.ForceNode>): number=} opt_x
 */
d3.XForce.prototype.x = function(opt_x) {};

/**
 * @return {!d3.YForce}
 */
d3.forceY = function() {};

/**
 * @typedef {!d3.Force}
 */
d3.YForce;

/**
 * @param {number |
 *     function(!d3.ForceNode, number, !Array<!d3.ForceNode>): number=}
 *     opt_strength
 */
d3.YForce.prototype.strength = function(opt_strength) {};

/**
 * @param {number |
 *     function(!d3.ForceNode, number, !Array<!d3.ForceNode>): number=} opt_y
 */
d3.YForce.prototype.y = function(opt_y) {};

////////////////////////////////////////////////////////////////////////////////
// Number Formats
// https://github.com/d3/d3-format
////////////////////////////////////////////////////////////////////////////////

// API Reference

/**
 * @param {string} specifier
 * @return {function(number): string}
 */
d3.format = function(specifier) {};

/**
 * @param {string} specifier
 * @param {number} value
 * @return {function(number): string}
 */
d3.formatPrefix = function(specifier, value) {};

/**
 * @param {string} specifier
 * @return {!d3.formatSpecifier}
 * @constructor
 */
d3.formatSpecifier = function(specifier) {};

/**
 * @type {string}
 */
d3.formatSpecifier.prototype.fill;

/**
 * @type {string}
 */
d3.formatSpecifier.prototype.align;

/**
 * @type {string}
 */
d3.formatSpecifier.prototype.sign;

/**
 * @type {string}
 */
d3.formatSpecifier.prototype.symbol;

/**
 * @type {boolean}
 */
d3.formatSpecifier.prototype.zero;

/**
 * @type {number | undefined}
 */
d3.formatSpecifier.prototype.width;

/**
 * @type {boolean}
 */
d3.formatSpecifier.prototype.comma;

/**
 * @type {number | undefined}
 */
d3.formatSpecifier.prototype.precision;

/**
 * @type {string}
 */
d3.formatSpecifier.prototype.type;

/**
 * @param {number} step
 * @return {number}
 */
d3.precisionFixed = function(step) {};

/**
 * @param {number} step
 * @param {number} value
 * @return {number}
 */
d3.precisionPrefix = function(step, value) {};

/**
 * @param {number} step
 * @param {number} max
 * @return {number}
 */
d3.precisionRound = function(step, max) {};

// Locales

/**
 * @record
 */
d3.FormatLocaleDefinition = function() {};

/**
 * @type {string}
 */
d3.FormatLocaleDefinition.prototype.decimal;

/**
 * @type {string}
 */
d3.FormatLocaleDefinition.prototype.thousands;

/**
 * @type {!Array<number>}
 */
d3.FormatLocaleDefinition.prototype.grouping;

/**
 * @type {!Array<string>}
 */
d3.FormatLocaleDefinition.prototype.currency;

/**
 * @type {!Array<string> | undefined}
 */
d3.FormatLocaleDefinition.prototype.numerals;

/**
 * @record
 */
d3.FormatLocale = function() {};

/**
 * @param {string} specifier
 * @return {function(number): string}
 */
d3.FormatLocale.prototype.format = function(specifier) {};

/**
 * @param {string} specifier
 * @param {number} value
 * @return {function(number): string}
 */
d3.FormatLocale.prototype.formatPrefix = function(specifier, value) {};

/**
 * @param {!d3.FormatLocaleDefinition} definition
 * @return {!d3.FormatLocale}
 */
d3.formatLocale = function(definition) {};

/**
 * @param {!d3.FormatLocaleDefinition} definition
 * @return {!d3.FormatLocale}
 */
d3.formatDefaultLocale = function(definition) {};

////////////////////////////////////////////////////////////////////////////////
// Geographies
// https://github.com/d3/d3-geo
////////////////////////////////////////////////////////////////////////////////

// GeoJSON (http://geojson.org/geojson-spec.html)

/** @record */
var GeoJSON = function() {};

/** @type {string} */
GeoJSON.prototype.type;

/** @type {?GeoJSON.NamedCRS | GeoJSON.LinkedCRS | undefined} */
GeoJSON.prototype.crs;

/** @type {?Array<number> | undefined} */
GeoJSON.prototype.bbox;


/** @record */
GeoJSON.NamedCRS = function() {};

/** @type {string} */
GeoJSON.NamedCRS.prototype.type;

/** @type {{name: string}} */
GeoJSON.NamedCRS.prototype.properties;


/** @record */
GeoJSON.LinkedCRS = function() {};

/** @type {string} */
GeoJSON.LinkedCRS.prototype.type;

/** @type {{href: string, type: (string | undefined)}} */
GeoJSON.LinkedCRS.prototype.properties;


/** @record @extends {GeoJSON} */
GeoJSON.Geometry = function() {};


/** @record @extends {GeoJSON.Geometry} */
GeoJSON.Point = function() {};

/** @type {!Array<number>} */
GeoJSON.Point.prototype.coordinates;


/** @record @extends {GeoJSON.Geometry} */
GeoJSON.LineString = function() {};

/** @type {!Array<!Array<number>>} */
GeoJSON.LineString.prototype.coordinates;


/** @record @extends {GeoJSON.Geometry} */
GeoJSON.Polygon = function() {};

/** @type {!Array<!Array<!Array<number>>>} */
GeoJSON.Polygon.prototype.coordinates;


/** @record @extends {GeoJSON.Geometry} */
GeoJSON.MultiPoint = function() {};

/** @type {!Array<!Array<number>>} */
GeoJSON.MultiPoint.prototype.coordinates;


/** @record @extends {GeoJSON.Geometry} */
GeoJSON.MultiLineString = function() {};

/** @type {!Array<!Array<!Array<number>>>} */
GeoJSON.MultiLineString.prototype.coordinates;


/** @record @extends {GeoJSON.Geometry} */
GeoJSON.MultiPolygon = function() {};

/** @type {!Array<!Array<!Array<!Array<number>>>>} */
GeoJSON.MultiPolygon.prototype.coordinates;


/** @record @extends {GeoJSON.Geometry} */
GeoJSON.GeometryCollection = function() {};

/** @type {!Array<!GeoJSON.Geometry>} */
GeoJSON.GeometryCollection.prototype.geometries;


/** @record @extends {GeoJSON} */
GeoJSON.Feature = function() {};

/** @type {?GeoJSON.Geometry} */
GeoJSON.Feature.prototype.geometry;

/** @type {?Object} */
GeoJSON.Feature.prototype.properties;


/** @record @extends {GeoJSON} */
GeoJSON.FeatureCollection = function() {};

/** @type {!Array<!GeoJSON.Feature>} */
GeoJSON.FeatureCollection.prototype.features;

// Spherical Math

/**
 * [longitude in degrees, latitude in degrees]
 * @typedef {!Array<number>}
 */
d3.LngLat;

/**
 * @param {!GeoJSON.Feature} feature
 * @return {number}
 */
d3.geoArea = function(feature) {};

/**
 * @param {!GeoJSON.Feature} feature
 * @return {!Array<!d3.LngLat>}
 */
d3.geoBounds = function(feature) {};

/**
 * @param {!GeoJSON.Feature} feature
 * @return {!d3.LngLat}
 */
d3.geoCentroid = function(feature) {};

/**
 * @param {!d3.LngLat} a
 * @param {!d3.LngLat} b
 * @return {number}
 */
d3.geoDistance = function(a, b) {};

/**
 * @param {!GeoJSON.Feature} feature
 * @return {number}
 */
d3.geoLength = function(feature) {};

/**
 * @param {!d3.LngLat} a
 * @param {!d3.LngLat} b
 * @return {function(number): !d3.LngLat}
 */
d3.geoInterpolate = function(a, b) {};

/**
 * @param {!GeoJSON} object
 * @param {!d3.LngLat} point
 * @return {boolean}
 */
d3.geoContains = function(object, point) {};

/**
 * @param {!Array<number>} angles [yaw, pitch] or [yaw, pitch, roll]
 * @return {!d3.GeoRotation}
 */
d3.geoRotation = function(angles) {};

/**
 * @typedef {function(!d3.LngLat): !d3.LngLat}
 */
d3.GeoRotation;

/**
 * @private {!d3.GeoRotation}
 */
d3.GeoRotation_;

/**
 * @param {!d3.LngLat} point
 * @return {!d3.LngLat}
 */
d3.GeoRotation_.invert = function(point) {};

// Spherical Shapes

/**
 * @return {!d3.GeoCircle}
 */
d3.geoCircle = function() {};

/**
 * @typedef {function(...?): !GeoJSON.Polygon}
 */
d3.GeoCircle;

/**
 * @private {!d3.GeoCircle}
 */
d3.GeoCircle_;

/**
 * @param {!d3.LngLat | function(): !d3.LngLat=} opt_center
 */
d3.GeoCircle_.center = function(opt_center) {};

/**
 * @param {number | function(): number=} opt_radius
 */
d3.GeoCircle_.radius = function(opt_radius) {};

/**
 * @param {number | function(): number=} opt_angle
 */
d3.GeoCircle_.precision = function(opt_angle) {};

/**
 * @return {!d3.GeoGraticule}
 */
d3.geoGraticule = function() {};

/**
 * @typedef {function(...?): !GeoJSON.MultiLineString}
 */
d3.GeoGraticule;

/**
 * @private {!d3.GeoGraticule}
 */
d3.GeoGraticule_;

/**
 * @return {!Array<!GeoJSON.LineString>}
 */
d3.GeoGraticule_.lines = function() {};

/**
 * @return {!GeoJSON.Polygon}
 */
d3.GeoGraticule_.outline = function() {};

/**
 * @param {!Array<!d3.LngLat>=} opt_extent
 */
d3.GeoGraticule_.extent = function(opt_extent) {};

/**
 * @param {!Array<!d3.LngLat>=} opt_extent
 */
d3.GeoGraticule_.extentMajor = function(opt_extent) {};

/**
 * @param {!Array<!d3.LngLat>=} opt_extent
 */
d3.GeoGraticule_.extentMinor = function(opt_extent) {};

/**
 * @param {!Array<number>=} opt_step
 */
d3.GeoGraticule_.step = function(opt_step) {};

/**
 * @param {!Array<number>=} opt_step
 */
d3.GeoGraticule_.stepMajor = function(opt_step) {};

/**
 * @param {!Array<number>=} opt_step
 */
d3.GeoGraticule_.stepMinor = function(opt_step) {};

/**
 * @param {number=} opt_angle
 */
d3.GeoGraticule_.precision = function(opt_angle) {};

/**
 * @return {!GeoJSON.MultiLineString}
 */
d3.geoGraticule10 = function() {};

// Paths

/**
 * @param {?{stream: function(!d3.GeoStream): !d3.GeoStream}=} opt_projection
 * @param {?d3.GeoPathContext=} opt_context
 * @return {!d3.GeoPath}
 */
d3.geoPath = function(opt_projection, opt_context) {};

/**
 * @typedef {function(!GeoJSON, ...?): string}
 */
d3.GeoPath;

/**
 * @private {!d3.GeoPath}
 */
d3.GeoPath_;

/**
 * @param {!GeoJSON} object
 * @return {number}
 */
d3.GeoPath_.area = function(object) {};

/**
 * @param {!GeoJSON} object
 * @return {!Array<!Array<number>>}
 */
d3.GeoPath_.bounds = function(object) {};

/**
 * @param {!GeoJSON} object
 * @return {!Array<number>}
 */
d3.GeoPath_.centroid = function(object) {};

/**
 * @param {!GeoJSON} object
 * @return {number}
 */
d3.GeoPath_.measure = function(object) {};

/**
 * @param {?{stream: function(!d3.GeoStream): !d3.GeoStream}=} opt_projection
 */
d3.GeoPath_.projection = function(opt_projection) {};

/**
 * @param {?d3.GeoPathContext=} opt_context
 */
d3.GeoPath_.context = function(opt_context) {};

/**
 * @param {number | !Function=} opt_radius
 */
d3.GeoPath_.pointRadius = function(opt_radius) {};

/**
 * Subset of the CanvasRenderingContext2D interface.
 * @record
 */
d3.GeoPathContext = function() {};

/**
 * @return {void}
 */
d3.GeoPathContext.prototype.beginPath = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
d3.GeoPathContext.prototype.moveTo = function(x, y) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
d3.GeoPathContext.prototype.lineTo = function(x, y) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @param {number} startAngle
 * @param {number} endAngle
 * @return {void}
 */
d3.GeoPathContext.prototype.arc =
    function(x, y, radius, startAngle, endAngle) {};

/**
 * @return {void}
 */
d3.GeoPathContext.prototype.closePath = function() {};

// Projections

/**
 * @param {!d3.RawProjection} project
 * @return {!d3.GeoProjection}
 */
d3.geoProjection = function(project) {};

/**
 * @param {!Function} factory
 * @return {!Function}
 */
d3.geoProjectionMutator = function(factory) {};

/**
 * @typedef {function(!d3.LngLat): ?Array<number>}
 */
d3.GeoProjection;

/**
 * @private {!d3.GeoProjection}
 */
d3.GeoProjection_;

/**
 * @param {!Array<number>} point
 * @return {?d3.LngLat}
 */
d3.GeoProjection_.invert = function(point) {};

/**
 * @param {!d3.GeoStream} stream
 * @return {!d3.GeoStream}
 */
d3.GeoProjection_.stream = function(stream) {};

/**
 * @param {?number=} opt_angle
 */
d3.GeoProjection_.clipAngle = function(opt_angle) {};

/**
 * @param {?Array<!Array<number>>=} opt_extent
 */
d3.GeoProjection_.clipExtent = function(opt_extent) {};

/**
 * @param {number=} opt_scale
 */
d3.GeoProjection_.scale = function(opt_scale) {};

/**
 * @param {!Array<number>=} opt_translate
 */
d3.GeoProjection_.translate = function(opt_translate) {};

/**
 * @param {!d3.LngLat=} opt_center
 */
d3.GeoProjection_.center = function(opt_center) {};

/**
 * @param {!Array<number>=} opt_angles
 */
d3.GeoProjection_.rotate = function(opt_angles) {};

/**
 * @param {number=} opt_precision
 */
d3.GeoProjection_.precision = function(opt_precision) {};

/**
 * @param {!Array<!Array<number>>} extent
 * @param {!GeoJSON} object
 * @return {!d3.GeoProjection}
 */
d3.GeoProjection_.fitExtent = function(extent, object) {};

/**
 * @param {!Array<number>} size
 * @param {!GeoJSON} object
 * @return {!d3.GeoProjection}
 */
d3.GeoProjection_.fitSize = function(size, object) {};

/**
 * Only exists for conic projections.
 * @type {function(!Array<number>=) | undefined}
 */
d3.GeoProjection_.parallels;

/**
 * @return {!d3.GeoProjection}
 */
d3.geoAlbers = function() {};

/**
 * @return {!d3.GeoProjection}
 */
d3.geoAlbersUsa = function() {};

/**
 * @return {!d3.GeoProjection}
 */
d3.geoAzimuthalEqualArea = function() {};

/**
 * @return {!d3.GeoProjection}
 */
d3.geoAzimuthalEquidistant = function() {};

/**
 * @return {!d3.GeoProjection}
 */
d3.geoConicConformal = function() {};

/**
 * @return {!d3.GeoProjection}
 */
d3.geoConicEqualArea = function() {};

/**
 * @return {!d3.GeoProjection}
 */
d3.geoConicEquidistant = function() {};

/**
 * @return {!d3.GeoProjection}
 */
d3.geoEquirectangular = function() {};

/**
 * @return {!d3.GeoProjection}
 */
d3.geoGnomonic = function() {};

/**
 * @return {!d3.GeoProjection}
 */
d3.geoMercator = function() {};

/**
 * @return {!d3.GeoProjection}
 */
d3.geoOrthographic = function() {};

/**
 * @return {!d3.GeoProjection}
 */
d3.geoStereographic = function() {};

/**
 * @return {!d3.GeoProjection}
 */
d3.geoTransverseMercator = function() {};

/**
 * @deprecated Use d3.geoIdentity's clipExtent instead.
 */
d3.geoClipExtent = null;

// Raw Projections

/**
 * (longitude in radians, latitude in radians) => [x, y]
 * @typedef {function(number, number): !Array<number>}
 */
d3.RawProjection;

/**
 * @private {!d3.RawProjection}
 */
d3.RawProjection_;

/**
 * @param {number} x
 * @param {number} y
 * @return {!Array<number>}
 */
d3.RawProjection_.invert = function(x, y) {};

/**
 * @type {!d3.RawProjection}
 */
d3.geoAzimuthalEqualAreaRaw;

/**
 * @type {!d3.RawProjection}
 */
d3.geoAzimuthalEquidistantRaw;

/**
 * @param {number} phi0
 * @param {number} phi1
 * @return {!d3.RawProjection}
 */
d3.geoConicConformalRaw = function(phi0, phi1) {};

/**
 * @param {number} phi0
 * @param {number} phi1
 * @return {!d3.RawProjection}
 */
d3.geoConicEqualAreaRaw = function(phi0, phi1) {};

/**
 * @param {number} phi0
 * @param {number} phi1
 * @return {!d3.RawProjection}
 */
d3.geoConicEquidistantRaw = function(phi0, phi1) {};

/**
 * @type {!d3.RawProjection}
 */
d3.geoEquirectangularRaw;

/**
 * @type {!d3.RawProjection}
 */
d3.geoGnomonicRaw;

/**
 * @type {!d3.RawProjection}
 */
d3.geoMercatorRaw;

/**
 * @type {!d3.RawProjection}
 */
d3.geoOrthographicRaw;

/**
 * @type {!d3.RawProjection}
 */
d3.geoStereographicRaw;

/**
 * @type {!d3.RawProjection}
 */
d3.geoTransverseMercatorRaw;

// Projection Streams

/**
 * @param {!GeoJSON} object
 * @param {!d3.GeoStream} stream
 * @return {void}
 */
d3.geoStream = function(object, stream) {};

/**
 * @record
 */
d3.GeoStream = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number=} opt_z
 * @return {void}
 */
d3.GeoStream.prototype.point = function(x, y, opt_z) {};

/**
 * @return {void}
 */
d3.GeoStream.prototype.lineStart = function() {};

/**
 * @return {void}
 */
d3.GeoStream.prototype.lineEnd = function() {};

/**
 * @return {void}
 */
d3.GeoStream.prototype.polygonStart = function() {};

/**
 * @return {void}
 */
d3.GeoStream.prototype.polygonEnd = function() {};

/**
 * @return {void}
 */
d3.GeoStream.prototype.sphere = function() {};

// Transforms

/**
 * @record
 */
d3.GeoStreamOverrides = function() {};

/**
 * @type {undefined |
 *     function(this:d3.GeoStreamOverrides, number, number, number=): void}
 */
d3.GeoStreamOverrides.prototype.point;

/**
 * @type {undefined | function(this:d3.GeoStreamOverrides): void}
 */
d3.GeoStreamOverrides.prototype.lineStart;

/**
 * @type {undefined | function(this:d3.GeoStreamOverrides): void}
 */
d3.GeoStreamOverrides.prototype.lineEnd;

/**
 * @type {undefined | function(this:d3.GeoStreamOverrides): void}
 */
d3.GeoStreamOverrides.prototype.polygonStart;

/**
 * @type {undefined | function(this:d3.GeoStreamOverrides): void}
 */
d3.GeoStreamOverrides.prototype.polygonEnd;

/**
 * @type {undefined | function(this:d3.GeoStreamOverrides): void}
 */
d3.GeoStreamOverrides.prototype.sphere;

/**
 * @type {undefined | !d3.GeoStream}
 */
d3.GeoStreamOverrides.prototype.stream;

/**
 * @param {!d3.GeoStreamOverrides} methods
 * @return {{stream: function(!d3.GeoStream): !d3.GeoStream}}
 */
d3.geoTransform = function(methods) {};

/**
 * @return {!d3.GeoIdentity}
 */
d3.geoIdentity = function() {};

/**
 * @record
 */
d3.GeoIdentity = function() {};

/**
 * @param {number=} opt_scale
 */
d3.GeoIdentity.prototype.scale = function(opt_scale) {};

/**
 * @param {!Array<number>=} opt_translate
 */
d3.GeoIdentity.prototype.translate = function(opt_translate) {};

/**
 * @param {boolean=} opt_reflect
 */
d3.GeoIdentity.prototype.reflectX = function(opt_reflect) {};

/**
 * @param {boolean=} opt_reflect
 */
d3.GeoIdentity.prototype.reflectY = function(opt_reflect) {};

/**
 * @param {?Array<!Array<number>>=} opt_extent
 */
d3.GeoIdentity.prototype.clipExtent = function(opt_extent) {};

/**
 * @param {!Array<number>} size
 * @param {!GeoJSON} object
 * @return {!d3.GeoIdentity}
 */
d3.GeoIdentity.prototype.fitSize = function(size, object) {};

/**
 * @param {!Array<!Array<number>>} extent
 * @param {!GeoJSON} object
 * @return {!d3.GeoIdentity}
 */
d3.GeoIdentity.prototype.fitExtent = function(extent, object) {};

/**
 * @param {!d3.GeoStream} stream
 * @return {!d3.GeoStream}
 */
d3.GeoIdentity.prototype.stream = function(stream) {};

////////////////////////////////////////////////////////////////////////////////
// Hierarchy
// https://github.com/d3/d3-hierarchy
////////////////////////////////////////////////////////////////////////////////

// Hierarchy

/**
 * @param {T} data
 * @param {function(T): ?Array<T>=} opt_children
 * @return {!d3.hierarchy<T>}
 * @constructor
 * @template T
 */
d3.hierarchy = function(data, opt_children) {};

/**
 * @type {T}
 */
d3.hierarchy.prototype.data;

/**
 * @type {number}
 */
d3.hierarchy.prototype.depth;

/**
 * @type {number}
 */
d3.hierarchy.prototype.height;

/**
 * @type {?d3.hierarchy}
 */
d3.hierarchy.prototype.parent;

/**
 * @type {!Array<!d3.hierarchy<T>> | undefined}
 */
d3.hierarchy.prototype.children;

/**
 * @type {number | undefined}
 */
d3.hierarchy.prototype.value;

/**
 * @return {!Array<!d3.hierarchy<T>>}
 */
d3.hierarchy.prototype.ancestors = function() {};

/**
 * @return {!Array<!d3.hierarchy<T>>}
 */
d3.hierarchy.prototype.descendants = function() {};

/**
 * @return {!Array<!d3.hierarchy<T>>}
 */
d3.hierarchy.prototype.leaves = function() {};

/**
 * @param {!d3.hierarchy} target
 * @return {!Array<!d3.hierarchy<T>>}
 */
d3.hierarchy.prototype.path = function(target) {};

/**
 * @return {!Array<{source: !d3.hierarchy<T>, target: !d3.hierarchy<T>}>}
 */
d3.hierarchy.prototype.links = function() {};

/**
 * @return {!d3.hierarchy}
 */
d3.hierarchy.prototype.count = function() {};

/**
 * @param {function(!d3.hierarchy<T>): number} value
 * @return {!d3.hierarchy}
 */
d3.hierarchy.prototype.sum = function(value) {};

/**
 * @param {function(!d3.hierarchy<T>, !d3.hierarchy<T>): number} compare
 * @return {!d3.hierarchy}
 */
d3.hierarchy.prototype.sort = function(compare) {};

/**
 * @param {function(!d3.hierarchy<T>): void} callback
 */
d3.hierarchy.prototype.each = function(callback) {};

/**
 * @param {function(!d3.hierarchy<T>): void} callback
 */
d3.hierarchy.prototype.eachAfter = function(callback) {};

/**
 * @param {function(!d3.hierarchy<T>): void} callback
 */
d3.hierarchy.prototype.eachBefore = function(callback) {};

/**
 * @return {!d3.hierarchy<T>}
 */
d3.hierarchy.prototype.copy = function() {};

// Stratify

/**
 * @return {!d3.Stratify}
 */
d3.stratify = function() {};

/**
 * @typedef {function(!Array): !d3.hierarchy}
 */
d3.Stratify;

/**
 * @private {!d3.Stratify}
 */
d3.Stratify_;

/**
 * @param {function(T, number, !Array<T>): ?(string | undefined)=} opt_id
 * @template T
 */
d3.Stratify_.id = function(opt_id) {};

/**
 * @param {function(T, number, !Array<T>): ?(string | undefined)=} opt_parentId
 * @template T
 */
d3.Stratify_.parentId = function(opt_parentId) {};

// Cluster

/**
 * @return {!d3.Cluster}
 */
d3.cluster = function() {};

/**
 * @typedef {function(!d3.hierarchy)}
 */
d3.Cluster;

/**
 * @private {!d3.Cluster}
 */
d3.Cluster_;

/**
 * @param {!Array<number>=} opt_size
 */
d3.Cluster_.size = function(opt_size) {};

/**
 * @param {!Array<number>=} opt_size
 */
d3.Cluster_.nodeSize = function(opt_size) {};

/**
 * @param {function(?, ?): number=} opt_separation
 */
d3.Cluster_.separation = function(opt_separation) {};

// Tree

/**
 * @return {!d3.Tree}
 */
d3.tree = function() {};

/**
 * @typedef {function(!d3.hierarchy)}
 */
d3.Tree;

/**
 * @private {!d3.Tree}
 */
d3.Tree_;

/**
 * @param {!Array<number>=} opt_size
 */
d3.Tree_.size = function(opt_size) {};

/**
 * @param {!Array<number>=} opt_size
 */
d3.Tree_.nodeSize = function(opt_size) {};

/**
 * @param {function(?, ?): number=} opt_separation
 */
d3.Tree_.separation = function(opt_separation) {};

// Treemap

/**
 * @return {!d3.Treemap}
 */
d3.treemap = function() {};

/**
 * @typedef {function(!d3.hierarchy)}
 */
d3.Treemap;

/**
 * @private {!d3.Treemap}
 */
d3.Treemap_;

/**
 * @param {{node: !d3.hierarchy,
 *          x0: number,
 *          y0: number,
 *          x1: number,
 *          y1: number}=} opt_tile
 */
d3.Treemap_.tile = function(opt_tile) {};

/**
 * @param {!Array<number>=} opt_size
 */
d3.Treemap_.size = function(opt_size) {};

/**
 * @param {boolean=} opt_round
 */
d3.Treemap_.round = function(opt_round) {};

/**
 * @param {number | function(?): number=} opt_padding
 */
d3.Treemap_.padding = function(opt_padding) {};

/**
 * @param {number | function(?): number=} opt_padding
 */
d3.Treemap_.paddingInner = function(opt_padding) {};

/**
 * @param {number | function(?): number=} opt_padding
 */
d3.Treemap_.paddingOuter = function(opt_padding) {};

/**
 * @param {number | function(?): number=} opt_padding
 */
d3.Treemap_.paddingTop = function(opt_padding) {};

/**
 * @param {number | function(?): number=} opt_padding
 */
d3.Treemap_.paddingRight = function(opt_padding) {};

/**
 * @param {number | function(?): number=} opt_padding
 */
d3.Treemap_.paddingBottom = function(opt_padding) {};

/**
 * @param {number | function(?): number=} opt_padding
 */
d3.Treemap_.paddingLeft = function(opt_padding) {};

// Treemap Tiling

/**
 * @param {!d3.hierarchy} node
 * @param {number} x0
 * @param {number} y0
 * @param {number} x1
 * @param {number} y1
 * @return {void}
 */
d3.treemapBinary = function(node, x0, y0, x1, y1) {};

/**
 * @param {!d3.hierarchy} node
 * @param {number} x0
 * @param {number} y0
 * @param {number} x1
 * @param {number} y1
 * @return {void}
 */
d3.treemapDice = function(node, x0, y0, x1, y1) {};

/**
 * @param {!d3.hierarchy} node
 * @param {number} x0
 * @param {number} y0
 * @param {number} x1
 * @param {number} y1
 * @return {void}
 */
d3.treemapSlice = function(node, x0, y0, x1, y1) {};

/**
 * @param {!d3.hierarchy} node
 * @param {number} x0
 * @param {number} y0
 * @param {number} x1
 * @param {number} y1
 * @return {void}
 */
d3.treemapSliceDice = function(node, x0, y0, x1, y1) {};

/**
 * @param {!d3.hierarchy} node
 * @param {number} x0
 * @param {number} y0
 * @param {number} x1
 * @param {number} y1
 * @return {void}
 */
d3.treemapSquarify = function(node, x0, y0, x1, y1) {};

/**
 * @param {number} ratio
 * @return {function(!d3.hierarchy, number, number, number, number): void}
 */
d3.treemapSquarify.ratio = function(ratio) {};

/**
 * @param {!d3.hierarchy} node
 * @param {number} x0
 * @param {number} y0
 * @param {number} x1
 * @param {number} y1
 * @return {void}
 */
d3.treemapResquarify = function(node, x0, y0, x1, y1) {};

/**
 * @param {number} ratio
 * @return {function(!d3.hierarchy, number, number, number, number)}
 */
d3.treemapResquarify.ratio = function(ratio) {};

// Partition

/**
 * @return {!d3.Partition}
 */
d3.partition = function() {};

/**
 * @typedef {function(!d3.hierarchy)}
 */
d3.Partition;

/**
 * @private {!d3.Partition}
 */
d3.Partition_;

/**
 * @param {!Array<number>=} opt_size
 */
d3.Partition_.size = function(opt_size) {};

/**
 * @param {boolean=} opt_round
 */
d3.Partition_.round = function(opt_round) {};

/**
 * @param {number=} opt_padding
 */
d3.Partition_.padding = function(opt_padding) {};

// Pack

/**
 * @return {!d3.Pack}
 */
d3.pack = function() {};

/**
 * @typedef {function(!d3.hierarchy)}
 */
d3.Pack;

/**
 * @private {!d3.Pack}
 */
d3.Pack_;

/**
 * @param {function(?): number=} opt_radius
 */
d3.Pack_.radius = function(opt_radius) {};

/**
 * @param {!Array<number>=} opt_size
 */
d3.Pack_.size = function(opt_size) {};

/**
 * @param {number | function(?): number=} opt_padding
 */
d3.Pack_.padding = function(opt_padding) {};

/**
 * @param {!Array<{r: number}>} circles
 * @return {!Array<{x: number, y: number, r: number}>}
 */
d3.packSiblings = function(circles) {};

/**
 * @param {!Array<{x: number, y: number, r: number}>} circles
 * @return {{x: number, y: number, r: number}}
 */
d3.packEnclose = function(circles) {};

////////////////////////////////////////////////////////////////////////////////
// Interpolators
// https://github.com/d3/d3-interpolate
////////////////////////////////////////////////////////////////////////////////

// API Reference

/**
 * @param {T} a
 * @param {T} b
 * @return {function(number): T}
 * @template T
 */
d3.interpolate = function(a, b) {};

/**
 * @param {number} a
 * @param {number} b
 * @return {function(number): number}
 */
d3.interpolateNumber = function(a, b) {};

/**
 * @param {number} a
 * @param {number} b
 * @return {function(number): number}
 */
d3.interpolateRound = function(a, b) {};

/**
 * @param {string} a
 * @param {string} b
 * @return {function(number): string}
 */
d3.interpolateString = function(a, b) {};

/**
 * @param {number | !Date} a
 * @param {number | !Date} b
 * @return {function(number): !Date}
 */
d3.interpolateDate = function(a, b) {};

/**
 * @param {!Array<T>} a
 * @param {!Array<T>} b
 * @return {function(number): !Array<T>}
 * @template T
 */
d3.interpolateArray = function(a, b) {};

/**
 * @param {!Object} a
 * @param {!Object} b
 * @return {function(number): !Object}
 */
d3.interpolateObject = function(a, b) {};

/**
 * @param {string} a
 * @param {string} b
 * @return {function(number): string}
 */
d3.interpolateTransformCss = function(a, b) {};

/**
 * @param {string} a
 * @param {string} b
 * @return {function(number): string}
 */
d3.interpolateTransformSvg = function(a, b) {};

/**
 * @param {!Array<number>} a
 * @param {!Array<number>} b
 * @return {function(number): !Array<number>}
 */
d3.interpolateZoom = function(a, b) {};

// Sampling

/**
 * @param {function(number): T} interpolator
 * @param {number} n
 * @return {!Array<T>}
 * @template T
 */
d3.quantize = function(interpolator, n) {};

// Color Spaces

/**
 * @param {string | !d3.color} a
 * @param {string | !d3.color} b
 * @return {function(number): string}
 */
d3.interpolateRgb = function(a, b) {};

/**
 * @param {number} gamma
 * @return {function((string | !d3.color), (string | !d3.color)):
 *     function(number): string}
 */
d3.interpolateRgb.gamma = function(gamma) {};

/**
 * @param {!Array<string | !d3.color>} colors
 * @return {function(number): string}
 */
d3.interpolateRgbBasis = function(colors) {};

/**
 * @param {!Array<string | !d3.color>} colors
 * @return {function(number): string}
 */
d3.interpolateRgbBasisClosed = function(colors) {};

/**
 * @param {string | !d3.color} a
 * @param {string | !d3.color} b
 * @return {function(number): string}
 */
d3.interpolateHsl = function(a, b) {};

/**
 * @param {string | !d3.color} a
 * @param {string | !d3.color} b
 * @return {function(number): string}
 */
d3.interpolateHslLong = function(a, b) {};

/**
 * @param {string | !d3.color} a
 * @param {string | !d3.color} b
 * @return {function(number): string}
 */
d3.interpolateLab = function(a, b) {};

/**
 * @param {string | !d3.color} a
 * @param {string | !d3.color} b
 * @return {function(number): string}
 */
d3.interpolateHcl = function(a, b) {};

/**
 * @param {string | !d3.color} a
 * @param {string | !d3.color} b
 * @return {function(number): string}
 */
d3.interpolateHclLong = function(a, b) {};

/**
 * @param {string | !d3.color} a
 * @param {string | !d3.color} b
 * @return {function(number): string}
 */
d3.interpolateCubehelix = function(a, b) {};

/**
 * @param {number} gamma
 * @return {function((string | !d3.color), (string | !d3.color)):
 *     function(number): string}
 */
d3.interpolateCubehelix.gamma = function(gamma) {};

/**
 * @param {string | !d3.color} a
 * @param {string | !d3.color} b
 * @return {function(number): string}
 */
d3.interpolateCubehelixLong = function(a, b) {};

/**
 * @param {number} gamma
 * @return {function((string | !d3.color), (string | !d3.color)):
 *     function(number): string}
 */
d3.interpolateCubehelixLong.gamma = function(gamma) {};

// Splines

/**
 * @param {!Array<number>} values
 * @return {function(number): number}
 */
d3.interpolateBasis = function(values) {};

/**
 * @param {!Array<number>} values
 * @return {function(number): number}
 */
d3.interpolateBasisClosed = function(values) {};

////////////////////////////////////////////////////////////////////////////////
// Paths
// https://github.com/d3/d3-path
////////////////////////////////////////////////////////////////////////////////

// API Reference

/**
 * @constructor
 * @return {!d3.path}
 */
d3.path = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
d3.path.prototype.moveTo = function(x, y) {};

/**
 * @return {void}
 */
d3.path.prototype.closePath = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
d3.path.prototype.lineTo = function(x, y) {};

/**
 * @param {number} cpx
 * @param {number} cpy
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
d3.path.prototype.quadraticCurveTo = function(cpx, cpy, x, y) {};

/**
 * @param {number} cpx1
 * @param {number} cpy1
 * @param {number} cpx2
 * @param {number} cpy2
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
d3.path.prototype.bezierCurveTo = function(cpx1, cpy1, cpx2, cpy2, x, y) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} radius
 * @return {void}
 */
d3.path.prototype.arcTo = function(x1, y1, x2, y2, radius) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @param {number} startAngle
 * @param {number} endAngle
 * @param {boolean=} opt_anticlockwise
 * @return {void}
 */
d3.path.prototype.arc = function(x, y, radius, startAngle, endAngle,
    opt_anticlockwise) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @return {void}
 */
d3.path.prototype.rect = function(x, y, w, h) {};

/**
 * @override
 * @return {string}
 */
d3.path.prototype.toString = function() {};

////////////////////////////////////////////////////////////////////////////////
// Polygons
// https://github.com/d3/d3-polygon
////////////////////////////////////////////////////////////////////////////////

// API Reference

/**
 * @param {!Array<!Array<number>>} polygon
 * @return {number}
 */
d3.polygonArea = function(polygon) {};

/**
 * @param {!Array<!Array<number>>} polygon
 * @return {!Array<number>}
 */
d3.polygonCentroid = function(polygon) {};

/**
 * @param {!Array<!Array<number>>} points
 * @return {?Array<!Array<number>>}
 */
d3.polygonHull = function(points) {};

/**
 * @param {!Array<!Array<number>>} polygon
 * @param {!Array<number>} point
 * @return {boolean}
 */
d3.polygonContains = function(polygon, point) {};

/**
 * @param {!Array<!Array<number>>} polygon
 * @return {number}
 */
d3.polygonLength = function(polygon) {};

////////////////////////////////////////////////////////////////////////////////
// Quadtrees
// https://github.com/d3/d3-quadtree
////////////////////////////////////////////////////////////////////////////////

// API Reference

/**
 * @param {!Array<T>=} opt_data
 * @param {function(T): number=} opt_x
 * @param {function(T): number=} opt_y
 * @constructor
 * @return {!d3.quadtree<T>}
 * @template T
 */
d3.quadtree = function(opt_data, opt_x, opt_y) {};

/**
 * @param {function(T): number=} opt_x
 */
d3.quadtree.prototype.x = function(opt_x) {};

/**
 * @param {function(T): number=} opt_y
 */
d3.quadtree.prototype.y = function(opt_y) {};

/**
 * @param {!Array<!Array<number>>=} opt_extent
 */
d3.quadtree.prototype.extent = function(opt_extent) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {!d3.quadtree<T>}
 */
d3.quadtree.prototype.cover = function(x, y) {};

/**
 * @param {T} datum
 * @return {!d3.quadtree<T>}
 */
d3.quadtree.prototype.add = function(datum) {};

/**
 * @param {!Array<T>} data
 * @return {!d3.quadtree<T>}
 */
d3.quadtree.prototype.addAll = function(data) {};

/**
 * @param {T} datum
 * @return {!d3.quadtree<T>}
 */
d3.quadtree.prototype.remove = function(datum) {};

/**
 * @param {!Array<T>} data
 * @return {!d3.quadtree<T>}
 */
d3.quadtree.prototype.removeAll = function(data) {};

/**
 * @return {!d3.quadtree<T>}
 */
d3.quadtree.prototype.copy = function() {};

/**
 * @return {!d3.QuadtreeNode | undefined}
 */
d3.quadtree.prototype.root = function() {};

/**
 * @return {!Array<T>}
 */
d3.quadtree.prototype.data = function() {};

/**
 * @return {number}
 */
d3.quadtree.prototype.size = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number=} opt_radius
 * @return {T | undefined}
 */
d3.quadtree.prototype.find = function(x, y, opt_radius) {};

/**
 * @param {function(!d3.QuadtreeNode, number, number, number, number):
 *     (boolean | undefined)} callback
 */
d3.quadtree.prototype.visit = function(callback) {};

/**
 * @param {function(!d3.QuadtreeNode, number, number, number, number): void}
 *     callback
 */
d3.quadtree.prototype.visitAfter = function(callback) {};

// Nodes

/**
 * @record
 */
d3.QuadtreeLeaf = function() {};

/**
 * @type {?}
 */
d3.QuadtreeLeaf.prototype.data;

/**
 * @type {!d3.QuadtreeLeaf | undefined}
 */
d3.QuadtreeLeaf.prototype.next;

/**
 * JSCompiler doesn't support recursive typedefs, therefore we use Object
 * instead of (!d3.QuadtreeNode | !d3.QuadtreeLeaf) for child nodes.
 * @typedef {!d3.QuadtreeLeaf | !Array<!Object | undefined>}
 */
d3.QuadtreeNode;

////////////////////////////////////////////////////////////////////////////////
// Queues
// https://github.com/d3/d3-queue
////////////////////////////////////////////////////////////////////////////////

// API Reference

/**
 * @param {number=} opt_concurrency
 * @constructor
 * @return {!d3.queue}
 */
d3.queue = function(opt_concurrency) {};

/**
 * @param {!Function} task
 * @param {...?} var_args
 * @return {!d3.queue}
 */
d3.queue.prototype.defer = function(task, var_args) {};

/**
 * @return {!d3.queue}
 */
d3.queue.prototype.abort = function() {};

/**
 * @param {!function(?Object, ...?)} callback
 * @return {!d3.queue}
 */
d3.queue.prototype.await = function(callback) {};

/**
 * @param {!function(?Object, !Array=)} callback
 * @return {!d3.queue}
 */
d3.queue.prototype.awaitAll = function(callback) {};

////////////////////////////////////////////////////////////////////////////////
// Random Numbers
// https://github.com/d3/d3-random
////////////////////////////////////////////////////////////////////////////////

// API Reference

/**
 * @param {number=} opt_minOrMax
 * @param {number=} opt_max
 * @return {function(): number}
 */
d3.randomUniform = function(opt_minOrMax, opt_max) {};

/**
 * @param {number=} opt_mu
 * @param {number=} opt_sigma
 * @return {function(): number}
 */
d3.randomNormal = function(opt_mu, opt_sigma) {};

/**
 * @param {number=} opt_mu
 * @param {number=} opt_sigma
 * @return {function(): number}
 */
d3.randomLogNormal = function(opt_mu, opt_sigma) {};

/**
 * @param {number} n
 * @return {function(): number}
 */
d3.randomBates = function(n) {};

/**
 * @param {number} n
 * @return {function(): number}
 */
d3.randomIrwinHall = function(n) {};

/**
 * @param {number} lambda
 * @return {function(): number}
 */
d3.randomExponential = function(lambda) {};

////////////////////////////////////////////////////////////////////////////////
// Requests
// https://github.com/d3/d3-request
////////////////////////////////////////////////////////////////////////////////

// API Reference

/**
 * @param {string} url
 * @param {function(this:d3.Request, ?, XMLHttpRequest): void=} opt_callback
 * @return {!d3.Request}
 */
d3.request = function(url, opt_callback) {};

/**
 * @record
 */
d3.Request = function() {};

/**
 * @param {string} name
 * @param {?string=} opt_value
 */
d3.Request.prototype.header = function(name, opt_value) {};

/**
 * @param {?string=} opt_type
 */
d3.Request.prototype.mimeType = function(opt_type) {};

/**
 * @param {?string=} opt_value
 */
d3.Request.prototype.user = function(opt_value) {};

/**
 * @param {?string=} opt_value
 */
d3.Request.prototype.password = function(opt_value) {};

/**
 * @param {number=} opt_timeout
 */
d3.Request.prototype.timeout = function(opt_timeout) {};

/**
 * @param {string=} opt_type
 */
d3.Request.prototype.responseType = function(opt_type) {};

/**
 * @param {function(this:d3.Request, XMLHttpRequest): ?} value
 */
d3.Request.prototype.response = function(value) {};

/**
 * @param {string | function(?, ?): void=} opt_dataOrCallback
 * @param {function(?, ?): void=} opt_callback
 */
d3.Request.prototype.get = function(opt_dataOrCallback, opt_callback) {};

/**
 * @param {string | function(?, ?): void=} opt_dataOrCallback
 * @param {function(?, ?): void=} opt_callback
 */
d3.Request.prototype.post = function(opt_dataOrCallback, opt_callback) {};

/**
 * @param {string} method
 * @param {string | function(?, ?): void=} opt_dataOrCallback
 * @param {function(?, ?): void=} opt_callback
 */
d3.Request.prototype.send =
    function(method, opt_dataOrCallback, opt_callback) {};

/**
 * @return {!d3.Request}
 */
d3.Request.prototype.abort = function() {};

/**
 * @param {string} type
 * @param {?Function=} opt_listener
 */
d3.Request.prototype.on = function(type, opt_listener) {};

/**
 * @record
 * @extends {d3.Request}
 */
d3.DsvRequest = function() {};

/**
 * @param {!Function=} opt_rowMapper
 */
d3.DsvRequest.prototype.row = function(opt_rowMapper) {};

/**
 * @param {string} url
 * @param {!Function=} opt_rowMapperOrCallback
 * @param {function(this:d3.DsvRequest, ?, !d3.DsvParseResult): void=}
 *     opt_callback
 * @return {!d3.DsvRequest}
 */
d3.csv = function(url, opt_rowMapperOrCallback, opt_callback) {};

/**
 * @param {string} url
 * @param {function(this:d3.Request, ?, DocumentFragment): void=} opt_callback
 * @return {!d3.Request}
 */
d3.html = function(url, opt_callback) {};

/**
 * @param {string} url
 * @param {function(this:d3.Request, ?, ?): void=} opt_callback
 * @return {!d3.Request}
 */
d3.json = function(url, opt_callback) {};

/**
 * @param {string} url
 * @param {function(this:d3.Request, ?, string): void=} opt_callback
 * @return {!d3.Request}
 */
d3.text = function(url, opt_callback) {};

/**
 * @param {string} url
 * @param {!Function=} opt_rowMapperOrCallback
 * @param {function(this:d3.DsvRequest, ?, !d3.DsvParseResult): void=}
 *     opt_callback
 * @return {!d3.DsvRequest}
 */
d3.tsv = function(url, opt_rowMapperOrCallback, opt_callback) {};

/**
 * @param {string} url
 * @param {function(this:d3.Request, ?, ?): void=} opt_callback
 * @return {!d3.Request}
 */
d3.xml = function(url, opt_callback) {};

////////////////////////////////////////////////////////////////////////////////
// Scales
// https://github.com/d3/d3-scale
////////////////////////////////////////////////////////////////////////////////

// Linear Scales

/**
 * @return {!d3.LinearScale}
 */
d3.scaleLinear = function() {};

/**
 * Besides numbers, continuous scales also support RGB string ranges.
 * @typedef {function(number): ?}
 */
d3.LinearScale;

/**
 * @private {!d3.LinearScale}
 */
d3.LinearScale_;

/**
 * @param {number} value
 * @return {number}
 */
d3.LinearScale_.invert = function(value) {};

/**
 * @param {!Array<number>=} opt_domain
 */
d3.LinearScale_.domain = function(opt_domain) {};

/**
 * @param {!(Array<number> | Array<string>)=} opt_range
 */
d3.LinearScale_.range = function(opt_range) {};

/**
 * @param {!Array<number>=} opt_range
 */
d3.LinearScale_.rangeRound = function(opt_range) {};

/**
 * @param {boolean=} opt_clamp
 */
d3.LinearScale_.clamp = function(opt_clamp) {};

/**
 * @param {function(?, ?): function(number)=} opt_interpolate
 */
d3.LinearScale_.interpolate = function(opt_interpolate) {};

/**
 * @param {number=} opt_count
 * @return {!Array<number>}
 */
d3.LinearScale_.ticks = function(opt_count) {};

/**
 * @param {number=} opt_count
 * @param {string=} opt_specifier
 * @return {function(number): string}
 */
d3.LinearScale_.tickFormat = function(opt_count, opt_specifier) {};

/**
 * @param {number=} opt_count
 * @return {!d3.LinearScale}
 */
d3.LinearScale_.nice = function(opt_count) {};

/**
 * @return {!d3.LinearScale}
 */
d3.LinearScale_.copy = function() {};

// Power Scales

/**
 * @return {!d3.PowScale}
 */
d3.scalePow = function() {};

/**
 * @typedef {function(number): ?}
 */
d3.PowScale;

/**
 * @private {!d3.PowScale}
 */
d3.PowScale_;

/**
 * @param {number} value
 * @return {number}
 */
d3.PowScale_.invert = function(value) {};

/**
 * @param {number=} opt_exponent
 */
d3.PowScale_.exponent = function(opt_exponent) {};

/**
 * @param {!Array<number>=} opt_domain
 */
d3.PowScale_.domain = function(opt_domain) {};

/**
 * @param {!(Array<number> | Array<string>)=} opt_range
 */
d3.PowScale_.range = function(opt_range) {};

/**
 * @param {!Array<number>=} opt_range
 */
d3.PowScale_.rangeRound = function(opt_range) {};

/**
 * @param {boolean=} opt_clamp
 */
d3.PowScale_.clamp = function(opt_clamp) {};

/**
 * @param {function(?, ?): function(number)=} opt_interpolate
 */
d3.PowScale_.interpolate = function(opt_interpolate) {};

/**
 * @param {number=} opt_count
 * @return {!Array<number>}
 */
d3.PowScale_.ticks = function(opt_count) {};

/**
 * @param {number=} opt_count
 * @param {string=} opt_specifier
 * @return {function(number): string}
 */
d3.PowScale_.tickFormat = function(opt_count, opt_specifier) {};

/**
 * @param {number=} opt_count
 * @return {!d3.PowScale}
 */
d3.PowScale_.nice = function(opt_count) {};

/**
 * @return {!d3.PowScale}
 */
d3.PowScale_.copy = function() {};

/**
 * @return {!d3.PowScale}
 */
d3.scaleSqrt = function() {};

// Log Scales

/**
 * @return {!d3.LogScale}
 */
d3.scaleLog = function() {};

/**
 * @typedef {function(number): ?}
 */
d3.LogScale;

/**
 * @private {!d3.LogScale}
 */
d3.LogScale_;

/**
 * @param {number} value
 * @return {number}
 */
d3.LogScale_.invert = function(value) {};

/**
 * @param {number=} opt_base
 */
d3.LogScale_.base = function(opt_base) {};

/**
 * @param {!Array<number>=} opt_domain
 */
d3.LogScale_.domain = function(opt_domain) {};

/**
 * @param {!(Array<number> | Array<string>)=} opt_range
 */
d3.LogScale_.range = function(opt_range) {};

/**
 * @param {!Array<number>=} opt_range
 */
d3.LogScale_.rangeRound = function(opt_range) {};

/**
 * @param {boolean=} opt_clamp
 */
d3.LogScale_.clamp = function(opt_clamp) {};

/**
 * @param {function(?, ?): function(number)=} opt_interpolate
 */
d3.LogScale_.interpolate = function(opt_interpolate) {};

/**
 * @param {number=} opt_count
 * @return {!Array<number>}
 */
d3.LogScale_.ticks = function(opt_count) {};

/**
 * @param {number=} opt_count
 * @param {string=} opt_specifier
 * @return {function(number): string}
 */
d3.LogScale_.tickFormat = function(opt_count, opt_specifier) {};

/**
 * @param {number=} opt_count
 * @return {!d3.LogScale}
 */
d3.LogScale_.nice = function(opt_count) {};

/**
 * @return {!d3.LogScale}
 */
d3.LogScale_.copy = function() {};

// Identity Scales

/**
 * @return {!d3.IdentityScale}
 */
d3.scaleIdentity = function() {};

/**
 * @typedef {function(number): number}
 */
d3.IdentityScale;

/**
 * @private {!d3.IdentityScale}
 */
d3.IdentityScale_;

/**
 * @param {number} value
 * @return {number}
 */
d3.IdentityScale_.invert = function(value) {};

/**
 * @param {!Array<number>=} opt_domain
 */
d3.IdentityScale_.domain = function(opt_domain) {};

/**
 * @param {!Array<number>=} opt_range
 */
d3.IdentityScale_.range = function(opt_range) {};

/**
 * @param {number=} opt_count
 * @return {!Array<number>}
 */
d3.IdentityScale_.ticks = function(opt_count) {};

/**
 * @param {number=} opt_count
 * @param {string=} opt_specifier
 * @return {function(number): string}
 */
d3.IdentityScale_.tickFormat = function(opt_count, opt_specifier) {};

/**
 * @param {number=} opt_count
 * @return {!d3.IdentityScale}
 */
d3.IdentityScale_.nice = function(opt_count) {};

/**
 * @return {!d3.IdentityScale}
 */
d3.IdentityScale_.copy = function() {};

// Time Scales

/**
 * @return {!d3.TimeScale}
 */
d3.scaleTime = function() {};

/**
 * @typedef {function((number | !Date)): ?}
 */
d3.TimeScale;

/**
 * @private {!d3.TimeScale}
 */
d3.TimeScale_;

/**
 * @param {number} value
 * @return {!Date}
 */
d3.TimeScale_.invert = function(value) {};

/**
 * @param {!Array<!Date>=} opt_domain
 */
d3.TimeScale_.domain = function(opt_domain) {};

/**
 * @param {!(Array<number> | Array<string>)=} opt_range
 */
d3.TimeScale_.range = function(opt_range) {};

/**
 * @param {!Array<number>=} opt_range
 */
d3.TimeScale_.rangeRound = function(opt_range) {};

/**
 * @param {boolean=} opt_clamp
 */
d3.TimeScale_.clamp = function(opt_clamp) {};

/**
 * @param {function(?, ?): function(number)=} opt_interpolate
 */
d3.TimeScale_.interpolate = function(opt_interpolate) {};

/**
 * @param {number | ?d3.Interval} opt_countOrInterval
 * @return {!Array<!Date>}
 */
d3.TimeScale_.ticks = function(opt_countOrInterval) {};

/**
 * @param {?number | d3.Interval=} opt_countOrInterval
 * @param {string=} opt_specifier
 * @return {function(!Date): string}
 */
d3.TimeScale_.tickFormat = function(opt_countOrInterval, opt_specifier) {};

/**
 * @param {?number | d3.Interval=} opt_countOrInterval
 * @param {number=} opt_step
 */
d3.TimeScale_.nice = function(opt_countOrInterval, opt_step) {};

/**
 * @return {!d3.TimeScale}
 */
d3.TimeScale_.copy = function() {};

/**
 * @return {!d3.TimeScale}
 */
d3.scaleUtc = function() {};

// Sequential Scales

/**
 * @param {function(number): ?} interpolator
 * @return {!d3.SequentialScale}
 */
d3.scaleSequential = function(interpolator) {};

/**
 * @typedef {function(number): ?}
 */
d3.SequentialScale;

/**
 * @private {!d3.SequentialScale}
 */
d3.SequentialScale_;

/**
 * @param {!Array<number>=} opt_domain
 */
d3.SequentialScale_.domain = function(opt_domain) {};

/**
 * @param {boolean=} opt_clamp
 */
d3.SequentialScale_.clamp = function(opt_clamp) {};

/**
 * @param {function(number)=} opt_interpolator
 */
d3.SequentialScale_.interpolator = function(opt_interpolator) {};

/**
 * @return {!d3.SequentialScale}
 */
d3.SequentialScale_.copy = function() {};

/**
 * @param {number} t
 * @return {string}
 */
d3.interpolateViridis = function(t) {};

/**
 * @param {number} t
 * @return {string}
 */
d3.interpolateInferno = function(t) {};

/**
 * @param {number} t
 * @return {string}
 */
d3.interpolateMagma = function(t) {};

/**
 * @param {number} t
 * @return {string}
 */
d3.interpolatePlasma = function(t) {};

/**
 * @param {number} t
 * @return {string}
 */
d3.interpolateWarm = function(t) {};

/**
 * @param {number} t
 * @return {string}
 */
d3.interpolateCool = function(t) {};

/**
 * @param {number} t
 * @return {string}
 */
d3.interpolateRainbow = function(t) {};

/**
 * @param {number} t
 * @return {string}
 */
d3.interpolateCubehelixDefault = function(t) {};

// Quantize Scales

/**
 * @return {!d3.QuantizeScale}
 */
d3.scaleQuantize = function() {};

/**
 * @typedef {function(number): ?}
 */
d3.QuantizeScale;

/**
 * @private {!d3.QuantizeScale}
 */
d3.QuantizeScale_;

/**
 * @param {?} value
 * @return {!Array<number>}
 */
d3.QuantizeScale_.invertExtent = function(value) {};

/**
 * @param {!Array<number>=} opt_domain
 */
d3.QuantizeScale_.domain = function(opt_domain) {};

/**
 * @param {!Array=} opt_range
 */
d3.QuantizeScale_.range = function(opt_range) {};

/**
 * @param {number=} opt_count
 * @return {!Array<number>}
 */
d3.QuantizeScale_.ticks = function(opt_count) {};

/**
 * @param {number=} opt_count
 * @param {string=} opt_specifier
 * @return {function(number): string}
 */
d3.QuantizeScale_.tickFormat = function(opt_count, opt_specifier) {};

/**
 * @param {number=} opt_count
 * @return {!d3.QuantizeScale}
 */
d3.QuantizeScale_.nice = function(opt_count) {};

/**
 * @return {!d3.QuantizeScale}
 */
d3.QuantizeScale_.copy = function() {};

// Quantile Scales

/**
 * @return {!d3.QuantileScale}
 */
d3.scaleQuantile = function() {};

/**
 * @typedef {function(number): ?}
 */
d3.QuantileScale;

/**
 * @private {!d3.QuantileScale}
 */
d3.QuantileScale_;

/**
 * @param {?} value
 * @return {!Array<number>}
 */
d3.QuantileScale_.invertExtent = function(value) {};

/**
 * @param {!Array<number>=} opt_domain
 */
d3.QuantileScale_.domain = function(opt_domain) {};

/**
 * @param {!Array=} opt_range
 */
d3.QuantileScale_.range = function(opt_range) {};

/**
 * @return {!Array<number>}
 */
d3.QuantileScale_.quantiles = function() {};

/**
 * @return {!d3.QuantileScale}
 */
d3.QuantileScale_.copy = function() {};

// Threshold Scales

/**
 * @return {!d3.ThresholdScale}
 */
d3.scaleThreshold = function() {};

/**
 * @typedef {function((number | string)): ?}
 */
d3.ThresholdScale;

/**
 * @private {!d3.ThresholdScale}
 */
d3.ThresholdScale_;

/**
 * @param {?} value
 * @return {!Array}
 */
d3.ThresholdScale_.invertExtent = function(value) {};

/**
 * @param {!Array=} opt_domain
 */
d3.ThresholdScale_.domain = function(opt_domain) {};

/**
 * @param {!Array=} opt_range
 */
d3.ThresholdScale_.range = function(opt_range) {};

/**
 * @return {!d3.ThresholdScale}
 */
d3.ThresholdScale_.copy = function() {};

// Ordinal Scales

/**
 * @param {!Array<?>=} opt_range
 * @return {!d3.OrdinalScale}
 */
d3.scaleOrdinal = function(opt_range) {};

/**
 * @typedef {function(string): ?}
 */
d3.OrdinalScale;

/**
 * @private {!d3.OrdinalScale}
 */
d3.OrdinalScale_;

/**
 * @param {!(Array<string> | Array<number>)=} opt_domain
 */
d3.OrdinalScale_.domain = function(opt_domain) {};

/**
 * @param {!Array=} opt_range
 */
d3.OrdinalScale_.range = function(opt_range) {};

/**
 * @param {?=} opt_value
 */
d3.OrdinalScale_.unknown = function(opt_value) {};

/**
 * @return {!d3.OrdinalScale}
 */
d3.OrdinalScale_.copy = function() {};

/**
 * @type {{name: string}}
 */
d3.scaleImplicit;

// Band Scales

/**
 * @return {!d3.BandScale}
 */
d3.scaleBand = function() {};

/**
 * @typedef {function(string): number}
 */
d3.BandScale;

/**
 * @private {!d3.BandScale}
 */
d3.BandScale_;

/**
 * @param {!(Array<string> | Array<number>)=} opt_domain
 */
d3.BandScale_.domain = function(opt_domain) {};

/**
 * @param {!Array<number>=} opt_range
 */
d3.BandScale_.range = function(opt_range) {};

/**
 * @param {!Array<number>=} opt_range
 */
d3.BandScale_.rangeRound = function(opt_range) {};

/**
 * @param {boolean=} opt_round
 */
d3.BandScale_.round = function(opt_round) {};

/**
 * @param {number=} opt_padding
 */
d3.BandScale_.paddingInner = function(opt_padding) {};

/**
 * @param {number=} opt_padding
 */
d3.BandScale_.paddingOuter = function(opt_padding) {};

/**
 * @param {number=} opt_padding
 */
d3.BandScale_.padding = function(opt_padding) {};

/**
 * @param {number=} opt_align
 */
d3.BandScale_.align = function(opt_align) {};

/**
 * @return {number}
 */
d3.BandScale_.bandwidth = function() {};

/**
 * @return {number}
 */
d3.BandScale_.step = function() {};

/**
 * @return {!d3.BandScale}
 */
d3.BandScale_.copy = function() {};

// Point Scales

/**
 * @return {!d3.PointScale}
 */
d3.scalePoint = function() {};

/**
 * @typedef {function(string): number}
 */
d3.PointScale;

/**
 * @private {!d3.PointScale}
 */
d3.PointScale_;

/**
 * @param {!(Array<string> | Array<number>)=} opt_domain
 */
d3.PointScale_.domain = function(opt_domain) {};

/**
 * @param {!Array<number>=} opt_range
 */
d3.PointScale_.range = function(opt_range) {};

/**
 * @param {!Array<number>=} opt_range
 */
d3.PointScale_.rangeRound = function(opt_range) {};

/**
 * @param {boolean=} opt_round
 */
d3.PointScale_.round = function(opt_round) {};

/**
 * @param {number=} opt_padding
 */
d3.PointScale_.padding = function(opt_padding) {};

/**
 * @param {number=} opt_align
 */
d3.PointScale_.align = function(opt_align) {};

/**
 * @return {number}
 */
d3.PointScale_.bandwidth = function() {};

/**
 * @return {number}
 */
d3.PointScale_.step = function() {};

/**
 * @return {!d3.PointScale}
 */
d3.PointScale_.copy = function() {};

// Category Scales

/**
 * @type {!Array<string>}
 */
d3.schemeCategory10;

/**
 * @type {!Array<string>}
 */
d3.schemeCategory20;

/**
 * @type {!Array<string>}
 */
d3.schemeCategory20b;

/**
 * @type {!Array<string>}
 */
d3.schemeCategory20c;

////////////////////////////////////////////////////////////////////////////////
// Selections
// https://github.com/d3/d3-selection
////////////////////////////////////////////////////////////////////////////////

// API Reference

// Selecting Elements

// According to https://github.com/d3/d3-selection/issues/103 d3.selection has
// limited support for non-element item types. Although the following examples
// work
//
//   var s = d3.select(window).on('resize', function() { ... });
//   var s = d3.select('p').append(() => document.createTextNode('foo'));
//
// most method calls such as s.attr('foo') or s.select('p') throw an Error.
//
// The declarations below try to stay on the safe side, therefore they only
// accept elements. To select a text node or a window, cast it first to {?}.

/**
 * @return {!d3.selection}
 * @constructor
 */
d3.selection = function() {};

/**
 * @param {?string | Element} selector
 * @return {!d3.selection}
 */
d3.select = function(selector) {};

/**
 * @param {?string | Array<!Element> | NodeList<!Element>} selector
 * @return {!d3.selection}
 */
d3.selectAll = function(selector) {};

/**
 * @param {?string | function(this:Element): ?Element} selector
 * @return {!d3.selection}
 */
d3.selection.prototype.select = function(selector) {};

/**
 * @param {?string | function(this:Element): !IArrayLike<!Element>} selector
 * @return {!d3.selection}
 */
d3.selection.prototype.selectAll = function(selector) {};

/**
 * @param {string |
 *     function(this:Element, ?, number, !IArrayLike<!Element>): boolean} filter
 * @return {!d3.selection}
 */
d3.selection.prototype.filter = function(filter) {};

/**
 * @param {!d3.selection} other
 * @return {!d3.selection}
 */
d3.selection.prototype.merge = function(other) {};

/**
 * @param {string} selector
 * @return {function(this:Element): boolean}
 */
d3.matcher = function(selector) {};

/**
 * @param {string} selector
 * @return {function(this:Element): ?Element}
 */
d3.selector = function(selector) {};

/**
 * @param {string} selector
 * @return {function(this:Element): !IArrayLike<!Element>}
 */
d3.selectorAll = function(selector) {};

/**
 * @param {!(Node | Document | Window)} node
 * @return {!Window}
 */
d3.window = function(node) {};

// Modifying Elements

/**
 * @param {string} name
 * @param {?string | number | boolean | d3.local |
 *     function(this:Element, ?, number, !IArrayLike<!Element>):
 *         ?(string | number | boolean)=} opt_value
 */
d3.selection.prototype.attr = function(name, opt_value) {};

/**
 * @param {string} names Space separated CSS class names.
 * @param {boolean |
 *     function(this:Element, ?, number, !IArrayLike<!Element>): boolean=}
 *     opt_value
 */
d3.selection.prototype.classed = function(names, opt_value) {};

/**
 * @param {string} name
 * @param {?string | number |
 *    function(this:Element, ?, number, !IArrayLike<!Element>):
 *        ?(string | number)=} opt_value
 * @param {?string=} opt_priority
 */
d3.selection.prototype.style = function(name, opt_value, opt_priority) {};

/**
 * @param {string | !d3.local} name
 * @param {* | function(this:Element, ?, number, !IArrayLike<!Element>)=}
 *     opt_value
 */
d3.selection.prototype.property = function(name, opt_value) {};

/**
 * @param {?string |
 *     function(this:Element, ?, number, !IArrayLike<!Element>): ?string=}
 *     opt_value
 */
d3.selection.prototype.text = function(opt_value) {};

/**
 * @param {?string |
 *     function(this:Element, ?, number, !IArrayLike<!Element>): ?string=}
 *     opt_value
 */
d3.selection.prototype.html = function(opt_value) {};

/**
 * @param {string |
 *     function(this:Element, ?, number, !IArrayLike<!Element>): !Element} type
 * @return {!d3.selection}
 */
d3.selection.prototype.append = function(type) {};

/**
 * @param {string |
 *     function(this:Element, ?, number, !IArrayLike<!Element>): !Element} type
 * @param {?string |
 *     function(this:Element, ?, number, !IArrayLike<!Element>): ?Element=}
 *     opt_before
 * @return {!d3.selection}
 */
d3.selection.prototype.insert = function(type, opt_before) {};

/**
 * @return {!d3.selection}
 */
d3.selection.prototype.remove = function() {};

/**
 * @param {function(?, ?): number} compare
 * @return {!d3.selection}
 */
d3.selection.prototype.sort = function(compare) {};

/**
 * @return {!d3.selection}
 */
d3.selection.prototype.order = function() {};

/**
 * @return {!d3.selection}
 */
d3.selection.prototype.raise = function() {};

/**
 * @return {!d3.selection}
 */
d3.selection.prototype.lower = function() {};

/**
 * @param {string} name
 * @return {function(this:Element): !Element}
 */
d3.creator = function(name) {};

// Joining Data

/**
 * @param {!Array |
 *     function(this:Element, ?, number, !IArrayLike<!Element>): !Array=}
 *     opt_data
 * @param {function(this:Element, ?, number, !IArrayLike)=} opt_key
 */
d3.selection.prototype.data = function(opt_data, opt_key) {};

/**
 * @return {!d3.selection}
 */
d3.selection.prototype.enter = function() {};

/**
 * @return {!d3.selection}
 */
d3.selection.prototype.exit = function() {};

/**
 * @param {* | function(this:Element, ?, number, !IArrayLike<!Element>)=}
 *     opt_value
 * @return {?}
 */
d3.selection.prototype.datum = function(opt_value) {};

// Handling Events

/**
 * @param {string} typenames
 * @param {?function(this:Element, ?, number, !IArrayLike<!Element>)=}
 *     opt_listener
 * @param {boolean=} opt_capture
 * @return {!d3.selection}
 */
d3.selection.prototype.on = function(typenames, opt_listener, opt_capture) {};

/**
 * @record
 */
d3.EventParameters = function() {};

/**
 * @type {boolean | undefined}
 */
d3.EventParameters.prototype.bubbles;

/**
 * @type {boolean | undefined}
 */
d3.EventParameters.prototype.cancelable;

/**
 * @type {*}
 */
d3.EventParameters.prototype.details;

/**
 * @param {string} type
 * @param {!d3.EventParameters |
 *     function(this:Element, ?, number, !NodeList<!Element>):
 *         !d3.EventParameters=} opt_parameters
 */
d3.selection.prototype.dispatch = function(type, opt_parameters) {};

/**
 * @type {?Event |
 *     {type: string, target: ?, sourceEvent: ?{type: string, target: ?}}}
 */
d3.event;

/**
 * @param {{type: string, target: ?}} event
 * @param {function(this:T, ...?): R} listener
 * @param {T=} opt_that
 * @param {?Array | Arguments=} opt_arguments
 * @return {R}
 * @template T, R
 */
d3.customEvent = function(event, listener, opt_that, opt_arguments) {};

/**
 * @param {!Element} container
 * @return {!Array<number>}
 */
d3.mouse = function(container) {};

/**
 * @param {!Element} container
 * @param {!TouchList | string} touchesOrIdentifier
 * @param {string=} opt_identifier
 * @return {?Array<!Array<number>>}
 */
d3.touch = function(container, touchesOrIdentifier, opt_identifier) {};

/**
 * @param {!Element} container
 * @param {!TouchList=} opt_touches
 * @return {!Array<!Array<number>>}
 */
d3.touches = function(container, opt_touches) {};

// Control Flow

/**
 * @param {function(this:Element, ?, number, !IArrayLike<!Element>)} callback
 * @return {!d3.selection}
 */
d3.selection.prototype.each = function(callback) {};

/**
 * @param {!Function} callback
 * @param {...?} var_args
 */
d3.selection.prototype.call = function(callback, var_args) {};

/**
 * @return {boolean}
 */
d3.selection.prototype.empty = function() {};

/**
 * @return {!Array<!Element>}
 */
d3.selection.prototype.nodes = function() {};

/**
 * @return {?Element}
 */
d3.selection.prototype.node = function() {};

/**
 * @return {number}
 */
d3.selection.prototype.size = function() {};

// Local Variables

/**
 * @return {!d3.local}
 * @constructor
 * @template T
 */
d3.local = function() {};

/**
 * @param {!Element} node
 * @param {T} value
 * @return {!Element}
 */
d3.local.prototype.set = function(node, value) {};

/**
 * @param {!Element} node
 * @return {T | undefined} value
 */
d3.local.prototype.get = function(node) {};

/**
 * @param {!Element} node
 * @return {boolean}
 */
d3.local.prototype.remove = function(node) {};

/**
 * @override
 * @return {string}
 */
d3.local.prototype.toString = function() {};

// Namespaces

/**
 * @param {string} name
 * @return {{local: string, space: string} | string}
 */
d3.namespace = function(name) {};

/**
 * @type {{
 *   svg: string,
 *   xhtml: string,
 *   xlink: string,
 *   xml: string,
 *   xmlns: string
 * }}
 */
d3.namespaces;

////////////////////////////////////////////////////////////////////////////////
// Shapes
// https://github.com/d3/d3-shape
////////////////////////////////////////////////////////////////////////////////

// API Reference

// Arcs

/**
 * @return {!d3.Arc}
 */
d3.arc = function() {};

/**
 * @typedef {function(...?)}
 */
d3.Arc;

/**
 * @private {!d3.Arc}
 */
d3.Arc_;

/**
 * @param {...?} var_args
 * @return {!Array<number>}
 */
d3.Arc_.centroid = function(var_args) {};

/**
 * @param {number | function(...?): number=} opt_radius
 */
d3.Arc_.innerRadius = function(opt_radius) {};

/**
 * @param {number | function(...?): number=} opt_radius
 */
d3.Arc_.outerRadius = function(opt_radius) {};

/**
 * @param {number | function(...?): number=} opt_radius
 */
d3.Arc_.cornerRadius = function(opt_radius) {};

/**
 * @param {number | function(...?): number=} opt_angle
 */
d3.Arc_.startAngle = function(opt_angle) {};

/**
 * @param {number | function(...?): number=} opt_angle
 */
d3.Arc_.endAngle = function(opt_angle) {};

/**
 * @param {number | function(...?): number=} opt_angle
 */
d3.Arc_.padAngle = function(opt_angle) {};

/**
 * @param {number | function(...?): number=} opt_radius
 */
d3.Arc_.padRadius = function(opt_radius) {};

/**
 * @param {?CanvasPathMethods=} opt_context
 */
d3.Arc_.context = function(opt_context) {};

// Pies

/**
 * @return {!d3.Pie}
 */
d3.pie = function() {};

/**
 * @typedef {function(!Array, ...?): !Array<{
 *   data: ?,
 *   value: number,
 *   index: number,
 *   startAngle: number,
 *   endAngle: number,
 *   padAngle: number
 * }>}
 */
d3.Pie;

/**
 * @private {!d3.Pie}
 */
d3.Pie_;

/**
 * @param {number | function(T, number, !Array<T>): number=} opt_value
 * @template T
 */
d3.Pie_.value = function(opt_value) {};

/**
 * @param {?function(?, ?): number=} opt_compare
 */
d3.Pie_.sort = function(opt_compare) {};

/**
 * @param {?function(?, ?): number=} opt_compare
 */
d3.Pie_.sortValues = function(opt_compare) {};

/**
 * @param {number | function(!Array, ...?): number=} opt_angle
 */
d3.Pie_.startAngle = function(opt_angle) {};

/**
 * @param {number | function(!Array, ...?): number=} opt_angle
 */
d3.Pie_.endAngle = function(opt_angle) {};

/**
 * @param {number | function(!Array, ...?): number=} opt_angle
 */
d3.Pie_.padAngle = function(opt_angle) {};

// Lines

/**
 * @return {!d3.Line}
 */
d3.line = function() {};

/**
 * @typedef {function(!Array)}
 */
d3.Line;

/**
 * @private {!d3.Line}
 */
d3.Line_;

/**
 * @param {number | function(T, number, !Array<T>): number=} opt_x
 * @template T
 */
d3.Line_.x = function(opt_x) {};

/**
 * @param {number | function(T, number, !Array<T>): number=} opt_y
 * @template T
 */
d3.Line_.y = function(opt_y) {};

/**
 * @param {boolean | function(T, number, !Array<T>): boolean=} opt_defined
 * @template T
 */
d3.Line_.defined = function(opt_defined) {};

/**
 * @param {function(!CanvasPathMethods): !d3.Curve=} opt_curve
 */
d3.Line_.curve = function(opt_curve) {};

/**
 * @param {?CanvasPathMethods=} opt_context
 */
d3.Line_.context = function(opt_context) {};

/**
 * @return {!d3.RadialLine}
 */
d3.radialLine = function() {};

/**
 * @typedef {function(!Array)}
 */
d3.RadialLine;

/**
 * @private {!d3.RadialLine}
 */
d3.RadialLine_;

/**
 * @param {number | function(T, number, !Array<T>): number} opt_angle
 * @template T
 */
d3.RadialLine_.angle = function(opt_angle) {};

/**
 * @param {number | function(T, number, !Array<T>): number} opt_radius
 * @template T
 */
d3.RadialLine_.radius = function(opt_radius) {};

/**
 * @param {boolean | function(T, number, !Array<T>): boolean} opt_defined
 * @template T
 */
d3.RadialLine_.defined = function(opt_defined) {};

/**
 * @param {function(!CanvasPathMethods): !d3.Curve=} opt_curve
 */
d3.RadialLine_.curve = function(opt_curve) {};

/**
 * @param {?CanvasPathMethods=} opt_context
 */
d3.RadialLine_.context = function(opt_context) {};

// Areas

/**
 * @return {!d3.Area}
 */
d3.area = function() {};

/**
 * @typedef {function(!Array)}
 */
d3.Area;

/**
 * @private {!d3.Area}
 */
d3.Area_;

/**
 * @param {number | function(T, number, !Array<T>): number=} opt_x
 * @template T
 */
d3.Area_.x = function(opt_x) {};

/**
 * @param {number | function(T, number, !Array<T>): number=} opt_x
 * @template T
 */
d3.Area_.x0 = function(opt_x) {};

/**
 * @param {number | function(T, number, !Array<T>): number=} opt_x
 * @template T
 */
d3.Area_.x1 = function(opt_x) {};

/**
 * @param {number | function(T, number, !Array<T>): number=} opt_y
 * @template T
 */
d3.Area_.y = function(opt_y) {};

/**
 * @param {number | function(T, number, !Array<T>): number=} opt_y
 * @template T
 */
d3.Area_.y0 = function(opt_y) {};

/**
 * @param {number | function(T, number, !Array<T>): number=} opt_y
 * @template T
 */
d3.Area_.y1 = function(opt_y) {};

/**
 * @param {boolean | function(T, number, !Array<T>): boolean} opt_defined
 * @template T
 */
d3.Area_.defined = function(opt_defined) {};

/**
 * @param {function(!CanvasPathMethods): !d3.Curve2d=} opt_curve
 */
d3.Area_.curve = function(opt_curve) {};

/**
 * @param {?CanvasPathMethods=} opt_context
 */
d3.Area_.context = function(opt_context) {};

/**
 * @return {!d3.Line}
 */
d3.Area_.lineX0 = function() {};

/**
 * @return {!d3.Line}
 */
d3.Area_.lineY0 = function() {};

/**
 * @return {!d3.Line}
 */
d3.Area_.lineX1 = function() {};

/**
 * @return {!d3.Line}
 */
d3.Area_.lineY1 = function() {};

/**
 * @return {!d3.RadialArea}
 */
d3.radialArea = function() {};

/**
 * @typedef {function(!Array)}
 */
d3.RadialArea;

/**
 * @private {!d3.RadialArea}
 */
d3.RadialArea_;

/**
 * @param {number | function(!Array, ...?): number=} opt_angle
 */
d3.RadialArea_.angle = function(opt_angle) {};

/**
 * @param {number | function(!Array, ...?): number=} opt_angle
 */
d3.RadialArea_.startAngle = function(opt_angle) {};

/**
 * @param {number | function(!Array, ...?): number=} opt_angle
 */
d3.RadialArea_.endAngle = function(opt_angle) {};

/**
 * @param {number | function(!Array, ...?): number=} opt_radius
 */
d3.RadialArea_.radius = function(opt_radius) {};

/**
 * @param {number | function(!Array, ...?): number=} opt_radius
 */
d3.RadialArea_.innerRadius = function(opt_radius) {};

/**
 * @param {number | function(!Array, ...?): number=} opt_radius
 */
d3.RadialArea_.outerRadius = function(opt_radius) {};

/**
 * @param {boolean | function(T, number, !Array<T>): boolean} opt_defined
 * @template T
 */
d3.RadialArea_.defined = function(opt_defined) {};

/**
 * @param {function(!CanvasPathMethods): !d3.Curve2d=} opt_curve
 */
d3.RadialArea_.curve = function(opt_curve) {};

/**
 * @param {?CanvasPathMethods=} opt_context
 */
d3.RadialArea_.context = function(opt_context) {};

/**
 * @return {!d3.RadialLine}
 */
d3.RadialArea_.lineStartAngle = function() {};

/**
 * @return {!d3.RadialLine}
 */
d3.RadialArea_.lineInnerRadius = function() {};

/**
 * @return {!d3.RadialLine}
 */
d3.RadialArea_.lineEndAngle = function() {};

/**
 * @return {!d3.RadialLine}
 */
d3.RadialArea_.lineOuterRadius = function() {};

// Curves

/**
 * @param {!CanvasPathMethods} context
 * @return {!d3.Curve2d}
 */
d3.curveBasis = function(context) {};

/**
 * @param {!CanvasPathMethods} context
 * @return {!d3.Curve2d}
 */
d3.curveBasisClosed = function(context) {};

/**
 * @param {!CanvasPathMethods} context
 * @return {!d3.Curve2d}
 */
d3.curveBasisOpen = function(context) {};

/**
 * @param {!CanvasPathMethods} context
 * @return {!d3.Curve}
 */
d3.curveBundle = function(context) {};

/**
 * @param {number} beta
 * @return {function(!CanvasPathMethods): !d3.Curve}
 */
d3.curveBundle.beta = function(beta) {};

/**
 * @param {!CanvasPathMethods} context
 * @return {!d3.Curve2d}
 */
d3.curveCardinal = function(context) {};

/**
 * @param {number} tension
 * @return {function(!CanvasPathMethods): !d3.Curve2d}
 */
d3.curveCardinal.tension = function(tension) {};

/**
 * @param {!CanvasPathMethods} context
 * @return {!d3.Curve2d}
 */
d3.curveCardinalClosed = function(context) {};

/**
 * @param {number} tension
 * @return {function(!Object): !d3.Curve2d}
 */
d3.curveCardinalClosed.tension = function(tension) {};

/**
 * @param {!CanvasPathMethods} context
 * @return {!d3.Curve2d}
 */
d3.curveCardinalOpen = function(context) {};

/**
 * @param {number} tension
 * @return {function(!CanvasPathMethods): !d3.Curve2d}
 */
d3.curveCardinalOpen.tension = function(tension) {};

/**
 * @param {!CanvasPathMethods} context
 * @return {!d3.Curve2d}
 */
d3.curveCatmullRom = function(context) {};

/**
 * @param {number} alpha
 * @return {function(!CanvasPathMethods): !d3.Curve2d}
 */
d3.curveCatmullRom.alpha = function(alpha) {};

/**
 * @param {!CanvasPathMethods} context
 * @return {!d3.Curve2d}
 */
d3.curveCatmullRomClosed = function(context) {};

/**
 * @param {number} alpha
 * @return {function(!Object): !d3.Curve2d}
 */
d3.curveCatmullRomClosed.alpha = function(alpha) {};

/**
 * @param {!CanvasPathMethods} context
 * @return {!d3.Curve2d}
 */
d3.curveCatmullRomOpen = function(context) {};

/**
 * @param {number} alpha
 * @return {function(!CanvasPathMethods): !d3.Curve2d}
 */
d3.curveCatmullRomOpen.alpha = function(alpha) {};

/**
 * @param {!CanvasPathMethods} context
 * @return {!d3.Curve2d}
 */
d3.curveLinear = function(context) {};

/**
 * @param {!CanvasPathMethods} context
 * @return {!d3.Curve2d}
 */
d3.curveLinearClosed = function(context) {};

/**
 * @param {!CanvasPathMethods} context
 * @return {!d3.Curve2d}
 */
d3.curveMonotoneX = function(context) {};

/**
 * @param {!CanvasPathMethods} context
 * @return {!d3.Curve2d}
 */
d3.curveMonotoneY = function(context) {};

/**
 * @param {!CanvasPathMethods} context
 * @return {!d3.Curve2d}
 */
d3.curveNatural = function(context) {};

/**
 * @param {!CanvasPathMethods} context
 * @return {!d3.Curve2d}
 */
d3.curveStep = function(context) {};

/**
 * @param {!CanvasPathMethods} context
 * @return {!d3.Curve2d}
 */
d3.curveStepAfter = function(context) {};

/**
 * @param {!CanvasPathMethods} context
 * @return {!d3.Curve2d}
 */
d3.curveStepBefore = function(context) {};

// Custom Curves

/**
 * @record
 */
d3.Curve = function() {};

/**
 * @return {void}
 */
d3.Curve.prototype.lineStart = function() {};

/**
 * @return {void}
 */
d3.Curve.prototype.lineEnd = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
d3.Curve.prototype.point = function(x, y) {};

/**
 * @record
 * @extends {d3.Curve}
 */
d3.Curve2d = function() {};

/**
 * @return {void}
 */
d3.Curve2d.prototype.areaStart = function() {};

/**
 * @return {void}
 */
d3.Curve2d.prototype.areaEnd = function() {};

// Symbols

/**
 * @return {!d3.Symbol}
 */
d3.symbol = function() {};

/**
 * @typedef {function(...?)}
 */
d3.Symbol;

/**
 * @private {!d3.Symbol}
 */
d3.Symbol_;

/**
 * @param {!d3.SymbolType | function(...?): !d3.SymbolType=} opt_type
 */
d3.Symbol_.type = function(opt_type) {};

/**
 * @param {number | function(...?): number=} opt_size
 */
d3.Symbol_.size = function(opt_size) {};

/**
 * @param {?CanvasPathMethods=} opt_context
 */
d3.Symbol_.context = function(opt_context) {};

/**
 * @type {!Array<!d3.SymbolType>}
 */
d3.symbols;

/**
 * @type {!d3.SymbolType}
 */
d3.symbolCircle;

/**
 * @type {!d3.SymbolType}
 */
d3.symbolCross;

/**
 * @type {!d3.SymbolType}
 */
d3.symbolDiamond;

/**
 * @type {!d3.SymbolType}
 */
d3.symbolSquare;

/**
 * @type {!d3.SymbolType}
 */
d3.symbolStar;

/**
 * @type {!d3.SymbolType}
 */
d3.symbolTriangle;

/**
 * @type {!d3.SymbolType}
 */
d3.symbolWye;

// Custom Symbol Types

/**
 * @record
 */
d3.SymbolType = function() {};

/**
 * @param {!CanvasPathMethods} context
 * @param {number} size
 */
d3.SymbolType.prototype.draw = function(context, size) {};

// Stacks

/**
 * @constructor
 * @extends {Array<number>}
 */
d3.SeriesPoint = function() {};

/**
 * @type {number}
 */
d3.SeriesPoint.prototype.index;

/**
 * @type {?}
 */
d3.SeriesPoint.prototype.data;

/**
 * @constructor
 * @extends {Array<!d3.SeriesPoint>}
 */
d3.Series = function() {};

/**
 * @type {?}
 */
d3.Series.prototype.key;

/**
 * @return {!d3.Stack}
 */
d3.stack = function() {};

/**
 * @typedef {function(!Array, ...?): !Array<!d3.Series>}
 */
d3.Stack;

/**
 * @private {!d3.Stack}
 */
d3.Stack_;

/**
 * @param {!Array | function(!Array, ...?): !Array=} opt_keys
 */
d3.Stack_.keys = function(opt_keys) {};

/**
 * @param {number | function(?, ?, number, !Array): number=} opt_value
 */
d3.Stack_.value = function(opt_value) {};

/**
 * @param {?Array<number> | function(!d3.Series): !Array<number>=} opt_order
 */
d3.Stack_.order = function(opt_order) {};

/**
 * @param {?function(!d3.Series, !Array<number>): void=} opt_offset
 */
d3.Stack_.offset = function(opt_offset) {};

// Stack Orders

/**
 * @param {!d3.Series} series
 * @return {!Array<number>}
 */
d3.stackOrderAscending = function(series) {};

/**
 * @param {!d3.Series} series
 * @return {!Array<number>}
 */
d3.stackOrderDescending = function(series) {};

/**
 * @param {!d3.Series} series
 * @return {!Array<number>}
 */
d3.stackOrderInsideOut = function(series) {};

/**
 * @param {!d3.Series} series
 * @return {!Array<number>}
 */
d3.stackOrderNone = function(series) {};

/**
 * @param {!d3.Series} series
 * @return {!Array<number>}
 */
d3.stackOrderReverse = function(series) {};

// Stack Offsets

/**
 * @param {!d3.Series} series
 * @param {!Array<number>} order
 * @return {void}
 */
d3.stackOffsetExpand = function(series, order) {};

/**
 * @param {!d3.Series} series
 * @param {!Array<number>} order
 * @return {void}
 */
d3.stackOffsetNone = function(series, order) {};

/**
 * @param {!d3.Series} series
 * @param {!Array<number>} order
 * @return {void}
 */
d3.stackOffsetSilhouette = function(series, order) {};

/**
 * @param {!d3.Series} series
 * @param {!Array<number>} order
 * @return {void}
 */
d3.stackOffsetWiggle = function(series, order) {};

////////////////////////////////////////////////////////////////////////////////
// Time Formats
// https://github.com/d3/d3-time-format
////////////////////////////////////////////////////////////////////////////////

// API Reference

/**
 * @param {string} specifier
 * @return {function((!Date | number)): string}
 */
d3.timeFormat = function(specifier) {};

/**
 * @param {string} specifier
 * @return {function(string): ?Date}
 */
d3.timeParse = function(specifier) {};

/**
 * @param {string} specifier
 * @return {function((!Date | number)): string}
 */
d3.utcFormat = function(specifier) {};

/**
 * @param {string} specifier
 * @return {function(string): ?Date}
 */
d3.utcParse = function(specifier) {};

/**
 * @type {function((!Date | number)): string}
 */
d3.isoFormat;

/**
 * @type {function(string): ?Date}
 */
d3.isoParse;

// Locales

/**
 * @record
 */
d3.TimeLocaleDefinition;

/**
 * @type {string}
 */
d3.TimeLocaleDefinition.prototype.dateTime;

/**
 * @type {string}
 */
d3.TimeLocaleDefinition.prototype.date;

/**
 * @type {string}
 */
d3.TimeLocaleDefinition.prototype.time;

/**
 * @type {!Array<string>}
 */
d3.TimeLocaleDefinition.prototype.periods;

/**
 * @type {!Array<string>}
 */
d3.TimeLocaleDefinition.prototype.days;

/**
 * @type {!Array<string>}
 */
d3.TimeLocaleDefinition.prototype.shortDays;

/**
 * @type {!Array<string>}
 */
d3.TimeLocaleDefinition.prototype.months;

/**
 * @type {!Array<string>}
 */
d3.TimeLocaleDefinition.prototype.shortMonths;

/**
 * @record
 */
d3.TimeLocale = function() {};

/**
 * @param {string} specifier
 * @return {function((!Date | number)): string}
 */
d3.TimeLocale.prototype.format = function(specifier) {};

/**
 * @param {string} specifier
 * @return {function(string): ?Date}
 */
d3.TimeLocale.prototype.parse = function(specifier) {};

/**
 * @param {string} specifier
 * @return {function((!Date | number)): string}
 */
d3.TimeLocale.prototype.utcFormat = function(specifier) {};

/**
 * @param {string} specifier
 * @return {function(string): ?Date}
 */
d3.TimeLocale.prototype.utcParse = function(specifier) {};

/**
 * @param {!d3.TimeLocaleDefinition} definition
 * @return {!d3.TimeLocale}
 */
d3.timeFormatLocale = function(definition) {};

/**
 * @param {!d3.TimeLocaleDefinition} definition
 * @return {!d3.TimeLocale}
 */
d3.timeFormatDefaultLocale = function(definition) {};

////////////////////////////////////////////////////////////////////////////////
// Time Intervals
// https://github.com/d3/d3-time
////////////////////////////////////////////////////////////////////////////////

// API Reference

/**
 * @typedef {function((!Date | number)): !Date}
 */
d3.Interval;

/**
 * @private {!d3.Interval}
 */
d3.Interval_;

/**
 * @param {!Date | number} date
 * @return {!Date}
 */
d3.Interval_.floor = function(date) {};

/**
 * @param {!Date | number} date
 * @return {!Date}
 */
d3.Interval_.round = function(date) {};

/**
 * @param {!Date | number} date
 * @return {!Date}
 */
d3.Interval_.ceil = function(date) {};

/**
 * @param {!Date | number} date
 * @param {number} step
 * @return {!Date}
 */
d3.Interval_.offset = function(date, step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.Interval_.range = function(start, stop, opt_step) {};

/**
 * @param {function(!Date): boolean} test
 * @return {!d3.Interval}
 */
d3.Interval_.filter = function(test) {};

/**
 * @param {number} step
 * @return {!d3.Interval}
 */
d3.Interval_.every = function(step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} end
 * @return {number}
 */
d3.Interval_.count = function(start, end) {};

/**
 * @param {function((!Date | number)): !Date} floor
 * @param {function((!Date | number), number): !Date} offset
 * @param {function((!Date | number), (!Date | number)): !Date=} opt_count
 * @param {function((!Date | number)): number=} opt_field
 * @return {!d3.Interval}
 */
d3.timeInterval = function(floor, offset, opt_count, opt_field) {};

// Intervals

/**
 * @type {!d3.Interval}
 */
d3.timeMillisecond;

/**
 * @type {!d3.Interval}
 */
d3.timeSecond;

/**
 * @type {!d3.Interval}
 */
d3.timeMinute;

/**
 * @type {!d3.Interval}
 */
d3.timeHour;

/**
 * @type {!d3.Interval}
 */
d3.timeDay;

/**
 * @type {!d3.Interval}
 */
d3.timeWeek;

/**
 * @type {!d3.Interval}
 */
d3.timeSunday;

/**
 * @type {!d3.Interval}
 */
d3.timeMonday;

/**
 * @type {!d3.Interval}
 */
d3.timeTuesday;

/**
 * @type {!d3.Interval}
 */
d3.timeWednesday;

/**
 * @type {!d3.Interval}
 */
d3.timeThursday;

/**
 * @type {!d3.Interval}
 */
d3.timeFriday;

/**
 * @type {!d3.Interval}
 */
d3.timeSaturday;

/**
 * @type {!d3.Interval}
 */
d3.timeMonth;

/**
 * @type {!d3.Interval}
 */
d3.timeYear;

/**
 * @type {!d3.Interval}
 */
d3.utcMillisecond;

/**
 * @type {!d3.Interval}
 */
d3.utcSecond;

/**
 * @type {!d3.Interval}
 */
d3.utcMinute;

/**
 * @type {!d3.Interval}
 */
d3.utcHour;

/**
 * @type {!d3.Interval}
 */
d3.utcDay;

/**
 * @type {!d3.Interval}
 */
d3.utcWeek;

/**
 * @type {!d3.Interval}
 */
d3.utcSunday;

/**
 * @type {!d3.Interval}
 */
d3.utcMonday;

/**
 * @type {!d3.Interval}
 */
d3.utcTuesday;

/**
 * @type {!d3.Interval}
 */
d3.utcWednesday;

/**
 * @type {!d3.Interval}
 */
d3.utcThursday;

/**
 * @type {!d3.Interval}
 */
d3.utcFriday;

/**
 * @type {!d3.Interval}
 */
d3.utcSaturday;

/**
 * @type {!d3.Interval}
 */
d3.utcMonth;

/**
 * @type {!d3.Interval}
 */
d3.utcYear;

// Ranges

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.timeMilliseconds = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.timeSeconds = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.timeMinutes = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.timeHours = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.timeDays = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.timeWeeks = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.timeSundays = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.timeMondays = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.timeTuesdays = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.timeWednesdays = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.timeThursdays = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.timeFridays = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.timeSaturdays = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.timeMonths = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.timeYears = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.utcMilliseconds = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.utcSeconds = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.utcMinutes = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.utcHours = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.utcDays = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.utcWeeks = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.utcSundays = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.utcMondays = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.utcTuesdays = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.utcWednesdays = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.utcThursdays = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.utcFridays = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.utcSaturdays = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.utcMonths = function(start, stop, opt_step) {};

/**
 * @param {!Date | number} start
 * @param {!Date | number} stop
 * @param {number=} opt_step
 * @return {!Array<!Date>}
 */
d3.utcYears = function(start, stop, opt_step) {};

////////////////////////////////////////////////////////////////////////////////
// Timers
// https://github.com/d3/d3-timer
////////////////////////////////////////////////////////////////////////////////

// API Reference

/**
 * @return {number}
 */
d3.now = function() {};

/**
 * @param {function(number): void} callback
 * @param {number=} opt_delay
 * @param {number=} opt_time
 * @return {!d3.timer}
 * @constructor
 */
d3.timer = function(callback, opt_delay, opt_time) {};

/**
 * @param {function(number): void} callback
 * @param {number=} opt_delay
 * @param {number=} opt_time
 * @return {void}
 */
d3.timer.prototype.restart = function(callback, opt_delay, opt_time) {};

/**
 * @return {void}
 */
d3.timer.prototype.stop = function() {};

/**
 * @return {void}
 */
d3.timerFlush = function() {};

/**
 * @param {function(number): void} callback
 * @param {number=} opt_delay
 * @param {number=} opt_time
 * @return {!d3.timer}
 */
d3.timeout = function(callback, opt_delay, opt_time) {};

/**
 * @param {function(number): void} callback
 * @param {number=} opt_delay
 * @param {number=} opt_time
 * @return {!d3.timer}
 */
d3.interval = function(callback, opt_delay, opt_time) {};

////////////////////////////////////////////////////////////////////////////////
// Transitions
// https://github.com/d3/d3-transition
////////////////////////////////////////////////////////////////////////////////

// Selecting Elements

/**
 * @param {?string | d3.transition=} opt_nameOrTransition
 * @return {!d3.transition}
 */
d3.selection.prototype.transition = function(opt_nameOrTransition) {};

/**
 * @param {?string=} opt_name
 * @return {!d3.selection}
 */
d3.selection.prototype.interrupt = function(opt_name) {};

/**
 * @param {!Element} node
 * @param {?string=} opt_name
 */
d3.interrupt = function(node, opt_name) {};

/**
 * @param {?string | d3.transition=} opt_nameOrTransition
 * @return {!d3.transition}
 * @constructor
 */
d3.transition = function(opt_nameOrTransition) {};

/**
 * @param {?string} selector
 * @return {!d3.transition}
 */
d3.transition.prototype.select = function(selector) {};

/**
 * @param {?string} selector
 * @return {!d3.transition}
 */
d3.transition.prototype.selectAll = function(selector) {};

/**
 * @param {string |
 *     function(this:Element, ?, number, !IArrayLike<!Element>): boolean} filter
 * @return {!d3.transition}
 */
d3.transition.prototype.filter = function(filter) {};

/**
 * @param {!d3.transition} other
 * @return {!d3.transition}
 */
d3.transition.prototype.merge = function(other) {};

/**
 * @return {!d3.transition}
 */
d3.transition.prototype.transition = function() {};

/**
 * @return {!d3.selection}
 */
d3.transition.prototype.selection = function() {};

/**
 * @param {!Element} node
 * @param {?string=} opt_name
 * @return {!d3.transition}
 */
d3.active = function(node, opt_name) {};

// Modifying Elements

/**
 * @param {string} name
 * @param {?string | number |
 *     function(this:Element, ?, number, !IArrayLike<!Element>):
 *         ?(string | number)} value
 * @return {!d3.transition}
 */
d3.transition.prototype.attr = function(name, value) {};

/**
 * @param {string} name
 * @param {?function(this:Element, ?, number, !IArrayLike<!Element>):
 *     function(number): (string | number)=} opt_value
 */
d3.transition.prototype.attrTween = function(name, opt_value) {};

/**
 * @param {string} name
 * @param {?string |
 *     function(this:Element, ?, number, !IArrayLike<!Element>): ?string} value
 * @param {?string=} opt_priority
 * @return {!d3.transition}
 */
d3.transition.prototype.style = function(name, value, opt_priority) {};

/**
 * @param {string} name
 * @param {?function(this:Element, ?, number, !IArrayLike<!Element>):
 *     function(number): string=} opt_value
 * @param {?string=} opt_priority
 */
d3.transition.prototype.styleTween = function(name, opt_value, opt_priority) {};

/**
 * @param {?string |
 *     function(this:Element, ?, number, !IArrayLike<!Element>): ?string} value
 * @return {!d3.transition}
 */
d3.transition.prototype.text = function(value) {};

/**
 * @return {!d3.transition}
 */
d3.transition.prototype.remove = function() {};

/**
 * @param {string} name
 * @param {?function(this:Element, ?, number, !IArrayLike<!Element>):
 *     function(number)=} opt_value
 */
d3.transition.prototype.tween = function(name, opt_value) {};

// Timing

/**
 * @param {number |
 *     function(this:Element, ?, number, !IArrayLike<!Element>): number=}
 *     opt_value
 */
d3.transition.prototype.delay = function(opt_value) {};

/**
 * @param {number |
 *     function(this:Element, ?, number, !IArrayLike<!Element>): number=}
 *     opt_value
 */
d3.transition.prototype.duration = function(opt_value) {};

/**
 * @param {function(number): number=} opt_value
 */
d3.transition.prototype.ease = function(opt_value) {};

// Control Flow

/**
 * @param {string} typenames
 * @param {?function(this:Element, ?, number, !IArrayLike<!Element>)=}
 *     opt_listener
 * @return {!d3.selection}
 */
d3.transition.prototype.on = function(typenames, opt_listener) {};

/**
 * @param {function(this:Element, ?, number, !IArrayLike<!Element>)} callback
 * @return {!d3.transition}
 */
d3.transition.prototype.each = function(callback) {};

/**
 * @param {!Function} callback
 * @param {...?} var_args
 */
d3.transition.prototype.call = function(callback, var_args) {};

/**
 * @return {boolean}
 */
d3.transition.prototype.empty = function() {};

/**
 * @return {!Array<!Element>}
 */
d3.transition.prototype.nodes = function() {};

/**
 * @return {?Element}
 */
d3.transition.prototype.node = function() {};

/**
 * @return {number}
 */
d3.transition.prototype.size = function() {};

////////////////////////////////////////////////////////////////////////////////
// Voronoi Diagrams
// https://github.com/d3/d3-voronoi
////////////////////////////////////////////////////////////////////////////////

// API Reference

/**
 * @return {!d3.Voronoi}
 */
d3.voronoi = function() {};

/**
 * @typedef {function(!Array): !d3.VoronoiDiagram}
 */
d3.Voronoi;

/**
 * @private {!d3.Voronoi}
 */
d3.Voronoi_;

/**
 * @param {function(?): number=} opt_x
 */
d3.Voronoi_.x = function(opt_x) {};

/**
 * @param {function(?): number=} opt_y
 */
d3.Voronoi_.y = function(opt_y) {};

/**
 * @param {!Array<!Array<number>>=} opt_extent
 */
d3.Voronoi_.extent = function(opt_extent) {};

/**
 * @param {!Array<number>=} opt_size
 */
d3.Voronoi_.size = function(opt_size) {};

/**
 * @param {!Array<T>} data
 * @return {!Array<!d3.VoronoiPolygon<T>>}
 * @template T
 */
d3.Voronoi_.polygons = function(data) {};

/**
 * @param {!Array<T>} data
 * @return {!Array<!Array<T>>}
 * @template T
 */
d3.Voronoi_.triangles = function(data) {};

/**
 * @param {!Array<T>} data
 * @return {!Array<!d3.Link<T>>}
 * @template T
 */
d3.Voronoi_.links = function(data) {};

// Voronoi Diagrams

/**
 * @record
 */
d3.VoronoiDiagram = function() {};

/**
 * @type {!Array<!d3.VoronoiEdge>}
 */
d3.VoronoiDiagram.prototype.edges;

/**
 * @type {!Array<!d3.VoronoiCell | undefined>}
 */
d3.VoronoiDiagram.prototype.cells;

/**
 * @return {!Array<!d3.VoronoiPolygon | undefined>}
 */
d3.VoronoiDiagram.prototype.polygons = function() {};

/**
 * @return {!Array<!Array>}
 */
d3.VoronoiDiagram.prototype.triangles = function() {};

/**
 * @return {!Array<!Array<!d3.Link<?>>>}
 */
d3.VoronoiDiagram.prototype.links = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number=} opt_radius
 * @return {?d3.VoronoiSite}
 */
d3.VoronoiDiagram.prototype.find = function(x, y, opt_radius) {};

/**
 * @record
 */
d3.VoronoiCell = function() {};

/**
 * @type {!d3.VoronoiSite}
 */
d3.VoronoiCell.prototype.site;

/**
 * @type {!Array<number>}
 */
d3.VoronoiCell.prototype.halfedges;

/**
 * Not a real constructor, but an interface or record extending Array or
 * IArrayLike would break externs_build_test.
 * @constructor
 * @extends {Array<number>}
 */
d3.VoronoiSite = function() {};

/**
 * @type {number}
 */
d3.VoronoiSite.prototype.index;

/**
 * @type {?}
 */
d3.VoronoiSite.prototype.data;

/**
 * Not a real constructor, but an interface or record extending Array or
 * IArrayLike would break externs_build_test.
 * @constructor
 * @extends {Array<?Array<number>>}
 */
d3.VoronoiEdge = function() {};

/**
 * @type {!d3.VoronoiSite}
 */
d3.VoronoiEdge.prototype.left;

/**
 * @type {?d3.VoronoiSite}
 */
d3.VoronoiEdge.prototype.right;

/**
 * Not a real constructor, but an interface or record extending Array or
 * IArrayLike would break externs_build_test.
 * @constructor
 * @extends {Array<?Array<number>>}
 * @template T
 */
d3.VoronoiPolygon = function() {};

/**
 * @type {T}
 */
d3.VoronoiPolygon.prototype.data;

////////////////////////////////////////////////////////////////////////////////
// Zooming
// https://github.com/d3/d3-zoom
////////////////////////////////////////////////////////////////////////////////

// API Reference

/**
 * @return {!d3.Zoom}
 */
d3.zoom = function() {};

/**
 * @typedef {function(!d3.selection): void}
 */
d3.Zoom;

/**
 * @private {!d3.Zoom}
 */
d3.Zoom_;

/**
 * @param {!d3.selection | !d3.transition} selection
 * @param {!d3.zoomTransform |
 *     function(this:Element, T, number, !Array<T>): !d3.zoomTransform}
 *     transform
 * @return {void}
 * @template T
 */
d3.Zoom_.transform = function(selection, transform) {};

/**
 * @param {!d3.selection | !d3.transition} selection
 * @param {number | function(this:Element, T, number, !Array<T>): number} x
 * @param {number | function(this:Element, T, number, !Array<T>): number} y
 * @return {void}
 * @template T
 */
d3.Zoom_.translateBy = function(selection, x, y) {};

/**
 * @param {!d3.selection | !d3.transition} selection
 * @param {number | function(this:Element, T, number, !Array<T>): number} k
 * @return {void}
 * @template T
 */
d3.Zoom_.scaleBy = function(selection, k) {};

/**
 * @param {!d3.selection | !d3.transition} selection
 * @param {number | function(this:Element, T, number, !Array<T>): number} k
 * @return {void}
 * @template T
 */
d3.Zoom_.scaleTo = function(selection, k) {};

/**
 * @param {function(this:Element, T, number, !Array<T>): boolean=} opt_filter
 * @template T
 */
d3.Zoom_.filter = function(opt_filter) {};

/**
 * @param {!Array<!Array<number>> |
 *     function(this:Element, T, number, !Array<T>): !Array<!Array<number>>=}
 *     opt_extent
 * @template T
 */
d3.Zoom_.extent = function(opt_extent) {};

/**
 * @param {!Array<number>=} opt_extent
 */
d3.Zoom_.scaleExtent = function(opt_extent) {};

/**
 * @param {!Array<!Array<number>>=} opt_extent
 */
d3.Zoom_.translateExtent = function(opt_extent) {};

/**
 * @param {number=} opt_duration
 */
d3.Zoom_.duration = function(opt_duration) {};

/**
 * @param {function(!Array<number>, !Array<number>):
 *     function(number): !Array<number>=} opt_interpolator
 */
d3.Zoom_.interpolate = function(opt_interpolator) {};

/**
 * @param {string} typenames
 * @param {?function(this:Element, T, number, !Array<T>): void=} opt_listener
 * @template T
 */
d3.Zoom_.on = function(typenames, opt_listener) {};

// Zoom Events

/**
 * @record
 */
d3.ZoomEvent = function() {};

/**
 * @type {!d3.Zoom}
 */
d3.ZoomEvent.prototype.target;

/**
 * @type {string}
 */
d3.ZoomEvent.prototype.type;

/**
 * @type {!d3.zoomTransform}
 */
d3.ZoomEvent.prototype.transform;

/**
 * @type {!Event}
 */
d3.ZoomEvent.prototype.sourceEvent;

// Zoom Transforms

/**
 * @param {!Element} node
 * @return {!d3.zoomTransform}
 * @constructor
 */
d3.zoomTransform = function(node) {};

/**
 * @const {number}
 */
d3.zoomTransform.prototype.x;

/**
 * @const {number}
 */
d3.zoomTransform.prototype.y;

/**
 * @const {number}
 */
d3.zoomTransform.prototype.k;

/**
 * @param {number} k
 * @return {!d3.zoomTransform}
 */
d3.zoomTransform.prototype.scale = function(k) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {!d3.zoomTransform}
 */
d3.zoomTransform.prototype.translate = function(x, y) {};

/**
 * @param {!Array<number>} point
 * @return {!Array<number>}
 */
d3.zoomTransform.prototype.apply = function(point) {};

/**
 * @param {number} x
 * @return {number}
 */
d3.zoomTransform.prototype.applyX = function(x) {};

/**
 * @param {number} y
 * @return {number}
 */
d3.zoomTransform.prototype.applyY = function(y) {};

/**
 * @param {!Array<number>} point
 * @return {!Array<number>}
 */
d3.zoomTransform.prototype.invert = function(point) {};

/**
 * @param {number} x
 * @return {number}
 */
d3.zoomTransform.prototype.invertX = function(x) {};

/**
 * @param {number} y
 * @return {number}
 */
d3.zoomTransform.prototype.invertY = function(y) {};

/**
 * @param {function(?): ?} x Invertible continuous scale.
 * @return {function(?): ?}
 */
d3.zoomTransform.prototype.rescaleX = function(x) {};

/**
 * @param {function(?): ?} y Invertible continuous scale.
 * @return {function(?): ?}
 */
d3.zoomTransform.prototype.rescaleY = function(y) {};

/**
 * @override
 * @return {string}
 */
d3.zoomTransform.prototype.toString = function() {};

/**
 * @type {!d3.zoomTransform}
 */
d3.zoomIdentity;