/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'CMC.Application',

    name: 'CMC',

    requires: [
        // This will automatically load all classes in the CMC namespace
        // so that application classes do not need to require each other.
        'CMC.*'
    ],

    // The name of the initial view to create.
    mainView: 'CMC.view.main.Main'
});
