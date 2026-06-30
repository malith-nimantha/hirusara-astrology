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
const rate=1.30;
function money(v,currency){if(v===null)return 'TBD';return currency==='usd'?'$'+Math.ceil(v*rate):'£'+v;}
function getCurrency(){return document.body.dataset.currency||'gbp'}
function bookingPage(){return getCurrency()==='usd'?'booking-international.html':'booking.html'}
function renderServices(){
  const grid=document.querySelector('[data-services]'); if(!grid)return;
  const cur=getCurrency(); const booking=bookingPage();
  grid.innerHTML=servicesGBP.map((s,i)=>`<a class="service ${s.price===null?'best':''}" href="${booking}?service=${i}">${s.price===null?'<span class="badge">Best Value • Save up to 20%</span>':''}<div class="service-icon">${s.icon}</div><h3>${i+1}. ${s.name}</h3><p class="muted">${s.desc}</p><div class="service-meta"><span>3-7 days</span><strong class="price">${money(s.price,cur)}</strong></div></a>`).join('')
}
function initBooking(){
 const select=document.querySelector('#service'); if(!select)return; const cur=getCurrency();
 select.innerHTML='<option value="">Select a service</option>'+servicesGBP.map((s,i)=>`<option value="${i}">${s.name} — ${money(s.price,cur)}</option>`).join('');
 const multi=document.querySelector('#multiBox'); const checks=document.querySelector('#checks');
 checks.innerHTML=servicesGBP.filter(s=>s.price!==null).map((s,i)=>`<label><input type="checkbox" value="${i}"> <span>${s.name} — ${money(s.price,cur)}</span></label>`).join('');
 checks.addEventListener('change',e=>{
   if(e.target && e.target.matches('input[type=\"checkbox\"]')){
     const v=e.target.value;
     if((v==='9'||v==='10') && e.target.checked){
       const other=checks.querySelector(`input[value=\"${v==='9'?'10':'9'}\"]`);
       if(other) other.checked=false;
     }
   }
 });
 const hidden=document.querySelector('#priceSummaryHidden');
 const shown=v=>cur==='usd'?'$'+Math.ceil(v*rate):'£'+v.toFixed(2).replace('.00','');
 function calc(){
   let subtotal=0; let chosen=[]; let discount=0;
   if(select.value==='11'){
     multi.style.display='block';
     checks.querySelectorAll('input:checked').forEach(cb=>{const s=servicesGBP[+cb.value]; subtotal+=s.price; chosen.push(s.name+' '+money(s.price,cur));});
     if(subtotal>=25&&subtotal<=50)discount=subtotal*.10; else if(subtotal>50)discount=subtotal*.20;
   } else {
     multi.style.display='none';
     const s=servicesGBP[+select.value]; if(s&&s.price!==null){subtotal=s.price; chosen=[s.name+' '+money(s.price,cur)];}
     discount=0;
   }
   let discountedTotal=subtotal-discount;
   const cap = cur==='usd' ? (150/rate) : 120;
   const total=Math.min(discountedTotal,cap);
   const savings=Math.max(0,subtotal-total);
   document.querySelector('#subtotal').textContent=shown(subtotal);
   document.querySelector('#savings').textContent=shown(savings);
   document.querySelector('#total').textContent=shown(total);
   if(hidden) hidden.value=`Selected: ${chosen.join(', ')} | Subtotal: ${shown(subtotal)} | Savings: ${shown(savings)} | Total: ${shown(total)}${subtotal>cap?' | Capped at '+shown(cap):''}`;
 }
 select.addEventListener('change',calc); checks.addEventListener('change',calc);
 const params=new URLSearchParams(location.search); const pre=params.get('service');
 if(pre!==null && servicesGBP[+pre]){select.value=pre;}
 calc();
}
renderServices(); initBooking();
