"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AppContext */ \"./contexts/AppContext.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction HomePage() {\n    _s();\n    const [ethWallet, setEthWallet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const getWallet = async ()=>{\n        if (window.ethereum) {\n            setEthWallet(window.ethereum);\n        }\n        if (ethWallet) {\n            const account = await ethWallet.request({\n                method: \"eth_accounts\"\n            });\n            handleAccount(account);\n        }\n    };\n    const handleAccount = (account)=>{\n        if (account) {\n            console.log(\"Account connected: \", account);\n            setAccount(account);\n        } else {\n            console.log(\"No account found\");\n        }\n    };\n    const connectAccount = async ()=>{\n        if (!ethWallet) {\n            alert(\"MetaMask wallet is required to connect\");\n            return;\n        }\n        const accounts = await ethWallet.request({\n            method: \"eth_requestAccounts\"\n        });\n        handleAccount(accounts);\n        // once wallet is set we can get a reference to our deployed contract\n        getContract();\n    };\n    const getContract = ()=>{\n        console.log(\"CONTRACT_ABI\", CONTRACT_ABI);\n        const provider = new ethers.providers.Web3Provider(ethWallet);\n        const signer = provider.getSigner();\n        const contractObj = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI.abi, signer);\n        console.log(\"\\uD83D\\uDE80 ~ file: ContextWrapper.js:53 ~ getContract ~ contractObj:\", contractObj);\n        setContract(contractObj);\n    };\n    useEffect(()=>{\n        getWallet();\n    }, []);\n    const [tokenContract, setTokenContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const registerOrg = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (e)=>{\n        e.preventDefault();\n        console.log(\"account\", account);\n        console.log(\"contract\", contract);\n        // try{\n        const tx = await contract.registerOrganization(tokenContract, name);\n        console.log(\"\\uD83D\\uDE80 ~ file: index.js:14 ~ registerOrg ~ tx:\", tx);\n    // } catch (error) {\n    //   console.log(error, \"error\");\n    //   throw new Error(\"Error while staking\");\n    // }\n    }, []);\n    const initUser = ()=>{\n        // Check to see if user has Metamask\n        if (!ethWallet) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please install Metamask in order to continue\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                lineNumber: 78,\n                columnNumber: 14\n            }, this);\n        }\n        // Check to see if user is connected. If not, connect to their account\n        if (!account) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Please connect your Metamask wallet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                lineNumber: 83,\n                columnNumber: 14\n            }, this);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"max-w-md mx-auto bg-slate-500 shadow-md rounded px-8 py-6\",\n                onSubmit: registerOrg,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                htmlFor: \"name\",\n                                children: \"Organisation Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                id: \"name\",\n                                type: \"text\",\n                                placeholder: \"Organisation Name\",\n                                value: name,\n                                onChange: (e)=>setName(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                htmlFor: \"number\",\n                                children: \"Contract Token\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                id: \"vesting Period\",\n                                placeholder: \"Contract Token Address\",\n                                value: tokenContract,\n                                onChange: (e)=>setTokenContract(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                            type: \"submit\",\n                            children: \"Register Organization\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n            lineNumber: 87,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"w-full\",\n        children: initUser()\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n        lineNumber: 132,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"YDbcS5oK3lxWxknRzSPFTYUkvGY=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxFQUFFa0IsTUFBTSxDQUFDRixLQUFLO2dDQUN2Q0csUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDYjt3QkFBSUUsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFNRixXQUFVO2dDQUE2Q0csU0FBUTswQ0FBUzs7Ozs7OzBDQUcvRSw4REFBQ0M7Z0NBQ0NKLFdBQVU7Z0NBQ1ZLLElBQUc7Z0NBQ0hFLGFBQVk7Z0NBQ1pDLE9BQU9yQjtnQ0FDUHNCLFVBQVUsQ0FBQ2pCLElBQU1KLGlCQUFpQkksRUFBRWtCLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDaERHLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ2I7d0JBQUlFLFdBQVU7a0NBQ2IsNEVBQUNZOzRCQUNDWixXQUFVOzRCQUNWTSxNQUFLO3NDQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBT1g7SUFFQSxxQkFDRSw4REFBQ087UUFBS2IsV0FBVTtrQkFDWEo7Ozs7OztBQUdULENBQUM7R0FwSXVCekM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VDYWxsYmFja30gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0cy9BcHBDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuXHJcbiAgY29uc3QgW2V0aFdhbGxldCwgc2V0RXRoV2FsbGV0XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcblxyXG4gIGNvbnN0IGdldFdhbGxldCA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgIHNldEV0aFdhbGxldCh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZXRoV2FsbGV0KSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBldGhXYWxsZXQucmVxdWVzdCh7bWV0aG9kOiBcImV0aF9hY2NvdW50c1wifSk7XHJcbiAgICAgIGhhbmRsZUFjY291bnQoYWNjb3VudCk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFjY291bnQgPSAoYWNjb3VudCkgPT4ge1xyXG4gICAgICBpZiAoYWNjb3VudCkge1xyXG4gICAgICBjb25zb2xlLmxvZyAoXCJBY2NvdW50IGNvbm5lY3RlZDogXCIsIGFjY291bnQpO1xyXG4gICAgICBzZXRBY2NvdW50KGFjY291bnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk5vIGFjY291bnQgZm91bmRcIik7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbm5lY3RBY2NvdW50ID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgIGlmICghZXRoV2FsbGV0KSB7XHJcbiAgICAgIGFsZXJ0KCdNZXRhTWFzayB3YWxsZXQgaXMgcmVxdWlyZWQgdG8gY29ubmVjdCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhXYWxsZXQucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgICBoYW5kbGVBY2NvdW50KGFjY291bnRzKTtcclxuICAgICAgXHJcbiAgICAgIC8vIG9uY2Ugd2FsbGV0IGlzIHNldCB3ZSBjYW4gZ2V0IGEgcmVmZXJlbmNlIHRvIG91ciBkZXBsb3llZCBjb250cmFjdFxyXG4gICAgICBnZXRDb250cmFjdCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldENvbnRyYWN0ID0gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnQ09OVFJBQ1RfQUJJJywgQ09OVFJBQ1RfQUJJKVxyXG5cclxuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoV2FsbGV0KTtcclxuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0T2JqID0gbmV3IGV0aGVycy5Db250cmFjdChDT05UUkFDVF9BRERSRVNTLCBDT05UUkFDVF9BQkkuYWJpLCBzaWduZXIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBDb250ZXh0V3JhcHBlci5qczo1MyB+IGdldENvbnRyYWN0IH4gY29udHJhY3RPYmo6XCIsIGNvbnRyYWN0T2JqKVxyXG4gIFxyXG4gICAgICBzZXRDb250cmFjdChjb250cmFjdE9iaik7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge2dldFdhbGxldCgpO30sIFtdKTtcclxuICBcclxuICBjb25zdCBbdG9rZW5Db250cmFjdCwgc2V0VG9rZW5Db250cmFjdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IHJlZ2lzdGVyT3JnID0gdXNlQ2FsbGJhY2soYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FjY291bnQnLCBhY2NvdW50KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb250cmFjdCcsIGNvbnRyYWN0KVxyXG5cclxuICAgICAgICAvLyB0cnl7XHJcbiAgICAgICAgICBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0LnJlZ2lzdGVyT3JnYW5pemF0aW9uKHRva2VuQ29udHJhY3QsIG5hbWUpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBpbmRleC5qczoxNCB+IHJlZ2lzdGVyT3JnIH4gdHg6XCIsIHR4KVxyXG5cclxuICAgICAgICAvLyB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coZXJyb3IsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciB3aGlsZSBzdGFraW5nXCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICBjb25zdCBpbml0VXNlciA9ICgpID0+IHtcclxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB1c2VyIGhhcyBNZXRhbWFza1xyXG4gICAgaWYgKCFldGhXYWxsZXQpIHtcclxuICAgICAgcmV0dXJuIDxwPlBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrIGluIG9yZGVyIHRvIGNvbnRpbnVlPC9wPlxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB1c2VyIGlzIGNvbm5lY3RlZC4gSWYgbm90LCBjb25uZWN0IHRvIHRoZWlyIGFjY291bnRcclxuICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICByZXR1cm4gPGRpdiA+UGxlYXNlIGNvbm5lY3QgeW91ciBNZXRhbWFzayB3YWxsZXQ8L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIGJnLXNsYXRlLTUwMCBzaGFkb3ctbWQgcm91bmRlZCBweC04IHB5LTZcIiBvblN1Ym1pdD17cmVnaXN0ZXJPcmd9PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgICAgICAgICAgT3JnYW5pc2F0aW9uIE5hbWVcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3JnYW5pc2F0aW9uIE5hbWVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwibnVtYmVyXCI+XHJcbiAgICAgICAgICAgICAgQ29udHJhY3QgVG9rZW5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgIGlkPVwidmVzdGluZyBQZXJpb2RcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udHJhY3QgVG9rZW4gQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Rva2VuQ29udHJhY3R9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUb2tlbkNvbnRyYWN0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1zbGF0ZS02MDAgaG92ZXI6Ymctc2xhdGUtODAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBSZWdpc3RlciBPcmdhbml6YXRpb25cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAge2luaXRVc2VyKCl9XHJcbiAgICA8L21haW4+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwiQXBwQ29udGV4dCIsIkhvbWVQYWdlIiwiZXRoV2FsbGV0Iiwic2V0RXRoV2FsbGV0IiwidW5kZWZpbmVkIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJjb250cmFjdCIsInNldENvbnRyYWN0IiwiZ2V0V2FsbGV0Iiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiaGFuZGxlQWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0QWNjb3VudCIsImFsZXJ0IiwiYWNjb3VudHMiLCJnZXRDb250cmFjdCIsIkNPTlRSQUNUX0FCSSIsInByb3ZpZGVyIiwiZXRoZXJzIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY29udHJhY3RPYmoiLCJDb250cmFjdCIsIkNPTlRSQUNUX0FERFJFU1MiLCJhYmkiLCJ1c2VFZmZlY3QiLCJ0b2tlbkNvbnRyYWN0Iiwic2V0VG9rZW5Db250cmFjdCIsIm5hbWUiLCJzZXROYW1lIiwicmVnaXN0ZXJPcmciLCJlIiwicHJldmVudERlZmF1bHQiLCJ0eCIsInJlZ2lzdGVyT3JnYW5pemF0aW9uIiwiaW5pdFVzZXIiLCJwIiwiZGl2IiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImJ1dHRvbiIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});