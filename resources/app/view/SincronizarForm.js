/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('Touch2Demo.view.SincronizarForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.SincronizarForm',
    items: [{
	    xtype: 'combo',
	    id: 'stateCombo',
	    fieldLabel: 'Select State',
	    displayField: 'nome',
	    valueField: 'id',
	    store: Ext.create('Touch2Demo.store.Contato'),
	    triggerAction: 'all',
	    mode: 'local'
	}
    ]
});

