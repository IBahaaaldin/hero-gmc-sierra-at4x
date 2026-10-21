/**
 * BESPOKE V8 GARAGE — LUXURY AUTOMOTIVE ENGINE & CUSTOMIZATION CONTROLLER
 * High-performance, zero-bloat vanilla JavaScript architecture.
 */

// =============================================================================
// 1. CAR DATA SPECIFICATIONS & OPTIONS (UAE / GCC SPEC)
// =============================================================================
const CARS_DATA = {
  raptor: {
    id: 'raptor',
    brand: 'Ford Performance',
    model: 'F-150 Raptor R',
    edition: 'Obsidian Black & Carbon Edition',
    tagline: '5.2L Supercharged V8 • 720 HP • UAE Desert Predator Stance',
    basePrice: 515000,
    priceEstimate: 'AED 515,000',
    hp: '720',
    torque: '868 Nm (640 lb-ft)',
    zeroToSixty: '3.8s (0–100 km/h)',
    topSpeed: '195 km/h (Desert Limited)',
    exhaustNote: '98 dB Borla ATAK Active Exhaust',
    engineSpec: '5.2L Supercharged Cross-Plane V8 (GCC Heavy-Duty Cooling Spec)',
    tintLevel: '5% Limo Nano-Ceramic (99.8% UV / 94% IR UAE Summer Heat Rejection)',
    interiorSpec: 'Obsidian Perforated Alcantara with 14,200 Electric Pink French Stitches',
    images: {
      front: 'assets/images/raptor-exterior.jpg',
      interior: 'assets/images/cockpit-interior.jpg',
      lifestyle: 'assets/images/apex-lifestyle-tailgate.jpg',
      driver: 'assets/images/apex-driver-seat.jpg'
    },
    features: [
      {
        title: 'Carnivore Supercharged V8',
        desc: '720 horsepower twin-screw supercharged cross-plane V8 that shakes the ground along Sheikh Zayed Road and announces Apex’s arrival before she even turns the corner.',
        metric: '720 HP @ 6,650 RPM'
      },
      {
        title: 'Fox 3.0 Live Valve Shocks',
        desc: 'Electronically controlled semi-active dampers that read terrain 500 times per second with custom powder-coated electric pink coil springs tuned for Dubai desert dunes.',
        metric: '500 Hz Active Sampling'
      },
      {
        title: '5% Limo Ceramic Blackout',
        desc: 'Deep multi-layer dark nano-ceramic window tint blocking 99.8% UV and 94% infrared heat. Total privacy so nobody can see how cool Apex looks singing her favorite songs.',
        metric: '99.8% UV / 94% IR Block'
      }
    ]
  },
  sierra: {
    id: 'sierra',
    brand: 'GMC Trucks',
    model: 'Sierra Denali Ultimate',
    edition: 'Midnight Blush Bespoke V8',
    tagline: '6.2L EcoTec3 V8 • 420 HP • Ultra-Luxury CarbonPro GCC Stance',
    basePrice: 395000,
    priceEstimate: 'AED 395,000',
    hp: '420',
    torque: '624 Nm (460 lb-ft)',
    zeroToSixty: '5.6s (0–100 km/h)',
    topSpeed: '210 km/h',
    exhaustNote: '92 dB Corsa Sport Dual Cat-Back',
    engineSpec: '6.2L EcoTec3 V8 with High-Ambient GCC Cooling Spec',
    tintLevel: '5% Dark Privacy Ceramic Blackout (99.8% UV Protection)',
    interiorSpec: 'Full-Grain Alpine Umber & Piano Black with Rose Gold Titanium Inlays',
    images: {
      front: 'assets/images/sierra-exterior.jpg',
      interior: 'assets/images/cockpit-interior.jpg',
      lifestyle: 'assets/images/apex-lifestyle-tailgate.jpg',
      driver: 'assets/images/apex-driver-seat.jpg'
    },
    features: [
      {
        title: '6.2L EcoTec3 V8 Engine',
        desc: 'Naturally aspirated big-block American muscle. Deep, rich, buttery V8 roar tuned for high-speed executive cruising on Jumeirah Beach Road and Sheikh Zayed Road.',
        metric: '420 HP @ 5,600 RPM'
      },
      {
        title: 'CarbonPro Bed & Sport Stance',
        desc: 'Aerodynamic sport drop with 24-inch custom forged monoblock satin black wheels featuring precision-milled blush pink outer lips.',
        metric: '24" Forged Wheels'
      },
      {
        title: 'Denali Ultimate Sanctuary',
        desc: '16-way massaging seats with dual ventilated cooling for UAE climate, Bose 12-speaker Centerpoint surround system, and illuminated rose-gold GMC signature badge.',
        metric: '12-Speaker Bose Audio'
      }
    ]
  },
  trx: {
    id: 'trx',
    brand: 'RAM Trucks',
    model: 'RAM 1500 TRX "Barbie Beast"',
    edition: 'Supercharged HEMI Apex',
    tagline: '6.2L Supercharged HEMI V8 • 702 HP • Widebody Launch Beast GCC Spec',
    basePrice: 485000,
    priceEstimate: 'AED 485,000',
    hp: '702',
    torque: '881 Nm (650 lb-ft)',
    zeroToSixty: '4.5s (0–100 km/h)',
    topSpeed: '190 km/h (Baja Governed)',
    exhaustNote: '102 dB Straight-Through Dual 5-Inch Exhaust',
    engineSpec: '6.2L Supercharged HEMI V8 (Hellcat Derived with Heavy Sand Filtration)',
    tintLevel: '3% Extreme Limo Blackout Privacy Glass (GCC Extreme Spec)',
    interiorSpec: 'Carbon Fiber Weave with Fuchsia Alcantara Racing Accents',
    images: {
      front: 'assets/images/trx-exterior.jpg',
      interior: 'assets/images/cockpit-interior.jpg',
      lifestyle: 'assets/images/apex-lifestyle-tailgate.jpg',
      driver: 'assets/images/apex-driver-seat.jpg'
    },
    features: [
      {
        title: '6.2L Supercharged HEMI V8',
        desc: 'Twin-screw supercharger spinning at 14,600 RPM producing the world’s most addictive supercharger whine and 702 ferocious horsepower conquering the dunes of Al Qudra.',
        metric: '702 HP / 881 Nm'
      },
      {
        title: 'Baja Widebody Stance',
        desc: '8 inches wider than standard pickup trucks with composite flared fenders, functional hood scoop, and neon pink beadlock lock rings.',
        metric: '+8.0" Wide Stance'
      },
      {
        title: 'Launch Control System',
        desc: 'Race-grade launch control computer with steering-wheel shift paddles, rev-matching telemetry, and custom Apex ignition button.',
        metric: '0–100 km/h in 4.5s'
      }
    ]
  }
};

// Customizer Options Catalog (Prices in AED)
const CUSTOM_OPTIONS = {
  liveries: {
    blush: { name: 'Electric Hot Pink', hex: '#FF1493', addPrice: 0, code: 'V8-P01' },
    rose: { name: 'Cyber Rose Gold', hex: '#FA4D91', addPrice: 6600, code: 'V8-P02' },
    fuchsia: { name: 'Neon Barbie Fuchsia', hex: '#FF007F', addPrice: 8000, code: 'V8-P03' },
    blackout: { name: 'Triple Obsidian Blackout', hex: '#121417', addPrice: 10200, code: 'V8-P04' },
    stealth: { name: 'Satin Gunmetal Grey', hex: '#5A5E68', addPrice: 8800, code: 'V8-P05' },
    violet: { name: 'Midnight Violet Plum', hex: '#7B1FA2', addPrice: 11700, code: 'V8-P06' }
  },
  wheels: {
    beadlock: { name: '20" Forged Beadlock Baja', desc: 'Heavy-duty satin black with pink beadlock ring', addPrice: 12500 },
    monoblock: { name: '24" Deep Dish Monoblock Concave', desc: 'Mirror-polished pink lip with gloss black face', addPrice: 22800 },
    turbine: { name: '22" Multi-Spoke Aero Turbines', desc: 'Directional aero blades with pink diamond-cut edge', addPrice: 17600 },
    bronze: { name: '20" Desert Bronze Rally Wheels', desc: 'Motorsport satin bronze with custom pink center cap', addPrice: 13200 }
  },
  decals: {
    queen: { name: 'Queen 06 Racing Livery', desc: 'Bold rocker & bedside graphic: QUEEN 06 • Apex Racing', addPrice: 8000 },
    camo: { name: 'Barbie Beast Camo Splash', desc: 'Distressed grunge & splatter along flared rear fenders', addPrice: 6500 },
    stripes: { name: 'Twin Center Racing Stripes', desc: 'Dual matte stripes with hot-pink pinstripe borders', addPrice: 5500 },
    claws: { name: 'Predator V8 Triple Claw Slashes', desc: 'High-voltage pink claw slashes across front fender', addPrice: 4400 },
    clean: { name: 'Clean & Debadged (Stealth)', desc: 'Pure minimalist body panels with no exterior decals', addPrice: 0 }
  },
  tints: {
    limo: { name: '5% Limo Blackout', desc: '99.8% UV Block • Total VIP Privacy (GCC Climate Spec)', addPrice: 3300 },
    smoke: { name: '20% Deep Smoke', desc: 'Sport street tint with optimal night vision', addPrice: 2400 },
    exec: { name: '35% Executive Clear', desc: 'High clarity heat-rejecting ceramic sheen', addPrice: 1800 },
    chameleon: { name: 'Chameleon Rose Sheen', desc: 'Iridescent pink/violet polarization reflection sheen', addPrice: 5100 }
  },
  stances: {
    lifted: { name: 'Liwa Desert Baja Lifted (+3.0")', desc: 'Raised ride height on semi-active Fox bypass shocks', addPrice: 15400 },
    standard: { name: 'Factory Sport Stance (0.0")', desc: 'Standard high-speed cruising aerodynamic stance', addPrice: 0 },
    slammed: { name: 'Slammed Street Stance (-2.5")', desc: 'Low-slung widebody street drop with air ride', addPrice: 13900 }
  },
  calipers: {
    pink: { name: 'Electric Hot Pink', hex: '#FF1493', addPrice: 3100 },
    fuchsia: { name: 'Neon Barbie Fuchsia', hex: '#FF007F', addPrice: 3100 },
    black: { name: 'Gloss Piano Black', hex: '#121417', addPrice: 2200 },
    gold: { name: 'Racing Titanium Gold', hex: '#D4AF37', addPrice: 4000 }
  }
};

