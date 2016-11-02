(function () {
"use strict";

angular.module('public')
.service('UserPrefService',UserPrefService);

function UserPrefService() {
var service = this;
var signedup=false;
var savedPref = {};
service.save=function (user) {
    savedPref= user;
    signedup=true;
    return true;
}

service.isUserLoggedIn =function () {
  return  signedup;
}

service.getUserInfo= function () {
  return savedPref;
}
}})();
