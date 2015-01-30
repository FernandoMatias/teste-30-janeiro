Ext.define('Touch2Demo.store.Contato', { 
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.LocalStorage',
	'Ext.data.Store'
    ],
    config: {
	//model: 'Touch2Demo.model.Contato',
	proxy: {
	    type: 'localstorage',
	    id: 'banco_contatos'
	},
	storeId: 'Contatos',
	autoLoad: true,
	autoSync: true,
	    fields: [
	  {name: 'cod_cli'},
	    {name: 'nome'},
	    {name: 'cpf'},
	    {name: 'telefone'},
	    {name: 'endereco'}
	]
    }
});
