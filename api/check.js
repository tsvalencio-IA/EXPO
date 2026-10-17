// Temporary isolated connectivity diagnostic; no existing Kumon records are read or altered.
const fs=require('node:fs');
module.exports=async(req,res)=>{
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='GET')return res.status(405).json({error:'method'});
 const config=fs.readFileSync(require('node:path').join(process.cwd(),'firebase-config.js'),'utf8');
 const apiKey=config.match(/apiKey:\s*["']([^"']+)["']/)?.[1];
 const databaseURL=config.match(/databaseURL:\s*["']([^"']+)["']/)?.[1];
 if(!apiKey||!databaseURL)return res.status(200).json({phase:'config',ok:false});
 try{
  const authRes=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+encodeURIComponent(apiKey),{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({returnSecureToken:true})});
  const auth=await authRes.json();
  if(!authRes.ok||!auth.idToken){const u=databaseURL+'/kumon_config/expo/__diagnostico_20261017_001.json';const rd=await fetch(u);const rr={phase:'without-auth',authStatus:authRes.status,authError:auth.error?.message||'no-token',publicRead:rd.status};if(rd.ok){const wr=await fetch(u,{method:'PUT',headers:{'content-type':'application/json'},body:JSON.stringify({kind:'diagnostic',at:Date.now()})});rr.publicWrite=wr.status;if(wr.ok){rr.publicVerify=(await fetch(u)).status;rr.publicCleanup=(await fetch(u,{method:'DELETE'})).status}}return res.status(200).json(rr)}
  const url=databaseURL+'/kumon_config/expo/__diagnostico_20261017_001.json?auth='+encodeURIComponent(auth.idToken);
  const rd=await fetch(url);let rs={phase:'read',auth:true,read:rd.status}; 
  if(!rd.ok)return res.status(200).json(rs);
  const wr=await fetch(url,{method:'PUT',headers:{'content-type':'application/json'},body:JSON.stringify({kind:'healthcheck',at:Date.now()})});rs.write=wr.status;
  if(wr.ok){rs.verify=(await fetch(url)).status;rs.cleanup=(await fetch(url,{method:'DELETE'})).status}
  return res.status(200).json(rs);
 }catch(e){return res.status(200).json({phase:'network',error:String(e).slice(0,160)})}
};