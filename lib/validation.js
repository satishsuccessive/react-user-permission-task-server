"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasPermissions = exports.search = exports.validateEmail = void 0;
const regex = /^[a-zA-Z0-9.]+@(successive){1}\.(tech){1}$/;

const validateEmail = (email, role) => {
  const validate = regex.test(email);
  const msg1 = "Email is not vailidate from server (use successive.tech)";
  const msg2 = " Role is blank"; // const msg1 = {inputMsg:'Email is not vaild',roleMsg:'Select Role'};
  // const msg2 = {inputMsg:'',roleMsg:'Please select Role'};
  // const msg3 = {inputMsg:'Email is not vaild',roleMsg:''};

  console;
  if (!validate && role == '') return msg1 + '&' + msg2;
  if (validate && role == '') return msg2;
  if (!validate && role != '' | role != null) return msg1;
  return true;
};

exports.validateEmail = validateEmail;

const search = (email, myArray) => {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].inputEmail === email) {
      let role = myArray[i].selectRole;
      return role;
    }
  }

  return false;
};

exports.search = search;
const permissions = {
  'getUsers': {
    all: ['head_trainer'],
    read: ['trainee', 'trainer', 'head_trainer'],
    write: ['trainer', 'head_trainer', 'trainer'],
    delete: []
  }
};

const hasPermissions = (moduleName, role, permissionType) => {
  if (permissions[moduleName][permissionType].includes(role)) {
    return '';
  } else {
    return 'disabled';
  }
};

exports.hasPermissions = hasPermissions;