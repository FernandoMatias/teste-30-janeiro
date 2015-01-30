Ext.define('Touch2Demo.store.Servico_s', { 
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.LocalStorage',
	'Ext.data.Store'
    ],
    config: {
	//model: 'Touch2Demo.model.Pneu_m',
	proxy: {
	    type: 'localstorage',
	    id: 'banco_servico'
	},
	autoLoad: true,
	autoSync: true,
	    fields: [
	    {name: 'codServico'},
	    {name: 'servicoTipo'},
	    {name: 'pneuModelo'},
	    {name: 'servicoCategoria'},
	    {name: 'servicoSubgrupo'},
	    {name: 'servicoGrupo'},
	    {name: 'pneuMedida'},
	    {name: 'todos'}
	]
    }
});
