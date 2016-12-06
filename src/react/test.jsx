import React from 'react'
import _ from 'underscore'
import {$} from 'backbone'

var exportModTest

(function() {
	'use strict'
	class TestComponents extends React.Component {
		render() {
			let props = this.props
			return (
				<div>this is a small component {props.test}</div>
			)
		}
	}

	exportModTest = class test extends React.Component {
		render() {
			// let props = this.props,
   //      act = props.act || 'index'
			return (
				<div className="container">
					<div>test</div>
					<TestComponents test="testProps"/>
				</div>
			)
		}
	}
}())

export default exportModTest