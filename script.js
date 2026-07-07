const servicesGBP=[
{icon:'📜',name:'Horoscope Creation (Local)',price:20,desc:'Personal horoscope prepared for local clients using traditional Sri Lankan astrological methods.'},
{icon:'🌍',name:'Horoscope Creation (International)',price:20,desc:'Detailed horoscope service for clients living outside Sri Lanka and the UK.'},
{icon:'👶',name:'Horoscope Creation (Newborns)',price:20,desc:'A newborn horoscope prepared using birth date, time and place for family guidance.'},
{icon:'💍',name:'Readings for Weddings',price:20,desc:'Auspicious guidance for marriage arrangements, compatibility and wedding timing.'},
{icon:'🏢',name:'Readings for Businesses',price:20,desc:'Astrological guidance for business openings, decisions and favourable timing.'},
{icon:'🌸',name:'Readings for Puberty',price:20,desc:'Traditional guidance connected to puberty ceremonies and auspicious observances.'},
{icon:'🔤',name:'Readings for Letter Readings',price:20,desc:'Guidance for choosing favourable letters and names according to cultural practice.'},
{icon:'✂️',name:'Readings for Cutting Hair',price:20,desc:'Auspicious timing for first hair cutting and related family traditions.'},
{icon:'👂',name:'Readings for Piercing Ears',price:20,desc:'Auspicious guidance for ear-piercing ceremonies and suitable timing.'},
{icon:'3',name:'Custom Readings for 3 Topics for the Next 5 Years',price:25,desc:'Personalised guidance for three chosen life topics over the next five years.'},
{icon:'6',name:'Custom Readings for 6 Topics for the Next 10 Years',price:30,desc:'Extended personalised guidance for six chosen topics over the next ten years.'},
{icon:'★',name:'Multiple Readings (Custom)',price:null,desc:'Best value package for combining multiple readings, with savings of up to 20%.'}
];
const servicesLKR=[
{icon:'📜',name:'දේශීය කේන්දර සැදීම / Horoscope Creation (Local)',price:3000,desc:'ශ්‍රී ලංකාවේ පාරිභෝගිකයන් සඳහා උපන් වේලාව හා උපන් ස්ථානය අනුව සකස් කරන කේන්දර සේවාව.'},
{icon:'🌍',name:'විදේශීය කේන්දර සැදීම / Horoscope Creation (International)',price:4000,desc:'විදේශගත ශ්‍රී ලාංකිකයන් සඳහා විස්තරාත්මක කේන්දර සකස් කිරීම.'},
{icon:'👶',name:'අලුත උපන් දරුවන්ට කේන්දර සැදීම / Horoscope Creation (Newborns)',price:3000,desc:'නව උපන් දරුවෙකුගේ උපන් තොරතුරු අනුව පවුල් මගපෙන්වීම සඳහා කේන්දරයක්.'},
{icon:'💍',name:'විවාහ පොරොන්දම් හා විවාහ දෝෂ ගැලපීම / Wedding Readings',price:3500,desc:'විවාහ ගැලපීම, සුබ වේලාවන් හා පවුල් සම්ප්‍රදායන් සඳහා මගපෙන්වීම.'},
{icon:'🏠',name:'ව්‍යාපාර ස්ථානයක් ආරම්භ කිරීමට සුභ මූහුර්තියක් / Business Readings',price:3000,desc:'ව්‍යාපාර ආරම්භය, තීරණ සහ සුබ කාල තෝරා ගැනීම සඳහා උපදෙස්.'},
{icon:'💼',name:'ව්‍යාපාරයක් ආරම්භ කිරීමට සුභ අක්ෂර ලබාදීම / Business Letter Readings',price:2500,desc:'ව්‍යාපාර නාමය සහ ආරම්භක අක්ෂර සම්බන්ධ සංස්කෘතික මගපෙන්වීම.'},
{icon:'⭐',name:'ගෙට ගෙවදීම සඳහා මූහුර්තයක් සැදීම / Housewarming Reading',price:3000,desc:'නව නිවසට ගෙවදීම සඳහා සුබ දිනය හා වේලාව සොයාදීම.'},
{icon:'✈️',name:'මෙරටින් පිටවීමට නැකතක් සැදීම / Foreign Travel Reading',price:2500,desc:'විදේශ ගමන් හා සම්බන්ධ සුබ වේලාවන් පිළිබඳ මගපෙන්වීම.'},
{icon:'👶',name:'අකුරු කියවීමේ නැකතක් සැදීම / Letter Reading',price:2500,desc:'අකුරු කියවීමේ උත්සවයට සුදුසු දිනය හා වේලාව තෝරාදීම.'},
{icon:'📖',name:'නිරෝගී කාලීමට නැකතක් සැදීම / Health Reading',price:2500,desc:'නිරෝගීභාවය හා යහපත් කාලය පිළිබඳ සංස්කෘතික මගපෙන්වීම.'},
{icon:'⚖️',name:'නඩු විභාගයට නැකතක් සැදීම / Court Matter Reading',price:2500,desc:'අධිකරණ කටයුතු හා විශේෂ අවස්ථා සඳහා සුබ වේලාවන් පිළිබඳ උපදෙස්.'},
{icon:'03',name:'ඔබ තෝරන විෂය කරුණු 03කට ඉදිරි වසර 5කට පලාපල / 3 Topics, 5 Years',price:3000,desc:'ඔබ තෝරාගත් විෂය කරුණු තුනක් පිළිබඳ වසර පහක පුද්ගලික මගපෙන්වීම.'},
{icon:'06',name:'ඔබ තෝරන විෂය කරුණු 06කට ඉදිරි වසර 10කට පලාපල / 6 Topics, 10 Years',price:3500,desc:'විෂය කරුණු හයකට අදාළ වසර දහයක විස්තරාත්මක පලාපල.'},
{icon:'13',name:'ඔබ තෝරන විෂය කරුණු 13කට ඉදිරි වසර 13කට පලාපල / 13 Topics, 13 Years',price:4500,desc:'විෂය කරුණු දහතුනක් සඳහා දීර්ඝ කාලීන විශේෂ පලාපල.'},
{icon:'💎',name:'විවාහ මංගල්‍යය සඳහා සම්පූර්ණ සුභ මූහුර්ත 10ක් / Complete Wedding Package',price:18000,desc:'විවාහ මංගල්‍යය සඳහා සම්පූර්ණ සුභ මූහුර්ත පැකේජයක්.'},
{icon:'★',name:'Multiple Readings (Custom)',price:null,desc:'ඔබට අවශ්‍ය සේවා කිහිපයක් එකට තෝරාගත හැකි විශේෂ පැකේජයකි.'}
];
const rate=1.30;

