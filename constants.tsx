import { Bot, Search, BarChart3, MessageSquare, Calendar, CreditCard, Users, Mic, PieChart, Wrench, Brain, ShieldCheck, Code, Layout, Database, Smartphone, GitBranch, Gamepad2, MessageCircle, Briefcase, Stethoscope, Truck, ShoppingBag, Coins, GraduationCap, Car, FileText } from 'lucide-react';
import { Service, PortfolioItem, BlogPost, FaqItem, StatItem } from './types';

// --- ADVANCED ISOMETRIC DIAGRAM GENERATOR ---
const getWorkflowImage = (stepsString: string) => {
  const steps = stepsString.split(/\s*(?:->|>>|>)\s*/); // Split by -> or >> or >
  const width = 800;
  const height = 450;
  
  // Center point
  const centerX = width / 2;
  const centerY = height / 2;

  // Isometric projection helper
  // x, y are grid coordinates. z is height up.
  const toIso = (x: number, y: number, z: number = 0) => ({
    x: centerX + (x - y) * 1.5, // Spread out horizontally
    y: centerY + (x + y) * 0.8 - z // Spread out vertically
  });

  // Shape Generators
  const drawCylinder = (x: number, y: number, color: string, label: string) => {
    const pos = toIso(x, y);
    const w = 45; const h = 18; const d = 35;
    return `
      <g>
        <!-- Bottom Cap -->
        <path d="M${pos.x-w},${pos.y+d} a${w},${h} 0 0,0 ${w*2},0 a${w},${h} 0 0,0 -${w*2},0" fill="${color}" opacity="0.5"/>
        <!-- Body -->
        <path d="M${pos.x-w},${pos.y} v${d} a${w},${h} 0 0,0 ${w*2},0 v-${d}" fill="${color}" fill-opacity="0.8" stroke="#1e3a8a" stroke-width="1.5"/>
        <!-- Top Cap -->
        <path d="M${pos.x-w},${pos.y} a${w},${h} 0 0,0 ${w*2},0 a${w},${h} 0 0,0 -${w*2},0" fill="${color}" stroke="#1e3a8a" stroke-width="1.5"/>
        <!-- Label -->
        <rect x="${pos.x - 50}" y="${pos.y + d + 15}" width="100" height="20" rx="4" fill="white" fill-opacity="0.8"/>
        <text x="${pos.x}" y="${pos.y + d + 29}" font-family="Roboto" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle">${label}</text>
      </g>
    `;
  };

  const drawDiamond = (x: number, y: number, color: string, label: string) => {
    const pos = toIso(x, y);
    const s = 40; // size
    return `
      <g>
        <!-- Shadow -->
        <path d="M${pos.x},${pos.y+40} L${pos.x+s},${pos.y+40+s/2} L${pos.x},${pos.y+40+s} L${pos.x-s},${pos.y+40+s/2} Z" fill="black" opacity="0.1"/>
        <!-- 3D Sides -->
        <path d="M${pos.x-s},${pos.y} L${pos.x},${pos.y+s/2} L${pos.x},${pos.y+s/2+15} L${pos.x-s},${pos.y+15} Z" fill="#1e293b" fill-opacity="0.2"/>
        <path d="M${pos.x+s},${pos.y} L${pos.x},${pos.y+s/2} L${pos.x},${pos.y+s/2+15} L${pos.x+s},${pos.y+15} Z" fill="#0f172a" fill-opacity="0.3"/>
        <!-- Top Face -->
        <path d="M${pos.x},${pos.y-s/2} L${pos.x+s},${pos.y} L${pos.x},${pos.y+s/2} L${pos.x-s},${pos.y} Z" fill="${color}" stroke="#1e3a8a" stroke-width="1.5"/>
        <!-- Label -->
        <rect x="${pos.x - 50}" y="${pos.y + 35}" width="100" height="20" rx="4" fill="white" fill-opacity="0.8"/>
        <text x="${pos.x}" y="${pos.y + 49}" font-family="Roboto" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle">${label}</text>
      </g>
    `;
  };

  const drawBox = (x: number, y: number, color: string, label: string) => {
    const pos = toIso(x, y);
    const s = 35; const h = 20;
    return `
      <g>
        <!-- Shadow -->
        <path d="M${pos.x-s},${pos.y+30} L${pos.x+s},${pos.y+30} L${pos.x+2*s},${pos.y+30-h} L${pos.x},${pos.y+30-h} Z" fill="black" opacity="0.05" transform="translate(0, 10)"/>
        <!-- Left Face -->
        <path d="M${pos.x-s},${pos.y} L${pos.x-s},${pos.y+15} L${pos.x},${pos.y+h+15} L${pos.x},${pos.y+h} Z" fill="#93C5FD" stroke="#2563EB" stroke-width="1.5"/>
        <!-- Right Face -->
        <path d="M${pos.x+s},${pos.y} L${pos.x+s},${pos.y+15} L${pos.x},${pos.y+h+15} L${pos.x},${pos.y+h} Z" fill="#60A5FA" stroke="#2563EB" stroke-width="1.5"/>
        <!-- Top Face -->
        <path d="M${pos.x},${pos.y-h} L${pos.x+s},${pos.y} L${pos.x},${pos.y+h} L${pos.x-s},${pos.y} Z" fill="white" stroke="#2563EB" stroke-width="1.5"/>
        <!-- Label -->
        <rect x="${pos.x - 50}" y="${pos.y - 45}" width="100" height="20" rx="4" fill="white" fill-opacity="0.9" stroke="#e2e8f0" stroke-width="0.5"/>
        <text x="${pos.x}" y="${pos.y - 31}" font-family="Roboto" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle">${label}</text>
      </g>
    `;
  };

  const getShape = (text: string, x: number, y: number) => {
    const t = text.toLowerCase();
    const label = text.trim();
    
    if (t.includes('db') || t.includes('store') || t.includes('crm') || t.includes('ledger') || t.includes('data') || t.includes('warehouse')) {
      return drawCylinder(x, y, '#bfdbfe', label);
    } else if (t.includes('check') || t.includes('verify') || t.includes('risk') || t.includes('decide') || t.includes('scan') || t.includes('nlp') || t.includes('detect')) {
      return drawDiamond(x, y, '#93c5fd', label);
    } else {
      return drawBox(x, y, '#dbeafe', label);
    }
  };

  let elements = '';
  let connections = '';

  // Calculate layout to center perfectly
  const stepCount = steps.length;
  const spacing = 60;
  
  // Create a staggered grid pattern centered around (0,0)
  const coords = steps.map((_, i) => {
    // x increases, y oscillates to create a "flow" chart look
    const xOffset = (i - (stepCount - 1) / 2) * spacing;
    const yOffset = Math.sin(i * 2) * 20; 
    return { x: xOffset, y: yOffset };
  });

  // Draw Connections first so they are behind nodes
  for (let i = 0; i < coords.length - 1; i++) {
    const curr = toIso(coords[i].x, coords[i].y);
    const next = toIso(coords[i+1].x, coords[i+1].y);
    
    // Draw pipe
    connections += `
      <path d="M${curr.x},${curr.y+10} L${next.x},${next.y+10}" 
            fill="none" stroke="#cbd5e1" stroke-width="6" />
      <path d="M${curr.x},${curr.y+10} L${next.x},${next.y+10}" 
            fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="6 4">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
      </path>
    `;
  }

  // Draw Nodes
  coords.forEach((c, i) => {
    elements += getShape(steps[i].replace(/[>]/g, '').trim(), c.x, c.y);
  });

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="60%" fx="50%" fy="50%">
          <stop offset="0%" stop-color="#f8fafc" stop-opacity="1" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <pattern id="grid" width="60" height="34" patternUnits="userSpaceOnUse">
           <path d="M30 0 L60 17 L30 34 L0 17 Z" fill="none" stroke="#f1f5f9" stroke-width="1.5"/>
        </pattern>
      </defs>
      
      <!-- Background -->
      <rect width="100%" height="100%" fill="white" />
      <rect width="100%" height="100%" fill="url(#grid)" />
      <circle cx="${centerX}" cy="${centerY}" r="300" fill="url(#glow)" />

      <!-- Diagram -->
      <g transform="translate(0, 20)"> <!-- Nudge down slightly -->
        ${connections}
        ${elements}
      </g>
    </svg>
  `;

  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export const SERVICES: Service[] = [
  // --- CATEGORY 1: AI Agents & Automated Workflows ---

  {
    id: 1,
    title: "Autonomous Lead Acquisition Ecosystem",
    category: "AI Agents & Workflows",
    description: "Deploy a 24/7 autonomous pipeline that ingests raw market data, enriches profiles with 99% accuracy, and scores intent using predictive modeling—syncing only sales-ready leads to your CRM.",
    impact: "Reduces CAC by 64% in <90 days.",
    engine: "sys.ingest(raw_data) >> identity.resolve() >> model.predict(intent) >> crm.sync()",
    workflowImage: getWorkflowImage("Ingest Stream > Identity Resolve > AI Scoring > CRM Sync"),
    deployedCount: 842,
    icon: Search
  },
  {
    id: 2,
    title: "Predictive Deal Analysis Engine",
    category: "AI Agents & Workflows",
    description: "Eliminate emotional bias. Computer vision agents assess property conditions from photos while financial agents cross-reference 50+ market indicators to calculate ARV/MAO with institutional precision.",
    impact: "Risk assessment error < 3%.",
    engine: "vision.scan(img) >> comp.retrieve(loc) >> fin.model(arv) >> offer.gen(pdf)",
    workflowImage: getWorkflowImage("Vision Scan > Market Comps > Risk Model > Gen Offer"),
    deployedCount: 1250,
    icon: BarChart3
  },
  {
    id: 3,
    title: "Asset Sentinel Dashboard",
    category: "AI Agents & Workflows",
    description: "The eyes of your portfolio. Creates a continuous monitoring loop comparing real-time asset performance against historical baselines, flagging anomalies before they become liabilities.",
    impact: "Monitors $4B+ autonomously.",
    engine: "monitor.watch(stream) >> anomaly.detect(ml) >> alert.dispatch() >> report.gen()",
    workflowImage: getWorkflowImage("Monitor Loop > Detect Anomaly > Alert Dispatch > Gen Report"),
    deployedCount: 535,
    icon: Layout
  },
  {
    id: 4,
    title: "Brand Reputation Guardian",
    category: "AI Agents & Workflows",
    description: "Turn sentiment into strategy. NLP agents scour the web for mentions, interpreting context and intent to automatically resolve issues or amplify positive feedback across all channels.",
    impact: "Response latency: < 5s.",
    engine: "crawl.web(targets) >> nlp.sentiment(txt) >> context.map() >> reply.deploy()",
    workflowImage: getWorkflowImage("Web Crawl > NLP Sentiment > Context Map > Auto Reply"),
    deployedCount: 3436,
    icon: MessageSquare
  },
  {
    id: 5,
    title: "Intelligent Scheduling Matrix",
    category: "AI Agents & Workflows",
    description: "Stop playing email tag. This agent negotiates time, resolves multi-party conflicts, and locks in appointments based on priority logic, filling your calendar with high-value activities.",
    impact: "Recovers 15hrs/week/agent.",
    engine: "req.parse(nlp) >> slot.check(cal) >> negotiate.lock() >> notify.all()",
    workflowImage: getWorkflowImage("Parse Req > Check Slots > Lock Cal > Notify"),
    deployedCount: 6766,
    icon: Calendar
  },
  {
    id: 6,
    title: "Trustless Transaction Protocol",
    category: "AI Agents & Workflows",
    description: "Secure revenue streams with banking-grade validation workflows. Authenticates identities, authorizes funds via encrypted gateways, and creates immutable audit trails on a private ledger.",
    impact: "Zero fraud in 100k+ txns.",
    engine: "auth.verify(id) >> aml.check(db) >> contract.sign(zk) >> ledger.commit()",
    workflowImage: getWorkflowImage("Verify ID > AML Check > Sign Contract > Ledger DB"),
    deployedCount: 420,
    icon: CreditCard
  },
  {
    id: 7,
    title: "Voice-First Intake Agent",
    category: "AI Agents & Workflows",
    description: "Conversational AI that handles inbound calls with human-level fluency, qualifying leads, booking appointments, and routing complex queries to specialists—all without touching a keyboard.",
    impact: "Call handling cost: -80%.",
    engine: "voice.transcribe() >> nlp.intent() >> logic.decide() >> action.exec()",
    workflowImage: getWorkflowImage("Voice Stream > NLP Parse > Intent Route > Action Execute"),
    deployedCount: 2120,
    icon: Mic
  },
  {
    id: 8,
    title: "Proactive Outreach Orchestrator",
    category: "AI Agents & Workflows",
    description: "Don't wait for leads to come to you. Autonomous agents identify prospects, craft personalized messages, and execute multi-touch campaigns across email, SMS, and social—learning from every interaction.",
    impact: "Reply rate: 3x industry avg.",
    engine: "prospect.find() >> llm.personalize() >> channel.dispatch() >> feedback.learn()",
    workflowImage: getWorkflowImage("Prospect ID > Message Craft > Multi-Touch > Learn Loop"),
    deployedCount: 1890,
    icon: Users
  },
  {
    id: 9,
    title: "Contextual Chatbot Matrix",
    category: "AI Agents & Workflows",
    description: "Deploy intelligent bots across every touchpoint. Maintains conversation context, escalates to humans when needed, and continuously learns from interactions to improve responses.",
    impact: "Support tickets: -65%.",
    engine: "input.capture() >> context.retrieve() >> llm.respond() >> escalate.if(complex)",
    workflowImage: getWorkflowImage("User Input > Context Load > LLM Response > Human Escalate"),
    deployedCount: 8540,
    icon: MessageCircle
  },
  {
    id: 10,
    title: "Unified Workflow Orchestration",
    category: "AI Agents & Workflows",
    description: "The central nervous system of your operations. Connects disparate tools, automates handoffs, and ensures every task flows seamlessly from initiation to completion without manual intervention.",
    impact: "Process time: -70%.",
    engine: "event.listen() >> router.decide() >> task.exec() >> state.sync()",
    workflowImage: getWorkflowImage("Trigger Event > Route Logic > Execute Tasks > Sync State"),
    deployedCount: 1350,
    icon: Briefcase
  },
  {
    id: 11,
    title: "Clinical Patient Triage Agent",
    category: "AI Agents & Workflows",
    description: "Revolutionize healthcare intake. HIPAA-compliant agents handle scheduling, symptom pre-screening, and insurance verification automatically.",
    impact: "Intake time cut by 75%.",
    engine: "voice.transcribe() >> nlp.triage() >> insurance.verify() >> calendar.book()",
    workflowImage: getWorkflowImage("Voice Stream > NLP Triage > Ins. Verify > Schedule"),
    deployedCount: 145,
    icon: Stethoscope
  },
  {
    id: 12,
    title: "Supply Chain Predictive Brain",
    category: "AI Agents & Workflows",
    description: "Anticipate disruptions. Logistics agents analyze routes, weather, and inventory to predict delays and automatically reroute shipments.",
    impact: "Efficiency boost: 30%.",
    engine: "monitor.logistics() >> ml.predict(delay) >> route.optimize() >> notify.stakeholders()",
    workflowImage: getWorkflowImage("Monitor Routes > Predict Delay > Auto Reroute > Notify"),
    deployedCount: 210,
    icon: Truck
  },
  {
    id: 13,
    title: "Retail Personalization Omni-Bot",
    category: "AI Agents & Workflows",
    description: "Deliver VIP experiences. Tracks behavior across web/mobile to recommend products and handle support with context-aware responses.",
    impact: "Conversion up 22%.",
    engine: "track.user() >> ml.recommend() >> support.context() >> convert.optimize()",
    workflowImage: getWorkflowImage("Track Behavior > Recommend > Support > Convert"),
    deployedCount: 360,
    icon: ShoppingBag
  },
  {
    id: 14,
    title: "Algorithmic Risk Guardian",
    category: "AI Agents & Workflows",
    description: "Fintech security at scale. Monitors transaction streams in real-time, instantly freezing suspicious activities to prevent fraud losses.",
    impact: "Fraud detection: 99.5%.",
    engine: "monitor.transactions() >> ml.detect(fraud) >> action.freeze() >> alert.team()",
    workflowImage: getWorkflowImage("Monitor Txn > Detect Anomaly > Freeze > Alert"),
    deployedCount: 180,
    icon: Coins
  },
  {
    id: 15,
    title: "Adaptive Learning Curriculum Gen",
    category: "AI Agents & Workflows",
    description: "Personalized education. Analyzes student performance to generate custom lesson plans and quizzes, adapting to knowledge gaps in real-time.",
    impact: "Retention improved 40%.",
    engine: "analyze.student() >> llm.generate(curriculum) >> adapt.realtime() >> track.progress()",
    workflowImage: getWorkflowImage("Analyze Performance > Gen Curriculum > Adapt > Track Progress"),
    deployedCount: 120,
    icon: GraduationCap
  },
  {
    id: 16,
    title: "Predictive Maintenance Twin",
    category: "AI Agents & Workflows",
    description: "Keep fleets running. Digital twins predict part failures based on telemetry, scheduling maintenance before breakdowns occur.",
    impact: "Downtime reduced 50%.",
    engine: "monitor.telemetry() >> ml.predict(failure) >> calendar.schedule() >> execute.maintenance()",
    workflowImage: getWorkflowImage("Monitor Telemetry > Predict Failure > Schedule Maint > Execute"),
    deployedCount: 95,
    icon: Car
  },

  // --- CATEGORY 2: Advisory & Technical Infrastructure ---

  {
    id: 17,
    title: "Virtual CTO Strategy Audit",
    category: "Advisory & Tech Infrastructure",
    description: "Get a battle-tested technical roadmap without the C-suite salary. Fractional CTOs assess your stack, identify bottlenecks, and architect scalable solutions aligned with business goals.",
    impact: "Tech debt reduced 40%.",
    engine: "audit.infrastructure() >> identify.risks() >> architect.solution() >> roadmap.deliver()",
    workflowImage: getWorkflowImage("Audit Stack > ID Bottlenecks > Design Solution > Roadmap"),
    deployedCount: 215,
    icon: Brain
  },
  {
    id: 18,
    title: "Rapid MVP Build Sprint",
    category: "Advisory & Tech Infrastructure",
    description: "Ship in weeks, not quarters. Dedicated engineering teams build production-grade MVPs using battle-tested frameworks, delivering functional software that real users can test immediately.",
    impact: "Time-to-market: -75%.",
    engine: "spec.define() >> team.build() >> qa.test() >> deploy.production()",
    workflowImage: getWorkflowImage("Spec Define > Sprint Build > QA Test > Deploy"),
    deployedCount: 450,
    icon: Code
  },
  {
    id: 19,
    title: "Data Lake Infrastructure",
    category: "Advisory & Tech Infrastructure",
    description: "A single source of truth. Resilient pipelines ingest, clean, and warehouse data from all sources, preparing it for advanced analytics and ML models.",
    impact: "Data availability: 99.999%.",
    engine: "ingest.sources() >> clean.transform() >> warehouse.store() >> analytics.enable()",
    workflowImage: getWorkflowImage("Ingest Data > Clean > Warehouse > Analyze"),
    deployedCount: 220,
    icon: Database
  },
  {
    id: 20,
    title: "Enterprise ERP Backbone",
    category: "Advisory & Tech Infrastructure",
    description: "Connect your entire business. Custom ERP systems integrate finance, inventory, HR, and operations into a unified operational layer handling millions of transactions.",
    impact: "Supports $100M+ volume.",
    engine: "integrate.systems() >> unify.data() >> automate.workflows() >> scale.operations()",
    workflowImage: getWorkflowImage("Integrate Systems > Unify Data > Automate Workflows > Scale"),
    deployedCount: 112,
    icon: Wrench
  },
  {
    id: 21,
    title: "Blockchain Security Layer",
    category: "Advisory & Tech Infrastructure",
    description: "Immutable trust infrastructure. Smart contracts and distributed ledgers ensure transparency, eliminate intermediaries, and create tamper-proof audit trails for high-value transactions.",
    impact: "Dispute resolution: 0 cases.",
    engine: "contract.create() >> validate.parties() >> execute.trustless() >> ledger.commit()",
    workflowImage: getWorkflowImage("Create Contract > Validate > Execute > Ledger Record"),
    deployedCount: 85,
    icon: ShieldCheck
  },
  {
    id: 22,
    title: "Legacy System Migration",
    category: "Advisory & Tech Infrastructure",
    description: "Escape technical debt without disruption. Phased migration strategies move critical workloads from monoliths to modern cloud-native architectures while maintaining uptime.",
    impact: "Zero downtime migrations.",
    engine: "assess.legacy() >> plan.strategy() >> migrate.phased() >> validate.integrity()",
    workflowImage: getWorkflowImage("Assess Legacy > Plan Migration > Execute Phases > Validate"),
    deployedCount: 95,
    icon: GitBranch
  },
  {
    id: 23,
    title: "Unstructured Data Extractor",
    category: "Advisory & Tech Infrastructure",
    description: "Unlock value trapped in documents. Advanced OCR and LLMs turn PDFs, images, and handwritten notes into structured, queryable data for downstream systems.",
    impact: "99.8% extraction accuracy.",
    engine: "scan.document() >> ocr.extract() >> llm.structure() >> db.store()",
    workflowImage: getWorkflowImage("Scan Document > OCR Extract > LLM Structure > DB Store"),
    deployedCount: 745,
    icon: FileText
  },
  {
    id: 24,
    title: "Field Ops Mobile Extension",
    category: "Advisory & Tech Infrastructure",
    description: "Empower your workforce at the edge. Offline-first mobile apps sync seamlessly with your central core, allowing field agents to execute workflows from anywhere.",
    impact: "Data latency reduced to 0.",
    engine: "offline.capture() >> sync.when(online) >> process.central() >> update.state()",
    workflowImage: getWorkflowImage("Offline Capture > Sync > Process > Update Central"),
    deployedCount: 560,
    icon: Smartphone
  },
  {
    id: 25,
    title: "Digital Twin Simulation",
    category: "Advisory & Tech Infrastructure",
    description: "Test the future before building it. Physics-based simulations of operational environments allow you to run scenarios and optimize outcomes without real-world risk.",
    impact: "Prevented $2M in errors.",
    engine: "model.environment() >> simulate.scenarios() >> analyze.outcomes() >> optimize.decisions()",
    workflowImage: getWorkflowImage("Model Environment > Run Scenarios > Analyze Results > Optimize"),
    deployedCount: 88,
    icon: Gamepad2
  },
  {
    id: 26,
    title: "Omnichannel Context Engine",
    category: "Advisory & Tech Infrastructure",
    description: "Seamless conversation across platforms. Maintains user context whether on WhatsApp, Email, or Web, ensuring agents always know the full history.",
    impact: "CSAT scores +40%.",
    engine: "capture.interaction() >> store.context() >> retrieve.history() >> respond.aware()",
    workflowImage: getWorkflowImage("Capture Context > Store > Retrieve > Respond"),
    deployedCount: 415,
    icon: MessageSquare
  },
  {
    id: 27,
    title: "Senior Engineering Augmentation",
    category: "Advisory & Tech Infrastructure",
    description: "Inject elite talent instantly. Deploy senior engineers who integrate directly into your workflows, bringing specialized AI expertise to your existing projects.",
    impact: "Velocity increased 3x.",
    engine: "assess.requirements() >> match.engineers() >> integrate.team() >> deliver.results()",
    workflowImage: getWorkflowImage("Assess Needs > Match Talent > Integrate > Deliver"),
    deployedCount: 100,
    icon: Users
  },
  {
    id: 28,
    title: "Project Assurance Framework",
    category: "Advisory & Tech Infrastructure",
    description: "Delivery is a science. Rigorous project management and automated QA pipelines ensure software is delivered on time, on budget, and bug-free.",
    impact: "100% on-time delivery.",
    engine: "plan.milestones() >> execute.sprints() >> qa.automate() >> deliver.quality()",
    workflowImage: getWorkflowImage("Plan > Execute > QA > Deliver"),
    deployedCount: 330,
    icon: ShieldCheck
  }
];

export const CASE_STUDIES: import('./types').CaseStudy[] = [
  {
    id: 'albam',
    company: 'Albam',
    location: 'Seoul, South Korea',
    industry: 'HR SaaS',
    serviceUsed: 'Unified Workflow Orchestration',
    logo: 'https://ui-avatars.com/api/?name=Albam&background=2563EB&color=fff',
    teaser: 'Albam used ELEVOR to unify payroll and shift data, achieving 99.9% payroll accuracy across 15,000+ shifts.',
    executiveSummary: 'Managing payroll for thousands of fragmented shifts across SMB clients was a logistical nightmare. ELEVOR deployed a Unified Workflow Orchestration agent that ingests shift data, cross-references labor laws, and auto-calculates payroll with near-perfect accuracy.',
    breakingPoint: {
      description: 'Manual reconciliation of shift data led to frequent payroll errors and a high support burden. The operations team spent 2 weeks per month just on verification.',
      metrics: [
        '12% payroll error rate',
        '300+ support tickets/month',
        '14 days to close payroll'
      ]
    },
    approach: {
      description: 'We built a custom orchestration layer that sits between the time-tracking app and the payroll engine, applying a 50-step validation logic to every shift record.',
      phases: [
        { title: 'Phase 1: Logic Mapping', items: ['Map labor code rules', 'Define error states'] },
        { title: 'Phase 2: Agent Deployment', items: ['Ingest live shift data', 'Run shadow validation'] },
        { title: 'Phase 3: Auto-Commit', items: ['Enable auto-approval', 'Exception-only review'] }
      ]
    },
    techStack: ['Node.js', 'PostgreSQL', 'Redis', 'AWS Lambda'],
    results: {
      metrics: [
        { label: 'Accuracy', before: '88%', after: '99.9%', change: '+13.5%' },
        { label: 'Process Time', before: '14 days', after: '4 hrs', change: '-98%' },
        { label: 'Support Vol', before: '300/mo', after: '25/mo', change: '-91%' }
      ],
      impactStatement: 'We process 15,000 shifts in minutes, not weeks.'
    },
    testimonial: {
      quote: "Our operations team can finally focus on growth instead of spreadsheets.",
      author: "Jin-Ho Kim",
      role: "Operations Director"
    },
    takeaways: ['Data validation must be automated', 'Speed builds trust', 'Exceptions should be rare'],
    impactStats: [{ label: 'Accuracy', value: '99.9%' }, { label: 'Time Saved', value: '300h' }]
  },
  {
    id: 'shiftee',
    company: 'Shiftee',
    location: 'Seoul, South Korea',
    industry: 'HR SaaS',
    serviceUsed: 'Field Ops Mobile Extension',
    logo: 'https://ui-avatars.com/api/?name=Shiftee&background=10B981&color=fff',
    teaser: 'Shiftee integrated our Field Ops agents to eliminate GPS spoofing, ensuring 100% verified attendance for remote workforce clients.',
    executiveSummary: 'Shiftee needed a way to verify attendance for remote and field workers without invasive tracking. ELEVOR developed a secure mobile extension that uses multi-factor location verification to prevent spoofing while respecting privacy.',
    breakingPoint: {
      description: 'Clients were reporting widespread GPS spoofing apps being used to fake attendance. Shiftee was at risk of losing enterprise contracts due to lack of trust.',
      metrics: [
        '15% estimated spoofing rate',
        '3 major client churn risks',
        'Zero verifiable audit trail'
      ]
    },
    approach: {
      description: 'We deployed a client-side AI agent within the Shiftee mobile app that analyzes signal strength, wifi triangulation, and device integrity to score location confidence.',
      phases: [
        { title: 'Phase 1: Signal Analysis', items: ['Collect telemetry', 'Train anomaly model'] },
        { title: 'Phase 2: SDK Integration', items: ['Embed lightweight agent', 'Real-time scoring'] },
        { title: 'Phase 3: Fraud Blocking', items: ['Auto-reject low confidence', 'Admin alerts'] }
      ]
    },
    techStack: ['Swift', 'Kotlin', 'TensorFlow Lite', 'Firebase'],
    results: {
      metrics: [
        { label: 'Spoofing', before: '15%', after: '0%', change: '-100%' },
        { label: 'Confidence', before: 'Low', after: 'High', change: 'MAX' },
        { label: 'Churn Risk', before: 'High', after: 'Zero', change: '-100%' }
      ],
      impactStatement: 'We restored absolute trust in our remote attendance data.'
    },
    testimonial: {
      quote: "The anti-spoofing agent saved our biggest enterprise accounts.",
      author: "Seung-Won Lee",
      role: "CTO"
    },
    takeaways: ['Trust is the product', 'Client-side AI protects privacy', 'Real-time scores prevent fraud'],
    impactStats: [{ label: 'Spoofing', value: '0%' }, { label: 'Revenue', value: 'Saved' }]
  },
  {
    id: 'flex',
    company: 'Flex',
    location: 'Seoul, South Korea',
    industry: 'HR SaaS',
    serviceUsed: 'Autonomous Lead Acquisition Ecosystem',
    logo: 'https://ui-avatars.com/api/?name=Flex&background=8B5CF6&color=fff',
    teaser: 'Flex automated their SDR pipeline, generating 800+ qualified demos in 3 months without adding headcount.',
    executiveSummary: 'Flex was struggling to scale their sales team to meet aggressive growth targets. ELEVOR implemented an Autonomous Lead Acquisition Ecosystem that took over the entire top-of-funnel process, from prospecting to booking.',
    breakingPoint: {
      description: 'The sales team was burning out doing manual outreach. CAC was too high, and conversion rates were dropping.',
      metrics: [
        'CAC: $1,200',
        'SDR Burnout: High',
        'Lead Response Time: 24hrs'
      ]
    },
    approach: {
      description: 'We replaced manual prospecting with a multi-agent system. Agent A scrapes data, Agent B enriches it, Agent C writes personalized emails, and Agent D handles scheduling.',
      phases: [
        { title: 'Phase 1: Data Pipeline', items: ['Integrate data sources', 'Define ICP'] },
        { title: 'Phase 2: Agent Training', items: ['Train writing style', 'A/B test subject lines'] },
        { title: 'Phase 3: Autopilot', items: ['Launch campaigns', 'Auto-book meetings'] }
      ]
    },
    techStack: ['Python', 'OpenAI GPT-4', 'HubSpot API', 'SendGrid'],
    results: {
      metrics: [
        { label: 'Demos', before: '50/mo', after: '250/mo', change: '+400%' },
        { label: 'CAC', before: '$1,200', after: '$350', change: '-70%' },
        { label: 'Team', before: '5 SDRs', after: '0 SDRs', change: 'Reassigned' }
      ],
      impactStatement: 'Our pipeline is now fully autonomous and infinitely scalable.'
    },
    testimonial: {
      quote: "It's like having an army of SDRs that never sleep.",
      author: "Ji-Hoon Park",
      role: "VP of Sales"
    },
    takeaways: ['Outbound can be automated', 'Personalization scales', 'Humans should close, not prospect'],
    impactStats: [{ label: 'Demos', value: '250+' }, { label: 'Growth', value: '4x' }]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Why Autonomous Agents Are Eating SaaS",
    date: "Dec 12, 2024",
    category: "Industry Trends",
    excerpt: "The era of point solutions is over. Discover why the next generation of software won't just help you work—it will do the work for you."
  },
  {
    id: 2,
    title: "Deconstructing the 340% ROI of AI Workflows",
    date: "Nov 28, 2024",
    category: "Case Studies",
    excerpt: "A deep dive into the financial mechanics of replacing manual processes with intelligent automation in enterprise environments."
  },
  {
    id: 3,
    title: "Security in the Age of Autonomous Agents",
    date: "Nov 15, 2024",
    category: "Engineering",
    excerpt: "How we ensure Zero-Trust compliance when deploying self-executing code in sensitive banking and healthcare sectors."
  }
];

export const STATS: StatItem[] = [
  { label: "Tasks Automated", value: "12", suffix: "M+" },
  { label: "Uptime Guaranteed", value: "99.99", suffix: "%" },
  { label: "Enterprise Clients", value: "45", suffix: "+" },
  { label: "ROI Delivered", value: "340", suffix: "%" }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How is this different from Zapier or Make?",
    answer: "Zapier and Make are 'if this, then that' tools for simple linear connections. ELEVOR deploys 'autonomous agents' that can reason, make decisions, handle exceptions, and execute complex, multi-step workflows that require intelligence, not just connectivity. We replace workers, not just scripts."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We are SOC 2 Type II compliant. We use bank-grade encryption for data in transit and at rest. We can also deploy agents within your own VPC (Virtual Private Cloud) so data never leaves your infrastructure."
  },
  {
    question: "How long does implementation take?",
    answer: "For standard agents in our catalog, deployment can happen in <48 hours. For custom enterprise architectures, our typical engagement is 2-4 weeks from audit to go-live."
  },
  {
    question: "Do you offer a trial?",
    answer: "We offer a paid pilot program with a 90-day money-back guarantee. We find that free trials don't drive the necessary commitment for deep integration, but we de-risk the investment completely."
  }
];
