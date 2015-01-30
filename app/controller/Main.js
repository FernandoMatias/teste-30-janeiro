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
	    teste: {
		xtype: 'teste',
		selector: 'teste',
		autoCreate: true
	    },
	    verificacao: {
		xtype: 'verificacao',
		selector: 'verificacao',
		autoCreate: true
	    },
	    sair: {
		xtype: 'sair',
		selector: 'sair',
		autoCreate: true
	    },
	    salvarColetaBtn: 'button[action=salvarColeta]',
	    salvarColetaEdicaoBtn: 'button[action=salvarColetaEdicao]',
	    salvarCampoOcultoPneuEdicaoBtn: 'button[action=salvarColetaEdicao]',
	    salvarCampoOcultoServicoEdicaoBtn: 'button[action=salvarColetaEdicao]',
	    salvarContatoBtn: 'button[action=salvarContato]',
	    salvarIpBtn: 'button[action=salvarIP]',
	    loginBtn: 'button[action=login]',
	    deletarColetaBtn: 'button[action=deletarColeta]',
	    deletarContatoBtn: 'button[action=deletarContato]',
	    sincronizarBtn: 'button[action=sincronizar]',
	    sincronizarPneuBtn: 'button[action=sincronizar]',
	    sincronizarColetaBtn: 'button[action=sincronizar]',
	    sincronizarServicoBtn: 'button[action=sincronizar]',
	    apagarSincronizarClientesBtn: 'button[action=sincronizar]',
	    apagarSincronizarPneuBtn: 'button[action=sincronizar]',
	    apagarSincronizarServicoBtn: 'button[action=sincronizar]',
	    ToolbarFormColeta: '#toolbarFormColeta',
	    ToolbarFormContato: '#toolbarFormContato',
	    showConfiguracoesBtn: 'button[action=configurar]'
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
	    'button[action=teste]': {
		tap: 'teste'
	    },
	    'button[action=sair]': {
		tap: 'sair'
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
	    salvarColetaEdicaoBtn: {
		tap: 'salvarColetaEdicao'
	    },
	    salvarCampoOcultoPneuEdicaoBtn: {
		tap: 'salvarCampoOcultoPneu'
	    },
	    salvarCampoOcultoServicoEdicaoBtn: {
		tap: 'salvarCampoOcultoServico'
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
	    sincronizarColetaBtn: {
		tap: 'sincronizarColeta'
	    },
	    sincronizarServicoBtn: {
		tap: 'sincronizarServico'
	    },
	    apagarSincronizarClientesBtn: {
		tap: 'apagarSincronizarClientes'
	    },
	    apagarSincronizarPneuBtn: {
		tap: 'apagarSincronizarPneu'
	    },
	    apagarSincronizarServicoBtn: {
		tap: 'apagarSincronizarServico'
	    },
	    loginBtn: {
		tap: 'login'
	    },
	    showConfiguracoesBtn: {
		tap: 'showConfiguracoes'
	    },
	    'searchfield': {
		keyup: 'doSearch'
	    },
	    'selectfield[name=idPneu]': {
		change: 'onSelecaoPneuServico'
	    },
	    'searchfield[name=query]': {
		change: 'showContatosList2'
	    },
	}
    },
    showConfiguracoes: function () {
	Ext.Viewport.setActiveItem(this.getConfiguracoes());
    },
    teste: function () {
	Ext.Viewport.setActiveItem(this.getTeste());
    },
    showMenuIniciar: function () {
	Ext.Viewport.setActiveItem(this.getMenuIniciar());
    },
    showSincronizarForm: function () {
	Ext.Viewport.setActiveItem(this.getSincronizarForm());

    },
    showColetasList: function () {
	var store = Ext.getStore('usuarioLogado_s');
	var t = 0;
	store.each(function () {
	    arquivo = store.data.get(t);
	    t++;
	});
	if (t <= 0) {
	    Ext.Msg.alert('login', 'sem usuario logado', Ext.emptyFn);
	    this.teste();
	} else {
	    Ext.Viewport.setActiveItem(this.getColetasList());
	}
    },
    showContatoList: function () {
	var store = Ext.getStore('usuarioLogado_s');
	var t = 0;
	store.each(function () {
	    arquivo = store.data.get(t);
	    t++;
	});
	if (t <= 0) {
	    Ext.Msg.alert('login', 'sem usuario logado', Ext.emptyFn);
	    this.teste();
	} else {
	    Ext.Viewport.setActiveItem(this.getContatosList());
	}
    },
    showSincronizar: function () {
	Ext.Viewport.setActiveItem(this.getSincronizar());
    },
    showColetasForm: function (view, index, target, record, evt, opts) {


	var store = Ext.getStore('usuarioLogado_s');
	var t = 0;
	store.each(function () {
	    arquivo = store.data.get(t);
	    t++;
	});
	if (t <= 0) {
	    Ext.Msg.alert('login', 'sem usuario logado', Ext.emptyFn);
	    this.teste();
	} else {
	    if (record && record.data) {
		this.getColetasForm().setRecord(record);
		this.getToolbarFormColeta().setTitle(record.get('nome'));
		this.getDeletarColetaBtn().show();
		this.getSalvarColetaBtn().hide();
		this.getSalvarColetaEdicaoBtn().show();
		idEdicaoColeta = record.data.id;
	    } else {
		this.getColetasForm().reset();
		this.getColetasForm().setRecord(null);
		this.getToolbarFormColeta().setTitle('Criando nova Coleta');
		this.getDeletarColetaBtn().hide();
		this.getSalvarColetaBtn().show();
		this.getSalvarColetaEdicaoBtn().hide();
	    }
	    Ext.Viewport.setActiveItem(this.getColetasForm());
	}
    },
    showContatosForm: function (view, index, target, record, evt, opts) {
	r = this.getColetasForm().getRecord();
	if (r !== null) {
	    r.set('nomeCliente', record.get('nomeCliente'));
	    r.set('codCliente', record.get('codCliente'));
	    this.getColetasForm().setRecord(r);
	} else {
	    /*var d = this.getColetasForm().getRecord('nomeCliente');
	     d.set('nomeCliente', record.get('nomeCliente'));
	     this.getColetasForm().setRecord();*/

	    //console.log(r.set('nomeCliente'));
	    /*var docRecord = Ext.data.Record.create([
	     {
	     name: 'codCliente',
	     type: 'int'
	     },
	     {
	     name: 'nomeCliente',
	     type: 'string'
	     }
	     ]);*/

	    Ext.define('User', {
		extend: 'Ext.data.Model',
		fields: ['codCliente', 'nomeCliente']
	    });
	    var user = Ext.create('User', {codCliente: record.get('codCliente'), nomeCliente: record.get('nomeCliente')});
	    this.getColetasForm().setRecord(user);


	}


	//var rec = Ext.data.Record.create([{name: 'codCliente', type: 'int'},{name: 'nomeCliente',type: 'string'}]);
	//console.log(record.get('id'));
	//var r = new docRecord({codCliente: record.get('codCliente'), nomeCliente: record.get('nomeCliente')});

	/*r.add('nomeCliente', record.get('nomeCliente'));
	 r.add('codCliente', record.get('codCliente'));*/
	//user.defineProperty('id','0');

	//console.log('é nulo');
	/*if (record && record.data) {
	 
	 } else {
	 this.getContatosForm().setRecord();
	 this.getToolbarFormContato().setTitle('Criando novo contato');
	 this.getDeletarContatoBtn().hide();
	 }*/
	Ext.Viewport.setActiveItem(this.getColetasForm());
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
		    login = arquivo.data.login;
		    senha = arquivo.data.senha;

		    var contato = Ext.create('Touch2Demo.model.Contato', {
			codCliente: cod_cli,
			nomeCliente: nome,
			cpf: cpf,
			telefone: telefone,
			endereco: endereco,
			login: login,
			senha: senha

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
		    var arquivo = s2.data.get(i);
		    var cod_pneu = arquivo.data.cod_pneu;
		    var modelo = arquivo.data.modelo;
		    var medida = arquivo.data.medida;
		    var marca = arquivo.data.marca;
		    var todos = modelo + '  |  ' + medida + '  |  ' + marca;
		    var pneu = Ext.create('Touch2Demo.model.Pneu_m', {
			cod_pneu: cod_pneu,
			modelo: modelo,
			medida: medida,
			marca: marca,
			todos: todos
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
    apagarSincronizarServico: function () {
	var store = Ext.getStore('Servico_s');
	store.load();
	var j = 0;
	store.each(function () {
	    var record = store.data.getAt(j);
	    store.remove(record);
	});
	j++;
    },
    sincronizarServico: function () {
	Ext.onReady(function () {
	    var store = Ext.create('Touch2Demo.store.sincronizarServico_s');
	    var i = 0;
	    store.on('load', function (s) {
		s.each(function () {
		    var record = s.data.get(i);
		    var servico = Ext.create('Touch2Demo.model.Servico_m', {
			codServico: record.data.cod_servico,
			servicoTipo: record.data.servico_tipo,
			pneuModelo: record.data.pneu_modelo,
			servicoCategoria: record.data.servico_categoria,
			servicoSubgrupo: record.data.servico_subgrupo,
			servicoGrupo: record.data.servico_grupo,
			pneuMedida: record.data.pneu_medida
		    });
		    var salvaServico = Ext.create('Touch2Demo.store.Servico_s');
		    salvaServico.add(servico);
		    salvaServico.sync();
		    i++;
		});
	    });
	});
    },
    sincronizarColeta: function () {
	var store = Ext.getStore('Coletas');
	var a = 0;
	store.each(function () {
	    var record = store.data.get(a);
	    var codCliente = record.data.codCliente;
	    var codPneu = record.data.codPneu;
	    var data_entrega = record.data.data_entrega;
	    var observacao = record.data.observacao;
	    var n_fogo = record.data.n_fogo;
	    var n_serie = record.data.n_serie;
	    var codFunc = record.data.codFunc;
	    var codServico = record.data.codServico;


	    var coleta = Ext.create('Touch2Demo.model.sincronizarColeta_m', {
		codCliente: codCliente,
		codPneu: codPneu,
		data_entrega: data_entrega,
		observacao: observacao,
		n_fogo: n_fogo,
		n_serie: n_serie,
		codFunc: codFunc,
		codServico: codServico
	    });
	    var salvarColeta = Ext.create('Touch2Demo.store.sincronizarColeta_s');
	    salvarColeta.add(coleta);
	    a++;
	});
	var store2 = Ext.getStore('Coletas');
	store2.load();
	var j = 0;
	store2.each(function () {
	    var record1 = store2.data.getAt(j);
	    store.remove(record1);
	});
	j++;
//	salvarColeta.sync();
    },
    salvarColetaEdicao: function () {
	var form = this.getColetasForm(),
		coleta = Ext.create('Touch2Demo.model.Coleta', form.getValues()),
		store = Ext.getStore('Coletas');
	var record = store.findRecord('id', form.getRecord().getId());
	console.log(record);
	if (record.data.data_entrega == null || record.data.codCliente == null || record.data.codPneu == null || record.data.codPneu == null) {
	    Ext.Msg.alert('Aviso', 'Existem campos vazio');
	} else {
	    if (form.getRecord() !== null) {
		record.set(form.getValues());
		this.showColetasList();
		Ext.Msg.alert('Alterando coleta', 'Coleta alterada com sucesso.', Ext.emptyFn);
	    } else {
	    }
	}
    },
    salvarColeta: function () {
	var form = this.getColetasForm(),
	camposForm = Ext.create('Touch2Demo.model.Coleta', form.getValues());
	console.log(camposForm);
	if (camposForm.data.data_entrega == null || camposForm.data.nomeCliente == null || camposForm.data.idPneu == null || camposForm.data.servico == null) {
	    Ext.Msg.alert('Aviso', 'Existem campos vazio');
	} else {
	    var form = this.getColetasForm(),
		    coleta = Ext.create('Touch2Demo.model.Coleta', form.getValues()),
		    store = Ext.getStore('Coletas');
	    store.add(coleta);
	    this.salvarCampoOculto();
	    this.salvarCampoOcultoPneu();
	    this.salvarCampoOcultoServico();
	    Ext.Msg.alert('Criando coleta', 'Coleta criada com sucesso.',
		    function (btn) {
			if (btn == 'ok') {
			    location.reload();
			}
		    },
		    this
		    );
	    this.showColetasList();
	}
    },
    salvarCampoOculto: function () {
	var store10 = Ext.getStore('usuarioLogado_s');
	var record10 = store10.last();
	codFunc = record10.data.codFunc;
	var store11 = Ext.getStore('Coletas');
	var record11 = store11.last();
	codFunc2 = record11.data.codFunc;
	if (codFunc2 == null) {
	    var store1 = Ext.getStore('Coletas');
	    var record1 = store1.last();
	    record1.set('codFunc', codFunc);
	    store1.sync();
	} else {
	    var form = this.getColetasForm();
	    var store12 = Ext.getStore('Coletas');
	    var record12 = store12.findRecord('id', form.getRecord().getId());
	    record12.set('codFunc', codFunc);
	    store12.sync();
	}
    },
    salvarCampoOcultoPneu: function () {
	var store = Ext.getStore('Coletas');
	var record = store.last();
	id_pneu = record.data.idPneu;
	codPneu = record.data.codPneu;
	var store2 = Ext.getStore('Pneu_s');
	arquivo = store2.data.get(id_pneu);
	cod_pneu = arquivo.data.cod_pneu;
	if (codPneu == null) {
	    var store3 = Ext.getStore('Coletas');
	    var record3 = store3.last();
	    record3.set('codPneu', cod_pneu);
	    store3.sync();
	} else {
	    var form = this.getColetasForm();
	    var store4 = Ext.getStore('Coletas');
	    var record4 = store4.findRecord('id', form.getRecord().getId());
	    record4.set('codPneu', cod_pneu);
	    store4.sync();
	}
    },
    salvarCampoOcultoServico: function () {
	var store = Ext.getStore('Coletas');
	var record = store.last();
	idServico = record.data.servico;
	codServicoVazio = record.data.codServico;
	if (idServico !== null) {
	    var store2 = Ext.getStore('Servico_s');
	    arquivo = store2.data.get(idServico);
	    codServico = arquivo.data.codServico;
	    if (codServicoVazio == null) {
		var store3 = Ext.getStore('Coletas');
		var record3 = store3.last();
		record3.set('codServico', codServico);
		store3.sync();
	    } else {
		var form = this.getColetasForm();
		var store4 = Ext.getStore('Coletas');
		var record4 = store4.findRecord('id', form.getRecord().getId());
		record4.set('codServico', codServico);
		store4.sync();
	    }
	} else {


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
    },
    login: function () {
	var form = this.getTeste(),
		coleta = Ext.create('Touch2Demo.model.Contato', form.getValues()),
		login = coleta.data.login,
		senha = coleta.data.senha;

	var store55 = Ext.getStore('Contatos');
	var f = 0;
	store55.each(function () {
	    var arquivo3 = store55.data.get(f);
	    var loginSalvo = arquivo3.data.login;
	    //  if (login = loginSalvo) {

	    if (login == loginSalvo) {
		var senhaSalva = arquivo3.data.senha;
		codFunc = arquivo3.data.codCliente;
		if (senhaSalva == senha) {
		    var verStore = Ext.create('Touch2Demo.store.usuarioLogado_s');
		    var verRecord = verStore.getById(1);
		    if (verRecord == null) {
			var salvarCodFunc = Ext.create('Touch2Demo.model.usuarioLogado_m', {
			    codFunc: codFunc
			});
			var salvarCodFunci = Ext.create('Touch2Demo.store.usuarioLogado_s');
			salvarCodFunci.add(salvarCodFunc);
			Ext.Msg.alert('login', 'Logado com sucesso',
				function (btn) {
				    if (btn == 'ok') {
				    }
				},
				this
				);
		    } else {
			var store44 = Ext.create('Touch2Demo.store.usuarioLogado_s');
			var codUsuario = store44.data.get(1);
			codUsuario.set('codFunc', codFunc);
			Ext.Msg.alert('login', 'Logado com sucesso',
				function (btn) {
				    if (btn == 'ok') {
				    }
				},
				this
				);
		    }
		} else {
		    Ext.Msg.alert('login', 'senha incorreta', Ext.emptyFn);
		}

	    } else {
	    }
	    f++;
	});
	var verStore = Ext.create('Touch2Demo.store.usuarioLogado_s');
	var verRecord = verStore.getById(1);
	if (verRecord !== null) {
	    this.showMenuIniciar();
	} else {
	}
    },
    verificacao: function () {
	var store = Ext.getStore('usuarioLogado_s');
	var t = 0;
	store.each(function () {
	    arquivo = store.data.get(t);
	    t++;
	});
	if (t <= 0) {
	    Ext.Msg.alert('login', 'sem usuario logado', Ext.emptyFn);
	    this.teste();
	} else {
	    this.showMenuIniciar();
	}
    },
    verificacaoSincronizacao: function () {
	var store = Ext.getStore('Contatos');
	var k = 0;
	store.each(function () {
	    arquivo = store.data.get(k);
	    k++;
	});
	if (k <= 0) {
	    Ext.Msg.alert('Sincronização', 'Não usuarios no banco', Ext.emptyFn);
	    //    this.tela de sincronização
	} else {

	}
    },
    sair: function () {
	var store2 = Ext.getStore('usuarioLogado_s');
	var n = 0;
	store2.each(function () {
	    record2 = store2.data.get(n);
	    n++;
	});
	if (n <= 0) {
	    Ext.Msg.alert('Sair', 'não a usuario logado');
	} else {
	    Ext.Msg.confirm(
		    'Sair',
		    'Tem certesa que deseja sair?',
		    function (btn) {
			if (btn == 'yes') {
			    var store = Ext.create('Touch2Demo.store.usuarioLogado_s');
			    var record1 = store.data.get(1);
			    //console.log(record1);
			    store.remove(record1);
			    location.reload();
			}
		    },
		    this
		    );
	}
    },
    onSelecaoPneuServico: function (field, newValue) {
	var form = field.up('coletasform');
	var servicoField = form.child('selectfield[name=servico]');


	var option = new Array();

	var i = 0;
	var n = 0;
	var teste = Ext.getStore('Servico_s');
	teste.each(function () {
	    var record = teste.data.get(i + 1);
	    if (newValue.data.medida == record.data.pneuMedida) {
		option[n] = new Object();
		option[n].text = record.data.pneuMedida;
		option[n].value = record.data.id;
		n++;
	    }
	    i++;
	});
	servicoField.setOptions(option);
	servicoField.enable();
    },
    doSearch: function (field) {
	var value = field.getValue();
	var store = this.getContatosList().getStore();
	var query = new RegExp(value, 'i');

	store.clearFilter();
	store.filter('nomeCliente', query);
    }
});