const siServiceNames={
'Horoscope Creation (Local)':'දේශීය කේන්දර සැදීම','Horoscope Creation (International)':'විදේශීය කේන්දර සැදීම','Horoscope Creation (Newborns)':'අලුත උපන් දරුවන්ට කේන්දර සැදීම','Readings for Weddings':'විවාහ කියවීම්','Readings for Businesses':'ව්‍යාපාර කියවීම්','Readings for Puberty':'වැඩිවිය පත් වීමේ කියවීම්','Readings for Letter Readings':'අකුරු කියවීම්','Readings for Cutting Hair':'හිසකෙස් කැපීමේ නැකත්','Readings for Piercing Ears':'කන් විදීමේ නැකත්','Custom Readings for 3 Topics for the Next 5 Years':'විෂය කරුණු 3කට වසර 5ක පලාපල','Custom Readings for 6 Topics for the Next 10 Years':'විෂය කරුණු 6කට වසර 10ක පලාපල','Multiple Readings (Custom)':'බහු කියවීම් පැකේජය'};
const siServiceDescs={
'Horoscope Creation (Local)':'ශ්‍රී ලාංකීය ජ්‍යෝතිෂ්‍ය ක්‍රම අනුව සකස් කරන පුද්ගලික කේන්දර සේවාව.','Horoscope Creation (International)':'විදේශගත පාරිභෝගිකයන් සඳහා විස්තරාත්මක කේන්දර සකස් කිරීම.','Horoscope Creation (Newborns)':'නව උපන් දරුවන්ගේ උපන් තොරතුරු අනුව පවුල් මගපෙන්වීම.','Readings for Weddings':'විවාහ ගැලපීම, සුබ වේලාවන් සහ පවුල් සම්ප්‍රදායන් සඳහා මගපෙන්වීම.','Readings for Businesses':'ව්‍යාපාර ආරම්භය සහ තීරණ සඳහා සුබ කාල පිළිබඳ මගපෙන්වීම.','Readings for Puberty':'වැඩිවිය පත් වීමේ සම්ප්‍රදායන් හා සුබ වේලාවන් පිළිබඳ මගපෙන්වීම.','Readings for Letter Readings':'නම් සහ අකුරු තෝරා ගැනීම සම්බන්ධ සංස්කෘතික මගපෙන්වීම.','Readings for Cutting Hair':'පළමු හිසකෙස් කැපීම සහ සම්ප්‍රදායික අවස්ථා සඳහා සුබ කාලය.','Readings for Piercing Ears':'කන් විදීමේ උත්සවයට සුදුසු දිනය සහ වේලාව.','Custom Readings for 3 Topics for the Next 5 Years':'ඔබ තෝරාගත් විෂය කරුණු තුනක් සඳහා වසර පහක පුද්ගලික මගපෙන්වීම.','Custom Readings for 6 Topics for the Next 10 Years':'විෂය කරුණු හයක් සඳහා වසර දහයක දීර්ඝ පලාපල.','Multiple Readings (Custom)':'සේවා කිහිපයක් එකට තෝරාගත හැකි විශේෂ පැකේජයකි.'};
function langSi(){return localStorage.getItem('hirusaraLang')==='si'}
function serviceName(s){return langSi() && siServiceNames[s.name] ? siServiceNames[s.name] : s.name}
function serviceDesc(s){return langSi() && siServiceDescs[s.name] ? siServiceDescs[s.name] : s.desc}

