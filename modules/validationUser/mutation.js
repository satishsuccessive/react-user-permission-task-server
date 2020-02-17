"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validation = require("../../lib/validation");

var _mockData = require("../../lib/mock-data");

const Mutation = {
  postData: async (parent, args, {
    DataSource
  }, info) => {
    const email = args.data.inputEmail;
    const role = args.data.selectRole;
    const valid = (0, _validation.validateEmail)(email, role);

    if (valid === true) {
      _mockData.usersRole[0].push(args.data);

      return true;
    } else {
      return {
        error: valid
      };
    }
  }
};
var _default = Mutation;
exports.default = _default;