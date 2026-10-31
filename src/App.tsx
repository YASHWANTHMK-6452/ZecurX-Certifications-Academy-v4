import { useEffect, useRef, useState } from "react";

type IconName =
  | "arrow"
  | "award"
  | "brain"
  | "briefcase"
  | "check"
  | "chevron"
  | "clock"
  | "code"
  | "layers"
  | "menu"
  | "network"
  | "radar"
  | "shield"
  | "star"
  | "terminal"
  | "users"
  | "x";

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    award: <><circle cx="12" cy="8" r="5" /><path d="M8.8 12 7 22l5-3 5 3-1.8-10" /></>,
    brain: <><path d="M9.5 4A3.5 3.5 0 0 0 6 7.5c0 .4.1.8.2 1.2A3.8 3.8 0 0 0 4 12.2a3.8 3.8 0 0 0 2.7 3.6V17a3 3 0 0 0 3 3c1 0 1.8-.4 2.3-1V5.8A2.8 2.8 0 0 0 9.5 4Z" /><path d="M14.5 4A3.5 3.5 0 0 1 18 7.5c0 .4-.1.8-.2 1.2a3.8 3.8 0 0 1 2.2 3.5 3.8 3.8 0 0 1-2.7 3.6V17a3 3 0 0 1-3 3c-1 0-1.8-.4-2.3-1" /><path d="M8 9.5c1.5 0 2.5 1 2.5 2.5M16 9.5c-1.5 0-2.5 1-2.5 2.5" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m8 10 4 4 4-4" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    code: <><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 6l-4 12" /></>,
    layers: <><path d="m12 3-9 5 9 5 9-5-9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    network: <><rect x="9" y="2" width="6" height="6" rx="1.5" /><rect x="2" y="16" width="6" height="6" rx="1.5" /><rect x="16" y="16" width="6" height="6" rx="1.5" /><path d="M12 8v4M5 16v-2h14v2" /></>,
    radar: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><path d="m12 12 5-5M12 3v2M3 12h2" /></>,
    shield: <><path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
    star: <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2Z" />,
    terminal: <><path d="m5 7 4 5-4 5M11 17h8" /></>,
    users: <><path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" /><circle cx="10" cy="8" r="4" /><path d="M17 11a3 3 0 0 0 0-6M19 15.5a3 3 0 0 1 2 2.8V20" /></>,
    x: <><path d="m6 6 12 12M18 6 6 18" /></>,
  };

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Logo() {
  return (
    <a href="#" className="logo" aria-label="ZecurX Certifications and Academy home">
      <img className="logo-mark" src="/assets/zecurx-icon.png" alt="" />
      <img className="logo-type" src="/assets/zecurx-wordmark.png" alt="ZecurX" />
      <span className="logo-divider" />
      <span className="logo-academy">CERTIFICATIONS &amp; TRAINING</span>
    </a>
  );
}

function HeroVisual() {
  return (
    <div
      className="hero-image-card"
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        event.currentTarget.style.setProperty("--hero-rotate-x", `${y * -5}deg`);
        event.currentTarget.style.setProperty("--hero-rotate-y", `${x * 6}deg`);
        event.currentTarget.style.setProperty("--hero-light-x", `${(x + 0.5) * 100}%`);
        event.currentTarget.style.setProperty("--hero-light-y", `${(y + 0.5) * 100}%`);
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.setProperty("--hero-rotate-x", "0deg");
        event.currentTarget.style.setProperty("--hero-rotate-y", "0deg");
      }}
    >
      <img src="/assets/cyber-operations.jpg" alt="Cybersecurity professional monitoring multiple systems" />
      <div className="image-scan" />
      <div className="threat-panel">
        <span className="threat-icon"><Icon name="shield" /></span>
        <span><small>Defense simulation</small><b>Scenario contained</b></span>
        <i>Secure</i>
      </div>
      <div className="signal-panel">
        <span className="signal-bars"><i /><i /><i /><i /><i /></span>
        <span><b>Active signals</b><small>Training telemetry</small></span>
      </div>
      <div className="image-orbit orbit-one" />
      <div className="image-orbit orbit-two" />
      <div className="photo-credit">
        Photo by <a href="https://unsplash.com/@abusaeid01" target="_blank" rel="noreferrer">Abu Saeid</a>
      </div>
    </div>
  );
}

const proofPoints = [
  { icon: "brain" as const, title: "AI security learning", text: "Study intelligent analysis of suspicious activity" },
  { icon: "terminal" as const, title: "Hands-on labs", text: "Practice attack and defense in guided scenarios" },
  { icon: "radar" as const, title: "Threat intelligence", text: "Interpret alerts, indicators, and security context" },
  { icon: "network" as const, title: "Interactive 3D labs", text: "Explore connected systems and attack paths" },
];

