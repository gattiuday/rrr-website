// --- CONFIGURATION ---
const apiKey = "AIzaSyBDk4y2CPvk1_jcgf6V6naKWWuHNiv7QCk"; // Runtime provided key
const GOIBIBO_URL = "https://www.goibibo.com/hotels/hotel-details/?checkin=20251204&checkout=20251205&roomString=1-2-0&searchText=RAMARAJU%20RESORTS&locusId=RGVIS&locusType=region&cityCode=CTCHINTA&cc=IN&_uCurrency=INR&vcid=703500747699395743&giHotelId=941371878921423055&locationData=area%7CLambasingi$ARLAMBASI$17.818447$82.492599%7CL&mmtId=202212220920169579&sType=landmark";
const PHONE_NUMBER = "+918328270647";
const GOOGLE_MAPS_NAV_LINK = "https://www.google.com/maps/dir/?api=1&destination=17.8311147,82.483252";

// --- DATA ---
const RESORT_NAME = "Ram Raj Resorts";
const ROOMS = [
    {
        id: 1,
        name: "Camping Tents",
        capacity: 2,
        hasOnlineOption: false,
        images: ["https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=1000"],
        amenities: ["Bonfire", "Sleeping Bags", "Nature View", "Breakfast"],
        description: "Sleep under the stars in our secure, weather-proof tents. The true Lambasingi experience."
    },
    {
        id: 2,
        name: "Deluxe Room",
        capacity: 3,
        hasOnlineOption: true,
        images: ["https://images.unsplash.com/photo-1449358070958-884ac9579399?auto=format&fit=crop&q=80&w=1000"],
        amenities: ["King Bed", "Attached Bath", "Hot Water", "Valley View"],
        description: "Comfortable rooms with modern amenities, perfect for couples and small families."
    },
    {
        id: 3,
        name: "Private Farm House",
        capacity: 8,
        hasOnlineOption: false,
        images: ["https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80&w=1000"],
        amenities: ["3 Bedrooms", "Kitchen", "Private Garden", "Bonfire Area"],
        description: "A spacious private villa for large groups. Exclusive access to the strawberry plantation."
    }
];

const SERVICES = [
    { icon: "fa-fire", name: "Campfire", desc: "Enjoy cozy campfires amidst misty mornings." },
    { icon: "fa-car", name: "Secure Parking", desc: "Ample parking space available for all guest vehicles." },
    { icon: "fa-tint", name: "24/7 Hot Water", desc: "Essential for the freezing Lambasingi temperatures." },
    { icon: "fa-utensils", name: "Home Cooked Food", desc: "Delicious home-style meals provided on purchase." },
    { icon: "fa-compass", name: "Self-Guided Tours", desc: "We provide digital maps for you to explore the hills on your own." },
    { icon: "fa-wifi", name: "Wifi Available", desc: "Internet connectivity is available for our guests." }
];

const NEARBY_PLACES = [
    { name: "Cloud View Point", dist: "2 km", desc: "The famous sunrise trekking spot. Walk above the clouds in the early morning.", link: "https://www.google.com/maps/search/?api=1&query=Lambasingi+View+Point" },
    { name: "Thajangi Reservoir", dist: "6 km", desc: "Scenic water body surrounded by hills. Great for photography and evening walks.", link: "https://www.google.com/maps/search/?api=1&query=Thajangi+Reservoir" },
    { name: "Kothapally Waterfalls", dist: "28 km", desc: "Stunning cascading waterfall in a dense forest.", link: "https://www.google.com/maps/search/?api=1&query=Kothapally+Waterfalls" },
    { name: "Modakondamma Temple", dist: "45 km", desc: "Ancient temple dedicated to the regional goddess.", link: "https://www.google.com/maps/search/?api=1&query=Modakondamma+Temple+Paderu" },
    { name: "Yerravaram Waterfalls", dist: "15 km", desc: "A beautiful, less-crowded waterfall valley.", link: "https://www.google.com/maps/search/?api=1&query=Yerravaram+Waterfalls" },
    { name: "Susan Garden", dist: "4 km", desc: "Famous for vibrant yellow niger flowers (Winter).", link: "https://www.google.com/maps/search/?api=1&query=Susan+Garden+Lambasingi" }
];

// --- ANIMATION OBSERVER ---
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

