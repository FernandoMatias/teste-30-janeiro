Ext.define('Touch2Demo.model.Coleta',{
	extend: 'Ext.data.Model',
	requires: [
		'Ext.data.proxy.LocalStorage'
	],  
	config: {

		fields: [
			{
				name: 'cliente'
			},
			{
				name: 'data_entrega'
			},
			{
				name: 'observacao'
			},
			{
				name: 'pneu'
			},
			{
				name: 'n_fogo'
			},
			{
				name: 'n_serie'
			},
			{
				name: 'servico'
			}
		]
	}

});