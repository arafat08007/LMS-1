/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ui-huma/js/page.ecommerce.js":
/*!***************************************************!*\
  !*** ./node_modules/ui-huma/js/page.ecommerce.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var TotalSales = function TotalSales(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'area';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      title: {
        display: true,
        fontSize: 12,
        fontColor: 'rgba(54, 76, 102, 0.54)',
        position: 'top',
        text: 'SALES OVER TIME'
      },
      scales: {
        xAxes: [{
          ticks: {
            padding: 4,
            callback: function callback(item) {
              return item;
            }
          },
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'D/MM'
            },
            stepSize: 2,
            maxTicksLimit: 7,
            autoSkip: false
          }
        }]
      }
    }, options);
    var data = []; // Create a date range for the last 7 days

    var start = moment().subtract(6, 'days').format('YYYY-MM-DD'); // 7 days ago

    var end = moment().format('YYYY-MM-DD'); // today

    var range = moment.range(start, end); // Create the graph data
    // Iterate the date range and assign a random value for each day

    range.by('days', function (moment) {
      data.push({
        y: getRandomInt(2, 40),
        x: moment.toDate()
      });
    });
    var data = {
      datasets: [{
        label: "Total Sales",
        data: data
      }]
    };
    Charts.create(id, type, options, data);
  };

  var TotalVisitors = function TotalVisitors(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'roundedBar';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      title: {
        display: true,
        fontSize: 12,
        fontColor: 'rgba(54, 76, 102, 0.54)',
        position: 'top',
        text: 'VISITORS OVER TIME'
      },
      scales: {
        xAxes: [{
          ticks: {
            padding: 4,
            callback: function callback(item) {
              return item;
            }
          },
          offset: true,
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'D/MM'
            },
            stepSize: 2,
            maxTicksLimit: 7
          }
        }]
      }
    }, options);
    var data = []; // Create a date range for the last 7 days

    var start = moment().subtract(6, 'days').format('YYYY-MM-DD'); // 7 days ago

    var end = moment().format('YYYY-MM-DD'); // today

    var range = moment.range(start, end); // Create the graph data
    // Iterate the date range and assign a random value for each day

    range.by('days', function (moment) {
      data.push({
        y: getRandomInt(10, 30),
        x: moment.toDate()
      });
    });
    var data = {
      datasets: [{
        label: "Total Visitors",
        data: data,
        barThickness: 20
      }]
    };
    Charts.create(id, type, options, data);
  };

  var RepeatCustomerRate = function RepeatCustomerRate(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      title: {
        display: true,
        fontSize: 12,
        fontColor: 'rgba(54, 76, 102, 0.54)',
        position: 'top',
        text: 'CUSTOMERS'
      },
      scales: {
        yAxes: [{
          ticks: {
            autoSkip: false,
            autoSkipPadding: 0,
            padding: 4,
            maxTicksLimit: 4,
            callback: function callback(item) {
              return item;
            }
          }
        }],
        xAxes: [{
          ticks: {
            padding: 4,
            callback: function callback(item) {
              return item;
            }
          },
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'D/MM'
            },
            stepSize: 2,
            maxTicksLimit: 7,
            autoSkip: false
          }
        }]
      }
    }, options);
    var firstTimeData = [];
    var returningData = []; // Create a date range for the last 7 days

    var start = moment().subtract(6, 'days').format('YYYY-MM-DD'); // 7 days ago

    var end = moment().format('YYYY-MM-DD'); // today

    var range = moment.range(start, end); // Create the graph data
    // Iterate the date range and assign a random value for each day

    range.by('days', function (moment) {
      firstTimeData.push({
        y: getRandomInt(0, 5),
        x: moment.toDate()
      });
      returningData.push({
        y: getRandomInt(5, 10),
        x: moment.toDate()
      });
    });
    var data = {
      datasets: [{
        label: "First time",
        data: firstTimeData
      }, {
        label: "Returning",
        data: returningData
      }]
    };
    Charts.create(id, type, options, data);
  };

  var Views = function Views(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day'
          }
        }]
      }
    }, options);
    var data = [];
    var conversion = []; // Create a date range for the last 7 days

    var start = moment().subtract(7, 'days').format('YYYY-MM-DD'); // 7 days ago

    var end = moment().format('YYYY-MM-DD'); // today

    var range = moment.range(start, end); // Create the graph data
    // Iterate the date range and assign a random value for each day

    range.by('days', function (moment) {
      var views = Math.round(Math.floor(Math.random() * 300) + 10);
      data.push({
        y: views,
        x: moment.toDate()
      });
      conversion.push({
        y: Math.round(views * 0.1),
        x: moment.toDate()
      });
    });
    var data = {
      datasets: [{
        label: "Conversion",
        data: conversion
      }, {
        label: "Views",
        data: data
      }]
    };
    Charts.create(id, type, options, data);
  };

  var TotalOrders = function TotalOrders(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      title: {
        display: true,
        fontSize: 12,
        fontColor: 'rgba(54, 76, 102, 0.54)',
        position: 'top',
        text: 'ORDERS OVER TIME'
      },
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 1,
            callback: function callback(item) {
              return item;
            }
          }
        }],
        xAxes: [{
          ticks: {
            padding: 4,
            callback: function callback(item) {
              return item;
            }
          },
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'D/MM'
            },
            stepSize: 2,
            maxTicksLimit: 7,
            autoSkip: false
          }
        }]
      }
    }, options);
    var data = []; // Create a date range for the last 7 days

    var start = moment().subtract(6, 'days').format('YYYY-MM-DD'); // 7 days ago

    var end = moment().format('YYYY-MM-DD'); // today

    var range = moment.range(start, end); // Create the graph data
    // Iterate the date range and assign a random value for each day

    range.by('days', function (moment) {
      data.push({
        y: getRandomInt(0, 2),
        x: moment.toDate()
      });
    });
    var data = {
      datasets: [{
        label: "Total Orders",
        data: data
      }]
    };
    Charts.create(id, type, options, data);
  };

  var AverageOrderValue = function AverageOrderValue(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      title: {
        display: true,
        fontSize: 12,
        fontColor: 'rgba(54, 76, 102, 0.54)',
        position: 'top',
        text: 'ORDER VALUE'
      },
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 10
          }
        }],
        xAxes: [{
          ticks: {
            padding: 4,
            callback: function callback(item) {
              return item;
            }
          },
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'D/MM'
            },
            stepSize: 2,
            maxTicksLimit: 7,
            autoSkip: false
          }
        }]
      }
    }, options);
    var data = []; // Create a date range for the last 7 days

    var start = moment().subtract(6, 'days').format('YYYY-MM-DD'); // 7 days ago

    var end = moment().format('YYYY-MM-DD'); // today

    var range = moment.range(start, end); // Create the graph data
    // Iterate the date range and assign a random value for each day

    range.by('days', function (moment) {
      data.push({
        y: getRandomInt(0, 50),
        x: moment.toDate()
      });
    });
    var data = {
      datasets: [{
        label: "Order Value",
        data: data
      }]
    };
    Charts.create(id, type, options, data);
  };

  var VisitsByDevice = function VisitsByDevice(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'doughnut';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var data = {
      labels: ["Desktop", "Mobile", "Tablet"],
      datasets: [{
        data: [267, 184, 0]
      }]
    };
    Charts.create(id, type, options, data);
  }; ///////////////////
  // Create Charts //
  ///////////////////


  TotalSales('#totalSalesChart');
  TotalVisitors('#totalVisitorsChart');
  RepeatCustomerRate('#repeatCustomerRateChart');
  TotalOrders('#totalOrdersChart');
  AverageOrderValue('#averageOrderValueChart');
  VisitsByDevice('#visitsByDeviceChart');
  Views('#viewsChart');
})();

/***/ }),

