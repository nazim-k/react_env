##readme
-----------------------------------------------
*Quick start react project with express server.
 - create react environment (folders, files, config)
 - install all required npm packages
 - auto rebuild bundle.js
 - hot reload

 ##Installation
 --------------------------
 npm i @nazim.k/reactenv -g

 ##Usage
 ------------------------------------------------------------------------
 run react_env command in project folder ( this folder should be empty )
 

 Specify listening port:
    react_env **--port** 4000.
 By default port is 3000


 Create react project with bootstrap:
    react_env **-b**


 Create react project with redux:
    react_env **-r**
 React component will automatically connected to redux store.


 Run project:
    **npm start**


 By default react_env install specific version of npm packages.
 To install packages without package**@<version>** add -dev flag


 ##Example
 --------------------------------------------------------------------------------------
 Create react project with bootstrap and redux. Create actions and connect main react
 component to redux store:
    **react_env -b -r --port 4000**