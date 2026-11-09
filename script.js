(() => {
  'use strict';

  const CITY_CENTER = { lat: 5.1801, lng: 97.1500 };
  const SHOP_PHOTO = ['assets/bengkel1.jpg', 'assets/bengkel2.jpg', 'assets/bengkel3.jpg'];
  const workshops = [
    {
      id: 'seulawah-motor',
      name: 'Seulawah Motor',
      address: 'Jl. Merdeka No. 18, Kuta Blang, Banda Sakti, Kota Lhokseumawe, Aceh',
      lat: 5.1836, lng: 97.1456,
      categories: ['Motor', 'Ganti Oli', 'Servis Umum'],
      categoryLabel: 'Motor & servis umum',
      phone: '+62 000 0000 0001',
      rating: '4,8', reviewCount: 34,
      hours: 'Senin–Sabtu, 08.00–20.00 WIB',
      services: ['Servis motor', 'Ganti oli', 'Tune up', 'Pemeriksaan rem'],
      image: SHOP_PHOTO[0],
      description: 'Contoh bengkel motor di kawasan Banda Sakti.'
    },
    {
      id: 'mitra-auto',
      name: 'Mitra Auto Service',
      address: 'Jl. Iskandar Muda No. 42, Kuta Blang, Banda Sakti, Kota Lhokseumawe, Aceh',
      lat: 5.1772, lng: 97.1515,
      categories: ['Mobil', 'Ganti Oli', 'Servis Umum'],
      categoryLabel: 'Mobil & servis umum',
      phone: '+62 000 0000 0002',
      rating: '4,7', reviewCount: 28,
      hours: 'Senin–Sabtu, 08.30–18.00 WIB',
      services: ['Servis mobil', 'Ganti oli', 'Aki dan kelistrikan', 'Pemeriksaan mesin'],
      image: SHOP_PHOTO[1],
      description: 'Contoh layanan servis mobil di Muara Dua.'
    },
    {
      id: 'ban-samudra',
      name: 'Tambal Ban Samudra',
      address: 'Jl. Samudra No. 9, Lancang Garam, Banda Sakti, Kota Lhokseumawe, Aceh',
      lat: 5.1870, lng: 97.1508,
      categories: ['Tambal Ban', 'Motor', 'Mobil'],
      categoryLabel: 'Tambal ban',
      phone: '+62 000 0000 0003',
      rating: '4,6', reviewCount: 19,
      hours: 'Setiap hari, 07.00–22.00 WIB',
      services: ['Tambal ban tubeless', 'Tambal ban dalam', 'Isi angin', 'Pemeriksaan ban'],
      image: SHOP_PHOTO[2],
      description: 'Contoh layanan tambal ban di Banda Sakti.'
    },
    {
      id: 'cunda-motor',
      name: 'Cunda Motor & Oli',
      address: 'Jl. Medan–Banda Aceh, Cunda, Muara Dua, Kota Lhokseumawe, Aceh',
      lat: 5.1660, lng: 97.1370,
      categories: ['Motor', 'Ganti Oli', 'Servis Umum'],
      categoryLabel: 'Motor & ganti oli',
      phone: '+62 000 0000 0004',
      rating: '4,9', reviewCount: 42,
      hours: 'Senin–Minggu, 08.00–19.00 WIB',
      services: ['Servis motor', 'Ganti oli', 'Rantai dan gir', 'Pemeriksaan ringan'],
      image: SHOP_PHOTO[0],
      description: 'Contoh bengkel dan layanan ganti oli di area Cunda.'
    },
    {
      id: 'lhok-pusaka',
      name: 'Lhok Pusaka Bengkel Umum',
      address: 'Jl. Buloh Blang Ara, Blang Mangat, Kota Lhokseumawe, Aceh',
      lat: 5.2038, lng: 97.1770,
      categories: ['Servis Umum', 'Motor', 'Mobil'],
      categoryLabel: 'Servis umum',
      phone: '+62 000 0000 0005',
      rating: '4,7', reviewCount: 23,
      hours: 'Senin–Sabtu, 08.00–17.30 WIB',
      services: ['Servis ringan', 'Pemeriksaan mesin', 'Ganti oli', 'Pemeriksaan rem'],
      image: SHOP_PHOTO[1],
      description: 'Contoh bengkel servis umum di area Blang Mangat.'
    },
    {
      id: 'banda-sakti-jaya',
      name: 'Banda Sakti Motor Jaya',
      address: 'Jl. Darussalam No. 27, Hagu Selatan, Banda Sakti, Kota Lhokseumawe, Aceh',
      lat: 5.1902, lng: 97.1431,
      categories: ['Motor', 'Ganti Oli'],
      categoryLabel: 'Motor & ganti oli',
      phone: '+62 000 0000 0006',
      rating: '4,6', reviewCount: 17,
      hours: 'Senin–Sabtu, 08.00–19.00 WIB',
      services: ['Servis motor', 'Ganti oli', 'Pemeriksaan rantai', 'Servis rem'],
      image: SHOP_PHOTO[2],
      description: 'Contoh layanan motor di Hagu Selatan.'
    },
    {
      id: 'lancang-garam-auto',
      name: 'Lancang Garam Auto Care',
      address: 'Jl. Sukaramai No. 14, Lancang Garam, Banda Sakti, Kota Lhokseumawe, Aceh',
      lat: 5.1728, lng: 97.1588,
      categories: ['Mobil', 'Servis Umum', 'Ganti Oli'],
      categoryLabel: 'Mobil & servis umum',
      phone: '+62 000 0000 0007',
      rating: '4,8', reviewCount: 26,
      hours: 'Senin–Sabtu, 08.00–18.00 WIB',
      services: ['Servis berkala', 'Ganti oli', 'Pemeriksaan aki', 'Pemeriksaan mesin'],
      image: SHOP_PHOTO[1],
      description: 'Contoh servis mobil di kawasan Banda Sakti.'
    },
    {
      id: 'bengkel-ujong-blang',
      name: 'Ujong Blang Bengkel Motor',
      address: 'Jl. Pantai Ujong Blang, Ujong Blang, Banda Sakti, Kota Lhokseumawe, Aceh',
      lat: 5.1976, lng: 97.1542,
      categories: ['Motor', 'Tambal Ban', 'Servis Umum'],
      categoryLabel: 'Motor & tambal ban',
      phone: '+62 000 0000 0008',
      rating: '4,5', reviewCount: 14,
      hours: 'Setiap hari, 07.30–20.00 WIB',
      services: ['Servis motor', 'Tambal ban', 'Isi angin', 'Pemeriksaan rem'],
      image: SHOP_PHOTO[0],
      description: 'Contoh bengkel motor di sekitar Ujong Blang.'
    },
    {
      id: 'muara-dua-motor',
      name: 'Muara Dua Motor Service',
      address: 'Jl. Tgk. Chik Ditunong, Meunasah Mesjid, Muara Dua, Kota Lhokseumawe, Aceh',
      lat: 5.1582, lng: 97.1516,
      categories: ['Motor', 'Servis Umum'],
      categoryLabel: 'Motor & servis umum',
      phone: '+62 000 0000 0009',
      rating: '4,7', reviewCount: 21,
      hours: 'Senin–Sabtu, 08.00–18.30 WIB',
      services: ['Servis motor', 'Tune up', 'Pemeriksaan kelistrikan', 'Ganti kampas rem'],
      image: SHOP_PHOTO[2],
      description: 'Contoh bengkel motor di kawasan Muara Dua.'
    },
    {
      id: 'keude-cunda-ban',
      name: 'Keude Cunda Ban & Oli',
      address: 'Jl. Medan–Banda Aceh, Keude Cunda, Muara Dua, Kota Lhokseumawe, Aceh',
      lat: 5.1627, lng: 97.1264,
      categories: ['Tambal Ban', 'Ganti Oli', 'Motor'],
      categoryLabel: 'Tambal ban & ganti oli',
      phone: '+62 000 0000 0010',
      rating: '4,6', reviewCount: 18,
      hours: 'Setiap hari, 07.00–21.00 WIB',
      services: ['Tambal ban tubeless', 'Ganti oli', 'Isi angin', 'Pemeriksaan ban'],
      image: SHOP_PHOTO[1],
      description: 'Contoh layanan ban dan oli di Keude Cunda.'
    },
    {
      id: 'muara-satu-mandiri',
      name: 'Muara Satu Bengkel Mandiri',
      address: 'Jl. Elak, Blang Panyang, Muara Satu, Kota Lhokseumawe, Aceh',
      lat: 5.1691, lng: 97.1062,
      categories: ['Mobil', 'Servis Umum'],
      categoryLabel: 'Mobil & servis umum',
      phone: '+62 000 0000 0011',
      rating: '4,7', reviewCount: 20,
      hours: 'Senin–Sabtu, 08.00–17.30 WIB',
      services: ['Servis ringan mobil', 'Pemeriksaan mesin', 'Servis rem', 'Pemeriksaan aki'],
      image: SHOP_PHOTO[0],
      description: 'Contoh bengkel umum di area Muara Satu.'
    },
    {
      id: 'muara-satu-motor',
      name: 'Rancong Motor & Tambal Ban',
      address: 'Jl. Cot Seurani, Rancong, Muara Satu, Kota Lhokseumawe, Aceh',
      lat: 5.1861, lng: 97.0940,
      categories: ['Motor', 'Tambal Ban', 'Ganti Oli'],
      categoryLabel: 'Motor & tambal ban',
      phone: '+62 000 0000 0012',
      rating: '4,5', reviewCount: 13,
      hours: 'Setiap hari, 07.00–20.00 WIB',
      services: ['Servis motor', 'Tambal ban dalam', 'Isi angin', 'Ganti oli'],
      image: SHOP_PHOTO[2],
      description: 'Contoh layanan motor di sekitar Rancong.'
    },
    {
      id: 'blang-mangat-teknik',
      name: 'Blang Mangat Teknik Motor',
      address: 'Jl. Buloh Blang Ara No. 12, Blang Mangat, Kota Lhokseumawe, Aceh',
      lat: 5.2203, lng: 97.1858,
      categories: ['Motor', 'Servis Umum'],
      categoryLabel: 'Motor & servis umum',
      phone: '+62 000 0000 0013',
      rating: '4,8', reviewCount: 24,
      hours: 'Senin–Sabtu, 08.00–18.00 WIB',
      services: ['Servis motor', 'Tune up', 'Servis kelistrikan', 'Pemeriksaan mesin'],
      image: SHOP_PHOTO[1],
      description: 'Contoh bengkel motor di kawasan Blang Mangat.'
    },
    {
      id: 'blang-mangat-ban',
      name: 'Simpang Ulim Ban & Oli',
      address: 'Jl. Simpang Ulim, Blang Cut, Blang Mangat, Kota Lhokseumawe, Aceh',
      lat: 5.2025, lng: 97.2017,
      categories: ['Tambal Ban', 'Ganti Oli', 'Motor'],
      categoryLabel: 'Tambal ban & ganti oli',
      phone: '+62 000 0000 0014',
      rating: '4,6', reviewCount: 16,
      hours: 'Setiap hari, 07.00–20.30 WIB',
      services: ['Tambal ban tubeless', 'Ganti oli', 'Isi angin', 'Pemeriksaan roda'],
      image: SHOP_PHOTO[0],
      description: 'Contoh layanan ban di kawasan Blang Mangat.'
    },
    {
      id: 'dewantara-auto',
      name: 'Dewantara Auto Service',
      address: 'Jl. Medan–Banda Aceh, Uteun Geulinggang, Dewantara, Aceh Utara',
      lat: 5.2308, lng: 97.0995,
      categories: ['Mobil', 'Servis Umum', 'Ganti Oli'],
      categoryLabel: 'Mobil & servis umum',
      phone: '+62 000 0000 0015',
      rating: '4,8', reviewCount: 29,
      hours: 'Senin–Sabtu, 08.00–18.00 WIB',
      services: ['Servis mobil', 'Ganti oli', 'Pemeriksaan kaki-kaki', 'Pemeriksaan mesin'],
      image: SHOP_PHOTO[2],
      description: 'Contoh layanan mobil di sekitar Dewantara, Aceh Utara.'
    },
    {
      id: 'dewantara-motor',
      name: 'Paloh Lada Motor',
      address: 'Jl. Paloh Lada, Paloh Lada, Dewantara, Aceh Utara',
      lat: 5.2140, lng: 97.0738,
      categories: ['Motor', 'Tambal Ban', 'Servis Umum'],
      categoryLabel: 'Motor & tambal ban',
      phone: '+62 000 0000 0016',
      rating: '4,6', reviewCount: 18,
      hours: 'Senin–Minggu, 07.30–19.00 WIB',
      services: ['Servis motor', 'Tambal ban', 'Ganti oli', 'Servis rantai'],
      image: SHOP_PHOTO[1],
      description: 'Contoh bengkel motor di area Dewantara.'
    },
    {
      id: 'muara-dua-mandiri',
      name: 'Panggoi Servis Kendaraan',
      address: 'Jl. Panggoi, Panggoi, Muara Dua, Kota Lhokseumawe, Aceh',
      lat: 5.1490, lng: 97.1683,
      categories: ['Mobil', 'Motor', 'Servis Umum'],
      categoryLabel: 'Servis umum',
      phone: '+62 000 0000 0017',
      rating: '4,7', reviewCount: 22,
      hours: 'Senin–Sabtu, 08.00–18.00 WIB',
      services: ['Servis ringan mobil dan motor', 'Ganti oli', 'Pemeriksaan rem', 'Pemeriksaan aki'],
      image: SHOP_PHOTO[0],
      description: 'Contoh layanan kendaraan umum di area Panggoi.'
    }
  ];

  const state = {
    category: 'Semua',
    query: '',
    place: null,
    origin: { ...CITY_CENTER },
    originLabel: 'pusat Lhokseumawe',
    selectedId: null,
    map: null,
    mapFittedToDirectory: false,
    markerGroup: null,
    detailMap: null,
    markers: new Map(),
    detailMarker: null,
    userMarker: null,
    toastTimer: null
  };

  const $ = (selector) => document.querySelector(selector);
  const resultsList = $('#resultsList');
  const emptyState = $('#emptyState');
  const searchInput = $('#searchInput');
  const resultsSummary = $('#resultsSummary');
  const detailPanel = $('#detailPanel');

  function normalize(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[char]);
  }

  function distanceKm(pointA, pointB) {
    const radians = (degrees) => degrees * Math.PI / 180;
    const latitudeDelta = radians(pointB.lat - pointA.lat);
    const longitudeDelta = radians(pointB.lng - pointA.lng);
    const a = Math.sin(latitudeDelta / 2) ** 2
      + Math.cos(radians(pointA.lat)) * Math.cos(radians(pointB.lat))
      * Math.sin(longitudeDelta / 2) ** 2;
    return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function distanceLabel(workshop) {
    const distance = distanceKm(state.origin, workshop);
    return distance < 1 ? `${Math.round(distance * 1000)} m` : `${distance.toFixed(1)} km`;
  }

  function shopMatches(workshop) {
    if (state.category !== 'Semua' && !workshop.categories.includes(state.category)) return false;
    if (state.place) return true;
    if (!state.query) return true;
    const haystack = normalize([
      workshop.name, workshop.address, workshop.categoryLabel,
      workshop.categories.join(' '), workshop.services.join(' ')
    ].join(' '));
    return haystack.includes(normalize(state.query));
  }

  function getVisibleWorkshops() {
    return workshops.filter(shopMatches)
      .sort((a, b) => distanceKm(state.origin, a) - distanceKm(state.origin, b));
  }

  function cardMarkup(workshop) {
    const selected = state.selectedId === workshop.id ? ' selected' : '';
    return `<article class="workshop-card${selected}" data-shop-card="${escapeHtml(workshop.id)}">
      <button class="workshop-image-button" type="button" data-action="detail" data-id="${escapeHtml(workshop.id)}" aria-label="Lihat detail ${escapeHtml(workshop.name)}">
        <img src="${escapeHtml(workshop.image)}" alt="Foto contoh bengkel untuk ${escapeHtml(workshop.name)}" loading="lazy">
        <span class="category-tag">${escapeHtml(workshop.categoryLabel)}</span>
      </button>
      <div class="workshop-info">
        <div class="workshop-title-line"><h3 class="workshop-title">${escapeHtml(workshop.name)}</h3><span class="rating"><svg aria-hidden="true"><use href="#icon-star"/></svg>${escapeHtml(workshop.rating)}</span></div>
        <p class="workshop-address">${escapeHtml(workshop.address)}</p>
        <div class="workshop-quick-facts">
          <span class="distance-fact"><svg aria-hidden="true"><use href="#icon-pin"/></svg>${distanceLabel(workshop)} dari ${escapeHtml(state.originLabel)}</span>
          <span><svg aria-hidden="true"><use href="#icon-clock"/></svg>${escapeHtml(workshop.hours.split(', ').slice(-1)[0])}</span>
          <span><svg aria-hidden="true"><use href="#icon-phone"/></svg>${escapeHtml(workshop.phone)}</span>
        </div>
        <div class="card-actions">
          <button class="card-link" type="button" data-action="detail" data-id="${escapeHtml(workshop.id)}">Lihat detail <svg aria-hidden="true"><use href="#icon-arrow"/></svg></button>
          <a class="card-link card-direction" href="${directionsUrl(workshop)}" target="_blank" rel="noopener noreferrer"><svg aria-hidden="true"><use href="#icon-route"/></svg>Petunjuk arah</a>
        </div>
      </div>
    </article>`;
  }

  function directionsUrl(workshop) {
    return `https://www.google.com/maps/dir/?api=1&destination=${workshop.lat},${workshop.lng}`;
  }

  function setStatus(message) {
    resultsSummary.textContent = message;
  }

  function setAreaLabel(label) {
    $('#areaLabel').textContent = label;
    $('#mapCaption').textContent = `${label}, Aceh`;
  }

  function renderResults() {
    const visible = getVisibleWorkshops();
    resultsList.innerHTML = visible.map(cardMarkup).join('');
    emptyState.hidden = visible.length > 0;
    resultsList.hidden = visible.length === 0;
    if (state.place) {
      setAreaLabel(state.place.name);
      setStatus(`${visible.length} bengkel contoh diurutkan dari lokasi yang dicari.`);
    } else if (state.query && visible.length) {
      setAreaLabel('Lhokseumawe');
      setStatus(`${visible.length} bengkel contoh cocok dengan pencarian Anda.`);
    } else if (state.query) {
      setAreaLabel('Lhokseumawe');
      setStatus(`Tidak ada hasil untuk “${state.query}”. Coba nama daerah atau alamat.`);
    } else if (state.category !== 'Semua') {
      setAreaLabel('Lhokseumawe');
      setStatus(`${visible.length} bengkel contoh dengan kategori ${state.category}.`);
    } else {
      setAreaLabel('Lhokseumawe');
      setStatus(`${visible.length} bengkel contoh, diurutkan dari ${state.originLabel}.`);
    }
    updateMarkers(visible);
  }

  function showToast(message) {
    const toast = $('#toast');
    toast.textContent = message;
    toast.hidden = false;
    window.clearTimeout(state.toastTimer);
    state.toastTimer = window.setTimeout(() => { toast.hidden = true; }, 4600);
  }

  function markerIcon(kind) {
    return L.divIcon({
      className: '',
      html: kind === 'user' ? '<span class="user-marker"></span>' : '<span class="shop-marker"><span></span></span>',
      iconSize: kind === 'user' ? [18, 18] : [28, 28],
      iconAnchor: kind === 'user' ? [9, 9] : [14, 27],
      popupAnchor: [0, -23]
    });
  }

  function mapPopup(workshop) {
    return `<div class="map-popup"><strong>${escapeHtml(workshop.name)}</strong><span>${escapeHtml(workshop.categoryLabel)} · ${distanceLabel(workshop)}</span><button type="button" data-map-detail="${escapeHtml(workshop.id)}">Lihat detail</button></div>`;
  }

  function updateMarkers(visible) {
    if (!state.map) return;
    state.markerGroup.clearLayers();
    state.markers.clear();
    visible.forEach((workshop) => {
      const marker = L.marker([workshop.lat, workshop.lng], { icon: markerIcon('shop'), title: workshop.name })
        .bindPopup(mapPopup(workshop));
      marker.on('click', () => selectWorkshop(workshop.id, { scroll: false }));
      state.markers.set(workshop.id, marker);
      state.markerGroup.addLayer(marker);
    });
    if (state.place) {
      state.map.setView([state.place.lat, state.place.lng], 14);
    } else if (visible.length) {
      const points = visible.map((shop) => [shop.lat, shop.lng]);
      if (state.userMarker) points.push([state.origin.lat, state.origin.lng]);
      if (state.query || state.category !== 'Semua' || !state.mapFittedToDirectory) {
        state.map.fitBounds(points, { padding: [28, 28], maxZoom: 14 });
        if (!state.query && state.category === 'Semua') state.mapFittedToDirectory = true;
      }
    }
  }

  function setupMap() {
    if (!window.L) {
      $('#mapFallback').hidden = false;
      $('#mapFallback').querySelector('strong').textContent = 'Peta tidak dapat dimuat';
      $('#mapFallback').querySelector('p').textContent = 'Periksa koneksi internet untuk memuat Leaflet dan peta OpenStreetMap.';
      return;
    }
    state.map = L.map('map', { scrollWheelZoom: false, zoomControl: true }).setView([CITY_CENTER.lat, CITY_CENTER.lng], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>'
    }).addTo(state.map);
    state.markerGroup = L.markerClusterGroup({
      maxClusterRadius: 38,
      showCoverageOnHover: false,
      spiderfyOnMaxZoom: true,
      zoomToBoundsOnClick: true
    });
    state.map.addLayer(state.markerGroup);
    renderResults();
    window.setTimeout(() => state.map && state.map.invalidateSize(), 120);
  }

  function selectWorkshop(id, options = {}) {
    const workshop = workshops.find((shop) => shop.id === id);
    if (!workshop) return;
    state.selectedId = id;
    detailPanel.hidden = false;
    $('#detailName').textContent = workshop.name;
    const photo = $('#detailPhoto');
    photo.src = workshop.image;
    photo.alt = `Foto contoh bengkel untuk ${workshop.name}`;
    $('#detailRating').textContent = `★ ${workshop.rating} · ${workshop.reviewCount} ulasan contoh`;
    $('#detailCategory').textContent = workshop.categoryLabel;
    $('#detailAddress').textContent = workshop.address;
    $('#detailHours').textContent = workshop.hours;
    $('#detailPhone').textContent = workshop.phone;
    $('#detailServices').innerHTML = workshop.services.map((service) => `<li>${escapeHtml(service)}</li>`).join('');
    $('#detailDistance').textContent = `${distanceLabel(workshop)} dari ${state.originLabel}`;
    const callLink = $('#detailCall');
    callLink.href = `tel:${workshop.phone.replace(/[^\d+]/g, '')}`;
    callLink.setAttribute('aria-label', `Hubungi ${workshop.name} di nomor contoh ${workshop.phone}`);
    $('#detailDirections').href = directionsUrl(workshop);
    if (state.detailMap) {
      state.detailMap.setView([workshop.lat, workshop.lng], 16);
      if (state.detailMarker) state.detailMarker.remove();
      state.detailMarker = L.marker([workshop.lat, workshop.lng], { icon: markerIcon('shop'), title: workshop.name })
        .addTo(state.detailMap).bindPopup(`<strong>${escapeHtml(workshop.name)}</strong>`).openPopup();
      window.setTimeout(() => state.detailMap && state.detailMap.invalidateSize(), 100);
    }
    renderResults();
    if (options.scroll !== false) detailPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function setupDetailMap() {
    if (!window.L || state.detailMap) return;
    const initial = workshops.find((shop) => shop.id === state.selectedId) || workshops[0];
    state.detailMap = L.map('detailMap', { zoomControl: false, attributionControl: false, scrollWheelZoom: false, dragging: false })
      .setView([initial.lat, initial.lng], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(state.detailMap);
    state.detailMarker = L.marker([initial.lat, initial.lng], { icon: markerIcon('shop') }).addTo(state.detailMap);
  }

  function setSearching(isSearching) {
    const button = $('#locateButton');
    button.classList.toggle('is-loading', isSearching);
    button.disabled = isSearching;
    button.querySelector('span').textContent = isSearching ? 'Mencari lokasi…' : 'Gunakan lokasi saya';
    button.setAttribute('aria-busy', String(isSearching));
  }

  function removeUserMarker() {
    if (state.userMarker) state.userMarker.remove();
    state.userMarker = null;
  }

  function locateUser() {
    if (!navigator.geolocation) {
      showToast('Browser ini tidak mendukung deteksi lokasi. Cari nama daerah atau alamat sebagai gantinya.');
      return;
    }
    setSearching(true);
    setStatus('Meminta izin lokasi dari browser…');
    navigator.geolocation.getCurrentPosition((position) => {
      state.origin = { lat: position.coords.latitude, lng: position.coords.longitude };
      state.originLabel = 'lokasi Anda';
      state.place = null;
      if (state.map) {
        removeUserMarker();
        state.userMarker = L.marker([state.origin.lat, state.origin.lng], { icon: markerIcon('user'), title: 'Lokasi Anda', zIndexOffset: 1000 })
          .addTo(state.map).bindPopup('Lokasi Anda');
        state.map.setView([state.origin.lat, state.origin.lng], 14);
      }
      $('#locationNote').querySelector('strong').textContent = 'Jarak dari lokasi Anda';
      $('#locationNote').querySelector('p span').textContent = 'Hasil diurutkan berdasarkan jarak langsung.';
      setSearching(false);
      renderResults();
      showToast('Lokasi ditemukan. Bengkel diurutkan berdasarkan jarak dari Anda.');
    }, (error) => {
      setSearching(false);
      const messages = {
        1: 'Izin lokasi ditolak. Cari berdasarkan nama daerah atau alamat, misalnya Banda Sakti.',
        2: 'Lokasi tidak dapat ditentukan. Periksa GPS atau coba pencarian berdasarkan daerah.',
        3: 'Permintaan lokasi terlalu lama. Coba lagi atau cari nama daerah.'
      };
      setStatus('Lokasi belum aktif. Gunakan pencarian nama daerah atau alamat.');
      showToast(messages[error.code] || 'Lokasi tidak dapat diakses. Coba pencarian berdasarkan daerah.');
    }, { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 });
  }

  async function geocodePlace(query) {
    const endpoint = new URL('https://nominatim.openstreetmap.org/search');
    endpoint.search = new URLSearchParams({
      q: query,
      format: 'jsonv2',
      limit: '1',
      countrycodes: 'id',
      'accept-language': 'id'
    }).toString();
    const response = await fetch(endpoint, { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`Layanan pencarian lokasi merespons ${response.status}.`);
    const places = await response.json();
    if (!Array.isArray(places) || !places.length) return null;
    return {
      lat: Number(places[0].lat),
      lng: Number(places[0].lon),
      name: places[0].name || query
    };
  }

  async function submitSearch() {
    const query = searchInput.value.trim();
    state.query = query;
    state.place = null;
    if (!query) {
      renderResults();
      searchInput.focus();
      return;
    }
    if (getVisibleWorkshops().length) {
      renderResults();
      return;
    }
    if (!navigator.onLine) {
      renderResults();
      showToast('Tidak ada kecocokan di daftar contoh. Koneksi internet diperlukan untuk mencari lokasi baru.');
      return;
    }
    setStatus('Mencari alamat di OpenStreetMap…');
    $('#searchForm').setAttribute('aria-busy', 'true');
    try {
      const place = await geocodePlace(query);
      if (!place) {
        renderResults();
        showToast(`Lokasi “${query}” belum ditemukan. Coba nama kecamatan atau alamat yang lebih jelas.`);
        return;
      }
      state.place = place;
      state.origin = { lat: place.lat, lng: place.lng };
      state.originLabel = place.name;
      removeUserMarker();
      renderResults();
      if (state.map) {
        state.map.setView([place.lat, place.lng], 14);
      }
      $('#locationNote').querySelector('strong').textContent = `Jarak dari ${place.name}`;
      $('#locationNote').querySelector('p span').textContent = 'Lokasi dicari melalui OpenStreetMap.';
      showToast(`Lokasi ${place.name} ditemukan. Daftar diurutkan berdasarkan jarak.`);
    } catch (error) {
      renderResults();
      showToast(`${error.message} Coba lagi atau cari daerah yang tercantum di daftar contoh.`);
    } finally {
      $('#searchForm').removeAttribute('aria-busy');
    }
  }

  function clearSearch(shouldScroll = false) {
    searchInput.value = '';
    state.query = '';
    state.place = null;
    state.category = 'Semua';
    state.selectedId = null;
    state.origin = { ...CITY_CENTER };
    state.originLabel = 'pusat Lhokseumawe';
    removeUserMarker();
    document.querySelectorAll('.category-chip').forEach((chip) => {
      const active = chip.dataset.category === 'Semua';
      chip.classList.toggle('active', active);
      chip.setAttribute('aria-pressed', String(active));
    });
    detailPanel.hidden = true;
    $('#locationNote').querySelector('strong').textContent = 'Jarak dari pusat kota';
    $('#locationNote').querySelector('p span').textContent = 'Gunakan lokasi Anda untuk jarak yang lebih akurat.';
    if (state.map) {
      state.mapFittedToDirectory = false;
      state.map.setView([CITY_CENTER.lat, CITY_CENTER.lng], 14);
    }
    renderResults();
    if (shouldScroll) $('#cari-bengkel').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function wireEvents() {
    $('#searchForm').addEventListener('submit', (event) => {
      event.preventDefault();
      submitSearch();
    });
    searchInput.addEventListener('input', () => {
      state.query = searchInput.value.trim();
      state.place = null;
      renderResults();
    });
    document.querySelectorAll('.category-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        state.category = chip.dataset.category;
        state.place = null;
        document.querySelectorAll('.category-chip').forEach((item) => {
          const active = item === chip;
          item.classList.toggle('active', active);
          item.setAttribute('aria-pressed', String(active));
        });
        renderResults();
      });
    });
    resultsList.addEventListener('click', (event) => {
      const trigger = event.target.closest('[data-action="detail"]');
      if (trigger) selectWorkshop(trigger.dataset.id);
    });
    $('#map').addEventListener('click', (event) => {
      const trigger = event.target.closest('[data-map-detail]');
      if (trigger) selectWorkshop(trigger.dataset.mapDetail);
    });
    $('#locateButton').addEventListener('click', locateUser);
    $('#noteLocate').addEventListener('click', locateUser);
    $('#resetButton').addEventListener('click', () => clearSearch());
    $('#emptyReset').addEventListener('click', () => clearSearch(true));
    $('#closeDetail').addEventListener('click', () => {
      state.selectedId = null;
      detailPanel.hidden = true;
      renderResults();
    });
    document.querySelectorAll('.example-search').forEach((button) => {
      button.addEventListener('click', () => {
        searchInput.value = button.dataset.query;
        state.query = button.dataset.query;
        renderResults();
        submitSearch();
      });
    });
    const menuToggle = $('#menuToggle');
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Buka navigasi' : 'Tutup navigasi');
      $('#primaryNav').classList.toggle('open', !isOpen);
    });
    $('#primaryNav').addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Buka navigasi');
        $('#primaryNav').classList.remove('open');
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 680) {
        menuToggle.setAttribute('aria-expanded', 'false');
        $('#primaryNav').classList.remove('open');
      }
      state.map && state.map.invalidateSize();
      state.detailMap && state.detailMap.invalidateSize();
    });
  }

  function init() {
    wireEvents();
    renderResults();
    setupMap();
    if (window.L) {
      const originalSelect = selectWorkshop;
      selectWorkshop = (id, options) => {
        if (!state.detailMap) setupDetailMap();
        originalSelect(id, options);
      };
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
