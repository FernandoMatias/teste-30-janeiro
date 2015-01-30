//var teste = Ext.create('Touch2Demo.store.Coletas');
//    arquivo1 = teste.data.get(1);
//    cod_cli = arquivo1.data.cliente; 
//    console.log(cod_cli);
//var store2 = Ext.create('Touch2Demo.store.Contato');
//    arquivo = store2.data.get(2);
//    
//	    console.log(arquivo);

Ext.define('Touch2Demo.view.ColetasList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.coletasList',
    config: {
	store: 'Coletas',
	itemTpl: 'Id: {id} Cliente: {nomeCliente}',
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