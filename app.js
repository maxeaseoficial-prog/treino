const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const ICONS = {
  home:'<path d="M3 10.8 12 3l9 7.8v9.7a.5.5 0 0 1-.5.5h-5.7v-6.5H9.2V21H3.5a.5.5 0 0 1-.5-.5Z"/>',
  routines:'<rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  dumbbell:'<path d="M6.5 7.5v9M17.5 7.5v9M3.5 9.5v5M20.5 9.5v5M6.5 12h11"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4M17 3v4M3 10h18"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  flame:'<path d="M13.5 2.5c.3 3-1.2 4.3-2.5 5.8-1.1 1.2-2 2.4-1.5 4.2.5-1.1 1.2-1.8 2.2-2.6 0 2.2 1.8 3.4 2.5 5.2.6 1.6.2 3.7-1.4 5.3 4.3-.4 7.2-3.1 7.2-7.2 0-4.7-3.3-7.8-6.5-10.7Z"/><path d="M8.4 9.4C5.6 11.2 4 13.5 4 16.1c0 2.9 2.1 5.1 5.2 5.4-1.2-1.4-1.4-3-.9-4.3.5-1.4 1.4-2.2 1.7-3.5-1.2.7-1.8 1.5-2.1 2.2-.4-2.4.8-4.1.5-6.5Z"/>',
  chevron:'<path d="m9 18 6-6-6-6"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  play:'<path d="m8 5 11 7-11 7Z"/>',
  pause:'<path d="M9 5v14M15 5v14"/>',
  prev:'<path d="m15 18-6-6 6-6"/>',
  next:'<path d="m9 18 6-6-6-6"/>',
  close:'<path d="M6 6l12 12M18 6 6 18"/>',
  trash:'<path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20V7"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>'
};
function icon(name){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(ICONS[name]||'')+'</svg>'}

const exercises = [
{id:'breath',title:'Respiração diafragmática',category:'Coluna',region:'Respiração • Coluna',duration:60,rest:10,pose:'breathe',description:'Deite de costas, dobre os joelhos e deixe os pés apoiados. Inspire pelo nariz expandindo a barriga e solte o ar lentamente.',cue:'Inspire por 4 segundos e expire por 6. Relaxe ombros, mandíbula e lombar.'},
{id:'catcow',title:'Gato-Vaca',category:'Coluna',region:'Coluna inteira',duration:60,rest:15,pose:'catcow',description:'Em quatro apoios, alterne lentamente entre arredondar a coluna e abrir o peito, sem forçar o pescoço.',cue:'Movimento contínuo e lento. Pense em mobilizar vértebra por vértebra.'},
{id:'child',title:'Postura da Criança',category:'Coluna',region:'Lombar • Dorsal',duration:60,rest:15,pose:'child',description:'Leve o quadril em direção aos calcanhares e estenda os braços à frente, alongando as costas.',cue:'Mãos para frente e quadril para trás. Respire sem prender o ar.'},
{id:'childside',title:'Criança com alcance lateral',category:'Coluna',region:'Lateral da coluna',duration:80,rest:15,pose:'childside',description:'Na postura da criança, caminhe com as mãos para um lado e depois para o outro.',cue:'40 segundos de cada lado. Sinta a lateral das costas e costelas alongando.'},
{id:'thoracic',title:'Rotação torácica em 4 apoios',category:'Coluna',region:'Coluna torácica',duration:90,rest:20,pose:'thoracic',description:'Com uma mão atrás da cabeça, aproxime o cotovelo do chão e depois abra o peito levando-o para cima.',cue:'45 segundos de cada lado. Evite compensar girando a lombar.'},
{id:'openbook',title:'Open Book',category:'Coluna',region:'Torácica • Ombros',duration:90,rest:20,pose:'openbook',description:'Deitado de lado com joelhos dobrados, abra o braço de cima para o outro lado sem separar os joelhos.',cue:'45 segundos de cada lado. A rotação deve vir do tronco, não do quadril.'},
{id:'sphinx',title:'Esfinge / Cobra leve',category:'Coluna',region:'Lombar • Abdômen',duration:80,rest:20,pose:'sphinx',description:'De bruços, apoie os antebraços e eleve suavemente o peito, mantendo o quadril confortável no chão.',cue:'Faça duas entradas de 40 segundos. Não force amplitude se houver desconforto lombar.'},
{id:'walllat',title:'Alongamento de dorsal na parede',category:'Coluna',region:'Dorsal • Ombros',duration:60,rest:15,pose:'walllat',description:'Apoie as mãos e leve o quadril para trás, abaixando o peito até formar um L confortável com o corpo.',cue:'Mantenha a coluna longa e os braços ativos, sem afundar os ombros.'},
{id:'hipflex',title:'Flexor do quadril ajoelhado',category:'Quadril',region:'Quadril • Lombar',duration:90,rest:15,pose:'hipflex',description:'Em meio-ajoelhado, encaixe levemente a pelve e avance o quadril sem arquear a lombar.',cue:'45 segundos de cada lado. O alongamento deve aparecer na frente do quadril da perna ajoelhada.'},
{id:'hamstring',title:'Posterior de coxa',category:'Pernas',region:'Posterior • Lombar',duration:120,rest:15,pose:'hamstring',description:'Deitado, eleve uma perna e segure atrás da coxa. O joelho pode ficar levemente flexionado.',cue:'60 segundos por perna. Evite puxar a cabeça ou arredondar o pescoço.'},
{id:'figure4',title:'Figura 4',category:'Quadril',region:'Glúteos • Quadril',duration:120,rest:15,pose:'figure4',description:'Deitado, cruze um tornozelo sobre o joelho oposto e puxe a perna de apoio em direção ao peito.',cue:'60 segundos por lado. Mantenha o sacro apoiado no chão.'},
{id:'butterfly',title:'Borboleta',category:'Quadril',region:'Adutores • Quadril',duration:60,rest:15,pose:'butterfly',description:'Sente, una as solas dos pés e deixe os joelhos abrirem para os lados. Incline levemente o tronco.',cue:'Não empurre os joelhos com força. Alongue a coluna antes de inclinar.'},
{id:'squat',title:'Agachamento profundo sustentado',category:'Mobilidade',region:'Quadril • Tornozelo',duration:60,rest:20,pose:'squat',description:'Desça em um agachamento confortável, mantendo os calcanhares apoiados e o peito aberto.',cue:'Use apoio se precisar. Busque conforto e respiração, não profundidade máxima.'},
{id:'calf',title:'Alongamento de panturrilha',category:'Pernas',region:'Panturrilha',duration:80,rest:15,pose:'calf',description:'Com as mãos apoiadas, leve uma perna para trás e mantenha o calcanhar no chão.',cue:'40 segundos por lado. Pé de trás apontado para frente e joelho estendido sem travar.'},
{id:'twist',title:'Torção lombar deitado',category:'Coluna',region:'Coluna • Quadril',duration:120,rest:15,pose:'twist',description:'Deitado com braços abertos, leve os joelhos para um lado enquanto mantém os ombros relaxados no chão.',cue:'60 segundos por lado. Não force os joelhos até o chão.'},
{id:'neck',title:'Alongamento cervical',category:'Coluna',region:'Pescoço',duration:60,rest:15,pose:'neck',description:'Incline a cabeça suavemente para um lado, mantendo o ombro oposto relaxado, e depois troque.',cue:'30 segundos de cada lado. Sem puxar com força e sem fazer círculos grandes.'},
{id:'relax',title:'Relaxamento final',category:'Recuperação',region:'Corpo inteiro',duration:120,rest:0,pose:'relax',description:'Deite confortavelmente e solte a tensão da mandíbula, ombros, costas, quadril e pernas.',cue:'Inspire por 4 segundos e expire por 6 a 8. Finalize sem pressa.'}
];

