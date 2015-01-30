Ext.define('Touch2Demo.model.Contato', {
    extend: 'Ext.data.Model',
    config: {
	fields: [
	    {name: 'cod_cli'},
	    {name: 'nome'},
	    {name: 'cpf'},
	    {name: 'telefone'},
	    {name: 'endereco'}
	]
    }

});