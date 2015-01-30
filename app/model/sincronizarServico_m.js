Ext.define('Touch2Demo.model.sincronizarServico_m', {
    extend: 'Ext.data.Model',
    config: {
	fields: [
	    {name: 'cod_servico'},
	    {name: 'servico_tipo'},
	    {name: 'pneu_modelo'},
	    {name: 'servico_categoria'},
	    {name: 'servico_subgrupo'},
	    {name: 'servico_grupo'},
	    {name: 'pneu_medida'}
	]
    }
});
