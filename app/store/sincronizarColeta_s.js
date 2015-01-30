var store2 = Ext.create('Touch2Demo.store.IpSincronizar_s');
	 arquivo = store2.data.get(1);
	 if (arquivo == null){
	 link = 'app/php/criarColeta.php';    
	 }else{
	    ip =arquivo.data.ip;	
	    link ='http://'+ip+'/php/criarColeta.php';
	}

Ext.define('Touch2Demo.store.sincronizarColeta_s', {
    extend: 'Ext.data.Store',
    config: {
	model: 'Touch2Demo.model.sincronizarColeta_m',
	proxy: {
	    type: 'ajax',
	    //url: 'php/json/listaContatos.php',
	    api: {
		//create: 'app/php/criarColeta.php', //CRUD
		create: link,
		read : 'app/php/listaContatos.php',
		//read: link,
		update: 'app/php/json/atualizaContato.php',
		destroy: 'php/json/deletaContato.php'
	    },
	    reader: {
		type: 'json', //json ou xml
		rootProperty: 'sincronizarColeta'
	    },
	    writer: {
		type: 'json', //json ou xml
		root: 'sincronizarColeta',
		writeAllFields: true,
		encode: true,
		allowSingle: true
	    }
	},
	autoLoad: true,
	autoSync: true	
    }
});
	