var React = require('react');

var SearchForm = React.createClass({
    getInitialState: function() {
        var data = this.props.data;
        var full = [];
        this.props.data.forEach(function (d, i) {
            full.push({idx: i, text: JSON.stringify(d)});
        });
        
        return {full:full, data:data};
    },

    handleChange: function(e) {
        var handleSearch = this.props.handleSearch;
        var data = this.state.data;
        var q = e.target.value;
        if (q === '') {
            handleSearch(data);
            return;
        }
        var r = new RegExp(q, 'i');
        var full = this.state.full;
        var ret = [];
        full.forEach(function (d) {
            var m = d.text.search(r);
            if (m > 0) {
                ret.push(data[d.idx]);
            }
        });
        handleSearch(ret);
    },

    render: function() {
        return (
            <form id='search-form'>
                <input
                  id='query'
                  type='text'
                  onChange={this.handleChange}
                />
            </form>
        );
    }
});

module.exports = SearchForm;