function getCurrency(){return document.body.dataset.currency||'gbp'}
function getServices(){return getCurrency()==='lkr'?servicesLKR:servicesGBP}
function money(v,currency){if(v===null)return 'TBD'; if(currency==='usd')return '$'+Math.ceil(v*rate); if(currency==='lkr')return 'Rs. '+Number(v).toLocaleString('en-GB'); return '£'+v;}
function bookingPage(){const c=getCurrency();return c==='usd'?'booking-international.html':c==='lkr'?'booking-sl.html':'booking.html'}
function renderServices(){
  const grid=document.querySelector('[data-services]'); if(!grid)return;
  const cur=getCurrency(); const booking=bookingPage(); const services=getServices();
  grid.innerHTML=services.map((s,i)=>`<a class="service ${s.price===null?'best':''}" href="${booking}?service=${i}">${s.price===null?'<span class="badge">Best Value • Save up to 20%</span>':''}<div class="service-icon">${s.icon}</div><h3>${i+1}. ${serviceName(s)}</h3><p class="muted">${serviceDesc(s)}</p><div class="service-meta"><span>3-7 days</span><strong class="price">${money(s.price,cur)}</strong></div></a>`).join('')
}
function initBooking(){
 const select=document.querySelector('#service'); if(!select)return; const cur=getCurrency(); const services=getServices();
 select.innerHTML='<option value="">Select a service</option>'+services.map((s,i)=>`<option value="${i}">${serviceName(s)} — ${money(s.price,cur)}</option>`).join('');
 const multi=document.querySelector('#multiBox'); const checks=document.querySelector('#checks');
 if(checks){checks.innerHTML=services.filter(s=>s.price!==null).map((s,i)=>`<label><span>${serviceName(s)} — ${money(s.price,cur)}</span><input type="checkbox" value="${i}"></label>`).join('');}
 const hidden=document.querySelector('#priceSummaryHidden');
 const shown=v=>cur==='usd'?'$'+Math.ceil(v*rate):cur==='lkr'?'Rs. '+Math.round(v).toLocaleString('en-GB'):'£'+v.toFixed(2).replace('.00','');
 function calc(){
   let subtotal=0; let chosen=[]; let discount=0;
   const multiIndex=services.findIndex(s=>s.price===null);
   if(select.value===String(multiIndex)){
     if(multi) multi.style.display='block';
     checks?.querySelectorAll('input:checked').forEach(cb=>{const s=services[+cb.value]; subtotal+=s.price; chosen.push(serviceName(s)+' '+money(s.price,cur));});
     if(cur!=='lkr'){
       if(subtotal>=25&&subtotal<=50)discount=subtotal*.10; else if(subtotal>50)discount=subtotal*.20;
     }
   } else {
     if(multi) multi.style.display='none';
     const s=services[+select.value]; if(s&&s.price!==null){subtotal=s.price; chosen=[serviceName(s)+' '+money(s.price,cur)];}
     discount=0;
   }
   let discountedTotal=subtotal-discount;
   const cap = cur==='usd' ? (150/rate) : cur==='gbp' ? 120 : 18000;
   const total=Math.min(discountedTotal,cap);
   const savings=Math.max(0,subtotal-total);
   const st=document.querySelector('#subtotal'), sv=document.querySelector('#savings'), tt=document.querySelector('#total');
   if(st)st.textContent=shown(subtotal); if(sv)sv.textContent=shown(savings); if(tt)tt.textContent=shown(total);
   if(hidden) hidden.value=`Selected: ${chosen.join(', ')} | Subtotal: ${shown(subtotal)} | Savings: ${shown(savings)} | Total: ${shown(total)}${subtotal>cap?' | Capped at '+shown(cap):''}`;
 }
 select.addEventListener('change',calc); checks?.addEventListener('change',e=>{
   if(e.target && e.target.matches('input[type="checkbox"]')){
     const v=e.target.value; const customNames=['3 Topics','6 Topics'];
     const s=services[+v];
     if(s && customNames.some(n=>s.name.includes(n) || serviceName(s).includes(n)) && e.target.checked){
       checks.querySelectorAll('input[type="checkbox"]').forEach(o=>{const so=services[+o.value]; if(o!==e.target && so && customNames.some(n=>so.name.includes(n) || serviceName(so).includes(n))) o.checked=false;});
     }
   }
   calc();
 });
 const params=new URLSearchParams(location.search); const pre=params.get('service'); if(pre!==null && services[+pre]) select.value=pre; calc();
}
function initMobileNav(){
 const nav=document.querySelector('.nav'); if(!nav)return;
 const isBooking = document.body.classList.contains('form-page') || location.pathname.includes('booking');
 const currency = getCurrency();
 const bookHref = bookingPage();
 if(!nav.querySelector('.menu-toggle')){
   const b=document.createElement('button');
   b.className='menu-toggle';
   b.type='button';
   b.innerHTML='<span></span><span></span><span></span>';
   b.setAttribute('aria-label','Open menu');
   nav.prepend(b);
   b.addEventListener('click',()=>nav.classList.toggle('open'));
 }
 if(!nav.querySelector('.lang-toggle')){
   const lang=document.createElement('button');
   lang.className='lang-toggle';
   lang.type='button';
   lang.textContent='සිංහල';
   lang.dataset.lang='en';
   nav.insertBefore(lang, nav.querySelector('.country')||nav.querySelector('.book-small')||null);
   lang.addEventListener('click',()=>{
     if(lang.dataset.lang==='en'){
       applySinhalaTranslation();
       lang.dataset.lang='si';
       lang.textContent='EN';
     } else {
       location.reload();
     }
   });
 }
 if(!nav.querySelector('.mobile-panel')){
   const countryLinks = currency==='lkr'
     ? ''
     : `<div class="mobile-title">Region</div><a href="uk.html"><img class="flag" src="assets/uk-flag.png"><span>United Kingdom</span></a><a href="international.html"><img class="flag" src="assets/international-flag.png"><span>International</span></a>`;
   const panel=document.createElement('div');
   panel.className='mobile-panel';
   panel.innerHTML=`
     <div class="mobile-list">
       ${countryLinks}
       <div class="mobile-title">Social Media</div>
       <a href="https://www.facebook.com/profile.php?id=61591588433698" target="_blank"><span class="mobile-social-icon">f</span><span>Facebook</span></a>
       <a href="https://www.instagram.com/hirusara.astro/" target="_blank"><span class="mobile-social-icon">◎</span><span>Instagram</span></a>
     </div>`;
   nav.appendChild(panel);
   panel.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
 }
 if(!document.querySelector('.mobile-book-float') && !document.body.classList.contains('landing') && !isBooking){
   const fab=document.createElement('a');
   fab.className='mobile-book-float';
   fab.href=bookHref;
   fab.setAttribute('aria-label','Book now');
   fab.innerHTML='<img src="assets/book-now-mobile.png" alt="Book Now">';
   document.body.appendChild(fab);
 }
}
const siMap={
 'HOME':'මුල් පිටුව','ABOUT':'අපි ගැන','SERVICES':'සේවාවන්','BOOK NOW':'වෙන්කරන්න','Unlock Your Future':'ඔබේ අනාගතය විවෘත කරන්න','View Services':'සේවාවන් බලන්න','Ancient wisdom • Modern guidance':'පුරාණ දැනුම • නව මගපෙන්වීම','Guiding you towards a brighter tomorrow.':'ඔබව දීප්තිමත් හෙටක් වෙත මඟ පෙන්වීම.','Hirusara Astrology & Consultancy provides personalised horoscope creation, numerology and cultural astrology readings with care, confidentiality and tradition.':'හිරුසර ජ්‍යෝතිෂ්‍ය සේවය විශ්වාසය, රහස්‍යභාවය සහ සම්ප්‍රදාය සමග පුද්ගලික කේන්දර, අංක විද්‍යා හා සංස්කෘතික කියවීම් ලබා දෙයි.','About the Astrologer':'ජ්‍යෝතිෂ්‍යවේදී ගැන','Ranjith Wickramasinghe':'රංජිත් වික්‍රමසිංහ','Ranjith Wickramasinghe is an experienced and educated astrologer specialising in horoscope creation, numerology and traditional Sri Lankan cultural readings.':'රංජිත් වික්‍රමසිංහ මහතා කේන්දර සැකසීම, අංක විද්‍යාව සහ ශ්‍රී ලාංකීය සම්ප්‍රදායික ජ්‍යෝතිෂ්‍ය කියවීම් පිළිබඳ අත්දැකීම් සහිත දැනුවත් ජ්‍යෝතිෂ්‍යවේදියෙකි.','He is also a Justice of the Peace and a retired principal, bringing professionalism, discretion and trusted guidance to every consultation.':'ඔහු සාමදාන විනිශ්චයකාරවරයෙකු සහ විශ්‍රාමික විදුහල්පතිවරයෙකු ද වන අතර, සෑම උපදේශනයකටම වෘත්තීයභාවය, රහස්‍යභාවය සහ විශ්වාසනීය මගපෙන්වීම ලබා දෙයි.','Our Services':'සේවාවන්','Astrology Services We Provide':'අපි ලබාදෙන ජ්‍යෝතිෂ්‍ය සේවාවන්','Each service is prepared with care using your personal details, birth information and consultation request.':'ඔබගේ පුද්ගලික තොරතුරු, උපන් තොරතුරු සහ විමසීම අනුව සෑම සේවාවක්ම සැලකිල්ලෙන් සකස් කරනු ලැබේ.','Book Your Consultation':'ඔබේ උපදේශනය වෙන්කරන්න','Service':'සේවාව','Full Name':'සම්පූර්ණ නම','Email Address':'ඊමේල් ලිපිනය','Date of Birth':'උපන් දිනය','Birth Time':'උපන් වේලාව','Birth Place':'උපන් ස්ථානය','Questions or Notes':'ප්‍රශ්න හෝ සටහන්','Bank Details':'බැංකු විස්තර','I Have Paid':'ගෙවීම කළා','Subtotal':'උප එකතුව','Savings':'ඉතිරිය','Total Amount':'මුළු මුදල'};