function observeElements() {
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));
}

// --- NAVIGATION ---
function setPage(pageName) {
    const app = document.getElementById('app-content');

    // Fade out effect could be added here, but for simplicity we just replace
    app.innerHTML = '';
    window.scrollTo(0, 0);
    closeMobileMenu();

    // Add transition class
    app.classList.remove('page-transition');
    void app.offsetWidth; // Trigger reflow
    app.classList.add('page-transition');

    switch (pageName) {
        case 'home': renderHome(app); break;
        case 'rooms': renderRoomsPage(app); break;
        case 'guide': renderGuidePage(app); break;
        case 'contact': renderContactPage(app); break;
        default: renderHome(app);
    }

    // Initialize animations for new content
    setTimeout(observeElements, 100);
}

function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

function closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('active');
}

// --- RENDERERS ---
function renderHome(container) {
    // Hero
    const hero = document.createElement('div');
    hero.className = 'hero';
    hero.innerHTML = `
        <img src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=2000" class="hero-bg" alt="Hero">
        <div class="hero-content fade-in">
            <h1>${RESORT_NAME}</h1>
            <p>Discover the magic of Lambasingi. <br><span style="color: #fdba74;">Bonfires. Mist. Strawberries.</span></p>
            <div class="hero-btns">
                <button onclick="setPage('rooms')" class="btn-orange">View Rooms</button>
                <a href="${GOIBIBO_URL}" target="_blank" class="btn-secondary"><i class="fas fa-external-link-alt" style="margin-right:8px;"></i> Book Online</a>
            </div>
        </div>
    `;
    container.appendChild(hero);

    // Features
    const features = document.createElement('section');
    features.className = 'section container scroll-reveal';
    features.innerHTML = `
        <div class="text-center mb-8">
            <h2 style="font-size: 2.5rem; color: var(--accent-primary); margin-bottom: 1rem;">Why Lambasingi?</h2>
            <p style="color: var(--text-muted); font-size: 1.2rem;">The only place in South India that sees snow!</p>
        </div>
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
            <div class="card text-center scroll-reveal" style="padding: 2rem; transition-delay: 0.1s;">
                <i class="fas fa-fire" style="font-size: 3rem; color: var(--accent-orange); margin-bottom: 1rem;"></i>
                <h3>Campfires & Chill</h3>
                <p>Enjoy the 0°C temperature with our nightly private bonfires and grilled snacks.</p>
            </div>
            <div class="card text-center scroll-reveal" style="padding: 2rem; transition-delay: 0.2s;">
                <i class="fas fa-coffee" style="font-size: 3rem; color: var(--accent-secondary); margin-bottom: 1rem;"></i>
                <h3>Strawberry & Coffee</h3>
                <p>Visit the local strawberry farms and sip on freshly brewed Araku coffee.</p>
            </div>
            <div class="card text-center scroll-reveal" style="padding: 2rem; transition-delay: 0.3s;">
                <i class="fas fa-snowflake" style="font-size: 3rem; color: #3b82f6; margin-bottom: 1rem;"></i>
                <h3>Misty Mornings</h3>
                <p>Wake up to a blanket of white fog. A truly magical experience for nature lovers.</p>
            </div>
        </div>
    `;
    container.appendChild(features);

    // Services
    const services = document.createElement('section');
    services.className = 'services-section scroll-reveal';
    services.innerHTML = `
        <div class="container">
            <div class="text-center mb-8">
                <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Our Services</h2>
                <p style="color: var(--accent-light);">Everything you need for a comfortable stay</p>
            </div>
            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                ${SERVICES.map((s, i) => `
                    <div class="service-card scroll-reveal" style="transition-delay: ${i * 0.1}s;">
                        <i class="fas ${s.icon} service-icon"></i>
                        <h4 style="font-size: 1.2rem; margin-bottom: 0.5rem;">${s.name}</h4>
                        <p style="color: var(--accent-light); font-size: 0.9rem;">${s.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    container.appendChild(services);

    // Rooms Preview
    const rooms = document.createElement('section');
    rooms.className = 'section container scroll-reveal';
    rooms.innerHTML = `
        <div class="flex" style="justify-content: space-between; align-items: flex-end; margin-bottom: 2rem;">
            <div>
                <h2 style="font-size: 2.5rem; color: var(--text-main);">Our Accommodations</h2>
                <p style="color: var(--text-muted);">Cozy rooms designed for cold weather</p>
            </div>
            <button onclick="setPage('rooms')" style="color: var(--accent-primary); font-weight: 700;">View All &rarr;</button>
        </div>
        <div class="card-grid">
            ${ROOMS.map((room, i) => createRoomCard(room, i)).join('')}
        </div>
    `;
    container.appendChild(rooms);
}

function renderRoomsPage(container) {
    const section = document.createElement('section');
    section.className = 'section container';
    section.innerHTML = `
        <h2 style="font-size: 2.5rem; color: var(--accent-primary); margin-bottom: 2rem;" class="fade-in">Choose Your Stay</h2>
        <div class="card-grid">
            ${ROOMS.map((room, i) => createRoomCard(room, i)).join('')}
        </div>
    `;
    container.appendChild(section);
}

function renderGuidePage(container) {
    const section = document.createElement('section');
    section.className = 'section container';
    section.innerHTML = `
        <h2 class="text-center fade-in" style="font-size: 2.5rem; color: var(--accent-primary); margin-bottom: 2rem;">Local Guide: Explore Lambasingi</h2>
        <div class="guide-grid">
            <div class="card scroll-reveal" style="padding: 2rem;">
                <h3 style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 10px;"><i class="fas fa-compass"></i> Nearby Attractions</h3>
                <div>
                    ${NEARBY_PLACES.map(place => `
                        <div class="place-item">
                            <div class="place-icon"><i class="fas fa-mountain"></i></div>
                            <div style="flex: 1;">
                                <div class="flex" style="justify-content: space-between;">
                                    <h4 style="font-weight: 700;">${place.name}</h4>
                                    <span style="background: var(--accent-light); color: var(--accent-primary); padding: 2px 8px; border-radius: 99px; font-size: 0.8rem;">${place.dist}</span>
                                </div>
                                <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 5px;">${place.desc}</p>
                                ${place.link ? `<a href="${place.link}" target="_blank" style="color: #2563eb; font-size: 0.8rem; display: inline-flex; align-items: center; gap: 5px; margin-top: 5px;"><i class="fas fa-location-arrow"></i> Get Directions</a>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="map-container scroll-reveal" style="transition-delay: 0.2s;">
                <iframe class="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.9!2d82.4806771!3d17.8311147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39f52de078da5d%3A0x14362f5be40f73f!2sRam%20Raj%20Resorts!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
                <a href="${GOOGLE_MAPS_NAV_LINK}" target="_blank" class="nav-btn-overlay"><i class="fas fa-location-arrow"></i> Navigate to Resort</a>
            </div>
        </div>
    `;
    container.appendChild(section);
}

function renderContactPage(container) {
    const section = document.createElement('section');
    section.className = 'section container';
    section.innerHTML = `
        <h2 class="text-center fade-in" style="font-size: 2.5rem; color: var(--accent-primary); margin-bottom: 2rem;">Contact Us</h2>
        <div class="contact-grid">
            <div class="contact-info scroll-reveal">
                <div class="contact-item">
                    <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
                    <div>
                        <h4 style="font-weight: 700; margin-bottom: 5px;">Address</h4>
                        <p style="color: var(--text-muted);">Door No 2-49/1, Lambasingi Village,<br>Chintapalle Mandal, Alluri Sitharama Raju District,<br>Andhra Pradesh 534446</p>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon"><i class="fas fa-phone"></i></div>
                    <div>
                        <h4 style="font-weight: 700; margin-bottom: 5px;">Phone</h4>
                        <p style="color: var(--text-muted);">+91 83282 70647</p>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                    <div>
                        <h4 style="font-weight: 700; margin-bottom: 5px;">Email</h4>
                        <p style="color: var(--text-muted);">rrrlambasingi@gmail.com</p>
                    </div>
                </div>
                <a href="tel:${PHONE_NUMBER}" class="btn-primary" style="width: 100%; text-align: center;">Call to Book Now</a>
            </div>
            <div class="map-container scroll-reveal" style="height: 400px; transition-delay: 0.2s;">
                <iframe class="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.9!2d82.4806771!3d17.8311147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39f52de078da5d%3A0x14362f5be40f73f!2sRam%20Raj%20Resorts!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    `;
    container.appendChild(section);
}

// --- HELPER: Create Room Card ---
function createRoomCard(room, index = 0) {
    return `
        <div class="card scroll-reveal" style="transition-delay: ${index * 0.1}s;">
            <div class="card-img-wrapper">
                <img src="${room.images[0]}" alt="${room.name}" class="card-img">
            </div>
            <div class="card-body">
                <h3>${room.name}</h3>
                <p>${room.description}</p>
                <div class="tags">
                    <span class="tag"><i class="fas fa-user"></i> Sleeps ${room.capacity}</span>
                    ${room.amenities.map(a => `<span class="tag">${a}</span>`).join('')}
                </div>
                <button onclick="openBookingModal(${room.id})" class="btn-card">
                    <i class="fas fa-phone"></i> ${room.hasOnlineOption ? "Call / Book Online" : "Call to Book"}
                </button>
            </div>
        </div>
    `;
}

// --- MODAL LOGIC ---
function openBookingModal(roomId) {
    const room = ROOMS.find(r => r.id === roomId);
    if (!room) return;

    const modalContainer = document.getElementById('modalContainer');
    modalContainer.innerHTML = `
        <div class="modal-overlay" onclick="closeModal(event)">
            <div class="modal-content">
                <button class="close-modal" onclick="closeModal(event)"><i class="fas fa-times fa-lg"></i></button>
                <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Book ${room.name}</h3>
                <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Choose how you would like to book your stay.</p>
                
                <a href="tel:${PHONE_NUMBER}" class="modal-btn btn-call">
                    <i class="fas fa-phone"></i> Call ${PHONE_NUMBER}
                </a>
                
                ${room.hasOnlineOption ? `
                <a href="${GOIBIBO_URL}" target="_blank" class="modal-btn btn-goibibo">
                    <i class="fas fa-external-link-alt"></i> Book on Goibibo
                </a>` : ''}
                
                <a href="https://wa.me/${PHONE_NUMBER.replace('+', '')}" target="_blank" class="modal-btn btn-whatsapp">
                    <i class="fab fa-whatsapp"></i> Chat on WhatsApp
                </a>
                
                <p style="font-size: 0.8rem; color: #9ca3af; margin-top: 1rem;">Secure your stay today!</p>
            </div>
        </div>
    `;
}

function closeModal(e) {
    if (e.target.classList.contains('modal-overlay') || e.target.closest('.close-modal')) {
        document.getElementById('modalContainer').innerHTML = '';
    }
}

// --- CHAT LOGIC ---
function toggleChat() {
    document.getElementById('chatWindow').classList.toggle('active');
}

async function handleChatSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('userQuery');
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    input.value = '';

    // Simulate AI delay
    const loadingId = addMessage('Thinking...', 'model', true);

    try {
        const response = await callGeminiAPI(text);
        removeMessage(loadingId);
        addMessage(response, 'model');
    } catch (err) {
        removeMessage(loadingId);
        addMessage("I'm having trouble connecting right now. Please try again later.", 'model');
    }
}

function addMessage(text, role, isLoading = false) {
    const chatMessages = document.getElementById('chatMessages');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${role}`;
    if (isLoading) msgDiv.id = 'loading-msg';

    msgDiv.innerHTML = `<div class="msg-bubble">${text}</div>`;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return msgDiv.id;
}

function removeMessage(id) {
    const msg = document.getElementById(id);
    if (msg) msg.remove();
}

async function callGeminiAPI(userQuery) {
    if (!apiKey) return "I'm sorry, my AI brain isn't connected (API Key missing). Please contact the resort directly.";

    const systemContext = `
        You are the helpful AI Concierge for Ram Raj Resorts in Lambasingi.
        RESORT DETAILS: Name: ${RESORT_NAME}, Contact: ${PHONE_NUMBER}.
        ROOMS: Camping Tents (Call), Deluxe Room (Call/Goibibo), Farm House (Call).
        SERVICES: Campfires, Misty mornings, Secure Parking, Hot Water, Home Cooked Food.
        Keep responses concise and friendly.
    `;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: userQuery }] }],
                systemInstruction: { parts: [{ text: systemContext }] }
            })
        });
        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm having trouble understanding that.";
    } catch (e) {
        console.error(e);
        throw e;
    }
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    setPage('home');
});
