/* Require JS Config and index.html page view modal*/

(function(){
   'use strict';

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
        var $ = require('jquery'),
            ko = require('knockout'),
            text = require('text'),
            ndt = require('nesteddatatableKO'),
            data = require('data');

        var outerConfig = {
            "sPaginationType": "full_numbers",
            "bRetrieve": true,
            "bDestroy": true,
            "aaSorting": [[1, "asc"]]
        };
        var innerConfig = {
            "aaSorting": [[2, "asc"]]
        };

        var pageviewmodel = function(){
            var self = this;
            self.tableData = data;
            self.outerDefaults = outerConfig;
            self.innerDefaults = innerConfig;
        };

        ko.applyBindings(new pageviewmodel());
    });
})();
