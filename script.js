const COUNTRIES=[
["Espanha","🇪🇸","Europa"],["Argentina","🇦🇷","América do Sul"],["França","🇫🇷","Europa"],["Inglaterra","🏴","Europa"],["Brasil","🇧🇷","América do Sul"],["Marrocos","🇲🇦","África"],["Portugal","🇵🇹","Europa"],["Bélgica","🇧🇪","Europa"],["Países Baixos","🇳🇱","Europa"],["México","🇲🇽","América do Norte"],["Colômbia","🇨🇴","América do Sul"],["Alemanha","🇩🇪","Europa"],["Croácia","🇭🇷","Europa"],["Suíça","🇨🇭","Europa"],["Itália","🇮🇹","Europa"],["Uruguai","🇺🇾","América do Sul"],["Estados Unidos","🇺🇸","América do Norte"],["Japão","🇯🇵","Ásia"],["Noruega","🇳🇴","Europa"],["Senegal","🇸🇳","África"],["Coreia do Sul","🇰🇷","Ásia"],["Equador","🇪🇨","América do Sul"],["Áustria","🇦🇹","Europa"],["Egito","🇪🇬","África"],["Irã","🇮🇷","Ásia"],["Austrália","🇦🇺","Oceania"],["Turquia","🇹🇷","Ásia"],["Argélia","🇩🇿","África"],["Escócia","🏴","Europa"],["Tunísia","🇹🇳","África"]
];

const SQUADS={
"Espanha":["Unai Simón","Carvajal","Laporte","Rodri","Pedri","Olmo","Lamine Yamal","Nico Williams","Morata","Fabián Ruiz","Dani Olmo"],
"Argentina":["Emiliano Martínez","Molina","Romero","Otamendi","De Paul","Enzo Fernández","Mac Allister","Messi","Lautaro Martínez","Julián Álvarez","Nico González"],
"França":["Maignan","Koundé","Saliba","Upamecano","Camavinga","Tchouaméni","Griezmann","Mbappé","Dembélé","Thuram","Kolo Muani"],
"Inglaterra":["Pickford","Walker","Stones","Bellingham","Rice","Foden","Saka","Kane","Palmer","Grealish","Trent"],
"Brasil":["Alisson","Marquinhos","Gabriel","Militão","Casemiro","Bruno Guimarães","Paquetá","Vinícius Jr.","Rodrygo","Raphinha","Neymar"],
"Marrocos":["Bounou","Hakimi","Aguerd","Mazraoui","Amrabat","Ounahi","Ziyech","En-Nesyri","Brahim Díaz","El Khannouss","Abde"],
"Portugal":["Diogo Costa","Cancelo","Rúben Dias","Pepe","Vitinha","Bruno Fernandes","Bernardo Silva","Rafael Leão","Cristiano Ronaldo","Diogo Jota","Gonçalo Ramos"],
"Bélgica":["Casteels","De Cuyper","Faes","De Bruyne","Tielemans","Doku","Lukaku","Trossard","Openda","Onana","Theate"],
"Países Baixos":["Verbruggen","Van Dijk","De Vrij","Ake","De Jong","Reijnders","Simons","Gakpo","Depay","Malen","Dumfries"],
"México":["Ochoa","Vásquez","Montes","Edson Álvarez","Chávez","Lozano","Santi Giménez","Antuna","Pineda","Huerta","Arteaga"],
"Colômbia":["Vargas","Muñoz","Davinson Sánchez","Mojica","Lerma","Richard Ríos","James Rodríguez","Luis Díaz","Jhon Córdoba","Arias","Borré"],
"Alemanha":["Neuer","Rüdiger","Tah","Kimmich","Gündogan","Musiala","Wirtz","Havertz","Sané","Füllkrug","Schlotterbeck"],
"Croácia":["Livaković","Gvardiol","Šutalo","Modrić","Kovačić","Brozović","Perišić","Kramarić","Budimir","Pašalić","Sosa"],
"Suíça":["Sommer","Akanji","Elvedi","Rodriguez","Xhaka","Freuler","Aebischer","Shaqiri","Embolo","Ndoye","Okafor"],
"Itália":["Donnarumma","Bastoni","Barella","Jorginho","Dimarco","Calafiori","Chiesa","Retegui","Raspadori","Frattesi","Pellegrini"],
"Uruguai":["Rochet","Araújo","Giménez","Olivera","Valverde","Ugarte","Bentancur","Darwin Núñez","Luis Suárez","De la Cruz","Pellistri"],
"Estados Unidos":["Turner","Dest","Richards","Robinson","Adams","McKennie","Pulisic","Reyna","Balogun","Weah","Musah"],
"Japão":["Suzuki","Tomiyasu","Itakura","Ito","Endo","Kubo","Mitoma","Minamino","Ueda","Doan","Morita"],
"Noruega":["Nyland","Ajer","Østigård","Meling","Ødegaard","Berge","Sørloth","Haaland","Bobb","Nusa","Ryerson"],
"Senegal":["Mendy","Koulibaly","Diallo","Sabaly","Gueye","Pape Matar Sarr","Mané","Ismaïla Sarr","Dia","Jackson","Ndiaye"],
"Coreia do Sul":["Jo Hyeon-woo","Kim Min-jae","Kim Young-gwon","Seol","Hwang In-beom","Lee Kang-in","Son Heung-min","Hwang Hee-chan","Cho Gue-sung","Lee Jae-sung","Kim Jin-su"],
"Equador":["Galíndez","Hincapié","Torres","Estupiñán","Caicedo","Paéz","Sarmiento","Enner Valencia","Plata","Minda","Preciado"],
"Áustria":["PentZ","Alaba","Danso","Posch","Laimer","Sabitzer","Baumgartner","Arnautović","Wimmer","Seiwald","Mwene"],
"Egito":["El Shenawy","Hegazy","Gabr","Hamdy","Elneny","Zizo","Salah","Marmoush","Mostafa Mohamed","Trezeguet","Hamed"],
"Irã":["Beiranvand","Hosseini","Kanani","Moharrami","Ezatolahi","Taremi","Azmoun","Jahanbakhsh","Gholizadeh","Ghoddos","Noorafkan"],
"Austrália":["Ryan","Souttar","Rowles","Behich","McGree","Irvine","Goodwin","Boyle","Duke","Metcalfe","Caceres"],
"Turquia":["Çakır","Demiral","Kabak","Kadıoğlu","Çalhanoğlu","Güler","Kökçü","Yılmaz","Ünder","Yüksek","Yazıcı"],
"Argélia":["M'Bolhi","Aït-Nouri","Mandi","Bensebaini","Bennacer","Mahrez","Amoura","Slimani","Brahimi","Bounedjah","Zerrouki"],
"Escócia":["Gunn","Robertson","Hendry","Tierney","McTominay","McGinn","Gilmour","Dykes","Adams","Doak","Shankland"],
"Tunísia":["Dahmen","Talbi","Bronn","Maaloul","Skhiri","Laïdouni","Msakni","Jaziri","Sliti","Khazri","Ben Romdhane"]
};

const POS={G:"Goleiro",DEF:"Defensor",MID:"Meia",ATT:"Atacante"};
const ALLOWED={G:["G"],DEF:["DEF"],MID:["MID","ATT"],ATT:["ATT","MID"]};
const COLORS=["#e63946","#4dabf7","#ffd43b","#51cf66","#b197fc","#ffa94d"];
const COUNTRIES_NAMES=COUNTRIES.map(x=>x[0]);

const MAP_POS={
"Espanha":[510,175],"França":[495,205],"Inglaterra":[485,145],"Portugal":[465,205],"Bélgica":[505,180],
"Países Baixos":[510,158],"Alemanha":[530,180],"Suíça":[525,215],"Itália":[530,250],"Croácia":[550,220],
"Áustria":[545,195],"Escócia":[465,125],"Noruega":[515,85],"Turquia":[585,245],"Marrocos":[465,285],
"Argélia":[475,320],"Tunísia":[520,305],"Egito":[565,320],"Senegal":[420,350],"Estados Unidos":[250,205],
"México":[220,270],"Colômbia":[315,375],"Equador":[300,405],"Brasil":[370,410],"Uruguai":[355,490],
"Argentina":[325,510],"Japão":[790,245],"Coreia do Sul":[755,270],"Irã":[650,270],"Austrália":[780,500]
};

const ADJ={
Espanha:["Portugal","França","Marrocos"],França:["Espanha","Bélgica","Países Baixos","Alemanha","Suíça","Itália","Inglaterra","Portugal"],
Inglaterra:["França","Escócia","Países Baixos"],Portugal:["Espanha"],Bélgica:["França","Países Baixos","Alemanha"],
"Países Baixos":["Bélgica","Alemanha","Inglaterra"],Alemanha:["Países Baixos","Bélgica","França","Suíça","Áustria","Croácia","Itália"],
Suíça:["França","Alemanha","Itália","Áustria"],Itália:["França","Suíça","Áustria","Croácia"],Croácia:["Itália","Áustria"],
Áustria:["Alemanha","Itália","Croácia","Suíça","Turquia"],Escócia:["Inglaterra"],Noruega:["Inglaterra"],
Turquia:["Áustria","Egito","Irã"],Marrocos:["Espanha","Argélia","Senegal"],Argélia:["Marrocos","Tunísia","Senegal"],
Tunísia:["Argélia","Itália","Egito"],Egito:["Tunísia","Turquia","Irã"],Senegal:["Marrocos","Argélia"],
"Estados Unidos":["México"],México:["Estados Unidos","Colômbia"],Colômbia:["México","Equador","Brasil"],
Equador:["Colômbia","Brasil"],Brasil:["Colômbia","Equador","Uruguai","Argentina"],Uruguai:["Brasil","Argentina"],
Argentina:["Uruguai","Brasil"],Japão:["Coreia do Sul"],"Coreia do Sul":["Japão"],Irã:["Turquia","Egito"],Austrália:[]
};
const SEA={
Espanha:["México","Brasil","Marrocos"],Portugal:["Brasil","Marrocos"],França:["Marrocos","Estados Unidos","Brasil"],
Inglaterra:["Estados Unidos"],"Países Baixos":["Estados Unidos"],Noruega:["Estados Unidos"],Marrocos:["Espanha","Portugal","França"],
Senegal:["Brasil"],Egito:["Turquia"],Turquia:["Egito","Itália"],"Estados Unidos":["Inglaterra","Espanha","França","Japão"],
México:["Espanha"],Colômbia:["Espanha"],Brasil:["Espanha","Portugal","França","Senegal"],Uruguai:["Portugal"],
Argentina:["Espanha"],Japão:["Estados Unidos","Austrália"],"Coreia do Sul":["Estados Unidos"],Austrália:["Japão","Estados Unidos"],Irã:["Austrália"]
};

const BAD_EVENTS=[
["Gripe no Elenco",p=>{let a=p.roster.filter(x=>x.starter&&!x.injured&&!x.red).sort(()=>Math.random()-.5).slice(0,2);a.forEach(x=>x.injured=1);return a.length?`${a.map(x=>x.name).join(" e ")} ficam indisponíveis na próxima partida.`:"Não havia dois titulares elegíveis."; }],
["Gramado Irregular",p=>{effectAdd(p,"overall",-5,1);return"Time mandante perde 5 de Overall total na próxima partida."; }],
["Cartão Vermelho na Coletiva",p=>{effectAdd(p,"noSubs",1,1);return"O treinador é suspenso; a escalação fica bloqueada no próximo confronto."; }],
["Crise no Vestiário",p=>{effectAdd(p,"defense",-3,1);return"A defesa perde 3 pontos de Overall por 1 rodada."; }],
["Escândalo de Arbitragem",p=>{effectAdd(p,"loseGoal",1,1);return"A equipe perderá 1 gol de vantagem na próxima simulação."; }],
["Rebelião de Fronteira",p=>{let a=owned(p).filter(x=>x!==p.country);if(!a.length)return"Nenhum território secundário para se rebelar.";let c=a[Math.floor(Math.random()*a.length)];STATE.owner[c]=null;p.territories=p.territories.filter(x=>x!==c);return`${c} se rebelou e voltou a ser território neutro (BOT).`; }],
["Jet Lag Severo",p=>{effectAdd(p,"attack",-4,1);return"Os atacantes perdem 4 de Overall no próximo ataque."; }],
["Lesão em Treino Intensivo",p=>{let x=p.roster.filter(x=>x.starter&&!x.injured&&!x.red&&x.nativePos==="ATT").sort((a,b)=>b.ovr-a.ovr)[0];if(!x)return"Nenhum atacante titular disponível.";x.injured=2;return`${x.name}, principal atacante, fica lesionado por 2 rodadas.`;}],
["Jejum de Gols",p=>{effectAdd(p,"goalChance",-0.15,1);return"A probabilidade de marcar gols cai 15% na próxima simulação."; }],
["Pressão da Torcida",p=>{let a=p.roster.filter(x=>!x.starter&&x.captured);if(!a.length)return"Nenhum reserva capturado disponível.";let x=a[Math.floor(Math.random()*a.length)];p.roster=p.roster.filter(y=>y.id!==x.id);return`${x.name} rescindiu e deixou o elenco.`; }]
];

