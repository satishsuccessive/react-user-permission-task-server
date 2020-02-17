"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.inputArr = void 0;

var _validation = require("../../lib/validation");

var _mockData = require("../../lib/mock-data");

// import Data from '../../lib/data';
// import {da} from '../../lib/inputData';
const inputArr = [];
exports.inputArr = inputArr;
const updUsersRole = _mockData.usersRole[0];
const Query = {
  getUser: async () => updUsersRole,
  getRole: async (parent, args) => {
    const email = args.data.inputEmail;
    const role = args.data.selectRole; // validation for successive id

    const valid = (0, _validation.validateEmail)(email, role); // match for db

    if (valid === true) {
      const matched = (0, _validation.search)(email, updUsersRole);
      if (!matched) return {
        error: 'Email is not matched from DB'
      };
      const preparedArrayOfPrms = {
        read: (0, _validation.hasPermissions)('getUsers', matched, 'read'),
        write: (0, _validation.hasPermissions)('getUsers', matched, 'write'),
        delete: (0, _validation.hasPermissions)('getUsers', matched, 'delete'),
        role: matched
      };
      return preparedArrayOfPrms;
    } else {
      return {
        error: valid
      };
    }
  }
};
var _default = Query;
exports.default = _default;