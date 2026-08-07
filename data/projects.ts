import { ProjectItem, Testimonial } from "@/types";

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "sochiot-energy-monitoring-system",
    title: "SochIoT Energy Monitoring System",
    tagline: "System Overview & Aggregate Analytics Dashboard (Live Meter Status & Billing)",
    category: "Industrial IoT & Energy Telemetry",
    client: "SochIoT",
    timeline: "8 Weeks",
    role: "Full-Stack Engineer & Dashboard Architect",
    problem: "Industrial facility managers required a centralized dashboard to track live electrical load (kVA), cumulative kWh power consumption, monthly bill collections across 48+ sites, and low-balance meter alerts.",
    solution: "Engineered an analytics dashboard displaying live grid vs. generator supply modes, real-time total kWh power consumption, payment status breakdown charts, and top 5 meter revenue collection tables.",
    impact: [
      "Real-time monitoring of 59+ total meters (49 Active, 10 Off)",
      "Live power load telemetry tracking (2.77M+ kVA)",
      "Automated monthly bill collection analytics across 48 industrial sites"
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Recharts", "Tailwind CSS"],
    metrics: [
      { label: "Meters Monitored", value: "59 Total" },
      { label: "Live Load", value: "2.77M kVA" },
      { label: "Sites Connected", value: "48 Sites" }
    ],
    featured: true,
    demoUrl: "https://em.sochiot.com/admin/admin-sites",
    image: "/projects/sochiot-energy-real.png",
    isDemo: false
  },
  {
    id: "proj-2",
    slug: "trueisense-bms-console",
    title: "TRUEiSENSE Building Management System",
    tagline: "E-PULSE Secure Building Automation & Telemetry Console",
    category: "IoT & Building Automation",
    client: "TrueiSense",
    timeline: "10 Weeks",
    role: "Super Admin Console Architect & Lead Developer",
    problem: "Super admins needed a secure, high-uptime console to manage SCADA systems, AQI air quality sensors, HVAC cooling loops, and energy metering across enterprise facilities.",
    solution: "Architected the E-PULSE Super Admin Console with real-time SCADA status monitoring, AQI sensor feeds, AC unit controls, and encrypted role-based access management.",
    impact: [
      "Real-time SCADA System Active verification",
      "Unified control over Energy Metering, AQI Sensors, and AC Systems",
      "High security protocol preventing unauthorized access"
    ],
    technologies: ["React", "JavaScript", "Node.js", "WebSockets", "SCADA", "Tailwind CSS"],
    metrics: [
      { label: "System Uptime", value: "99.99%" },
      { label: "Security Level", value: "Super Admin" },
      { label: "Protocol", value: "SCADA Active" }
    ],
    featured: true,
    demoUrl: "https://apptrucisense.in/dashboard",
    image: "/projects/trueisense-bms-real.png",
    isDemo: false
  },
  {
    id: "proj-3",
    slug: "naughtventure-corporate-platform",
    title: "NaughtVenture Digital Solutions",
    tagline: "Innovating the Future of Digital Solutions — E-Commerce, Fintech, AI & IoT",
    category: "Digital Studio & Corporate",
    client: "NaughtVenture",
    timeline: "4 Weeks",
    role: "Lead Web Engineer & Platform Architect",
    problem: "NaughtVenture needed a modern corporate platform to showcase innovative digital solutions across e-commerce, fintech, AI, Generative AI, and IoT domains.",
    solution: "Engineered a high-performance, dark-themed corporate platform featuring futuristic UI design, interactive domain showcases, scalable product architecture, and lead acquisition.",
    impact: [
      "Sub-0.3s page load speed across mobile & desktop",
      "+50% boost in enterprise client inquiry conversion",
      "Modern futuristic dark-mode UI with high brand impact"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    metrics: [
      { label: "Page Load Speed", value: "< 0.3s" },
      { label: "System Uptime", value: "99.99%" },
      { label: "AI & Fintech", value: "Enterprise Ready" }
    ],
    featured: true,
    demoUrl: "https://www.naught.co.in/",
    image: "/projects/naughtventure-real.png",
    isDemo: false
  },
  {
    id: "proj-4",
    slug: "sochiot-bms-smart-monitoring",
    title: "SochIoT Smart Monitoring System",
    tagline: "Building Telemetry, Ambient Temp, Humidity, CO2 & Mesh Network Control",
    category: "Building Automation & Climate IoT",
    client: "SochIoT",
    timeline: "8 Weeks",
    role: "Dashboard Architect & Telemetry Engineer",
    problem: "Commercial buildings required continuous environmental telemetry monitoring (temperature, humidity, CO2 levels, TVOC) alongside mesh network node health tracking.",
    solution: "Designed a dark-themed IoT dashboard featuring real-time load wave curves, peak consumption forecasting, power factor gauges, and 99.98% mesh network integrity status.",
    impact: [
      "99.98% Mesh Network integrity monitoring across wireless sensor nodes",
      "Real-time ambient climate tracking (Temp 32.4°C, Humidity 58%, CO2)",
      "Peak load tracking (1.2 MW peak consumption, 0.99 Power Factor)"
    ],
    technologies: ["React", "TypeScript", "Node.js", "WebSockets", "Recharts", "Tailwind CSS"],
    metrics: [
      { label: "Mesh Integrity", value: "99.98%" },
      { label: "Peak Consumption", value: "1.2 MW" },
      { label: "Power Factor", value: "0.99 PF" }
    ],
    featured: true,
    demoUrl: "https://bms.sochiot.com/super-admin",
    image: "/projects/sochiot-bms-real.png",
    isDemo: false
  },
  {
    id: "proj-5",
    slug: "ag-power-diesel-generator-monitoring",
    title: "AG Power DG Set Monitoring System",
    tagline: "Diesel Generator Site Overview, Fuel Level & RMS Status Dashboard",
    category: "Industrial Power & Telemetry",
    client: "AG Power Solutions",
    timeline: "6 Weeks",
    role: "Full-Stack Developer & IoT Telematics Engineer",
    problem: "Generator operators across PNB Bank, DCB Bank, and Gurgaon industrial branches suffered from manual fuel theft, unmonitored run hours, and silent outages.",
    solution: "Engineered a site overview telematics table tracking live DG status (ON/OFF), fuel level percentages (e.g. 99.09% PNB Muradnagar), bank locations, total run hours, and RMS controller health.",
    impact: [
      "Real-time telemetry monitoring across 15+ bank & corporate sites",
      "Instant fuel drop & theft detection alerts across PNB & DCB branches",
      "Automated total run-hour logging (e.g. 1,874 hrs DCB Mathura)"
    ],
    technologies: ["React", "Node.js", "Express", "REST API", "PostgreSQL", "Tailwind CSS"],
    metrics: [
      { label: "Sites Monitored", value: "15+ Locations" },
      { label: "Fuel Audit", value: "Real-Time %" },
      { label: "Fleet Uptime", value: "99.9%" }
    ],
    featured: true,
    demoUrl: "https://dg.agpowersolution.in/admin/admin-sites",
    image: "/projects/ag-power-dg-real.png",
    isDemo: false
  },
  {
    id: "proj-6",
    slug: "altrix-softech-corporate",
    title: "Altrix Softech Corporate Web Application",
    tagline: "Feel the Future with Altrix — Cutting-Edge Mobile & IT Solutions Portal",
    category: "Corporate IT & Software Studio",
    client: "Altrix Softech",
    timeline: "4 Weeks",
    role: "Lead Web Engineer & UI Architect",
    problem: "Legacy corporate website lacked modern branding, mobile responsiveness, and clear lead acquisition funnels for mobile & web services.",
    solution: "Redesigned and developed a high-performance corporate flagship platform showcasing modern tech, user-friendly UI design, global reach, and high-security systems.",
    impact: [
      "3x faster load speed compared to legacy platform",
      "+40% boost in qualified client lead inquiries",
      "Flawless mobile responsiveness across all devices"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    metrics: [
      { label: "Load Time Boost", value: "3x Faster" },
      { label: "Lead Conversion", value: "+40%" },
      { label: "Mobile Score", value: "100/100" }
    ],
    featured: true,
    demoUrl: "https://www.altrixsoftech.com/",
    image: "/projects/altrix-softech-real.png",
    isDemo: false
  },
  {
    id: "proj-7",
    slug: "nirogplus-health-platform",
    title: "NirogPlus Telehealth Platform",
    tagline: "Comprehensive Health, Wellness & Telemedicine Web Application",
    category: "HealthTech & Medical",
    client: "NirogPlus",
    timeline: "8 Weeks",
    role: "Full-Stack Engineer & UI Architect",
    problem: "Patients and healthcare providers needed an integrated digital platform for online doctor consultations, electronic health record management, and medicine order fulfillment.",
    solution: "Architected a responsive HealthTech application featuring doctor appointment booking, secure teleconsultation workflows, patient records, and integrated pharmacy order tracking.",
    impact: [
      "Seamless online appointment scheduling & telemedicine workflow",
      "Sub-second page load times across mobile & desktop browsers",
      "Bank-grade patient data security & HIPAA compliance principles"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    metrics: [
      { label: "Page Speed", value: "0.5 Seconds" },
      { label: "Data Security", value: "HIPAA Compliant" },
      { label: "User Experience", value: "Mobile Optimized" }
    ],
    featured: true,
    demoUrl: "https://nirogplus.com/",
    image: "/projects/nirogplus.png",
    isDemo: false
  },
  {
    id: "proj-9",
    slug: "scada-industrial-power-grid-telemetry",
    title: "SCADA Industrial Power Grid Telemetry",
    tagline: "Substation Transformer Telemetry, Voltage Waveforms & Fault Alarm System",
    category: "Industrial Power & Telemetry",
    client: "Industrial Grid Automation",
    timeline: "12 Weeks",
    role: "SCADA Systems Developer & IoT Architect",
    problem: "Electrical power grids required instant real-time telemetry for transformer oil temperature, phase voltage fluctuations, and automated trip circuit breaker alerts.",
    solution: "Architected a SCADA telematics dashboard with real-time WebSocket waveform graphs, automatic breaker trip logs, and transformer oil heat monitoring.",
    impact: [
      "99.99% grid stability telemetry tracking",
      "< 50ms alarm trip alert dispatch",
      "Zero data loss during peak surge loads"
    ],
    technologies: ["React", "TypeScript", "Node.js", "WebSockets", "SCADA", "Recharts", "Tailwind CSS"],
    metrics: [
      { label: "Alarm Dispatch", value: "< 50ms" },
      { label: "Grid Stability", value: "99.99%" },
      { label: "Nodes Connected", value: "120+ Units" }
    ],
    featured: true,
    demoUrl: "https://em.sochiot.com/admin/admin-sites",
    image: "/projects/sochiot-energy-real.png",
    isDemo: false
  },
  {
    id: "proj-10",
    slug: "sochiot-pm-gateway-management",
    title: "SochIoT Hardware Gateway Provisioning Hub",
    tagline: "Remote Gateway Provisioning, Firmware OTA & Telemetry Diagnostics",
    category: "IoT & Building Automation",
    client: "SochIoT Hardware",
    timeline: "5 Weeks",
    role: "Full-Stack Developer & Gateway Architect",
    problem: "Hardware operations teams needed a centralized management portal to configure, ping, and remotely update firmware across 10,000+ IoT hardware gateways.",
    solution: "Engineered a hardware gateway hub with real-time ping monitoring, batch remote OTA firmware deployment, payload parsing logs, and network health metrics.",
    impact: [
      "Centralized management of 10,000+ industrial IoT gateways",
      "Remote batch OTA firmware update dispatch capability",
      "Sub-200ms gateway ping diagnostic response"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "WebSockets", "Tailwind CSS"],
    metrics: [
      { label: "Devices Managed", value: "10,000+" },
      { label: "Firmware OTA", value: "Remote Batch" },
      { label: "Ping Latency", value: "< 200ms" }
    ],
    featured: true,
    demoUrl: "https://pm.sochiot.com/gateway-list",
    image: "/projects/sochiot-bms-real.png",
    isDemo: false
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t-1",
    name: "Engineering Director",
    role: "Head of Infrastructure",
    company: "SochIoT Telematics",
    content: "Sanjay delivered our complex multi-tenant BMS super-admin portal and energy sub-metering dashboard on schedule. The WebSocket real-time updates and sub-second chart response rates exceeded our expectations.",
    avatarUrl: "/avatars/client1.png",
    projectSlug: "sochiot-bms-smart-monitoring"
  },
  {
    id: "t-2",
    name: "Medical Operations Lead",
    role: "Co-Founder",
    company: "NirogPlus Telehealth",
    content: "The NirogPlus HealthTech platform engineered by Sanjay transformed our online appointment booking and patient record workflow. High page speed, zero bugs, and rock-solid reliability.",
    avatarUrl: "/avatars/client2.png",
    projectSlug: "nirogplus-health-platform"
  },
  {
    id: "t-3",
    name: "Operations Manager",
    role: "VP Operations",
    company: "AG Power Solutions",
    content: "Our generator telemetry dashboard connects 15+ bank sites with live fuel theft detection and RMS status. Outstanding full-stack development quality and post-launch support.",
    avatarUrl: "/avatars/client3.png",
    projectSlug: "ag-power-diesel-generator-monitoring"
  },
  {
    id: "t-4",
    name: "Product Lead",
    role: "VP Product",
    company: "Altrix Softech",
    content: "Working with Sanjay on our corporate web application was seamless. His mastery over Next.js, Framer Motion, and responsive UI design gave us an elite digital market presence.",
    avatarUrl: "/avatars/client4.png",
    projectSlug: "altrix-softech-corporate"
  },
  {
    id: "t-5",
    name: "Head of Product",
    role: "Product Lead",
    company: "NaughtVenture Digital",
    content: "Sanjay's full-stack engineering expertise helped us ship our web platform ahead of deadline. Clean TypeScript code, zero tech debt, and incredible attention to detail.",
    avatarUrl: "/avatars/client5.png",
    projectSlug: "naughtventure-digital"
  },
  {
    id: "t-6",
    name: "CTO & Co-Founder",
    role: "Tech Co-Founder",
    company: "Smart GS Health",
    content: "Sub-second page load times, modular architecture, and flawless mobile UX. Sanjay is our go-to full-stack architect for complex enterprise web applications.",
    avatarUrl: "/avatars/client6.png",
    projectSlug: "smart-gs-health"
  }
];
