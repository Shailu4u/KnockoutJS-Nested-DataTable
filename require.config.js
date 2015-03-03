/*
 * KnockoutJS Nested DataTable custom element
 * Version: 0.1
 *
 * Copyright 2015 Shailendra Kumar.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * Author: Shailendra Kumar
 */
(function(){
   'use strict';

    /* Require JS Config and index.html page view modal*/
    require.config({
         paths: {
            jquery: "bower_components/jquery/dist/jquery.min",
            knockout: "bower_components/knockout/dist/knockout",
            "datatables": "bower_components/datatables/media/js/jquery.dataTables.min",
            //Require JS dependencies
            text: "bower_components/requirejs-text/text",
            nesteddatatableKO: "src/ko-nested-datatable",
            data: "src/data"
        },
        shim: {
            'datatables': {
                deps: ['jquery'],
                exports: 'dataTable'
            }
        }
    });

    require(["jquery","knockout","datatables","text","nesteddatatableKO","data"]);

    define(function(require) {
        var ko = require('knockout'),
            ndt = require('nesteddatatableKO'),//load ko-nested-datatable.js file
            data = require('data');// get table data from data.js file
        //outer datatable configuration
        var outerConfig = {
            "sPaginationType": "full_numbers",
            "bRetrieve": true,
            "bDestroy": true,
            "aaSorting": [[1, "asc"]]
        };
        //inner datatable configuration
        var innerConfig = {
            "aaSorting": [[2, "asc"]]
        };

        var pageViewModel = function(){//supply data from page view model to ko-nested-datatable custom element
            var self = this;
            self.tableData = data;
            self.outerDefaults = outerConfig;
            self.innerDefaults = innerConfig;
        };

        ko.applyBindings(new pageViewModel()); //apply knockout bindings to page
    });
})();
