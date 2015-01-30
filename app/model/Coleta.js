Ext.define('Touch2Demo.model.Coleta', {
    extend: 'Ext.data.Model',
    requires: [
	'Ext.data.proxy.LocalStorage'
    ],
    config: {
	fields: [
	    
	    {name: 'codCliente'},
	    {name: 'nomeCliente'},
	    {name: 'codPneu'},
	    {name: 'idPneu'},
	    {name: 'data_entrega'},
	    {name: 'observacao'},
	    {name: 'n_fogo'},
	    {name: 'n_serie'},
	    {name: 'servico'},
	    {name: 'codFunc'},
	    {name: 'codServico'}
	]
    }

});