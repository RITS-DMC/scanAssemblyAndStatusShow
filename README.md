1. Clone the project from the Git repository.
 
2. Update Namespace (Optional):
   Change the namespace if needed (e.g: rits.assembly.custom.plugin.scanandassemblestatus).
 
3. Inside the webapp folder, the following three plugins are available:
 
        scanandassemblestatus – Main plugin that acts as a container for the other two.
 
        scanAssembly – Allows scanning and assembling components (one quantity).
 
        assemblyStatus – Contains two sections:
 
            Displays assembled component status.
 
            Displays machine status.
 
4. Build the mta.yaml using your preferred method:
 
        Run mbt build, or
 
        Right-click the project and choose “Build MTA Project”.
 
5. Deploy the generated .mtar file to your Cloud Foundry space.
 
6. After deployment, get the application URL.
 
        Note the plugin path from index.html (e.g., /scanandassemblestatus) and the namespace (e.g., rits.assembly.custom.plugin.scanandassemblestatus).

 
7. Register the Plugin in SAP DMC
        Go to Manage Service Registry → UI Extensions tab.
 
        Create a new UI Extension entry:
 
        Use the plugin URL in the URL Field
		path in the path field
		Format the namespace using slashes (e.g., rits/assembly/custom/plugin/scanandassemblestatus).
 
        Enable the status and click Create.
 
8. Verify Plugin in POD Designer
	    After registration, the plugins should be visible in the POD Designer.
 
9. Create Custom POD Layout
		Copy the default operation POD and name it SCANANDASSEMBLYSTATUS.
 
        Delete all default plugins (like Worklist, Order Schedule) and their container.
 
10. Design the Main Page Layout
 
        Drag a Responsive Splitter to split the page into two parts.
 
        Add a Pane Container into both sides → you now have 4 sections.
 
        Add four Plugin Containers into each section.
 
    Add Plugins:
        Top-Left Plugin Container:
 
        Add Worklist Plugin (check the box).
 
        Add scanAssembly plugin (mark it as default).
 
        Right Plugin Container (Activities Page):
 
        Remove the default Component List plugin in the Activities page.
 
        Re-add it in the right side first plugin container and check the box.
 
    Add Assemble Button:
        Create a new Action Button next to Start/Complete/Sign Off controls.
 
        Configure it:
 
            Name: Assemble
 
            Assign Action → Add Plugin Type → Select Assemble Components plugin.
 
            Link this action to the Component List plugin (right-click → assign button).
 
    Bottom-Right Plugin Container:
 
        Add assemblyStatus plugin and check the box.
 
11. Save the POD and launch it in a new tab.
 
        Select an SFC.
		In the scanAssembly plugin:
 
        Enter the component and hit Enter.
 
        As soon you press Enter, the component will be assemble successfully and assemblyStatus plugin will update and display the current status.
