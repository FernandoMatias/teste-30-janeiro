Ext.define('Touch2Demo.store.usuarioLogado_s', {
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.LocalStorage',
	'Ext.data.Store'
    ],
    config: {
	//model: 'Touch2Demo.model.Contato',
	proxy: {
	    type: 'localstorage',
	    id: 'banco_usuarioLogado'
	},
	storeId: 'usuarioLogado_s',
	autoLoad: true,
	autoSync: true,
	fields: [
	    {name: 'codFunc'}
	]
    }
});