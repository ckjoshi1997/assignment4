"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable react/button-has-type */

/* eslint-disable react/destructuring-assignment */

/* eslint "react/react-in-jsx-scope": "off" */

/* globals React ReactDOM PropTypes */

/* eslint "react/jsx-no-undef": "off" */

/* eslint "react/no-multi-comp": "off" */

/* eslint "no-alert": "off" */
// eslint-disable-next-line react/prefer-stateless-function
function ItemRow(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, item.name), /*#__PURE__*/React.createElement("td", null, "$".concat(item.price)), /*#__PURE__*/React.createElement("td", null, item.category), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: item.image,
    target: "_blank",
    rel: "noreferrer"
  }, "View")));
}

function ItemTable(_ref2) {
  var items = _ref2.items;
  var itemRows = items.map(function (item) {
    return /*#__PURE__*/React.createElement(ItemRow, {
      key: item.id,
      item: item
    });
  });
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Product Name"), /*#__PURE__*/React.createElement("th", null, "Price"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", null, "Image"))), /*#__PURE__*/React.createElement("tbody", null, itemRows));
} // class to add items


var ItemAdd = /*#__PURE__*/function (_React$Component) {
  _inherits(ItemAdd, _React$Component);

  var _super = _createSuper(ItemAdd);

  // simple constructor, sets price state to blank
  function ItemAdd() {
    var _this;

    _classCallCheck(this, ItemAdd);

    _this = _super.call(this);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.state = {
      price: ''
    };
    return _this;
  } // on submit


  _createClass(ItemAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.itemAdd;
      var item = {
        name: form.name.value,
        category: form.category.value,
        price: this.state.price,
        image: form.image.value
      }; // reset values

      var createItem = this.props.createItem;
      createItem(item);
      form.name.value = '';
      this.setState({
        price: ''
      });
      form.category.value = '';
      form.image.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("form", {
        name: "itemAdd",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "category"
      }, "Category", /*#__PURE__*/React.createElement("select", {
        name: "category"
      }, /*#__PURE__*/React.createElement("option", {
        value: "Shirts"
      }, "Shirts"), /*#__PURE__*/React.createElement("option", {
        value: "Jeans"
      }, "Jeans"), /*#__PURE__*/React.createElement("option", {
        value: "Jackets"
      }, "Jackets"), /*#__PURE__*/React.createElement("option", {
        value: "Sweaters"
      }, "Sweaters"), /*#__PURE__*/React.createElement("option", {
        value: "Accessories"
      }, "Accessories"))), /*#__PURE__*/React.createElement("label", {
        htmlFor: "price"
      }, "Price Per Unit", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "price",
        value: "$".concat(this.state.price),
        onChange: function onChange(e) {
          var newValue = e.target.value.split('$')[1] || '';

          _this2.setState({
            price: newValue
          });
        }
      })), /*#__PURE__*/React.createElement("label", {
        htmlFor: "name"
      }, "Product Name", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "name"
      })), /*#__PURE__*/React.createElement("label", {
        htmlFor: "image"
      }, "Image URL", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "image"
      })), /*#__PURE__*/React.createElement("button", null, "Add Product"));
    }
  }]);

  return ItemAdd;
}(React.Component);

ItemAdd.propTypes = {
  createItem: PropTypes.func.isRequired
};

function graphQLFetch(_x) {
  return _graphQLFetch.apply(this, arguments);
} // list class


function _graphQLFetch() {
  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(query) {
    var variables,
        response,
        body,
        result,
        error,
        details,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            variables = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
            _context3.prev = 1;
            _context3.next = 4;
            return fetch(window.ENV.UI_API_ENDPOINT, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                query: query,
                variables: variables
              })
            });

          case 4:
            response = _context3.sent;
            _context3.next = 7;
            return response.text();

          case 7:
            body = _context3.sent;
            result = JSON.parse(body);

            if (result.errors) {
              error = result.errors[0];

              if (error.extensions.code === 'BAD_USER_INPUT') {
                details = error.extensions.exception.errors.join('\n ');
                alert("".concat(error.message, ":\n ").concat(details));
              } else {
                alert("".concat(error.extensions.code, ": ").concat(error.message));
              }
            }

            return _context3.abrupt("return", result.data);

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](1);
            alert("Error in sending data to server: ".concat(_context3.t0.message));
            return _context3.abrupt("return", null);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 13]]);
  }));
  return _graphQLFetch.apply(this, arguments);
}

var ItemList = /*#__PURE__*/function (_React$Component2) {
  _inherits(ItemList, _React$Component2);

  var _super2 = _createSuper(ItemList);

  function ItemList() {
    var _this3;

    _classCallCheck(this, ItemList);

    _this3 = _super2.call(this);
    _this3.state = {
      items: []
    };
    _this3.createItem = _this3.createItem.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(ItemList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var query, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "query {\n      productList {\n        id category name price image\n      }\n    }";
                _context.next = 3;
                return graphQLFetch(query);

              case 3:
                data = _context.sent;

                if (data) {
                  this.setState({
                    items: data.productList
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }() // create item and add to graphql

  }, {
    key: "createItem",
    value: function () {
      var _createItem = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(item) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "mutation {\n        productAdd(product:{\n            name: \"".concat(item.name, "\",\n            category: ").concat(item.category, ",\n            price: ").concat(item.price, ",\n            image: \"").concat(item.image, "\", \n        }) {\n                id\n            }\n        }");
                _context2.next = 3;
                return graphQLFetch(query, {
                  item: item
                });

              case 3:
                data = _context2.sent;

                if (data) {
                  this.loadData();
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createItem(_x2) {
        return _createItem.apply(this, arguments);
      }

      return createItem;
    }()
  }, {
    key: "render",
    value: function render() {
      var items = this.state.items;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "My Company Inventory"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ItemTable, {
        items: items
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ItemAdd, {
        createItem: this.createItem
      }));
    }
  }]);

  return ItemList;
}(React.Component);

var element = /*#__PURE__*/React.createElement(ItemList, null);
ReactDOM.render(element, document.getElementById('contents'));