const GOOD_EVENTS=[
["Efeito Torcida que Canta",p=>{effectAdd(p,"overall",3,1);return"Todos os titulares ganham +3 de Overall na próxima partida."; }],
["Promessa da Base",p=>{p.roster.push(makePlayer("Promessa da Base",80,"ATT",p.country));return"Uma revelação jovem surgiu: reserva extra com 80 de Overall."; }],
["Premiação do Bicho",p=>{effectAdd(p,"overall",5,1);return"Os atletas ganham +5 de Overall na partida atual."; }],
["Acordo Diplomático",p=>{effectAdd(p,"seaAnywhere",1,1);return"Por 1 turno, você pode atacar qualquer país acessível pelo mar."; }],
["Inspiração do Camisa 10",p=>{let x=p.roster.filter(x=>x.starter&&x.nativePos==="MID").sort((a,b)=>b.ovr-a.ovr)[0];if(!x)return"Sem meia titular disponível.";x.ovr+=5;return`${x.name} ganhou +5 de Overall e inspiração para criar jogadas.`;}],
["Análise Tática Perfeita",p=>{effectAdd(p,"defense",4,1);return"A defesa ganha +4 de Overall contra o próximo oponente."; }],
["Reforço de Última Hora",p=>{effectAdd(p,"neutralSteal",1,1);return"Você pode roubar 1 reserva de um país neutro vizinho."; }],
["Muralha Fechada",p=>{effectAdd(p,"saveBoost",.25,1);return"O goleiro reduz em 25% a chance de sofrer gols na próxima simulação."; }],
["Efeito Manto Sagrado",p=>{effectAdd(p,"permanent",2,99);return"+2 de Overall geral permanentemente."; }],
["Tratamento Milagroso",p=>{p.roster.forEach(x=>x.injured=0);return"Todos os jogadores lesionados foram recuperados."; }],
["Lei do Ex",p=>{effectAdd(p,"exBoost",7,1);return"Atletas contra seu antigo país recebem +7 de Overall no confronto."; }],
["Pênalti a Favor",p=>{effectAdd(p,"penalty5",1,1);return"O próximo jogo terá pênalti a favor aos 5 minutos."; }],
["Clima Favorável",p=>{effectAdd(p,"defense",3,1);return"Defensores recebem +3 de Overall no próximo confronto."; }],
["Espiões no Treino",p=>{effectAdd(p,"cancelBest",1,1);return"O melhor jogador rival será neutralizado na próxima partida."; }],
["Apoio da Federação",p=>{effectAdd(p,"extraLife",1,1);return"Se perder o próximo ataque, você não sofrerá a lesão obrigatória."; }],
["Preparação Física de Elite",p=>{effectAdd(p,"lateBoost",5,1);return"+5 de Overall extra nos últimos 15 minutos da próxima simulação."; }],
["Motivação de Vingança",p=>{effectAdd(p,"revenge",4,1);return"Se atacar quem já derrotou você, todo o time ganha +4 de Overall."; }],
["Liderança em Campo",p=>{effectAdd(p,"yellowShield",1,1);return"O primeiro amarelo recebido pelo seu time será anulado."; }],
["Público Recorde",p=>{effectAdd(p,"drawWin",1,1);return"Se houver empate, sua equipe será declarada vencedora."; }],
["Convocação Suprema",p=>{effectAdd(p,"freePosition",1,1);return"Um reserva poderá jogar em qualquer posição por 1 partida."; }]
];

let STATE={players:[],current:0,turn:1,owner:{},effects:{},log:[],zoom:1,panX:0,panY:0};
// O lock pertence à campanha inteira; nunca deve ser criado implicitamente.
let battleLocked=false;
// A versão anterior já usava 25M como fallback; a tabela torna essa regra explícita.
const COUNTRY_REWARD=Object.fromEntries(COUNTRIES.map(country=>[country[0],25]));
const EVENTS={bad:BAD_EVENTS,good:GOOD_EVENTS};

const $=id=>document.getElementById(id);
function showScreen(id){document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));$(id).classList.add("active")}
function toast(t){$("toast").textContent=t;$("toast").classList.add("toast-show");setTimeout(()=>$("toast").classList.remove("toast-show"),1900)}
function showModal(){ $("modal").classList.remove("hidden") }
function closeModal(){ $("modal").classList.add("hidden") }
function addLog(x){STATE.log.push(x)}

function makePlayer(name,ovr,nativePos,source){
  return{id:`${source}_${name}_${Math.random()}`,name,ovr,nativePos,pos:nativePos,starter:true,injured:0,yellow:0,red:false,source};
}
function createRoster(country){
  return (SQUADS[country]||Array.from({length:11},(_,i)=>`${country} Jogador ${i+1}`)).map((n,i)=>{
    const pos=i===0?"G":i<4?"DEF":i<7?"MID":"ATT";
    let ovr=74+Math.floor(Math.random()*18);
    if(country==="Noruega"&&n==="Haaland")ovr=94;
    if(["Messi","Cristiano Ronaldo","Neymar","Mbappé","Vinícius Jr.","Haaland","Salah"].includes(n))ovr=Math.max(ovr,91);
    return makePlayer(n,ovr,pos,country);
  });
}
function setupPlayers(){
  const n=+$("playerSlider").value;$("playerCount").textContent=n;
  $("playerSetup").innerHTML=Array.from({length:n},(_,i)=>`
  <div class="setup-card"><b>Treinador ${i+1}</b>
  <label>Nome</label><input class="trainer-name" value="Jogador ${i+1}">
  <label>País</label><select class="trainer-country">${COUNTRIES.map((x,j)=>`<option value="${x[0]}" ${j===i?"selected":""}>${x[1]} ${x[0]}</option>`).join("")}</select></div>`).join("");
  document.querySelectorAll(".trainer-country").forEach(x=>x.addEventListener("change",ensureUniqueCountries));ensureUniqueCountries();
}
function ensureUniqueCountries(){
  const selects=[...document.querySelectorAll(".trainer-country")],seen={};
  selects.forEach(s=>seen[s.value]=(seen[s.value]||0)+1);
  selects.forEach(s=>[...s.options].forEach(o=>o.disabled=o.value!==s.value&&seen[o.value]>0));
}
function startGame(){
  const selects=[...document.querySelectorAll(".trainer-country")],names=[...document.querySelectorAll(".trainer-name")];
  if(new Set(selects.map(x=>x.value)).size!==selects.length){toast("Escolha países diferentes.");return}
  STATE={players:[],current:0,turn:1,owner:{},effects:{},log:[],zoom:1,panX:0,panY:0};
  COUNTRIES_NAMES.forEach(c=>STATE.owner[c]=null);
  selects.forEach((s,i)=>{
    const p={id:i,name:names[i].value.trim()||`Jogador ${i+1}`,country:s.value,roster:createRoster(s.value),territories:[s.value],eliminated:false,defeatedBy:[]};
    STATE.players.push(p);STATE.owner[s.value]=i;
  });
  addLog("🏁 World War Cup começou.");
  showScreen("game");renderGame();
}

function current(){return STATE.players[STATE.current]}
function owned(p){return COUNTRIES_NAMES.filter(c=>STATE.owner[c]===p.id)}
function baseOVR(country){let r=createRoster(country);return Math.round(r.reduce((s,x)=>s+x.ovr,0)/r.length)}
function effectGet(p,k){return STATE.effects[p.id]?.[k]?.value||0}
function effectAdd(p,k,value,turns){if(!STATE.effects[p.id])STATE.effects[p.id]={};STATE.effects[p.id][k]={value,turns}}
function effectiveStrength(p){
  const a=p.roster.filter(x=>x.starter&&!x.injured&&!x.red);
  return Math.round(a.reduce((s,x)=>s+x.ovr,0)/Math.max(1,a.length)+effectGet(p,"overall")+effectGet(p,"permanent")+effectGet(p,"defense")+effectGet(p,"attack"));
}
function continents(p){
  const list=["Europa","África","Ásia","América do Norte","América do Sul","Oceania"];
  return list.filter(cont=>COUNTRIES.filter(x=>x[2]===cont).every(x=>STATE.owner[x[0]]===p.id)).length;
}
function canAttack(p,target){
  if(STATE.owner[target]===p.id)return false;
  if(effectGet(p,"seaAnywhere")>0){
    return (SEA[p.country]||[]).includes(target)||COUNTRIES.find(x=>x[0]===target)?.[2]!==COUNTRIES.find(x=>x[0]===p.country)?.[2];
  }
  return owned(p).some(c=>(ADJ[c]||[]).includes(target)||(SEA[c]||[]).includes(target));
}

function renderGame(){
  const p=current();
  $("turnInfo").textContent=`RODADA ${STATE.turn} • ${p.name} • ${p.country}`;
  $("trainerName").textContent=p.name;
  $("trainerCountry").textContent=`${COUNTRIES.find(x=>x[0]===p.country)?.[1]||""} ${p.country}`;
  $("trainerStats").innerHTML=`<p>🌍 ${owned(p).length} territórios</p><p>🏆 ${continents(p)} continentes</p><p>⚽ OVR ${effectiveStrength(p)}</p>`;
  $("rosterMini").innerHTML=p.roster.map(x=>`<div class="${x.injured?"injured":""}" style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #172832;font-size:11px"><span>${x.starter?"★":"🪑"} ${x.name}${x.injured?" 🩹":""}${x.red?" 🟥":""}</span><b>${x.ovr}</b></div>`).join("");
  renderMap();
}

function renderMap(){
  const W=1000,H=610;
  let svg=`<svg viewBox="0 0 ${W} ${H}">
  <rect width="100%" height="100%" fill="#061720"/>
  <g transform="translate(${STATE.panX} ${STATE.panY}) scale(${STATE.zoom})">
  <path d="M75 125Q170 65 300 130L290 255 145 285 70 220Z" fill="#0e2934"/>
  <path d="M285 315Q355 275 430 345L420 500 350 570 300 480Z" fill="#0e2934"/>
  <path d="M435 100Q530 65 630 105L610 250 500 260 445 210Z" fill="#0e2934"/>
  <path d="M565 270Q670 225 750 285L700 395 620 410 560 350Z" fill="#0e2934"/>
  <path d="M720 115Q830 100 915 170L865 280 775 295 715 230Z" fill="#0e2934"/>
  <path d="M690 390Q810 355 900 430L850 545 735 515 675 450Z" fill="#0e2934"/>
  <text x="495" y="55" class="continent">EUROPA</text><text x="125" y="88" class="continent">AMÉRICAS</text>
  <text x="730" y="85" class="continent">ÁSIA</text><text x="485" y="270" class="continent">ÁFRICA</text><text x="750" y="345" class="continent">OCEANIA</text>`;
  const lines=new Set();
  COUNTRIES_NAMES.forEach(c=>{
    [...(ADJ[c]||[]),...(SEA[c]||[])].forEach(t=>{
      if(!MAP_POS[t])return;const key=[c,t].sort().join("|");if(lines.has(key))return;lines.add(key);
      svg+=`<line class="route" x1="${MAP_POS[c][0]}" y1="${MAP_POS[c][1]}" x2="${MAP_POS[t][0]}" y2="${MAP_POS[t][1]}"/>`;
    });
  });
  COUNTRIES.forEach(info=>{
    const c=info[0],o=STATE.owner[c],[x,y]=MAP_POS[c],valid=canAttack(current(),c),color=o===null?"#4e606b":COLORS[o%COLORS.length];
    svg+=`<g class="node ${valid?"valid":""}" data-country="${c}" transform="translate(${x} ${y})">
    <circle r="${valid?20:16}" fill="${color}" stroke="#e7eef2" stroke-width="1"/>
    <text class="flag" y="4">${info[1]}</text><text class="country-name" y="30">${c}</text><text class="ovr" y="41">OVR ${baseOVR(c)}</text></g>`;
  });
  svg+=`</g>
  <g class="zoom-controls"><rect x="900" y="15" width="40" height="35" rx="7" fill="#172936"/><text x="920" y="39" fill="white" text-anchor="middle" font-size="21">+</text>
  <rect x="945" y="15" width="40" height="35" rx="7" fill="#172936"/><text x="965" y="39" fill="white" text-anchor="middle" font-size="21">−</text>
  <rect x="900" y="56" width="85" height="28" rx="7" fill="#172936"/><text x="942" y="75" fill="white" text-anchor="middle" font-size="10">RESET</text></g></svg>`;
  $("map").innerHTML=svg;
  document.querySelectorAll(".node").forEach(n=>n.onclick=()=>{const c=n.dataset.country;if(canAttack(current(),c))prepareAttack(c)});
  bindMapControls();
}