/***/ "./src/js/page.ecommerce.js":
/*!**********************************!*\
  !*** ./src/js/page.ecommerce.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_huma_js_page_ecommerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-huma/js/page.ecommerce */ "./node_modules/ui-huma/js/page.ecommerce.js");
/* harmony import */ var ui_huma_js_page_ecommerce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ui_huma_js_page_ecommerce__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 13:
/*!****************************************!*\
  !*** multi ./src/js/page.ecommerce.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\works\website\Python\Project 1 Django\temp\src\js\page.ecommerce.js */"./src/js/page.ecommerce.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VpLWh1bWEvanMvcGFnZS5lY29tbWVyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2UuZWNvbW1lcmNlLmpzIl0sIm5hbWVzIjpbImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIlRvdGFsU2FsZXMiLCJpZCIsInR5cGUiLCJvcHRpb25zIiwiQ2hhcnQiLCJoZWxwZXJzIiwibWVyZ2UiLCJ0aXRsZSIsImRpc3BsYXkiLCJmb250U2l6ZSIsImZvbnRDb2xvciIsInBvc2l0aW9uIiwidGV4dCIsInNjYWxlcyIsInhBeGVzIiwidGlja3MiLCJwYWRkaW5nIiwiY2FsbGJhY2siLCJpdGVtIiwiZ3JpZExpbmVzIiwidGltZSIsInVuaXQiLCJkaXNwbGF5Rm9ybWF0cyIsImRheSIsInN0ZXBTaXplIiwibWF4VGlja3NMaW1pdCIsImF1dG9Ta2lwIiwiZGF0YSIsInN0YXJ0IiwibW9tZW50Iiwic3VidHJhY3QiLCJmb3JtYXQiLCJlbmQiLCJyYW5nZSIsImJ5IiwicHVzaCIsInkiLCJ4IiwidG9EYXRlIiwiZGF0YXNldHMiLCJsYWJlbCIsIkNoYXJ0cyIsImNyZWF0ZSIsIlRvdGFsVmlzaXRvcnMiLCJvZmZzZXQiLCJiYXJUaGlja25lc3MiLCJSZXBlYXRDdXN0b21lclJhdGUiLCJ5QXhlcyIsImF1dG9Ta2lwUGFkZGluZyIsImZpcnN0VGltZURhdGEiLCJyZXR1cm5pbmdEYXRhIiwiVmlld3MiLCJjb252ZXJzaW9uIiwidmlld3MiLCJyb3VuZCIsIlRvdGFsT3JkZXJzIiwiQXZlcmFnZU9yZGVyVmFsdWUiLCJWaXNpdHNCeURldmljZSIsImxhYmVscyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7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QyxxQkFBRCxDQUFiO0FBQ0FHLG9CQUFrQixDQUFDLDBCQUFELENBQWxCO0FBQ0FTLGFBQVcsQ0FBQyxtQkFBRCxDQUFYO0FBQ0FDLG1CQUFpQixDQUFDLHlCQUFELENBQWpCO0FBQ0FDLGdCQUFjLENBQUMsc0JBQUQsQ0FBZDtBQUNBTixPQUFLLENBQUMsYUFBRCxDQUFMO0FBRUQsQ0E5WkQsSTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii9kaXN0L2Fzc2V0cy9qcy9wYWdlLmVjb21tZXJjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTMpO1xuIiwiKGZ1bmN0aW9uKCl7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXHJcbiAgfVxyXG5cclxuICB2YXIgVG90YWxTYWxlcyA9IGZ1bmN0aW9uKGlkLCB0eXBlID0gJ2FyZWEnLCBvcHRpb25zID0ge30pIHtcclxuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICBmb250Q29sb3I6ICdyZ2JhKDU0LCA3NiwgMTAyLCAwLjU0KScsXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgIHRleHQ6ICdTQUxFUyBPVkVSIFRJTUUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHNjYWxlczoge1xyXG4gICAgICAgIHhBeGVzOiBbe1xyXG4gICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNCxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaXRlbVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHR5cGU6ICd0aW1lJyxcclxuICAgICAgICAgIHRpbWU6IHtcclxuICAgICAgICAgICAgdW5pdDogJ2RheScsXHJcbiAgICAgICAgICAgIGRpc3BsYXlGb3JtYXRzOiB7XHJcbiAgICAgICAgICAgICAgZGF5OiAnRC9NTSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RlcFNpemU6IDIsXHJcbiAgICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDcsXHJcbiAgICAgICAgICAgIGF1dG9Ta2lwOiBmYWxzZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XVxyXG4gICAgICB9XHJcbiAgICB9LCBvcHRpb25zKVxyXG5cclxuICAgIHZhciBkYXRhID0gW11cclxuXHJcbiAgICAvLyBDcmVhdGUgYSBkYXRlIHJhbmdlIGZvciB0aGUgbGFzdCA3IGRheXNcclxuICAgIHZhciBzdGFydCA9IG1vbWVudCgpLnN1YnRyYWN0KDYsICdkYXlzJykuZm9ybWF0KCdZWVlZLU1NLUREJykgLy8gNyBkYXlzIGFnb1xyXG4gICAgdmFyIGVuZCA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIC8vIHRvZGF5XHJcbiAgICB2YXIgcmFuZ2UgPSBtb21lbnQucmFuZ2Uoc3RhcnQsIGVuZClcclxuXHJcbiAgICAvLyBDcmVhdGUgdGhlIGdyYXBoIGRhdGFcclxuICAgIC8vIEl0ZXJhdGUgdGhlIGRhdGUgcmFuZ2UgYW5kIGFzc2lnbiBhIHJhbmRvbSB2YWx1ZSBmb3IgZWFjaCBkYXlcclxuICAgIHJhbmdlLmJ5KCdkYXlzJywgZnVuY3Rpb24obW9tZW50KSB7XHJcbiAgICAgIGRhdGEucHVzaCh7XHJcbiAgICAgICAgeTogZ2V0UmFuZG9tSW50KDIsIDQwKSxcclxuICAgICAgICB4OiBtb21lbnQudG9EYXRlKClcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgIGxhYmVsOiBcIlRvdGFsIFNhbGVzXCIsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgICB9XVxyXG4gICAgfVxyXG5cclxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXHJcbiAgfVxyXG5cclxuICB2YXIgVG90YWxWaXNpdG9ycyA9IGZ1bmN0aW9uKGlkLCB0eXBlID0gJ3JvdW5kZWRCYXInLCBvcHRpb25zID0ge30pIHtcclxuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICBmb250Q29sb3I6ICdyZ2JhKDU0LCA3NiwgMTAyLCAwLjU0KScsXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgIHRleHQ6ICdWSVNJVE9SUyBPVkVSIFRJTUUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHNjYWxlczoge1xyXG4gICAgICAgIHhBeGVzOiBbe1xyXG4gICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNCxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaXRlbVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG9mZnNldDogdHJ1ZSxcclxuICAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHR5cGU6ICd0aW1lJyxcclxuICAgICAgICAgIHRpbWU6IHtcclxuICAgICAgICAgICAgdW5pdDogJ2RheScsXHJcbiAgICAgICAgICAgIGRpc3BsYXlGb3JtYXRzOiB7XHJcbiAgICAgICAgICAgICAgZGF5OiAnRC9NTSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RlcFNpemU6IDIsXHJcbiAgICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XVxyXG4gICAgICB9XHJcbiAgICB9LCBvcHRpb25zKVxyXG5cclxuICAgIHZhciBkYXRhID0gW11cclxuXHJcbiAgICAvLyBDcmVhdGUgYSBkYXRlIHJhbmdlIGZvciB0aGUgbGFzdCA3IGRheXNcclxuICAgIHZhciBzdGFydCA9IG1vbWVudCgpLnN1YnRyYWN0KDYsICdkYXlzJykuZm9ybWF0KCdZWVlZLU1NLUREJykgLy8gNyBkYXlzIGFnb1xyXG4gICAgdmFyIGVuZCA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIC8vIHRvZGF5XHJcbiAgICB2YXIgcmFuZ2UgPSBtb21lbnQucmFuZ2Uoc3RhcnQsIGVuZClcclxuXHJcbiAgICAvLyBDcmVhdGUgdGhlIGdyYXBoIGRhdGFcclxuICAgIC8vIEl0ZXJhdGUgdGhlIGRhdGUgcmFuZ2UgYW5kIGFzc2lnbiBhIHJhbmRvbSB2YWx1ZSBmb3IgZWFjaCBkYXlcclxuICAgIHJhbmdlLmJ5KCdkYXlzJywgZnVuY3Rpb24obW9tZW50KSB7XHJcbiAgICAgIGRhdGEucHVzaCh7XHJcbiAgICAgICAgeTogZ2V0UmFuZG9tSW50KDEwLCAzMCksXHJcbiAgICAgICAgeDogbW9tZW50LnRvRGF0ZSgpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICBsYWJlbDogXCJUb3RhbCBWaXNpdG9yc1wiLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgYmFyVGhpY2tuZXNzOiAyMFxyXG4gICAgICB9XVxyXG4gICAgfVxyXG5cclxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXHJcbiAgfVxyXG5cclxuICB2YXIgUmVwZWF0Q3VzdG9tZXJSYXRlID0gZnVuY3Rpb24oaWQsIHR5cGUgPSAnbGluZScsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgIGZvbnRDb2xvcjogJ3JnYmEoNTQsIDc2LCAxMDIsIDAuNTQpJyxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgdGV4dDogJ0NVU1RPTUVSUydcclxuICAgICAgfSxcclxuICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICBhdXRvU2tpcDogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9Ta2lwUGFkZGluZzogMCxcclxuICAgICAgICAgICAgcGFkZGluZzogNCxcclxuICAgICAgICAgICAgbWF4VGlja3NMaW1pdDogNCxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaXRlbVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgeEF4ZXM6IFt7XHJcbiAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBpdGVtXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdHlwZTogJ3RpbWUnLFxyXG4gICAgICAgICAgdGltZToge1xyXG4gICAgICAgICAgICB1bml0OiAnZGF5JyxcclxuICAgICAgICAgICAgZGlzcGxheUZvcm1hdHM6IHtcclxuICAgICAgICAgICAgICBkYXk6ICdEL01NJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGVwU2l6ZTogMixcclxuICAgICAgICAgICAgbWF4VGlja3NMaW1pdDogNyxcclxuICAgICAgICAgICAgYXV0b1NraXA6IGZhbHNlLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1dXHJcbiAgICAgIH1cclxuICAgIH0sIG9wdGlvbnMpXHJcblxyXG4gICAgdmFyIGZpcnN0VGltZURhdGEgPSBbXVxyXG4gICAgdmFyIHJldHVybmluZ0RhdGEgPSBbXVxyXG5cclxuICAgIC8vIENyZWF0ZSBhIGRhdGUgcmFuZ2UgZm9yIHRoZSBsYXN0IDcgZGF5c1xyXG4gICAgdmFyIHN0YXJ0ID0gbW9tZW50KCkuc3VidHJhY3QoNiwgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKSAvLyA3IGRheXMgYWdvXHJcbiAgICB2YXIgZW5kID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJykgLy8gdG9kYXlcclxuICAgIHZhciByYW5nZSA9IG1vbWVudC5yYW5nZShzdGFydCwgZW5kKVxyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgZ3JhcGggZGF0YVxyXG4gICAgLy8gSXRlcmF0ZSB0aGUgZGF0ZSByYW5nZSBhbmQgYXNzaWduIGEgcmFuZG9tIHZhbHVlIGZvciBlYWNoIGRheVxyXG4gICAgcmFuZ2UuYnkoJ2RheXMnLCBmdW5jdGlvbihtb21lbnQpIHtcclxuICAgICAgZmlyc3RUaW1lRGF0YS5wdXNoKHtcclxuICAgICAgICB5OiBnZXRSYW5kb21JbnQoMCwgNSksXHJcbiAgICAgICAgeDogbW9tZW50LnRvRGF0ZSgpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm5pbmdEYXRhLnB1c2goe1xyXG4gICAgICAgIHk6IGdldFJhbmRvbUludCg1LCAxMCksXHJcbiAgICAgICAgeDogbW9tZW50LnRvRGF0ZSgpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICBsYWJlbDogXCJGaXJzdCB0aW1lXCIsXHJcbiAgICAgICAgZGF0YTogZmlyc3RUaW1lRGF0YVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgbGFiZWw6IFwiUmV0dXJuaW5nXCIsXHJcbiAgICAgICAgZGF0YTogcmV0dXJuaW5nRGF0YVxyXG4gICAgICB9XVxyXG4gICAgfVxyXG5cclxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXHJcbiAgfVxyXG5cclxuICB2YXIgVmlld3MgPSBmdW5jdGlvbihpZCwgdHlwZSA9ICdsaW5lJywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XHJcbiAgICAgIHNjYWxlczoge1xyXG4gICAgICAgIHhBeGVzOiBbe1xyXG4gICAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdHlwZTogJ3RpbWUnLFxyXG4gICAgICAgICAgdGltZToge1xyXG4gICAgICAgICAgICB1bml0OiAnZGF5J1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1dXHJcbiAgICAgIH1cclxuICAgIH0sIG9wdGlvbnMpXHJcblxyXG4gICAgdmFyIGRhdGEgPSBbXVxyXG4gICAgdmFyIGNvbnZlcnNpb24gPSBbXVxyXG5cclxuICAgIC8vIENyZWF0ZSBhIGRhdGUgcmFuZ2UgZm9yIHRoZSBsYXN0IDcgZGF5c1xyXG4gICAgdmFyIHN0YXJ0ID0gbW9tZW50KCkuc3VidHJhY3QoNywgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKSAvLyA3IGRheXMgYWdvXHJcbiAgICB2YXIgZW5kID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJykgLy8gdG9kYXlcclxuICAgIHZhciByYW5nZSA9IG1vbWVudC5yYW5nZShzdGFydCwgZW5kKVxyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgZ3JhcGggZGF0YVxyXG4gICAgLy8gSXRlcmF0ZSB0aGUgZGF0ZSByYW5nZSBhbmQgYXNzaWduIGEgcmFuZG9tIHZhbHVlIGZvciBlYWNoIGRheVxyXG4gICAgcmFuZ2UuYnkoJ2RheXMnLCBmdW5jdGlvbihtb21lbnQpIHtcclxuICAgICAgY29uc3Qgdmlld3MgPSBNYXRoLnJvdW5kKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwMCkgKyAxMClcclxuICAgICAgZGF0YS5wdXNoKHtcclxuICAgICAgICB5OiB2aWV3cyxcclxuICAgICAgICB4OiBtb21lbnQudG9EYXRlKClcclxuICAgICAgfSlcclxuICAgICAgY29udmVyc2lvbi5wdXNoKHtcclxuICAgICAgICB5OiBNYXRoLnJvdW5kKHZpZXdzICogMC4xKSxcclxuICAgICAgICB4OiBtb21lbnQudG9EYXRlKClcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgIGxhYmVsOiBcIkNvbnZlcnNpb25cIixcclxuICAgICAgICBkYXRhOiBjb252ZXJzaW9uXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBsYWJlbDogXCJWaWV3c1wiLFxyXG4gICAgICAgIGRhdGFcclxuICAgICAgfV1cclxuICAgIH1cclxuXHJcbiAgICBDaGFydHMuY3JlYXRlKGlkLCB0eXBlLCBvcHRpb25zLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgdmFyIFRvdGFsT3JkZXJzID0gZnVuY3Rpb24oaWQsIHR5cGUgPSAnbGluZScsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgIGZvbnRDb2xvcjogJ3JnYmEoNTQsIDc2LCAxMDIsIDAuNTQpJyxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgdGV4dDogJ09SREVSUyBPVkVSIFRJTUUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHNjYWxlczoge1xyXG4gICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgc3RlcFNpemU6IDEsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIHhBeGVzOiBbe1xyXG4gICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNCxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaXRlbVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHR5cGU6ICd0aW1lJyxcclxuICAgICAgICAgIHRpbWU6IHtcclxuICAgICAgICAgICAgdW5pdDogJ2RheScsXHJcbiAgICAgICAgICAgIGRpc3BsYXlGb3JtYXRzOiB7XHJcbiAgICAgICAgICAgICAgZGF5OiAnRC9NTSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RlcFNpemU6IDIsXHJcbiAgICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDcsXHJcbiAgICAgICAgICAgIGF1dG9Ta2lwOiBmYWxzZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XVxyXG4gICAgICB9XHJcbiAgICB9LCBvcHRpb25zKVxyXG5cclxuICAgIHZhciBkYXRhID0gW11cclxuXHJcbiAgICAvLyBDcmVhdGUgYSBkYXRlIHJhbmdlIGZvciB0aGUgbGFzdCA3IGRheXNcclxuICAgIHZhciBzdGFydCA9IG1vbWVudCgpLnN1YnRyYWN0KDYsICdkYXlzJykuZm9ybWF0KCdZWVlZLU1NLUREJykgLy8gNyBkYXlzIGFnb1xyXG4gICAgdmFyIGVuZCA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIC8vIHRvZGF5XHJcbiAgICB2YXIgcmFuZ2UgPSBtb21lbnQucmFuZ2Uoc3RhcnQsIGVuZClcclxuXHJcbiAgICAvLyBDcmVhdGUgdGhlIGdyYXBoIGRhdGFcclxuICAgIC8vIEl0ZXJhdGUgdGhlIGRhdGUgcmFuZ2UgYW5kIGFzc2lnbiBhIHJhbmRvbSB2YWx1ZSBmb3IgZWFjaCBkYXlcclxuICAgIHJhbmdlLmJ5KCdkYXlzJywgZnVuY3Rpb24obW9tZW50KSB7XHJcbiAgICAgIGRhdGEucHVzaCh7XHJcbiAgICAgICAgeTogZ2V0UmFuZG9tSW50KDAsIDIpLFxyXG4gICAgICAgIHg6IG1vbWVudC50b0RhdGUoKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgbGFiZWw6IFwiVG90YWwgT3JkZXJzXCIsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgICB9XVxyXG4gICAgfVxyXG5cclxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXHJcbiAgfVxyXG5cclxuICB2YXIgQXZlcmFnZU9yZGVyVmFsdWUgPSBmdW5jdGlvbihpZCwgdHlwZSA9ICdsaW5lJywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgZm9udENvbG9yOiAncmdiYSg1NCwgNzYsIDEwMiwgMC41NCknLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICB0ZXh0OiAnT1JERVIgVkFMVUUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHNjYWxlczoge1xyXG4gICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgc3RlcFNpemU6IDEwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgeEF4ZXM6IFt7XHJcbiAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBpdGVtXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdHlwZTogJ3RpbWUnLFxyXG4gICAgICAgICAgdGltZToge1xyXG4gICAgICAgICAgICB1bml0OiAnZGF5JyxcclxuICAgICAgICAgICAgZGlzcGxheUZvcm1hdHM6IHtcclxuICAgICAgICAgICAgICBkYXk6ICdEL01NJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGVwU2l6ZTogMixcclxuICAgICAgICAgICAgbWF4VGlja3NMaW1pdDogNyxcclxuICAgICAgICAgICAgYXV0b1NraXA6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfV1cclxuICAgICAgfVxyXG4gICAgfSwgb3B0aW9ucylcclxuXHJcbiAgICB2YXIgZGF0YSA9IFtdXHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgZGF0ZSByYW5nZSBmb3IgdGhlIGxhc3QgNyBkYXlzXHJcbiAgICB2YXIgc3RhcnQgPSBtb21lbnQoKS5zdWJ0cmFjdCg2LCAnZGF5cycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIC8vIDcgZGF5cyBhZ29cclxuICAgIHZhciBlbmQgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSAvLyB0b2RheVxyXG4gICAgdmFyIHJhbmdlID0gbW9tZW50LnJhbmdlKHN0YXJ0LCBlbmQpXHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBncmFwaCBkYXRhXHJcbiAgICAvLyBJdGVyYXRlIHRoZSBkYXRlIHJhbmdlIGFuZCBhc3NpZ24gYSByYW5kb20gdmFsdWUgZm9yIGVhY2ggZGF5XHJcbiAgICByYW5nZS5ieSgnZGF5cycsIGZ1bmN0aW9uKG1vbWVudCkge1xyXG4gICAgICBkYXRhLnB1c2goe1xyXG4gICAgICAgIHk6IGdldFJhbmRvbUludCgwLCA1MCksXHJcbiAgICAgICAgeDogbW9tZW50LnRvRGF0ZSgpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICBsYWJlbDogXCJPcmRlciBWYWx1ZVwiLFxyXG4gICAgICAgIGRhdGFcclxuICAgICAgfV1cclxuICAgIH1cclxuXHJcbiAgICBDaGFydHMuY3JlYXRlKGlkLCB0eXBlLCBvcHRpb25zLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgdmFyIFZpc2l0c0J5RGV2aWNlID0gZnVuY3Rpb24oaWQsIHR5cGUgPSAnZG91Z2hudXQnLCBvcHRpb25zID0ge30pIHtcclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICBsYWJlbHM6IFtcIkRlc2t0b3BcIiwgXCJNb2JpbGVcIiwgXCJUYWJsZXRcIl0sXHJcbiAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgIGRhdGE6IFsyNjcsIDE4NCwgMF1cclxuICAgICAgfV1cclxuICAgIH1cclxuXHJcbiAgICBDaGFydHMuY3JlYXRlKGlkLCB0eXBlLCBvcHRpb25zLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vIENyZWF0ZSBDaGFydHMgLy9cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgXHJcbiAgVG90YWxTYWxlcygnI3RvdGFsU2FsZXNDaGFydCcpXHJcbiAgVG90YWxWaXNpdG9ycygnI3RvdGFsVmlzaXRvcnNDaGFydCcpXHJcbiAgUmVwZWF0Q3VzdG9tZXJSYXRlKCcjcmVwZWF0Q3VzdG9tZXJSYXRlQ2hhcnQnKVxyXG4gIFRvdGFsT3JkZXJzKCcjdG90YWxPcmRlcnNDaGFydCcpXHJcbiAgQXZlcmFnZU9yZGVyVmFsdWUoJyNhdmVyYWdlT3JkZXJWYWx1ZUNoYXJ0JylcclxuICBWaXNpdHNCeURldmljZSgnI3Zpc2l0c0J5RGV2aWNlQ2hhcnQnKVxyXG4gIFZpZXdzKCcjdmlld3NDaGFydCcpXHJcblxyXG59KSgpIiwiaW1wb3J0ICd1aS1odW1hL2pzL3BhZ2UuZWNvbW1lcmNlJyJdLCJzb3VyY2VSb290IjoiIn0=