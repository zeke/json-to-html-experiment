var $ = jQuery = require('jquery')
var JSONView = require('jquery-jsonview')
var json = {"hey": "guy","anumber": 243,"anobject": {"whoa": "nuts","anarray": [1,2,"thr<h1>ee"], "more":"stuff"},"awesome": true,"bogus": false,"meaning": null, "japanese":"明日がある。", "link": "http://jsonview.com", "notLink": "http://jsonview.com is great"};

$(function() {
  $("#json").JSONView(json);
  $("#json-collapsed").JSONView(json, { collapsed: true });
});
