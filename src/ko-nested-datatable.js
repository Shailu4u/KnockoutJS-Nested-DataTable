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

    define(["jquery","knockout","datatables"],function($, ko){

      var outerDefaults = {
            "aoColumnDefs": [
              { "bSortable": false, "aTargets": [0] }
            ]
          },
          innerDefaults = {
            "aoColumnDefs": [
              { "bSortable": false, "aTargets": [0] }
            ],
            "bRetrieve": true,
            "bDestroy": true,
            "bPaginate": false,
            "bFilter": false,
            "bInfo": false
          };
      var uuid = 0;
      var innerTemplate = function () {
        return '<div class="innerDiv"><ko-nested-datatable params="data: innerData, outerTableConfig: innerDefaults""></ko-nested-table></div>';
      }

      var nestedComponent = {
          viewModel: function(params){
            var self = this;
            self.data = params.data.level || [];
            self.uuid = 'dataTable'+(++uuid);
            outerDefaults = $.extend(outerDefaults, params.outerTableConfig || {});
            innerDefaults = $.extend(innerDefaults, params.innerTableConfig || {});
            self.tableConfig = outerDefaults;
          },
          template: { require: 'text!src/nestedtable.tmpl.html' }
      };

      ko.components.register("ko-nested-datatable", nestedComponent);

      ko.bindingHandlers.dataTableInit = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
          var config = ko.unwrap(valueAccessor());
          try{
            window.setTimeout(function(){
              $('.dataTable').dataTable(config);
            });
          }
          catch (err) {
            console.log("Error in dataTable configuration: "+err);
          }
        }
      };

      $("ko-nested-datatable").on("click", ".accordion", function () {
        var context = ko.contextFor(this);
        var innerData = context.$parent;
        var innerViewModel = function() {
          var self = this;
          self.innerData = innerData;
          self.innerDefaults = innerDefaults || outerDefaults;
          //self.innerDefaults1 = innerConfig1;
        };
        var table = $(this).parents(".dataTable");
        var nTr = $(this).parents('tr:eq(0)')[0];

        if (table.dataTable().fnIsOpen(nTr)) {
          $(this).html("+");
          table.dataTable().fnClose(nTr);
        }
        else {
          $(this).html("-");
          table.dataTable().fnOpen(nTr, innerTemplate,"innerTable");
          ko.applyBindings(new innerViewModel(), $(this).parents('tr:eq(0)').next("tr")[0]);
        }
      });

    });
})();