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
  /*Load all dependencies such as jquery, knockout and datatables*/
  define(["jquery","knockout","datatables"],function($, ko){

    /*Outer table and Inner Table default configuration*/
    var outerDefaults = {
        "aoColumnDefs": [
          { "bSortable": false, "aTargets": [0] }
        ],
        "aaSorting": [] //sorting is disabled on first column in outer table
      },
      innerDefaults = {
        "aoColumnDefs": [
          { "bSortable": false, "aTargets": [0] }
        ],
        "aaSorting": [],//sorting is disabled on first column in inner table
        "bRetrieve": true,
        "bDestroy": true,
        "bPaginate": false, // pagination is disabled by default
        "bFilter": false,   // filters are disabled as well
        "bInfo": false
      };

    var uuid = 0; //unique identifier ID to differentiate each table

    /*Inner Nested Table Template, we can reuse same custom element here
     but this time we give innerTable configuration to outerTableConfig parameter*/
    var innerTemplate = function () {
      return '<div class="innerDiv"><ko-nested-datatable params="data: innerData, outerTableConfig: innerDefaults""></ko-nested-table></div>';
    };

    /*Component ViewModel and external Template URL (will work only in case of AMD loaders)*/
    var nestedComponent = {
      viewModel: function(params){
        var self = this;
        self.data = params.data.level || [];
        self.uuid = 'dataTable'+(++uuid);//generate unique identifier for each table.
        outerDefaults = $.extend(outerDefaults, params.outerTableConfig || {});//extending outer table configuration with user data and outerDefaults
        innerDefaults = $.extend(innerDefaults, params.innerTableConfig || {});//extending inner table configuration with user data and innerDefaults
        self.tableConfig = outerDefaults;//extending outer table configuration with user data and defaults
      },
      template: { require: 'text!src/nestedtable.tmpl.html' }
    };
    /*Knockout Component Registration (available only in >3.2.0 version)*/
    ko.components.register("ko-nested-datatable", nestedComponent);

    /*Knockout custom binding handler to initialize dataTable for all tables*/
    ko.bindingHandlers.dataTableInit = {
      init: function(element, valueAccessor) {
        var config = ko.unwrap(valueAccessor());
        try{
          window.setTimeout(function(){//using setTimeout so that that dataTable will initialize only after all rows are displayed by then
            $(element).dataTable(config);
          });
        }
        catch (err) {/*Catching dataTable configuration errors*/
          console.log("Error in dataTable configuration: "+err);
        }
      }
    };

    /*Toggling between open and close nested table Event Handler*/
    $("ko-nested-datatable").on("click", ".accordion", function () {
      var context = ko.contextFor(this); //get present row context
      var innerData = context.$parent;
      var innerViewModel = function() {//Inner Table View Model
        var self = this;
        self.innerData = innerData;
        self.innerDefaults = innerDefaults || outerDefaults;
      };
      var table = $(this).parents(".dataTable");
      var nTr = $(this).parents('tr:eq(0)')[0];

      if (table.dataTable().fnIsOpen(nTr)) {
        $(this).html("+");
        table.dataTable().fnClose(nTr);//close nested table if it is opened before
      }
      else {
        $(this).html("-");
        table.dataTable().fnOpen(nTr, innerTemplate(),"innerTable");//open nested table
        ko.applyBindings(new innerViewModel(), $(this).parents('tr:eq(0)').next("tr")[0]);//applying bindings to dynamically added rows
      }
    });
  });
})();