function bindMapControls(){
  const m=$("map"),z=m.querySelector(".zoom-controls"),rects=z.querySelectorAll("rect");
  rects[0].onclick=()=>{STATE.zoom=Math.min(2.7,STATE.zoom+.15);renderMap()};
  rects[1].onclick=()=>{STATE.zoom=Math.max(.65,STATE.zoom-.15);renderMap()};
  rects[2].onclick=()=>{STATE.zoom=1;STATE.panX=0;STATE.panY=0;renderMap()};
  let dragging=false,lx=0,ly=0;
  m.onmousedown=e=>{if(e.target.closest(".node,.zoom-controls"))return;dragging=true;lx=e.clientX;ly=e.clientY};
  window.onmouseup=()=>dragging=false;
  window.onmousemove=e=>{if(!dragging)return;STATE.panX+=(e.clientX-lx)/m.clientWidth*1000;STATE.panY+=(e.clientY-ly)/m.clientHeight*610;lx=e.clientX;ly=e.clientY;renderMap()};
  m.onwheel=e=>{e.preventDefault();STATE.zoom=Math.max(.65,Math.min(2.7,STATE.zoom+(e.deltaY<0?.12:-.12)));renderMap()};
}

function prepareAttack(target){
  const attacker=current(),owner=STATE.owner[target],defender=owner===null?{id:-1,name:"BOT",country:target,roster:createRoster(target)}:STATE.players[owner];
  $("modalContent").innerHTML=`<h2>⚔ ${attacker.country} x ${defender.country}</h2>
  <div class="event-box"><p><b>ATACANTE</b></p><h2>${attacker.country}</h2><p>⚽ Overall: <b>${effectiveStrength(attacker)}</b></p>
  <p><b>DEFENSOR</b></p><h2>${defender.country}</h2><p>⚽ Overall: <b>${owner===null?baseOVR(target):effectiveStrength(defender)}</b></p>
  <p class="muted">Vitória do atacante = território conquistado + direito de escolher 2 jogadores do perdedor.</p></div>
  <button id="startMatch" class="primary wide">⚽ COMEÇAR PARTIDA</button>`;
  showModal();$("startMatch").onclick=()=>simulateMatch(target);
}

function eligiblePlayers(t){return t.roster.filter(x=>x.starter&&!x.injured&&!x.red)}
function randomPlayer(t){
  const a=eligiblePlayers(t);return a[Math.floor(Math.random()*Math.max(1,a.length))];
}
function autoSub(t,write){
  const starters=t.roster.filter(x=>x.starter&&!x.injured&&!x.red);
  if(starters.length>=11)return;
  const bench=t.roster.filter(x=>!x.starter&&!x.injured&&!x.red);
  if(!bench.length){write(`🔻 ${t.country} não tem reserva compatível disponível.`);return}
  const x=bench.find(x=>x.nativePos!=="G")||bench[0];x.starter=true;
  write(`🔄 <b>Substituição automática:</b> ${x.name} entrou (OVR ${x.ovr}).`);
}

function simulateMatch(target){
  const a=current(),owner=STATE.owner[target],d=owner===null?{id:-1,name:"BOT",country:target,roster:createRoster(target)}:STATE.players[owner];
  let ga=0,gd=0,index=0;
  const minutes=[5,10,15,20,25,30,35,42,45,55,62,70,78,84,90];
  let chanceA=.44+(effectiveStrength(a)-(owner===null?baseOVR(target):effectiveStrength(d)))/320;
  chanceA=Math.max(.18,Math.min(.75,chanceA));
  if(effectGet(a,"goalChance"))chanceA+=effectGet(a,"goalChance");
  if(effectGet(a,"revenge")&&d.defeatedBy?.includes(a.id))chanceA+=.08;
  $("modalContent").innerHTML=`<div class="scoreboard"><div class="team-name">${a.country}</div><div id="score" class="score">0 × 0</div><div class="team-name">${d.country}</div></div><div id="timeline" class="timeline"><div class="match-event">🏟️ As equipes entram em campo...</div></div>`;
  showModal();
  const write=x=>{$("timeline").innerHTML+=`<div class="match-event">${x}</div>`;$("timeline").scrollTop=99999;$("score").textContent=`${ga} × ${gd}`};
  function tick(){
    if(index>=minutes.length){
      if(ga===gd){
        if(effectGet(a,"drawWin")>0){ga++;write(`🏆 <b>Público Recorde!</b> Empate convertido em vitória para ${a.country}.`)}
        else{
          const extra=Math.random();
          if(extra<.34){ga++;write(`⏱️ <b>Gol na prorrogação!</b> ${a.country} decide no fim.`)}
          else if(extra<.67){gd++;write(`⏱️ <b>Gol na prorrogação!</b> ${d.country} decide no fim.`)}
          else write(`⏱️ <b>Prorrogação dramática!</b> O empate permanece.`);
        }
      }
      if(effectGet(a,"loseGoal")>0&&ga>0){ga--;delete STATE.effects[a.id].loseGoal;write("⚠️ <b>Escândalo de Arbitragem:</b> um gol foi anulado.")}
      if(ga===0&&gd===0&&Math.random()<.75){ga=Math.random()<.5?1:2;gd=Math.random()<.5?1:0;write(`🔥 <b>Final de cinema!</b> O jogo ganhou emoção nos instantes finais.`)}
      write(`<b>Fim de jogo!</b> ${a.country} ${ga} × ${gd} ${d.country}`);
      setTimeout(()=>finishMatch(a,d,target,ga>gd),650);return;
    }
    const m=minutes[index++];
    if(m===45){write("<b>Intervalo...</b>");setTimeout(tick,1000);return}
    let r=Math.random();
    if(m===5&&effectGet(a,"penalty5")>0){ga++;write(`⚽ <b>Gol de Pênalti!</b> ${randomPlayer(a)?.name||"Craque"} (${a.country}) 5'`);delete STATE.effects[a.id].penalty5}
    else if(r<.12){
      const t=Math.random()<.53?a:d,x=randomPlayer(t);
      if(x&&effectGet(t,"yellowShield")>0){delete STATE.effects[t.id].yellowShield;write(`🟨 <b>${x.name}</b> recebeu amarelo, mas o capitão anulou o cartão! ${m}'`)}
      else if(x){x.yellow++;if(x.yellow>=2){x.red=true;x.starter=false;write(`🟨🟨🟥 <b>${x.name}</b> (${t.country}) EXPULSO! ${m}'`);autoSub(t,write)}else write(`🟨 <b>${x.name}</b> (${t.country}) ${m}'`)}
      else write(`${m}' — partida muito disputada.`);
    }else if(r<.31){
      const p=chanceA+(m>=76?effectGet(a,"lateBoost")/100:0);
      const t=Math.random()<p?a:d;
      if(t===d&&effectGet(a,"saveBoost")>0&&Math.random()<effectGet(a,"saveBoost"))write(`🧤 <b>Defesa milagrosa!</b> ${d.country} evita o gol em ${m}'.`);
      else if(t===a&&ga<6){ga++;write(`⚽ <b>Gol!</b> ${randomPlayer(a)?.name||"Craque"} (${a.country}) ${m}'`)}
      else if(t===d&&gd<6){gd++;write(`⚽ <b>Gol!</b> ${randomPlayer(d)?.name||"Craque"} (${d.country}) ${m}'`)}
      else write(`${m}' — pressão intensa.`);
    }else if(r<.36){
      const t=Math.random()<.5?a:d,x=randomPlayer(t);if(x)write(`🔁 ${m}' — ${x.name} quase marca depois de uma grande jogada.`);else write(`${m}' — jogo truncado.`);
    }else write(`${m}' — ${a.country} ${ga} × ${gd} ${d.country}.`);
    setTimeout(tick,780);
  }
  tick();
}

function finishMatch(a,d,target,attackerWon){
  if(attackerWon){
    const old=STATE.owner[target];STATE.owner[target]=a.id;if(!a.territories.includes(target))a.territories.push(target);
    if(old!==null){const loser=STATE.players[old];loser.territories=loser.territories.filter(x=>x!==target);loser.defeatedBy.push(a.id);chooseTwoSteals(a,loser,target)}
    else chooseTwoSteals(a,d,target);
  }else{
    if(d.id>=0&&!effectGet(a,"extraLife")){
      const pool=d.roster.filter(x=>!x.injured&&!x.red),x=pool[Math.floor(Math.random()*Math.max(1,pool.length))];
      if(x){x.injured=1;addLog(`🩹 ${x.name} (${d.country}) ficou lesionado por 1 rodada.`)}
    }else if(d.id>=0&&effectGet(a,"extraLife")){delete STATE.effects[a.id].extraLife}
    addLog(`🛡️ ${d.country} defendeu ${target} contra ${a.country}.`);
    endRound();
  }
}

function chooseTwoSteals(winner,loser,target){
  const source=loser?.roster||createRoster(target);
  const candidates=source.filter(x=>!x.injured&&!x.red);
  $("modalContent").innerHTML=`<h2>🏆 ${target} CONQUISTADO!</h2>
  <p>Escolha exatamente <b>2 jogadores</b> da seleção derrotada. Isso também funciona contra BOTs.</p>
  <div class="steal-list" id="stealList">${candidates.map(x=>`<label class="steal-player"><input type="checkbox" value="${x.id}"><b>${x.name}</b><span>${POS[x.nativePos]}</span><strong>${x.ovr}</strong></label>`).join("")}</div>
  <button id="captureBtn" class="primary wide">CAPTURAR 2 JOGADORES</button>`;
  showModal();
  $("captureBtn").onclick=()=>{
    const ids=[...document.querySelectorAll("#stealList input:checked")].map(x=>x.value);
    if(ids.length!==2){toast("Você precisa escolher exatamente 2 jogadores.");return}
    const got=candidates.filter(x=>ids.includes(x.id));
    got.forEach(x=>{if(loser)loser.roster=loser.roster.filter(y=>y.id!==x.id);x.source=winner.country;x.starter=false;x.red=false;x.yellow=0;winner.roster.push(x)});
    addLog(`🏆 ${winner.country} conquistou ${target} e roubou ${got.map(x=>x.name).join(" e ")}.`);
    if(loser&&owned(loser).length===0)eliminate(loser);
    $("modalContent").innerHTML=`<div class="event-box"><div class="event-title good">👑 TERRITÓRIO CONQUISTADO</div>
    <p><b>${winner.country}</b> agora controla <b>${target}</b>.</p><p>Jogadores capturados:</p>${got.map(x=>`<p>⚽ <b>${x.name}</b> — ${POS[x.nativePos]} — OVR ${x.ovr}</p>`).join("")}</div>
    <button id="continueBtn" class="primary wide">CONTINUAR</button>`;
    $("continueBtn").onclick=endRound;
  };
}

