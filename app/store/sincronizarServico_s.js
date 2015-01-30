var store2 = Ext.create('Touch2Demo.store.IpSincronizar_s');
	 arquivo = store2.data.get(1);
	 if (arquivo == null){
	 link = 'app/php/listaServico.php';    
	 }else{
	    ip =arquivo.data.ip;	
	    link ='http://'+ip+'/php/listaServico.php';
	}

Ext.define('Touch2Demo.store.sincronizarServico_s', {
    extend: 'Ext.data.Store',
    config: {
	model: 'Touch2Demo.model.sincronizarServico_m',
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
		rootProperty: 'sincronizarServico_s'
	    },
	    writer: {
		type: 'json', //json ou xml
		root: 'sincronizarServico_s',
		writeAllFields: true,
		encode: true,
		allowSingle: true
	    }
	},
	autoLoad: true,
	autoSync: true	
    }
});