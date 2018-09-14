react_env
---
*react_env* cli quickly create react project with express as a server and webpack. Created project can include bootstrap and redux.

##### Quick start react project with express server.
 - create react environment (folders, files, config)
 - install all required npm packages
 - auto rebuild bundle.js
 - hot reload

Installation
 ---
 ```bash
   npm i @nazim.k/reactenv -g
 ```


Usage
---
##### run react_env command in project folder ( this folder should be empty )


 >Specify listening port:<br>
```bash
  react_env --port 4000
```
By default port is 3000


>Create react project with bootstrap:<br>
```bash
  react_env -b
```


> Create react project with redux:<br>
```bash
  react_env -r
```
React component will automatically connected to redux store.


> Run react app:<br>
```bash
  npm start
```


 By default react_env install specific version of npm packages.
 To install packages without _package_**@<version\>** add __-dev__ flag


Example
---
 Create react project with bootstrap and redux.
 Create actions and connect main react
 component to redux store:
```bash
  react_env -b -r --port 4000
```
