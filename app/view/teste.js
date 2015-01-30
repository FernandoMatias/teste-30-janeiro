Ext.define('Touch2Demo.view.teste', {
    extend: 'Ext.form.Panel',
    alias: 'widget.teste',
    config: {
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		//ui: 'light',
		title: 'Teste'
	    },
	    {
		xtype: 'toolbar',
		ui: 'light',
		docked: 'top',
		items: [
		    {
			xtype: 'button',
			action: 'menuIniciar',
			ui: 'decline',
			text: 'Volta'
		    }
		]

	    },
	    {
		xtype: 'fieldset',
		title: 'Contato',
		items: [
		    {
			xtype: 'textfield',
			name: 'login',
			label: 'Login'
		    },
		    {
			xtype: 'textfield',
			name: 'senha',
			label: 'Senha'
		    }
		]
	    },
	    {
		xtype: 'button',
		action: 'login',
		ui: 'confirm',
		text: 'Login'
	    }
	]
    }
});