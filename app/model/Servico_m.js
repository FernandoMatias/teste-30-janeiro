Ext.define('Touch2Demo.model.Servico_m', {
    extend: 'Ext.data.Model',
    config: {
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