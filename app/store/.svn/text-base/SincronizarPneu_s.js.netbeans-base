var store2 = Ext.create('Touch2Demo.store.IpSincronizar_s');
	 arquivo = store2.data.get(1);
	 if (arquivo == null){
	 link = 'app/php/listaPneu.php';    
	 }else{
	    ip =arquivo.data.ip;	
	    link =/*'http://'*/+ip+'/php/listaPneu.php';
	}

Ext.define('Touch2Demo.store.SincronizarPneu_s', {
    extend: 'Ext.data.Store',
    config: {
	model: 'Touch2Demo.model.SincronizarPneu_m',
	proxy: {
	    type: 'ajax',
	    //url: 'php/json/listaContatos.php',
	    api: {
		//read : 'app/php/listaPneu.php',
		create: 'app/php/criaPneu.php', //CRUD
		read: link,
		update: 'php/atualizaContato.php',
		destroy: 'app/php/json/deletaContato.php'
	    },
	    reader: {
		type: 'json', //json ou xml
		rootProperty: 'pneus'
	    },
	    writer: {
		type: 'json', //json ou xml
		root: 'pneus',
		writeAllFields: true,
		encode: true,
		allowSingle: true
	    }
	},
	autoLoad: true,
	autoSync: true	
    }
});