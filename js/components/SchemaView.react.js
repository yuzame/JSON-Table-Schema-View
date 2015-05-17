var React = require('react');
var SideMenu = require('./SideMenu.react');
var SearchForm = require('./SearchForm.react');
var Schemas = require('./Schemas.react');

var SchemaStore = require('../stores/SchemaStore');

var SchemaView = React.createClass({

    getInitialState: function() {
        return SchemaStore.getInitialState();
    },

    handleSearch: function(data) {
        this.setState({schema:data});
    },

    render: function() {
        return (
            <div id="layout">
                <SideMenu data={this.state.schema}/>
                <div id="main" className="content markdown-body">
                  <SearchForm data={this.state.schema} handleSearch={this.handleSearch}/>
                  <Schemas data={this.state.schema}/>
                </div>
            </div>
        );
    }

});

module.exports = SchemaView;
