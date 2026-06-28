const services = [
  { icon:'📜', name:'Horoscope Creation (Local)', days:5, gbp:25, desc:'A traditional Sri Lankan horoscope prepared for local clients using birth details for family, education, career and life guidance.' },
  { icon:'🌍', name:'Horoscope Creation (International)', days:6, gbp:30, desc:'A complete horoscope service for overseas clients, prepared with Sri Lankan astrological methods and clear guidance for life abroad.' },
  { icon:'👶', name:'Horoscope Creation (Newborns)', days:5, gbp:30, desc:'A newborn horoscope prepared for the child’s future, including traditional guidance valued by Sri Lankan families.' },
  { icon:'💍', name:'Readings for Weddings', days:5, gbp:30, desc:'Auspicious wedding guidance for choosing suitable dates and times according to Sri Lankan customs and planetary influences.' },
  { icon:'📈', name:'Readings for Businesses', days:5, gbp:30, desc:'Astrological guidance for business openings, partnerships, important decisions and favourable timing for growth.' },
  { icon:'🌸', name:'Readings for Puberty', days:4, gbp:25, desc:'Traditional guidance for puberty ceremonies and family observances, including suitable timing and cultural considerations.' },
  { icon:'🔤', name:'Readings for Letter Readings', days:3, gbp:20, desc:'A reading to help choose favourable letters or sounds for names, important in Sri Lankan naming traditions.' },
  { icon:'✂️', name:'Readings for Cutting Hair', days:3, gbp:20, desc:'Auspicious timing guidance for first hair cutting or important grooming ceremonies followed in Sri Lankan culture.' },
  { icon:'✨', name:'Readings for Piercing Ears', days:3, gbp:20, desc:'Traditional timing guidance for ear piercing ceremonies, supporting a meaningful and culturally respectful occasion.' },
  { icon:'☀', name:'Custom Readings for 3 Topics for the Next 5 Years', days:5, gbp:30, desc:'A personalised five-year reading focused on three chosen topics such as career, marriage, health, wealth or family.' },
  { icon:'⭐', name:'Custom Readings for 6 Topics for the Next 10 Years', days:7, gbp:40, desc:'A detailed ten-year reading covering six chosen life areas for deeper planning, clarity and long-term guidance.' }
];

function renderServices(){
  const grid = document.getElementById('servicesGrid');
  if(grid){
    grid.innerHTML = services.map(s => `
      <article class="service-card">
        <div class="icon">${s.icon}</div>
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
        <div class="service-meta"><span>${s.days} days</span><span><strong>£${s.gbp}</strong></span></div>
      </article>
    `).join('');
  }

  const select = document.getElementById('service');
  if(select){
    select.innerHTML = '<option value="">Select a service</option>' + services.map((s, i) =>
      `<option value="${s.name} | ${s.days} days | £${s.gbp}">${String(i+1).padStart(2,'0')}. ${s.name} — ${s.days} days — £${s.gbp}</option>`
    ).join('');
    select.addEventListener('change', updateSelectedService);
    updateSelectedService();
  }
}

function updateSelectedService(){
  const select = document.getElementById('service');
  const box = document.getElementById('selectedServiceBox');
  const hidden = document.getElementById('selectedServiceSummary');
  if(!select || !box) return;
  const selected = services.find(s => select.value.startsWith(s.name));
  if(!selected){
    box.innerHTML = 'Please choose a service to see the price and preparation time.';
    if(hidden) hidden.value = '';
    return;
  }
  const summary = `${selected.name} — ${selected.days} days — £${selected.gbp}`;
  box.innerHTML = `<strong>${selected.name}</strong><br>${selected.desc}<br><br><strong>Time:</strong> ${selected.days} days &nbsp; | &nbsp; <strong>Price:</strong> £${selected.gbp}`;
  if(hidden) hidden.value = summary;
}

function setupBirthTime(){
  const form = document.getElementById('bookingForm');
  const hour = document.getElementById('birthHour');
  const minute = document.getElementById('birthMinute');
  const period = document.getElementById('birthPeriod');
  const summary = document.getElementById('birthTimeSummary');
  if(!form || !hour || !minute || !period || !summary) return;

  const clamp = (el, min, max) => {
    el.addEventListener('input', () => {
      el.value = el.value.replace(/[^0-9]/g, '');
      if(el.value.length > 2) el.value = el.value.slice(0,2);
      const n = Number(el.value);
      if(n > max) el.value = String(max).padStart(2,'0');
      if(el.value !== '' && n < min && el.value.length >= 2) el.value = String(min).padStart(2,'0');
    });
  };
  clamp(hour, 1, 12);
  clamp(minute, 0, 59);

  form.addEventListener('submit', (e) => {
    const h = Number(hour.value);
    const m = Number(minute.value);
    if(!h || h < 1 || h > 12 || minute.value === '' || m < 0 || m > 59){
      e.preventDefault();
      alert('Please enter a valid birth time.');
      return;
    }
    summary.value = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')} ${period.value}`;
  });
}

document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
renderServices();
setupBirthTime();