// =============================================================================
// 2. BULLETPROOF WEB AUDIO ENGINE — AUDIBLE ON LAPTOP & MOBILE SPEAKERS
// =============================================================================
class V8AudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.isMuted = false;
    this.isEngineRunning = false;
    this.isRevving = false;
    this.exhaustMode = 'sport'; // 'quiet' | 'sport' | 'baja'
    
    // Engine Audio Nodes
    this.engineGain = null;
    this.rumbleOsc1 = null;
    this.rumbleOsc2 = null;
    this.rumbleOsc3 = null;
    this.rumbleFilter = null;
    this.distortionNode = null;
    this.superchargerOsc = null;
    this.superchargerGain = null;
    this.pulseGain = null;
    this.lfoOsc = null;

    // Tachometer / Telemetry
    this.currentRPM = 0;
    this.targetRPM = 0;
    this.idleRPM = 850;
    this.maxRPM = 6400;
    this.animFrameId = null;
    this.analyser = null;

    // Bind global user gesture listener to unlock AudioContext
    this.attachAutoplayUnlock();

    // Initialize Real Modified V8 Audio Clips
    this.initRealAudio();
  }

  initRealAudio() {
    this.audioClips = {
      raptor: {
        start: new Audio('assets/audio/raptor-modified-v8.mp3'),
        idle: new Audio('assets/audio/raptor-idle.mp3'),
        rev: new Audio('assets/audio/raptor-rev.mp3')
      },
      sierra: {
        start: new Audio('assets/audio/sierra-modified-v8.mp3'),
        idle: new Audio('assets/audio/sierra-idle.mp3'),
        rev: new Audio('assets/audio/sierra-rev.mp3')
      },
      ram: {
        start: new Audio('assets/audio/ram-modified-v8.mp3'),
        idle: new Audio('assets/audio/ram-idle.mp3'),
        rev: new Audio('assets/audio/ram-rev.mp3')
      },
      silverado: {
        start: new Audio('assets/audio/silverado-modified-v8.mp3'),
        idle: new Audio('assets/audio/silverado-idle.mp3'),
        rev: new Audio('assets/audio/silverado-rev.mp3')
      }
    };

    try {
      Object.values(this.audioClips).forEach(clipSet => {
        clipSet.idle.loop = true;
        clipSet.start.preload = 'auto';
        clipSet.rev.preload = 'auto';
        clipSet.idle.preload = 'auto';
      });
    } catch (e) {}

    this.currentPlayingAudio = null;
    this.currentIdleAudio = null;
    this.activeCarId = 'raptor';
  }

  playCarStart(carId = 'raptor') {
    if (this.isMuted) return;
    this.ensureContext();
    this.activeCarId = carId;
    if (!this.audioClips) this.initRealAudio();
    const clips = this.audioClips && this.audioClips[carId];
    if (!clips) return;

    this.stopAllCarAudio();

    const startAudio = clips.start;
    startAudio.currentTime = 0;
    startAudio.volume = 0.95;
    this.currentPlayingAudio = startAudio;

    const playPromise = startAudio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.isEngineRunning = true;
        this.updateSoundPills();
        
        // Trigger visual rumble on the active truck
        const activeImg = document.querySelector('.lambo-vehicle-card.active .lambo-truck-img');
        if (activeImg) {
          activeImg.classList.add('engine-rumble-shake');
          setTimeout(() => activeImg.classList.remove('engine-rumble-shake'), 1400);
        }

        startAudio.onended = () => {
          if (this.isEngineRunning && !this.isMuted) {
            this.playCarIdle(carId);
          }
        };
      }).catch(err => {
        console.warn('Audio play prevented:', err);
      });
    }
  }

  playCarRev(carId = 'raptor') {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.audioClips) this.initRealAudio();
    const clips = this.audioClips && this.audioClips[carId];
    if (!clips) return;

    if (this.currentIdleAudio) {
      this.currentIdleAudio.volume = 0.25;
    }

    const revAudio = clips.rev.cloneNode();
    revAudio.volume = 1.0;
    revAudio.currentTime = 0;

    const revBtn = document.getElementById('btnRevEngine');
    if (revBtn) {
      revBtn.classList.add('revving');
      setTimeout(() => revBtn.classList.remove('revving'), 1400);
    }

    revAudio.play().then(() => {
      // Visual rumble effect on the active truck
      const activeImg = document.querySelector('.lambo-vehicle-card.active .lambo-truck-img');
      if (activeImg) {
        activeImg.classList.add('engine-rumble-shake');
        setTimeout(() => activeImg.classList.remove('engine-rumble-shake'), 1200);
      }
    }).catch(() => {});

    revAudio.onended = () => {
      if (this.currentIdleAudio && this.isEngineRunning && !this.isMuted) {
        this.currentIdleAudio.volume = 0.75;
      }
    };
  }

  playCarIdle(carId = 'raptor') {
    if (this.isMuted) return;
    if (!this.audioClips) this.initRealAudio();
    const clips = this.audioClips && this.audioClips[carId];
    if (!clips) return;

    this.stopIdleAudio();
    const idleAudio = clips.idle;
    idleAudio.currentTime = 0;
    idleAudio.volume = 0.75;
    this.currentIdleAudio = idleAudio;
    idleAudio.play().catch(() => {});
  }

  stopAllCarAudio() {
    if (this.currentPlayingAudio) {
      try {
        this.currentPlayingAudio.pause();
        this.currentPlayingAudio.currentTime = 0;
      } catch (e) {}
      this.currentPlayingAudio = null;
    }
    this.stopIdleAudio();
    this.isEngineRunning = false;
  }

  stopIdleAudio() {
    if (this.currentIdleAudio) {
      try {
        this.currentIdleAudio.pause();
        this.currentIdleAudio.currentTime = 0;
      } catch (e) {}
      this.currentIdleAudio = null;
    }
  }

  attachAutoplayUnlock() {
    const unlock = () => {
      this.ensureContext();
      window.removeEventListener('click', unlock);
      window.removeEventListener('keydown', unlock);
      window.removeEventListener('touchstart', unlock);
    };
    window.addEventListener('click', unlock, { once: true, passive: true });
    window.addEventListener('keydown', unlock, { once: true, passive: true });
    window.addEventListener('touchstart', unlock, { once: true, passive: true });
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      this.ctx = new AudioCtx();

      // Master output gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.85, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  toggleMute() {
    this.ensureContext();
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.85, this.ctx.currentTime);
    }
    this.updateSoundPills();
    return this.isMuted;
  }

  updateSoundPills() {
    document.querySelectorAll('.nav-sound-status-pill, .sound-master-pill').forEach(pill => {
      if (this.isMuted) {
        pill.classList.add('muted');
        pill.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <line x1="1" y1="1" x2="23" y2="23"></line>
            <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
            <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
          </svg>
          <span>Sound: Muted</span>
        `;
      } else {
        pill.classList.remove('muted');
        pill.innerHTML = `
          <span class="sound-wave-bars">
            <span class="bar bar-1"></span>
            <span class="bar bar-2"></span>
            <span class="bar bar-3"></span>
          </span>
          <span>Sound: ON</span>
        `;
      }
    });
  }

  // Generate gentle soft-clipping saturation curve for realistic exhaust rumble
  createDistortionCurve(amount = 25) {
    const k = amount;
    const n = 44100;
    const curve = new Float32Array(n);
    const deg = Math.PI / 180;
    for (let i = 0; i < n; ++i) {
      const x = (i * 2) / n - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }

  // ---------------------------------------------------------------------------
  // INTERACTION SOUND EFFECTS
  // ---------------------------------------------------------------------------

  // Double automotive luxury keyfob chirp ("beep-beep")
  playKeyfobChirp() {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    [0, 0.11].forEach(offset => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      // High-clarity audible chirp: 2400Hz gliding to 3200Hz
      osc.frequency.setValueAtTime(2400, now + offset);
      osc.frequency.exponentialRampToValueAtTime(3200, now + offset + 0.045);

      gain.gain.setValueAtTime(0, now + offset);
      gain.gain.linearRampToValueAtTime(0.3, now + offset + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.065);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now + offset);
      osc.stop(now + offset + 0.07);
    });
  }

  // Metallic mechanical ratchet click for wheel / rim changes
  playRatchetClick() {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    [0, 0.035, 0.07].forEach((offset, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1200 + idx * 300, now + offset);
      osc.frequency.exponentialRampToValueAtTime(300, now + offset + 0.02);

      gain.gain.setValueAtTime(0.18, now + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.025);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now + offset);
      osc.stop(now + offset + 0.03);
    });
  }

  // Paint spray can hiss for livery color switches
  playSprayPaint() {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const bufferSize = ctx.sampleRate * 0.12;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2800, now);
    filter.Q.setValueAtTime(2.5, now);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(now);
  }

  // Decal application snap & peel for stickers
  playDecalSnap() {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(2400, now + 0.04);

    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.06);
  }

  // Pneumatic air suspension release hiss for stance height change
  playAirSuspension() {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const bufferSize = ctx.sampleRate * 0.32;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.1));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.frequency.linearRampToValueAtTime(400, now + 0.3);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.28, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(now);
  }

  // Tactile button tick
  playButtonTick() {
    const ctx = this.ensureContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(900, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.015);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.025);
  }

  // ---------------------------------------------------------------------------
  // V8 ENGINE COLD START & REAL-TIME SYNTHESIZER
  // ---------------------------------------------------------------------------
  startEngine(carId = 'raptor') {
    const ctx = this.ensureContext();
    if (!ctx) return false;

    if (this.isEngineRunning) {
      this.stopEngine();
      return false;
    }

    const now = ctx.currentTime;

    // 1. Starter Motor Crank Sequence: 3 rhythmic compression pulses
    [0, 0.16, 0.32].forEach((offset, idx) => {
      const crankOsc = ctx.createOscillator();
      const crankGain = ctx.createGain();
      crankOsc.type = 'sawtooth';
      crankOsc.frequency.setValueAtTime(45 + idx * 8, now + offset);
      crankGain.gain.setValueAtTime(0.22, now + offset);
      crankGain.gain.exponentialRampToValueAtTime(0.01, now + offset + 0.12);
      crankOsc.connect(crankGain);
      crankGain.connect(this.masterGain);
      crankOsc.start(now + offset);
      crankOsc.stop(now + offset + 0.14);
    });

    // 2. Analyser for live oscilloscope
    this.analyser = ctx.createAnalyser();
    this.analyser.fftSize = 128;

    // 3. Main V8 Oscillators with Audible Harmonic Spectrum
    // Tuned to 88Hz (F2) fundamental + 176Hz (F3) + 264Hz (C4) so laptop speakers rumble audibly!
    this.rumbleOsc1 = ctx.createOscillator();
    this.rumbleOsc2 = ctx.createOscillator();
    this.rumbleOsc3 = ctx.createOscillator();

    this.rumbleOsc1.type = 'sawtooth';
    this.rumbleOsc2.type = 'triangle';
    this.rumbleOsc3.type = 'sawtooth';

    const baseFreq = this.exhaustMode === 'baja' ? 104 : this.exhaustMode === 'sport' ? 92 : 82;
    this.rumbleOsc1.frequency.setValueAtTime(baseFreq, now + 0.45);
    this.rumbleOsc2.frequency.setValueAtTime(baseFreq * 2, now + 0.45);
    this.rumbleOsc3.frequency.setValueAtTime(baseFreq * 3, now + 0.45);

    // 4. WaveShaper distortion for visceral American V8 bite
    this.distortionNode = ctx.createWaveShaper();
    this.distortionNode.curve = this.createDistortionCurve(this.exhaustMode === 'baja' ? 45 : 28);
    this.distortionNode.oversample = '2x';

    // 5. Exhaust Chamber Resonant Filter
    this.rumbleFilter = ctx.createBiquadFilter();
    this.rumbleFilter.type = 'lowpass';
    this.rumbleFilter.frequency.setValueAtTime(520, now + 0.45);
    this.rumbleFilter.Q.setValueAtTime(3.2, now + 0.45);

    // 6. Cylinder Firing Pulse LFO: Modulates amplitude at ~28Hz (mimicking uneven V8 cross-plane lope)
    this.lfoOsc = ctx.createOscillator();
    this.lfoOsc.type = 'sine';
    this.lfoOsc.frequency.setValueAtTime(28, now + 0.45);
    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(0.18, now + 0.45);
    this.pulseGain = ctx.createGain();
    this.pulseGain.gain.setValueAtTime(0.8, now + 0.45);
    this.lfoOsc.connect(lfoGain);
    lfoGain.connect(this.pulseGain.gain);

    // 7. Supercharger Whine Generator (Centrifugal pitch climb for Raptor & TRX)
    this.superchargerOsc = ctx.createOscillator();
    this.superchargerGain = ctx.createGain();
    this.superchargerOsc.type = 'sine';
    this.superchargerOsc.frequency.setValueAtTime(1450, now + 0.45);
    this.superchargerGain.gain.setValueAtTime(carId === 'sierra' ? 0.015 : 0.06, now + 0.45);

    // 8. Main Engine Output Gain Node
    this.engineGain = ctx.createGain();
    this.engineGain.gain.setValueAtTime(0.001, now);
    // Cold start throttle flair up to 1,800 RPM then settle to idle
    this.engineGain.gain.exponentialRampToValueAtTime(0.38, now + 0.55);
    this.engineGain.gain.linearRampToValueAtTime(0.28, now + 1.2);

    // Connect the audio graph
    this.rumbleOsc1.connect(this.distortionNode);
    this.rumbleOsc2.connect(this.distortionNode);
    this.rumbleOsc3.connect(this.distortionNode);
    this.distortionNode.connect(this.rumbleFilter);
    this.rumbleFilter.connect(this.pulseGain);
    this.pulseGain.connect(this.engineGain);

    this.superchargerOsc.connect(this.superchargerGain);
    this.superchargerGain.connect(this.engineGain);

    this.engineGain.connect(this.analyser);
    this.analyser.connect(this.masterGain);

    // Start Oscillators after crank
    this.rumbleOsc1.start(now + 0.45);
    this.rumbleOsc2.start(now + 0.45);
    this.rumbleOsc3.start(now + 0.45);
    this.lfoOsc.start(now + 0.45);
    this.superchargerOsc.start(now + 0.45);

    this.isEngineRunning = true;
    this.currentRPM = 1800; // Cold start RPM flair
    this.targetRPM = this.idleRPM;

    this.startVisualizer();
    return true;
  }

  stopEngine() {
    if (!this.isEngineRunning || !this.ctx) return;
    const now = this.ctx.currentTime;

    if (this.engineGain) {
      this.engineGain.gain.linearRampToValueAtTime(0.001, now + 0.35);
      setTimeout(() => {
        try {
          if (this.rumbleOsc1) this.rumbleOsc1.stop();
          if (this.rumbleOsc2) this.rumbleOsc2.stop();
          if (this.rumbleOsc3) this.rumbleOsc3.stop();
          if (this.lfoOsc) this.lfoOsc.stop();
          if (this.superchargerOsc) this.superchargerOsc.stop();
        } catch (e) {}
      }, 400);
    }

    this.isEngineRunning = false;
    this.currentRPM = 0;
    this.targetRPM = 0;
    this.stopVisualizer();
  }

  revThrottle(down = true) {
    if (!this.isEngineRunning || !this.ctx) return;
    this.isRevving = down;
    const now = this.ctx.currentTime;

    if (down) {
      this.targetRPM = 6200;
      const baseFreq = this.exhaustMode === 'baja' ? 104 : this.exhaustMode === 'sport' ? 92 : 82;

      this.rumbleOsc1.frequency.cancelScheduledValues(now);
      this.rumbleOsc2.frequency.cancelScheduledValues(now);
      this.rumbleFilter.frequency.cancelScheduledValues(now);
      this.engineGain.gain.cancelScheduledValues(now);
      this.superchargerOsc.frequency.cancelScheduledValues(now);
      this.superchargerGain.gain.cancelScheduledValues(now);

      // Pitch climb to screaming redline
      this.rumbleOsc1.frequency.exponentialRampToValueAtTime(baseFreq * 3.8, now + 0.4);
      this.rumbleOsc2.frequency.exponentialRampToValueAtTime(baseFreq * 7.6, now + 0.4);
      this.rumbleFilter.frequency.exponentialRampToValueAtTime(2200, now + 0.4);
      this.engineGain.gain.linearRampToValueAtTime(0.48, now + 0.3);

      // Supercharger scream
      this.superchargerOsc.frequency.exponentialRampToValueAtTime(3600, now + 0.4);
      this.superchargerGain.gain.linearRampToValueAtTime(0.16, now + 0.3);

      // Trigger pop sequence on throttle lift
      setTimeout(() => {
        if (!this.isRevving && this.isEngineRunning) {
          this.playExhaustBurbleSequence();
        }
      }, 420);
    } else {
      this.targetRPM = this.idleRPM;
      const baseFreq = this.exhaustMode === 'baja' ? 104 : this.exhaustMode === 'sport' ? 92 : 82;

      this.rumbleOsc1.frequency.cancelScheduledValues(now);
      this.rumbleOsc2.frequency.cancelScheduledValues(now);
      this.rumbleFilter.frequency.cancelScheduledValues(now);
      this.engineGain.gain.cancelScheduledValues(now);
      this.superchargerOsc.frequency.cancelScheduledValues(now);
      this.superchargerGain.gain.cancelScheduledValues(now);

      // Return to idle rumble
      this.rumbleOsc1.frequency.exponentialRampToValueAtTime(baseFreq, now + 0.65);
      this.rumbleOsc2.frequency.exponentialRampToValueAtTime(baseFreq * 2, now + 0.65);
      this.rumbleFilter.frequency.exponentialRampToValueAtTime(520, now + 0.65);
      this.engineGain.gain.linearRampToValueAtTime(0.28, now + 0.65);

      this.superchargerOsc.frequency.exponentialRampToValueAtTime(1450, now + 0.65);
      this.superchargerGain.gain.linearRampToValueAtTime(0.04, now + 0.65);

      this.playExhaustBurbleSequence();
    }
  }

  // Rapid series of 2-4 authentic sport exhaust crackles & pops
  playExhaustBurbleSequence() {
    if (!this.ctx || !this.isEngineRunning) return;
    const count = Math.floor(Math.random() * 3) + 2;
    for (let i = 0; i < count; i++) {
      const delay = i * (80 + Math.random() * 70);
      setTimeout(() => {
        if (this.isEngineRunning) this.playSingleExhaustPop();
      }, delay);
    }
  }

  playSingleExhaustPop() {
    if (!this.ctx || !this.isEngineRunning) return;
    const now = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 0.06;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.012));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(320 + Math.random() * 200, now);
    filter.Q.value = 4.0;

    const popGain = this.ctx.createGain();
    popGain.gain.setValueAtTime(0.35 + Math.random() * 0.15, now);
    popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);

    noise.connect(filter);
    filter.connect(popGain);
    popGain.connect(this.masterGain);

    noise.start(now);
  }

  setExhaustMode(mode) {
    this.exhaustMode = mode;
    this.playButtonTick();
    if (this.isEngineRunning && this.rumbleFilter && this.ctx) {
      const now = this.ctx.currentTime;
      if (mode === 'baja') {
        this.rumbleFilter.frequency.setValueAtTime(850, now);
        this.idleRPM = 1050;
      } else if (mode === 'sport') {
        this.rumbleFilter.frequency.setValueAtTime(520, now);
        this.idleRPM = 900;
      } else {
        this.rumbleFilter.frequency.setValueAtTime(320, now);
        this.idleRPM = 780;
      }
      this.targetRPM = this.idleRPM;
    }
  }

  startVisualizer() {
    const canvas = document.getElementById('soundwaveCanvas');
    if (!canvas || !this.analyser) return;
    const canvasCtx = canvas.getContext('2d');
    const bufferLength = this.analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      this.animFrameId = requestAnimationFrame(draw);
      this.analyser.getByteTimeDomainData(dataArray);

      const width = canvas.width;
      const height = canvas.height;
      canvasCtx.clearRect(0, 0, width, height);

      // Smooth RPM physics ticker
      this.currentRPM += (this.targetRPM - this.currentRPM) * 0.16;
      const rpmEl = document.getElementById('tachRpmDisplay');
      if (rpmEl) {
        rpmEl.textContent = Math.round(this.currentRPM).toLocaleString();
        if (this.currentRPM > 3000) {
          rpmEl.classList.add('revving');
        } else {
          rpmEl.classList.remove('revving');
        }
      }

      // Draw pink soundwave
      canvasCtx.lineWidth = 2.2;
      canvasCtx.strokeStyle = this.currentRPM > 2500 ? '#FF1493' : '#121417';
      canvasCtx.beginPath();

      const sliceWidth = (width * 1.0) / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * height) / 2;

        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }
        x += sliceWidth;
      }

      canvasCtx.lineTo(width, height / 2);
      canvasCtx.stroke();
    };

    draw();
  }

  stopVisualizer() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }
    const canvas = document.getElementById('soundwaveCanvas');
    if (canvas) {
      const canvasCtx = canvas.getContext('2d');
      canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
      // Flat idle line
      canvasCtx.strokeStyle = '#E2E8F0';
      canvasCtx.lineWidth = 1.5;
      canvasCtx.beginPath();
      canvasCtx.moveTo(0, canvas.height / 2);
      canvasCtx.lineTo(canvas.width, canvas.height / 2);
      canvasCtx.stroke();
    }
    const rpmEl = document.getElementById('tachRpmDisplay');
    if (rpmEl) {
      rpmEl.textContent = '0';
      rpmEl.classList.remove('revving');
    }
  }
}

// Global Audio Engine Instance
const AUDIO = new V8AudioEngine();
window.AUDIO = AUDIO;

// =============================================================================
// 3. ADVANCED CUSTOMIZATION CONTROLLER & REAL-TIME OVERLAYS
// =============================================================================
class CarCustomizer {
  constructor(carId = 'raptor') {
    this.carId = carId;
    this.spec = {
      livery: 'blush',
      wheels: 'monoblock',
      decals: 'queen',
      tint: 'limo',
      stance: 'standard',
      caliper: 'pink',
      plate: 'DUBAI • APEX 1'
    };
    this.loadSavedSpec();
  }

  loadSavedSpec() {
    try {
      const saved = localStorage.getItem(`v8_custom_spec_${this.carId}`);
      if (saved) {
        this.spec = { ...this.spec, ...JSON.parse(saved) };
      }
    } catch (e) {}
  }

  saveSpec() {
    try {
      localStorage.setItem(`v8_custom_spec_${this.carId}`, JSON.stringify(this.spec));
    } catch (e) {}
  }

  setLivery(liveryKey) {
    if (!CUSTOM_OPTIONS.liveries[liveryKey]) return;
    this.spec.livery = liveryKey;
    AUDIO.playSprayPaint();
    this.applyVisuals();
    this.updatePrice();
    this.saveSpec();
  }

  setWheels(wheelKey) {
    if (!CUSTOM_OPTIONS.wheels[wheelKey]) return;
    this.spec.wheels = wheelKey;
    AUDIO.playRatchetClick();
    this.applyVisuals();
    this.updatePrice();
    this.saveSpec();
  }

  setDecals(decalKey) {
    if (!CUSTOM_OPTIONS.decals[decalKey]) return;
    this.spec.decals = decalKey;
    AUDIO.playDecalSnap();
    this.applyVisuals();
    this.updatePrice();
    this.saveSpec();
  }

  setTint(tintKey) {
    if (!CUSTOM_OPTIONS.tints[tintKey]) return;
    this.spec.tint = tintKey;
    AUDIO.playButtonTick();
    this.applyVisuals();
    this.updatePrice();
    this.saveSpec();
  }

  setStance(stanceKey) {
    if (!CUSTOM_OPTIONS.stances[stanceKey]) return;
    this.spec.stance = stanceKey;
    AUDIO.playAirSuspension();
    this.applyVisuals();
    this.updatePrice();
    this.saveSpec();
  }

  setCaliper(caliperKey) {
    if (!CUSTOM_OPTIONS.calipers[caliperKey]) return;
    this.spec.caliper = caliperKey;
    AUDIO.playRatchetClick();
    this.applyVisuals();
    this.updatePrice();
    this.saveSpec();
  }

  setPlate(plateText) {
    this.spec.plate = plateText.trim().toUpperCase() || 'DUBAI • APEX 1';
    const plateDisplay = document.getElementById('viewportLicensePlateText');
    if (plateDisplay) plateDisplay.textContent = this.spec.plate;
    this.saveSpec();
  }

  calculateTotal() {
    const car = CARS_DATA[this.carId] || CARS_DATA.raptor;
    let total = car.basePrice;
    total += CUSTOM_OPTIONS.liveries[this.spec.livery]?.addPrice || 0;
    total += CUSTOM_OPTIONS.wheels[this.spec.wheels]?.addPrice || 0;
    total += CUSTOM_OPTIONS.decals[this.spec.decals]?.addPrice || 0;
    total += CUSTOM_OPTIONS.tints[this.spec.tint]?.addPrice || 0;
    total += CUSTOM_OPTIONS.stances[this.spec.stance]?.addPrice || 0;
    total += CUSTOM_OPTIONS.calipers[this.spec.caliper]?.addPrice || 0;
    return total;
  }

  updatePrice() {
    const total = this.calculateTotal();
    const priceEl = document.getElementById('configEstimatePrice');
    if (priceEl) {
      priceEl.textContent = `AED ${total.toLocaleString()}`;
    }
    const ctaPriceEl = document.querySelector('.cta-est-price');
    if (ctaPriceEl) {
      ctaPriceEl.textContent = `AED ${total.toLocaleString()}`;
    }
    const ctaSub = document.querySelector('.cta-est-sub');
    if (ctaSub) {
      ctaSub.textContent = 'AED';
    }
  }

  applyVisuals() {
    const container = document.getElementById('studioCanvasContainer');
    if (!container) return;

    // 1. Stance Height Physics Class
    container.classList.remove('stance-lifted', 'stance-standard', 'stance-slammed');
    container.classList.add(`stance-${this.spec.stance}`);

    // 2. Tint Darkness Class
    container.classList.remove('tint-limo', 'tint-smoke', 'tint-exec', 'tint-chameleon');
    container.classList.add(`tint-${this.spec.tint}`);

    // 3. Livery Accent Class
    container.classList.remove('livery-blush', 'livery-rose', 'livery-fuchsia', 'livery-blackout', 'livery-stealth', 'livery-violet');
    container.classList.add(`livery-${this.spec.livery}`);

    // 4. Caliper Accent Class
    container.classList.remove('caliper-pink', 'caliper-fuchsia', 'caliper-black', 'caliper-gold');
    container.classList.add(`caliper-${this.spec.caliper}`);

    // 5. Render Custom Decals Overlay
    this.renderDecalsOverlay();

    // 6. Update HUD Telemetry Badges
    this.updateHudBadges();

    // 7. Update UI Active Buttons
    this.updateActiveControlButtons();
  }

  renderDecalsOverlay() {
    const overlayContainer = document.getElementById('customDecalOverlay');
    if (!overlayContainer) return;

    overlayContainer.className = `custom-decal-overlay decal-mode-${this.spec.decals}`;

    if (this.spec.decals === 'queen') {
      overlayContainer.innerHTML = `
        <svg class="svg-decal-asset decal-queen-banner" viewBox="0 0 500 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="decalPinkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#FF1493" stop-opacity="0.95"/>
              <stop offset="70%" stop-color="#E91E63" stop-opacity="0.85"/>
              <stop offset="100%" stop-color="#FF1493" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <polygon points="0,65 300,65 335,105 0,105" fill="rgba(18,20,23,0.78)"/>
          <polygon points="5,69 295,69 328,101 5,101" fill="url(#decalPinkGrad)"/>
          <text x="24" y="93" font-family="'Outfit', sans-serif" font-weight="900" font-size="21" fill="#FFFFFF" letter-spacing="3">QUEEN 06</text>
          <text x="180" y="92" font-family="'JetBrains Mono', monospace" font-weight="700" font-size="11" fill="#FFFFFF" letter-spacing="2">• Apex Racing</text>
          <line x1="300" y1="69" x2="345" y2="69" stroke="#FF1493" stroke-width="4"/>
          <line x1="310" y1="79" x2="355" y2="79" stroke="#FF1493" stroke-width="4"/>
          <line x1="320" y1="89" x2="365" y2="89" stroke="#FF1493" stroke-width="4"/>
        </svg>
      `;
    } else if (this.spec.decals === 'camo') {
      overlayContainer.innerHTML = `
        <svg class="svg-decal-asset decal-camo-splash" viewBox="0 0 500 160" preserveAspectRatio="none">
          <defs>
            <radialGradient id="splashGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#FF1493" stop-opacity="0.85"/>
              <stop offset="100%" stop-color="#E91E63" stop-opacity="0.2"/>
            </radialGradient>
          </defs>
          <!-- Geometric Mud Splatter & Camo Hex Polygons along Flared Bedside -->
          <path d="M340,30 Q380,10 420,40 T480,70 Q440,110 400,90 T340,30" fill="url(#splashGlow)"/>
          <circle cx="330" cy="45" r="7" fill="#FF1493"/>
          <circle cx="310" cy="65" r="5" fill="#E91E63"/>
          <circle cx="430" cy="95" r="8" fill="#FF1493"/>
          <circle cx="450" cy="115" r="5" fill="#FA4D91"/>
          <polygon points="360,55 380,45 395,63 370,73" fill="#121417" opacity="0.6"/>
          <polygon points="410,50 435,35 445,57 420,67" fill="#FF1493" opacity="0.7"/>
          <text x="350" y="85" font-family="'Outfit', sans-serif" font-weight="900" font-size="14" fill="#FF1493" letter-spacing="4">BARBIE BEAST</text>
        </svg>
      `;
    } else if (this.spec.decals === 'stripes') {
      overlayContainer.innerHTML = `
        <div class="decal-racing-stripes-wrap">
          <div class="stripe-bar-left"></div>
          <div class="stripe-bar-spacer"></div>
          <div class="stripe-bar-right"></div>
        </div>
      `;
    } else if (this.spec.decals === 'claws') {
      overlayContainer.innerHTML = `
        <svg class="svg-decal-asset decal-predator-claws" viewBox="0 0 200 160">
          <defs>
            <linearGradient id="clawGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FF1493"/>
              <stop offset="100%" stop-color="#FF007F"/>
            </linearGradient>
          </defs>
          <!-- 3 Slashed Predator Claws across Headlight / Fender -->
          <polygon points="35,10 50,10 30,130 15,130" fill="url(#clawGrad)"/>
          <polygon points="60,20 75,20 55,140 40,140" fill="url(#clawGrad)"/>
          <polygon points="85,30 100,30 80,150 65,150" fill="url(#clawGrad)"/>
        </svg>
      `;
    } else {
      overlayContainer.innerHTML = '';
    }
  }

  updateHudBadges() {
    // Livery Label
    const liveryLabel = document.getElementById('configAccentValue');
    if (liveryLabel && CUSTOM_OPTIONS.liveries[this.spec.livery]) {
      liveryLabel.textContent = CUSTOM_OPTIONS.liveries[this.spec.livery].name;
    }

    // Wheel Label
    const wheelLabel = document.getElementById('configWheelValue');
    if (wheelLabel && CUSTOM_OPTIONS.wheels[this.spec.wheels]) {
      wheelLabel.textContent = CUSTOM_OPTIONS.wheels[this.spec.wheels].name;
    }

    // Decal Label
    const decalLabel = document.getElementById('configDecalValue');
    if (decalLabel && CUSTOM_OPTIONS.decals[this.spec.decals]) {
      decalLabel.textContent = CUSTOM_OPTIONS.decals[this.spec.decals].name;
    }

    // Tint Label
    const tintLabel = document.getElementById('configTintValue');
    if (tintLabel && CUSTOM_OPTIONS.tints[this.spec.tint]) {
      tintLabel.textContent = CUSTOM_OPTIONS.tints[this.spec.tint].name;
    }

    // Stance Label
    const stanceLabel = document.getElementById('configStanceValue');
    if (stanceLabel && CUSTOM_OPTIONS.stances[this.spec.stance]) {
      stanceLabel.textContent = CUSTOM_OPTIONS.stances[this.spec.stance].name;
    }

    // Caliper Label
    const caliperLabel = document.getElementById('configCaliperValue');
    if (caliperLabel && CUSTOM_OPTIONS.calipers[this.spec.caliper]) {
      caliperLabel.textContent = CUSTOM_OPTIONS.calipers[this.spec.caliper].name;
    }

    // HUD Model Tag with Active Livery Name
    const hudModel = document.getElementById('viewportHudModel');
    if (hudModel) {
      const car = CARS_DATA[this.carId] || CARS_DATA.raptor;
      const liveryName = CUSTOM_OPTIONS.liveries[this.spec.livery]?.name || 'Hot Pink';
      hudModel.textContent = `${car.model} • ${liveryName} • GCC Spec`;
    }

    // HUD Live Telemetry Badge overlay on Car Viewport
    const hudTelemetryBadge = document.getElementById('hudTelemetryBadge');
    if (hudTelemetryBadge) {
      const wheelName = CUSTOM_OPTIONS.wheels[this.spec.wheels]?.name || 'Custom Wheels';
      const stanceName = CUSTOM_OPTIONS.stances[this.spec.stance]?.name || 'Sport Stance';
      const caliperName = CUSTOM_OPTIONS.calipers[this.spec.caliper]?.name || 'Pink Calipers';
      const caliperHex = CUSTOM_OPTIONS.calipers[this.spec.caliper]?.hex || '#FF1493';

      hudTelemetryBadge.innerHTML = `
        <span class="hud-dot-pink" style="background: ${caliperHex}; box-shadow: 0 0 6px ${caliperHex};"></span>
        <span>${wheelName} • ${stanceName}</span>
        <span class="hud-caliper-tag" style="color: ${caliperHex};">
          ${caliperName}
        </span>
      `;
    }
  }

  updateActiveControlButtons() {
    // Livery Swatches
    document.querySelectorAll('[data-accent]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.accent === this.spec.livery);
    });

    // Wheels
    document.querySelectorAll('[data-wheel]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.wheel === this.spec.wheels);
    });

    // Decals
    document.querySelectorAll('[data-decal]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.decal === this.spec.decals);
    });

    // Tints
    document.querySelectorAll('[data-tint]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tint === this.spec.tint);
    });

    // Stances
    document.querySelectorAll('[data-stance]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.stance === this.spec.stance);
    });

    // Calipers
    document.querySelectorAll('[data-caliper]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.caliper === this.spec.caliper);
    });
  }
}

// Global Customizer Instance
let ACTIVE_CUSTOMIZER = null;

// =============================================================================
// 4. MAIN PAGE INTERACTIONS & EVENT BINDINGS
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Detect Current Page
  const pageCar = document.body.dataset.carPage;
  ACTIVE_CUSTOMIZER = new CarCustomizer(pageCar || 'raptor');
  ACTIVE_CUSTOMIZER.applyVisuals();
  ACTIVE_CUSTOMIZER.updatePrice();

  // ---------------------------------------------------------------------------
  // Top Navbar Sound Master Pill (Present on all pages)
  // ---------------------------------------------------------------------------
  const soundMasterPills = document.querySelectorAll('.nav-sound-status-pill, .sound-master-pill');
  soundMasterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const isMuted = AUDIO.toggleMute();
      if (!isMuted) {
        const activeCar = (typeof STAGE_CARS !== 'undefined' && STAGE_CARS[currentStageIndex]) ? STAGE_CARS[currentStageIndex].id : (pageCar || 'raptor');
        AUDIO.playCarStart(activeCar);
      } else {
        AUDIO.stopAllCarAudio();
      }
    });
  });

  // Dedicated "Rev V8" Button
  const btnRevEngine = document.getElementById('btnRevEngine');
  if (btnRevEngine) {
    btnRevEngine.addEventListener('click', () => {
      if (AUDIO.isMuted) {
        AUDIO.toggleMute();
      }
      const activeCar = (typeof STAGE_CARS !== 'undefined' && STAGE_CARS[currentStageIndex]) ? STAGE_CARS[currentStageIndex].id : (pageCar || 'raptor');
      AUDIO.playCarRev(activeCar);
    });
  }

  // Keyfob Navigation Chirp Button (Top Right)
  const btnKeyfobTop = document.getElementById('btnKeyfobTop');
  if (btnKeyfobTop) {
    btnKeyfobTop.addEventListener('click', () => {
      AUDIO.playKeyfobChirp();

      // Screen Flash Feedback
      const flash = document.createElement('div');
      flash.style.position = 'fixed';
      flash.style.inset = '0';
      flash.style.background = 'rgba(255, 20, 147, 0.12)';
      flash.style.pointerEvents = 'none';
      flash.style.zIndex = '99999';
      flash.style.transition = 'opacity 0.28s ease';
      document.body.appendChild(flash);
      setTimeout(() => {
        flash.style.opacity = '0';
        setTimeout(() => flash.remove(), 280);
      }, 70);
    });
  }

  // ---------------------------------------------------------------------------
  // Gateway Car Portal Cards Hover Audio (index.html)
  // ---------------------------------------------------------------------------
  document.querySelectorAll('.portal-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      AUDIO.playButtonTick();
    });
  });

  // ---------------------------------------------------------------------------
  // Editorial White Lamborghini-Style Vehicle Stage Controller (index.html)
  // ---------------------------------------------------------------------------
  const STAGE_CARS = [
    {
      id: 'raptor',
      brand: 'FORD PERFORMANCE',
      model: 'F-150 RAPTOR R',
      speed: '195',
      accel: '3.8',
      hp: '720',
      icon: 'assets/icons/dock-ford-pink.png',
      alt: 'Ford',
      link: 'raptor.html'
    },
    {
      id: 'sierra',
      brand: 'GMC TRUCKS',
      model: 'SIERRA AT4X',
      speed: '210',
      accel: '5.6',
      hp: '420',
      icon: 'assets/icons/dock-gmc-pink.png',
      alt: 'GMC',
      link: 'sierra.html'
    },
    {
      id: 'ram',
      brand: 'RAM SRT APEX',
      model: 'RAM 1500 TRX',
      speed: '190',
      accel: '4.5',
      hp: '702',
      icon: 'assets/icons/dock-ram-pink.png',
      alt: 'RAM',
      link: 'trx.html'
    },
    {
      id: 'silverado',
      brand: 'CHEVROLET MOTORSPORT',
      model: 'SILVERADO ZR2',
      speed: '205',
      accel: '5.4',
      hp: '420',
      icon: 'assets/icons/dock-chevy-pink.png',
      alt: 'Chevrolet',
      link: 'silverado.html'
    }
  ];

  let currentStageIndex = 0;
  const stageNavLinks = document.querySelectorAll('.lambo-nav-link');
  const stageVehicleCards = document.querySelectorAll('.lambo-vehicle-card');
  const stageTypoItems = document.querySelectorAll('.bg-typo-item');
  const dockBrandIcon = document.getElementById('dockBrandIcon');
  const dockBrand = document.getElementById('dockBrand');
  const dockModel = document.getElementById('dockModel');
  const dockSpeed = document.getElementById('dockSpeed');
  const dockAccel = document.getElementById('dockAccel');
  const dockHp = document.getElementById('dockHp');
  const dockEnterLink = document.getElementById('dockEnterLink');
  const btnPrevCar = document.getElementById('btnPrevCar');
  const btnNextCar = document.getElementById('btnNextCar');

  function setStageCar(index) {
    if (stageVehicleCards.length === 0) return;
    if (index < 0) index = STAGE_CARS.length - 1;
    if (index >= STAGE_CARS.length) index = 0;
    currentStageIndex = index;
    const car = STAGE_CARS[currentStageIndex];

    // Nav Links
    stageNavLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.carTarget === car.id);
    });

    // Vehicles
    stageVehicleCards.forEach(card => {
      card.classList.toggle('active', card.dataset.car === car.id);
    });

    // Typography
    stageTypoItems.forEach(typo => {
      typo.classList.toggle('active', typo.dataset.car === car.id);
    });

    // Dock Brand Icon
    if (dockBrandIcon && car.icon) {
      dockBrandIcon.src = car.icon;
      dockBrandIcon.alt = car.alt || car.brand;
    }

    // Dock Info
    if (dockBrand) dockBrand.textContent = car.brand;
    if (dockModel) dockModel.textContent = car.model;
    if (dockSpeed) dockSpeed.textContent = car.speed;
    if (dockAccel) dockAccel.textContent = car.accel;
    if (dockHp) dockHp.textContent = car.hp;
    if (dockEnterLink) {
      dockEnterLink.href = car.link;
      dockEnterLink.title = `Enter ${car.model} Showroom`;
    }

    // Modified V8 Exhaust Audio Feedback
    if (window.AUDIO && !AUDIO.isMuted) {
      AUDIO.playCarRev(car.id);
    }
  }

  if (stageVehicleCards.length > 0) {
    stageNavLinks.forEach((link, idx) => {
      link.addEventListener('click', () => setStageCar(idx));
    });

    // Clicking any vehicle card revs that specific modified truck!
    stageVehicleCards.forEach(card => {
      card.addEventListener('click', () => {
        const carId = card.dataset.car || 'raptor';
        if (window.AUDIO) {
          if (AUDIO.isMuted) {
            AUDIO.toggleMute();
          }
          AUDIO.playCarRev(carId);
        }
      });
    });

    if (btnPrevCar) {
      btnPrevCar.addEventListener('click', () => setStageCar(currentStageIndex - 1));
    }
    if (btnNextCar) {
      btnNextCar.addEventListener('click', () => setStageCar(currentStageIndex + 1));
    }

    // Touch Swipe Support for Mobile
    let touchStartX = 0;
    let touchEndX = 0;
    const stageWrapper = document.querySelector('.lambo-stage-wrapper');
    if (stageWrapper) {
      stageWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      stageWrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 40) {
          if (diff < 0) {
            setStageCar(currentStageIndex + 1);
          } else {
            setStageCar(currentStageIndex - 1);
          }
        }
      }, { passive: true });
    }

    window.setStageCar = setStageCar;
    const urlParamCar = new URLSearchParams(window.location.search).get('car');
    const defaultCar = document.body.dataset.defaultCar || urlParamCar;
    if (defaultCar) {
      const foundIdx = STAGE_CARS.findIndex(c => c.id === defaultCar);
      if (foundIdx !== -1) {
        setStageCar(foundIdx);
      }
    }
  }

  // ---------------------------------------------------------------------------
  // Cinematic Art Canvas Cursor Spotlight (index.html)
  // ---------------------------------------------------------------------------
  const cursorSpotlight = document.getElementById('cursorSpotlight');
  if (cursorSpotlight) {
    window.addEventListener('mousemove', (e) => {
      cursorSpotlight.style.opacity = '1';
      cursorSpotlight.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    }, { passive: true });
    window.addEventListener('mouseleave', () => {
      cursorSpotlight.style.opacity = '0';
    });
  }

  // ---------------------------------------------------------------------------
  // V8 Engine Ignition Deck
  // ---------------------------------------------------------------------------
  const btnEngineStart = document.getElementById('btnEngineStart');
  if (btnEngineStart) {
    btnEngineStart.addEventListener('click', () => {
      const running = AUDIO.startEngine(pageCar || 'raptor');
      if (running) {
        btnEngineStart.classList.add('running');
        btnEngineStart.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <rect x="6" y="6" width="12" height="12"/>
          </svg>
          <span>Stop V8 Engine</span>
        `;
        const revBtn = document.getElementById('btnEngineRev');
        if (revBtn) revBtn.disabled = false;
      } else {
        btnEngineStart.classList.remove('running');
        btnEngineStart.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="10 8 16 12 10 16 10 8"/>
          </svg>
          <span>Start V8 Engine</span>
        `;
        const revBtn = document.getElementById('btnEngineRev');
        if (revBtn) revBtn.disabled = true;
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Hero POV Direct V8 Engine Ignition
  // ---------------------------------------------------------------------------
  const btnHeroIgnite = document.getElementById('btnHeroIgnite');
  if (btnHeroIgnite) {
    btnHeroIgnite.addEventListener('click', () => {
      const isRunning = AUDIO.isEngineRunning;
      if (!isRunning) {
        const started = AUDIO.startEngine(pageCar || 'raptor');
        if (started) {
          btnHeroIgnite.classList.add('running');
          btnHeroIgnite.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <rect x="6" y="6" width="12" height="12"/>
            </svg>
            <span id="heroIgniteText">Stop V8 Engine</span>
          `;
          // Quick exhilarating throttle blip after ignition
          setTimeout(() => {
            AUDIO.revThrottle(true);
            setTimeout(() => AUDIO.revThrottle(false), 520);
          }, 140);
        }
      } else {
        AUDIO.stopEngine();
        btnHeroIgnite.classList.remove('running');
        btnHeroIgnite.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="10 8 16 12 10 16 10 8"/>
          </svg>
          <span id="heroIgniteText">Ignite V8 Roar</span>
        `;
      }
    });
  }

  // Rev Throttle Button (Hold or Click / Keyboard Accessible)
  const btnEngineRev = document.getElementById('btnEngineRev');
  if (btnEngineRev) {
    let pressStartTime = 0;
    let blipActive = false;

    const startRev = (e) => {
      if (e) e.preventDefault();
      if (!AUDIO.isEngineRunning) return;
      pressStartTime = Date.now();
      blipActive = false;
      AUDIO.revThrottle(true);
    };

    const endRev = (e) => {
      if (e) e.preventDefault();
      if (!AUDIO.isEngineRunning) return;
      const duration = Date.now() - pressStartTime;
      if (duration < 220) {
        // Quick tap or click: deliver an exhilarating 550ms throttle blip with burble pops
        blipActive = true;
        setTimeout(() => {
          AUDIO.revThrottle(false);
          blipActive = false;
        }, 550);
      } else {
        AUDIO.revThrottle(false);
      }
    };

    btnEngineRev.addEventListener('mousedown', startRev);
    btnEngineRev.addEventListener('mouseup', endRev);
    btnEngineRev.addEventListener('mouseleave', () => {
      if (!blipActive) AUDIO.revThrottle(false);
    });
    btnEngineRev.addEventListener('touchstart', startRev, { passive: false });
    btnEngineRev.addEventListener('touchend', endRev, { passive: false });

    // Keyboard Accessibility (Enter or Space)
    btnEngineRev.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        startRev();
        setTimeout(endRev, 100);
      }
    });
  }

  // Exhaust Mode Chips
  document.querySelectorAll('.btn-exhaust-mode').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.btn-exhaust-mode').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.dataset.exhaustMode || 'sport';
      AUDIO.setExhaustMode(mode);
    });
  });

  // ---------------------------------------------------------------------------
  // Customizer Controls Event Bindings
  // ---------------------------------------------------------------------------

  // 1. Livery Accent Swatches
  document.querySelectorAll('.swatch-btn[data-accent]').forEach(btn => {
    btn.addEventListener('click', () => {
      const livery = btn.dataset.accent;
      ACTIVE_CUSTOMIZER.setLivery(livery);
    });
  });

  // 2. Wheels & Rims Buttons
  document.querySelectorAll('.wheel-option-card[data-wheel]').forEach(btn => {
    btn.addEventListener('click', () => {
      const wheel = btn.dataset.wheel;
      ACTIVE_CUSTOMIZER.setWheels(wheel);
    });
  });

  // 3. Decals & Stickers Buttons
  document.querySelectorAll('.decal-chip-btn[data-decal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const decal = btn.dataset.decal;
      ACTIVE_CUSTOMIZER.setDecals(decal);
    });
  });

  // 4. Window Tint Buttons
  document.querySelectorAll('.pill-option-btn[data-tint]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tint = btn.dataset.tint;
      ACTIVE_CUSTOMIZER.setTint(tint);
    });
  });

  // 5. Stance & Suspension Height Buttons
  document.querySelectorAll('.pill-option-btn[data-stance]').forEach(btn => {
    btn.addEventListener('click', () => {
      const stance = btn.dataset.stance;
      ACTIVE_CUSTOMIZER.setStance(stance);
    });
  });

  // 6. Brake Calipers Buttons
  document.querySelectorAll('.caliper-chip-btn[data-caliper]').forEach(btn => {
    btn.addEventListener('click', () => {
      const caliper = btn.dataset.caliper;
      ACTIVE_CUSTOMIZER.setCaliper(caliper);
    });
  });

  // 7. License Plate Live Text Input
  const plateInput = document.getElementById('plateTextInput');
  if (plateInput) {
    plateInput.value = ACTIVE_CUSTOMIZER.spec.plate;
    plateInput.addEventListener('input', (e) => {
      ACTIVE_CUSTOMIZER.setPlate(e.target.value);
    });
  }

  // 8. License Plate Quick Chips
  document.querySelectorAll('.chip-preset[data-plate]').forEach(chip => {
    chip.addEventListener('click', () => {
      const text = chip.dataset.plate;
      if (plateInput) plateInput.value = text;
      ACTIVE_CUSTOMIZER.setPlate(text);
      AUDIO.playButtonTick();
    });
  });

  // ---------------------------------------------------------------------------
  // Angle Tabs (Front 3/4, Cockpit, Tailgate, Driver's Seat)
  // ---------------------------------------------------------------------------
  document.querySelectorAll('.btn-angle-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.btn-angle-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      AUDIO.playButtonTick();

      const imgEl = document.getElementById('studioMainImage');
      const decalOverlay = document.getElementById('customDecalOverlay');
      const plateEl = document.getElementById('viewportLicensePlate');
      const hudBadge = document.getElementById('hudTelemetryBadge');

      if (tab.dataset.img && imgEl) {
        imgEl.style.opacity = '0.35';
        setTimeout(() => {
          imgEl.src = tab.dataset.img;
          imgEl.style.opacity = '1';
        }, 150);

        const imgSrc = tab.dataset.img;
        const isExterior = imgSrc.includes('exterior');

        // Hide decals on interior or driver seat
        if (decalOverlay) {
          decalOverlay.style.display = isExterior ? 'block' : 'none';
        }

        // Hide exterior Dubai license plate on interior and driver views
        if (plateEl) {
          plateEl.style.display = isExterior ? 'flex' : 'none';
        }

        // Contextually adapt HUD badge to view angle
        if (hudBadge) {
          if (imgSrc.includes('cockpit') || imgSrc.includes('interior')) {
            hudBadge.innerHTML = `
              <span class="hud-dot-pink"></span>
              <span>Obsidian Alcantara • Apex Electric Pink French Stitching</span>
            `;
          } else if (imgSrc.includes('driver')) {
            hudBadge.innerHTML = `
              <span class="hud-dot-pink"></span>
              <span>Cockpit View • Sheikh Zayed Road Ready</span>
            `;
          } else if (imgSrc.includes('tailgate')) {
            hudBadge.innerHTML = `
              <span class="hud-dot-pink"></span>
              <span>Tailgate Sunset Lounge • Relaxing with Iced Matcha</span>
            `;
          } else if (ACTIVE_CUSTOMIZER) {
            ACTIVE_CUSTOMIZER.updateHudBadges();
          }
        }
      }
    });
  });

  // ---------------------------------------------------------------------------
  // Lock In Spec Button & Celebration Modal
  // ---------------------------------------------------------------------------
  const btnLockBuild = document.getElementById('btnLockBuild');
  if (btnLockBuild) {
    btnLockBuild.addEventListener('click', () => {
      AUDIO.playKeyfobChirp();
      openBuildLockModal();
    });
  }

  // Gallery Card Lightbox Modals
  document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.querySelector('.gallery-card-title');
      if (img) {
        openLightbox(img.src, title ? title.textContent : '');
        AUDIO.playButtonTick();
      }
    });
  });

  // Modal Closers
  const lightboxModal = document.getElementById('lightboxModal');
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal || e.target.closest('.modal-close-btn')) {
        closeLightbox();
      }
    });
  }

  const keysModal = document.getElementById('keysModal');
  if (keysModal) {
    keysModal.addEventListener('click', (e) => {
      if (e.target === keysModal || e.target.closest('.modal-close-btn')) {
        closeKeysModal();
      }
    });
  }

  const btnTriggerKeys = document.getElementById('btnTriggerKeys');
  if (btnTriggerKeys) {
    btnTriggerKeys.addEventListener('click', () => {
      triggerRealKeysCelebration();
    });
  }

  // Initialize Cinematic Scrollytelling Visual Archive
  initScrollytelling();

  // Initialize UAE Commission & Equipment Dossier Auto-Scroll Carousel
  initModsCarousel();
});

// =============================================================================
// UAE COMMISSION & EQUIPMENT DOSSIER: SINGLE-ROW AUTO-SCROLL CONTROLLER
// =============================================================================
function initModsCarousel() {
  const wrapper = document.getElementById('modsScrollWrapper') || document.querySelector('.mods-scroll-wrapper');
  const track = document.getElementById('modsScrollTrack') || document.querySelector('.mods-scroll-track');
  if (!wrapper || !track) return;

  const groups = track.querySelectorAll('.mods-marquee-group');
  if (!groups.length) return;

  const group1 = groups[0];
  const group2 = groups[1] || null;

  // Fallback: If group2 is missing, clone group1 for infinite loop
  if (!group2 && group1) {
    const clone = group1.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  }

  // Interactive Prev / Next manual navigation controls
  const btnPrev = document.getElementById('btnModsPrev');
  const btnNext = document.getElementById('btnModsNext');
  let manualOffset = 0;
  let resumeTimer = null;

  function stepTrack(direction) {
    const card = group1.querySelector('.mod-card');
    const stepSize = card ? (card.offsetWidth + 24) : 360;

    wrapper.classList.add('paused');
    groups.forEach(g => {
      g.style.animationPlayState = 'paused';
    });

    manualOffset += direction * stepSize;
    track.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
    track.style.transform = `translate3d(${manualOffset}px, 0, 0)`;

    if (window.AUDIO && window.AUDIO.playUiClick) {
      window.AUDIO.playUiClick();
    }

    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      track.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
      track.style.transform = 'translate3d(0, 0, 0)';
      setTimeout(() => {
        wrapper.classList.remove('paused');
        groups.forEach(g => {
          g.style.animationPlayState = '';
        });
        manualOffset = 0;
      }, 600);
    }, 2800);
  }

  if (btnNext) {
    btnNext.addEventListener('click', (e) => {
      e.preventDefault();
      stepTrack(-1);
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', (e) => {
      e.preventDefault();
      stepTrack(1);
    });
  }

  // Touch & pointer pause on mobile
  wrapper.addEventListener('touchstart', () => {
    wrapper.classList.add('paused');
  }, { passive: true });

  wrapper.addEventListener('touchend', () => {
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      wrapper.classList.remove('paused');
    }, 1600);
  }, { passive: true });
}

// =============================================================================
// CINEMATIC SONG LYRIC SCROLLYTELLING CONTROLLER
// Paced, slow reveal of large vertical song lyrics on left, free vehicle on right
// =============================================================================
function initScrollytelling() {
  const container = document.querySelector('.lyric-scrolly-container, .scrolly-container');
  if (!container) return;

  const verses = Array.from(container.querySelectorAll('.lyric-verse, .scrolly-step'));
  const slides = Array.from(container.querySelectorAll('.lyric-slide, .scrolly-slide'));
  const pillBtns = Array.from(container.querySelectorAll('.lyric-pill-btn'));

  if (!verses.length) return;

  let currentActive = 1;

  function setActiveVerse(targetIndex, playSound = true) {
    if (targetIndex < 1 || targetIndex > verses.length) return;
    if (targetIndex === currentActive) return;
    currentActive = targetIndex;

    // 1. Highlight active lyric verse (Apple Music / Spotify lyric motion)
    verses.forEach((v, idx) => {
      const vNum = idx + 1;
      if (vNum === targetIndex) {
        v.classList.add('active');
      } else {
        v.classList.remove('active');
      }
    });

    // 2. Switch active free visual slide
    const activeVerseEl = verses[targetIndex - 1];
    const targetSlideId = activeVerseEl.dataset.slide || String(targetIndex);

    slides.forEach(slide => {
      const sId = slide.dataset.slide;
      if (sId === targetSlideId) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // 3. Update minimal angle switcher pills if present
    pillBtns.forEach(btn => {
      if (btn.dataset.slide === targetSlideId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (playSound && window.AUDIO && !AUDIO.isMuted) {
      AUDIO.playButtonTick();
    }
  }

  // Click on any lyric line to jump & illuminate it
  verses.forEach((verse, idx) => {
    verse.addEventListener('click', () => {
      const targetIndex = idx + 1;
      setActiveVerse(targetIndex, true);
      verse.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  // Click on angle switcher pills
  pillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const slideId = btn.dataset.slide;
      const matchingIdx = verses.findIndex(v => v.dataset.slide === slideId);
      if (matchingIdx !== -1) {
        setActiveVerse(matchingIdx + 1, true);
        verses[matchingIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        // Just switch the slide directly
        slides.forEach(s => {
          if (s.dataset.slide === slideId) {
            s.classList.add('active');
          } else {
            s.classList.remove('active');
          }
        });
        pillBtns.forEach(b => b.classList.toggle('active', b === btn));
      }
    });
  });

  // Click on active free image opens master Lightbox
  function openCurrentSlideLightbox() {
    const activeSlide = container.querySelector('.lyric-slide.active img, .scrolly-slide.active img');
    const activeVerse = container.querySelector('.lyric-verse.active .lyric-line-main, .scrolly-step.active .scrolly-step-headline');
    if (activeSlide && window.openLightbox) {
      const caption = activeVerse ? activeVerse.innerText.replace(/\s+/g, ' ').trim() : 'Master Archive';
      window.openLightbox(activeSlide.src, caption);
    }
  }

  const freeWrapper = container.querySelector('.lyric-car-free-wrapper');
  if (freeWrapper) {
    freeWrapper.addEventListener('click', openCurrentSlideLightbox);
  }

  slides.forEach(slide => {
    slide.addEventListener('click', openCurrentSlideLightbox);
    slide.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCurrentSlideLightbox();
      }
    });
  });

  // IntersectionObserver for cinematic song lyric scroll
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const verseNum = parseInt(entry.target.dataset.verse || entry.target.dataset.step, 10);
          if (!isNaN(verseNum)) {
            setActiveVerse(verseNum, false);
          }
        }
      });
    }, {
      root: null,
      rootMargin: '-35% 0px -40% 0px',
      threshold: [0, 0.25, 0.5, 0.75]
    });

    verses.forEach(v => observer.observe(v));
  }

  // Smooth scroll listener fallback for fluid experience
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        const viewportCenter = window.innerHeight * 0.46;
        let closestVerse = 1;
        let minDistance = Infinity;

        verses.forEach((v, idx) => {
          const rect = v.getBoundingClientRect();
          const vCenter = rect.top + rect.height / 2;
          const dist = Math.abs(vCenter - viewportCenter);
          if (dist < minDistance) {
            minDistance = dist;
            closestVerse = idx + 1;
          }
        });

        const containerRect = container.getBoundingClientRect();
        if (containerRect.top <= window.innerHeight * 0.75 && containerRect.bottom >= window.innerHeight * 0.25) {
          setActiveVerse(closestVerse, false);
        }

        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });
}

// -----------------------------------------------------------------------------
// MODALS & CONFETTI CELEBRATIONS
// -----------------------------------------------------------------------------
function openLightbox(src, caption) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  if (!modal || !img) return;

  img.src = src;
  if (cap) cap.textContent = caption || '';
  modal.classList.add('open');
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.remove('open');
}

function triggerRealKeysCelebration() {
  const modal = document.getElementById('keysModal');
  if (modal) modal.classList.add('open');
  AUDIO.playKeyfobChirp();
  launchConfetti();
}

function closeKeysModal() {
  const modal = document.getElementById('keysModal');
  if (modal) modal.classList.remove('open');
}

function openBuildLockModal() {
  const modal = document.getElementById('keysModal');
  if (!modal) return;

  if (ACTIVE_CUSTOMIZER) {
    const car = CARS_DATA[ACTIVE_CUSTOMIZER.carId] || CARS_DATA.raptor;
    const spec = ACTIVE_CUSTOMIZER.spec;
    const total = ACTIVE_CUSTOMIZER.calculateTotal();

    const titleEl = modal.querySelector('h3');
    if (titleEl) {
      titleEl.textContent = `Bespoke ${car.model} Specification Locked!`;
    }

    const descEl = modal.querySelector('p');
    if (descEl) {
      descEl.innerHTML = `Official bespoke certificate for <strong>Apex</strong>. Commissioned in Dubai, UAE with full GCC heavy-duty high-ambient cooling specification.`;
    }

    const specBox = modal.querySelector('div[style*="border: 1px dashed"]') || modal.querySelector('.modal-cert-spec-box');
    if (specBox) {
      const vinMap = {
        raptor: '1FTFW1R88R-RAPTOR-APEX-2026',
        sierra: '3GTU9EEL5R-SIERRA-APEX-2026',
        trx: '1C6SRFU98R-TRX-BARBIE-2026'
      };
      const vin = vinMap[ACTIVE_CUSTOMIZER.carId] || '1FTFW1R88R-RAPTOR-APEX-2026';
      const liveryName = CUSTOM_OPTIONS.liveries[spec.livery]?.name || spec.livery;
      const wheelName = CUSTOM_OPTIONS.wheels[spec.wheels]?.name || spec.wheels;
      const decalName = CUSTOM_OPTIONS.decals[spec.decals]?.name || spec.decals;
      const tintName = CUSTOM_OPTIONS.tints[spec.tint]?.name || spec.tint;
      const stanceName = CUSTOM_OPTIONS.stances[spec.stance]?.name || spec.stance;
      const caliperName = CUSTOM_OPTIONS.calipers[spec.caliper]?.name || spec.caliper;

      specBox.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,20,147,0.25); padding-bottom: 10px; margin-bottom: 12px;">
          <div>
            <div style="font-size: 0.72rem; color: var(--pink-electric); font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;">Total Bespoke Build</div>
            <div style="font-size: 1.4rem; font-weight: 900; color: var(--black-obsidian); font-family: var(--font-display);">AED ${total.toLocaleString()}</div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">VIP REGISTRATION</div>
            <div style="display: inline-block; background: #FFFFFF; border: 1.5px solid var(--black-obsidian); border-radius: 4px; padding: 2px 8px; font-weight: 800; font-size: 0.85rem; color: var(--black-obsidian); margin-top: 2px;">
              ${spec.plate || 'DUBAI • APEX 1'}
            </div>
          </div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; font-size: 0.78rem; line-height: 1.45; text-align: left;">
          <div><strong style="color: var(--pink-electric);">Livery:</strong> ${liveryName}</div>
          <div><strong style="color: var(--pink-electric);">Wheels:</strong> ${wheelName}</div>
          <div><strong style="color: var(--pink-electric);">Decals:</strong> ${decalName}</div>
          <div><strong style="color: var(--pink-electric);">Glass Tint:</strong> ${tintName}</div>
          <div><strong style="color: var(--pink-electric);">Suspension:</strong> ${stanceName}</div>
          <div><strong style="color: var(--pink-electric);">Calipers:</strong> ${caliperName}</div>
        </div>
        <div style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed rgba(0,0,0,0.12); font-size: 0.72rem; color: var(--text-muted); display: flex; justify-content: space-between;">
          <span>VIN: ${vin}</span>
          <span>GCC SPEC APPROVED 🇦🇪</span>
        </div>
      `;
    }
  }

  modal.classList.add('open');
  AUDIO.playKeyfobChirp();
  launchConfetti();
}

// Luxury Vanilla Confetti Cannon
function launchConfetti() {
  const count = 80;
  const colors = ['#FF1493', '#E91E63', '#FA4D91', '#121417', '#FFFFFF'];
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-particle';
    confetti.style.position = 'fixed';
    confetti.style.top = '-20px';
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.width = `${Math.random() * 10 + 6}px`;
    confetti.style.height = `${Math.random() * 10 + 6}px`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    confetti.style.zIndex = '99999';
    confetti.style.pointerEvents = 'none';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.style.transition = `top ${Math.random() * 2 + 2}s cubic-bezier(0.25, 1, 0.5, 1), transform 3s linear, opacity 3s linear`;

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.style.top = `${window.innerHeight + 50}px`;
      confetti.style.transform = `rotate(${Math.random() * 720}deg) translateX(${Math.random() * 120 - 60}px)`;
      confetti.style.opacity = '0';
    }, 50);

    setTimeout(() => {
      confetti.remove();
    }, 3200);
  }
}
