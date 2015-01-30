Ext.define('Touch2Demo.view.sincronizacaoInicial', {
    extend: 'Ext.form.Panel',
    alias: 'widget.sincronizacaoInicial',
    config: {
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		title: 'Sincronização inicial'
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
	    {
		xtype: 'button',
		action: 'configurarInicial',
		height: 75,
		text: 'Configurar Sincronização'
	    }
	]
    }
});