const defaultRoutine = {
  id:'spine-flex-daily',
  name:'Coluna & Flexibilidade',
  description:'Rotina diária de corpo inteiro com foco em mobilidade da coluna, quadril e flexibilidade das pernas.',
  focus:'Coluna • Corpo inteiro',
  days:[0,1,2,3,4,5,6],
  exerciseIds:exercises.map(e=>e.id),
  builtIn:true
};

const store = {
  get(key,fallback){try{return JSON.parse(localStorage.getItem(key)) ?? fallback}catch{return fallback}},
  set(key,val){localStorage.setItem(key,JSON.stringify(val))}
};

const state = {
  view:'home',
  routines:store.get('mova_routines',[defaultRoutine]),
  history:store.get('mova_history',[]),
  settings:store.get('mova_settings',{name:'Henrique',sound:true}),
  detailRoutineId:null,
  search:'',
  calendarDate:new Date(),
  modal:null,
  workout:null,
  timerId:null
};
if(!state.routines.some(r=>r.id===defaultRoutine.id)){
  state.routines.unshift(defaultRoutine);
  store.set('mova_routines',state.routines);
}

const app = document.getElementById('app');

function formatSeconds(v){const m=Math.floor(v/60);const s=v%60;return String(m).padStart(2,'0')+':'+String(s).padStart(2,'0')}
function formatDuration(sec){const m=Math.round(sec/60);return m<60?m+' min':Math.floor(m/60)+'h '+(m%60)+'min'}
function exerciseById(id){return exercises.find(e=>e.id===id)}
function routineExercises(r){return r.exerciseIds.map(exerciseById).filter(Boolean)}
function routineSeconds(r){return routineExercises(r).reduce((a,e)=>a+e.duration+e.rest,0)}
function todayKey(d=new Date()){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function isDoneDate(date){const k=todayKey(date);return state.history.some(h=>h.date===k)}
function isPlannedDate(date){return state.routines.some(r=>r.days.includes(date.getDay()))}
function totalMinutes(){return Math.round(state.history.reduce((a,h)=>a+(h.durationSeconds||0),0)/60)}
function currentStreak(){
  const done=new Set(state.history.map(h=>h.date)); let streak=0; const d=new Date();
  if(!done.has(todayKey(d))){d.setDate(d.getDate()-1)}
  while(done.has(todayKey(d))){streak++;d.setDate(d.getDate()-1)}
  return streak;
}
function weekData(){
  const now=new Date(), day=now.getDay(), monday=new Date(now);
  monday.setDate(now.getDate()-((day+6)%7));
  return Array.from({length:7},(_,i)=>{const d=new Date(monday);d.setDate(monday.getDate()+i);return d});
}
function esc(str=''){return String(str).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}

function line(points){return '<polyline points="'+points.map(p=>p.join(',')).join(' ')+'" fill="none" stroke="#1b1b1b" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'}
function head(x,y,r=11){return '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="#F4C542" stroke="#1b1b1b" stroke-width="5"/>'}
function ground(y=174){return '<path d="M24 '+y+'H176" stroke="#D7D2C4" stroke-width="3" stroke-linecap="round"/>'}
function motion(path){return '<path d="'+path+'" fill="none" stroke="#E3B52E" stroke-width="4" stroke-linecap="round" stroke-dasharray="6 7"/>'}

function poseInner(type,stage){
  const end=stage==='after';
  if(type==='breathe') return ground()+head(100,42)+line([[100,54],[100,103],[86,142],[70,169]])+line([[100,103],[116,142],[132,169]])+(end?line([[100,73],[84,92],[100,105]])+line([[100,73],[116,92],[100,105]])+motion('M74 92 C58 75 60 55 77 45'):line([[100,72],[76,106],[68,142]])+line([[100,72],[124,106],[132,142]]));
  if(type==='catcow') return ground()+head(153,end?72:83,9)+line(end?[[145,78],[119,65],[88,64],[60,78]]:[[145,88],[118,100],[88,104],[60,83]])+line([[60,80],[52,116],[48,162]])+line([[88,end?66:102],[93,120],[96,162]])+line([[118,end?68:97],[127,126],[136,162]])+motion(end?'M70 48 C95 35 120 38 142 52':'M68 118 C95 132 120 127 143 109');
  if(type==='child'||type==='childside') return ground()+head(end?72:105,end?118:55,10)+line(end?[[80,120],[104,127],[130,140]]:[[105,67],[105,108],[86,137]])+line(end?[[104,127],[67,142],[38,type==='childside'?151:143]]:[[105,82],[82,111],[63,138]])+line(end?[[130,140],[148,160],[124,169]]:[[86,137],[118,151],[142,169]])+motion(end?'M122 102 C95 97 68 105 47 125':'M125 75 C111 90 98 104 84 120');
  if(type==='thoracic') return ground()+head(132,end?55:86,9)+line([[120,end?67:92],[96,92],[71,91]])+line([[71,91],[61,126],[58,164]])+line([[96,92],[100,126],[101,164]])+line(end?[[121,73],[150,53],[164,31]]:[[121,91],[140,75],[132,58]])+motion(end?'M118 44 C138 31 155 29 169 36':'M146 60 C156 77 156 92 147 106');
  if(type==='openbook') return ground(150)+head(62,113,10)+line([[73,116],[103,121],[132,131]])+line([[104,122],[132,145],[160,155]])+line(end?[[82,111],[112,82],[145,57]]:[[82,111],[112,109],[145,108]])+motion(end?'M112 105 C129 87 141 72 151 52':'M112 99 C130 91 146 91 162 99');
  if(type==='sphinx') return ground(154)+head(end?142:155,end?79:125,10)+line(end?[[132,88],[108,102],[78,125],[45,139]]:[[145,132],[114,137],[82,141],[46,142]])+line(end?[[112,101],[122,126],[104,151]]:[[120,138],[136,145],[151,153]])+line(end?[[99,108],[92,134],[77,151]]:[[100,140],[110,147],[119,153]])+motion(end?'M143 113 C149 96 148 80 141 66':'M149 112 C139 101 126 96 111 96');
  if(type==='walllat') return ground()+ '<path d="M169 28V174" stroke="#CFC9B8" stroke-width="5"/>'+head(end?73:118,end?88:46,10)+line(end?[[83,92],[110,91],[139,91],[165,91]]:[[118,58],[118,105],[102,139],[92,170]])+line(end?[[83,92],[74,128],[64,170]]:[[118,75],[140,92],[166,93]])+line(end?[[82,100],[97,136],[118,170]]:[[118,76],[142,93],[166,93]])+motion(end?'M121 62 C103 60 89 66 76 79':'M132 115 C115 112 100 106 88 95');
  if(type==='hipflex') return ground()+head(end?95:101,45,10)+line([[98,56],[96,101]])+line(end?[[96,101],[74,132],[63,171]]:[[96,101],[84,135],[80,171]])+line([[96,101],[129,133],[153,171]])+line([[98,72],[118,102],[132,121]])+line([[97,72],[78,105],[66,121]])+motion(end?'M101 112 C93 121 84 128 75 132':'M83 118 C88 109 92 101 96 93');
  if(type==='hamstring') return ground(157)+head(45,132,9)+line([[55,134],[87,139],[115,148]])+line(end?[[91,141],[107,100],[113,55]]:[[91,141],[122,147],[157,154]])+line([[88,141],[121,157],[156,158]])+line(end?[[76,136],[91,109],[105,81]]:[[76,136],[98,132],[116,135]])+motion(end?'M121 142 C137 114 132 78 119 55':'M116 130 C135 126 150 131 164 142');
  if(type==='figure4') return ground(158)+head(43,132,9)+line([[53,134],[87,139],[113,148]])+(end?line([[87,140],[111,119],[139,137],[153,157]])+line([[104,136],[132,151],[160,158]])+line([[72,136],[91,117],[112,118]]) : line([[88,140],[121,147],[157,157]])+line([[88,140],[117,157],[151,158]]));
  if(type==='butterfly') return ground()+head(100,43,10)+line(end?[[100,55],[93,92],[81,124]]:[[100,55],[100,104]])+line(end?[[81,124],[58,144],[79,166]]:[[100,104],[75,136],[58,166]])+line(end?[[81,124],[119,144],[98,166]]:[[100,104],[125,136],[142,166]])+line(end?[[92,88],[71,111],[61,138]]:[[100,79],[76,111],[66,138]])+line(end?[[94,89],[119,111],[128,138]]:[[100,79],[124,111],[134,138]])+motion(end?'M105 77 C99 92 93 104 84 115':'M116 85 C108 100 102 113 99 127');
  if(type==='squat') return ground()+head(100,end?78:42,10)+(end?line([[100,90],[95,120],[74,142]])+line([[95,120],[123,139],[145,166]])+line([[95,120],[67,139],[49,166]])+line([[99,99],[74,119],[58,132]])+line([[99,99],[126,119],[143,132]]):line([[100,54],[100,104],[83,139],[75,170]])+line([[100,104],[117,139],[125,170]])+line([[100,73],[78,102],[68,127]])+line([[100,73],[122,102],[132,127]]))+motion(end?'M82 83 C70 100 67 116 72 132':'M122 105 C129 118 131 134 127 148');
  if(type==='calf') return ground()+ '<path d="M166 38V174" stroke="#CFC9B8" stroke-width="5"/>'+head(end?112:100,end?52:43,10)+line(end?[[112,64],[123,105],[103,131]]:[[100,55],[100,105],[84,138]])+line(end?[[103,131],[75,149],[45,170]]:[[84,138],[72,170]])+line(end?[[103,131],[126,148],[151,170]]:[[100,105],[120,139],[137,170]])+line(end?[[118,78],[143,91],[165,92]]:[[100,74],[129,92],[165,92]])+motion(end?'M82 124 C70 135 59 145 49 156':'M80 120 C74 132 72 144 72 156');
  if(type==='twist') return ground(156)+head(45,125,9)+line([[55,128],[86,133],[112,141]])+line([[75,129],[54,106],[34,96]])+line([[75,129],[97,108],[120,98]])+(end?line([[108,141],[131,139],[154,122]])+line([[103,141],[126,154],[151,158]]):line([[108,141],[136,148],[159,158]])+line([[103,141],[128,158],[153,158]]))+motion(end?'M116 130 C137 119 150 108 161 92':'M117 128 C136 125 150 129 161 138');
  if(type==='neck') return ground()+head(end?88:100,end?49:43,11)+line(end?[[94,61],[100,105],[83,140],[75,170]]:[[100,55],[100,105],[83,140],[75,170]])+line([[100,105],[117,140],[125,170]])+line([[100,74],[77,105],[68,130]])+line([[100,74],[123,105],[132,130]])+motion(end?'M117 38 C109 32 100 32 91 36':'M123 49 C117 37 108 30 98 27');
  if(type==='relax') return ground(160)+head(45,132,9)+line([[55,134],[88,139],[119,148]])+(end?line([[81,138],[66,154],[48,160]])+line([[86,140],[111,159],[140,160]])+line([[85,139],[117,143],[151,153]]):line([[86,140],[116,153],[145,160]])+line([[86,140],[111,158],[135,160]]))+motion(end?'M54 111 C75 98 96 97 118 106':'M56 118 C76 111 94 112 110 120');
  return ground()+head(100,43)+line([[100,55],[100,105],[83,140],[75,170]])+line([[100,105],[117,140],[125,170]])+line([[100,74],[78,106],[70,133]])+line([[100,74],[122,106],[130,133]]);
}
function poseSvg(type,stage='after'){return '<svg class="pose-svg" viewBox="0 0 200 190" role="img" aria-label="Ilustração da posição do exercício">'+poseInner(type,stage)+'</svg>'}

function shell(content){
  const nav=[['home','Hoje','home'],['routines','Rotinas','routines'],['exercises','Exercícios','dumbbell'],['calendar','Calendário','calendar'],['profile','Progresso','user']];
  const week=weekData(), weekDone=week.filter(isDoneDate).length;
  return '<div class="shell"><aside class="sidebar"><div class="brand"><div class="brand-mark">M</div><div class="brand-copy"><strong>MOVA</strong><span>MOBILIDADE & ALONGAMENTO</span></div></div><nav class="nav">'+nav.map(n=>'<button class="nav-item '+(state.view===n[0]?'active':'')+'" data-action="nav" data-view="'+n[0]+'">'+icon(n[2])+'<span>'+n[1]+'</span></button>').join('')+'</nav><div class="sidebar-footer"><small>Meta da semana</small><strong>'+weekDone+' de 7 treinos</strong><div class="sidebar-progress"><span style="width:'+Math.round(weekDone/7*100)+'%"></span></div><p>'+currentStreak()+' dias de sequência</p></div></aside><main class="main">'+content+'</main><nav class="mobile-nav">'+nav.map(n=>'<button class="'+(state.view===n[0]?'active':'')+'" data-action="nav" data-view="'+n[0]+'">'+icon(n[2])+'<span>'+n[1]+'</span></button>').join('')+'</nav></div>';
}
function topbar(kicker,title,action){
  return '<header class="topbar"><div><div class="page-kicker">'+kicker+'</div><h1 class="page-title">'+title+'</h1></div><div class="top-actions">'+(action||'')+'<div class="avatar">'+esc(state.settings.name).charAt(0).toUpperCase()+'</div></div></header>';
}

function renderHome(){
  const routine=state.routines[0]||defaultRoutine, exs=routineExercises(routine), week=weekData();
  const weekDone=week.filter(isDoneDate).length;
  const preview=exs.slice(0,4).map((e,i)=>'<div class="mini-item"><div class="mini-index">'+String(i+1).padStart(2,'0')+'</div><div class="mini-copy"><strong>'+e.title+'</strong><span>'+formatSeconds(e.duration)+' • descanso '+e.rest+'s</span></div><span class="mini-arrow">›</span></div>').join('');
  const content=topbar('Seu espaço de movimento','Hoje','<button class="ghost-btn" data-action="new-routine">'+icon('plus')+' Novo treino</button>')+
  '<div class="home-grid grid"><div class="stack"><section class="hero-workout"><div class="hero-content"><span class="pill yellow">TREINO DE HOJE</span><h2>'+esc(routine.name)+'</h2><p>'+esc(routine.description)+'</p><div class="hero-meta"><span class="meta-chip">'+icon('clock')+formatDuration(routineSeconds(routine))+'</span><span class="meta-chip">'+icon('dumbbell')+exs.length+' exercícios</span><span class="meta-chip">'+icon('flame')+' foco em mobilidade</span></div><div class="hero-actions"><button class="primary-btn" data-action="start-workout" data-id="'+routine.id+'">'+icon('play')+' Começar agora</button><button class="ghost-btn" data-action="routine-detail" data-id="'+routine.id+'">Ver rotina</button></div></div></section>'+
  '<section><div class="section-head"><div><h3>Próximos exercícios</h3><p>Uma visão rápida do seu treino</p></div><button class="link-btn" data-action="routine-detail" data-id="'+routine.id+'">Ver todos</button></div><div class="card card-pad mini-list">'+preview+'</div></section></div>'+
  '<div class="stack"><section class="card stat-card"><div class="stat-label">Sua sequência</div><div class="stat-value">'+currentStreak()+' dias</div><div class="stat-note">Consistência acima de intensidade.</div><div class="week-strip">'+week.map((d,i)=>'<div class="day-dot '+(isDoneDate(d)?'done ':'')+(todayKey(d)===todayKey()?'today':'')+'"><span>'+d.getDate()+'</span><small>'+['seg','ter','qua','qui','sex','sáb','dom'][i]+'</small></div>').join('')+'</div></section>'+
  '<section class="card stat-card"><div class="stat-label">Nesta semana</div><div class="stat-value">'+weekDone+'/7</div><div class="stat-note">'+(weekDone===7?'Semana completa. Excelente consistência.':(7-weekDone)+' sessões para completar a meta semanal.')+'</div><div class="progress-track"><span style="width:'+Math.round(weekDone/7*100)+'%"></span></div></section>'+
  '<section class="card card-pad"><div class="section-head"><div><h3>Resumo</h3><p>Desde que você começou</p></div></div><div class="mini-list"><div class="mini-item"><div class="mini-index">'+state.history.length+'</div><div class="mini-copy"><strong>Treinos concluídos</strong><span>histórico total</span></div></div><div class="mini-item"><div class="mini-index">'+totalMinutes()+'</div><div class="mini-copy"><strong>Minutos em movimento</strong><span>tempo acumulado</span></div></div></div></section></div></div>';
  app.innerHTML=shell(content); renderModal();
}

function renderRoutines(){
  const cards=state.routines.map((r,i)=>'<article class="card routine-card '+(i===0?'featured':'')+'"><div class="routine-icon">'+icon('routines')+'</div><h3>'+esc(r.name)+'</h3><p>'+esc(r.description||'Treino personalizado de mobilidade e alongamento.')+'</p><div class="routine-meta"><span>'+routineExercises(r).length+' exercícios</span><span>'+formatDuration(routineSeconds(r))+'</span></div><button class="stretched" aria-label="Abrir '+esc(r.name)+'" data-action="routine-detail" data-id="'+r.id+'"></button></article>').join('');
  const content=topbar('Organize seu movimento','Rotinas','<button class="primary-btn" data-action="new-routine">'+icon('plus')+' Criar treino</button>')+
  '<div class="section-head"><div><h3>Seus treinos</h3><p>Monte rotinas usando os exercícios pré-cadastrados</p></div></div><div class="routine-grid">'+cards+'<article class="card routine-card"><div class="routine-icon">'+icon('plus')+'</div><h3>Novo treino</h3><p>Escolha exercícios, dias da semana e crie uma rotina com a sua cara.</p><div class="routine-meta"><span>Personalizar</span><span>+</span></div><button class="stretched" aria-label="Criar novo treino" data-action="new-routine"></button></article></div>';
  app.innerHTML=shell(content); renderModal();
}

function renderExercises(){
  const q=state.search.toLowerCase().trim();
  const list=exercises.filter(e=>!q||e.title.toLowerCase().includes(q)||e.region.toLowerCase().includes(q)||e.category.toLowerCase().includes(q));
  const cards=list.map(e=>'<article class="card exercise-card" data-action="exercise-detail" data-id="'+e.id+'"><div class="exercise-visual"><span class="exercise-tag">'+e.category+'</span>'+poseSvg(e.pose,'after')+'</div><div class="exercise-body"><h3>'+e.title+'</h3><p>'+e.region+'</p><div class="exercise-footer"><span>'+formatSeconds(e.duration)+'</span><span>descanso '+e.rest+'s</span></div></div></article>').join('');
  const content=topbar('Biblioteca','Exercícios')+'<div class="section-head"><div><h3>'+list.length+' exercícios cadastrados</h3><p>Clique em um exercício para ver a execução completa.</p></div><div class="searchbar">'+icon('search')+'<input id="exercise-search" value="'+esc(state.search)+'" placeholder="Buscar exercício..." /></div></div><div class="exercise-grid">'+cards+'</div>';
  app.innerHTML=shell(content); renderModal();
  const input=$('#exercise-search'); if(input){input.addEventListener('input',e=>{state.search=e.target.value;renderExercises();requestAnimationFrame(()=>{const n=$('#exercise-search');if(n){n.focus();n.setSelectionRange(n.value.length,n.value.length)}})})}
}

function renderRoutineDetail(id){
  const r=state.routines.find(x=>x.id===id); if(!r){state.view='routines';return render()}
  const exs=routineExercises(r);
  const rows=exs.map((e,i)=>'<div class="exercise-row"><div class="row-num">'+String(i+1).padStart(2,'0')+'</div><div><h4>'+e.title+'</h4><p>'+e.region+' • descanso '+e.rest+'s</p></div><div class="row-time">'+formatSeconds(e.duration)+'</div></div>').join('');
  const content=topbar('Sua rotina','Detalhes','<button class="ghost-btn" data-action="nav" data-view="routines">'+icon('prev')+' Voltar</button>')+
  '<section class="card detail-hero"><div><span class="pill soft">'+esc(r.focus||'Treino personalizado')+'</span><h2>'+esc(r.name)+'</h2><p>'+esc(r.description||'Treino personalizado.')+'</p><div class="detail-actions"><button class="primary-btn" data-action="start-workout" data-id="'+r.id+'">'+icon('play')+' Começar treino</button>'+(r.builtIn?'':'<button class="danger-btn" data-action="delete-routine" data-id="'+r.id+'">'+icon('trash')+' Excluir</button>')+'</div></div><div class="detail-score"><div><strong>'+exs.length+'</strong><span>EXERCÍCIOS</span></div></div></section>'+
  '<section style="margin-top:20px"><div class="section-head"><div><h3>Sequência completa</h3><p>'+formatDuration(routineSeconds(r))+' contando os descansos</p></div></div><div class="exercise-list">'+rows+'</div></section>';
  app.innerHTML=shell(content);
}

function renderCalendar(){
  const base=state.calendarDate, y=base.getFullYear(),m=base.getMonth();
  const first=new Date(y,m,1), start=new Date(y,m,1-((first.getDay()+6)%7));
  const cells=Array.from({length:42},(_,i)=>{const d=new Date(start);d.setDate(start.getDate()+i);return d});
  const names=['SEG','TER','QUA','QUI','SEX','SÁB','DOM'];
  const month=new Intl.DateTimeFormat('pt-BR',{month:'long',year:'numeric'}).format(base);
  const cal=names.map(n=>'<div class="cal-week">'+n+'</div>').join('')+cells.map(d=>'<div class="cal-day '+(d.getMonth()!==m?'muted ':'')+(todayKey(d)===todayKey()?'today ':'')+(isDoneDate(d)?'done ':'')+(isPlannedDate(d)?'planned':'')+'"><span class="num">'+d.getDate()+'</span><span class="check">'+(isDoneDate(d)?'✓':(isPlannedDate(d)?'·':''))+'</span></div>').join('');
  const monthDone=state.history.filter(h=>{const d=new Date(h.date+'T12:00:00');return d.getFullYear()===y&&d.getMonth()===m}).length;
  const content=topbar('Sua consistência','Calendário')+'<div class="calendar-layout"><section class="card calendar-card"><div class="calendar-head"><h3>'+month+'</h3><div class="calendar-nav"><button data-action="cal-prev">'+icon('prev')+'</button><button data-action="cal-next">'+icon('next')+'</button></div></div><div class="calendar-grid">'+cal+'</div></section><aside class="calendar-side stack"><section class="card stat-card"><div class="stat-label">Treinos neste mês</div><div class="stat-value">'+monthDone+'</div><div class="stat-note">Cada bloco amarelo representa um treino concluído.</div></section><section class="card stat-card"><div class="stat-label">Sequência atual</div><div class="stat-value">'+currentStreak()+' dias</div><div class="stat-note">Treinar pouco e sempre costuma ser melhor do que exagerar em um único dia.</div></section></aside></div>';
  app.innerHTML=shell(content);
}

function renderProfile(){
  const weekDone=weekData().filter(isDoneDate).length;
  const content=topbar('Seus números','Progresso')+'<div class="profile-grid"><section class="card big-stat"><div class="stat-label">Treinos concluídos</div><strong>'+state.history.length+'</strong><span>Total de sessões registradas no MOVA.</span><div class="progress-track"><span style="width:'+Math.min(100,state.history.length*5)+'%"></span></div></section><section class="card big-stat"><div class="stat-label">Tempo acumulado</div><strong>'+totalMinutes()+'</strong><span>Minutos dedicados à sua mobilidade.</span><div class="progress-track"><span style="width:'+Math.min(100,totalMinutes()/3)+'%"></span></div></section><section class="card big-stat"><div class="stat-label">Sequência atual</div><strong>'+currentStreak()+'</strong><span>Dias consecutivos com treino registrado.</span></section><section class="card big-stat"><div class="stat-label">Meta semanal</div><strong>'+weekDone+'/7</strong><span>Progresso desta semana.</span><div class="progress-track"><span style="width:'+Math.round(weekDone/7*100)+'%"></span></div></section></div><section class="card card-pad" style="margin-top:18px"><div class="section-head"><div><h3>Sobre o treino</h3><p>Segurança em primeiro lugar</p></div>'+icon('info')+'</div><p style="color:var(--muted);line-height:1.65;font-size:13px;margin:0">Alongamento deve gerar tensão confortável, não dor aguda. Se um exercício causar dormência, formigamento, perda de força ou dor irradiada, interrompa o movimento e procure avaliação profissional antes de insistir.</p></section>';
  app.innerHTML=shell(content);
}

function renderModal(){
  if(!state.modal)return;
  if(state.modal.type==='exercise'){
    const e=exerciseById(state.modal.id); if(!e)return;
    const html='<div class="modal-backdrop" data-action="close-modal"><div class="modal" data-modal-stop><div class="modal-head"><h3>'+e.title+'</h3><button class="icon-btn" data-action="close-modal">'+icon('close')+'</button></div><div class="modal-body"><div class="pose-pair" style="margin-bottom:20px"><div class="pose-card"><label>Início</label>'+poseSvg(e.pose,'before')+'</div><div class="pose-arrow">→</div><div class="pose-card"><label>Posição</label>'+poseSvg(e.pose,'after')+'</div></div><span class="pill soft">'+e.region+'</span><p style="line-height:1.7;color:var(--muted);font-size:14px">'+e.description+'</p><div class="cue-box" style="color:var(--ink)">'+e.cue+'</div><div class="exercise-footer" style="font-size:13px"><span>Exercício: '+formatSeconds(e.duration)+'</span><span>Descanso: '+e.rest+'s</span></div></div></div></div>';
    document.body.insertAdjacentHTML('beforeend',html);
  }
  if(state.modal.type==='newRoutine'){
    const html='<div class="modal-backdrop" data-action="close-modal"><div class="modal" data-modal-stop><div class="modal-head"><h3>Criar novo treino</h3><button class="icon-btn" data-action="close-modal">'+icon('close')+'</button></div><form id="routine-form"><div class="modal-body"><div class="field"><label>Nome do treino</label><input name="name" required maxlength="50" placeholder="Ex.: Mobilidade da manhã"></div><div class="field"><label>Descrição</label><textarea name="description" maxlength="180" placeholder="Qual é o objetivo desta rotina?"></textarea></div><div class="field"><label>Dias da semana</label><div class="days-select">'+['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'].map((n,i)=>'<label class="day-check"><input type="checkbox" name="days" value="'+i+'" '+(i>0&&i<6?'checked':'')+'><span>'+n+'</span></label>').join('')+'</div></div><div class="field"><label>Exercícios</label><div class="picker-list">'+exercises.map(e=>'<label class="pick-item"><input type="checkbox" name="exercises" value="'+e.id+'"><div><strong>'+e.title+'</strong><span>'+e.region+'</span></div><span>'+formatSeconds(e.duration)+'</span></label>').join('')+'</div></div></div><div class="modal-foot"><button type="button" class="ghost-btn" data-action="close-modal">Cancelar</button><button type="submit" class="primary-btn">Criar treino</button></div></form></div></div>';
    document.body.insertAdjacentHTML('beforeend',html);
    $('#routine-form').addEventListener('submit',createRoutineFromForm);
  }
}
function clearModals(){$$('.modal-backdrop').forEach(n=>n.remove())}

function createRoutineFromForm(ev){
  ev.preventDefault(); const fd=new FormData(ev.currentTarget);
  const exerciseIds=fd.getAll('exercises'), days=fd.getAll('days').map(Number);
  if(!exerciseIds.length)return toast('Escolha pelo menos um exercício.');
  if(!days.length)return toast('Escolha pelo menos um dia da semana.');
  const routine={id:'custom-'+Date.now(),name:String(fd.get('name')).trim(),description:String(fd.get('description')).trim()||'Treino personalizado de mobilidade e alongamento.',focus:'Personalizado',days,exerciseIds,builtIn:false};
  state.routines.push(routine); store.set('mova_routines',state.routines); state.modal=null; clearModals(); state.view='routines'; render(); toast('Treino criado com sucesso.');
}

function startWorkout(id){
  const routine=state.routines.find(r=>r.id===id); if(!routine)return;
  const exs=routineExercises(routine); if(!exs.length)return;
  stopTimer();
  state.workout={routine,index:0,phase:'exercise',remaining:exs[0].duration,running:false,activeSeconds:0};
  renderWorkout();
}
function workoutExercise(){return routineExercises(state.workout.routine)[state.workout.index]}
function stopTimer(){if(state.timerId){clearInterval(state.timerId);state.timerId=null}}
function toggleTimer(){
  if(!state.workout)return;
  state.workout.running=!state.workout.running;
  if(state.workout.running){
    stopTimer();
    state.timerId=setInterval(tick,1000);
  } else stopTimer();
  renderWorkout();
}
function tick(){
  const w=state.workout;if(!w||!w.running)return;
  w.remaining--;w.activeSeconds++;
  if(w.remaining<=0){chime();advancePhase()} else updateWorkoutClock();
}
function advancePhase(){
  const w=state.workout,e=workoutExercise(); chime();
  if(w.phase==='exercise'&&e.rest>0){w.phase='rest';w.remaining=e.rest;renderWorkout();return}
  nextExercise();
}
function nextExercise(){
  const w=state.workout, exs=routineExercises(w.routine);
  if(w.index>=exs.length-1){finishWorkout();return}
  w.index++;w.phase='exercise';w.remaining=exs[w.index].duration;renderWorkout();
}
function prevExercise(){
  const w=state.workout;if(!w||w.index===0)return;
  w.index--;w.phase='exercise';w.remaining=routineExercises(w.routine)[w.index].duration;renderWorkout();
}
function finishWorkout(){
  const w=state.workout;stopTimer();
  const entry={id:'h-'+Date.now(),routineId:w.routine.id,routineName:w.routine.name,date:todayKey(),durationSeconds:w.activeSeconds||routineSeconds(w.routine),exerciseCount:routineExercises(w.routine).length};
  state.history.unshift(entry);store.set('mova_history',state.history);
  const mins=Math.max(1,Math.round(entry.durationSeconds/60));
  app.insertAdjacentHTML('beforeend','<div class="complete-wrap"><div class="complete-card"><div class="complete-badge">✓</div><h2>Treino concluído.</h2><p>Você completou <strong>'+esc(w.routine.name)+'</strong>. O que constrói mobilidade é repetir bem, não forçar além do necessário.</p><div class="complete-stats"><div class="complete-stat"><strong>'+mins+'</strong><span>MINUTOS</span></div><div class="complete-stat"><strong>'+entry.exerciseCount+'</strong><span>EXERCÍCIOS</span></div><div class="complete-stat"><strong>'+currentStreak()+'</strong><span>DIAS DE SEQUÊNCIA</span></div></div><button class="primary-btn full" data-action="finish-close">Voltar para o início</button></div></div>');
}
function exitWorkout(){
  if(state.workout&&state.workout.activeSeconds>5&&!confirm('Sair do treino atual? O progresso desta sessão não será salvo.'))return;
  stopTimer();state.workout=null;state.view='home';render();
}
function chime(){
  if(!state.settings.sound)return;
  try{const C=window.AudioContext||window.webkitAudioContext;const ctx=new C();const o=ctx.createOscillator(),g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.frequency.setValueAtTime(660,ctx.currentTime);o.frequency.exponentialRampToValueAtTime(880,ctx.currentTime+.12);g.gain.setValueAtTime(.05,ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.24);o.start();o.stop(ctx.currentTime+.24)}catch{}
  if(navigator.vibrate)navigator.vibrate(70);
}
function updateWorkoutClock(){
  const w=state.workout,e=workoutExercise(); if(!w||!e)return;
  const total=w.phase==='rest'?e.rest:e.duration;
  const pct=Math.max(0,Math.min(100,w.remaining/Math.max(1,total)*100));
  const time=$('#workout-time'),restTime=$('#rest-big-time'),ring=$('.timer-ring'),count=$('.workout-count'),progress=$('.workout-progress span');
  if(time)time.textContent=formatSeconds(w.remaining);\n  if(restTime)restTime.textContent=formatSeconds(w.remaining);
  if(ring)ring.style.setProperty('--progress',pct+'%');
  if(count)count.textContent=(w.index+1)+' / '+routineExercises(w.routine).length;
  if(progress)progress.style.width=((w.index+(w.phase==='rest' ? .7:0))/routineExercises(w.routine).length*100)+'%';
}
function renderWorkout(){
  clearModals();
  const w=state.workout;if(!w)return render();
  const exs=routineExercises(w.routine),e=exs[w.index],isRest=w.phase==='rest',total=isRest?e.rest:e.duration,pct=w.remaining/Math.max(1,total)*100;
  app.innerHTML='<section class="workout-screen '+(isRest?'rest-screen':'')+'"><div class="workout-shell"><div class="workout-top"><button class="back" data-action="exit-workout">'+icon('close')+'</button><div class="workout-progress"><span style="width:'+((w.index+(isRest ? .7:0))/exs.length*100)+'%"></span></div><div class="workout-count">'+(w.index+1)+' / '+exs.length+'</div></div><div class="workout-main">'+
  (isRest?'<div class="pose-panel"><div><div class="rest-label">Descanso</div><div class="rest-big" id="rest-big-time">'+formatSeconds(w.remaining)+'</div><p>Respire. O próximo exercício é <strong>'+(exs[w.index+1]?exs[w.index+1].title:'a finalização')+'</strong>.</p></div></div>':'<div class="pose-panel"><div class="pose-header"><strong>Como executar</strong><span>INÍCIO → POSIÇÃO</span></div><div class="pose-pair"><div class="pose-card"><label>Início</label>'+poseSvg(e.pose,'before')+'</div><div class="pose-arrow">→</div><div class="pose-card"><label>Posição</label>'+poseSvg(e.pose,'after')+'</div></div></div>')+
  '<div class="workout-info"><span class="workout-phase">'+(isRest?'Recupere':'Exercício')+'</span><h1>'+(isRest?'Descanse':e.title)+'</h1><p class="workout-desc">'+(isRest?'Deixe a respiração normalizar e prepare-se para o próximo movimento.':e.description)+'</p><div class="cue-box">'+(isRest?'Não precisa se apressar. O cronômetro avança automaticamente.':e.cue)+'</div><div class="timer-wrap"><div class="timer-ring" style="--progress:'+pct+'%"><div class="timer-inner"><strong id="workout-time">'+formatSeconds(w.remaining)+'</strong><span>'+(isRest?'descanso':'tempo')+'</span></div></div><div class="timer-side"><small>'+w.routine.name+'</small><strong>'+formatDuration(routineSeconds(w.routine))+' • '+exs.length+' exercícios</strong></div></div><div class="workout-controls"><button class="round-btn" data-action="workout-prev" '+(w.index===0?'disabled':'')+'>'+icon('prev')+'</button><button class="play-btn" data-action="workout-toggle">'+icon(w.running?'pause':'play')+'</button><button class="round-btn" data-action="workout-next">'+icon('next')+'</button><button class="skip-btn" data-action="workout-next">'+(isRest?'Pular descanso':'Pular')+'</button></div></div></div></div></section>';
}
function deleteRoutine(id){
  const r=state.routines.find(x=>x.id===id);if(!r||r.builtIn)return;
  if(!confirm('Excluir o treino "'+r.name+'"?'))return;
  state.routines=state.routines.filter(x=>x.id!==id);store.set('mova_routines',state.routines);state.view='routines';state.detailRoutineId=null;render();toast('Treino excluído.');
}
function toast(msg){
  const root=document.getElementById('toast-root'); if(!root)return;
  const el=document.createElement('div');el.className='toast';el.textContent=msg;root.appendChild(el);setTimeout(()=>el.remove(),2600);
}

function render(){
  clearModals();
  if(state.workout)return renderWorkout();
  if(state.detailRoutineId)return renderRoutineDetail(state.detailRoutineId);
  if(state.view==='home')return renderHome();
  if(state.view==='routines')return renderRoutines();
  if(state.view==='exercises')return renderExercises();
  if(state.view==='calendar')return renderCalendar();
  if(state.view==='profile')return renderProfile();
  renderHome();
}

document.addEventListener('click',ev=>{
  const target=ev.target.closest('[data-action]'); if(!target)return;
  if(target.classList.contains('modal-backdrop') && ev.target!==target)return;
  const action=target.dataset.action;
  if(action==='nav'){state.view=target.dataset.view;state.detailRoutineId=null;state.modal=null;render()}
  if(action==='new-routine'){state.modal={type:'newRoutine'};render()}
  if(action==='routine-detail'){state.detailRoutineId=target.dataset.id;state.modal=null;render()}
  if(action==='exercise-detail'){state.modal={type:'exercise',id:target.dataset.id};renderModal()}
  if(action==='close-modal'){state.modal=null;clearModals()}
  if(action==='start-workout')startWorkout(target.dataset.id);
  if(action==='delete-routine')deleteRoutine(target.dataset.id);
  if(action==='cal-prev'){state.calendarDate=new Date(state.calendarDate.getFullYear(),state.calendarDate.getMonth()-1,1);renderCalendar()}
  if(action==='cal-next'){state.calendarDate=new Date(state.calendarDate.getFullYear(),state.calendarDate.getMonth()+1,1);renderCalendar()}
  if(action==='workout-toggle')toggleTimer();
  if(action==='workout-next'){if(state.workout.phase==='exercise'&&workoutExercise().rest>0){state.workout.phase='rest';state.workout.remaining=workoutExercise().rest;renderWorkout()}else nextExercise()}
  if(action==='workout-prev')prevExercise();
  if(action==='exit-workout')exitWorkout();
  if(action==='finish-close'){state.workout=null;state.view='home';render()}
});
document.addEventListener('click',ev=>{if(ev.target.matches('[data-modal-stop]'))ev.stopPropagation()});

if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}))}
render();