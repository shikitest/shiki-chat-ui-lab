export function store(variant){
 const key='SHIKI_UI_LAB_v1_'+variant;
 let data;try{data=JSON.parse(localStorage.getItem(key));}catch{}
 data ||= {cards:[],messages:[{text:'你好。这里是独立的界面试验页。',sender:'friend'}]};
 const save=()=>localStorage.setItem(key,JSON.stringify(data));
 return {get data(){return data},send(text){if(!text.trim())return;data.messages.push({text,sender:'user'});save();const pool=data.cards;const reply=pool.length?pool[Math.floor(Math.random()*pool.length)]:'收到。这是一条本地模拟回复。';data.messages.push({text:reply,sender:'friend'});save();},async import(file){let raw=await file.text(),doc;try{doc=JSON.parse(raw)}catch{doc=JSON.parse(raw.replace(/("\s*)\r?\n(\s*")/g,'$1,\n$2'))}if(!Array.isArray(doc.customReplies)||doc.customReplies.some(s=>typeof s!=='string'))throw Error('需要含 customReplies 字符串数组的字卡文件');if(doc.customReplies.length>10000)throw Error('最多 10000 条字卡');const blocked=new Set((doc.customReplyGroups||[]).filter(g=>g.disabled).flatMap(g=>g.items||[]));data.cards=doc.customReplies.filter(c=>!blocked.has(c));save();return `${doc.customReplies.length} 条已读取；${data.cards.length} 条启用字卡可抽取。停用分组保持排除。`}}
}
export function importControl(engine,status){const input=document.createElement('input');input.type='file';input.accept='.json,application/json';input.onchange=async()=>{try{status(await engine.import(input.files[0]))}catch(e){status('导入失败：'+e.message)}};input.click()}
