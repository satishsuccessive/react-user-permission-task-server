"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validationUser = require("./validationUser");

var _default = {
  Query: { ..._validationUser.Query
  },
  Mutation: { ..._validationUser.Mutation
  }
};
exports.default = _default;