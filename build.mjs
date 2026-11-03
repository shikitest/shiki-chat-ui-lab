import {build} from 'esbuild';
import {mkdir,copyFile,readFile,writeFile,readdir,cp} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
await build({entryPoints:['src/f7.js','src/chatscope.jsx','src/line.js'],bundle:true,outdir:'dist',minify:true,loader:{'.woff2':'file','.woff':'file','.ttf':'file'},assetNames:'assets/[name]-[hash]',define:{'process.env.NODE_ENV':'"production"'}});
for(const name of ['index.html','framework7.html','chatscope.html','line.html'])await copyFile(name,`dist/${name}`);
await copyFile('NOTICE.md','dist/NOTICE.md');
let licenses='Third-party dependency licenses\n';
for(const pkg of ['framework7','react','react-dom','@chatscope/chat-ui-kit-react','@chatscope/chat-ui-kit-styles']){for(const file of await readdir(`node_modules/${pkg}`)){if(/^licen[sc]e/i.test(file)){licenses+=`\n\n## ${pkg}\n`+await readFile(`node_modules/${pkg}/${file}`,'utf8')}}}
await writeFile('dist/LICENSES.txt',licenses);
await cp('dist','docs',{recursive:true});
await writeFile('docs/.nojekyll','');
