Ext.define('Touch2Demo.view.MenuIniciar', {
    extend: 'Ext.dataview.List',
    alias: 'widget.menuIniciar',
    config: {
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		title: 'Menu Iniciar'
	    },
	    {
		xtype: 'container',
		height: 5
	    },
	    {
		xtype: 'button',
		text: 'Nova Coleta',
		height: 75,
		action: 'novaColeta'
	    },
	    {
		xtype: 'container',
		height: 5
	    }, {
		xtype: 'button',
		action: 'listaColetas',
		height: 75,
		text: 'Lista de Coletas'
	    },
	    {
		xtype: 'container',
		height: 5
	    },
	    {
		xtype: 'button',
		action: 'sincronizar',
		height: 75,
		text: 'Sincronizar'
	    },
	     {
		xtype: 'container',
		height: 5
	    },
//	    {
//		xtype: 'button',
//		action: 'contatosForm',
//		text: 'Novo Cliente'
//	    },
//	    {
//		xtype: 'container',
//		height: 5
//	    },
//	    {
//		xtype: 'button',
//		action: 'contatosList',
//		height: 75,
//		text: 'Lista de Clientes'
//	    },
//	    {
//		xtype: 'container',
//		height: 5
//	    },
	    {
		xtype: 'button',
		action: 'configurar',
		height: 75,
		text: 'Configurações'
	    },
	    {
		xtype: 'container',
		height: 5
	    },
	    {
		xtype: 'button',
		action: 'teste',
		height: 75,
		text: 'login'
	    },
	    {
		xtype: 'container',
		height: 5
	    },
	    {
		xtype: 'button',
		action: 'sair',
		height: 75,
		text: 'sair'
	    },
	    {
		xtype: 'container',
		height: 5
	    }
	]
    }
});