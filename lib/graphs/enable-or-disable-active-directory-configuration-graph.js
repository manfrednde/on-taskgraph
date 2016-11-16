// Copyright 2016, DELL EMC, Inc.

'use strict';

module.exports = {
    friendlyName: 'Enable Or Disable AD Service',
    injectableName: 'Graph.EnableOrDisableADService',
    tasks: [
        {
           label: 'enable-or-disable-active-directory',
           taskDefinition: {
	       friendlyName: 'enable or disable active directory configuration',
               injectableName: 'Task.Active.Directory.Configuration',
	       implementsTask: 'Task.EnableDisable.Active.Directory.Configuration',
	       options: {},
	       properties: { }
	  }
        }     
    ]
};
