// Temporary integration test. Creates only disposable EXPO session, then deletes it.
const fs=require('node:fs');
module.exports=async(req,res)=>{
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='GET')return res.status(405).json({error:'method'});
 const file=fs.readFileSync(require('node:path').join(process.cwd(),'firebase-config.js'),'utf8');
 const root=file.match(/databaseURL:\s*["']([^"']+)["']/)?.[1];
 if(!root)return res.status(500).json({error:'missing database URL'});
 const base=root+'/kumon_config/expo/sessions/999991';
 const json={headers:{'content-type':'application/json'}};
 let states=[];let created=false;
 async function request(path,method='GET',body){
  const opts={method,...(body===undefined?{}:{...json,body:JSON.stringify(body)})};
  const r=await fetch(base+path+'.json',opts);let data;try{data=await r.json()}catch(e){data=null};states.push({action:method+' '+path,status:r.status});if(!r.ok)throw Error('firebase HTTP '+r.status+' during '+method+' '+path);return data;
 }
 try {
  const old=await request('');if(old!==null)return res.status(200).json({ok:false,collision:true,states});
  await request('','PUT',{version:3,unit:'Teste técnico EXPO (eliminar)',current:0,accepting:false,reveal:false,answers:{}});
  created=true;
  await request('','PATCH',{current:4,accepting:true,activeQuizId:'quiz1'});
  await request('/answers/quiz1/teste_dispositivo_a','PUT',{option:1,at:Date.now()});
  await request('/answers/quiz1/teste_dispositivo_b','PUT',{option:2,at:Date.now()});
  const end=await request('');
  const one=end?.answers?.quiz1?.teste_dispositivo_a?.option;
  const two=end?.answers?.quiz1?.teste_dispositivo_b?.option;
  const ok=end?.current===4 && end?.accepting===true && one===1 && two===2;
  return res.status(200).json({ok,scenario:'host creates + host advances + 2 independent participants + realtime datastore readback',responses:2,states});
 }catch(e){return res.status(200).json({ok:false,error:String(e),states})}
 finally{if(created){try{await fetch(base+'.json',{method:'DELETE'})}catch(e){}}}
};