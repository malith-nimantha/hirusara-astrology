const servicesGBP=[
{icon:'📜',name:'Horoscope Preparation (Local)',si:'දේශීය ජන්ම පත්‍රයක් සෑදීම',price:20,desc:'A detailed and accurate horoscope prepared from the date, time and place of birth.'},
{icon:'🌍',name:'Horoscope Preparation (Foreign)',si:'විදේශීය ජන්ම පත්‍රයක් සෑදීම',price:20,desc:'A detailed and accurate horoscope prepared from the date, time and place of birth at a foreign location.'},
{icon:'🗓️',name:'Prediction Report (For 1 Year)',si:'පලාපල වාර්තාව (වසරක් සඳහා)',price:20,desc:'A detailed prediction report for the next 12 months, covering the major areas of life.'},
{icon:'🔭',name:'Prediction Report (For 5 Years)',si:'පලාපල වාර්තාව (වසර පහක් සඳහා)',price:25,desc:'A detailed prediction report for the next five years, covering the major areas of life.'},
{icon:'👶',name:'Horoscope Preparation for a Newborn',si:'අලුත උපන් දරුවකු සඳහා ජන්ම පත්‍රයක්',price:20,desc:'A detailed and accurate newborn horoscope, including a one-year prediction report.'},
{icon:'💍',name:'Marriage Compatibility Analysis',si:'විවාහ පොරොන්දම් පරීක්ෂාව හා දෝෂ විශ්ලේෂණය',price:30,desc:'A detailed comparison with a compatibility score and careful analysis of potential marital concerns.'},
{icon:'🏠',name:'Auspicious Times for Home and Business Related Events',si:'නිවාස හා ව්‍යාපාරික කටයුතු සඳහා නැකත්',price:20,desc:'Auspicious times for construction, housewarming, laying foundation stones and other home or business-related ceremonies.'},
{icon:'✨',name:'General Auspicious Times',si:'සාමාන්‍ය නැකත්',price:20,desc:'Auspicious times for ceremonies such as first reading, ear piercing, first haircut and other important occasions.'},
{icon:'🔤',name:'Auspicious Letters for the Child',si:'දරුවාගේ නමට සුබ අකුරු',price:20,desc:'Auspicious letters for a child’s name, selected according to the child’s horoscope.'},
{icon:'🏢',name:'Auspicious Letters for the Business',si:'ස්ථානයේ නමට අකුරු',price:20,desc:'Auspicious letters for a business name, selected according to the owner’s horoscope.'},
{icon:'🌸',name:'Puberty Auspicious Times',si:'මල්වර නැකත්',price:25,desc:'An auspicious time for a daughter’s puberty ceremony, based on the date, time and place of puberty and Sri Lankan astrological tradition.'},
{icon:'💒',name:'Wedding Auspicious Times',si:'විවාහ නැකත්',price:40,desc:'A complete set of auspicious times required for a traditional wedding ceremony.'}
];
const servicesLKR=[
{icon:'📜',name:'Horoscope Preparation (Local)',si:'දේශීය ජන්ම පත්‍රයක් සෑදීම',price:3000,desc:'උපන් දිනය, වේලාව සහ ස්ථානය අනුව සවිස්තරාත්මක හා නිවැරදි ජන්ම පත්‍රයක් සකස් කිරීම.'},
{icon:'🌍',name:'Horoscope Preparation (Foreign)',si:'විදේශීය ජන්ම පත්‍රයක් සෑදීම',price:4000,desc:'විදේශීය උපන් ස්ථානයක් සඳහා උපන් දිනය, වේලාව සහ ස්ථානය අනුව සවිස්තරාත්මක ජන්ම පත්‍රයක් සකස් කිරීම.'},
{icon:'🗓️',name:'Prediction Report (For 1 Year)',si:'පලාපල වාර්තාව (වසරක් සඳහා)',price:3000,desc:'ජීවිතයේ ප්‍රධාන අංශ ආවරණය කරන ඉදිරි මාස 12 සඳහා සවිස්තරාත්මක පලාපල වාර්තාවක්.'},
{icon:'🔭',name:'Prediction Report (For 5 Years)',si:'පලාපල වාර්තාව (වසර පහක් සඳහා)',price:3500,desc:'ජීවිතයේ ප්‍රධාන අංශ ආවරණය කරන ඉදිරි වසර පහ සඳහා සවිස්තරාත්මක පලාපල වාර්තාවක්.'},
{icon:'👶',name:'Horoscope Preparation for a Newborn',si:'අලුත උපන් දරුවකු සඳහා ජන්ම පත්‍රයක්',price:3000,desc:'අලුත උපන් දරුවකු සඳහා වසරක පලාපල වාර්තාවක් සමඟ සවිස්තරාත්මක ජන්ම පත්‍රයක්.'},
{icon:'💍',name:'Marriage Compatibility Analysis',si:'විවාහ පොරොන්දම් පරීක්ෂාව හා දෝෂ විශ්ලේෂණය',price:3500,desc:'ගැළපීමේ ලකුණු, සවිස්තරාත්මක සංසන්දනය සහ විවාහ දෝෂ පිළිබඳ නිවැරදි විශ්ලේෂණය.'},
{icon:'🏠',name:'Auspicious Times for Home and Business Related Events',si:'නිවාස හා ව්‍යාපාරික කටයුතු සඳහා නැකත්',price:3000,desc:'ඉදිකිරීම්, ගෙවදීම, මුල්ගල් තැබීම සහ වෙනත් නිවාස හෝ ව්‍යාපාරික සුබ කටයුතු සඳහා නැකත්.'},
{icon:'✨',name:'General Auspicious Times',si:'සාමාන්‍ය නැකත්',price:2500,desc:'අකුරු කියවීම, කන් විදීම, පළමු හිසකෙස් කැපීම සහ වෙනත් සුබ කටයුතු සඳහා නැකත්.'},
{icon:'🔤',name:'Auspicious Letters for the Child',si:'දරුවාගේ නමට සුබ අකුරු',price:2500,desc:'දරුවාගේ ජන්ම පත්‍රය අනුව නම තැබීමට සුබ අකුරු.'},
{icon:'🏢',name:'Auspicious Letters for the Business',si:'ස්ථානයේ නමට අකුරු',price:2500,desc:'ව්‍යාපාර හිමිකරුගේ ජන්ම පත්‍රය අනුව ව්‍යාපාර නාමයට සුබ අකුරු.'},
{icon:'🌸',name:'Puberty Auspicious Times',si:'මල්වර නැකත්',price:2500,desc:'මල්වර වූ දිනය, වේලාව සහ ස්ථානය අනුව දියණියගේ මල්වර උත්සවයට සුබ වේලාව.'},
{icon:'💒',name:'Wedding Auspicious Times',si:'විවාහ නැකත්',price:18000,desc:'සාම්ප්‍රදායික විවාහ උත්සවයක් සඳහා අවශ්‍ය සියලුම සුබ නැකත්.'}
];
const rate=1.30;
const siServiceNames=Object.fromEntries(servicesGBP.map(s=>[s.name,s.si]));
const siServiceDescs={
'Horoscope Preparation (Local)':'උපන් දිනය, වේලාව සහ ස්ථානය අනුව සවිස්තරාත්මක හා නිවැරදි ජන්ම පත්‍රයක් සකස් කිරීම.',
'Horoscope Preparation (Foreign)':'විදේශීය උපන් ස්ථානයක් සඳහා උපන් දිනය, වේලාව සහ ස්ථානය අනුව සවිස්තරාත්මක ජන්ම පත්‍රයක් සකස් කිරීම.',
'Prediction Report (For 1 Year)':'ජීවිතයේ ප්‍රධාන අංශ ආවරණය කරන ඉදිරි මාස 12 සඳහා සවිස්තරාත්මක පලාපල වාර්තාවක්.',
'Prediction Report (For 5 Years)':'ජීවිතයේ ප්‍රධාන අංශ ආවරණය කරන ඉදිරි වසර පහ සඳහා සවිස්තරාත්මක පලාපල වාර්තාවක්.',
'Horoscope Preparation for a Newborn':'අලුත උපන් දරුවකු සඳහා වසරක පලාපල වාර්තාවක් සමඟ සවිස්තරාත්මක ජන්ම පත්‍රයක්.',
'Marriage Compatibility Analysis':'ගැළපීමේ ලකුණු, සවිස්තරාත්මක සංසන්දනය සහ විවාහ දෝෂ පිළිබඳ නිවැරදි විශ්ලේෂණය.',
'Auspicious Times for Home and Business Related Events':'ඉදිකිරීම්, ගෙවදීම, මුල්ගල් තැබීම සහ වෙනත් නිවාස හෝ ව්‍යාපාරික සුබ කටයුතු සඳහා නැකත්.',
'General Auspicious Times':'අකුරු කියවීම, කන් විදීම, පළමු හිසකෙස් කැපීම සහ වෙනත් සුබ කටයුතු සඳහා නැකත්.',
'Auspicious Letters for the Child':'දරුවාගේ ජන්ම පත්‍රය අනුව නම තැබීමට සුබ අකුරු.',
'Auspicious Letters for the Business':'ව්‍යාපාර හිමිකරුගේ ජන්ම පත්‍රය අනුව ව්‍යාපාර නාමයට සුබ අකුරු.',
'Puberty Auspicious Times':'මල්වර වූ දිනය, වේලාව සහ ස්ථානය අනුව දියණියගේ මල්වර උත්සවයට සුබ වේලාව.',
'Wedding Auspicious Times':'සාම්ප්‍රදායික විවාහ උත්සවයක් සඳහා අවශ්‍ය සියලුම සුබ නැකත්.'
};
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
  grid.innerHTML=services.map((s,i)=>`<a class="service" href="${booking}?service=${i}"><div class="service-icon">${s.icon}</div><h3>${i+1}. ${serviceName(s)}</h3><p class="muted">${serviceDesc(s)}</p><div class="service-meta"><span>3-7 days</span><strong class="price">${money(s.price,cur)}</strong></div></a>`).join('')
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
function makePersonIcon(){return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4.2 4.2 0 1 0 0-8.4A4.2 4.2 0 0 0 12 12Zm0 2.2c-4.5 0-8 2.25-8 5.1 0 .7.55 1.1 1.25 1.1h13.5c.7 0 1.25-.4 1.25-1.1 0-2.85-3.5-5.1-8-5.1Z"/></svg>`}

function makeWhatsAppIcon(){return `<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.02 3.2A12.72 12.72 0 0 0 5.2 22.6L3.7 28.8l6.34-1.48A12.7 12.7 0 1 0 16.02 3.2Zm0 22.9c-2.02 0-3.9-.58-5.5-1.58l-.4-.24-3.75.88.9-3.66-.26-.42A10.15 10.15 0 1 1 16.02 26.1Zm5.58-7.58c-.3-.15-1.8-.88-2.08-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.68-1.65-.94-2.26-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.8-.74 2.05-1.45.25-.7.25-1.3.18-1.44-.08-.13-.28-.2-.58-.35Z"/></svg>`}

function closeHeaderMenus(except){
 document.querySelectorAll('.country.is-open,.icon-control.is-open,.lang-control.is-open').forEach(el=>{if(el!==except)el.classList.remove('is-open')});
}
function setupHeaderDropdowns(){
 document.querySelectorAll('.country').forEach(c=>{
   const b=c.querySelector('button'); if(!b || b.dataset.clickReady)return; b.dataset.clickReady='1';
   b.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();const open=c.classList.toggle('is-open');closeHeaderMenus(open?c:null);});
 });
 document.addEventListener('click',()=>closeHeaderMenus(null));
}
function ensureAccountControl(nav){
 if(nav.querySelector('.account-control'))return;
 const holder=document.createElement('div');
 holder.className='icon-control account-control';
 holder.innerHTML=`<button class="account-btn" type="button" aria-label="Account">${makePersonIcon()}</button><div class="control-menu account-menu"></div>`;
 const old=nav.querySelector('.login-link');
 if(old) old.insertAdjacentElement('afterend',holder); else nav.insertBefore(holder, nav.querySelector('.book-small')||null);
 const btn=holder.querySelector('.account-btn');
 btn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();const open=holder.classList.toggle('is-open');closeHeaderMenus(open?holder:null);});
 renderAccountMenu(holder);
}
function renderAccountMenu(holder){
 const menu=holder.querySelector('.account-menu'); if(!menu)return;
 const logged=sessionStorage.getItem('hirusaraAdmin')==='1';
 if(logged){menu.innerHTML=`<a href="admin.html">Account</a><button type="button" data-admin-logout>Logout</button>`;}
 else{menu.innerHTML=`<a href="admin.html">Login</a>`;}
 menu.querySelector('[data-admin-logout]')?.addEventListener('click',()=>{sessionStorage.removeItem('hirusaraAdmin');location.reload();});
}
function renderAllAccountMenus(){document.querySelectorAll('.account-control').forEach(renderAccountMenu)}
function ensureLangControl(nav){
 if(nav.querySelector('.lang-control'))return;
 const holder=document.createElement('div'); holder.className='lang-control';
 holder.innerHTML=`<button class="lang-btn" type="button" aria-label="Language">EN</button><div class="control-menu lang-menu"><button type="button" data-lang-choice="en">English</button><button type="button" data-lang-choice="si">සිංහල</button></div>`;
 nav.insertBefore(holder, nav.querySelector('.country')||nav.querySelector('.account-control')||nav.querySelector('.book-small')||null);
 const btn=holder.querySelector('.lang-btn');
 btn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();const open=holder.classList.toggle('is-open');closeHeaderMenus(open?holder:null);});
 holder.querySelectorAll('[data-lang-choice]').forEach(choice=>choice.addEventListener('click',()=>{
   const lang=choice.dataset.langChoice;
   if(lang==='si'){
     localStorage.setItem('hirusaraLang','si'); document.documentElement.lang='si'; btn.textContent='සි'; renderServices(); initBooking(); applySinhalaTranslation();
   }else{
     localStorage.removeItem('hirusaraLang'); location.reload();
   }
   holder.classList.remove('is-open');
 }));
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
 ensureLangControl(nav);
 ensureAccountControl(nav);
 setupHeaderDropdowns();
 if(!nav.querySelector('.mobile-panel')){
   const countryLinks = currency==='lkr'
     ? ''
     : `<div class="mobile-title">Region</div><a href="uk.html"><img class="flag" src="assets/uk-flag.png"><span>United Kingdom</span></a><a href="international.html"><img class="flag" src="assets/international-flag.png"><span>International</span></a>`;
   const panel=document.createElement('div');
   panel.className='mobile-panel';
   panel.innerHTML=`
     <div class="mobile-list">
       ${countryLinks}
       <div class="mobile-title">Language</div>
       <button type="button" class="mobile-menu-row mobile-lang-choice" data-lang-choice="en"><span class="mobile-social-icon">EN</span><span>English</span></button>
       <button type="button" class="mobile-menu-row mobile-lang-choice" data-lang-choice="si"><span class="mobile-social-icon">සි</span><span>සිංහල</span></button>
       <div class="mobile-title">Social Media</div>
       <a href="https://wa.me/447493157312" target="_blank"><span class="mobile-social-icon whatsapp-menu-icon">${makeWhatsAppIcon()}</span><span>WhatsApp</span></a>
       <a href="https://www.facebook.com/profile.php?id=61591588433698" target="_blank"><span class="mobile-social-icon">f</span><span>Facebook</span></a>
       <a href="https://www.instagram.com/hirusara.astro/" target="_blank"><span class="mobile-social-icon">◎</span><span>Instagram</span></a>
     </div>`;
   nav.appendChild(panel);
   panel.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
   panel.querySelectorAll('[data-lang-choice]').forEach(choice=>choice.addEventListener('click',()=>{
     const lang=choice.dataset.langChoice;
     if(lang==='si'){localStorage.setItem('hirusaraLang','si');document.documentElement.lang='si';renderServices();initBooking();applySinhalaTranslation();}
     else{localStorage.removeItem('hirusaraLang');location.reload();}
     nav.classList.remove('open');
   }));
 }
 if(!document.querySelector('.mobile-book-float') && !document.body.classList.contains('landing') && !isBooking){
   const fab=document.createElement('a');
   fab.className='mobile-book-float';
   fab.href=bookHref;
   fab.setAttribute('aria-label','Book now');
   fab.innerHTML='<img src="assets/book-now-mobile-v26.png" alt="Book Now">';
   document.body.appendChild(fab);
 }
}
const siMap={
 'HOME':'මුල් පිටුව','ABOUT':'අපි ගැන','SERVICES':'සේවාවන්','BOOK NOW':'වෙන්කරන්න','Unlock Your Future':'ඔබේ අනාගතය විවෘත කරන්න','View Services':'සේවාවන් බලන්න','Ancient wisdom • Modern guidance':'පුරාණ දැනුම • නව මගපෙන්වීම','Guiding you towards a brighter tomorrow.':'ඔබව දීප්තිමත් හෙටක් වෙත මඟ පෙන්වීම.','Hirusara Astrology & Consultancy provides personalised horoscope creation, numerology and cultural astrology readings with care, confidentiality and tradition.':'හිරුසර ජ්‍යෝතිෂ්‍ය සේවය විශ්වාසය, රහස්‍යභාවය සහ සම්ප්‍රදාය සමග පුද්ගලික කේන්දර, අංක විද්‍යා හා සංස්කෘතික කියවීම් ලබා දෙයි.','About the Astrologer':'ජ්‍යෝතිෂ්‍යවේදී ගැන','Ranjith Wickramasinghe':'රංජිත් වික්‍රමසිංහ','Ranjith Wickramasinghe is an experienced and educated astrologer specialising in horoscope creation, numerology and traditional Sri Lankan cultural readings.':'රංජිත් වික්‍රමසිංහ මහතා කේන්දර සැකසීම, අංක විද්‍යාව සහ ශ්‍රී ලාංකීය සම්ප්‍රදායික ජ්‍යෝතිෂ්‍ය කියවීම් පිළිබඳ අත්දැකීම් සහිත දැනුවත් ජ්‍යෝතිෂ්‍යවේදියෙකි.','He is also a Justice of the Peace and a retired principal, bringing professionalism, discretion and trusted guidance to every consultation.':'ඔහු සාමදාන විනිශ්චයකාරවරයෙකු සහ විශ්‍රාමික විදුහල්පතිවරයෙකු ද වන අතර, සෑම උපදේශනයකටම වෘත්තීයභාවය, රහස්‍යභාවය සහ විශ්වාසනීය මගපෙන්වීම ලබා දෙයි.','Our Services':'සේවාවන්','Astrology Services We Provide':'අපි ලබාදෙන ජ්‍යෝතිෂ්‍ය සේවාවන්','Your personal information is treated with strict confidentiality, and every astrological service is prepared with the utmost care and professionalism.':'පෞද්ගලික තොරතුරු පූර්ණ රහස්‍යභාවයෙන් ආරක්ෂා කරමින්, සෑම ජ්‍යෝතිෂ සේවාවක්ම ඉහළ ප්‍රමිතියකින් සහ සැලකිල්ලෙන් සකස් කරනු ලැබේ.','Astrologist':'ප්‍රවීන ජෝතිර්වේදී','Numerologist':'අංක විද්‍යාවේදී','Vastu Consultant':'වාස්තු විද්‍යාවේදී','Retired School Principal':'විශ්‍රාමික විදුහල්පති','All-island Justice of the Peace':'සමස්ත ලංකා සාම විනිසුරු','Professional Expertise':'වෘත්තීය ප්‍රවීණත්වය','Your consultation is prepared by an experienced and educated astrologer with specialist knowledge across multiple disciplines.':'පළපුරුදු හා අධ්‍යාපිත ජ්‍යෝතිෂ්‍යවේදියෙකු විසින් විවිධ ක්ෂේත්‍රයන්හි විශේෂ දැනුම සමඟ ඔබගේ උපදේශනය සකස් කරනු ලැබේ.','Privacy & Security':'රහස්‍යභාවය හා ආරක්ෂාව','Your personal information and payment details are handled securely and with complete confidentiality.':'ඔබගේ පෞද්ගලික තොරතුරු සහ ගෙවීම් විස්තර සම්පූර්ණ රහස්‍යභාවයෙන් හා ආරක්ෂිතව හැසිරවෙයි.','Prompt Delivery':'කඩිනම් සේවාව','Completed reports are normally delivered within 3–7 days by email or WhatsApp.':'සම්පූර්ණ කළ වාර්තා සාමාන්‍යයෙන් දින 3–7ක් ඇතුළත ඊමේල් හෝ WhatsApp මඟින් ලබාදේ.','Expert guidance. Secure service. Prompt delivery.':'ප්‍රවීණ මගපෙන්වීම. ආරක්ෂිත සේවාව. කඩිනම් ලබාදීම.','Experienced, qualified astrological guidance.':'පළපුරුදු හා සුදුසුකම් ලත් ජ්‍යෝතිෂ්‍ය මගපෙන්වීම.','Your details and payments remain confidential.':'ඔබගේ තොරතුරු සහ ගෙවීම් රහස්‍යව ආරක්ෂා කෙරේ.','Reports delivered in 3–7 days by email or WhatsApp.':'වාර්තා දින 3–7ක් ඇතුළත ඊමේල් හෝ WhatsApp මඟින් ලබාදේ.','BLOGS':'ලිපි','Book Your Consultation':'ඔබේ උපදේශනය වෙන්කරන්න','Service':'සේවාව','Full Name':'සම්පූර්ණ නම','Email Address':'ඊමේල් ලිපිනය','Date of Birth':'උපන් දිනය','Birth Time':'උපන් වේලාව','Birth Place':'උපන් ස්ථානය','Questions or Notes':'ප්‍රශ්න හෝ සටහන්','Bank Details':'බැංකු විස්තර','I Have Paid':'ගෙවීම කළා','Subtotal':'උප එකතුව','Savings':'ඉතිරිය','Total Amount':'මුළු මුදල'};
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
 const goSL=()=>{sessionStorage.setItem('hirusaraRegionSeen','1'); location.replace('sl.html');};
 const tz=Intl.DateTimeFormat().resolvedOptions().timeZone||'';
 const langs=[navigator.language||'',...(navigator.languages||[])].join(' ').toLowerCase();
 if(tz==='Asia/Colombo' || langs.includes('si-lk') || langs.includes('en-lk')){goSL();return;}
 const checked=sessionStorage.getItem('hirusaraGeoChecked');
 if(checked==='LK'){goSL();return;}
 if(checked==='OTHER' && sessionStorage.getItem('hirusaraRegionSeen'))return;
 const ctrl=new AbortController(); setTimeout(()=>ctrl.abort(),2600);
 fetch('https://ipapi.co/json/',{signal:ctrl.signal})
   .then(r=>r.ok?r.json():null)
   .then(d=>{
      if(d && d.country_code==='LK'){sessionStorage.setItem('hirusaraGeoChecked','LK');goSL();return;}
      return fetch('https://ipwho.is/',{signal:ctrl.signal}).then(r=>r.ok?r.json():null).then(x=>{
        if(x && x.country_code==='LK'){sessionStorage.setItem('hirusaraGeoChecked','LK');goSL();}
        else sessionStorage.setItem('hirusaraGeoChecked','OTHER');
      });
   })
   .catch(()=>{});
}

