Ext.define('Touch2Demo.model.Contato', {
    extend: 'Ext.data.Model',
    config: {
	fields: [
	    {name: 'codCliente'},
	    {name: 'nomeCliente'},
	    {name: 'cpf'},
	    {name: 'telefone'},
	    {name: 'endereco'},
	    {name: 'login'},
	    {name: 'senha'}
	]
    }

});