function applySinhalaTranslation(){
 document.documentElement.lang='si';
 document.querySelectorAll('a,button,p,h1,h2,h3,label,span,strong,small').forEach(el=>{
   if(el.classList && el.classList.contains('lang-toggle')) return;
   const txt=el.textContent.trim();
   if(siMap[txt]) el.textContent=siMap[txt];
 });
}
function translatePage(){
 // Always load in English on every page load. Translation only happens when the user presses the Sinhala button.
 try{localStorage.removeItem('hirusaraLang')}catch(e){}
 document.documentElement.lang='en';
}
function autoGeoRoute(){
 if(!document.body.classList.contains('landing'))return;
 // Keep desktop behaviour unchanged: only mobile Sri Lanka visitors are auto-routed.
 if(!window.matchMedia('(max-width: 980px)').matches)return;
 if(sessionStorage.getItem('hirusaraRegionSeen'))return;
 const goSL=()=>{sessionStorage.setItem('hirusaraRegionSeen','1'); location.replace('sl.html');};
 const tz=Intl.DateTimeFormat().resolvedOptions().timeZone||'';
 const lang=(navigator.language||'').toLowerCase();
 if(tz==='Asia/Colombo' || lang.includes('si-lk')){goSL();return;}
 // Optional IP based country check. This improves automatic routing on GitHub Pages,
 // while keeping the Sri Lanka page unlisted from the UK / International selector.
 const ctrl=new AbortController(); setTimeout(()=>ctrl.abort(),1800);
 fetch('https://ipapi.co/json/',{signal:ctrl.signal})
   .then(r=>r.ok?r.json():null)
   .then(d=>{if(d && d.country_code==='LK')goSL();})
   .catch(()=>{});
}
renderServices(); initBooking(); initMobileNav(); translatePage(); autoGeoRoute();
