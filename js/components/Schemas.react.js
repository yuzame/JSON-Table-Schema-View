var React = require('react');

var Schemas = React.createClass({
    render: function() {
        var data = this.props.data;
        var schema = data.map(function(d) {
            return <Schema key={d.title+"schema"} data={d} />;
        });
        return (
            <div>{schema}</div>
        );
    }

});

var Schema = React.createClass({
    render: function() {
        var d = this.props.data;
        var headerElement = Object.keys(d.fields[0]);
        var pkExist = d.primaryKey !== void 0 ? true:false;
        var fkExist = d.foreignKey !== void 0 ? true:false;
        if (pkExist) {
            headerElement.push("PK");
        }
        if (fkExist) {
            headerElement.push("FK");
        }
        var header = headerElement.map(function(k) {
                return(<th key={k}>{k}</th>);
        });
        var fields = d.fields.map(function(col, i) {
            var pkflag = false;
            var td = headerElement.map(function(k) {
                var v = col[k];
                if (pkExist && k === "name" && d.primaryKey.indexOf(v) > -1) {
                    pkflag = true;
                }
                if (pkflag && k === "PK") {
                    v = "x";
                }
                return (
                    <td key={k} className="markdown-body">{v}</td>
                );
            });
            return ( 
                <tr key={i}>{td}</tr>
            );
        });
        return (
            <div>
              <h2 id={d.title}>{d.title}</h2>
              <h3>{d.alias}</h3>
              <table>
                <tr>{header}</tr>
                {fields}
              </table>
            </div>
        );
    }
});

module.exports = Schemas;
