# config.local
## install
```javascript
	npm install --save config.local
```
## description
In different enviornments, projects need different config setting.
Maybe most config setting is same, but sometimes always has something need special setting. 
For example, the database on the production config setting is different with the test enviornment or your local envoirnment. The key is the same, but the value maybe not.
    

### how to use
```javascript
	let config = require("config.local");
	console.log(config);
```

###file structure
                
* **config** folder on the root director.
* **config.json** file in the config folder.
* **config.local.json** file in the config folder.

###eg:
####config.json
```json
    {
        "name":"Simth",
        "work":{
            "city":"Beijing",
            "company":"IT"
        }
    }
```
####config.local.json
```json
    {
        "name":"Amy",
        "work":{
            "city":"NewYork"
        }
    }
```
####using the project.
```javascript
    let config = require("config.local");
    console.log(config);
    /* 
    {
        "name":"Amy",
        "work":{
            "city":"NewYork",
            "company":"IT"
        }
    }
    */
```