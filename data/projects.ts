import { ProjectItem } from "@/types";

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "nirogplus-health-platform",
    title: "NirogPlus Telehealth Platform",
    tagline: "Comprehensive Health, Wellness & Telemedicine Web Application",
    category: "HealthTech & Telemedicine",
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
    isDemo: false
  },
  {
    id: "proj-2",
    slug: "sochiot-bms-super-admin",
    title: "SochIoT BMS Control Center",
    tagline: "Multi-Tenant Building Management & HVAC Telemetry Dashboard",
    category: "IoT & Building Automation",
    client: "SochIoT",
    timeline: "10 Weeks",
    role: "Dashboard Architect & Full-Stack Engineer",
    problem: "Facility managers needed a real-time centralized dashboard to monitor HVAC, lighting, energy consumption, and access control across multiple physical building locations.",
    solution: "Engineered a real-time WebSocket-powered super-admin portal with multi-site switching, live sensor status grids, granular permission controls, and automated alert dispatch.",
    impact: [
      "Sub-150ms real-time sensor metric updates via WebSockets",
      "Multi-tenant site switching for facility administrators",
      "Drastic reduction in energy waste across commercial properties"
    ],
    technologies: ["React", "TypeScript", "Node.js", "WebSockets", "PostgreSQL", "Tailwind CSS", "Recharts"],
    metrics: [
      { label: "Real-time Latency", value: "<150ms" },
      { label: "Uptime SLA", value: "99.9%" },
      { label: "Architecture", value: "Multi-Tenant" }
    ],
    featured: true,
    demoUrl: "https://bms.sochiot.com/super-admin",
    isDemo: false
  },
  {
    id: "proj-3",
    slug: "sochiot-energy-metering-admin",
    title: "SochIoT Energy Metering Portal",
    tagline: "Industrial Sub-Metering & Power Consumption Analytics System",
    category: "Industrial IoT & Energy Telemetry",
    client: "SochIoT",
    timeline: "6 Weeks",
    role: "Frontend & Data Visualization Engineer",
    problem: "Industrial plants required sub-meter level power tracking, peak-load anomaly detection, and automated utility audit reports to reduce electricity expenses.",
    solution: "Built an interactive energy metering dashboard with live power consumption charts, site-by-site sub-meter filtering, historical CSV data export, and threshold alerts.",
    impact: [
      "Real-time power consumption breakdown per site & sub-meter",
      "18x query speedup for high-frequency electrical telemetry logs",
      "Instant anomaly alerts preventing costly peak-demand surcharges"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Recharts", "TanStack Table", "Tailwind CSS"],
    metrics: [
      { label: "Query Speed", value: "18x Faster" },
      { label: "Data Granularity", value: "Sub-Meter Level" },
      { label: "Chart Performance", value: "60 FPS" }
    ],
    featured: true,
    demoUrl: "https://em.sochiot.com/admin/admin-sites",
    isDemo: false
  },
  {
    id: "proj-4",
    slug: "ag-power-diesel-generator-monitoring",
    title: "AG Power DG Monitoring Dashboard",
    tagline: "Diesel Generator Telemetry, Fuel Monitoring & Fleet System",
    category: "Industrial Power & Telemetry",
    client: "AG Power Solutions",
    timeline: "6 Weeks",
    role: "Full-Stack Developer & IoT Dashboard Specialist",
    problem: "Industrial generator operators struggled with manual fuel level checks, unmonitored engine hours, and delayed breakdown emergency alerts.",
    solution: "Developed a remote DG monitoring portal tracking live fuel levels, battery voltage, engine RPM, total run hours, and instant fault alerts.",
    impact: [
      "Automated fuel theft & sudden drop detection alerts",
      "Zero unplanned outages via predictive maintenance tracking",
      "24/7 remote fleet monitoring across multiple industrial sites"
    ],
    technologies: ["React", "Node.js", "Express", "REST API", "PostgreSQL", "Tailwind CSS"],
    metrics: [
      { label: "Fleet Uptime", value: "99.9%" },
      { label: "Fuel Audit", value: "100% Automated" },
      { label: "Response SLA", value: "Real-time" }
    ],
    featured: true,
    demoUrl: "https://dg.agpowersolution.in/admin/admin-sites",
    isDemo: false
  },
  {
    id: "proj-5",
    slug: "sochiot-pm-gateway-management",
    title: "SochIoT Hardware Gateway Hub",
    tagline: "IoT Gateway Provisioning, Firmware OTA & Telemetry Hub",
    category: "IoT Hardware Management",
    client: "SochIoT",
    timeline: "5 Weeks",
    role: "Full-Stack Engineer",
    problem: "Hardware operations teams needed a unified portal to provision, configure, and monitor thousands of IoT hardware gateways deployed across remote industrial locations.",
    solution: "Architected a gateway management console supporting real-time ping status, remote OTA firmware deployment, payload parsing logs, and diagnostic telemetry.",
    impact: [
      "Centralized management of thousands of industrial IoT gateways",
      "Remote OTA firmware update dispatch capability",
      "Sub-200ms gateway ping monitoring"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "WebSockets", "Tailwind CSS"],
    metrics: [
      { label: "Devices Managed", value: "10,000+" },
      { label: "Firmware Deployment", value: "Remote OTA" },
      { label: "Ping Latency", value: "<200ms" }
    ],
    featured: false,
    demoUrl: "https://pm.sochiot.com/gateway-list",
    isDemo: false
  },
  {
    id: "proj-6",
    slug: "naught-digital-agency",
    title: "Naught Digital & Creative Studio",
    tagline: "Modern Brand Flagship & Creative Experience Platform",
    category: "Digital Studio & Brand Flagship",
    client: "Naught Studio",
    timeline: "4 Weeks",
    role: "Frontend Architect & UI Developer",
    problem: "Required a high-converting, visually striking digital flagship website with smooth micro-interactions to showcase branding & digital products.",
    solution: "Engineered a sleek, responsive flagship website with fluid animations, dynamic work showcases, and optimized mobile user experience.",
    impact: [
      "Sub-0.5s page load speed across mobile & desktop",
      "98/100 Google Lighthouse performance rating",
      "Elevated client conversion and brand credibility"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    metrics: [
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Load Speed", value: "0.4 Seconds" },
      { label: "Animations", value: "60 FPS Smooth" }
    ],
    featured: false,
    demoUrl: "https://www.naught.co.in/",
    isDemo: false
  },
  {
    id: "proj-7",
    slug: "altrix-softech-corporate",
    title: "Altrix Softech Corporate Web Application",
    tagline: "Enterprise Software Solutions & Digital Transformation Portal",
    category: "Corporate IT & Software Studio",
    client: "Altrix Softech",
    timeline: "4 Weeks",
    role: "Lead Web Engineer & UI Architect",
    problem: "Legacy corporate website lacked modern branding, mobile responsiveness, and clear lead acquisition funnels.",
    solution: "Redesigned and developed a modern, high-performance corporate platform showcasing IT services, enterprise solutions, case studies, and lead intake.",
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
    featured: false,
    demoUrl: "https://www.altrixsoftech.com/",
    isDemo: false
  }
];