function eliminate(p){if(p.eliminated)return;p.eliminated=true;addLog(`💀 ${p.name} foi eliminado por ficar sem territórios.`);toast(`${p.name} foi eliminado!`)}
function randomEvent(){
  const p=current(),pool=Math.random()<.34?BAD_EVENTS:GOOD_EVENTS,[title,fn]=pool[Math.floor(Math.random()*pool.length)],description=fn(p);
  addLog(`${pool===BAD_EVENTS?"⚠️":"✨"} ${title}: ${description}`);
  $("modalContent").innerHTML=`<div class="event-box"><div class="event-title ${pool===BAD_EVENTS?"bad":"good"}">${pool===BAD_EVENTS?"⚠️":"✨"} ${title}</div><p>${description}</p><button id="eventContinue" class="primary wide">CONTINUAR</button></div>`;
  showModal();$("eventContinue").onclick=()=>{advanceTurn();closeModal()};
}
function advanceTurn(){
  Object.values(STATE.effects).forEach(e=>Object.keys(e).forEach(k=>{if(e[k].turns<90){e[k].turns--;if(e[k].turns<=0)delete e[k]}}));
  STATE.players.forEach(p=>p.roster.forEach(x=>{if(x.injured>0)x.injured--;x.yellow=0;x.red=false}));
  let tries=0;do{STATE.current=(STATE.current+1)%STATE.players.length;tries++}while(STATE.players[STATE.current].eliminated&&tries<=STATE.players.length);
  if(STATE.current===0)STATE.turn++;
  renderGame();
  checkVictory();
}
function endRound(){closeModal();renderGame();if(checkVictory())return;setTimeout(randomEvent,450)}
function checkVictory(){
  const alive=STATE.players.filter(p=>!p.eliminated);
  if(alive.length===1){victory(alive[0]);return true}
  const p=current();if(continents(p)>=3){victory(p);return true}
  return false;
}
function victory(p){
  $("modalContent").innerHTML=`<div class="event-box"><div class="event-title good">🏆 VITÓRIA!</div><h2>${p.country} — ${p.name}</h2><p>Você venceu a World War Cup!</p><p>Territórios: ${owned(p).length} • Continentes: ${continents(p)}</p><button class="primary wide" onclick="location.reload()">NOVA GUERRA</button></div>`;
  showModal();
}

function manageTeam(){
  const p=current();if(effectGet(p,"noSubs")>0){toast("A escalação está bloqueada por um evento negativo.");return}
  const starters=p.roster.filter(x=>x.starter),bench=p.roster.filter(x=>!x.starter);
  $("modalContent").innerHTML=`<h2>👥 ${p.country} — ${starters.length}/11 TITULARES</h2>
  <p class="muted">Seu elenco pode ter mais de 11 jogadores, mas somente 11 podem estar em campo.</p>
  <div class="rosters"><div class="roster-box"><h3>TITULARES</h3>${starters.map(playerRow).join("")}</div><div class="roster-box"><h3>BANCO</h3>${bench.map(playerRow).join("")}</div></div>`;
  showModal();bindRosterActions();
}
function playerRow(x){
  const opts=ALLOWED[x.nativePos].map(v=>`<option value="${v}" ${x.pos===v?"selected":""}>${POS[v]}</option>`).join("");
  return `<div class="player-row"><span>${x.nativePos==="G"?"🧤":"⚽"}</span><span><b>${x.name}</b><br><small>${x.injured?"LESIONADO":x.red?"EXPULSO":x.starter?"TITULAR":"BANCO"} • ${POS[x.nativePos]}</small></span>
  <select data-pos="${x.id}" ${x.injured||x.red?"disabled":""}>${opts}</select><b>${x.ovr}</b><button data-toggle="${x.id}" ${x.injured||x.red?"disabled":""}>${x.starter?"BANCO":"ENTRAR"}</button></div>`;
}
function bindRosterActions(){
  document.querySelectorAll("[data-toggle]").forEach(b=>b.onclick=()=>{
    const p=current(),x=p.roster.find(y=>y.id===b.dataset.toggle);if(!x)return;
    if(!x.starter&&p.roster.filter(y=>y.starter).length>=11){toast("Limite máximo de 11 titulares.");return}
    x.starter=!x.starter;manageTeam();
  });
  document.querySelectorAll("[data-pos]").forEach(s=>s.onchange=()=>{
    const x=current().roster.find(y=>y.id===s.dataset.pos);if(x)x.pos=s.value;
  });
}
function showLog(){
  $("modalContent").innerHTML=`<h2>📜 HISTÓRICO DA GUERRA</h2><div class="timeline">${STATE.log.map(x=>`<div class="match-event">${x}</div>`).join("")||"Sem acontecimentos."}</div>`;
  showModal();
}

$("playBtn").onclick=()=>{showScreen("setup");setupPlayers()};
$("tutorialBtn").onclick=()=>showScreen("tutorial");
$("playerSlider").oninput=setupPlayers;
$("startBtn").onclick=startGame;
$("manageBtn").onclick=manageTeam;
$("logBtn").onclick=showLog;
$("closeModal").onclick=closeModal;
document.querySelectorAll(".back,[data-screen]").forEach(b=>b.onclick=()=>showScreen(b.dataset.screen));
setupPlayers();

/* =========================
   WWC UPDATE LAYER v4
   ========================= */

const NAMES=typeof COUNTRIES_NAMES!=="undefined"?COUNTRIES_NAMES:COUNTRIES.map(x=>x[0]);
const FLAGS=Object.fromEntries(COUNTRIES.map(x=>[x[0],x[1]]));
const MAP_POS_V4={"Espanha":[375,135],"Portugal":[300,205],"França":[475,205],"Inglaterra":[520,90],"Escócia":[475,45],"Bélgica":[570,145],"Países Baixos":[625,95],"Alemanha":[670,165],"Suíça":[640,225],"Itália":[690,285],"Croácia":[745,235],"Áustria":[725,185],"Noruega":[625,35],"Turquia":[815,275],"Marrocos":[390,345],"Argélia":[500,375],"Tunísia":[600,350],"Egito":[720,365],"Senegal":[335,430],"Estados Unidos":[150,210],"México":[155,320],"Colômbia":[275,445],"Equador":[250,500],"Brasil":[385,520],"Uruguai":[365,575],"Argentina":[285,600],"Japão":[920,235],"Coreia do Sul":[860,315],"Irã":[790,315],"Austrália":[850,545]};
Object.assign(MAP_POS,MAP_POS_V4);
Object.assign(SEA,{"Espanha":["Marrocos","Brasil","México","Estados Unidos","Portugal"],"Portugal":["Marrocos","Brasil","Estados Unidos"],"França":["Marrocos","Brasil","Estados Unidos"],"Inglaterra":["Estados Unidos","Marrocos"],"Países Baixos":["Estados Unidos","Brasil"],"Noruega":["Estados Unidos","Japão"],"Marrocos":["Espanha","Portugal","França","Brasil"],"Senegal":["Brasil","Portugal"],"Egito":["Turquia","Itália","Austrália"],"Turquia":["Egito","Itália"],"Estados Unidos":["Inglaterra","Espanha","França","Japão","Austrália"],"México":["Espanha","Portugal"],"Colômbia":["Espanha","Portugal"],"Brasil":["Espanha","Portugal","França","Senegal","Marrocos","Estados Unidos"],"Uruguai":["Portugal"],"Argentina":["Espanha","Portugal"],"Japão":["Estados Unidos","Austrália","Noruega"],"Coreia do Sul":["Estados Unidos","Austrália"],"Austrália":["Japão","Estados Unidos","Noruega","Egito"],"Irã":["Austrália","Egito"]});

const FORMATIONS_V4={
  "433":{G:1,DEF:4,MID:3,ATT:3,label:"4-3-3 • Média"},
  "442":{G:1,DEF:4,MID:4,ATT:2,label:"4-4-2 • Defesa"},
  "353":{G:1,DEF:3,MID:5,ATT:3,label:"3-5-3 • Ataque"},
  "CUSTOM":{label:"Tática Personalizada"}
};
const ALLOWED_V4={G:["G"],DEF:["DEF","MID"],MID:["MID","ATT"],ATT:["ATT","MID"]};
const FC27_EXACT={
  "Kylian Mbappé":91,"Erling Haaland":91,"Rodri":90,"Ousmane Dembélé":90,"Vitinha":90,"Pedri":90,"Lamine Yamal":90,
  "Jude Bellingham":90,"Gabriel":89,"Donnarumma":89,"Bruno Fernandes":89,"Lionel Messi":89,"Messi":89,"Vinícius Jr.":89,
  "Vinicius Jr.":89,"Courtois":90,"Thibaut Courtois":90,"Declan Rice":88,"William Saliba":88,"Saliba":88,"Virgil van Dijk":88,
  "Van Dijk":88,"Achraf Hakimi":88,"Hakimi":88,"Joshua Kimmich":88,"Kimmich":88,"Luis Díaz":88,"Alexander Isak":88,
  "Harry Kane":90,"Kevin De Bruyne":87,"Nico González":81,"Raphinha":89,"Alisson":89,"Gabriel Magalhães":89,"Marquinhos":87
};
const POSITION_V4={
  "Rodri":"MID","Casemiro":"MID","Bruno Guimarães":"MID","Declan Rice":"MID","Joshua Kimmich":"MID","Kimmich":"MID","Kroos":"MID",
  "Edson Álvarez":"MID","McTominay":"MID","Valverde":"MID","Ugarte":"MID","De Jong":"MID","Fabián Ruiz":"MID","Zizo":"MID",
  "Xhaka":"MID","Jorginho":"MID","Gündogan":"MID","Gundogan":"MID","Enzo Fernández":"MID","Mac Allister":"MID"
};
const TEAM_BASE_V4={"Espanha":85,"Argentina":85,"França":86,"Inglaterra":85,"Brasil":86,"Marrocos":80,"Portugal":84,"Bélgica":81,"Países Baixos":83,"México":77,"Colômbia":81,"Alemanha":84,"Croácia":80,"Suíça":78,"Itália":83,"Uruguai":81,"Estados Unidos":77,"Japão":78,"Noruega":79,"Senegal":78,"Coreia do Sul":78,"Equador":76,"Áustria":78,"Egito":74,"Irã":73,"Austrália":74,"Turquia":78,"Argélia":75,"Escócia":75,"Tunísia":72};
const MARKET_V4=[
  ["Zlatan Ibrahimović",93,"ATT"],["Ronaldinho",95,"MID"],["Ronaldo Nazário",97,"ATT"],["Romário",94,"ATT"],["Johan Cruyff",96,"ATT"],
  ["Franz Beckenbauer",96,"DEF"],["Paolo Maldini",95,"DEF"],["Gianluigi Buffon",94,"G"],["Iker Casillas",93,"G"],["Xavi",94,"MID"],
  ["Andrés Iniesta",95,"MID"],["Thierry Henry",95,"ATT"],["Zinedine Zidane",97,"MID"],["Kaká",94,"MID"],["Roberto Carlos",94,"DEF"],
  ["Cafu",93,"DEF"],["George Best",94,"ATT"],["Gerd Müller",95,"ATT"],["Lev Yashin",97,"G"],["Eusébio",96,"ATT"]
].map((x,i)=>({id:"mkt_"+i,name:x[0],ovr:x[1],pos:x[2],sold:false,source:"Mercado"}));
const LEGENDS_V4={"Brasil":["Pelé",99,"ATT"],"Argentina":["Diego Maradona",98,"MID"],"França":["Zinedine Zidane",97,"MID"],"Espanha":["Xavi",94,"MID"],"Inglaterra":["George Best",94,"ATT"],"Portugal":["Eusébio",96,"ATT"],"Itália":["Paolo Maldini",95,"DEF"],"Alemanha":["Franz Beckenbauer",96,"DEF"],"Países Baixos":["Johan Cruyff",96,"ATT"],"Uruguai":["Luis Suárez",94,"ATT"],"Noruega":["Erling Haaland",94,"ATT"],"Colômbia":["Carlos Valderrama",92,"MID"],"Croácia":["Davor Šuker",91,"ATT"],"México":["Hugo Sánchez",94,"ATT"],"Marrocos":["Ahmed Faras",89,"ATT"]};

