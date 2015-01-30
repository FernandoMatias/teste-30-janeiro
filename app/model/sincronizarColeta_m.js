Ext.define('Touch2Demo.model.sincronizarColeta_m', {
    extend: 'Ext.data.Model',
    config: {
	fields: [
	    {
		name: 'codCliente',
		type: 'string'
	    },
	    {
		name: 'codPneu',
		type: 'string'
	    },
	    {
		name: 'data_entrega',
		type: 'string'
	    },
	    {
		name: 'observacao',
		type: 'string'
	    },
	    {
		name: 'n_fogo',
		type: 'string'
	    },
	    {
		name: 'n_serie',
		type: 'string'
	    },
	    {
		name: 'codFunc',
		type: 'string'
	    },
	    {
		name: 'codServico',
		type: 'string'
	    }
	]
    }

});