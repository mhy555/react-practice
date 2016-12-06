import {$} from 'backbone'
import {indexView} from '../mods/index.js';
import React from 'react';
import reactModTest from '../react/test.jsx'

var AppRouter = Backbone.Router.extend({
  routes : {
    '' : 'main',
    'test' : 'renderTest',
    'topic/:id' : 'renderDetail',
    '*error' : 'renderError'
  },
  main : function() {
    console.log('应用入口方法');
  },
  renderTest : function() {
    console.log('渲染列表方法');
    let view = new indexView({el: $("#test-container")});
    view.render()
  },
  renderDetail : function(id) {
    console.log('渲染详情方法, id为: ' + id);
  },
  renderError : function(error) {
    console.log('URL错误, 错误信息: ' + error);
  }
});

var router = new AppRouter();
Backbone.history.start();
