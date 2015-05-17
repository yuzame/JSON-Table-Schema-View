var React = require("react");

var SideMenu = React.createClass({
    render: function() {
        var menu = this.props.data.map(function(item) {
            return(<Item key={item.title} title={item.title} />);
        });
        return (
            <div id="menu">
              <div className="pure-menu">
                <ul className="pure-menu-list">{menu}</ul>
              </div>
            </div>
        );
    }
});

var Item = React.createClass({
    render: function() {
        var title = this.props.title;
        return (
                <li className="pure-menu-item">
                  <a className="pure-menu-link" href={"#"+title}>{title}</a>
                </li>
        );
    }
});

module.exports = SideMenu;
