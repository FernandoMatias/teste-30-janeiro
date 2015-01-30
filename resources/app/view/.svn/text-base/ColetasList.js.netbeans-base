Ext.define('Touch2Demo.view.ColetasList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.coletasList',
    config: {
	store: 'Coletas',
	itemTpl: 'Cliente: {cliente} - Data: {data_entrega}',
	onItemDisclosure: true,
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		//ui: 'light',
		title: 'Lista de Coletas'
	    },
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		items: [
		    {
			xtype: 'button',
			action: 'menuIniciar',
			text: 'Menu Iniciar'
		    },		    
		    {
			xtype: 'button',
			action: 'novaColeta',
			text: 'Nova Coleta'
		    }
		]
	    }
	]
    }
});