function getReviews(){try{return JSON.parse(localStorage.getItem('hirusaraReviews')||'[]')}catch(e){return []}}
function saveReviews(list){localStorage.setItem('hirusaraReviews',JSON.stringify(list))}
function showToast(msg){const t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),2600)}
function initReviews(){
 const form=document.getElementById('reviewForm');
 const stars=document.querySelectorAll('#reviewStars .star');
 const rating=document.getElementById('reviewRating');
 if(stars.length){const paint=(n)=>stars.forEach(s=>s.classList.toggle('active',+s.dataset.star<=n));paint(5);stars.forEach(s=>s.addEventListener('click',()=>{rating.value=s.dataset.star;paint(+s.dataset.star)}));}
 if(form){form.addEventListener('submit',e=>{e.preventDefault();const list=getReviews();list.push({id:Date.now(),name:document.getElementById('reviewName').value.trim(),rating:+rating.value||5,text:document.getElementById('reviewText').value.trim(),status:'pending',created:new Date().toISOString()});saveReviews(list);form.reset();rating.value=5;stars.forEach(s=>s.classList.add('active'));showToast('Review has been received.');});}
 renderTestimonials();
}
let testimonialTimer=null;
function renderTestimonials(){const box=document.getElementById('testimonials'), card=document.getElementById('testimonialCard'); if(!box||!card)return; const approved=getReviews().filter(r=>r.status==='approved'); if(approved.length<3){box.style.display='none';return;} box.style.display='block'; let i=0; const draw=()=>{const r=approved[i%approved.length];card.innerHTML=`<div class="testimonial-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div><h3>${r.name}</h3><p class="muted">“${r.text}”</p>`;i++;}; draw(); if(testimonialTimer)clearInterval(testimonialTimer); testimonialTimer=setInterval(draw,8000);}
function setLoginLinks(){
 const isBooking=location.pathname.includes('booking');
 const isAdmin=sessionStorage.getItem('hirusaraAdmin')==='1';
 document.querySelectorAll('.login-link').forEach(a=>{
   if(isBooking){a.style.display='none';return;}
   a.style.display='inline-flex';
   a.textContent=isAdmin?'ACCOUNT':'LOGIN';
   a.href='admin.html';
 });
}
function initAdmin(){
 const login=document.getElementById('adminLogin'), panel=document.getElementById('adminPanel'), list=document.getElementById('adminReviews'), userBar=document.getElementById('adminUserBar'), title=document.getElementById('adminTitle'), card=document.querySelector('.admin-card');
 if(!login)return;
 const logged=()=>sessionStorage.getItem('hirusaraAdmin')==='1';
 const render=()=>{
   if(!logged()){
     panel.style.display='none'; login.style.display='block';
     if(card) card.classList.add('login-mode');
     if(userBar) userBar.style.display='none'; if(title){title.textContent='Admin Login'; title.classList.remove('admin-small-title');}
     setLoginLinks();
     return;
   }
   login.style.display='none'; panel.style.display='block';
   if(card) card.classList.remove('login-mode');
   if(userBar) userBar.style.display='flex'; if(title){title.textContent='Admin Login'; title.classList.add('admin-small-title');}
   setLoginLinks();
   const rows=getReviews();
   const approved=rows.filter(r=>r.status==='approved');
   const pending=rows.filter(r=>r.status!=='approved');
   const cardHtml=(r,type)=>`<div class="admin-item ${type==='approved'?'approved-review':'pending-review'}"><strong>${r.name}</strong> <span class="testimonial-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</span><span class="admin-status ${type==='approved'?'approved':''}">${type==='approved'?'Approved / Live':'Pending Review'}</span><p>${r.text}</p><div class="admin-actions">${type==='approved'?'':`<button data-act="approve" data-id="${r.id}">Approve</button>`}<button data-act="delete" data-id="${r.id}">Delete</button></div></div>`;
   list.innerHTML = rows.length ? `<div class="admin-section"><h3>Approved Reviews / Current Testimonials</h3><p class="muted">These reviews are approved and can appear in the rotating testimonials section.</p>${approved.length?approved.map(r=>cardHtml(r,'approved')).join(''):'<p class="muted">No approved reviews yet.</p>'}</div><div class="admin-section"><h3>Pending Reviews</h3><p class="muted">Approve reviews to publish them, or delete anything unsuitable.</p>${pending.length?pending.map(r=>cardHtml(r,'pending')).join(''):'<p class="muted">No pending reviews.</p>'}</div>` : '<p class="muted">No reviews submitted yet.</p>';
 };
 login.addEventListener('submit',e=>{e.preventDefault();const email=document.getElementById('adminEmail').value.trim();const pass=document.getElementById('adminPass').value;if(email==='hirusara.astro@gmail.com'&&pass==='KAMAra@57'){sessionStorage.setItem('hirusaraAdmin','1');render();}else showToast('Invalid login details.');});
 list?.addEventListener('click',e=>{
   const btn=e.target.closest('button');if(!btn)return;let rows=getReviews();const id=+btn.dataset.id;
   if(btn.dataset.act==='approve')rows=rows.map(r=>r.id===id?{...r,status:'approved'}:r);
   if(btn.dataset.act==='delete'){
     const actions=btn.closest('.admin-actions');
     if(actions){actions.innerHTML=`<span class="confirm-delete">Are you sure?</span><button data-act="confirm-delete" data-id="${id}">Yes</button><button data-act="cancel-delete" data-id="${id}">No</button>`;}
     return;
   }
   if(btn.dataset.act==='confirm-delete')rows=rows.filter(r=>r.id!==id);
   if(btn.dataset.act==='cancel-delete'){render();return;}
   saveReviews(rows);render();
 });
 document.getElementById('logoutAdmin')?.addEventListener('click',()=>{sessionStorage.removeItem('hirusaraAdmin');location.reload();});
 render();
}
function initPasswordToggle(){
 const eyeClosed='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6c2 0 3.7.5 5.1 1.3L19.4 5 21 6.6 5.6 22 4 20.4l2.3-2.3C3.8 16.4 2.5 12 2.5 12Zm7.2 2.9 1.4-1.4a2.2 2.2 0 0 1-.6-1.5 2.4 2.4 0 0 1 2.4-2.4c.6 0 1.1.2 1.5.6l1.4-1.4A5 5 0 0 0 7 12c0 1.1.4 2.1 1.1 3l1.6-.1Zm2.3 3.1c-4.4 0-7.2-3.6-8.3-5.5.5-.8 1.5-2.1 3-3.2L8 8c-2.7 1.8-4.2 4-5.5 6 1.4 2.4 4.8 6 9.5 6 1.9 0 3.5-.4 5-1.2l-1.6-1.6c-1 .5-2.1.8-3.4.8Zm9.5-6c-.6 1-1.6 2.5-3.1 3.7L17 14.3c.5-.7.8-1.5.8-2.3a5 5 0 0 0-5-5c-.8 0-1.6.2-2.3.6L8.9 6.1A9.8 9.8 0 0 1 12 5c6 0 9.5 7 9.5 7Z"/></svg>';
 const eyeOpen='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5c6 0 9.5 7 9.5 7S18 19 12 19s-9.5-7-9.5-7S6 5 12 5Zm0 2C8.1 7 5.4 10.2 4.8 12c.6 1.8 3.3 5 7.2 5s6.6-3.2 7.2-5c-.6-1.8-3.3-5-7.2-5Zm0 2.2A2.8 2.8 0 1 1 12 14.8 2.8 2.8 0 0 1 12 9.2Z"/></svg>';
 document.querySelectorAll('.password-wrap').forEach(w=>{const input=w.querySelector('input'), btn=w.querySelector('.password-toggle'); if(!input||!btn)return; btn.innerHTML=eyeClosed; btn.addEventListener('click',()=>{const show=input.type==='password'; input.type=show?'text':'password'; btn.innerHTML=show?eyeOpen:eyeClosed; btn.setAttribute('aria-label',show?'Hide password':'Show password');});});
}
function syncLoginVisibility(){ setLoginLinks(); renderAllAccountMenus(); }

