/* EXPO KUMON V1 • Aplicação independente e isolada.
   Escopo Firebase: kumon_config/expo/sessions • nenhum código dos outros projetos é alterado.
*/
(()=>{'use strict';
const BASE='kumon_config/expo/sessions';
const SLIDES=[
 {id:'abertura',type:'hero',kicker:'EXPO KUMON • CERIMÔNIA DE CONQUISTAS',title:'O futuro começa com cada conquista.',lead:'Uma jornada de descobertas, dedicação e conquistas.',hint:'Famílias, alunos e equipe: sejam bem-vindos.'},
 {id:'entrada',type:'join',kicker:'O PÚBLICO FAZ PARTE DA EXPO',title:'As famílias fazem parte desta história.',lead:'Aponte a câmera do celular para o QR Code ou entre pelo código da sala.'},
 {id:'proposito',type:'cards',kicker:'O SIGNIFICADO DA EXPO',title:'Hoje, celebramos a jornada.',cards:[['✦','Esforço','O empenho colocado em cada nova tentativa.'],['↗','Avanço','Conquistas construídas no próprio ritmo.'],['♡','Persistência','Continuar aprendendo, mesmo diante de desafios.']]},
 {id:'jornada',type:'cards',kicker:'COMO A APRENDIZAGEM ACONTECE',title:'Cada aluno tem seu caminho.',cards:[['01','Ponto adequado','Começar com atividades adequadas à capacidade.'],['02','Autonomia','Desenvolver a capacidade de aprender por si.'],['03','Superação','Avançar progressivamente para novos desafios.']]},
 {id:'quiz1',type:'quiz',kicker:'DESAFIO 01 • EM FAMÍLIA',title:'Você conhece o método Kumon?',prompt:'Como é escolhido o ponto de partida do aluno?',options:['Pela idade de todos da turma','Pelo conteúdo adequado à sua capacidade','Sempre pelo conteúdo mais difícil','Somente pela série escolar'],correct:1,explanation:'O ponto de partida é individualizado, considerando o nível adequado à capacidade do aluno.'},
 {id:'conquista',type:'cards',kicker:'RECONHECIMENTO',title:'O que a EXPO reconhece?',cards:[['★','Alunos adiantados','Aprendem conteúdos além daqueles previstos para seu período escolar.'],['✓','Concluintes','Uma conquista que representa a conclusão de um programa.'],['◆','Dedicação','O compromisso e a evolução merecem reconhecimento.']]},
 {id:'quiz2',type:'quiz',kicker:'DESAFIO 02 • EM FAMÍLIA',title:'Um passo além!',prompt:'No contexto da EXPO, o que significa ser um aluno adiantado?',options:['Ter mais idade que os colegas','Aprender além do previsto para a série escolar','Fazer todas as atividades em grupo','Estudar apenas nos dias de prova'],correct:1,explanation:'A EXPO reconhece alunos que avançam para conteúdos além da série escolar, além de outras conquistas.'},
 {id:'pausa',type:'hero',kicker:'MOMENTO ESPECIAL',title:'Por trás de cada conquista, existe uma história.',lead:'Uma folha, um desafio, um novo aprendizado. Cada passo importa.',hint:'Aplausos aos alunos e às famílias que caminham juntos.'},
 {id:'quiz3',type:'quiz',kicker:'DESAFIO 03 • AUTONOMIA',title:'Aprender a aprender.',prompt:'Qual habilidade o método busca desenvolver?',options:['Depender de respostas prontas','Memorizar sem compreender','Aprender de forma autônoma','Avançar sempre na mesma velocidade'],correct:2,explanation:'A aprendizagem autodidata ajuda o aluno a ler, pensar e resolver atividades com as próprias forças.'},
 {id:'reconhecimentos',type:'cards',kicker:'CONQUISTAS QUE INSPIRAM',title:'Medalhas, certificados e troféus.',cards:[['◉','Medalhas','Símbolos de superação e avanço.'],['▤','Certificados','Registro de uma etapa conquistada.'],['♛','Troféus','Celebração do esforço e da persistência.']]},
 {id:'quiz4',type:'quiz',kicker:'DESAFIO 04 • ORIENTAÇÃO',title:'Ninguém caminha sozinho.',prompt:'Qual é o papel do orientador no método?',options:['Dar todas as respostas ao aluno','Observar e orientar individualmente','Aplicar o mesmo ritmo para todos','Evitar que o aluno pense sozinho'],correct:1,explanation:'A orientação considera a habilidade, o desenvolvimento e as necessidades de cada aluno.'},
 {id:'quiz5',type:'quiz',kicker:'DESAFIO FINAL • CELEBRAÇÃO',title:'O que faz uma conquista especial?',prompt:'Segundo o propósito da EXPO, o que merece ser celebrado?',options:['Apenas o aluno que termina primeiro','Esforço, dedicação e persistência','Somente as maiores notas da escola','A competição entre as famílias'],correct:1,explanation:'A EXPO é uma celebração das conquistas alcançadas com esforço, dedicação e persistência.'},
 {id:'final',type:'final',kicker:'NOSSA JORNADA EM NÚMEROS',title:'Juntos, avançamos mais.',lead:'Obrigado por celebrar cada conquista com a gente.'},
 {id:'encerramento',type:'hero',kicker:'EXPO KUMON',title:'O futuro pertence a quem continua aprendendo.',lead:'Que cada conquista de hoje inspire novas descobertas amanhã.',hint:'Kumon • Desenvolvendo o potencial de cada aluno.'}
];

SLIDES.splice(SLIDES.findIndex(x=>x.id==='conquista')+1,0,
{id:'expo-criterios',type:'cards',kicker:'EXPO KUMON • RECONHECIMENTO',title:'Cada conquista é uma história.',cards:[['✦','Alunos adiantados','Aprendem conteúdos além daqueles previstos para sua etapa escolar.'],['◈','Concluintes','Uma trajetória de estudo até concluir um programa.'],['★','Persistência','Dedicação mantida durante anos e metas alcançadas.']]},
{id:'toru-1958',type:'cards',kicker:'NOSSA HISTÓRIA',title:'Tudo começou com um pai.',cards:[['1958','Toru Kumon','Origem do método no Japão.'],['01','Cada aluno','O estudo começa no ponto adequado à sua capacidade.'],['∞','Aprender sempre','Autonomia, confiança e perseverança.']]},
{id:'kumon-connect',type:'cards',kicker:'INOVAÇÃO COM PROPÓSITO',title:'A evolução continua.',cards:[['✎','Mesmo material','O Kumon Connect leva o material didático ao tablet.'],['↗','Mais agilidade','Envio das tarefas e correção mais ágeis.'],['♡','Família presente','Pais e orientadores acompanham conquistas e progresso.']]});
SLIDES.splice(SLIDES.findIndex(x=>x.id==='final'),0,
{id:'homenagem-expo',type:'hero',kicker:'MOMENTO DE RECONHECIMENTO',title:'Hoje, os protagonistas são os nossos alunos.',lead:'Cada medalha, cada certificado, cada conquista representa uma história de dedicação.',hint:'Uma homenagem aos alunos e a todas as famílias que caminham com eles.'});


SLIDES.splice(SLIDES.findIndex(x=>x.id==='homenagem-expo'),0,
{id:'cerimonia-palco',type:'hero',kicker:'A EXPO COMEÇA AGORA',title:'O palco pertence a quem nunca desistiu.',lead:'O verdadeiro prêmio é perceber até onde cada aluno conseguiu chegar.',hint:'Famílias e orientadores, preparem os aplausos.'});
SLIDES.splice(SLIDES.findIndex(x=>x.id==='final'),0,
{id:'familias-gratidao',type:'cards',kicker:'UMA CONQUISTA COMPARTILHADA',title:'Por trás de cada conquista, há uma rede de apoio.',cards:[['♡','Famílias','Apoio e incentivo durante a jornada de estudos.'],['✦','Orientadores','Olhar individual e acompanhamento de cada passo.'],['↗','Alunos','Determinação e capacidade de aprender por si mesmos.']]});

const honorees=Array.isArray(window.EXPO_HOMENAGEADOS)?window.EXPO_HOMENAGEADOS:[];
const cleanedHonorees=honorees.filter(h=>h&&typeof h.nome==='string'&&h.nome.trim()).slice(0,120);
SLIDES.splice(SLIDES.findIndex(x=>x.type==='final'),0,...cleanedHonorees.map((h,i)=>({
 id:'homenagem-'+i,type:'honoree',kicker:'MOMENTO DE HOMENAGEM',
 title:h.nome.trim().slice(0,140),category:String(h.categoria||'Uma conquista especial').slice(0,120),
 message:String(h.mensagem||'Parabéns pela sua conquista!').slice(0,300),
 photo:typeof h.foto==='string'&&(/^(https:\/\/|assets\/)[^"'<>]*$/).test(h.foto)?h.foto:''
})));
const qs=SLIDES.filter(s=>s.type==='quiz');
const p=new URLSearchParams(location.search);const mode=p.get('modo')||'inicio';let online=p.get('local')!=='1';
const app=document.getElementById('app');const toastEl=document.getElementById('toast');
let code=String(p.get('sala')||'').replace(/\D/g,'').slice(0,6),session=null,db=null,sessionRef=null,unsub=null,localChannel=null,stageShown=false,lastError='';
let pendingAnswerId='',answerFeedback={quizId:'',message:'',error:false};
let firebaseConnected=null,connectionBound=false;
const uid=(()=>{let id='';try{id=localStorage.getItem('expo-kumon-device-id')||sessionStorage.getItem('expo-kumon-visitor')||''}catch(e){try{id=sessionStorage.getItem('expo-kumon-visitor')||''}catch(err){}}
 if(!id)id=(crypto.randomUUID?crypto.randomUUID():('v'+Date.now()+Math.random().toString(36).slice(2))).replace(/[^a-zA-Z0-9_-]/g,'');
 try{localStorage.setItem('expo-kumon-device-id',id)}catch(e){}
 try{sessionStorage.setItem('expo-kumon-visitor',id)}catch(e){}
 return id;
})();
const visitorId=()=>uid;
const $=s=>document.querySelector(s);const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
const fmt=n=>Number(n||0).toLocaleString('pt-BR');
const homeUrl=()=>location.pathname;
function goTo(m,c='',o=online){const u=new URL(location.href);u.search='';if(m&&m!=='inicio')u.searchParams.set('modo',m);if(c)u.searchParams.set('sala',c);if(o&&c)u.searchParams.set('online','1');u.hash='';location.assign(u.href)}
function goBack(){if(mode==='controle')return goTo('inicio');if(mode==='participar'){if(session&&code)return goTo('participar');return goTo('inicio')}if(mode==='apresentacao'){if(code&&hostAuthorized())return goTo('controle',code);return goTo('inicio')}return goTo('inicio')}
function goClose(){
 if(document.querySelector('.expo-exit-cover'))return;
 const layer=document.createElement('div');
 layer.className='expo-exit-cover';
 const details=mode==='controle'?'O jogo e a apresentação continuarão ativos. Você poderá retomar o controle pelo menu inicial.':mode==='participar'?'As respostas enviadas continuam registradas. Você poderá voltar à mesma sala.':'A sessão continua ativa e o telão poderá ser aberto novamente.';
 layer.innerHTML=`<div class="expo-exit-dialog" role="dialog" aria-modal="true" aria-labelledby="expo-exit-title" aria-describedby="expo-exit-desc"><div class="kicker">CONFIRMAÇÃO</div><h2 id="expo-exit-title">Fechar esta tela?</h2><p id="expo-exit-desc">${details}</p><div class="expo-exit-actions"><button type="button" class="btn outline" data-action="cancel-exit">Continuar aqui</button><button type="button" class="btn danger" data-action="confirm-exit">Fechar e voltar ao menu</button></div></div>`;
 document.body.appendChild(layer);
 layer.querySelector('[data-action="cancel-exit"]').focus();
}
function hideExit(){document.querySelector('.expo-exit-cover')?.remove()}
function goHome(){goTo('inicio')}
function lastControlLink(){try{const x=JSON.parse(localStorage.getItem('expo-last-control')||sessionStorage.getItem('expo-last-control')||'null');if(!x||!/^[0-9]{6}$/.test(x.code))return '';return (localStorage.getItem('expo-host-'+x.code)||sessionStorage.getItem('expo-host-'+x.code))?queryUrl('controle',x.code,true):''}catch(e){return ''}}
function saveLastControl(){if(/^[0-9]{6}$/.test(code)){sessionStorage.setItem('expo-last-control',JSON.stringify({code,online}));try{localStorage.setItem('expo-last-control',JSON.stringify({code,online}))}catch(e){}}}
function stageFullScreen(){if(!document.fullscreenEnabled){toast('Tela cheia não está disponível neste navegador.',true);return}if(document.fullscreenElement){document.exitFullscreen?.().catch(()=>{})}else{document.querySelector('.stage')?.requestFullscreen?.().catch(()=>toast('Não foi possível ativar tela cheia.',true))}}
const queryUrl=(m,c=code,on=online)=>{const u=new URL(location.href);u.search='';u.searchParams.set('modo',m);if(c)u.searchParams.set('sala',c);if(on)u.searchParams.set('online','1');u.hash='';return u.href};
function toast(m,bad=false){toastEl.innerHTML=`<span>${esc(m)}</span><button class="toast-dismiss" data-action="toast-close" type="button" aria-label="Fechar aviso">×</button>`;toastEl.style.borderColor=bad?'#e46a76':'#47a0c8';toastEl.classList.remove('hidden');clearTimeout(window.__toast);window.__toast=setTimeout(()=>toastEl.classList.add('hidden'),4800)}
function navButtons(){if(mode==='inicio')return '';return `<nav class="navigation" aria-label="Navegação"><button class="nav-btn back" data-action="back" type="button" aria-label="Voltar">← <span>Voltar</span></button><button class="nav-btn home" data-action="home" type="button" aria-label="Ir para o início">⌂ <span>Início</span></button><button class="nav-btn close" data-action="close" type="button" aria-label="Fechar esta tela e voltar ao menu">× <span>Fechar</span></button></nav>`}

function firebaseStatus(){if(!online)return 'PRÉVIA LOCAL';if(firebaseConnected===true)return 'FIREBASE CONECTADO';if(firebaseConnected===false)return 'SEM CONEXÃO';return 'CONECTANDO…'}
function updateFirebaseBadges(){
 const elements=document.querySelectorAll?.('[data-firebase-state]')||[];
 for(const el of elements){el.textContent=firebaseStatus();el.classList?.toggle('offline',firebaseConnected===false)}
}

function top(title='EXPO KUMON',caption='Celebração do conhecimento'){return `<header class="top"><div class="brand"><span class="brandmark">K</span><span>${esc(title)}<div class="subtitle">${esc(caption)}</div></span></div><div class="top-right"><span class="live ${online?'':'offline'}" data-firebase-state>${firebaseStatus()}</span>${navButtons()}</div></header>`}
function footer(){return '<div class="footer">Experiência desenvolvida para a EXPO Kumon • Projeto independente • thIAguinho Soluções Digitais</div>'}
function shell(body){app.innerHTML=`<div class="shell">${top()}${body}${footer()}</div>`}
function makeCode(){const buf=new Uint32Array(1);if(crypto.getRandomValues)crypto.getRandomValues(buf);else buf[0]=Math.floor(Math.random()*4294967295);return String(buf[0]%900000+100000)}
function localKey(c){return 'expo-kumon-v1:'+c}
function localRead(c){try{return JSON.parse(localStorage.getItem(localKey(c))||'null')}catch(e){return null}}
function announce(){if(localChannel)localChannel.postMessage({code,stamp:Date.now()})}
function localWrite(obj){localStorage.setItem(localKey(code),JSON.stringify(obj));session=obj;announce();render()}
function localPatch(fn){const curr=localRead(code);if(!curr)throw new Error('Sessão não encontrada.');fn(curr);localWrite(curr)}
function bindLocal(){if(!code)return;session=localRead(code);if(!localChannel&&'BroadcastChannel'in window){localChannel=new BroadcastChannel('expo-kumon-v1');localChannel.onmessage=ev=>{if(ev.data?.code===code){session=localRead(code);render()}}}window.addEventListener('storage',e=>{if(e.key===localKey(code)){session=localRead(code);render()}});render()}
async function firebaseInit(){if(db)return db;if(!window.EXPO_FIREBASE_CONFIG||!window.firebase)throw Error('Biblioteca/configuração Firebase indisponível. Verifique internet, script e firebase-config.js.');if(firebase.apps.length===0)firebase.initializeApp(window.EXPO_FIREBASE_CONFIG);db=firebase.database();if(!connectionBound){connectionBound=true;db.ref('.info/connected').on('value',snapshot=>{firebaseConnected=!!snapshot.val();updateFirebaseBadges()},error=>{firebaseConnected=false;updateFirebaseBadges();console.warn('Falha ao verificar a conexão Firebase:',error?.code||error?.message)})}return db}
async function bindOnline(){try{await firebaseInit();if(unsub){unsub();unsub=null}const r=db.ref(`${BASE}/${code}`);sessionRef=r;const handler=s=>{session=s.val();lastError='';render()};r.on('value',handler,e=>{lastError='Firebase negou a leitura: '+(e.message||e.code);render()});unsub=()=>r.off('value',handler)}catch(e){lastError=e.message;render()}}
function bind(){if(!code){render();return}if(online)bindOnline();else bindLocal()}
function slide(){return SLIDES[Math.max(0,Math.min(SLIDES.length-1,Number(session?.current)||0))]}
function tally(){const answers=session?.answers||{};let correct=0,wrong=0;let total=0;const unique=new Set();for(const q of qs){for(const [id,a] of Object.entries(answers[q.id]||{})){if(!Number.isInteger(Number(a?.option)))continue;unique.add(id);total++;if(Number(a.option)===q.correct)correct++;else wrong++}}return {correct,wrong,total,unique:unique.size}}
function personal(){const a=session?.answers||{},id=visitorId();let correct=0,wrong=0;if(!id)return {correct,wrong};for(const q of qs){if(a[q.id]?.[id]!==undefined){if(Number(a[q.id][id]?.option)===q.correct)correct++;else wrong++}}return {correct,wrong}}
function votes(q){const arr=Object.values(session?.answers?.[q.id]||{}).filter(a=>a&&[0,1,2,3].includes(Number(a.option)));return {n:arr.length,by:q.options.map((_,i)=>arr.filter(a=>Number(a.option)===i).length)}}
function stageTop(){return `<div class="stage-head"><div class="brand"><span class="brandmark">K</span><span>EXPO KUMON<div class="subtitle">${esc(session.unit||'Celebração do conhecimento')}</div></span></div><div class="row stage-header-actions"><span class="pill" data-firebase-state>${firebaseStatus()}</span><span class="pill">PARTICIPE: <b>${code}</b></span><span class="pill">${Number(session.current)+1}/${SLIDES.length}</span><button type="button" class="stage-tool" data-action="back">← Voltar</button><button type="button" class="stage-tool" data-action="fullscreen">⛶ Tela cheia</button><button type="button" class="stage-tool danger" data-action="close">× Fechar</button></div></div>`}

function listAwards(){return Array.isArray(session?.honorees)?session.honorees:[]}
function awardNow(){const a=listAwards();const i=Math.max(0,Math.min(a.length-1,Number(session?.awardCurrent)||0));return {a:a[i],i,total:a.length}}
function applauseCount(i){return Object.keys(session?.applause?.[i]||{}).length}

function programGo(id){
 if(!hostAuthorized()){toast('Controle do apresentador não autorizado.',true);return}
 const n=SLIDES.findIndex(x=>x.id===id);
 if(n<0)return;
 hostUpdate({current:n,activeQuizId:SLIDES[n].type==='quiz'?SLIDES[n].id:'',reveal:false,accepting:SLIDES[n].type==='quiz'});
}
function awardStep(step){
 if(!hostAuthorized())return;
 const list=listAwards();if(!list.length){toast('Cadastre as homenagens autorizadas antes de iniciar as chamadas.',true);return}
 const idx=Math.max(0,Math.min(list.length-1,(Number(session.awardCurrent)||0)+step));
 showAward(idx);
}
function stageNotes(s){
 if(s.id==='abertura')return 'Receba as famílias. Faça uma pausa e convide todos a celebrar o desenvolvimento de cada aluno.';
 if(s.id==='cerimonia-palco')return 'Apresente o significado das conquistas. Em seguida, chame os homenageados pelo painel de premiação.';
 if(s.id==='homenagem-expo')return 'Chame o homenageado, aguarde o reconhecimento e convide o público a aplaudir pelo celular. Depois avance na lista.';
 if(s.type==='quiz')return 'A pergunta abre automaticamente para respostas. Aguarde a plateia, encerre a votação e revele o gabarito.';
 if(s.id==='familias-gratidao')return 'Agradeça a presença e o apoio das famílias e dos orientadores.';
 if(s.type==='final')return 'Mostre apenas resultados coletivos e não identifique quem acertou ou errou.';
 return 'Apresente este momento no seu ritmo. Avance quando a plateia estiver pronta.';
}
function programPanel(){
 const count=listAwards().length,now=awardNow(),curr=slide(),t=tally();
 const buttons=[['abertura','01','Abertura'],['entrada','02','Entrada pelo QR'],['cerimonia-palco','03','Início da premiação'],['homenagem-expo','04','Homenagens'],['familias-gratidao','05','Famílias'],['final','06','Resultado coletivo'],['encerramento','07','Encerramento']];
 const btns=buttons.map(([id,num,title])=>'<button type="button" class="expo-program-step '+(curr.id===id?'active':'')+'" data-program="'+esc(id)+'"><span>'+num+'</span><b>'+esc(title)+'</b></button>').join('');
 return '<section class="panel expo-production"><div class="expo-production-top"><div><div class="kicker">CENTRAL DE CERIMÔNIA</div><h2>EXPO ao vivo · Direção do evento</h2><p>O reconhecimento é o momento principal. Apresente, chame os alunos e acompanhe os aplausos em tempo real.</p></div><div class="expo-event-state"><b>'+count+'</b><span>homenagens na programação</span></div></div>'+
 '<div class="expo-live-metrics"><span><b>'+fmt(t.unique)+'</b> participantes ativos no jogo</span><span><b>'+fmt(t.correct)+'</b> acertos</span><span><b>'+fmt(t.wrong)+'</b> erros</span></div>'+
 '<div class="expo-program-grid">'+btns+'</div>'+
 '<div class="expo-live-cue"><div><small>PRÓXIMA CHAMADA</small><h3>'+(now.a?esc(now.a.nome):'Aguardando cadastro autorizado')+'</h3><p>'+(now.a?esc(now.a.categoria)+' · '+(now.i+1)+' de '+now.total: 'A lista de homenageados pode ser preparada na seção abaixo.')+'</p></div><div class="expo-cue-actions"><button type="button" class="btn outline" data-action="prev-award" '+(count?'':'disabled')+'>← Anterior</button><button type="button" class="btn orange" data-action="next-award" '+(count?'':'disabled')+'>Próximo homenageado →</button></div></div>'+
 '<div class="expo-speaker"><b>ROTEIRO PARA O APRESENTADOR</b><p>'+esc(stageNotes(curr))+'</p></div>'+
 '<div class="expo-warning"><strong>Proteção de dados:</strong> o Firebase atual permite acesso público ao índice da EXPO. Não publique nomes, fotos ou informações de menores até que as regras estejam protegidas e a unidade tenha autorizado sua divulgação. Utilize reconhecimento coletivo ou identificação genérica enquanto isso.</div></section>';
}
function reportExport(){
 if(!session||!hostAuthorized())return;
 const t=tally();
 const report={evento:'EXPO Kumon',unidade:session.unit||'',geradoEm:new Date().toISOString(),resumo:{participantes:t.unique,acertos:t.correct,erros:t.wrong},perguntas:qs.map(q=>{const v=votes(q);return{id:q.id,pergunta:q.prompt,total:v.n,alternativas:v.by,acertos:v.by[q.correct]||0,erros:v.n-(v.by[q.correct]||0)}}),homenagens:{quantidade:listAwards().length,aplausos:listAwards().reduce((sum,_,i)=>sum+applauseCount(i),0)}};
 const file=new Blob([JSON.stringify(report,null,2)],{type:'application/json;charset=utf-8'});
 const url=URL.createObjectURL(file);const a=document.createElement('a');a.href=url;a.download='expo-kumon-relatorio-'+code+'.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
 toast('Relatório anônimo preparado para download.');
}

function awardPanel(){
 const items=listAwards(),now=awardNow();
 return '<details class="panel expo-award-editor"><summary><span>🏅 Homenagens ao vivo</span><small>'+items.length+' homenageado(s) cadastrados nesta EXPO</small></summary>'+
 '<p class="muted">Cadastre somente alunos e conquistas autorizadas pela unidade. Nenhum aluno é importado automaticamente dos outros sistemas.</p>'+
 '<div class="award-editor-grid"><label><span class="fieldlabel">Nome para homenagear</span><input id="award-name" maxlength="100" placeholder="Nome do aluno"></label>'+
 '<label><span class="fieldlabel">Categoria do reconhecimento</span><select id="award-category"><option>Aluno adiantado</option><option>Concluinte</option><option>Dedicação e persistência</option><option>Homenagem especial</option></select></label>'+
 '<label class="wide"><span class="fieldlabel">Conquista / mensagem (opcional)</span><input id="award-message" maxlength="180" placeholder="Uma conquista que merece ser celebrada"></label>'+
 '<label class="wide"><span class="fieldlabel">URL de foto autorizada (opcional, https://)</span><input id="award-photo" type="url" placeholder="https://..."></label></div>'+
 '<button type="button" class="btn orange" data-action="add-award">Adicionar homenagem</button>'+
 (items.length?'<div class="award-list">'+items.map((a,i)=>'<div class="award-list-item"><div><b>'+esc(a.nome)+'</b><small>'+esc(a.categoria)+' · '+applauseCount(i)+' aplauso(s)</small></div><div class="row"><button class="btn small '+(now.i===i?'orange':'outline')+'" data-award-jump="'+i+'">Exibir no telão</button><button class="btn small outline" data-award-remove="'+i+'" aria-label="Excluir homenagem '+esc(a.nome)+'">×</button></div></div>').join('')+'</div>':'<p class="small muted">Ao cadastrar, os nomes ficarão disponíveis exclusivamente nesta sessão ao vivo.</p>')+
 '</details>';
}
async function addAward(){
 if(!hostAuthorized())return;
 const nome=($('#award-name')?.value||'').trim().slice(0,100);
 if(nome.length<2){toast('Digite o nome do homenageado.',true);return}
 const categoria=($('#award-category')?.value||'Homenagem especial').trim().slice(0,90);
 const mensagem=($('#award-message')?.value||'Parabéns por sua dedicação e conquista!').trim().slice(0,180);
 const photo=($('#award-photo')?.value||'').trim();
 if(photo&&!/^https:\/\/[^\s"'<>]+$/.test(photo)){toast('Use um link https:// válido para a foto, ou deixe o campo vazio.',true);return}
 const list=listAwards();if(list.length>=100){toast('Limite de 100 homenagens por sessão.',true);return}
 await hostUpdate({honorees:[...list,{nome,categoria,mensagem,foto:photo}],awardCurrent:list.length});
 toast('Homenagem cadastrada. Abra o slide de reconhecimento para exibir.');
}
async function showAward(i){
 const list=listAwards();if(!hostAuthorized()||!list[i])return;
 return hostUpdate({current:SLIDES.findIndex(s=>s.id==='homenagem-expo'),awardCurrent:i,accepting:false,reveal:false});
}
async function removeAward(i){
 const list=listAwards();if(!hostAuthorized()||!list[i]||!confirm('Excluir a homenagem de '+list[i].nome+' desta sessão?'))return;
 return hostUpdate({honorees:list.filter((_,j)=>j!==i),awardCurrent:0,applause:{}});
}
async function sendClap(){
 if(!online||!sessionRef||slide().id!=='homenagem-expo')return;
 const now=awardNow();if(!now.a)return;
 try{const ref=sessionRef.child('applause/'+now.i+'/'+visitorId());const tr=await ref.transaction(v=>v===null?Date.now():undefined,undefined,false);
 toast(tr.committed?'Seu aplauso foi recebido!':'Seu aplauso já foi registrado.')}
 catch(e){toast('Não foi possível registrar o aplauso: '+e.message,true)}
}

function stageBody(s){const k=`<div class="stage-kicker">${esc(s.kicker)}</div>`;if(s.id==='homenagem-expo'){const now=awardNow();if(!now.a)return k+'<div class="expo-stage-symbol">✦</div><h1 class="stage-title">Nossas conquistas merecem aplausos.</h1><p class="stage-lead">Cada avanço representa uma história de esforço, autonomia e dedicação.</p><p class="stage-counter">Celebramos todos que seguem aprendendo.</p>';
 return k+'<div class="expo-stage-stars" aria-hidden="true"><span>✦</span><span>✦</span><span>✦</span><span>✦</span><span>✦</span></div><div class="award-spotlight"><div class="award-visual">'+(now.a.foto?'<img class="award-photo" src="'+esc(now.a.foto)+'" alt="Foto autorizada de '+esc(now.a.nome)+'">':'<div class="award-seal">★</div>')+'</div><div class="award-copy"><div class="stage-kicker">'+esc(now.a.categoria)+'</div><h1 class="stage-title">'+esc(now.a.nome)+'</h1><p class="stage-lead">'+esc(now.a.mensagem)+'</p><div class="stage-counter">'+(now.i+1)+' / '+now.total+' homenagens · '+applauseCount(now.i)+' aplausos da plateia</div><div class="expo-stage-tribute">UMA CONQUISTA QUE INSPIRA OUTRAS CONQUISTAS</div></div></div>';}if(s.type==='join')return `${k}<h1 class="stage-title">${esc(s.title)}</h1><p class="stage-lead">${esc(s.lead)}</p><div class="join-screen"><img class="qr stage-qr" src="${esc(qrImg(joinLink()))}" alt="QR Code para participar pelo celular"><div><div class="stage-kicker">CÓDIGO DA SALA</div><div class="stage-code">${esc(code)}</div><p class="stage-counter">Acesse ${esc(new URL(joinLink()).host+new URL(joinLink()).pathname)} e informe o código acima.</p></div></div>`;
if(s.type==='honoree')return `${k}<div class="celebration">${s.photo?`<img src="${esc(s.photo)}" class="photo-honoree" alt="Foto autorizada de ${esc(s.title)}">`:'<div class="medal">★</div>'}<div><div class="stage-kicker">${esc(s.category)}</div><h1 class="stage-title">${esc(s.title)}</h1><p class="stage-lead">${esc(s.message)}</p></div></div>`;
if(s.type==='hero')return `${k}<h1 class="stage-title">${esc(s.title)}</h1><p class="stage-lead">${esc(s.lead)}</p>${s.hint?`<div class="stage-counter" style="margin-top:42px">${esc(s.hint)}</div>`:''}`;
if(s.type==='cards')return `${k}<h1 class="stage-title">${esc(s.title)}</h1><div class="stage-cardrow">${s.cards.map(([ic,h,d])=>`<div class="stage-card"><div class="award">${esc(ic)}</div><h3>${esc(h)}</h3><p>${esc(d)}</p></div>`).join('')}</div>`;
if(s.type==='quiz'){const v=votes(s),reveal=!!session.reveal;return `${k}<h1 class="stage-title">${esc(s.title)}</h1><p class="stage-question">${esc(s.prompt)}</p><div class="stage-options">${s.options.map((t,i)=>{let n=v.by[i],pct=v.n?Math.round(n*100/v.n):0;return `<div class="stage-option ${reveal&&i===s.correct?'correct':''}">${reveal?`<i class="bar" style="width:${pct}%"></i>`:''}<div class="letter">${'ABCD'[i]}</div><span class="answertext">${esc(t)}</span>${reveal?`<span class="pct">${pct}%</span>`:''}</div>`}).join('')}</div><div class="stage-counter">${v.n?`${fmt(v.n)} resposta(s) recebida(s)`:'Aguardando a participação do público…'} ${!session.accepting&&!reveal?'• Respostas encerradas':''}</div>${reveal?`<div class="explain"><b>Resposta: ${'ABCD'[s.correct]}.</b> ${esc(s.explanation)}</div>`:''}`}
if(s.type==='final'){const t=tally();return `${k}<h1 class="stage-title">${esc(s.title)}</h1><p class="stage-lead">${esc(s.lead)}</p><div class="score-hero"><div class="score-box"><b>${fmt(t.unique)}</b><span>Participantes que responderam</span></div><div class="score-box"><b>${fmt(t.correct)}</b><span>Respostas corretas</span></div><div class="score-box"><b>${fmt(t.wrong)}</b><span>Respostas incorretas</span></div></div><p class="stage-counter">Resultados coletivos, sem identificar participantes.</p>`}
return `${k}<h1 class="stage-title">EXPO Kumon</h1>`}
function stageRender(){if(!session){if(lastError){app.innerHTML=`<main class="shell">${top()}<div class="panel"><h2>Erro ao conectar ao telão</h2><p class="error">${esc(lastError)}</p><a class="btn outline" href="${homeUrl()}">Voltar</a></div></main>`;return}app.innerHTML=`<main class="shell">${top()}<div class="panel"><h2>Sessão ${esc(code)} não encontrada</h2><p>Inicie uma sessão pelo controle do apresentador.</p><a class="btn" href="${queryUrl('controle')}">Abrir controle</a></div></main>`;return}const s=slide();app.innerHTML=`<div class="stage">${stageTop()}<div class="stage-main"><div class="stage-content">${stageBody(s)}</div></div><div class="stage-progress"><div style="width:${100*(Number(session.current)+1)/SLIDES.length}%"></div></div><div class="stage-foot"><span>EXPO Kumon • ${esc(session.unit||'Celebração do conhecimento')}</span><span class="row"><a class="btn small" href="${queryUrl('participar')}">Link para participar</a><span>Projeto interativo</span></span></div></div>`}
function joinLink(){return queryUrl('participar')}
function qrImg(url){return `https://api.qrserver.com/v1/create-qr-code/?size=230x230&margin=10&data=${encodeURIComponent(url)}`}
function hostAuthorized(){if(!session)return false;let saved='';try{saved=localStorage.getItem('expo-host-'+code)||''}catch(e){}return !!(session.hostKey&&(sessionStorage.getItem('expo-host-'+code)===session.hostKey||saved===session.hostKey||p.get('chave')===session.hostKey))}
function hostRemember(){if(session?.hostKey&&p.get('chave')===session.hostKey){sessionStorage.setItem('expo-host-'+code,session.hostKey);try{localStorage.setItem('expo-host-'+code,session.hostKey)}catch(e){}}}
function controlRender(){if(!code||!session){const resume=lastControlLink();shell(`<section class="panel"><div class="kicker">PAINEL DO APRESENTADOR</div><h1>Prepare a sua EXPO.</h1><p class="muted">A apresentação é ao vivo: crie a sala e compartilhe o QR Code para que as famílias participem pelo próprio celular.</p>${resume?`<div class="expo-resume"><span>Sessão anterior disponível neste navegador</span><a class="btn orange small" href="${esc(resume)}">↩ Retomar controle</a></div>`:''}<div class="stack" style="max-width:560px"><label><span class="fieldlabel">Nome da unidade (personalizável)</span><input id="unit" value="Kumon Rio Preto Shopping" maxlength="85" style="width:100%"></label><div class="row"><button class="btn orange" data-action="create-online">Iniciar EXPO online agora →</button></div><div class="notice">A sessão é sincronizada em tempo real pelo Firebase da reunião, em um índice exclusivo da EXPO. Nenhum cadastro individual de alunos será exibido.</div></div>${code?`<p class="small">${lastError?`<span class="error">${esc(lastError)}</span>`:'Sessão '+esc(code)+' não encontrada.'}</p>`:''}</section>`);return}
 hostRemember();if(!hostAuthorized()){shell(`<section class="panel"><h2>Controle não autorizado neste dispositivo</h2><p>${online?'Acesse pelo navegador que iniciou a sessão ou pelo link privado copiado anteriormente.':'Use o link privativo do controle gerado ao iniciar a sessão. O telão e os participantes não precisam dessa chave.'}</p><a href="${queryUrl('participar')}" class="btn outline">Abrir participante</a></section>`);return}
saveLastControl();const s=slide(),t=tally(),v=s.type==='quiz'?votes(s):null;const hostLink=(()=>{const u=new URL(queryUrl('controle'));u.searchParams.set('chave',session.hostKey||'');return u.href})();
const nextCan=Number(session.current)<SLIDES.length-1,prevCan=Number(session.current)>0;
shell(`<div class="control-grid"><div class="stack"><section class="panel"><div class="row" style="justify-content:space-between"><div><div class="kicker">CONTROLE DO EVENTO</div><h2 style="margin:9px 0">${esc(s.title)}</h2><div class="small muted">Slide ${Number(session.current)+1} de ${SLIDES.length} • ${s.type==='quiz'?'Jogo interativo':'Apresentação'}</div></div><span class="live ${online?'':'offline'}" data-firebase-state>${firebaseStatus()}</span></div><div class="rule"></div><div class="row"><button class="btn outline" data-action="prev" ${prevCan?'':'disabled'}>← Slide anterior</button><button class="btn orange" data-action="next" ${nextCan?'':'disabled'}>Próximo slide →</button><a class="btn" href="${queryUrl('apresentacao')}" target="_blank" rel="noopener">Abrir telão ↗</a></div>${s.type==='quiz'?`<div class="rule"></div><h3>Pergunta em andamento</h3><p>${esc(s.prompt)}</p><p class="muted">${fmt(v.n)} resposta(s) recebida(s)</p><div class="row"><button class="btn ${session.accepting?'danger':'outline'}" data-action="toggle">${session.accepting?'Encerrar respostas':'Reabrir respostas'}</button><button class="btn orange" data-action="reveal">${session.reveal?'Ocultar gabarito':'Revelar resposta'}</button></div>`:''}</section><section class="panel"><div class="kicker">ROTEIRO DA APRESENTAÇÃO</div><h3 style="margin:8px 0 17px">Navegação por etapa</h3><div class="slide-list">${SLIDES.map((x,i)=>`<button class="slide-item ${i===Number(session.current)?'selected':''} ${x.type==='quiz'?'question':''}" data-jump="${i}"><b>${String(i+1).padStart(2,'0')}</b><span>${esc(x.title)}</span></button>`).join('')}</div></section></div><div class="stack"><section class="panel"><div class="kicker">PARTICIPAÇÃO AO VIVO</div><div class="code">${code}</div><p class="small muted">Digite o código no link de participação ou use o QR Code.</p><img class="qr" src="${qrImg(joinLink())}" alt="QR code para entrar no jogo" onerror="this.style.display='none'"><div class="linktext">${esc(joinLink())}</div><div class="row" style="margin-top:10px"><button class="btn small" data-action="copyJoin">Copiar link</button><button class="btn outline small" data-action="copyHost">${online?'Copiar endereço deste controle':'Copiar controle privativo'}</button></div><a class="btn outline small" href="${joinLink()}" target="_blank" rel="noopener" style="margin-top:10px">Testar participante ↗</a></section><section class="panel"><h3>Placar anônimo</h3><div class="metric-grid"><div class="metric"><b>${fmt(t.unique)}</b><span>Participantes</span></div><div class="metric"><b>${fmt(t.correct)}</b><span>Acertos</span></div><div class="metric"><b>${fmt(t.wrong)}</b><span>Erros</span></div></div></section><section class="panel"><h3>Gerenciamento</h3><p class="small muted">Só os dados desta sessão da EXPO serão afetados.</p><button class="btn danger small" data-action="clear">Zerar respostas da sessão</button><div class="rule"></div><span class="small muted">Para iniciar uma nova sessão, volte à página inicial do controle.</span><div class="row" style="margin-top:10px"><a class="btn outline small" href="${queryUrl('controle','',false).split('?')[0]+'?modo=controle'}">Nova sessão</a><button class="btn outline small" data-action="export-report">Baixar relatório anônimo</button></div></section></div></div>`);
// href privado salvo sem exibir o token ao público; compartilhamento ocorre apenas após clique.
window.__expoHostLink=hostLink;const controlGrid=document.querySelector('.control-grid');if(controlGrid){controlGrid.insertAdjacentHTML('beforebegin',programPanel());const col=controlGrid.querySelector('.stack');if(col)col.insertAdjacentHTML('afterbegin',awardPanel());}
}
function participantRender(){if(!code||!session){shell(`<div class="participant-wrap"><section class="panel"><div class="kicker">PARTICIPE PELO CELULAR</div><h1>Uma experiência para toda a família.</h1><p class="muted">Use o código que aparece no telão. Não é necessário informar seu nome.</p><label class="fieldlabel" for="room">Código da sessão</label><div class="editrow"><input id="room" inputmode="numeric" autocomplete="one-time-code" placeholder="000000" maxlength="6" value="${esc(code)}"><button class="btn" data-action="join">Entrar</button></div><p class="small error" style="margin-top:12px">${esc(lastError)}</p><div class="notice" style="margin-top:18px">O jogo é educativo. Seu desempenho será mostrado apenas neste celular; o telão apresenta somente os totais do público.</div></section></div>`);return}
const s=slide(),me=personal(),id=visitorId(),a=id?session.answers?.[s.id]?.[id]:undefined,answered=a!==undefined,locked=!session.accepting||!!session.reveal,pending=pendingAnswerId===s.id;const total=qs.length;
if(s.id==='homenagem-expo'&&awardNow().a){const now=awardNow(),has=!!session.applause?.[now.i]?.[visitorId()];
 shell('<div class="participant-wrap"><section class="panel award-participate"><div class="kicker">MOMENTO DE HOMENAGEM · EXPO KUMON</div><div class="award-seal-mini">★</div><h1>'+esc(now.a.nome)+'</h1><p>'+esc(now.a.categoria)+'</p><p class="muted">'+esc(now.a.mensagem)+'</p><button type="button" class="btn orange" data-action="clap" '+(has?'disabled':'')+'>'+(has?'✓ Aplauso registrado':'★ Aplaudir esta conquista')+'</button><div class="small muted" style="margin-top:20px">'+applauseCount(now.i)+' aplausos recebidos</div></section></div>');return}
if(s.type!=='quiz'){shell(`<div class="participant-wrap"><section class="panel"><div class="kicker">EXPO KUMON • SALA ${esc(code)}</div><h1>${s.type==='final'?'Você fez parte desta conquista!':'Acompanhe a apresentação no telão.'}</h1><p class="muted">${esc(s.title)}</p><div class="metric-grid" style="margin:25px 0"><div class="metric"><b>${me.correct}</b><span>Meus acertos</span></div><div class="metric"><b>${me.wrong}</b><span>Meus erros</span></div><div class="metric"><b>${total}</b><span>Desafios da rodada</span></div></div><div class="notice">As perguntas serão abertas pelo apresentador. Você responderá por este celular e receberá seu próprio resultado.</div><button class="btn outline small" style="margin-top:16px" data-action="copyJoin">Compartilhar participação</button></section></div>`);return}
const vc=votes(s);shell(`<div class="participant-wrap"><section class="panel"><div class="row" style="justify-content:space-between"><div class="kicker">${esc(s.kicker)}</div><span class="live ${locked?'offline':''}">${session.reveal?'GABARITO ABERTO':session.accepting?'RESPONDA AGORA':'AGUARDANDO ABERTURA'}</span></div><h1 style="margin:14px 0 10px">${esc(s.title)}</h1><p style="font-size:19px;font-weight:700">${esc(s.prompt)}</p><div class="stack" style="margin:26px 0">${s.options.map((o,i)=>{const own=answered&&Number(a.option)===i;const right=!!session.reveal&&s.correct===i;return `<button class="option ${own?'chosen':''} ${right?'right':''} ${session.reveal&&own&&!right?'wrong':''}" data-answer="${i}" ${answered||locked||pending?'disabled':''}><span class="letter">${'ABCD'[i]}</span><span>${esc(o)}</span>${session.reveal&&right?'<b style="margin-left:auto">✓</b>':''}</button>`}).join('')}</div>${answered?`<div class="notice expo-answer-ok"><b>✓ Resposta registrada no Firebase:</b> ${'ABCD'[Number(a.option)]}. ${Number(a.option)===s.correct?'Você acertou!':'Resposta incorreta. Você pode aprender com o gabarito.'}</div>`:pending?'<div class="notice expo-answer-pending">Enviando resposta ao Firebase… aguarde a confirmação.</div>':answerFeedback.quizId===s.id&&answerFeedback.error?`<div class="notice expo-answer-error">${esc(answerFeedback.message)}</div>`:locked?`<div class="notice">${session.reveal?'O gabarito foi revelado, mas':'A votação não está aberta e'} não há resposta registrada neste aparelho.</div>`:'<div class="notice">Selecione uma alternativa; sua resposta será confirmada pelo Firebase.</div>'}${session.reveal?`<div class="notice" style="margin-top:10px;background:#e9faf5"><b>Explicação:</b> ${esc(s.explanation)}</div>`:''}<div class="metric-grid" style="margin-top:19px"><div class="metric"><b>${me.correct}</b><span>Meus acertos</span></div><div class="metric"><b>${me.wrong}</b><span>Meus erros</span></div><div class="metric"><b>${vc.n}</b><span>Respostas da sala</span></div></div></section></div>`)
}
function homeRender(){const resume=lastControlLink();shell(`${resume?`<section class="expo-resume"><span>Último controle utilizado neste navegador</span><a class="btn orange small" href="${esc(resume)}">↩ Retomar controle</a></section>`:''}<section class="panel hero"><div class="hero-inner"><div class="tag">EXPO KUMON 2026 • AO VIVO</div><h1>Cada avanço merece ser celebrado.</h1><p>Uma celebração de conquistas, autonomia e dedicação, com participação das famílias ao vivo pelo celular.</p><div class="row"><a class="btn orange" href="?modo=controle">Iniciar cerimônia</a><a class="btn outline" href="?modo=participar">Entrar no jogo</a></div></div></section><div class="mode-grid"><a class="mode" href="?modo=apresentacao"><div class="icon">▣</div><h3>Telão</h3><p>Apresentação em tela cheia, perguntas e resultados da plateia.</p></a><a class="mode" href="?modo=controle"><div class="icon">◎</div><h3>Controle</h3><p>Navegue pelos slides, abra respostas e revele gabaritos.</p></a><a class="mode" href="?modo=participar"><div class="icon">✦</div><h3>Participante</h3><p>Responda pelo celular e confira seus próprios acertos.</p></a></div><div class="info-grid"><div class="panel"><div class="kicker">NOSSO PROPÓSITO</div><h3>Reconhecer cada conquista</h3><p>A EXPO é dedicada ao esforço, à dedicação, à persistência e ao desenvolvimento das capacidades de cada aluno.</p></div><div class="panel"><div class="kicker">RESPEITO À PRIVACIDADE</div><h3>Placar coletivo sem nomes</h3><p>O jogo utiliza identificadores aleatórios. Não importa cadastros de alunos nem exibe resultados pessoais no telão.</p></div></div>`)}
function render(){if(mode==='apresentacao')stageRender();else if(mode==='controle')controlRender();else if(mode==='participar')participantRender();else homeRender()}
async function createSession(useOnline){let c=makeCode();let count=0;while(!useOnline&&localRead(c)&&count++<7)c=makeCode();const unit=($('#unit')?.value||'Kumon Rio Preto Shopping').trim().slice(0,85);const key=(crypto.randomUUID?crypto.randomUUID():'host'+Date.now()+Math.random()).replace(/[^a-zA-Z0-9_-]/g,'');const initial={version:3,unit,current:0,activeQuizId:'',reveal:false,accepting:false,createdAt:Date.now(),answers:{},honorees:[],awardCurrent:0,applause:{}};initial.hostKey=key;
try{if(useOnline){await firebaseInit();const rr=db.ref(`${BASE}/${c}`);const created=await rr.transaction(v=>v===null?initial:undefined,undefined,false);if(!created.committed)throw Error('Código já utilizado. Tente novamente.');}else{code=c;localWrite(initial)}sessionStorage.setItem('expo-host-'+c,key);sessionStorage.setItem('expo-last-control',JSON.stringify({code:c,online:useOnline}));try{localStorage.setItem('expo-host-'+c,key);localStorage.setItem('expo-last-control',JSON.stringify({code:c,online:useOnline}))}catch(e){}const u=new URL(location.href);u.search='';u.searchParams.set('modo','controle');u.searchParams.set('sala',c);if(useOnline)u.searchParams.set('online','1');history.replaceState({},'',u);code=c;online=useOnline;session=initial;if(useOnline)bindOnline();else bindLocal();render();toast('Sessão criada. O telão e o controle estão prontos.')}catch(e){toast('Não foi possível criar sessão: '+e.message,true);lastError=e.message}}
async function hostUpdate(values){if(!hostAuthorized()){toast('Controle não autorizado.',true);return}try{if(online){await sessionRef.update(values)}else localPatch(obj=>Object.assign(obj,values))}catch(e){toast('Falha ao atualizar sessão: '+e.message,true)}}
async function answerAt(i){
 const s=slide(),id=visitorId();
 if(!s||s.type!=='quiz'||!session){toast('Aguarde a pergunta aparecer na sala.',true);return}
 if(!Number.isInteger(i)||i<0||i>=s.options.length){toast('Alternativa inválida.',true);return}
 if(pendingAnswerId){toast('A resposta anterior ainda está sendo enviada.',true);return}
 if(session.answers?.[s.id]?.[id]!==undefined){toast('Sua resposta já está registrada nesta pergunta.');return}
 if(!session.accepting||session.reveal){
  answerFeedback={quizId:s.id,message:session.reveal?'O gabarito já foi aberto; esta resposta não foi enviada.':'O apresentador ainda não abriu ou já encerrou a votação.',error:true};
  render();return;
 }
 pendingAnswerId=s.id;answerFeedback={quizId:s.id,message:'Enviando ao Firebase...',error:false};render();
 try {
  const value={option:i,at:Date.now()};
  if(online){
   if(!sessionRef)throw new Error('Conexão com a sala ainda não estabelecida. Tente novamente.');
   const ref=sessionRef.child('answers/'+s.id+'/'+id);
   const result=await ref.transaction(previous=>previous===null?value:undefined,undefined,false);
   const saved=result?.snapshot?.val?.() ?? (await ref.once('value')).val();
   if(!saved||Number(saved.option)!==i) {
    if(saved?.option!==undefined)throw new Error('Este aparelho já registrou outra alternativa. Não é permitido responder duas vezes.');
    throw new Error('O Firebase não confirmou sua resposta. Tente novamente.');
   }
   answerFeedback={quizId:s.id,message:result.committed?'Resposta registrada no Firebase.':'Resposta já registrada anteriormente.',error:false};
  } else {
   localPatch(obj=>{if(!obj.accepting||obj.reveal||obj.current!==SLIDES.findIndex(x=>x.id===s.id)||obj.answers?.[s.id]?.[id]!==undefined)return;obj.answers??={};obj.answers[s.id]??={};obj.answers[s.id][id]=value});
   answerFeedback={quizId:s.id,message:'Resposta registrada.',error:false};
  }
  toast('✓ Resposta registrada. '+(i===s.correct?'Você acertou!':'A resposta foi contabilizada.'));
 }catch(e){
  answerFeedback={quizId:s.id,message:'Resposta NÃO registrada: '+(e.message||'falha de conexão')+'. Verifique a internet e tente novamente.',error:true};
  toast(answerFeedback.message,true);
 }finally{pendingAnswerId='';render()}
}
function copy(v){if(navigator.clipboard?.writeText)navigator.clipboard.writeText(v).then(()=>toast('Link copiado.'),()=>toast('Copie o link exibido.',true));else{const inp=document.createElement('textarea');inp.value=v;document.body.appendChild(inp);inp.select();document.execCommand('copy');inp.remove();toast('Link copiado.')}}
function goJoin(){const val=($('#room')?.value||'').replace(/\D/g,'').slice(0,6);if(val.length!==6){toast('Informe um código de 6 dígitos.',true);return}const u=new URL(location.href);u.searchParams.set('modo','participar');u.searchParams.set('sala',val);u.searchParams.set('online','1');location.href=u.href}
async function dispatch(action){if(action==='prev-award')return awardStep(-1);if(action==='next-award')return awardStep(session?.current===SLIDES.findIndex(x=>x.id==='homenagem-expo')?1:0);if(action==='export-report')return reportExport();if(action==='add-award')return addAward();if(action==='clap')return sendClap();if(action==='cancel-exit')return hideExit();if(action==='confirm-exit'){hideExit();return goHome()}if(action==='toast-close'){toastEl.classList.add('hidden');return}if(action==='back')return goBack();if(action==='home')return goHome();if(action==='close')return goClose();if(action==='fullscreen')return stageFullScreen();if(action==='create-local')return createSession(false);if(action==='create-online')return createSession(true);if(action==='join')return goJoin();if(action==='copyJoin')return copy(joinLink());if(action==='copyHost')return copy(window.__expoHostLink||queryUrl('controle'));
if(!session)return;
if(action==='prev'||action==='next'){const dir=action==='next'?1:-1;const next=Math.max(0,Math.min(SLIDES.length-1,Number(session.current)+dir));return hostUpdate({current:next,activeQuizId:SLIDES[next].type==='quiz'?SLIDES[next].id:'',reveal:false,accepting:SLIDES[next].type==='quiz'})}
if(action==='toggle')return hostUpdate({accepting:!session.accepting,reveal:false});
if(action==='reveal')return hostUpdate({reveal:!session.reveal,accepting:false});
if(action==='clear'){if(!confirm('Apagar TODAS as respostas desta sessão da EXPO? Os demais sistemas e sessões não serão alterados.'))return;return hostUpdate({answers:{},current:0,activeQuizId:'',reveal:false,accepting:false})}}
document.addEventListener('click',e=>{if(e.target.classList?.contains('expo-exit-cover')){hideExit();return}const el=e.target.closest('[data-action],[data-answer],[data-jump],[data-award-jump],[data-award-remove],[data-program]');if(!el||el.disabled)return;if(el.hasAttribute('data-program'))return programGo(el.dataset.program);if(el.hasAttribute('data-award-jump'))return showAward(Number(el.dataset.awardJump));if(el.hasAttribute('data-award-remove'))return removeAward(Number(el.dataset.awardRemove));if(el.hasAttribute('data-action'))dispatch(el.dataset.action);else if(el.hasAttribute('data-answer'))answerAt(Number(el.dataset.answer));else if(el.hasAttribute('data-jump')&&hostAuthorized()){const n=Number(el.dataset.jump);hostUpdate({current:n,activeQuizId:SLIDES[n]?.type==='quiz'?SLIDES[n].id:'',reveal:false,accepting:SLIDES[n]?.type==='quiz'})}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.querySelector('.expo-exit-cover')){e.preventDefault();hideExit();return}if(e.key==='Enter'&&e.target?.id==='room')goJoin();if(e.key==='Escape'&&document.fullscreenElement){document.exitFullscreen?.();return}if(mode==='apresentacao'&&['ArrowLeft','ArrowRight'].includes(e.key)){toast('Use o controle do apresentador para navegar pelos slides.')}});
render();if(code)bind();
})();