function v4MakePlayer(name,ovr,nativePos,source,starter=false,id=null){
  return {id:id||`p_${Date.now()}_${Math.random()}`,name,ovr,nativePos,pos:nativePos,starter,injured:0,yellow:0,red:false,source,goals:0,market:false,legend:false};
}
function v4CreateRoster(country){
  const source=(typeof SQUADS!=="undefined"&&SQUADS[country])||[];
  const teamBase=TEAM_BASE_V4[country]||75;
  const initialPositions=["G","DEF","DEF","DEF","MID","MID","MID","ATT","ATT","ATT","ATT"];
  const list=source.map((name,i)=>{
    let nativePos=POSITION_V4[name]||(initialPositions[i]);
    let ovr=FC27_EXACT[name];
    if(ovr==null)ovr=teamBase+(nativePos==="G"?0:nativePos==="DEF"?1:nativePos==="MID"?2:1)-Math.max(0,Math.floor((i-7)/3));
    const player=v4MakePlayer(name,ovr,nativePos,country,true);player.pos=initialPositions[i]||nativePos;return player;
  });
  const reserves=[
    ["Reserva Goleiro",Math.max(68,teamBase-3),"G"],["Reserva Defesa",Math.max(68,teamBase-4),"DEF"],
    ["Reserva Meia",Math.max(68,teamBase-4),"MID"],["Reserva Atacante",Math.max(68,teamBase-4),"ATT"]
  ];
  reserves.forEach(x=>list.push(v4MakePlayer(x[0],x[1],x[2],country,false)));
  return list;
}

function v4GetBot(country){if(!STATE.botRosters)STATE.botRosters={};if(!STATE.botRosters[country])STATE.botRosters[country]=v4CreateRoster(country);return STATE.botRosters[country]}
function v4Effect(p,k){return STATE.effects?.[p.id]?.[k]?.value||0}
function v4AddEffect(p,k,v,turns=1){if(!STATE.effects[p.id])STATE.effects[p.id]={};STATE.effects[p.id][k]={value:v,turns};}
function v4Counts(p){const c={G:0,DEF:0,MID:0,ATT:0};p.roster.filter(x=>x.starter&&!x.injured&&!x.red).forEach(x=>c[x.pos]++);return c}
function v4AutoSub(p,write){
  let active=p.roster.filter(x=>x.starter&&!x.injured&&!x.red);
  while(active.length<11){
    const bench=p.roster.filter(x=>!x.starter&&!x.injured&&!x.red);if(!bench.length)break;
    const needGK=!active.some(x=>x.nativePos==="G");
    let sub=needGK?bench.find(x=>x.nativePos==="G"):null;
    if(!sub)sub=bench.find(x=>active.some(a=>a.pos===x.nativePos));
    if(!sub)sub=bench.find(x=>x.nativePos!=="G")||bench[0];
    sub.starter=true;active.push(sub);if(write)write(`🔄 <b>Substituição automática:</b> ${sub.name} entrou — OVR ${sub.ovr}.`);
  }
}
function v4FormationValid(p){const c=v4Counts(p);if(p.formation==="CUSTOM")return c.G===1&&c.G+c.DEF+c.MID+c.ATT===11;const f=FORMATIONS_V4[p.formation];return !!f&&c.G===f.G&&c.DEF===f.DEF&&c.MID===f.MID&&c.ATT===f.ATT}
function v4ApplyFormation(p,form,custom){
  const target=form==="CUSTOM"?custom:FORMATIONS_V4[form];if(!target)return false;
  const required=Object.entries(target).filter(([pos])=>["G","DEF","MID","ATT"].includes(pos));
  const used=new Set(),best=predicate=>p.roster.filter(y=>!used.has(y.id)&&!y.injured&&!y.red&&predicate(y)).sort((a,b)=>b.ovr-a.ovr)[0];
  const lineup=[];
  for(const [pos,n] of required){
    for(let i=0;i<n;i++){
      if(pos==="G"){
        const x=best(y=>y.nativePos==="G");if(!x)return false;lineup.push([x,"G"]);used.add(x.id);continue;
      }
      let x=best(y=>y.nativePos===pos);
      if(!x && pos==="MID")x=best(y=>y.nativePos==="ATT");
      if(!x && pos==="ATT")x=best(y=>y.nativePos==="MID");
      if(!x)return false;lineup.push([x,pos]);used.add(x.id);
    }
  }
  p.roster.forEach(x=>{if(!x.injured&&!x.red)x.starter=false});
  lineup.forEach(([x,pos])=>{x.pos=pos;x.starter=true});
  p.formation=form;p.customFormation=custom||null;return true;
}
function v4EnsureTactic(p,write){
  if(v4FormationValid(p))return true;
  if(p.formation==="CUSTOM")return false;
  return v4ApplyFormation(p,p.formation,p.customFormation);
}
function v4Strength(p,side="normal"){
  const a=p.roster.filter(x=>x.starter&&!x.injured&&!x.red),c=v4Counts(p);
  let v=a.reduce((s,x)=>s+x.ovr,0)/Math.max(1,a.length);v+=v4Effect(p,"overall");v+=v4Effect(p,"permanent");
  if(side==="attack")v+=v4Effect(p,"attack");if(side==="defense")v+=v4Effect(p,"defense");
  if(c.G<1)v-=18;if(c.DEF>=5)v+=2;if(c.DEF<=2)v-=5;if(c.ATT>=4)v+=2;if(c.MID>=4)v+=1;
  if(p.formation==="442")v+=1;if(p.formation==="353")v+=2;return Math.round(v);
}

/* Estado inicial atualizado e modo solo sem eliminação automática. */
function startGame(){
  const selects=[...document.querySelectorAll(".trainer-country")],names=[...document.querySelectorAll(".trainer-name")];
  if(new Set(selects.map(x=>x.value)).size!==selects.length){toast("Escolha países diferentes.");return}
  battleLocked=false;STATE={version:4,players:[],current:0,turn:1,owner:{},effects:{},log:[],zoom:1,panX:0,panY:0,scorers:{},lastEvent:null,botRosters:{},legendEventUsed:false,market:MARKET_V4.map(x=>({...x})),marketSeen:{},trades:[],pendingTrade:null,roundGoalMoney:0};
  NAMES.forEach(c=>STATE.owner[c]=null);
  selects.forEach((s,i)=>{const p={id:i,name:names[i].value.trim()||`Jogador ${i+1}`,country:s.value,roster:v4CreateRoster(s.value),territories:[s.value],eliminated:false,defeatedBy:[],money:60,formation:"CUSTOM",customFormation:{G:1,DEF:3,MID:3,ATT:4}};STATE.players.push(p);STATE.owner[p.country]=p.id});
  addLog("🏁 World War Cup começou.");showScreen("game");renderGame();
}
function current(){return STATE.players[STATE.current]}
function owned(p){return NAMES.filter(c=>STATE.owner[c]===p.id)}
function continentCount(p){const cs=["Europa","África","Ásia","América do Norte","América do Sul","Oceania"];return cs.filter(cont=>COUNTRIES.filter(x=>x[2]===cont).every(x=>STATE.owner[x[0]]===p.id)).length}
function canAttack(p,target){if(STATE.owner[target]===p.id)return false;if(v4Effect(p,"seaAnywhere"))return NAMES.some(c=>STATE.owner[c]===p.id&&(SEA[c]||[]).includes(target));return owned(p).some(c=>(ADJ[c]||[]).includes(target)||(SEA[c]||[]).includes(target))}

