sap.ui.define([
	"sap/dm/dme/podfoundation/component/production/ProductionUIComponent",
	"sap/ui/Device"
], function (ProductionUIComponent, Device) {
	"use strict";

	return ProductionUIComponent.extend("rits.assembly.custom.plugin.scanandassemblestatus.assemblyStatus.Component", {
		metadata: {
			manifest: "json"
		}
	});
});