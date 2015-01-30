Ext.define('Touch2Demo.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
	routes: {
	    '': 'showMenuIniciar',
	    'index.html': 'showColetasList'
	},
	refs: {
	    coletasForm: {
		xtype: 'coletasform',
		selector: 'coletasform',
		autoCreate: true
	    },
	    coletasList: {
		xtype: 'coletasList',
		selector: 'coletasList',
		autoCreate: true
	    },
	    menuIniciar: {
		xtype: 'menuIniciar',
		selector: 'menuIniciar',
		autoCreate: true
	    },
	    sincronizar: {
		xtype: 'Sincronizar',
		selector: 'Sincronizar',
		autoCreate: true
	    },
	    sincronizarForm: {
		xtype: 'SincronizarForm',
		selector: 'SincronizarForm',
		autoCreate: true
	    },
	    Configuracoes: {
		xtype: 'configuracoes',
		selector: 'configuracoes',
		autoCreate: true
	    },
	    contatosList: {
		xtype: 'contatosList',
		selector: 'contatosList',
		autoCreate: true
	    },
	    contatosForm: {
		xtype: 'contatosForm',
		selector: 'contatosForm',
		autoCreate: true
	    },
	    salvarColetaBtn: 'button[action=salvarColeta]',
	    salvarCampoOcultoBtn: 'button[action=salvarColeta]',
	    salvarContatoBtn: 'button[action=salvarContato]',
	    salvarIpBtn: 'button[action=salvarIP]',
	    deletarColetaBtn: 'button[action=deletarColeta]',
	    deletarContatoBtn: 'button[action=deletarContato]',
	    sincronizarBtn: 'button[action=sincronizar]',
	    sincronizarPneuBtn: 'button[action=sincronizar]',
	    apagarSincronizarClientesBtn: 'button[action=sincronizar]',
	    apagarSincronizarPneuBtn: 'button[action=sincronizar]',
	    ToolbarFormColeta: '#toolbarFormColeta',
	    ToolbarFormContato: '#toolbarFormContato'



	},
	control: {
	    'button[action=voltarColetasList]': {
		tap: 'showColetasList'
	    },
	    'button[action=menuIniciar]': {
		tap: 'showMenuIniciar'
	    },
	    'button[action=novaColeta]': {
		tap: 'showColetasForm'
	    },
	    'button[action=listaColetas]': {
		tap: 'showColetasList'
	    },
	    'button[action=contatosList]': {
		tap: 'showContatoList'
	    },
	    'button[action=contatosForm]': {
		tap: 'showContatosForm'
	    },
	    'button[action=configurar]': {
		tap: 'showConfiguracoes'
	    },
	    coletasList: {
		itemtap: 'showColetasForm'
	    },
	    contatosList: {
		itemtap: 'showContatosForm'
	    },
	    salvarColetaBtn: {
		tap: 'salvarColeta'
	    },
	    salvarCampoOcultoBtn: {
		tap: 'salvarCampoOculto'
	    },
	    salvarContatoBtn: {
		tap: 'salvarContato'
	    },
	    salvarIpBtn: {
		tap: 'salvarIP'
	    },
	    deletarColetaBtn: {
		tap: 'deletarColeta'
	    },
	    deletarContatoBtn: {
		tap: 'deletarContato'
	    },
	    sincronizarBtn: {
		tap: 'sincronizarContatos'
	    },
	    sincronizarPneuBtn: {
		tap: 'sincronizarPneu'
	    },
	    apagarSincronizarClientesBtn: {
		tap: 'apagarSincronizarClientes'
	    },
	    apagarSincronizarPneuBtn: {
		tap: 'apagarSincronizarPneu'
	    }
	}
    },
    showConfiguracoes: function () {
	Ext.Viewport.setActiveItem(this.getConfiguracoes());
    },
    showMenuIniciar: function () {
	Ext.Viewport.setActiveItem(this.getMenuIniciar());
    },
    showSincronizarForm: function () {
	Ext.Viewport.setActiveItem(this.getSincronizarForm());

    },
    showColetasList: function () {
	Ext.Viewport.setActiveItem(this.getColetasList());
    },
    showContatoList: function () {
	Ext.Viewport.setActiveItem(this.getContatosList());
    },
    showSincronizar: function () {

	Ext.Viewport.setActiveItem(this.getSincronizar());
    },
    showColetasForm: function (view, index, target, record, evt, opts) {

	if (record && record.data) {
	    this.getColetasForm().setRecord(record);
	    this.getToolbarFormColeta().setTitle(record.get('nome'));
	    this.getDeletarColetaBtn().show();
	} else {
	    this.getColetasForm().reset();
	    this.getColetasForm().setRecord(null);
	    this.getToolbarFormColeta().setTitle('Criando novo contato');
	    this.getDeletarColetaBtn().hide();
	}
	Ext.Viewport.setActiveItem(this.getColetasForm());
    },
    showContatosForm: function (view, index, target, record, evt, opts) {
	if (record && record.data) {
	    this.getContatosForm().setRecord(record);
	    this.getToolbarFormContato().setTitle(record.get('nome'));
	    this.getDeletarContatoBtn().show();
	} else {
	    this.getContatosForm().reset();
	    this.getContatosForm().setRecord(null);
	    this.getToolbarFormContato().setTitle('Criando novo contato');
	    this.getDeletarContatoBtn().hide();
	}
	Ext.Viewport.setActiveItem(this.getContatosForm());
    },
    apagarSincronizarClientes: function () {
	var store = Ext.getStore('Contatos');
	store.load();
	var j = 0;
	store.each(function () {
	    var record = store.data.getAt(j);
	    store.remove(record);
	});
	j++;
    },
    sincronizarContatos: function () {
	var total = 0;
	Ext.onReady(function () {
	    var store = Ext.create('Touch2Demo.store.Sincronizar_S');
	    var i = 0;
	    store.on('load', function (s) {
		s.each(function () {
		    arquivo = s.data.get(i);
		    cod_cli = arquivo.data.cod_cli;
		    nome = arquivo.data.nome;
		    cpf = arquivo.data.cpf;
		    telefone = arquivo.data.telefone;
		    endereco = arquivo.data.endereco;

		    var contato = Ext.create('Touch2Demo.model.Contato', {
			cod_cli: cod_cli,
			nome: nome,
			cpf: cpf,
			telefone: telefone,
			endereco: endereco
		    });
		    var storeSalva = Ext.create('Touch2Demo.store.Contato');
		    storeSalva.add(contato);
		    storeSalva.sync();
		    i++;
		    total++;
		});
	    });
	});
	Ext.Msg.confirm(
		'Sincronização',
		'Deseja sincronizar os contatos?',
		function (btn) {
		    if (btn == 'yes') {
			location.reload();
		    }
		},
		this
		);
    },
    apagarSincronizarPneu: function () {
	var store = Ext.getStore('Pneu_s');
	store.load();
	var j = 0;
	store.each(function () {
	    var record = store.data.getAt(j);
	    store.remove(record);
	});
	j++;


    },
    sincronizarPneu: function () {
	var total = 0;
	Ext.onReady(function () {
	    var store2 = Ext.create('Touch2Demo.store.SincronizarPneu_s');
	    var i = 0;
	    store2.on('load', function (s2) {
		s2.each(function () {
		    arquivo = s2.data.get(i);
		    cod_pneu = arquivo.data.cod_pneu;
		    modelo = arquivo.data.modelo;
		    medida = arquivo.data.medida;
		    marca = arquivo.data.marca;
		    var pneu = Ext.create('Touch2Demo.model.Pneu_m', {
			cod_pneu: cod_pneu,
			modelo: modelo,
			medida: medida,
			marca: marca
		    });
		    var salvaPneu = Ext.create('Touch2Demo.store.Pneu_s');
		    salvaPneu.add(pneu);
		    salvaPneu.sync();
		    i++;
		    total++;
		});
	    });
	});
    },
    salvarColeta: function () {
	var form = this.getColetasForm(),
		coleta = Ext.create('Touch2Demo.model.Coleta', form.getValues()),
		store = Ext.getStore('Coletas');
	if (form.getRecord() !== null) {
	    var record = store.findRecord('id', form.getRecord().getId());
	    record.set(form.getValues());
	    Ext.Msg.alert('Alterando coleta', 'Coleta alterada com sucesso.', Ext.emptyFn);
	} else {
	    store.add(coleta);
	    Ext.Msg.alert('Criando coleta', 'Coleta criada com sucesso.',
		    function (btn) {
			if (btn == 'ok') {
			    location.reload();
			}
		    },
		    this
		    );
	}
	this.showColetasList();
    },
    salvarCampoOculto: function () {
	var store1 = Ext.getStore('Coletas');
	var record1 = store1.last();
	id_nome = record1.data.cliente;
	nome_cliente = record1.data.nomeCliente;
	var store = Ext.getStore('Contatos');
	arquivo = store.data.get(id_nome);
	nome = arquivo.data.nome;
	cod_cliente = arquivo.data.cod_cli;

	if (nome_cliente == null) {
	    var store1 = Ext.getStore('Coletas');
	    var record1 = store1.last();
	    record1.set('nomeCliente', nome);
	    record1.set('codCliente', cod_cliente);
	    store1.sync();
	} else {
	    var form = this.getColetasForm();
	    var store12 = Ext.getStore('Coletas');
	    var record12 = store12.findRecord('id', form.getRecord().getId());
	    record12.set('nomeCliente', nome);
	    record12.set('codCliente', cod_cliente);
	    store12.sync();
	    console.log(cod_cliente);
	}
    },
    salvarContato: function () {
	var form = this.getContatosForm(),
		coleta = Ext.create('Touch2Demo.model.Contato', form.getValues()),
		store = Ext.getStore('Contatos');
	if (form.getRecord() !== null) {
	    var record = store.findRecord('id', form.getRecord().getId());
	    record.set(form.getValues());
	    Ext.Msg.alert('Alterando Contato', 'Contato alterada com sucesso.', Ext.emptyFn);
	} else {
	    store.add(coleta);
	    Ext.Msg.alert('Criando Contato', 'Contato criada com sucesso.', Ext.emptyFn);
	}

	this.showContatoList();
    },
    salvarIP: function () {
	store2 = Ext.create('Touch2Demo.store.IpSincronizar_s');
	var record = store2.getById(1);
	if (record == null) {
	    var form = this.getConfiguracoes(),
		    ip = Ext.create('Touch2Demo.model.IpSincronizar_m', form.getValues()),
		    store2 = Ext.create('Touch2Demo.store.IpSincronizar_s');
	    store2.add(ip);
	} else {
	    var form = this.getConfiguracoes(),
		    store2 = Ext.create('Touch2Demo.store.IpSincronizar_s');
	    contatoAtualizado = store2.data.get(1);
	    contatoAtualizado.set(form.getValues());
	    store2.sync();
	}
	location.reload();
    },
    deletarColeta: function () {
	Ext.Msg.confirm(
		'Deletar coleta',
		'Tem certeza que deseja deletar esta coleta?',
		function (btn) {
		    if (btn == 'yes') {
			Ext.getStore('Coletas').remove(this.getColetasForm().getRecord());
			this.showColetasList();
		    }
		},
		this
		);
    },
    deletarContato: function () {
	Ext.Msg.confirm(
		'Deletar contato',
		'Tem certeza que deseja deletar este contato?',
		function (btn) {
		    if (btn == 'yes') {
			Ext.getStore('Contatos').remove(this.getContatosForm().getRecord());
			this.showContatoList();
		    }
		},
		this
		);
    }
});



    