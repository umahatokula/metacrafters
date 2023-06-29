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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/dist/ethers.umd.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _artifacts_contracts_TokenVesting_sol_TokenVesting_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../artifacts/contracts/TokenVesting.sol/TokenVesting.json */ \"./artifacts/contracts/TokenVesting.sol/TokenVesting.json\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/utils */ \"./lib/utils.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [ethWallet, setEthWallet] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    // Stakeholder vars\n    const [organization, setOrganization] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [stakeholderAddress, setStakeholderAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [vestingPeriod, setVestingPeriod] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [totalTokens, setTotalTokens] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const contractAddress = _constants__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS;\n    const ABI = _artifacts_contracts_TokenVesting_sol_TokenVesting_json__WEBPACK_IMPORTED_MODULE_4__.abi;\n    const getWallet = async ()=>{\n        if (window.ethereum) {\n            setEthWallet(window.ethereum);\n        }\n        if (ethWallet) {\n            const account = await ethWallet.request({\n                method: \"eth_accounts\"\n            });\n            handleAccount(account);\n        }\n    };\n    const handleAccount = (account)=>{\n        if (account) {\n            console.log(\"Account connected: \", account);\n            setAccount(account);\n        } else {\n            console.log(\"No account found\");\n        }\n    };\n    const connectAccount = async ()=>{\n        if (!ethWallet) {\n            alert(\"MetaMask wallet is required to connect\");\n            return;\n        }\n        const accounts = await ethWallet.request({\n            method: \"eth_requestAccounts\"\n        });\n        handleAccount(accounts);\n        // once wallet is set we can get a reference to our deployed contract\n        getContract();\n    };\n    const getContract = ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(ethWallet);\n        const signer = provider.getSigner();\n        const idmContract = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(contractAddress, ABI, signer);\n        setContract(idmContract);\n    };\n    const getStakeholder = async (e)=>{\n        e.preventDefault();\n        console.log(\"account\", account);\n        console.log(\"contract\", contract);\n        console.log(\"stakeholderAddress\", stakeholderAddress);\n        const _vestingPeriod = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.getDaysFromTodayEpoch)(vestingPeriod);\n        // try{\n        let tx = await contract.whitelistAddress(stakeholderAddress.toString(), _vestingPeriod);\n        tx = await tx.wait();\n        console.log(\"\\uD83D\\uDE80 ~ file: index.js:14 ~ registerOrg ~ tx:\", tx);\n        alert(\"Added successfully\");\n    // } catch (error) {\n    //   console.log(error, \"error\");\n    //   throw new Error(\"Error while staking\");\n    // }\n    };\n    const initUser = ()=>{\n        // Check to see if user has Metamask\n        if (!ethWallet) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please install Metamask in order to continue\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                lineNumber: 86,\n                columnNumber: 14\n            }, this);\n        }\n        // Check to see if user is connected. If not, connect to their account\n        if (!account) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-stone-700 text-white py-3 px-6 rounded-lg\",\n                onClick: connectAccount,\n                children: \"Please connect your Metamask wallet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-2 gap-16\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-2xl font-bold\",\n                        children: \"Whitelist Stakeholder\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"max-w-md mx-auto bg-slate-500 shadow-md rounded px-8 py-6\",\n                        onSubmit: whitelistAddress,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                        htmlFor: \"number\",\n                                        children: \"Stakeholder address\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                        id: \"vesting Period\",\n                                        placeholder: \"Stakeholder Address\",\n                                        value: stakeholderAddress,\n                                        onChange: (e)=>setStakeholderAddress(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                        htmlFor: \"name\",\n                                        children: \"Vesting Period\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                        id: \"name\",\n                                        type: \"number\",\n                                        placeholder: \"Vesting period in days\",\n                                        value: vestingPeriod,\n                                        onChange: (e)=>setVestingPeriod(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                                        lineNumber: 124,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                    type: \"submit\",\n                                    children: \"Whitelist Stakeholder\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                                    lineNumber: 135,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                                lineNumber: 134,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                lineNumber: 104,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n            lineNumber: 102,\n            columnNumber: 7\n        }, this);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getWallet();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"jsx-15247bb64c99e1bc\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"jsx-15247bb64c99e1bc\" + \" \" + \"my-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"jsx-15247bb64c99e1bc\" + \" \" + \"text-3xl font-extrabold\",\n                    children: \"Welcome to our VESTING Platform!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                    lineNumber: 154,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n                lineNumber: 153,\n                columnNumber: 7\n            }, this),\n            initUser(),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"15247bb64c99e1bc\",\n                children: \".container.jsx-15247bb64c99e1bc{text-align:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Umaha\\\\Documents\\\\metacrafters\\\\solidity\\\\advanced\\\\vesting-app\\\\pages\\\\index.js\",\n        lineNumber: 152,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"DLzZUCjAKCAYuIL0Nyp31RjY65w=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RWIsNEVBQUNFOztrQ0FDQyw4REFBQ0M7d0JBQUdILFdBQVU7a0NBQXFCOzs7Ozs7a0NBQ25DLDhEQUFDSTt3QkFBS0osV0FBVTt3QkFBNERLLFVBQVVYOzswQ0FDcEYsOERBQUNRO2dDQUFJRixXQUFVOztrREFDYiw4REFBQ007d0NBQU1OLFdBQVU7d0NBQTZDTyxTQUFRO2tEQUFTOzs7Ozs7a0RBRy9FLDhEQUFDQzt3Q0FDQ1IsV0FBVTt3Q0FDVlMsSUFBRzt3Q0FDSEMsYUFBWTt3Q0FDWkMsT0FBT2xEO3dDQUNQbUQsVUFBVSxDQUFDdEIsSUFBTTVCLHNCQUFzQjRCLEVBQUV1QixNQUFNLENBQUNGLEtBQUs7d0NBQ3JERyxRQUFROzs7Ozs7Ozs7Ozs7MENBR1osOERBQUNaO2dDQUFJRixXQUFVOztrREFDYiw4REFBQ007d0NBQU1OLFdBQVU7d0NBQTZDTyxTQUFRO2tEQUFPOzs7Ozs7a0RBRzdFLDhEQUFDQzt3Q0FDQ1IsV0FBVTt3Q0FDVlMsSUFBRzt3Q0FDSE0sTUFBSzt3Q0FDTEwsYUFBWTt3Q0FDWkMsT0FBT2hEO3dDQUNQaUQsVUFBVSxDQUFDdEIsSUFBTTFCLGlCQUFpQjBCLEVBQUV1QixNQUFNLENBQUNGLEtBQUs7d0NBQ2hERyxRQUFROzs7Ozs7Ozs7Ozs7MENBR1osOERBQUNaO2dDQUFJRixXQUFVOzBDQUNiLDRFQUFDRDtvQ0FDQ0MsV0FBVTtvQ0FDVmUsTUFBSzs4Q0FDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVNiO0lBRUF0RSxnREFBU0EsQ0FBQyxJQUFNO1FBQUN5QjtJQUFZLEdBQUcsRUFBRTtJQUVsQyxxQkFDRSw4REFBQzhDO2tEQUFlOzswQkFDZCw4REFBQ0M7MERBQWlCOzBCQUNoQiw0RUFBQ0M7OERBQWE7OEJBQTBCOzs7Ozs7Ozs7OztZQUV6Q3JCOzs7Ozs7Ozs7OztBQVNQLENBQUM7R0E5SnVCOUM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0JpZ051bWJlciwgZXRoZXJzfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCBDT05UUkFDVF9BQkkgZnJvbSAnLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9Ub2tlblZlc3Rpbmcuc29sL1Rva2VuVmVzdGluZy5qc29uJ1xyXG5pbXBvcnQgeyBDT05UUkFDVF9BRERSRVNTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBnZXREYXlzRnJvbVRvZGF5RXBvY2ggfSBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICBjb25zdCBbZXRoV2FsbGV0LCBzZXRFdGhXYWxsZXRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuXHJcbiAgLy8gU3Rha2Vob2xkZXIgdmFyc1xyXG4gIGNvbnN0IFtvcmdhbml6YXRpb24sIHNldE9yZ2FuaXphdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N0YWtlaG9sZGVyQWRkcmVzcywgc2V0U3Rha2Vob2xkZXJBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdmVzdGluZ1BlcmlvZCwgc2V0VmVzdGluZ1BlcmlvZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RvdGFsVG9rZW5zLCBzZXRUb3RhbFRva2Vuc10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IENPTlRSQUNUX0FERFJFU1M7XHJcbiAgY29uc3QgQUJJID0gQ09OVFJBQ1RfQUJJLmFiaTtcclxuXHJcbiAgY29uc3QgZ2V0V2FsbGV0ID0gYXN5bmMoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgIHNldEV0aFdhbGxldCh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldGhXYWxsZXQpIHtcclxuICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IGV0aFdhbGxldC5yZXF1ZXN0KHttZXRob2Q6IFwiZXRoX2FjY291bnRzXCJ9KTtcclxuICAgICAgaGFuZGxlQWNjb3VudChhY2NvdW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFjY291bnQgPSAoYWNjb3VudCkgPT4ge1xyXG4gICAgaWYgKGFjY291bnQpIHtcclxuICAgICAgY29uc29sZS5sb2cgKFwiQWNjb3VudCBjb25uZWN0ZWQ6IFwiLCBhY2NvdW50KTtcclxuICAgICAgc2V0QWNjb3VudChhY2NvdW50KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk5vIGFjY291bnQgZm91bmRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb25uZWN0QWNjb3VudCA9IGFzeW5jKCkgPT4ge1xyXG4gICAgaWYgKCFldGhXYWxsZXQpIHtcclxuICAgICAgYWxlcnQoJ01ldGFNYXNrIHdhbGxldCBpcyByZXF1aXJlZCB0byBjb25uZWN0Jyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoV2FsbGV0LnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcclxuICAgIGhhbmRsZUFjY291bnQoYWNjb3VudHMpO1xyXG4gICAgXHJcbiAgICAvLyBvbmNlIHdhbGxldCBpcyBzZXQgd2UgY2FuIGdldCBhIHJlZmVyZW5jZSB0byBvdXIgZGVwbG95ZWQgY29udHJhY3RcclxuICAgIGdldENvbnRyYWN0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q29udHJhY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhXYWxsZXQpO1xyXG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICBjb25zdCBpZG1Db250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBBQkksIHNpZ25lcik7XHJcbiBcclxuICAgIHNldENvbnRyYWN0KGlkbUNvbnRyYWN0KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFN0YWtlaG9sZGVyID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKCdhY2NvdW50JywgYWNjb3VudClcclxuICAgIGNvbnNvbGUubG9nKCdjb250cmFjdCcsIGNvbnRyYWN0KVxyXG4gICAgY29uc29sZS5sb2coJ3N0YWtlaG9sZGVyQWRkcmVzcycsIHN0YWtlaG9sZGVyQWRkcmVzcylcclxuICAgIGNvbnN0IF92ZXN0aW5nUGVyaW9kID0gZ2V0RGF5c0Zyb21Ub2RheUVwb2NoKHZlc3RpbmdQZXJpb2QpXHJcblxyXG4gICAgLy8gdHJ5e1xyXG4gICAgICBsZXQgdHggPSBhd2FpdCBjb250cmFjdC53aGl0ZWxpc3RBZGRyZXNzKHN0YWtlaG9sZGVyQWRkcmVzcy50b1N0cmluZygpLCBfdmVzdGluZ1BlcmlvZClcclxuICAgICAgdHggPSBhd2FpdCB0eC53YWl0KClcclxuICAgICAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogaW5kZXguanM6MTQgfiByZWdpc3Rlck9yZyB+IHR4OlwiLCB0eClcclxuXHJcbiAgICAgIGFsZXJ0KFwiQWRkZWQgc3VjY2Vzc2Z1bGx5XCIpXHJcblxyXG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coZXJyb3IsIFwiZXJyb3JcIik7XHJcbiAgICAvLyAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIHdoaWxlIHN0YWtpbmdcIik7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbml0VXNlciA9ICgpID0+IHtcclxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB1c2VyIGhhcyBNZXRhbWFza1xyXG4gICAgaWYgKCFldGhXYWxsZXQpIHtcclxuICAgICAgcmV0dXJuIDxwPlBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrIGluIG9yZGVyIHRvIGNvbnRpbnVlPC9wPlxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB1c2VyIGlzIGNvbm5lY3RlZC4gSWYgbm90LCBjb25uZWN0IHRvIHRoZWlyIGFjY291bnRcclxuICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT0nYmctc3RvbmUtNzAwIHRleHQtd2hpdGUgcHktMyBweC02IHJvdW5kZWQtbGcnXHJcbiAgICAgICAgICBvbkNsaWNrPXtjb25uZWN0QWNjb3VudH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBQbGVhc2UgY29ubmVjdCB5b3VyIE1ldGFtYXNrIHdhbGxldFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0xNlwiPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPldoaXRlbGlzdCBTdGFrZWhvbGRlcjwvaDQ+XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIGJnLXNsYXRlLTUwMCBzaGFkb3ctbWQgcm91bmRlZCBweC04IHB5LTZcIiBvblN1Ym1pdD17d2hpdGVsaXN0QWRkcmVzc30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwibnVtYmVyXCI+XHJcbiAgICAgICAgICAgICAgICBTdGFrZWhvbGRlciBhZGRyZXNzXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgIGlkPVwidmVzdGluZyBQZXJpb2RcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGFrZWhvbGRlciBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGFrZWhvbGRlckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YWtlaG9sZGVyQWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICBWZXN0aW5nIFBlcmlvZFxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZlc3RpbmcgcGVyaW9kIGluIGRheXNcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Zlc3RpbmdQZXJpb2R9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZlc3RpbmdQZXJpb2QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXNsYXRlLTYwMCBob3ZlcjpiZy1zbGF0ZS04MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFdoaXRlbGlzdCBTdGFrZWhvbGRlclxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtnZXRXYWxsZXQoKTt9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJteS0xNlwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWV4dHJhYm9sZFwiPldlbGNvbWUgdG8gb3VyIFZFU1RJTkcgUGxhdGZvcm0hPC9oMT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIHtpbml0VXNlcigpfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L21haW4+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQmlnTnVtYmVyIiwiZXRoZXJzIiwiQ09OVFJBQ1RfQUJJIiwiQ09OVFJBQ1RfQUREUkVTUyIsImdldERheXNGcm9tVG9kYXlFcG9jaCIsIkhvbWVQYWdlIiwiZXRoV2FsbGV0Iiwic2V0RXRoV2FsbGV0IiwidW5kZWZpbmVkIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJjb250cmFjdCIsInNldENvbnRyYWN0Iiwib3JnYW5pemF0aW9uIiwic2V0T3JnYW5pemF0aW9uIiwic3Rha2Vob2xkZXJBZGRyZXNzIiwic2V0U3Rha2Vob2xkZXJBZGRyZXNzIiwidmVzdGluZ1BlcmlvZCIsInNldFZlc3RpbmdQZXJpb2QiLCJ0b3RhbFRva2VucyIsInNldFRvdGFsVG9rZW5zIiwiY29udHJhY3RBZGRyZXNzIiwiQUJJIiwiYWJpIiwiZ2V0V2FsbGV0Iiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiaGFuZGxlQWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0QWNjb3VudCIsImFsZXJ0IiwiYWNjb3VudHMiLCJnZXRDb250cmFjdCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiaWRtQ29udHJhY3QiLCJDb250cmFjdCIsImdldFN0YWtlaG9sZGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiX3Zlc3RpbmdQZXJpb2QiLCJ0eCIsIndoaXRlbGlzdEFkZHJlc3MiLCJ0b1N0cmluZyIsIndhaXQiLCJpbml0VXNlciIsInAiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZGl2IiwiaDQiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJ0eXBlIiwibWFpbiIsImhlYWRlciIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});