const courses = [
  {
    code: "zxCPEH",
    title: "Certified Professional Ethical Hacker",
    description: "Advanced ethical hacking methodology. 40 Hours duration.",
    price: "₹29,999",
    originalPrice: "₹45,499",
    level: "Intermediate",
    duration: "40 Hours",
    logo: "/assets/zxCPEH.png",
    url: "https://www.zecurx.com/academy/06a10be6-115a-4a83-b338-67168abcce1a",
    skills: ["Advanced Exploitation", "Network & Web Security", "Privilege Escalation", "Active Directory Attacks", "Project-Based Learning"],
    tools: ["Kali Linux", "Nmap", "Wireshark", "Metasploit", "Burp Suite"],
  },
  {
    code: "zxCPPT",
    title: "Certified Professional Pen Tester",
    description: "Professional penetration testing certification. 60 Hours duration.",
    price: "₹35,999",
    originalPrice: "₹59,999",
    level: "Advanced",
    duration: "60 Hours",
    logo: "/assets/zxCPPT.png",
    url: "https://www.zecurx.com/academy/1033198a-bf65-4183-9e6e-aab727903039",
    skills: ["Red Teaming Methodology", "Advanced Evasion Techniques", "Report Writing & Documentation", "Custom Exploit Development", "Industry Standard Tools"],
    tools: ["Burp Suite Pro", "Metasploit", "Cobalt Strike", "Hashcat", "Nmap"],
  },
  {
    code: "zxGAIP",
    title: "Generative AI Professional",
    description: "Leverage Generative AI for security operations. 40 Hours duration.",
    price: "₹29,999",
    originalPrice: "₹49,999",
    level: "Intermediate",
    duration: "40 Hours",
    logo: "/assets/zxGAIP.png",
    url: "https://www.zecurx.com/academy/b5276793-8c55-4759-8206-3d1a833fe304",
    skills: ["LLMs for Security", "Automated Threat Hunting", "Secure AI Deployment", "AI Risk Management", "Real-world Case Studies"],
    tools: ["Python", "LangChain", "OpenAI API", "Hugging Face", "Wireshark"],
  },
  {
    code: "zxCFD",
    title: "Certified Fullstack Dev",
    description: "Become a security-aware fullstack developer. Build robust, secure applications from the ground up.",
    price: "Contact for Pricing",
    level: "Intermediate",
    duration: "Coming Soon",
    logo: "/assets/zxCFD.png",
    url: "https://www.zecurx.com/academy/9bce53be-103e-46b9-9fa0-2b91260f38db",
    skills: ["Secure Coding Practices", "Modern Stack (Next.js, Node)", "Database Security", "API Development", "DevSecOps Basics"],
    tools: ["VS Code", "Node.js", "React", "Next.js", "PostgreSQL"],
  },
  {
    code: "zxCCF",
    title: "Certified Cybersecurity Foundations",
    description: "Foundational knowledge for a career in cybersecurity. Understand the landscape, threats, and basic protections.",
    price: "Institution Only",
    level: "Beginner",
    duration: "Custom",
    logo: "/assets/zxCCF.png",
    url: "https://www.zecurx.com/academy/3613d162-d801-47c6-9305-719f999738c8",
    skills: ["Core Security Concepts", "Network Fundamentals", "Cryptography Basics", "Security Ethics", "Career Roadmap"],
    tools: ["Linux", "Wireshark", "Nmap", "VirtualBox", "Firewalls"],
  },
  {
    code: "zxCCE",
    title: "Certified Cybersecurity Expert",
    description: "Expert-level training for leadership roles. Strategy, governance, and advanced security architecture.",
    price: "Institution Only",
    level: "Expert",
    duration: "Custom",
    logo: "/assets/zxCCE.png",
    url: "https://www.zecurx.com/academy/ef34cbc8-c918-4e64-bd88-799863b299e1",
    skills: ["Security Governance", "Risk Management", "C-Level Communication", "Enterprise Architecture", "Strategic Planning"],
    tools: ["SIEM Platforms", "NIST & ISO 27001", "Power BI", "ServiceNow", "Risk Registers"],
  },
  {
    code: "zxCCP",
    title: "Certified Cybersecurity Practitioner",
    description: "Practical cybersecurity skills for professionals. Focus on defense, incident handling, and everyday security operations.",
    price: "Institution Only",
    level: "Beginner",
    duration: "Custom",
    logo: "/assets/zxCCP.png",
    url: "https://www.zecurx.com/academy/7f0e2cb3-82c1-4634-9a95-67a2ae14a815",
    skills: ["Incident Response Basics", "Security Controls Implementation", "Policy & Compliance", "Log Analysis", "Institutional Training"],
    tools: ["Wireshark", "Firewalls", "SIEM Basics", "Windows Event Logs", "EDR Tools"],
  },
];

type Review = { name: string; role: string; rating: number; date: string; text: string };