function renderGame(){
 const p=current();document.getElementById("turnInfo").textContent=`RODADA ${STATE.turn} • ${p.name} • ${p.country}`;document.getElementById("trainerName").textContent=p.name;document.getElementById("trainerCountry").textContent=`${FLAGS?.[p.country]||""} ${p.country}`;
 document.getElementById("trainerStats").innerHTML=`<p>🌍 ${owned(p).length} territórios</p><p>🏆 ${continentCount(p)} continentes</p><p>⚽ OVR ${v4Strength(p)}</p><p>💰 <span class="money">$${p.money}M</span></p><p>📐 ${p.formation==="CUSTOM"?`Personalizada ${JSON.stringify(v4Counts(p))}`:(FORMATIONS_V4[p.formation]?.label||p.formation)}</p>`;
 const e=STATE.lastEvent&&STATE.lastEvent.playerId===p.id?STATE.lastEvent:null;document.getElementById("roundEvent").innerHTML=e?`<div class="mini-event">🎯 <b>EVENTO ATIVO</b><br><b>${e.title}</b><br>${e.description}</div>`:`<div class="mini-event">🎲 Nenhum evento ativo nesta rodada.</div>`;
 document.getElementById("rosterMini").innerHTML=["G","DEF","MID","ATT"].map(pos=>{const title=pos==="G"?"🧤 GOLEIROS":pos==="DEF"?"🛡️ DEFENSORES":pos==="MID"?"🎯 MEIAS":"⚡ ATACANTES";return `<div class="position-section"><div class="position-title">${title}</div>${p.roster.filter(x=>x.pos===pos).map(x=>`<div class="position-item ${x.injured?"injured":""}" style="display:flex;justify-content:space-between;gap:6px;padding:5px 0;border-bottom:1px solid #172832;font-size:11px"><span>${x.starter?"★":"🪑"} ${x.name}${x.injured?" 🩹":""}${x.red?" 🟥":""}</span><b>${x.ovr}</b></div>`).join("")}</div>`}).join("");renderMap();
}
function renderMap(){
 let svg=`<svg viewBox="0 0 1000 650"><rect width="100%" height="100%" fill="#061720"/><g transform="translate(${STATE.panX} ${STATE.panY}) scale(${STATE.zoom})"><path d="M55 105Q180 50 315 120L300 290 130 305 55 215Z" fill="#0e2934"/><path d="M270 325Q360 275 455 350L430 520 350 600 285 485Z" fill="#0e2934"/><path d="M400 80Q530 40 665 95L635 275 490 290 410 210Z" fill="#0e2934"/><path d="M560 280Q675 220 790 290L725 420 620 430 555 350Z" fill="#0e2934"/><path d="M710 95Q830 75 940 165L880 305 760 315 700 220Z" fill="#0e2934"/><path d="M660 400Q805 350 925 435L850 575 730 545 650 465Z" fill="#0e2934"/><text x="485" y="45" class="continent">EUROPA</text><text x="120" y="88" class="continent">AMÉRICAS</text><text x="735" y="70" class="continent">ÁSIA</text><text x="485" y="285" class="continent">ÁFRICA</text><text x="775" y="355" class="continent">OCEANIA</text>`;
 const lines=new Set();NAMES.forEach(c=>{(ADJ[c]||[]).forEach(t=>route(c,t,false));(SEA[c]||[]).forEach(t=>route(c,t,true))});function route(a,b,sea){if(!MAP_POS[a]||!MAP_POS[b])return;const key=(sea?"S":"L")+[a,b].sort().join("|");if(lines.has(key))return;lines.add(key);svg+=`<line class="route ${sea?"sea":""}" x1="${MAP_POS[a][0]}" y1="${MAP_POS[a][1]}" x2="${MAP_POS[b][0]}" y2="${MAP_POS[b][1]}"/>`}
 NAMES.forEach(c=>{const info=COUNTRIES.find(x=>x[0]===c),o=STATE.owner[c],[x,y]=MAP_POS[c],valid=canAttack(current(),c),fill=o===null?"#4e606b":COLORS[o%COLORS.length];svg+=`<g class="node ${valid?"valid":""}" data-country="${c}" transform="translate(${x} ${y})"><circle r="${valid?25:21}" fill="${fill}" stroke="${valid?"#fff":"#dce6eb"}" stroke-width="${valid?2:1}"/><text class="flag" y="4">${info[1]}</text><text class="country-name" y="34">${c}</text><text class="ovr" y="46">OVR ${baseOVR(c)}</text></g>`});svg+=`</g><g class="zoom-controls"><rect x="890" y="15" width="42" height="36" rx="7" fill="#172936"/><text x="911" y="40" fill="white" text-anchor="middle" font-size="22">+</text><rect x="938" y="15" width="42" height="36" rx="7" fill="#172936"/><text x="959" y="40" fill="white" text-anchor="middle" font-size="22">−</text><rect x="890" y="57" width="90" height="29" rx="7" fill="#172936"/><text x="935" y="76" fill="white" text-anchor="middle" font-size="10">RESET</text></g></svg>`;
 document.getElementById("map").innerHTML=svg;document.querySelectorAll(".node").forEach(n=>n.onclick=()=>{const c=n.dataset.country;if(!battleLocked&&canAttack(current(),c))prepareAttack(c)});bindMapControls();
}
function bindMapControls(){
 const m=document.getElementById("map"),z=m.querySelector(".zoom-controls"),r=z.querySelectorAll("rect");
 r[0].onclick=()=>{STATE.zoom=Math.min(3,STATE.zoom+.15);renderMap()};r[1].onclick=()=>{STATE.zoom=Math.max(.65,STATE.zoom-.15);renderMap()};r[2].onclick=()=>{STATE.zoom=1;STATE.panX=STATE.panY=0;renderMap()};
 let dragging=false,lx=0,ly=0;
 m.onpointerdown=e=>{if(e.target.closest(".node,.zoom-controls"))return;dragging=true;lx=e.clientX;ly=e.clientY;m.setPointerCapture?.(e.pointerId)};
 m.onpointermove=e=>{if(!dragging)return;STATE.panX+=(e.clientX-lx)/m.clientWidth*1000;STATE.panY+=(e.clientY-ly)/m.clientHeight*650;lx=e.clientX;ly=e.clientY;const world=m.querySelector("svg > g");if(world)world.setAttribute("transform",`translate(${STATE.panX} ${STATE.panY}) scale(${STATE.zoom})`)};
 m.onpointerup=e=>{dragging=false;m.releasePointerCapture?.(e.pointerId)};m.onpointercancel=()=>dragging=false;
 m.onwheel=e=>{e.preventDefault();STATE.zoom=Math.max(.65,Math.min(3,STATE.zoom+(e.deltaY<0?.12:-.12)));renderMap()};
}
function baseOVR(c){return TEAM_BASE_V4[c]||75}
function prepareAttack(target){const p=current(),o=STATE.owner[target],d=o===null?{id:-1,name:"BOT",country:target,roster:v4GetBot(target),formation:"433",defeatedBy:[]}:STATE.players[o];document.getElementById("modalContent").innerHTML=`<h2>⚔ ${p.country} × ${d.country}</h2><div class="event-box"><p><b>ATACANTE</b></p><h2>${p.country}</h2><p>OVR: <b>${v4Strength(p,"attack")}</b> • ${FORMATIONS_V4[p.formation]?.label||p.formation}</p><p><b>DEFENSOR</b></p><h2>${d.country}</h2><p>OVR: <b>${o===null?v4Strength(d):v4Strength(d,"defense")}</b></p><p class="muted">⚠️ Depois de começar, o X não cancela a partida.</p></div><button id="beginBattle" class="primary wide">⚽ COMEÇAR PARTIDA</button>`;showModal();document.getElementById("beginBattle").onclick=()=>simulateMatchV4(target)}
function weightedScorerV4(t,opponentCountry){let a=eligiblePlayers(t).filter(x=>x.nativePos!=="G");if(!a.length)return null;const bestSuppressed=v4Effect(t,"cancelBest")>0&&t===current();const max=Math.max(...a.map(x=>x.ovr));const weights=a.map(x=>{let w=x.pos==="ATT"?3.5:x.pos==="MID"?2.1:.25;w*=Math.max(.2,x.ovr/80);if(x.ovr===max&&bestSuppressed)w*=.05;if(opponentCountry&&x.source===opponentCountry)w*=1+v4Effect(t,"exBoost")/100;return w});let total=weights.reduce((s,x)=>s+x,0),r=Math.random()*total;for(let i=0;i<a.length;i++){r-=weights[i];if(r<=0)return a[i]}return a[a.length-1]}
function registerGoalV4(p,opponent){const x=weightedScorerV4(p,opponent);if(!x)return null;STATE.scorers[x.name]=(STATE.scorers[x.name]||0)+1;x.goals=(x.goals||0)+1;return x}
function goalProbV4(att,def,m){const ac=v4Counts(att),dc=v4Counts(def);let chance=.025+ac.ATT*.027+ac.MID*.012+((effectiveStrengthForV4(att,"attack")-effectiveStrengthForV4(def,"defense"))/900);chance+=v4Effect(att,"goalChance");chance-=v4Effect(def,"saveBoost");if(ac.ATT<2)chance-=.018;if(ac.MID<2)chance-=.01;if(dc.DEF>=5)chance-=.035;if(dc.DEF>=6)chance-=.015;if(dc.G<1)chance+=.12;if(m>=76)chance+=v4Effect(att,"lateBoost")/100;if(att.formation==="353")chance+=.008;if(att.formation==="442")chance-=.004;return Math.max(.008,Math.min(.20,chance))}
function effectiveStrengthForV4(p,side){return v4Strength(p,side)}
function setBattleLock(v){battleLocked=v;document.getElementById("modal").classList.toggle("battle-locked",v)}
async function simulateMatchV4(target){
 const a=current(),o=STATE.owner[target],d=o===null?{id:-1,name:"BOT",country:target,roster:v4GetBot(target),formation:"433",defeatedBy:[]}:STATE.players[o];
 if(!v4EnsureTactic(a,null)||(d.id>=0&&!v4EnsureTactic(d,null))){toast("Escalação inválida: use 11 titulares, exatamente um goleiro e uma formação válida.");return}
 setBattleLock(true);let ga=0,gd=0;const mins=[5,10,15,20,25,30,35,42,45,55,62,70,78,84,90];let goalMoney=0;
 document.getElementById("modalContent").innerHTML=`<div class="scoreboard"><div class="team-name">${a.country}</div><div id="liveScore" class="score">0 × 0</div><div class="team-name">${d.country}</div></div><div id="timeline" class="timeline"><div class="match-event">🏟️ A partida começou. O X está bloqueado.</div></div>`;showModal();
 const write=x=>{document.getElementById("timeline").innerHTML+=`<div class="match-event">${x}</div>`;document.getElementById("timeline").scrollTop=99999;document.getElementById("liveScore").textContent=`${ga} × ${gd}`;addLog(x.replace(/<[^>]*>/g,""))};
 for(const m of mins){await new Promise(r=>setTimeout(r,m===45?900:560));if(m===45){write("<b>⏸ INTERVALO...</b>");continue}
  if(m===5&&v4Effect(a,"penalty5")){ga++;goalMoney+=2;const s=registerGoalV4(a,d.country);write(`⚽ <b>Gol de Pênalti!</b> ${s?.name||"Craque"} — ${a.country} 5'`);delete STATE.effects[a.id].penalty5;continue}
  const pA=goalProbV4(a,d,m),pD=goalProbV4(d,a,m),r=Math.random();
  if(r<.10){const t=Math.random()<.52?a:d,x=chooseCardPlayerV4(t);if(x){if(t===a&&v4Effect(a,"yellowShield")){delete STATE.effects[a.id].yellowShield;write(`🛡️ 🟨 ${x.name} teve o amarelo anulado pelo capitão! ${m}'`)}else{x.yellow++;if(x.yellow>=2){x.red=true;x.starter=false;write(`🟨🟨🟥 <b>${x.name} EXPULSO!</b> — ${t.country} seguirá com um jogador a menos.`)}else write(`🟨 <b>${x.name}</b> — ${t.country} ${m}'`)}}}
  else if(r<.10+pA){ga++;goalMoney+=2;const s=registerGoalV4(a,d.country);write(`⚽ <b>Gol!</b> ${s?.name||"Atacante"} — ${a.country} ${m}'`)}
  else if(r<.10+pA+pD){gd++;const s=registerGoalV4(d,a.country);write(`⚽ <b>Gol!</b> ${s?.name||"Atacante"} — ${d.country} ${m}'`)}
  else if(r<.47){const t=Math.random()<.5?a:d,x=weightedScorerV4(t,t===a?d.country:a.country);if(x)write(`🔥 ${m}' — ${x.name} quase marca!`);else write(`${m}' — disputa intensa.`)}else write(`${m}' — ${a.country} ${ga} × ${gd} ${d.country}.`)
 }
 if(ga===gd){write(`<b>⏱️ Empate ${ga} × ${gd}. PRORROGAÇÃO!</b>`);for(const m of [105,115,120]){await new Promise(r=>setTimeout(r,700));const pa=goalProbV4(a,d,m)+.025,pd=goalProbV4(d,a,m)+.025,r=Math.random();if(r<pa){ga++;goalMoney+=2;const s=registerGoalV4(a,d.country);write(`⚽ <b>Gol na prorrogação!</b> ${s?.name||"Atacante"} — ${a.country} ${m}'`)}else if(r<pa+pd){gd++;const s=registerGoalV4(d,a.country);write(`⚽ <b>Gol na prorrogação!</b> ${s?.name||"Atacante"} — ${d.country} ${m}'`)}else write(`${m}' — tensão máxima.`);if(ga!==gd&&m===120)break}}
 let winner;if(ga===gd){
  write("🥅 <b>DISPUTA DE PÊNALTIS!</b>");
  const shootout={a:0,d:0};
  const shooterFor=(team,k)=>{const list=eligiblePlayers(team).filter(x=>x.nativePos!=="G").sort((x,y)=>y.ovr-x.ovr);return list[k%list.length]||eligiblePlayers(team)[0]};
  const takePenalty=async(team,side,k,label)=>{
    const shooter=shooterFor(team,k-1);if(!shooter)return;
    write(`🎯 <b>${shooter.name}</b> é ${label}.`);await new Promise(r=>setTimeout(r,620));
    write("Ele ajeita a bola...");await new Promise(r=>setTimeout(r,620));write("Ele chuta...");await new Promise(r=>setTimeout(r,620));
    const chance=Math.max(.58,Math.min(.91,.66+((shooter.ovr||75)-75)/100));
    const roll=Math.random();
    if(roll<chance){shootout[side]++;write(`⚽ <b>Gol!</b> ${a.country} ${shootout.a} × ${shootout.d} ${d.country}`)}
    else if(roll<chance+.12)write(`🧤 <b>Defende o goleiro!</b> ${a.country} ${shootout.a} × ${shootout.d} ${d.country}`)
    else if(roll<chance+.2)write(`🥅 <b>Na trave!</b> ${a.country} ${shootout.a} × ${shootout.d} ${d.country}`)
    else write(`❌ <b>Pra fora!</b> ${a.country} ${shootout.a} × ${shootout.d} ${d.country}`);
    await new Promise(r=>setTimeout(r,480));
  };
  let roundsPlayed=0;
  for(let i=1;i<=5;i++){await takePenalty(a,"a",i,`${i}º cobrador de ${a.country}`);await takePenalty(d,"d",i,`${i}º cobrador de ${d.country}`);roundsPlayed=i;if(shootout.a>shootout.d+(5-i)||shootout.d>shootout.a+(5-i)){write("<b>Vitória definida antecipadamente nos pênaltis!</b>");break}}
  while(shootout.a===shootout.d){roundsPlayed++;await takePenalty(a,"a",roundsPlayed,`cobrador da morte súbita de ${a.country}`);await takePenalty(d,"d",roundsPlayed,`cobrador da morte súbita de ${d.country}`)}
  winner=shootout.a>shootout.d?a:d;
 }else winner=ga>gd?a:d;
 if(v4Effect(a,"loseGoal")&&winner===a&&ga>0){ga--;delete STATE.effects[a.id].loseGoal;write("⚠️ Escândalo de Arbitragem: um gol foi anulado.");if(ga<=gd)winner=d}
 write(`<b>🏁 FIM DE JOGO!</b> ${a.country} ${ga} × ${gd} ${d.country}`);await new Promise(r=>setTimeout(r,900));finishMatchV4(a,d,target,winner===a,goalMoney,ga,gd)
}
function eligiblePlayers(t){return t.roster.filter(x=>x.starter&&!x.injured&&!x.red)}
function chooseCardPlayerV4(t){const p=eligiblePlayers(t).filter(x=>x.nativePos!=="G");return p[Math.floor(Math.random()*Math.max(1,p.length))]}
function consumeMatchEffectsV4(p){if(!p)return;const effects=STATE.effects[p.id]||{};Object.keys(effects).forEach(key=>{if(key!=="neutralSteal"&&effects[key].turns<90)delete effects[key]});p.roster.forEach(player=>{if(player.injured>0)player.injured--})}
function finishMatchV4(a,d,target,won,goalMoney,ga,gd){
 setBattleLock(false);const reward=COUNTRY_REWARD[target]||25;
 consumeMatchEffectsV4(a);
 if(won){const old=STATE.owner[target];STATE.owner[target]=a.id;if(!a.territories.includes(target))a.territories.push(target);a.money+=reward+goalMoney;addLog(`🏆 ${a.country} conquistou ${target}. +$${reward}M pela conquista +$${goalMoney}M pelos gols.`);
  const loser=old!==null?STATE.players[old]:null;const pool=loser?loser.roster:v4GetBot(target);if(loser)loser.territories=loser.territories.filter(x=>x!==target);chooseTwoStealsV4(a,loser,target,pool,reward,goalMoney)
 }else{a.money+=goalMoney;addLog(`⚽ ${a.country} recebeu +$${goalMoney}M pelos gols marcados.`);endRoundV4()}
}
function updateLiveMarketV4(country,pool,chosen){const ids=new Set(chosen.map(x=>x.id));STATE.market=STATE.market.filter(m=>!ids.has(m.sourcePlayerId));(pool||[]).filter(x=>x.ovr>=87&&!ids.has(x.id)&&!x.legend).forEach(x=>{if(!STATE.market.some(m=>m.sourcePlayerId===x.id&&!m.sold)){STATE.market.push({id:`live_${x.id}`,name:x.name,ovr:x.ovr,pos:x.nativePos,source:country,sourcePlayerId:x.id,sold:false})}})}
function chooseTwoStealsV4(winner,loser,target,pool,reward,goalMoney){const candidates=(pool||[]).filter(x=>!x.injured&&!x.red),captureCount=2+(!loser&&v4Effect(winner,"neutralSteal")?1:0);document.getElementById("modalContent").innerHTML=`<h2>🏆 ${target} CONQUISTADO!</h2><p>Você ganhou <b class="money">$${reward+goalMoney}M</b>. Agora escolha exatamente <b>${captureCount} jogadores</b>${captureCount>2?" (incluindo o reforço extra do evento).":"."}</p><div class="steal-list">${candidates.map(x=>`<label class="steal-player"><input type="checkbox" value="${x.id}"><b>${x.name}</b><span>${POS[x.nativePos]}</span><strong>${x.ovr}</strong></label>`).join("")}</div><button id="captureBtn" class="primary wide">CAPTURAR ${captureCount}</button>`;showModal();document.getElementById("captureBtn").onclick=()=>{const ids=[...document.querySelectorAll(".steal-player input:checked")].map(x=>x.value);if(ids.length!==captureCount)return toast(`Escolha exatamente ${captureCount} jogadores.`);const got=candidates.filter(x=>ids.includes(x.id));got.forEach(x=>{if(loser)loser.roster=loser.roster.filter(y=>y.id!==x.id);else{const i=pool.findIndex(y=>y.id===x.id);if(i>=0)pool.splice(i,1)}x.captured=true;x.starter=false;x.red=false;x.yellow=0;winner.roster.push(x)});if(captureCount>2)delete STATE.effects[winner.id].neutralSteal;updateLiveMarketV4(target,pool,got);if(loser&&owned(loser).length===0)eliminateV4(loser);document.getElementById("modalContent").innerHTML=`<div class="event-box"><div class="event-title good">👑 CONQUISTA COMPLETA</div><p>${winner.country} controla ${target}.</p><p>${got.map(x=>`⚽ ${x.name} — OVR ${x.ovr}`).join("<br>")}</p></div><button id="cont" class="primary wide">CONTINUAR</button>`;document.getElementById("cont").onclick=endRoundV4}}
function eliminateV4(p){if(p.eliminated)return;p.eliminated=true;addLog(`💀 ${p.name} foi eliminado por ficar sem territórios.`);toast(`${p.name} foi eliminado!`)}
function endRoundV4(){if(battleLocked)return;closeModal();renderGame();if(checkVictoryV4())return;setTimeout(randomEventV4,350)}
function checkVictoryV4(){const alive=STATE.players.filter(p=>!p.eliminated);if(STATE.players.length>1&&alive.length===1){victoryV4(alive[0]);return true}const p=current();if(p&&continentCount(p)>=3){victoryV4(p);return true}return false}
function victoryV4(p){setBattleLock(false);document.getElementById("modalContent").innerHTML=`<div class="event-box"><div class="event-title good">🏆 VITÓRIA!</div><h2>${p.country} — ${p.name}</h2><p>${STATE.players.length===1?"Campanha solo concluída por domínio territorial.":"Você foi o último player sobrevivente."}</p><p>Territórios: ${owned(p).length} • Continentes: ${continentCount(p)} • Dinheiro: $${p.money}M</p><button class="primary wide" onclick="location.reload()">NOVA GUERRA</button></div>`;showModal()}

