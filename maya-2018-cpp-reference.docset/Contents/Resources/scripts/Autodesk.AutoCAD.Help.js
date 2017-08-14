//---start of generated typescript---
//
//////////////////////////////////////////////////////////////////////////////
//
// (C) Copyright 2012 by Autodesk, Inc.
//
// The information contained herein is confidential, proprietary to Autodesk,
// Inc., and considered a trade secret as defined in section 499C of the
// penal code of the State of California.  Use of this information by anyone
// other than authorized employees of Autodesk, Inc. is granted only under a
// written non-disclosure agreement, expressly prescribing the scope and
// manner of such use.
//
//////////////////////////////////////////////////////////////////////////////
//---end of generated typescript---
//---start of generated typescript---
//
//////////////////////////////////////////////////////////////////////////////
//
// (C) Copyright 2012 by Autodesk, Inc.
//
// The information contained herein is confidential, proprietary to Autodesk,
// Inc., and considered a trade secret as defined in section 499C of the
// penal code of the State of California.  Use of this information by anyone
// other than authorized employees of Autodesk, Inc. is granted only under a
// written non-disclosure agreement, expressly prescribing the scope and
// manner of such use.
//
//////////////////////////////////////////////////////////////////////////////
// Include TS files
///<reference path="CommonTypes.ts"/>
var help;
(function (help) {
    (function (Api) {
        function login() {
            var jsonStr = exec(JSON.stringify({
                functionName: 'help_Api.login', functionParams: {}
            }));
            var jsonObj = JSON.parse(jsonStr);

            //retcode must be present
            if (jsonObj.retCode == undefined)
                throw TypeError("Internal error: retCode is not present.");
            if (jsonObj.retCode != 0 /* eOk */) {
                throw jsonObj;
            }
            if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                return jsonObj.retValue;
            } else {
                //OLD serialization logic:
                //hoist retValue if present
                if (jsonObj.retValue)
                    return JSON.parse(jsonObj.retValue);
                return jsonObj;
            }
        }
        Api.login = login;

        function logout() {
            var jsonStr = exec(JSON.stringify({
                functionName: 'help_Api.logout', functionParams: {}
            }));
            var jsonObj = JSON.parse(jsonStr);

            //retcode must be present
            if (jsonObj.retCode == undefined)
                throw TypeError("Internal error: retCode is not present.");
            if (jsonObj.retCode != 0 /* eOk */) {
                throw jsonObj;
            }
            if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                return jsonObj.retValue;
            } else {
                //OLD serialization logic:
                //hoist retValue if present
                if (jsonObj.retValue)
                    return JSON.parse(jsonObj.retValue);
                return jsonObj;
            }
        }
        Api.logout = logout;

        function isLoggedIn() {
            var jsonStr = exec(JSON.stringify({
                functionName: 'help_Api.isLoggedIn', functionParams: {}
            }));
            var jsonObj = JSON.parse(jsonStr);

            //retcode must be present
            if (jsonObj.retCode == undefined)
                throw TypeError("Internal error: retCode is not present.");
            if (jsonObj.retCode != 0 /* eOk */) {
                throw jsonObj;
            }
            if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                return jsonObj.retValue;
            } else {
                //OLD serialization logic:
                //hoist retValue if present
                if (jsonObj.retValue)
                    return JSON.parse(jsonObj.retValue);
                return jsonObj;
            }
        }
        Api.isLoggedIn = isLoggedIn;

        function getUserInfo() {
            var jsonStr = exec(JSON.stringify({
                functionName: 'help_Api.getUserInfo', functionParams: {}
            }));
            var jsonObj = JSON.parse(jsonStr);

            //retcode must be present
            if (jsonObj.retCode == undefined)
                throw TypeError("Internal error: retCode is not present.");
            if (jsonObj.retCode != 0 /* eOk */) {
                throw jsonObj;
            }
            if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                return jsonObj.retValue;
            } else {
                //OLD serialization logic:
                //hoist retValue if present
                if (jsonObj.retValue)
                    return JSON.parse(jsonObj.retValue);
                return jsonObj;
            }
        }
        Api.getUserInfo = getUserInfo;

        function getUserName() {
            var jsonStr = exec(JSON.stringify({
                functionName: 'help_Api.getUserName', functionParams: {}
            }));
            var jsonObj = JSON.parse(jsonStr);

            //retcode must be present
            if (jsonObj.retCode == undefined)
                throw TypeError("Internal error: retCode is not present.");
            if (jsonObj.retCode != 0 /* eOk */) {
                throw jsonObj;
            }
            if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                return jsonObj.retValue;
            } else {
                //OLD serialization logic:
                //hoist retValue if present
                if (jsonObj.retValue)
                    return JSON.parse(jsonObj.retValue);
                return jsonObj;
            }
        }
        Api.getUserName = getUserName;

        function getUserFirstName() {
            var jsonStr = exec(JSON.stringify({
                functionName: 'help_Api.getUserFirstName', functionParams: {}
            }));
            var jsonObj = JSON.parse(jsonStr);

            //retcode must be present
            if (jsonObj.retCode == undefined)
                throw TypeError("Internal error: retCode is not present.");
            if (jsonObj.retCode != 0 /* eOk */) {
                throw jsonObj;
            }
            if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                return jsonObj.retValue;
            } else {
                //OLD serialization logic:
                //hoist retValue if present
                if (jsonObj.retValue)
                    return JSON.parse(jsonObj.retValue);
                return jsonObj;
            }
        }
        Api.getUserFirstName = getUserFirstName;

        function getUserLastName() {
            var jsonStr = exec(JSON.stringify({
                functionName: 'help_Api.getUserLastName', functionParams: {}
            }));
            var jsonObj = JSON.parse(jsonStr);

            //retcode must be present
            if (jsonObj.retCode == undefined)
                throw TypeError("Internal error: retCode is not present.");
            if (jsonObj.retCode != 0 /* eOk */) {
                throw jsonObj;
            }
            if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                return jsonObj.retValue;
            } else {
                //OLD serialization logic:
                //hoist retValue if present
                if (jsonObj.retValue)
                    return JSON.parse(jsonObj.retValue);
                return jsonObj;
            }
        }
        Api.getUserLastName = getUserLastName;

        function getUserId() {
            var jsonStr = exec(JSON.stringify({
                functionName: 'help_Api.getUserId', functionParams: {}
            }));
            var jsonObj = JSON.parse(jsonStr);

            //retcode must be present
            if (jsonObj.retCode == undefined)
                throw TypeError("Internal error: retCode is not present.");
            if (jsonObj.retCode != 0 /* eOk */) {
                throw jsonObj;
            }
            if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                return jsonObj.retValue;
            } else {
                //OLD serialization logic:
                //hoist retValue if present
                if (jsonObj.retValue)
                    return JSON.parse(jsonObj.retValue);
                return jsonObj;
            }
        }
        Api.getUserId = getUserId;

        function getUserEmail() {
            var jsonStr = exec(JSON.stringify({
                functionName: 'help_Api.getUserEmail', functionParams: {}
            }));
            var jsonObj = JSON.parse(jsonStr);

            //retcode must be present
            if (jsonObj.retCode == undefined)
                throw TypeError("Internal error: retCode is not present.");
            if (jsonObj.retCode != 0 /* eOk */) {
                throw jsonObj;
            }
            if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                return jsonObj.retValue;
            } else {
                //OLD serialization logic:
                //hoist retValue if present
                if (jsonObj.retValue)
                    return JSON.parse(jsonObj.retValue);
                return jsonObj;
            }
        }
        Api.getUserEmail = getUserEmail;

        function HomeUrl(Online) {
            var jsonStr = exec(JSON.stringify({
                functionName: 'help_Api.HomeUrl', functionParams: { Online: Online }
            }));
            var jsonObj = JSON.parse(jsonStr);

            //retcode must be present
            if (jsonObj.retCode == undefined)
                throw TypeError("Internal error: retCode is not present.");
            if (jsonObj.retCode != 0 /* eOk */) {
                throw jsonObj;
            }
            if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                return jsonObj.retValue;
            } else {
                //OLD serialization logic:
                //hoist retValue if present
                if (jsonObj.retValue)
                    return JSON.parse(jsonObj.retValue);
                return jsonObj;
            }
        }
        Api.HomeUrl = HomeUrl;

        function OfflineInstalled() {
            var jsonStr = exec(JSON.stringify({
                functionName: 'help_Api.OfflineInstalled', functionParams: {}
            }));
            var jsonObj = JSON.parse(jsonStr);

            //retcode must be present
            if (jsonObj.retCode == undefined)
                throw TypeError("Internal error: retCode is not present.");
            if (jsonObj.retCode != 0 /* eOk */) {
                throw jsonObj;
            }
            if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                return jsonObj.retValue;
            } else {
                //OLD serialization logic:
                //hoist retValue if present
                if (jsonObj.retValue)
                    return JSON.parse(jsonObj.retValue);
                return jsonObj;
            }
        }
        Api.OfflineInstalled = OfflineInstalled;

        function HelpFindUI(ID, IsTopic) {
            var jsonStr = exec(JSON.stringify({
                functionName: 'help_Api.HelpFindUI', functionParams: { ID: ID, IsTopic: IsTopic }
            }));
            var jsonObj = JSON.parse(jsonStr);

            //retcode must be present
            if (jsonObj.retCode == undefined)
                throw TypeError("Internal error: retCode is not present.");
            if (jsonObj.retCode != 0 /* eOk */) {
                throw jsonObj;
            }
            if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                return jsonObj.retValue;
            } else {
                //OLD serialization logic:
                //hoist retValue if present
                if (jsonObj.retValue)
                    return JSON.parse(jsonObj.retValue);
                return jsonObj;
            }
        }
        Api.HelpFindUI = HelpFindUI;

        var userLoggedInEvent_handlers = null;

        //called by native code: fires event to callback supplied by the user
        function userLoggedInEventCallback(args) {
            var obj = JSON.parse(args);

            //unpack all event arguments
            var userInfo = obj.userInfo;

            for (var i = 0; i < userLoggedInEvent_handlers.length; ++i)
                userLoggedInEvent_handlers[i](userInfo);
        }

        //allows user to supply a callback
        function addHandler_userLoggedInEvent(userFunction) {
            var separator = (typeof (apiVersion) == 'function' && apiVersion() > 2) ? '.' : '_';
            if (userLoggedInEvent_handlers == null) {
                userLoggedInEvent_handlers = new Array();
                registerCallback('help_Api' + separator + 'userLoggedInEvent', userLoggedInEventCallback);
            }
            userLoggedInEvent_handlers.push(userFunction);
        }
        Api.addHandler_userLoggedInEvent = addHandler_userLoggedInEvent;

        var userLoggedOutEvent_handlers = null;

        //called by native code: fires event to callback supplied by the user
        function userLoggedOutEventCallback(args) {
            var obj = JSON.parse(args);

            for (var i = 0; i < userLoggedOutEvent_handlers.length; ++i)
                userLoggedOutEvent_handlers[i]();
        }

        //allows user to supply a callback
        function addHandler_userLoggedOutEvent(userFunction) {
            var separator = (typeof (apiVersion) == 'function' && apiVersion() > 2) ? '.' : '_';
            if (userLoggedOutEvent_handlers == null) {
                userLoggedOutEvent_handlers = new Array();
                registerCallback('help_Api' + separator + 'userLoggedOutEvent', userLoggedOutEventCallback);
            }
            userLoggedOutEvent_handlers.push(userFunction);
        }
        Api.addHandler_userLoggedOutEvent = addHandler_userLoggedOutEvent;
    })(help.Api || (help.Api = {}));
    var Api = help.Api;
})(help || (help = {}));
//---end of generated typescript---
//////////////////////////////////////////////////////////////////////////////
//  Copyright 2015 by Autodesk, Inc.  All rights reserved.
//
// This computer source code and related instructions and comments
// are the unpublished confidential and proprietary information of
// Autodesk, Inc. and are protected under applicable copyright and
// trade secret law.  They may not be disclosed to, copied or used
// by any third party without the prior written consent of Autodesk, Inc.
//////////////////////////////////////////////////////////////////////////////
var AcHelp = (function () {
    return {
        /**
        * register A360 login callback function for C++ caller. When A360 is logged in from any component through SSO,
        * registerred function func will be called.
        * func is JS function with one parameter that is the following json string.
        * {
        *      "isLoggedIn": true     //If login success return true. Otherwise, return false.
        *      "userId": "ID001"      //If has user ID return ID as string. Otherwise, return null.
        *      "userName": "name"     //If has user name return name as string. Otherwise, return null.
        *      "userFirstName": "firstname"     //If has user first name return first name as string. Otherwise, return null.
        *      "userLastName": "lastname"     //If has user last name return last name as string. Otherwise, return null.
        *      "userEmail": "mail"    //If has user email return email as string. Otherwise, return null.
        * }
        * Note:
        * 1. please call this function to register callback once document is ready.
        * 2. This callback function "func" also will called when user logged in from Help page.
        */
        registerLoginCallback: function (func) {
            if (typeof registerCallback === 'undefined') {
                // registerCallback undefined. The HTML is not opened inside AutoCAD
                return;
            }
            registerCallback('AcHelp.UserLoggedIn', func);
        },
        /**
        * register A360 logout callback function for C++ caller. When A360 is logged in from any component through SSO,
        * registerred function func will be called.
        *  func is JS function with one parameter that is the following json string.
        * {
        *      "isLoggedIn": false     //If logout success return false. Otherwise, return true.
        * }
        *Note:
        * 1. please call this function to register callback once document is ready.
        * 2. This callback function "func" also will called when user logged in from Help page.
        */
        registerLogoutCallback: function (func) {
            if (typeof registerCallback === 'undefined') {
                // registerCallback undefined. The HTML is not opened inside AutoCAD
                return;
            }
            registerCallback('AcHelp.UserLoggedOut', func);
        }
    };
})();
