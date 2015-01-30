Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Touch2Demo',
    requires: [
	'Ext.field.Search'
    ],
    controllers: [
	'Main'
    ],
    views: [
	'ColetasForm',
	'ColetasList',
	'MenuIniciar',
	'Sincronizar',
	'ContatosForm',
	'ContatosList',
	'SincronizarForm',
	'Configuracoes',
	'teste'
    ],
    models: [
	'Contato',
	'Coleta',
	'Sincronizar_M',
	'IpSincronizar_m',
	'SincronizarPneu_m',
	'Pneu_m',
	'sincronizarColeta_m',
	'usuarioLogado_m',
	'sincronizarServico_m',
	'Servico_m'
    ],
    stores: [
	'Contato',
	'Coletas',
	'Sincronizar_S',
	'IpSincronizar_s',
	'SincronizarPneu_s',
	'Pneu_s',
	'sincronizarColeta_s',
	'usuarioLogado_s',
	'sincronizarServico_s',
	'Servico_s'
    ],
    viewport: {
	layout: {
	    type: 'card',
	    animation: {
		type: 'slide',
		duration: 10
	    }
	}
    },
    launch: function () {
	Ext.Date.monthNames = [
	    'Janeiro',
	    'Fevereiro',
	    'Março',
	    'Abril',
	    'Maio',
	    'Junho',
	    'Julho',
	    'Agosto',
	    'Setembro',
	    'Outubro',
	    'Novembro',
	    'Dezembro'
	];

    }
});