function randomEventV4(){const p=current();if(!p||p.eliminated)return;
 if(!STATE.legendEventUsed&&Math.random()<0.005){const ownedCountries=owned(p);if(ownedCountries.length){const c=ownedCountries[Math.floor(Math.random()*ownedCountries.length)],lg=LEGENDS_V4[c]||["Lenda Nacional",92,"ATT"];if(!p.roster.some(x=>x.name===lg[0])){const pl=v4MakePlayer(lg[0],lg[1],lg[2],p.country,false);pl.legend=true;p.roster.push(pl);STATE.legendEventUsed=true;STATE.market=STATE.market.filter(x=>x.name!==lg[0]);STATE.lastEvent={playerId:p.id,title:"👑 LENDA NACIONAL",description:`${lg[0]} — OVR ${lg[1]} veio de ${c}. O jogador foi removido do mercado.`};document.getElementById("modalContent").innerHTML=`<div class="event-box"><div class="event-title good">👑 EVENTO LENDÁRIO!</div><h2>${lg[0]}</h2><p>Sorteio entre os países que você controla: <b>${c}</b>.</p><p>⭐ ${lg[1]} OVR • ${POS[lg[2]]}</p><button id="legendOk" class="primary wide">CONTINUAR</button></div>`;showModal();document.getElementById("legendOk").onclick=()=>{advanceTurnV4();closeModal()};return}}}
 const pool=Math.random()<.34?EVENTS.bad:EVENTS.good;const [title,fn]=pool[Math.floor(Math.random()*pool.length)],description=fn(p);STATE.lastEvent={playerId:p.id,title,description};addLog(`${pool===EVENTS.bad?"⚠️":"✨"} ${title}: ${description}`);document.getElementById("modalContent").innerHTML=`<div class="event-box"><div class="event-title ${pool===EVENTS.bad?"bad":"good"}">${pool===EVENTS.bad?"⚠️":"✨"} ${title}</div><p>${description}</p><button id="eventOk" class="primary wide">CONTINUAR</button></div>`;showModal();document.getElementById("eventOk").onclick=()=>{advanceTurnV4();closeModal()}}
function advanceTurnV4(){STATE.players.forEach(p=>p.roster.forEach(x=>{x.yellow=0;x.red=false}));let guard=0;do{STATE.current=(STATE.current+1)%STATE.players.length;guard++}while(STATE.players[STATE.current].eliminated&&guard<=STATE.players.length);if(STATE.current===0)STATE.turn++;renderGame();checkVictoryV4()}

function manageTeam(){
 const p=current();if(v4Effect(p,"noSubs"))return toast("Escalação bloqueada nesta rodada.");const c=v4Counts(p);
 const row=(x,type)=>{const bg=x.legend?"background:rgba(255,190,0,.34)":x.ovr>=90?"background:rgba(230,57,70,.30)":"";return `<tr class="${x.injured||x.red?"injured":""}" style="${bg}"><td><input type="radio" name="${type}" data-sub-${type}="${x.id}" ${x.injured||x.red?"disabled":""}></td><td><b>${x.name}</b>${x.legend?" ⭐":""}</td><td>${POS[x.nativePos]}</td><td>${POS[x.pos]}</td><td><b>${x.ovr}</b></td><td>${x.injured?"🩹 Lesionado":x.red?"🟥 Expulso":type==="out"?"Em campo":"Disponível"}</td></tr>`};
 const benchGroups=["ATT","MID","DEF","G"].map(pos=>{const players=p.roster.filter(x=>!x.starter&&x.nativePos===pos);return `<h4 class="position-title">${POS[pos]}S</h4><table class="stats-table"><thead><tr><th>ENTRAR</th><th>Jogador</th><th>Posição</th><th>Função</th><th>OVR</th><th>Status</th></tr></thead><tbody>${players.map(x=>row(x,"in")).join("")||"<tr><td colspan='6'>Nenhum jogador nesta posição.</td></tr>"}</tbody></table>`}).join("");
 document.getElementById("modalContent").innerHTML=`<h2>👥 ${p.country} — Gerenciamento do elenco</h2><p class="muted">Selecione um titular para sair e um reserva para entrar. A substituição preserva a posição tática e impede escalações inválidas.</p><div class="formations">${["442","433","353","CUSTOM"].map(f=>`<button class="formation ${p.formation===f?"active":""}" data-form="${f}">${FORMATIONS_V4[f].label}</button>`).join("")}</div><div id="customFormation"></div><div class="rosters"><div class="roster-box"><h3>TITULARES — selecione quem sai</h3><table class="stats-table"><thead><tr><th>SAIR</th><th>Jogador</th><th>Posição</th><th>Função</th><th>OVR</th><th>Status</th></tr></thead><tbody>${p.roster.filter(x=>x.starter).map(x=>row(x,"out")).join("")}</tbody></table></div><div class="roster-box"><h3>BANCO — selecione quem entra</h3>${benchGroups}<button id="confirmSubV4" class="primary wide">🔄 FAZER SUBSTITUIÇÃO</button></div></div>`;
 showModal();document.getElementById("confirmSubV4").onclick=applySubstitutionV4;document.querySelectorAll("[data-form]").forEach(b=>b.onclick=()=>chooseFormationV4(p,b.dataset.form));if(p.formation==="CUSTOM")customFormationUI(p);
}
function chooseFormationV4(p,f){if(f!=="CUSTOM"){const ok=v4ApplyFormation(p,f);if(!ok){toast("Seu elenco não tem jogadores aptos para montar essa formação.");return}}else p.formation="CUSTOM";manageTeam()}
function customFormationUI(p){const c=v4Counts(p);document.getElementById("customFormation").innerHTML=`<p class="muted">Personalizada precisa ter exatamente 11 jogadores e 1 goleiro.</p><div class="custom-grid">${["G","DEF","MID","ATT"].map(pos=>`<label>${POS[pos]}<input type="number" min="${pos==="G"?1:0}" max="11" data-custom="${pos}" value="${c[pos]}"></label>`).join("")}</div><button id="applyCustom" class="secondary wide">APLICAR PERSONALIZADA</button>`;document.getElementById("applyCustom").onclick=()=>{const w={G:1,DEF:+document.querySelector('[data-custom="DEF"]').value||0,MID:+document.querySelector('[data-custom="MID"]').value||0,ATT:+document.querySelector('[data-custom="ATT"]').value||0};if(1+w.DEF+w.MID+w.ATT!==11)return toast("A soma precisa ser 11.");if(!v4ApplyFormation(p,"CUSTOM",w))return toast("Não há jogadores suficientes para essa composição.");manageTeam()}}
function applySubstitutionV4(){const p=current(),outId=document.querySelector("[data-sub-out]:checked")?.dataset.subOut,inId=document.querySelector("[data-sub-in]:checked")?.dataset.subIn;if(!outId||!inId)return toast("Selecione um titular para sair e um reserva para entrar.");const outgoing=p.roster.find(x=>x.id===outId),incoming=p.roster.find(x=>x.id===inId);if(!outgoing||!incoming||!outgoing.starter||incoming.starter||outgoing.injured||outgoing.red||incoming.injured||incoming.red)return toast("Substituição inválida.");const allowed=(ALLOWED_V4[incoming.nativePos]||[incoming.nativePos]).includes(outgoing.pos)||v4Effect(p,"freePosition");if(!allowed)return toast(`${incoming.name} não pode ocupar a função de ${POS[outgoing.pos]}. Escolha outro reserva ou altere a formação.`);outgoing.starter=false;incoming.starter=true;incoming.pos=outgoing.pos;addLog(`🔄 ${p.country}: ${outgoing.name} saiu, ${incoming.name} entrou.`);manageTeam()}

