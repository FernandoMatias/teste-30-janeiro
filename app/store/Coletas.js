Ext.define('Touch2Demo.store.Coletas', {
    extend: 'Ext.data.Store',
    config: {
	model: 'Touch2Demo.model.Coleta',
	proxy: {
	    type: 'localstorage',
	    id: 'banco_coleta'
	},
	autoLoad: true,
	autoSync: true,
	fields: [
	    {name: 'codCliente'}, 
	    {name: 'codPneu'}, 
	    {name: 'idPneu'},
	    {name: 'nomeCliente'}, 
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