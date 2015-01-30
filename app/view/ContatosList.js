Ext.define('Touch2Demo.view.ContatosList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.contatosList',
    requires: [
	'Ext.data.Store',
	'Ext.List',
	'Ext.field.Search',
	'Ext.Toolbar',
	'Touch2Demo.store.Contato'
    ],
    config: {
	store: 'Contatos',
	grouped: true,
	//styleHtmlContent: true,
	itemTpl: '{nomeCliente}',
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
			text: 'Novo Contatos',
			hidden: true
		    },
		    {
			xtype: 'button',
			action: 'menuIniciar',
			text: 'Menu Iniciar'
		    }
		]
	    },
	    {
		xtype: 'searchfield',
		name: 'searchfield',
		placeHolder: 'Search'
	    },
	    {
		xtype: 'spacer',
		height: 25
	    }
	]
    }
});