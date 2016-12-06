// vim: tabstop=2 shiftwidth=2 expandtab

import _ from 'underscore'
import Backbone from 'backbone'
import reactModTest from '../react/test.jsx'
import React from 'react'
import ReactDom from 'react-dom'

var indexModel, indexView;

(function () {
  'use strict'
  var undef;

  indexModel = Backbone.Model.extend({
    DEFAULT_ACT: 'index',
    defaults: {
      winHeight: 0,
      scene: -1,
      result: '',
      code: null
    },
    reactLinkAttrs: [
      'scene',
      'winHeight'
    ],
  })

  indexView = Backbone.View.extend({
    initialize: function() {
      console.log('initialize');
      this.render()
    },
    render: function() {
      var template = new reactModTest();

      ReactDom.render(template.render(),
        this.$el.get(0)
      );
      return this;
    }
  })

}())

export { indexModel, indexView }
