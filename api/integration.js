// Integration test restricted to temporary EXPO subpath, automatically removed after request.
const fs=require('node:fs');
module.exports=async(req,res)=>{
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='GET')return res.status(405).json({error:'method'});
 const cfg=fs.readFileSync(require('node:path').join(process.cwd(),'firebase-config.js'),'utf8');
 const match=cfg.match(/databaseURL:\s*["']([^"']+)["']/);
 if(!match)return res.status(500).json({error:'missing db configuration'});
 const url=match[1]+'/kumon_config/expo/sessions/999992.json';
 const s=[],draft={version:3,unit:'Teste técnico (descartável)',current:0,accepting:false,reveal:false,answers:{},honorees:[],applause:{}};
 const write=async(method,url2,payload)=>{const x=await fetch(url2,{method,headers:{'content-type':'application/json'},body:JSON.stringify(payload)});s.push(method+':'+x.status);if(!x.ok)throw Error(method+' '+x.status)};
 let created=false;
 try{
  const init=await fetch(url);if(!init.ok)return res.status(200).json({ok:false,phase:'read',status:init.status});
  if(await init.json()!==null)return res.status(200).json({ok:false,phase:'existing-session',changes:false});
  await write('PUT',url,draft);created=true;
  await write('PATCH',url,{current:7,honorees:[{nome:'Homenageado técnico, sem dado real',categoria:'Categoria de teste',mensagem:'Teste de cerimônia'}],awardCurrent:0,accepting:true});
  const sub=url.replace('.json','');
  await write('PUT',sub+'/applause/0/browser01.json',{at:Date.now()});
  await write('PUT',sub+'/answers/quiz1/browser01.json',{option:1,at:Date.now()});
  await write('PUT',sub+'/answers/quiz1/browser02.json',{option:2,at:Date.now()});
  const read=await fetch(url);const doc=await read.json();s.push('GET:'+read.status);
  const ok=read.ok&&doc.current===7&&doc.honorees?.length===1&&doc.applause?.[0]?.browser01&&doc.answers?.quiz1?.browser01?.option===1&&doc.answers?.quiz1?.browser02?.option===2;
  return res.status(200).json({ok:!!ok,tests:['host session','stage navigation','ceremony honoree','audience applause','2 independent answers'],operations:s});
 }catch(e){return res.status(200).json({ok:false,error:String(e).slice(0,200),operations:s})}
 finally{if(created)try{await fetch(url,{method:'DELETE'})}catch(e){}}
};
