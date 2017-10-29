"use strict";

const path = require("path");
const fs   = require("fs");

function mixObject(source, target){
    let keys = Object.keys(target);
    keys = keys.filter((key)=>{
        return source[key];
    });
    for(let key of keys){
        if(typeof target[key] == 'object'){
            mixObject( source[key], target[key] )
        }else{
            source[key] = target[key];
        }
    }
    return source;
}

function transform(target, origin = target){
    let _reg = /\{|\}/ig;
    for(let key in target){
        let value = target[key];
        if(typeof value == 'object'){
            value = transform(value, origin);
        }
        let reg = /\{\{.*\}\}/ig;
        if(reg.test(target[key])){
            let realKey = target[key].replace(_reg, "");
            target[key] = origin[ realKey ];
        }
    }
    return target;
}

function loadConfig( configPath ){
    let config = require(path.join(configPath, "config.json"));
    let configLocalPath = path.join(configPath, "config.local.json");
    let configLocal = {};
    if(fs.existsSync(configLocalPath)){
        configLocal = require(configLocalPath);
    }

    let mixed = mixObject( config, configLocal );
    return transform( mixed );
}

module.exports = loadConfig;