function rememberRegion(){
 document.querySelectorAll('.choice-card').forEach(a=>a.addEventListener('click',()=>{const href=a.getAttribute('href')||'';const region=href.includes('international')?'international':'uk';localStorage.setItem('hirusaraRegion',region);}));
 document.querySelectorAll('.country .menu a,.mobile-panel a[href="uk.html"],.mobile-panel a[href="international.html"]').forEach(a=>a.addEventListener('click',()=>{const href=a.getAttribute('href')||'';localStorage.setItem('hirusaraRegion',href.includes('international')?'international':'uk');}));
 if(document.body.classList.contains('landing')){
   const saved=localStorage.getItem('hirusaraRegion');
   if(saved==='uk') location.replace('uk.html');
   if(saved==='international') location.replace('international.html');
 }
}
function getBlogs(){try{return JSON.parse(localStorage.getItem('hirusaraBlogs')||'[]')}catch(e){return []}}
function saveBlogs(v){localStorage.setItem('hirusaraBlogs',JSON.stringify(v))}
function renderBlogs(){
 const list=document.getElementById('blogList'); if(!list)return;
 const blogs=getBlogs().sort((a,b)=>new Date(b.created)-new Date(a.created));
 if(!blogs.length){list.innerHTML='<div class="panel empty-state"><h2>No blog posts yet</h2><p class="muted">New astrology articles and guidance will appear here.</p></div>';return;}
 const isAdmin=sessionStorage.getItem('hirusaraAdmin')==='1';
 const fbIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07C2 17.1 5.66 21.27 10.44 22v-7.03H7.9v-2.9h2.54V9.86c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.74l-.44 2.9h-2.3V22C18.34 21.27 22 17.1 22 12.07z"/></svg>';
 const trashIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7h12l-1 14H7L6 7zm3-4h6l1 2h4v2H4V5h4l1-2z"/></svg>';
 list.innerHTML=blogs.map((b,i)=>{
   const detailUrl=`blog-post.html?id=${encodeURIComponent(b.id)}`;
   const shareUrl=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(new URL(detailUrl,location.href).href)}`;
   const limit=i===0?260:150;
   const excerpt=escapeHtml(b.body.slice(0,limit))+(b.body.length>limit?'…':'');
   return `<article class="panel blog-card ${i===0?'featured-blog':''}" data-blog-id="${b.id}">${i===0?'<span class="blog-badge">Latest Post</span>':''}${b.image?`<img class="blog-image" src="${b.image}" alt="">`:''}<a class="blog-card-link" href="${detailUrl}"><p class="eyebrow">${new Date(b.created).toLocaleDateString()}</p><h2>${escapeHtml(b.title)}</h2><p class="blog-excerpt">${excerpt}</p></a><div class="blog-icon-actions"><a class="blog-icon-btn" title="Share on Facebook" target="_blank" href="${shareUrl}">${fbIcon}</a>${isAdmin?`<button class="blog-icon-btn blog-delete-btn" title="Delete" type="button" data-public-blog-delete="${b.id}">${trashIcon}</button>`:''}</div></article>`;
 }).join('');
 list.onclick=async e=>{
   const del=e.target.closest('[data-public-blog-delete]');
   if(del){if(confirm('Delete this blog post?')){saveBlogs(getBlogs().filter(b=>b.id!==+del.dataset.publicBlogDelete));renderBlogs();}return;}
 };
}
function renderSingleBlog(){
 const box=document.getElementById('singleBlog'); if(!box)return;
 const id=+new URLSearchParams(location.search).get('id'); const b=getBlogs().find(x=>x.id===id);
 if(!b){box.innerHTML='<article class="panel single-blog-card"><h1>Blog post not found</h1><p class="muted">This article may have been removed.</p></article>';return;}
 const shareUrl=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`;
 box.innerHTML=`<article class="panel single-blog-card">${b.image?`<img class="blog-image" src="${b.image}" alt="">`:''}<p class="eyebrow">${new Date(b.created).toLocaleDateString()}</p><h1>${escapeHtml(b.title)}</h1><div class="blog-body">${escapeHtml(b.body).replace(/\n/g,'<br>')}</div><div class="blog-icon-actions"><a class="blog-icon-btn" target="_blank" title="Share on Facebook" href="${shareUrl}"><svg viewBox="0 0 24 24"><path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07C2 17.1 5.66 21.27 10.44 22v-7.03H7.9v-2.9h2.54V9.86c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.74l-.44 2.9h-2.3V22C18.34 21.27 22 17.1 22 12.07z"/></svg></a></div></article>`;
}
function escapeHtml(v){return String(v||'').replace(/[&<>\"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#039;'}[m]))}
function initBlogComposer(){
 const composer=document.getElementById('blogAdminComposer');
 const form=document.getElementById('blogForm');
 const isAdmin=sessionStorage.getItem('hirusaraAdmin')==='1';
 if(composer) composer.hidden=!isAdmin;
 if(!isAdmin||!form) return;
 form.addEventListener('submit',async e=>{
   e.preventDefault();
   const title=document.getElementById('blogTitle').value.trim();
   const body=document.getElementById('blogBody').value.trim();
   const file=document.getElementById('blogImage').files[0];
   let image='';
   if(file) image=await fileToDataUrl(file);
   const blogs=getBlogs();
   blogs.push({id:Date.now(),title,body,image,created:new Date().toISOString()});
   saveBlogs(blogs);
   form.reset();
   renderBlogs();
   showToast('Blog post published.');
 });
}
function fileToDataUrl(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file)})}
renderServices(); initBooking(); initMobileNav(); initReviews(); initAdmin(); initPasswordToggle(); syncLoginVisibility(); translatePage(); autoGeoRoute(); rememberRegion(); renderBlogs(); renderSingleBlog(); initBlogComposer();
