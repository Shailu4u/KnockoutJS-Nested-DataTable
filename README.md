# KnockoutJS Nested DataTable
**KnockoutJS Nested DataTable** is a KnockoutJS custom component which is easy to use, custom element, nesting tables and extensible. All default dataTable functionalities such as sorting, pagination, search etc are applicable in this component also.
### Current Version 0.1.0

## Getting started

* Link scripts:

```html
<link href="//cdn.datatables.net/1.10.5/css/jquery.dataTables.css" rel="stylesheet" />
<script type="text/javascript" data-main="require.config.js" src="bower_components/requirejs/require.js"></script>
```

* KnockoutJS Nested DataTable custom element: 

```html
<ko-nested-table params="
					data: tableData,
					outerTableConfig: outerDefaults,
					innerTableConfig: innerDefaults">
</ko-nested-table>
```
tableData, outerDefaults and innerDefaults are the properties on page view modal.

## Install

* 
```js
	Bower install ko-nested-datatable
```

## Params

| Key                       |  Values     |  Description                                       |
| --------------------------|:-----------:|----------------------------------------------------|
| data                      |  Object     | All row data supplied to custom element            |
| outerTableConfig		    |  Object	  | Outer DataTable Configuration					   |
| innerTableConfig          |  Object	  | Inner DataTable Configuration                      |

		
## Author
**Shailendra Kumar**

## Copyright
Copyright © 2015 [Shailendra Kumar](http://masterofweb.in).

## License 
KnockoutJS Nested DataTable is under MIT license - http://www.opensource.org/licenses/mit-license.php