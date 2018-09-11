module.exports = (function() {
    const fs = require('fs'),
        path = require('path'),
        { packagePath } = require('../CONFIG');

    return function() {
        //TODO: check json file if it not exist run npm init
        return new Promise( (resolve, reject) => {
            fs.readFile(packagePath, 'utf-8', (err, data) => {
                if (err) reject(err);
                var j_pack = JSON.parse(data), pack, allObj, pkg,
                    start=/^{/, space=/:/g, newLine=/,/g,
                    objStart=/[\s:]{1}\{/g, objEnd=/}/g, arrStart=/\[/g, arrEnd=/\]/g,
                    end=/\s}$/, obj = /:[\s]+[\{\[]([\w\s.\/\-@\+:"#,]*)[^\s\}\]]/g;
                j_pack.scripts.start = 'node server.js';
                pack = JSON.stringify(j_pack);
                pkg = pack
                    .replace(start, '{\n\t')
                    .replace(space, ': ')
                    .replace(objStart, ' {\n\t')
                    .replace(objEnd, '\n\t}')
                    .replace(arrStart, ' [\n\t')
                    .replace(arrEnd, '\n\t]')
                    .replace(newLine, ',\n\t')
                    .replace(end, '}');

                allObj = pkg.match(obj);
                allObj.forEach(ob => {
                    var newOb;
                    console.log(ob)
                    newOb = ob.replace(/\t/g, '\t\t');
                    pkg = pkg.replace(ob, newOb);
                });

                console.log(pkg);
                fs.writeFile(path.resolve(__dirname, 'test.json'), pkg, err=> {
                    reject(err);
                });
                resolve(pack);
            })
        })
    }
}());