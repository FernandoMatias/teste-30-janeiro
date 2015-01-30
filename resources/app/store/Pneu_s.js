Ext.define('Touch2Demo.store.Pneu_s', { 
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.LocalStorage',
	'Ext.data.Store'
    ],
    config: {
	//model: 'Touch2Demo.model.Pneu_m',
	proxy: {
	    type: 'localstorage',
	    id: 'banco_pneu'
	},
	autoLoad: true,
	autoSync: true,
	    fields: [
	    {name: 'id'},
	    {name: 'cod_pneu'},
	    {name: 'modelo'},	
	    {name: 'medida'},
	    {name: 'marca'}
	]
    }
});
