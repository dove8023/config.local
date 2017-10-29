let expect = require("chai").expect;
let configData = require("./config/config.json");
let configLocalData = require("./config/config.local.json");

let config = require("../lib/index");

describe("config.local package test.", function(){

    it("config.json value should be overwrited by config.local.json", (done)=>{
        expect(config.name).to.be.equal(configLocalData.name);
        done();
    });

    it("config.json dosen't have attribute should be undefined.", (done)=>{
        expect(config.sex).to.be.equal(undefined);
        done();
    });

    it("the {{value}} should be transformed.", (done)=>{
        expect(config.work.hisname).to.be.equal(config.name);
        done();
    });
});