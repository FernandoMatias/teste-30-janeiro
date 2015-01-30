Ext.define('Touch2Demo.view.ContatosList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.contatosList',
    config: {
	store: 'Contatos',
	itemTpl: 'nome:{nome}     \n\
	          CPF/CNPJ:{cpf} ',
	onItemDisclosure: true,
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		//ui: 'light',
		title: 'Lista de Contatos'
	    },
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		items: [
		    {
			xtype: 'button',
			action: 'contatosForm',
			text: 'Novo Contatos'
		    },
		    {
			xtype: 'button',
			action: 'menuIniciar',
			text: 'Menu Iniciar'
		    }
		]
	    }
	]
    }
});