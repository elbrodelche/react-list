var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({

    getInitialState: function (){
        return {
            title:'Stock de Productos',
            show: false,
            myProducts: [],
            endpointUrl: 'http://localhost:8000/v1/stock',
        }//return
    },//getInitialState

    componentDidMount: function() {
        this.serverRequest = $.get(this.state.endpointUrl, function(result) {
            var tempProducts = result;
            this.setState({
                myProducts: tempProducts
            }); //setState
        }.bind(this));
    }, //componentDidMount

    render: function (){
        var apiData = this.state.myProducts;
        apiData = apiData.map(function (item, index) {
            return (
                <tr>
                    <td>{this.state.myProducts[index].id}</td>
                    <td>{this.state.myProducts[index].producto}</td>
                    <td>{this.state.myProducts[index].descripcion}</td>
                    <td>{this.state.myProducts[index].cantidad}</td>
                </tr>
            )//return
        }.bind(this));//apiData.map
        return (
            <div>
                <h1>{this.state.title}</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Producto</th>
                        <th>Descripcion</th>
                        <th>Cantidad</th>
                    </tr>
                    </thead>
                    <tbody>
                    {apiData}
                    </tbody>
                </table>
            </div>
        );//return
    }//render
});// Main Interface

ReactDOM.render(
    <MainInterface />,
    document.getElementById('app')
);