function openMarketV4(){const p=current();const available=STATE.market.filter(x=>!x.sold);document.getElementById("modalContent").innerHTML=`<h2>💰 MERCADO DE TRANSFERÊNCIAS</h2><p>Saldo: <b class="money">$${p.money}M</b>. Escolha um jogador disponível e clique em <b>CONTRATAR</b>. A área de vendas só abre pelo botão abaixo.</p><div class="market-grid">${available.map(x=>{const price=x.marketPrice||Math.max(35,Math.round(x.ovr*2.1));return `<div class="market-card"><span><b>${x.name}</b><br><small>${POS[x.pos]} • OVR ${x.ovr}${x.source&&x.source!=="Mercado"?` • ${x.source}`:""}</small></span><strong class="money">$${price}M</strong><button data-buy-v4="${x.id}" ${p.money<price?"disabled":""}>CONTRATAR</button></div>`}).join("")||"<p>Nenhum jogador disponível.</p>"}</div><button id="sellBtnV4" class="secondary wide">💸 IR PARA VENDAS</button>`;showModal();document.querySelectorAll("[data-buy-v4]").forEach(b=>b.onclick=()=>{const x=STATE.market.find(y=>y.id===b.dataset.buyV4);if(!x)return;const price=x.marketPrice||Math.max(35,Math.round(x.ovr*2.1));if(p.money<price)return toast("Dinheiro insuficiente.");p.money-=price;x.sold=true;const pl=v4MakePlayer(x.name,x.ovr,x.pos,p.country,false,x.id+"_owned");pl.market=true;p.roster.push(pl);STATE.market=STATE.market.filter(y=>y.id!==x.id);addLog(`💰 ${p.country} contratou ${x.name} por $${price}M.`);openMarketV4()});document.getElementById("sellBtnV4").onclick=chooseSellV4}
function chooseSellV4(){const p=current();document.getElementById("modalContent").innerHTML=`<h2>💸 VENDER JOGADOR</h2><p class="muted">Seção de vendas do mercado. Selecione um atleta e confirme a venda. Jogadores de OVR 88+ entram no mercado por 1/3 acima do preço recebido.</p><table class="stats-table"><thead><tr><th>VENDER</th><th>Jogador</th><th>Posição</th><th>OVR</th><th>Valor de venda</th><th>Preço no mercado</th></tr></thead><tbody>${p.roster.map(x=>{const sale=sellValueV4(x),marketValue=x.ovr>=88?Math.ceil(sale*4/3):null;return `<tr><td><input type="radio" name="sellPlayerV4" value="${x.id}"></td><td><b>${x.name}</b></td><td>${POS[x.nativePos]}</td><td>${x.ovr}</td><td class="money">$${sale}M</td><td>${marketValue?`<span class="money">$${marketValue}M</span>`:"—"}</td></tr>`}).join("")}</tbody></table><button id="confirmSellV4" class="primary wide">VENDER JOGADOR SELECIONADO</button><button id="cancelSellV4" class="secondary wide">VOLTAR AO MERCADO</button>`;document.getElementById("confirmSellV4").onclick=sellSelectedV4;document.getElementById("cancelSellV4").onclick=openMarketV4}
function sellValueV4(x){return Math.max(5,Math.round(x.ovr*.55+(x.market?10:0)))}
function sellSelectedV4(){const id=document.querySelector('input[name="sellPlayerV4"]:checked')?.value;if(!id)return toast("Selecione um jogador para vender.");const p=current(),x=p.roster.find(y=>y.id===id);if(!x)return toast("Jogador indisponível.");const sale=sellValueV4(x);p.roster=p.roster.filter(y=>y.id!==id);p.money+=sale;if(x.ovr>=88){const marketPrice=Math.ceil(sale*4/3);STATE.market=STATE.market.filter(y=>y.sourcePlayerId!==x.id);STATE.market.push({id:`sale_${x.id}_${Date.now()}`,name:x.name,ovr:x.ovr,pos:x.nativePos,source:p.country,sourcePlayerId:x.id,sold:false,marketPrice});addLog(`💸 ${p.country} vendeu ${x.name} por $${sale}M; ele entrou no mercado por $${marketPrice}M.`)}else addLog(`💸 ${p.country} vendeu ${x.name} por $${sale}M.`);toast(`${x.name} foi vendido por $${sale}M.`);openMarketV4()}

function showScorers(){const rows=Object.entries(STATE.scorers||{}).sort((a,b)=>b[1]-a[1]).map((x,i)=>`<tr><td>${i+1}</td><td><b>${x[0]}</b></td><td>${x[1]}</td></tr>`).join("");document.getElementById("modalContent").innerHTML=`<h2>🏆 ARTILHARIA</h2><table class="stats-table"><thead><tr><th>#</th><th>Jogador</th><th>Gols</th></tr></thead><tbody>${rows||"<tr><td colspan='3'>Nenhum gol.</td></tr>"}</tbody></table>`;showModal()}
function saveGame(){try{localStorage.setItem("WWC_SAVE_V4",JSON.stringify(STATE));addLog("💾 Partida salva.");toast("Partida salva!")}catch(e){toast("Não foi possível salvar.")}}
function loadGame(){try{const raw=localStorage.getItem("WWC_SAVE_V4");if(!raw)return toast("Nenhuma partida salva.");STATE=JSON.parse(raw);STATE.effects=STATE.effects||{};STATE.scorers=STATE.scorers||{};STATE.market=STATE.market||MARKET_V4.map(x=>({...x}));STATE.botRosters=STATE.botRosters||{};STATE.zoom=STATE.zoom||1;showScreen("game");setBattleLock(false);renderGame();toast("Partida carregada!")}catch(e){toast("Save inválido.")}}

function tradeMenu(){const p=current(),others=STATE.players.filter(x=>x.id!==p.id&&!x.eliminated);if(!others.length)return toast("Trade exige pelo menos 2 players humanos.");document.getElementById("modalContent").innerHTML=`<h2>🤝 TRADE</h2><label>Player:</label><select id="tradeTargetV4">${others.map(x=>`<option value="${x.id}">${x.name} — ${x.country}</option>`).join("")}</select><div id="tradeBuilderV4"></div>`;showModal();document.getElementById("tradeTargetV4").onchange=renderTradeBuilderV4;renderTradeBuilderV4()}
function renderTradeBuilderV4(){const p=current(),q=STATE.players[+document.getElementById("tradeTargetV4").value];document.getElementById("tradeBuilderV4").innerHTML=`<div class="trade-grid"><div class="trade-side"><h3>${p.name}</h3><b>Jogadores</b>${p.roster.filter(x=>!x.injured).map(x=>`<label><input type="checkbox" data-give-player-v4="${x.id}"> ${x.name} (${x.ovr})</label>`).join("")}<b>Territórios</b>${owned(p).map(c=>`<label><input type="checkbox" data-give-country-v4="${c}" ${c===p.country?"disabled":""}> ${FLAGS[c]} ${c}</label>`).join("")}<b>Dinheiro (M)</b><input id="giveMoneyV4" class="trade-money" type="number" min="0" step="1" value="0"></div><div class="trade-arrow">⇄</div><div class="trade-side"><h3>${q.name}</h3><b>Jogadores</b>${q.roster.filter(x=>!x.injured).map(x=>`<label><input type="checkbox" data-take-player-v4="${x.id}"> ${x.name} (${x.ovr})</label>`).join("")}<b>Territórios</b>${owned(q).map(c=>`<label><input type="checkbox" data-take-country-v4="${c}" ${c===q.country?"disabled":""}> ${FLAGS[c]} ${c}</label>`).join("")}<b>Dinheiro (M)</b><input id="takeMoneyV4" class="trade-money" type="number" min="0" step="1" value="0"></div></div><button id="proposeTradeV4" class="primary wide">ENVIAR PROPOSTA</button>`;document.getElementById("proposeTradeV4").onclick=proposeTradeV4}
function proposeTradeV4(){const p=current(),q=STATE.players[+document.getElementById("tradeTargetV4").value],gm=Number(document.getElementById("giveMoneyV4").value)||0,tm=Number(document.getElementById("takeMoneyV4").value)||0;if(!Number.isInteger(gm)||!Number.isInteger(tm)||gm<0||tm<0)return toast("Dinheiro deve ser número inteiro de milhões.");if(gm>p.money||tm>q.money)return toast("Dinheiro insuficiente.");const gp=[...document.querySelectorAll("[data-give-player-v4]:checked")].map(x=>x.dataset.givePlayerV4),tp=[...document.querySelectorAll("[data-take-player-v4]:checked")].map(x=>x.dataset.takePlayerV4),gc=[...document.querySelectorAll("[data-give-country-v4]:checked")].map(x=>x.dataset.giveCountryV4),tc=[...document.querySelectorAll("[data-take-country-v4]:checked")].map(x=>x.dataset.takeCountryV4);STATE.pendingTrade={from:p.id,to:q.id,givePlayers:gp,giveCountries:gc,giveMoney:gm,takePlayers:tp,takeCountries:tc,takeMoney:tm};document.getElementById("modalContent").innerHTML=`<div class="event-box"><div class="event-title warn">⚠️ ${q.name}, confirmar este TRADE?</div><p>${p.country} entrega ${gp.length} jogador(es), ${gc.length} território(s) e $${gm}M.</p><p>${q.country} entrega ${tp.length} jogador(es), ${tc.length} território(s) e $${tm}M.</p><button id="rejectTrade" class="secondary">RECUSAR</button><button id="acceptTrade" class="primary">CONFIRMAR TRADE</button></div>`;document.getElementById("rejectTrade").onclick=()=>{STATE.pendingTrade=null;tradeMenu()};document.getElementById("acceptTrade").onclick=executeTradeV4}
function executeTradeV4(){
 const t=STATE.pendingTrade;if(!t)return;const p=STATE.players[t.from],q=STATE.players[t.to];if(!p||!q)return toast("Trade inválido.");
 const ownsAll=(player,countries)=>countries.every(country=>STATE.owner[country]===player.id&&country!==player.country);
 const hasAll=(player,players)=>players.every(id=>player.roster.some(x=>x.id===id));
 if(t.giveMoney>p.money||t.takeMoney>q.money||!hasAll(p,t.givePlayers)||!hasAll(q,t.takePlayers)||!ownsAll(p,t.giveCountries)||!ownsAll(q,t.takeCountries)){
  STATE.pendingTrade=null;toast("Trade cancelado: uma das ofertas não está mais disponível.");return;
 }
 // Toda pré-condição é verificada antes de mudar o estado: executa tudo ou não executa nada.
 const givePlayers=t.givePlayers.map(id=>p.roster.find(x=>x.id===id)),takePlayers=t.takePlayers.map(id=>q.roster.find(x=>x.id===id));
 p.roster=p.roster.filter(x=>!t.givePlayers.includes(x.id));q.roster=q.roster.filter(x=>!t.takePlayers.includes(x.id));
 givePlayers.forEach(x=>{x.starter=false;x.source=q.country;q.roster.push(x)});takePlayers.forEach(x=>{x.starter=false;x.source=p.country;p.roster.push(x)});
 t.giveCountries.forEach(c=>{STATE.owner[c]=q.id;p.territories=p.territories.filter(x=>x!==c);q.territories.push(c)});
 t.takeCountries.forEach(c=>{STATE.owner[c]=p.id;q.territories=q.territories.filter(x=>x!==c);p.territories.push(c)});
 p.money=p.money-t.giveMoney+t.takeMoney;q.money=q.money-t.takeMoney+t.giveMoney;STATE.trades.push({...t});STATE.pendingTrade=null;addLog(`🤝 Trade concluído entre ${p.country} e ${q.country}.`);endRoundV4();
}

/* Reaplica eventos originais com efeitos v4 onde necessário. */
function effectAdd(p,k,v,turns=1){v4AddEffect(p,k,v,turns)}
function randomEvent(){return randomEventV4()}
function advanceTurn(){return advanceTurnV4()}
function endRound(){return endRoundV4()}
function checkVictory(){return checkVictoryV4()}
function victory(p){return victoryV4(p)}
function saveGameV4(){return saveGame()}

/* Rebind final dos controles, incluindo modo solo. */
document.getElementById("playBtn").onclick=()=>{showScreen("setup");setupPlayers()};
document.getElementById("tutorialBtn").onclick=()=>showScreen("tutorial");
document.getElementById("loadHomeBtn").onclick=loadGame;
document.getElementById("playerSlider").oninput=setupPlayers;
document.getElementById("startBtn").onclick=startGame;
document.getElementById("manageBtn").onclick=manageTeam;
document.getElementById("marketBtn").onclick=openMarketV4;
document.getElementById("scorerBtn").onclick=showScorers;
document.getElementById("tradeBtn").onclick=tradeMenu;
document.getElementById("saveBtn").onclick=saveGame;
document.getElementById("logBtn").onclick=showLog;
document.getElementById("closeModal").onclick=()=>{if(!battleLocked)closeModal()};