const seedReviews: Record<string, Review[]> = {
  zxCPEH: [
    { name: "Ananya R.", role: "SOC Analyst", rating: 5, date: "2 weeks ago", text: "The privilege escalation and Active Directory modules were outstanding. Every lab mirrored a real engagement, and the instructor explained the 'why' behind each technique." },
    { name: "Rahul M.", role: "Penetration Tester", rating: 5, date: "1 month ago", text: "Best hands-on course I have taken. The project-based format forced me to chain attacks end to end instead of memorizing steps. Cleared my internal assessment with confidence." },
    { name: "Priya S.", role: "Network Engineer", rating: 4, date: "2 months ago", text: "Excellent content and labs, though the pacing in the exploitation module is intense for beginners. Support on the community forum was quick and genuinely helpful." },
  ],
  zxCPPT: [
    { name: "Karthik V.", role: "Red Team Operator", rating: 5, date: "3 weeks ago", text: "Advanced evasion and custom exploit development set this apart from any other pentest certification I have attempted. The report-writing feedback alone was worth the price." },
    { name: "Divya N.", role: "Security Consultant", rating: 5, date: "1 month ago", text: "Challenging, practical, and well structured. The instructors are practitioners who shared real engagement stories that no courseware covers." },
    { name: "Mohit A.", role: "Security Engineer", rating: 4, date: "2 months ago", text: "Very demanding but rewarding. I wish there were a few more practice windows for the final assessment, but the material itself is top tier." },
  ],
  zxGAIP: [
    { name: "Sanjana K.", role: "ML Engineer", rating: 5, date: "1 week ago", text: "Finally a course that connects LLMs to real security operations. The automated threat hunting labs with LangChain were my favorite part." },
    { name: "Vikram T.", role: "SOC Lead", rating: 5, date: "3 weeks ago", text: "Great balance of AI concepts and practical deployment. I now have a working prototype of an AI-assisted triage pipeline from the course capstone." },
    { name: "Farhan I.", role: "Security Analyst", rating: 4, date: "1 month ago", text: "Clear explanations and current tooling. Some AI risk management sessions felt brief, but the case studies made up for it." },
  ],
  zxCFD: [
    { name: "Neha B.", role: "Fullstack Developer", rating: 5, date: "2 weeks ago", text: "The secure coding modules changed how I write code daily. API and database security sections were directly applicable to my sprint work." },
    { name: "Arjun P.", role: "Software Engineer", rating: 4, date: "1 month ago", text: "Strong DevSecOps fundamentals with a modern stack. Looking forward to the full launch since this preview track already delivers." },
  ],
  zxCCF: [
    { name: "Ishita D.", role: "Student", rating: 5, date: "2 weeks ago", text: "Perfect starting point. The career roadmap session helped me plan certifications in the right order, and the cryptography basics were easy to follow." },
    { name: "Ravi G.", role: "IT Support", rating: 5, date: "3 weeks ago", text: "Zero prior security knowledge and I still kept up. The instructors are patient and the labs are approachable from day one." },
  ],
  zxCCE: [
    { name: "Meera J.", role: "CISO", rating: 5, date: "1 month ago", text: "The governance and board-communication modules are exactly what senior leaders need. Framework references to NIST and ISO 27001 were practical, not academic." },
    { name: "Suresh L.", role: "Head of IT", rating: 4, date: "2 months ago", text: "Excellent strategic content. I would love even more risk register templates, but the architecture sessions were superb." },
  ],
  zxCCP: [
    { name: "Aisha F.", role: "Security Practitioner", rating: 5, date: "1 week ago", text: "The incident response walk-throughs and log analysis drills gave me skills I used at work the very next day." },
    { name: "Deepak H.", role: "Systems Admin", rating: 5, date: "3 weeks ago", text: "Practical, well-paced training for day-to-day defense work. The Windows Event Logs and EDR sessions were especially strong." },
  ],
};

const differentiators = [
  {
    icon: "terminal" as const,
    title: "Cyber Range & Attack-Defense Labs",
    text: "Practice realistic cyberattack and defense scenarios in isolated virtual environments.",
    status: "Platform roadmap",
    details: [
      "Guided exercises with clear objectives and completion criteria",
      "Safe environments for authorized attack-and-defense practice",
      "Post-exercise explanations focused on defensive learning",
    ],
  },
  {
    icon: "brain" as const,
    title: "AI Security Learning Copilot",
    text: "Understand security findings with contextual explanations and guided learning.",
    status: "Planned capability",
    details: [
      "Beginner-friendly explanations of vulnerabilities and defenses",
      "Progressive hints before complete solutions are revealed",
      "Next-step recommendations based on demonstrated progress",
    ],
  },
  {
    icon: "radar" as const,
    title: "Attack-to-Defense Intelligence",
    text: "Connect offensive security techniques with practical defensive strategies.",
    status: "Learning model",
    details: [
      "Relate attack techniques to detection and mitigation approaches",
      "Translate findings into actionable defensive recommendations",
      "Reference established frameworks where they support the lesson",
    ],
  },
  {
    icon: "network" as const,
    title: "Personalized Cybersecurity Skill Graph",
    text: "Visualize your skills, identify knowledge gaps, and follow a clear learning path.",
    status: "Interactive preview",
    details: [
      "Map prerequisite relationships from foundations to advanced skills",
      "Make progress and knowledge gaps easier to understand",
      "Recommend a next step without hiding the broader learning path",
    ],
  },
];

const threatCities = [
  { name: "New York", country: "United States", lat: 40.7, lon: -74 },
  { name: "London", country: "United Kingdom", lat: 51.5, lon: -0.1 },
  { name: "Frankfurt", country: "Germany", lat: 50.1, lon: 8.7 },
  { name: "Paris", country: "France", lat: 48.9, lon: 2.4 },
  { name: "Amsterdam", country: "Netherlands", lat: 52.4, lon: 4.9 },
  { name: "Moscow", country: "Russia", lat: 55.7, lon: 37.6 },
  { name: "Dubai", country: "United Arab Emirates", lat: 25.2, lon: 55.3 },
  { name: "Mumbai", country: "India", lat: 19.1, lon: 72.9 },
  { name: "Bengaluru", country: "India", lat: 12.97, lon: 77.6 },
  { name: "Singapore", country: "Singapore", lat: 1.35, lon: 103.8 },
  { name: "Beijing", country: "China", lat: 39.9, lon: 116.4 },
  { name: "Tokyo", country: "Japan", lat: 35.7, lon: 139.7 },
  { name: "Seoul", country: "South Korea", lat: 37.6, lon: 127 },
  { name: "Sydney", country: "Australia", lat: -33.9, lon: 151.2 },
  { name: "São Paulo", country: "Brazil", lat: -23.5, lon: -46.6 },
  { name: "Toronto", country: "Canada", lat: 43.7, lon: -79.4 },
  { name: "Johannesburg", country: "South Africa", lat: -26.2, lon: 28 },
];

const threatTypes = [
  { type: "Ransomware", color: "#ff4d7d" },
  { type: "DDoS Attack", color: "#35d6ff" },
  { type: "Phishing", color: "#ffb648" },
  { type: "Malware Drop", color: "#ff3ea5" },
  { type: "Botnet C2", color: "#8b7dff" },
  { type: "Zero-Day Exploit", color: "#ff7a45" },
  { type: "Credential Theft", color: "#4d8bff" },
  { type: "SQL Injection", color: "#3ddc97" },
];

type ThreatEvent = { id: number; from: number; to: number; kind: number; born: number };

function GlobalThreatMap() {
  const boardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const eventsRef = useRef<ThreatEvent[]>([]);
  const visibleRef = useRef(true);
  const [events, setEvents] = useState<ThreatEvent[]>([]);
  const [detected, setDetected] = useState(41257);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let id = 0;
    const spawn = () => {
      const from = Math.floor(Math.random() * threatCities.length);
      let to = Math.floor(Math.random() * threatCities.length);
      while (to === from) to = Math.floor(Math.random() * threatCities.length);
      const event: ThreatEvent = { id: id++, from, to, kind: Math.floor(Math.random() * threatTypes.length), born: performance.now() };
      eventsRef.current = [event, ...eventsRef.current].slice(0, 7);
      setEvents(eventsRef.current.slice());
      setDetected((current) => current + Math.floor(3 + Math.random() * 14));
    };
    spawn();
    const interval = window.setInterval(() => {
      if (visibleRef.current) spawn();
    }, reduced ? 5000 : 1600);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const board = boardRef.current;
    const canvas = canvasRef.current;
    if (!board || !canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const visibility = new IntersectionObserver(([entry]) => { visibleRef.current = entry.isIntersecting; }, { threshold: 0.05 });
    visibility.observe(board);

    let width = 0;
    let height = 0;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const resizer = new ResizeObserver(resize);
    resizer.observe(canvas);

    const tilt = -0.35;
    const hexAlpha = (hex: string, alpha: number) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${alpha})`;
    };
    let rotation = 0;

    const project = (lat: number, lon: number, radius: number) => {
      const phi = (lat * Math.PI) / 180;
      const lambda = ((lon + rotation) * Math.PI) / 180;
      const x = Math.cos(phi) * Math.sin(lambda);
      const zTop = Math.cos(phi) * Math.cos(lambda);
      const yMid = Math.sin(phi);
      const y = yMid * Math.cos(tilt) - zTop * Math.sin(tilt);
      const z = yMid * Math.sin(tilt) + zTop * Math.cos(tilt);
      return { x: width / 2 + x * radius, y: height / 2 - y * radius, z };
    };

    const arcPoint = (from: (typeof threatCities)[number], to: (typeof threatCities)[number], t: number, radius: number) => {
      const lat = from.lat + (to.lat - from.lat) * t;
      let dLon = to.lon - from.lon;
      if (dLon > 180) dLon -= 360;
      if (dLon < -180) dLon += 360;
      const lon = from.lon + dLon * t;
      return project(lat, lon, radius * (1 + 0.3 * Math.sin(Math.PI * t)));
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      if (width < 2 || height < 2) return;
      const radius = Math.min(width, height) / 2 - 28;

      const sphere = context.createRadialGradient(width / 2 - radius * 0.32, height / 2 - radius * 0.36, radius * 0.1, width / 2, height / 2, radius);
      sphere.addColorStop(0, "#1a3a66");
      sphere.addColorStop(0.62, "#0d2040");
      sphere.addColorStop(1, "#071325");
      context.beginPath();
      context.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
      context.fillStyle = sphere;
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = "rgba(116,170,255,.42)";
      context.stroke();

      context.lineWidth = 0.7;
      for (let lon = 0; lon < 360; lon += 30) {
        context.beginPath();
        let drawing = false;
        for (let lat = -88; lat <= 88; lat += 4) {
          const p = project(lat, lon - 180, radius);
          if (p.z > 0) {
            if (drawing) context.lineTo(p.x, p.y);
            else { context.moveTo(p.x, p.y); drawing = true; }
          } else drawing = false;
        }
        context.strokeStyle = "rgba(96,146,255,.15)";
        context.stroke();
      }
      for (let lat = -60; lat <= 60; lat += 30) {
        context.beginPath();
        let drawing = false;
        for (let step = 0; step <= 360; step += 4) {
          const p = project(lat, step - 180, radius);
          if (p.z > 0) {
            if (drawing) context.lineTo(p.x, p.y);
            else { context.moveTo(p.x, p.y); drawing = true; }
          } else drawing = false;
        }
        context.strokeStyle = lat === 0 ? "rgba(116,170,255,.3)" : "rgba(96,146,255,.15)";
        context.stroke();
      }

      threatCities.forEach((city) => {
        const p = project(city.lat, city.lon, radius);
        if (p.z <= 0.02) return;
        const alpha = Math.min(1, p.z + 0.25);
        context.beginPath();
        context.arc(p.x, p.y, 2.3, 0, Math.PI * 2);
        context.fillStyle = `rgba(150,214,255,${0.9 * alpha})`;
        context.fill();
        context.beginPath();
        context.arc(p.x, p.y, 6 + Math.sin(time / 460 + city.lon) * 1.6, 0, Math.PI * 2);
        context.strokeStyle = `rgba(96,190,255,${0.26 * alpha})`;
        context.lineWidth = 1;
        context.stroke();
      });

      eventsRef.current.forEach((event) => {
        const age = (time - event.born) / 1000;
        const life = 2.8;
        if (age > life) return;
        const from = threatCities[event.from];
        const to = threatCities[event.to];
        const color = threatTypes[event.kind].color;
        const progress = Math.min(1, age / 1.35);
        const fade = age < life - 0.7 ? 1 : Math.max(0, (life - age) / 0.7);

        context.beginPath();
        let drawing = false;
        for (let i = 0; i <= 46; i++) {
          const p = arcPoint(from, to, (i / 46) * progress, radius);
          if (p.z <= 0) { drawing = false; continue; }
          if (drawing) context.lineTo(p.x, p.y);
          else { context.moveTo(p.x, p.y); drawing = true; }
        }
        context.strokeStyle = hexAlpha(color, 0.85 * fade);
        context.lineWidth = 1.6;
        context.shadowColor = color;
        context.shadowBlur = 9;
        context.stroke();
        context.shadowBlur = 0;

        if (progress < 1) {
          const head = arcPoint(from, to, progress, radius);
          if (head.z > 0) {
            context.beginPath();
            context.arc(head.x, head.y, 3, 0, Math.PI * 2);
            context.fillStyle = hexAlpha(color, fade);
            context.shadowColor = color;
            context.shadowBlur = 12;
            context.fill();
            context.shadowBlur = 0;
          }
        }
      });

      context.beginPath();
      context.arc(width / 2, height / 2, radius + 9, 0, Math.PI * 2);
      context.strokeStyle = "rgba(96,146,255,.1)";
      context.lineWidth = 1;
      context.stroke();
    };

    let raf = 0;
    let last = performance.now();
    const loop = (time: number) => {
      const dt = Math.min(64, time - last);
      last = time;
      if (visibleRef.current && !reduced) rotation += dt * 0.0038;
      draw(time);
      raf = window.requestAnimationFrame(loop);
    };
    raf = window.requestAnimationFrame(loop);
    return () => {
      window.cancelAnimationFrame(raf);
      visibility.disconnect();
      resizer.disconnect();
    };
  }, []);

  return (
    <section className="threatmap-section reveal" aria-labelledby="threatmap-heading">
      <div className="threatmap-board" ref={boardRef}>
        <div className="threatmap-head">
          <h2 id="threatmap-heading">Global threat visualization</h2>
          <span className="threatmap-tag">Illustrative preview</span>
          <span className="threatmap-live"><i /> Live feed</span>
        </div>
        <div className="threatmap-stats">
          <div><b>{detected.toLocaleString("en-IN")}</b><small>Threat events detected</small></div>
          <div><b>{threatCities.length}</b><small>Monitored regions</small></div>
          <div><b>{threatTypes.length}</b><small>Attack vectors tracked</small></div>
          <div><b>24/7</b><small>Continuous monitoring</small></div>
        </div>
        <div className="threatmap-grid">
          <div className="threatmap-canvas-wrap">
            <canvas ref={canvasRef} role="img" aria-label="Animated globe visualizing simulated live cyber threats moving between world cities" />
          </div>
          <aside className="threatmap-feed" aria-live="polite">
            <div className="feed-title"><Icon name="radar" /> Live threat feed</div>
            {events.length === 0 && <p className="feed-empty">Listening for simulated threat activity…</p>}
            {events.slice(0, 5).map((event, index) => {
              const kind = threatTypes[event.kind];
              const from = threatCities[event.from];
              const to = threatCities[event.to];
              return (
                <div className={`feed-item ${index === 0 ? "feed-new" : ""}`} key={event.id}>
                  <i style={{ background: kind.color, boxShadow: `0 0 10px ${kind.color}` }} />
                  <div>
                    <b style={{ color: kind.color }}>{kind.type}</b>
                    <span>{from.name}, {from.country} → {to.name}, {to.country}</span>
                  </div>
                  <small>{Math.max(1, Math.round((performance.now() - event.born) / 1000))}s ago</small>
                </div>
              );
            })}
            <p className="threatmap-note">
              Illustrative simulation inspired by public threat maps such as Fortinet's Threat Map. No live monitoring or real security data is shown.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

const partners = [
  { name: "MSRIT", image: "/assets/partner-ramaiah.png", url: "https://www.msrit.edu/" },
  { name: "IIBS", image: "/assets/partner-iibs.png", url: "https://www.iibs.edu.in/" },
  { name: "Mount Carmel", image: "/assets/partner-mount-carmel.png", url: "https://mccblr.edu.in/" },
  { name: "Presidency", image: "/assets/partner-presidency.png", url: "https://presidencycollege.ac.in/" },
  { name: "St Pauls", image: "/assets/partner-st-pauls.png", url: "https://www.stpaulscollege.edu.in/" },
  { name: "Brindavan", image: "/assets/partner-brindavan.png", url: "https://www.brindavancollege.com/" },
  { name: "RIBS", image: "/assets/partner-ribs.png", url: "https://www.ribs.edu.in/" },
  { name: "KGI", image: "/assets/partner-kgi.png", url: "https://kgi.edu.in/" },
  { name: "Sapthagiri", image: "/assets/partner-sapthagiri.png", url: "https://sapthagiri.edu.in/" },
  { name: "Yenepoya", image: "/assets/partner-yenepoya.png", url: "https://www.yenepoya.edu.in/" },
  { name: "MSRCASC", image: "/assets/partner-msrcasc.png", url: "https://www.msrcasc.edu.in/" },
  { name: "Dhanwantri", image: "/assets/partner-dhanwantari.png", url: "https://dhanwantarinursingcollege.com/" },
];

function Stars({ value, size = 15 }: { value: number; size?: number }) {
  return (
    <span className="stars" style={{ fontSize: `${size}px` }} aria-label={`${value} out of 5 stars`} role="img">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={`star ${value >= star - 0.25 ? "star-on" : "star-off"}`}>
          <Icon name="star" />
        </span>
      ))}
    </span>
  );
}

function ReviewForm({ onSubmit }: { onSubmit: (review: Omit<Review, "date" | "role">) => void }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [hovered, setHovered] = useState(0);
  const [text, setText] = useState("");

  const canSubmit = name.trim().length > 1 && text.trim().length > 3;

  return (
    <form
      className="review-form"
      onSubmit={(event) => {
        event.preventDefault();
        if (!canSubmit) return;
        onSubmit({ name: name.trim(), rating, text: text.trim() });
        setName("");
        setText("");
        setRating(5);
      }}
    >
      <small>Your review</small>
      <div className="review-form-row">
        <div className="star-picker" role="radiogroup" aria-label="Your rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              role="radio"
              aria-checked={rating === star}
              aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
              className={star <= (hovered || rating) ? "picked" : ""}
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(0)}
              onClick={() => setRating(star)}
            >
              <Icon name="star" />
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          maxLength={60}
          onChange={(event) => setName(event.target.value)}
          aria-label="Your name"
        />
      </div>
      <textarea
        placeholder="Share what you learned, what you liked, and who this course is for…"
        value={text}
        rows={3}
        maxLength={600}
        onChange={(event) => setText(event.target.value)}
        aria-label="Your comment"
      />
      <button className="button button-primary review-submit" type="submit" disabled={!canSubmit}>
        Post rating <Icon name="arrow" />
      </button>
    </form>
  );
}

function CourseDetail({
  course,
  reviews,
  onBack,
  onAddReview,
}: {
  course: (typeof courses)[number];
  reviews: Review[];
  onBack: () => void;
  onAddReview: (review: Review) => void;
}) {
  const average = reviews.length ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length : 0;
  const distribution = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: reviews.filter((review) => review.rating === stars).length,
  }));

  return (
    <article className="course-detail">
      <button className="detail-back" type="button" onClick={onBack}>
        <Icon name="arrow" /> Back
      </button>

      <header className="detail-hero">
        <img className="detail-logo" src={course.logo} alt={`${course.code} certification logo`} />
        <div>
          <span className="section-kicker">{course.code}</span>
          <h1>{course.title}</h1>
          <p className="detail-lead">{course.description}</p>
          <div className="detail-meta">
            <Stars value={average} />
            <span>{average.toFixed(1)} ({reviews.length} ratings)</span>
            <span><Icon name="users" /> {course.level}</span>
            <span><Icon name="clock" /> {course.duration}</span>
          </div>
          <div className="detail-cta-row">
            <strong className="detail-price">
              {course.price}
              {course.originalPrice && <del>{course.originalPrice}</del>}
            </strong>
            <a className="button button-primary" href={course.url} target="_blank" rel="noreferrer">
              Official course page <Icon name="arrow" />
            </a>
          </div>
        </div>
      </header>

      <section className="detail-section">
        <div className="detail-columns">
          <div>
            <h2><Icon name="award" /> Skills you'll gain</h2>
            <div className="detail-chips">
              {course.skills.map((skill) => <span key={skill}><Icon name="check" /> {skill}</span>)}
            </div>
          </div>
          <div>
            <h2><Icon name="layers" /> Tools you'll learn</h2>
            <div className="detail-chips tools">
              {course.tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="detail-section" aria-labelledby="reviews-heading">
        <h2 id="reviews-heading" className="reviews-heading">Ratings &amp; comments</h2>
        <div className="rating-layout">
          <aside className="rating-summary">
            <b>{average.toFixed(1)}</b>
            <Stars value={average} size={19} />
            <span>{reviews.length} ratings</span>
            <div className="rating-bars">
              {distribution.map(({ stars, count }) => (
                <div className="rating-bar" key={stars}>
                  <span>{stars} <Icon name="star" /></span>
                  <i><em style={{ width: `${reviews.length ? (count / reviews.length) * 100 : 0}%` }} /></i>
                  <small>{count}</small>
                </div>
              ))}
            </div>
          </aside>

          <div className="review-thread">
            <ReviewForm
              onSubmit={(review) =>
                onAddReview({ ...review, role: "Verified learner", date: "Just now" })
              }
            />
            <ul className="review-list">
              {reviews.map((review, index) => (
                <li className="review-item" key={`${review.name}-${index}`}>
                  <div className="review-head">
                    <span className="review-avatar">{review.name.trim().charAt(0).toUpperCase()}</span>
                    <div>
                      <b>{review.name}</b>
                      <small>{review.role} · {review.date}</small>
                    </div>
                    <Stars value={review.rating} />
                  </div>
                  <p>{review.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="detail-footer-nav">
        <button className="detail-back" type="button" onClick={onBack}>
          <Icon name="arrow" /> Back
        </button>
      </div>
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [academyOpen, setAcademyOpen] = useState(false);
  const [recommendedCourse, setRecommendedCourse] = useState<string | null>(null);
  const [expandedFeature, setExpandedFeature] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [reviewsByCourse, setReviewsByCourse] = useState<Record<string, Review[]>>(() => seedReviews);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const updateScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--scroll-progress", `${height > 0 ? (window.scrollY / height) * 100 : 0}%`);
      setScrolled(window.scrollY > 20);
    };
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => {
      if (prefersReducedMotion) {
        element.classList.add("is-visible");
      } else {
        observer.observe(element);
      }
    });
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateScroll);
      observer.disconnect();
    };
  }, []);

  const choosePath = (code: string) => {
    setRecommendedCourse(code);
    window.setTimeout(() => document.querySelector(`[data-course="${code}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" }), 180);
  };

  const selectedCourseData = courses.find((course) => course.code === selectedCourse);

  const openCourse = (code: string) => {
    setSelectedCourse(code);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeCourse = () => {
    setSelectedCourse(null);
    window.setTimeout(() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" }), 80);
  };

  const addReview = (code: string, review: Review) => {
    setReviewsByCourse((current) => ({ ...current, [code]: [review, ...(current[code] ?? [])] }));
  };

  return (
    <div className="site-shell">
      <div className="scroll-progress" />
      <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
        <nav className="nav-wrap" aria-label="Main navigation">
          <Logo />
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#why">Why ZecurX</a>
            <div className="nav-dropdown" onMouseEnter={() => setAcademyOpen(true)} onMouseLeave={() => setAcademyOpen(false)}>
              <button onClick={() => setAcademyOpen(!academyOpen)} aria-expanded={academyOpen}>
                Certification Courses <Icon name="chevron" />
              </button>
              <div className={`academy-menu ${academyOpen ? "academy-open" : ""}`}>
                <a href="#courses" onClick={() => setMenuOpen(false)}>
                  <span className="menu-icon"><Icon name="award" /></span>
                  <span><b>Certified Courses</b><small>Career-ready certification programs</small></span>
                </a>
                <a href="#colloquium" onClick={() => setMenuOpen(false)}>
                  <span className="menu-icon"><Icon name="users" /></span>
                  <span><b>Colloquium</b><small>Expert talks, ideas, and discussions</small></span>
                </a>
              </div>
            </div>
            <a href="#courses">Programs</a>
            <a href="#resources">Resources</a>
          </div>
          <a className="nav-cta" href="#pathfinder">Find your course <Icon name="arrow" /></a>
        </nav>
      </header>

      <main>
        {selectedCourse && selectedCourseData ? (
          <CourseDetail
            course={selectedCourseData}
            reviews={reviewsByCourse[selectedCourseData.code] ?? []}
            onBack={closeCourse}
            onAddReview={(review) => addReview(selectedCourseData.code, review)}
          />
        ) : (
        <>
        <section className="hero">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="hero-inner">
            <div className="hero-copy hero-enter">
              <div className="eyebrow"><span /> ZecurX Certifications</div>
              <h1>
                <span className="hero-line">Your Cyber Era</span>
                <em className="hero-line">Starts Here.</em>
              </h1>
              <p className="hero-lead">Learn to identify threats, protect digital assets, and think one step ahead.</p>
              <p className="hero-support">Build practical skills through expert-led learning, live attack labs, and certifications that carry weight beyond the classroom.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#courses">Explore programs <Icon name="arrow" /></a>
                <a className="button button-secondary" href="#pathfinder">Find your course</a>
              </div>
              <div className="learner-note">
                <span className="avatar-stack"><i>LAB</i><i>AI</i><i>3D</i></span>
                <span><b>Practice-first learning</b><small>built for emerging security professionals</small></span>
              </div>
            </div>
            <div className="hero-visual visual-enter"><HeroVisual /></div>
          </div>

          <div className="proof-grid" id="why">
            {proofPoints.map((item, index) => (
              <article className="proof-item reveal" key={item.title} style={{ transitionDelay: `${index * 80}ms` }}>
                <span className="proof-icon"><Icon name={item.icon} /></span>
                <span><h2>{item.title}</h2><p>{item.text}</p></span>
              </article>
            ))}
          </div>
        </section>

        <section className="trainer-section" aria-labelledby="trainer-heading">
          <div className="trainer-intro reveal">
            <span className="section-kicker">Learn from experience</span>
            <h2 id="trainer-heading">Meet your trainer.</h2>
            <p>Expert guidance, practical methodology, and the perspective needed to think like a security professional.</p>
          </div>
          <article className="trainer-card reveal">
            <div className="trainer-circuit circuit-one" />
            <div className="trainer-circuit circuit-two" />
            <div className="trainer-photo-wrap">
              <img
                src="/assets/trainer-profile.png"
                alt="Harsh Priyam, ZecurX Certifications and Academy cybersecurity trainer"
                className="trainer-photo"
              />
              <span className="trainer-verified"><Icon name="shield" /> Verified trainer</span>
            </div>
            <div className="trainer-details">
              <div className="trainer-label"><span /> ZecurX Certifications and Academy Faculty</div>
              <h3>Harsh Priyam</h3>
              <p className="trainer-designation">Certified Ethical Hacker &amp; Certified Penetration Tester</p>
              <div className="trainer-rule" />
              <p className="trainer-summary">
                Learn cybersecurity through a practitioner-led approach focused on ethical methodology,
                real attack scenarios, and the disciplined thinking required to protect modern systems.
              </p>
              <div className="trainer-expertise" aria-label="Training expertise">
                <span><Icon name="terminal" /> Ethical Hacking</span>
                <span><Icon name="shield" /> Penetration Testing</span>
                <span><Icon name="code" /> Live Lab Mentorship</span>
              </div>
              <blockquote>
                “The strongest security professionals don’t just know the tools—they understand how an attacker thinks.”
              </blockquote>
            </div>
          </article>
        </section>

        <section className="pathfinder reveal" id="pathfinder">
          <div>
            <span className="section-kicker">Not sure where to start?</span>
            <h2>Find the program that fits your ambition.</h2>
          </div>
          <div className="path-options">
            <button className={recommendedCourse === "zxCPEH" ? "selected-path" : ""} onClick={() => choosePath("zxCPEH")}><span>01</span><b>I’m starting in security</b><small>Build a practical foundation</small><Icon name="arrow" /></button>
            <button className={recommendedCourse === "zxCPPT" ? "selected-path" : ""} onClick={() => choosePath("zxCPPT")}><span>02</span><b>I want to go offensive</b><small>Master ethical hacking</small><Icon name="arrow" /></button>
            <button className={recommendedCourse === "zxGAIP" ? "selected-path" : ""} onClick={() => choosePath("zxGAIP")}><span>03</span><b>I’m exploring AI security</b><small>Work at the new frontier</small><Icon name="arrow" /></button>
          </div>
        </section>

        <GlobalThreatMap />


        <section className="courses-section" id="courses">
          <div className="section-heading reveal">
            <div>
              <span className="section-kicker">Certified courses</span>
              <h2>Choose your certification path.</h2>
            </div>
            <p>Focused programs designed around the skills security teams actually use—guided by practitioners, proven in live environments.</p>
          </div>
          <div className="course-grid">
            {courses.map((course, index) => (
              <div
                className={`course-card reveal course-card-click ${recommendedCourse === course.code ? "recommended" : ""}`}
                key={course.code}
                data-course={course.code}
                role="button"
                tabIndex={0}
                aria-label={`View ${course.title} course details, ratings, and comments`}
                style={{ transitionDelay: `${index * 90}ms` }}
                onClick={() => openCourse(course.code)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openCourse(course.code);
                  }
                }}
                onMouseMove={(event) => {
                  const bounds = event.currentTarget.getBoundingClientRect();
                  event.currentTarget.style.setProperty("--tilt-x", `${((event.clientY - bounds.top) / bounds.height - 0.5) * -3}deg`);
                  event.currentTarget.style.setProperty("--tilt-y", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 3}deg`);
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.setProperty("--tilt-x", "0deg");
                  event.currentTarget.style.setProperty("--tilt-y", "0deg");
                }}
              >
                <div className="course-top">
                  <img className="course-logo" src={course.logo} alt={`${course.code} certification logo`} />
                  {recommendedCourse === course.code ? <span className="match-badge"><Icon name="check" /> Your match</span> : index === 1 && <span className="popular">Most popular</span>}
                </div>
                <span className="course-code">{course.code}</span>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-price">
                  <strong>{course.price}</strong>
                  {course.originalPrice && <del>{course.originalPrice}</del>}
                </div>
                {(() => {
                  const list = reviewsByCourse[course.code] ?? [];
                  const avg = list.length ? list.reduce((s, r) => s + r.rating, 0) / list.length : 0;
                  return (
                    <div className="card-rating">
                      <b>{avg.toFixed(1)}</b>
                      <Stars value={avg} />
                      <small>({list.length} ratings)</small>
                    </div>
                  );
                })()}
                <div className="course-meta">
                  <span><Icon name="clock" /> {course.duration}</span>
                  <span><Icon name="users" /> {course.level}</span>
                </div>
                <div className="course-block">
                  <small>Skills you’ll gain</small>
                  <div className="skill-list">
                    {course.skills.map((skill) => <span key={skill}><Icon name="check" /> {skill}</span>)}
                  </div>
                </div>
                <div className="course-block">
                  <small>Tools you’ll learn</small>
                  <div className="tool-list">
                    {course.tools.map((tool) => <span key={tool}>{tool}</span>)}
                  </div>
                </div>
                <span className="course-card-link">
                  View course <Icon name="arrow" />
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="apart-section" id="colloquium">
          <div className="section-heading reveal">
            <div>
              <span className="section-kicker">Why ZecurX</span>
              <h2>What sets us apart.</h2>
            </div>
            <p>We don’t just teach theory. Every program is built around practical, job-ready skills.</p>
          </div>
          <div className="apart-experience">
            <div className="apart-selector" aria-label="ZecurX platform capabilities">
              {differentiators.map((item, index) => (
                <button
                  className={`feature-tab ${expandedFeature === index ? "feature-selected" : ""}`}
                  type="button"
                  aria-pressed={expandedFeature === index}
                  key={item.title}
                  onClick={() => setExpandedFeature(index)}
                >
                  <span className="feature-icon"><Icon name={item.icon} /></span>
                  <span className="feature-tab-copy">
                    <small>{item.status}</small>
                    <strong>{item.title}</strong>
                  </span>
                  <Icon name="chevron" className="feature-tab-arrow" />
                </button>
              ))}
            </div>
            <aside className="feature-panel" aria-live="polite" aria-atomic="true">
              <div className="feature-panel-copy" key={expandedFeature}>
                <span className="feature-panel-icon"><Icon name={differentiators[expandedFeature].icon} /></span>
                <span className="feature-status">{differentiators[expandedFeature].status}</span>
                <h3>{differentiators[expandedFeature].title}</h3>
                <p>{differentiators[expandedFeature].text}</p>
                <span className="detail-label">How it is intended to work</span>
                <ul>
                  {differentiators[expandedFeature].details.map((detail) => (
                    <li key={detail}><Icon name="check" />{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="feature-mini-visual" aria-hidden="true">
                <span className="mini-shield"><Icon name="shield" /></span>
                <i /><i /><i />
              </div>
            </aside>
          </div>
        </section>

        <section className="team-cta reveal">
          <div className="team-pattern" />
          <span className="section-kicker">ZecurX for teams</span>
          <h2>Turn your team into your strongest <em>security layer.</em></h2>
          <p>Custom corporate training with bulk pricing, dedicated support, and flexible scheduling—built around your organization’s real risks.</p>
          <div>
            <a className="button button-primary" href="https://www.zecurx.com/contact" target="_blank" rel="noreferrer">Build a team program <Icon name="arrow" /></a>
            <a className="button button-secondary" href="https://www.zecurx.com/contact" target="_blank" rel="noreferrer">Talk to our certifications team</a>
          </div>
        </section>

        <section className="partners-section">
          <div className="partners-title reveal">
            <span>Trusted by</span> partners who invest in future-ready talent
          </div>
          <div className="partner-marquee" aria-label="Trusted partners">
            <div className="partner-track">
              {[...partners, ...partners].map((partner, index) => (
                <a
                  className="partner-card"
                  href={partner.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${partner.name} official website`}
                  key={`${partner.name}-${index}`}
                >
                  <img src={partner.image} alt={partner.name} />
                  <span>{partner.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
        </>
        )}
      </main>

      <footer id="resources">
        <Logo />
        <p>Practical education for the people protecting what matters.</p>
        <span>© 2026 ZecurX Certifications and Academy</span>
      </footer>
    </div>
  );
}
