/**
 * Maximus Customer Support Chatbot
 * A smart, keyword-based chatbot with comprehensive knowledge
 * about Maximus services, contacts, and resources.
 */

(function () {
  'use strict';

  /* ============================================
     Knowledge Base
     ============================================ */
  const KNOWLEDGE_BASE = {
    welcome: {
      text: `Hi there! 👋 I'm the <strong>Maximus Virtual Assistant</strong>. I'm here to help you learn about our services, find the right contact, or answer your questions.\n\nWhat can I help you with today?`,
      suggestions: [
        { label: '🏢 Our Services', query: 'services' },
        { label: '📞 Contact Us', query: 'contact' },
        { label: '💼 Careers', query: 'careers' },
        { label: '🤝 Partner With Us', query: 'partner' },
      ],
    },

    responses: [
      // --- SERVICES OVERVIEW ---
      {
        keywords: ['services', 'what do you do', 'what does maximus do', 'offerings', 'solutions', 'about'],
        response: `Maximus provides a comprehensive suite of services to help government agencies deliver better outcomes. Our core service areas include:\n\n<ul>
<li><strong>Technology Services</strong> — AI, cybersecurity, cloud, data management, digital modernization</li>
<li><strong>Customer Experience</strong> — Contact centers, digital government, innovation center</li>
<li><strong>Health Services</strong> — Clinical services, eligibility & enrollment, health IT modernization</li>
<li><strong>Program Services</strong> — Case management, consulting & advisory, eligibility & enrollment</li>
</ul>\n\nWould you like to learn more about any of these?`,
        suggestions: [
          { label: '💻 Technology', query: 'technology services' },
          { label: '🎯 Customer Experience', query: 'customer experience' },
          { label: '🏥 Health Services', query: 'health services' },
          { label: '📋 Program Services', query: 'program services' },
        ],
      },

      // --- TECHNOLOGY SERVICES ---
      {
        keywords: ['technology', 'tech services', 'it services', 'digital', 'modernization', 'it transformation'],
        response: `Our <strong>Technology Services</strong> drive innovation and deliver impactful mission outcomes through:\n\n<ul>
<li><strong>AI & Advanced Analytics</strong> — Leverage artificial intelligence and data-driven insights</li>
<li><strong>Cybersecurity</strong> — Protect critical government infrastructure and data</li>
<li><strong>Cloud Services</strong> — Scalable, secure cloud solutions for government</li>
<li><strong>Digital Modernization</strong> — Transform legacy systems with modern architectures</li>
<li><strong>Data Management</strong> — Enterprise data solutions and governance</li>
</ul>\n\n🔗 <a href="https://maximus.com/technology-services" target="_blank">Learn more about Technology Services →</a>`,
        suggestions: [
          { label: '🤖 AI & Analytics', query: 'artificial intelligence' },
          { label: '🔒 Cybersecurity', query: 'cybersecurity' },
          { label: '☁️ Cloud', query: 'cloud services' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- AI ---
      {
        keywords: ['artificial intelligence', 'ai', 'analytics', 'machine learning', 'ml'],
        response: `Our <strong>AI & Advanced Analytics</strong> services help agencies harness the power of data and intelligent automation.\n\nWe deliver solutions that include predictive analytics, natural language processing, robotic process automation, and machine learning models tailored for government missions.\n\n🔗 <a href="https://maximus.com/technology-services/artificial-intelligence-advanced-analytics" target="_blank">Explore AI & Analytics Services →</a>`,
        suggestions: [
          { label: '💻 All Tech Services', query: 'technology services' },
          { label: '📞 Talk to Our Team', query: 'contact' },
        ],
      },

      // --- CYBERSECURITY ---
      {
        keywords: ['cybersecurity', 'security', 'cyber', 'threat', 'compliance'],
        response: `Our <strong>Cybersecurity Services</strong> help protect critical government systems and data through comprehensive security solutions.\n\nWe cover everything from threat detection and incident response to compliance frameworks and security architecture design.\n\n🔗 <a href="https://maximus.com/technology-services/cybersecurity" target="_blank">Explore Cybersecurity Services →</a>`,
        suggestions: [
          { label: '💻 All Tech Services', query: 'technology services' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- CLOUD ---
      {
        keywords: ['cloud', 'aws', 'azure', 'migration', 'infrastructure'],
        response: `Our <strong>Cloud Services</strong> provide scalable, secure cloud solutions that accelerate digital transformation for government agencies.\n\nFrom cloud migration strategy to managed cloud environments, we help agencies adopt cloud-first approaches securely.\n\n🔗 <a href="https://maximus.com/technology-services/cloud-services" target="_blank">Explore Cloud Services →</a>`,
        suggestions: [
          { label: '💻 All Tech Services', query: 'technology services' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- CUSTOMER EXPERIENCE ---
      {
        keywords: ['customer experience', 'cx', 'contact center', 'citizen experience', 'call center'],
        response: `Our <strong>Customer Experience</strong> solutions ensure every citizen interaction is seamless and exceptional:\n\n<ul>
<li><strong>Contact Center Solutions</strong> — Omnichannel support for government programs</li>
<li><strong>Digital Government</strong> — Modern digital portals and self-service tools</li>
<li><strong>Maximus Innovation Center</strong> — Leading-edge CX research and development</li>
</ul>\n\n🔗 <a href="https://maximus.com/customer-experience" target="_blank">Learn more about Customer Experience →</a>`,
        suggestions: [
          { label: '📱 Digital Government', query: 'digital government' },
          { label: '🏢 All Services', query: 'services' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- DIGITAL GOVERNMENT ---
      {
        keywords: ['digital government', 'portal', 'self-service', 'citizen portal', 'online services'],
        response: `Our <strong>Digital Government</strong> solutions modernize how citizens interact with government agencies.\n\nWe build intuitive, accessible digital portals that enable self-service, reduce wait times, and improve satisfaction across government programs.\n\n🔗 <a href="https://maximus.com/customer-experience/digital-government" target="_blank">Explore Digital Government →</a>`,
        suggestions: [
          { label: '🎯 Customer Experience', query: 'customer experience' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- HEALTH SERVICES ---
      {
        keywords: ['health', 'healthcare', 'medical', 'clinical', 'health services'],
        response: `Our <strong>Health Services</strong> support government agencies in modernizing health programs:\n\n<ul>
<li><strong>Clinical Services</strong> — Expert medical reviews and clinical support</li>
<li><strong>Eligibility & Enrollment</strong> — Streamlined benefits access for citizens</li>
<li><strong>Health IT Modernization</strong> — Transforming health technology infrastructure</li>
</ul>\n\n🔗 <a href="https://maximus.com/health-services" target="_blank">Learn more about Health Services →</a>`,
        suggestions: [
          { label: '⚕️ Clinical Services', query: 'clinical' },
          { label: '📋 Eligibility', query: 'eligibility' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- CLINICAL ---
      {
        keywords: ['clinical', 'clinical services', 'medical review', 'physician', 'doctor'],
        response: `Our <strong>Clinical Services</strong> team includes qualified physicians and healthcare professionals who provide expert medical reviews and clinical support for government health programs.\n\nWe offer opportunities for healthcare professionals to join our national panel of reviewers.\n\n🔗 <a href="https://maximus.com/health-services/clinical-services" target="_blank">Explore Clinical Services →</a>`,
        suggestions: [
          { label: '🏥 All Health Services', query: 'health services' },
          { label: '💼 Healthcare Careers', query: 'healthcare careers' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- ELIGIBILITY ---
      {
        keywords: ['eligibility', 'enrollment', 'benefits', 'medicaid', 'snap', 'tanf'],
        response: `Our <strong>Eligibility & Enrollment</strong> services help citizens access the benefits they need.\n\nWe streamline the eligibility determination and enrollment process for government programs including Medicaid, SNAP, TANF, and other social services.\n\n🔗 <a href="https://maximus.com/health-services/eligibility-and-enrollment" target="_blank">Explore Eligibility & Enrollment →</a>`,
        suggestions: [
          { label: '🏥 Health Services', query: 'health services' },
          { label: '📋 Program Services', query: 'program services' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- PROGRAM SERVICES ---
      {
        keywords: ['program services', 'case management', 'consulting', 'advisory'],
        response: `Our <strong>Program Services</strong> help agencies transform policy goals into tangible outcomes:\n\n<ul>
<li><strong>Case Management</strong> — Comprehensive tools and support for program delivery</li>
<li><strong>Consulting & Advisory</strong> — Strategic guidance for program optimization</li>
<li><strong>Eligibility & Enrollment</strong> — Streamlined access to government services</li>
</ul>\n\n🔗 <a href="https://maximus.com/program-services" target="_blank">Learn more about Program Services →</a>`,
        suggestions: [
          { label: '🏢 All Services', query: 'services' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- WHO WE SERVE ---
      {
        keywords: ['who do you serve', 'clients', 'government', 'federal', 'state', 'local'],
        response: `Maximus serves government at every level:\n\n<ul>
<li><strong>Federal Government</strong> — End-to-end solutions empowering federal agencies to better serve the American people</li>
<li><strong>State & Local Government</strong> — Client-focused innovation spanning the full spectrum of public services</li>
<li><strong>Specialized Markets</strong> — Including higher education and financial services</li>
</ul>\n\nOur diverse team communicates in <strong>120+ languages across 6 countries</strong>.\n\n🔗 <a href="https://maximus.com/federal-government" target="_blank">Federal Government →</a> &nbsp; | &nbsp; <a href="https://maximus.com/state-and-local-government" target="_blank">State & Local →</a>`,
        suggestions: [
          { label: '🏢 Our Services', query: 'services' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- CONTACT ---
      {
        keywords: ['contact', 'reach', 'talk', 'call', 'email', 'phone', 'get in touch', 'speak'],
        response: `I'd be happy to connect you with the right team! Here are the main ways to contact us:\n\n<ul>
<li><strong>Government Inquiries</strong> — <a href="https://app.smartsheet.com/b/form/a1b3f7563ef0489a853e776861f7f8b8" target="_blank">Submit a services inquiry</a></li>
<li><strong>Partnership</strong> — <a href="https://app.smartsheet.com/b/form/61521b7f99c14dd8b62d5656d5d96d4d" target="_blank">Submit a teaming inquiry</a></li>
<li><strong>Careers & HR</strong> — <a href="tel:8663071477">866.307.1477</a> | <a href="mailto:PeopleOperations@maximus.com">PeopleOperations@maximus.com</a></li>
<li><strong>Accounts Payable</strong> — <a href="mailto:AccountsPayableHelpdesk@maximus.com">AccountsPayableHelpdesk@maximus.com</a></li>
<li><strong>Investor Relations</strong> — <a href="mailto:InvestorRelations@maximus.com">InvestorRelations@maximus.com</a></li>
<li><strong>Media</strong> — <a href="mailto:Media@maximus.com">Media@maximus.com</a></li>
</ul>\n\nOr I can show you a quick contact form right here! 👇`,
        suggestions: [
          { label: '📝 Contact Form', query: 'contact form' },
          { label: '🏢 Our Services', query: 'services' },
          { label: '🤝 Partner With Us', query: 'partner' },
        ],
      },

      // --- CONTACT FORM ---
      {
        keywords: ['contact form', 'form', 'send message', 'submit inquiry', 'leave message'],
        response: '__FORM__',
        suggestions: [],
      },

      // --- CAREERS ---
      {
        keywords: ['careers', 'jobs', 'hiring', 'work at', 'employment', 'positions', 'opportunities', 'job openings'],
        response: `Great question! Maximus offers rewarding career opportunities across many fields.\n\n🌐 <strong>Explore open positions:</strong> <a href="https://maximus.avature.net/careers/USHome" target="_blank">Careers at Maximus →</a>\n\n📞 <strong>Contact HR:</strong>\n<a href="tel:8663071477">866.307.1477</a> (Mon–Fri, 8am–6pm ET)\n<a href="mailto:PeopleOperations@maximus.com">PeopleOperations@maximus.com</a>\n\n<em>"Our people make Maximus. Are you ready to do something greater?"</em>`,
        suggestions: [
          { label: '⚕️ Healthcare Careers', query: 'healthcare careers' },
          { label: '🏢 About Maximus', query: 'about maximus' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- HEALTHCARE CAREERS ---
      {
        keywords: ['healthcare careers', 'healthcare professionals', 'physician jobs', 'clinical jobs', 'medical jobs'],
        response: `Maximus offers opportunities for qualified healthcare professionals including physicians, chiropractors, podiatrists, speech pathologists, therapists, and more.\n\n<strong>Requirements to join our reviewer panel:</strong>\n<ul>
<li>Graduate of an accredited school</li>
<li>Active and unrestricted license in your state</li>
<li>Board certification (not always required)</li>
<li>No history of disciplinary actions</li>
</ul>\n\n📧 <strong>Contact:</strong> <a href="mailto:ProfessionalRelations@maximus.com">ProfessionalRelations@maximus.com</a>`,
        suggestions: [
          { label: '💼 All Careers', query: 'careers' },
          { label: '🏥 Health Services', query: 'health services' },
        ],
      },

      // --- PARTNERSHIP ---
      {
        keywords: ['partner', 'partnership', 'teaming', 'alliance', 'subcontract', 'small business', 'collaborate'],
        response: `We love working with partners! Whether you're a large or small business, there are great ways to team with Maximus:\n\n<strong>🤝 Partner with us:</strong>\nSubmit a teaming inquiry to our partnership office.\n<a href="https://app.smartsheet.com/b/form/61521b7f99c14dd8b62d5656d5d96d4d" target="_blank">Submit Teaming Inquiry →</a>\n\n<strong>🔗 Alliance Partnerships:</strong>\nExplore how our technology and tools connect customers to government services.\n<a href="https://maximus.com/alliance-partnerships" target="_blank">Alliance Partnerships →</a>`,
        suggestions: [
          { label: '🏢 Our Services', query: 'services' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- INVESTOR RELATIONS ---
      {
        keywords: ['investor', 'stock', 'shares', 'financial', 'annual report', 'sec', 'earnings'],
        response: `For investor-related inquiries:\n\n📧 <strong>Email:</strong> <a href="mailto:InvestorRelations@maximus.com">InvestorRelations@maximus.com</a>\n🌐 <strong>Portal:</strong> <a href="https://investor.maximus.com/" target="_blank">Investor Relations →</a>\n\nYou'll find earnings reports, SEC filings, annual reports, and more on our investor portal.`,
        suggestions: [
          { label: '🏢 About Maximus', query: 'about maximus' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- ABOUT ---
      {
        keywords: ['about maximus', 'about', 'company', 'who is maximus', 'overview', 'history'],
        response: `<strong>Maximus</strong> is a leading government services company dedicated to moving people, technology, and government forward.\n\n🌍 <strong>Global Reach:</strong> 6 countries, 120+ languages\n🎯 <strong>Mission:</strong> Delivering frictionless government experiences\n💡 <strong>Culture:</strong> People-first, inside and out\n\nWe serve federal, state & local governments, and specialized markets with technology, customer experience, health, and program services.\n\n🔗 <a href="https://maximus.com/" target="_blank">Visit maximus.com →</a>`,
        suggestions: [
          { label: '🏢 Our Services', query: 'services' },
          { label: '👥 Who We Serve', query: 'who do you serve' },
          { label: '💼 Careers', query: 'careers' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- PROGRAMS ---
      {
        keywords: ['programs', 'government program', 'specific program', 'assistance', 'help with program'],
        response: `If you need help with a specific government program or service operated by Maximus, we'll connect you with the right resource.\n\n🔗 <a href="https://maximus.com/contact-us/programs-we-operate" target="_blank">Find Your Program →</a>\n\nYou can also call our People Operations team:\n📞 <a href="tel:8663071477">866.307.1477</a> (Mon–Fri, 8am–6pm ET)`,
        suggestions: [
          { label: '🏢 Our Services', query: 'services' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- CONTRACT VEHICLES ---
      {
        keywords: ['contract', 'contract vehicles', 'procurement', 'bid', 'proposal', 'rfp', 'rfi'],
        response: `Maximus holds a variety of government contract vehicles for streamlined procurement.\n\n🔗 <a href="https://maximus.com/contract-vehicles" target="_blank">Explore Contract Vehicles →</a>\n\nFor business development inquiries about our services or solutions, contact us directly.\n\n🔗 <a href="https://app.smartsheet.com/b/form/a1b3f7563ef0489a853e776861f7f8b8" target="_blank">Submit a Services Inquiry →</a>`,
        suggestions: [
          { label: '🤝 Partner With Us', query: 'partner' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- DATA MANAGEMENT ---
      {
        keywords: ['data', 'data management', 'data governance', 'database', 'data services'],
        response: `Our <strong>Data Management Services</strong> provide enterprise data solutions and governance frameworks for government agencies.\n\nWe help agencies organize, secure, and leverage their data assets for better decision-making and mission outcomes.\n\n🔗 <a href="https://maximus.com/technology-services/data-management" target="_blank">Explore Data Management →</a>`,
        suggestions: [
          { label: '💻 All Tech Services', query: 'technology services' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- EMPLOYMENT VERIFICATION ---
      {
        keywords: ['employment verification', 'verify employment', 'work number'],
        response: `For employment verification, please use <strong>The Work Number</strong>:\n\n🌐 <a href="https://www.theworknumber.com/" target="_blank">theworknumber.com</a>\n📞 800.367.5690\n📋 Maximus Employer Code: <strong>11033</strong>`,
        suggestions: [
          { label: '💼 Careers', query: 'careers' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- ACCOUNTS PAYABLE ---
      {
        keywords: ['accounts payable', 'invoice', 'payment', 'billing', 'vendor'],
        response: `For accounts payable inquiries:\n\n📧 <a href="mailto:AccountsPayableHelpdesk@maximus.com">AccountsPayableHelpdesk@maximus.com</a>\n\nOur team will be happy to assist with invoice and payment-related questions.`,
        suggestions: [
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- MEDIA ---
      {
        keywords: ['media', 'press', 'news', 'journalist', 'press release'],
        response: `For media and press inquiries:\n\n📧 <a href="mailto:Media@maximus.com">Media@maximus.com</a>\n🌐 <a href="https://maximus.com/news-and-events" target="_blank">News & Events →</a>\n\nOur communications team will respond promptly.`,
        suggestions: [
          { label: '🏢 About Maximus', query: 'about maximus' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- FOUNDATION ---
      {
        keywords: ['foundation', 'charitable', 'donate', 'charity', 'maximus foundation'],
        response: `The <strong>Maximus Charitable Foundation</strong> supports communities where we live and work.\n\n📧 <a href="mailto:MaximusCharitableFoundation@maximus.com">MaximusCharitableFoundation@maximus.com</a>`,
        suggestions: [
          { label: '🏢 About Maximus', query: 'about maximus' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- GREETINGS ---
      {
        keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy'],
        response: `Hello! 😊 Welcome to Maximus. How can I assist you today? Feel free to ask about our services, careers, or anything else!`,
        suggestions: [
          { label: '🏢 Our Services', query: 'services' },
          { label: '📞 Contact Us', query: 'contact' },
          { label: '💼 Careers', query: 'careers' },
          { label: '🤝 Partner With Us', query: 'partner' },
        ],
      },

      // --- THANK YOU ---
      {
        keywords: ['thank', 'thanks', 'appreciate', 'helpful', 'great'],
        response: `You're welcome! 😊 I'm glad I could help. If you have any other questions, don't hesitate to ask. We're here for you!`,
        suggestions: [
          { label: '🏢 Our Services', query: 'services' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- GOODBYE ---
      {
        keywords: ['bye', 'goodbye', 'see you', 'later', 'done'],
        response: `Goodbye! 👋 Thanks for visiting Maximus. If you need help in the future, I'll be right here. Have a great day!`,
        suggestions: [],
      },

      // --- PRICING ---
      {
        keywords: ['pricing', 'cost', 'price', 'how much', 'quote', 'estimate'],
        response: `For pricing information and quotes, I'd recommend speaking directly with our team. They can provide a tailored proposal based on your specific needs.\n\n🔗 <a href="https://app.smartsheet.com/b/form/a1b3f7563ef0489a853e776861f7f8b8" target="_blank">Submit a Services Inquiry →</a>\n\nOr I can show you a quick contact form right here!`,
        suggestions: [
          { label: '📝 Contact Form', query: 'contact form' },
          { label: '📞 Contact Us', query: 'contact' },
        ],
      },

      // --- HELP ---
      {
        keywords: ['help', 'support', 'assist', 'how to', 'guide'],
        response: `I can help you with:\n\n<ul>
<li>📋 <strong>Services</strong> — Learn about our technology, health, CX, and program services</li>
<li>📞 <strong>Contact</strong> — Find the right team to reach out to</li>
<li>💼 <strong>Careers</strong> — Explore job opportunities</li>
<li>🤝 <strong>Partnerships</strong> — Teaming and alliance opportunities</li>
<li>👥 <strong>Who We Serve</strong> — Federal, state & local, specialized markets</li>
</ul>\n\nJust type your question or pick a topic below!`,
        suggestions: [
          { label: '🏢 Our Services', query: 'services' },
          { label: '📞 Contact Us', query: 'contact' },
          { label: '💼 Careers', query: 'careers' },
          { label: '🤝 Partner With Us', query: 'partner' },
        ],
      },
    ],

    fallback: {
      text: `I'm sorry, I couldn't find a specific answer for that. Here are some things I can help you with:\n\n<ul>
<li>Our <strong>services</strong> and solutions</li>
<li><strong>Contact</strong> information</li>
<li><strong>Career</strong> opportunities</li>
<li><strong>Partnership</strong> inquiries</li>
</ul>\n\nOr you can reach our team directly:`,
      suggestions: [
        { label: '📝 Contact Form', query: 'contact form' },
        { label: '🏢 Our Services', query: 'services' },
        { label: '📞 Contact Us', query: 'contact' },
        { label: '💼 Careers', query: 'careers' },
      ],
    },
  };

  /* ============================================
     SVG Icons
     ============================================ */
  const ICONS = {
    chat: `<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/><path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg>`,
    close: `<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`,
    send: `<svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>`,
    bot: `<svg viewBox="0 0 24 24"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2zM7.5 13a2.5 2.5 0 000 5 2.5 2.5 0 000-5zm9 0a2.5 2.5 0 000 5 2.5 2.5 0 000-5z"/></svg>`,
    user: `<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
  };

  /* ============================================
     Chatbot Class
     ============================================ */
  class MaximusChatbot {
    constructor() {
      this.isOpen = false;
      this.hasShownBadge = true;
      this.messageHistory = [];
      this.init();
    }

    init() {
      this.createDOM();
      this.attachEvents();
      // Show welcome after a brief delay
      setTimeout(() => this.showWelcomeMessage(), 600);
    }

    /* --- DOM Creation --- */
    createDOM() {
      // Toggle button
      this.toggleBtn = this.el('button', {
        className: 'chatbot-toggle',
        id: 'chatbot-toggle',
        innerHTML: `
          <span class="chat-icon">${ICONS.chat}</span>
          <span class="close-icon">${ICONS.close}</span>
          <span class="chatbot-badge">1</span>
        `,
      });

      // Chat window
      this.window = this.el('div', {
        className: 'chatbot-window',
        id: 'chatbot-window',
        innerHTML: `
          <div class="chatbot-header">
            <div class="chatbot-avatar">${ICONS.bot}</div>
            <div class="chatbot-header-text">
              <div class="chatbot-header-title">Maximus Assistant</div>
              <div class="chatbot-header-status">
                <span class="chatbot-status-dot"></span>
                Online — Ready to help
              </div>
            </div>
            <button class="chatbot-header-close" id="chatbot-close">${ICONS.close}</button>
          </div>
          <div class="chatbot-messages" id="chatbot-messages"></div>
          <div class="chatbot-input-area">
            <input type="text" class="chatbot-input" id="chatbot-input" placeholder="Type your question..." autocomplete="off" />
            <button class="chatbot-send" id="chatbot-send">${ICONS.send}</button>
          </div>
          <div class="chatbot-footer"><span>Powered by Maximus</span></div>
        `,
      });

      document.body.appendChild(this.window);
      document.body.appendChild(this.toggleBtn);

      // Cache refs
      this.messagesContainer = document.getElementById('chatbot-messages');
      this.input = document.getElementById('chatbot-input');
      this.sendBtn = document.getElementById('chatbot-send');
      this.closeBtn = document.getElementById('chatbot-close');
    }

    el(tag, props) {
      const element = document.createElement(tag);
      Object.assign(element, props);
      return element;
    }

    /* --- Events --- */
    attachEvents() {
      this.toggleBtn.addEventListener('click', () => this.toggle());
      this.closeBtn.addEventListener('click', () => this.close());
      this.sendBtn.addEventListener('click', () => this.handleSend());
      this.input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.handleSend();
        }
      });
    }

    /* --- Open / Close --- */
    toggle() {
      this.isOpen ? this.close() : this.open();
    }

    open() {
      this.isOpen = true;
      this.window.classList.add('visible');
      this.toggleBtn.classList.add('open');
      this.input.focus();
      this.scrollToBottom();
    }

    close() {
      this.isOpen = false;
      this.window.classList.remove('visible');
      this.toggleBtn.classList.remove('open');
    }

    /* --- Messages --- */
    showWelcomeMessage() {
      const { text, suggestions } = KNOWLEDGE_BASE.welcome;
      this.addBotMessage(text, suggestions);
    }

    addBotMessage(html, suggestions = []) {
      const wrapper = this.el('div', { className: 'chatbot-msg bot' });

      const avatar = this.el('div', { className: 'chatbot-msg-avatar', innerHTML: ICONS.bot });
      const bubble = this.el('div', { className: 'chatbot-msg-bubble', innerHTML: html.replace(/\n/g, '<br>') });

      wrapper.appendChild(avatar);
      wrapper.appendChild(bubble);

      if (suggestions.length > 0) {
        const sugContainer = this.el('div', { className: 'chatbot-suggestions' });
        suggestions.forEach((sug) => {
          const chip = this.el('button', {
            className: 'chatbot-chip',
            textContent: sug.label,
          });
          chip.addEventListener('click', () => {
            this.handleQuery(sug.query, sug.label);
          });
          sugContainer.appendChild(chip);
        });
        bubble.appendChild(sugContainer);
      }

      this.messagesContainer.appendChild(wrapper);
      this.scrollToBottom();
    }

    addUserMessage(text) {
      const wrapper = this.el('div', { className: 'chatbot-msg user' });
      const avatar = this.el('div', { className: 'chatbot-msg-avatar', innerHTML: ICONS.user });
      const bubble = this.el('div', { className: 'chatbot-msg-bubble', textContent: text });

      wrapper.appendChild(avatar);
      wrapper.appendChild(bubble);
      this.messagesContainer.appendChild(wrapper);
      this.scrollToBottom();
    }

    showTypingIndicator() {
      const typing = this.el('div', {
        className: 'chatbot-typing',
        id: 'chatbot-typing',
        innerHTML: `
          <div class="chatbot-msg-avatar">${ICONS.bot}</div>
          <div class="chatbot-typing-dots">
            <span></span><span></span><span></span>
          </div>
        `,
      });
      this.messagesContainer.appendChild(typing);
      this.scrollToBottom();
    }

    removeTypingIndicator() {
      const typing = document.getElementById('chatbot-typing');
      if (typing) typing.remove();
    }

    showContactForm() {
      const formHtml = `
        <div class="chatbot-form" id="chatbot-contact-form">
          <h4>📝 Send us a message</h4>
          <div class="chatbot-form-group">
            <label for="cf-name">Your Name</label>
            <input type="text" id="cf-name" placeholder="John Doe" />
          </div>
          <div class="chatbot-form-group">
            <label for="cf-email">Email Address</label>
            <input type="email" id="cf-email" placeholder="john@example.com" />
          </div>
          <div class="chatbot-form-group">
            <label for="cf-topic">Topic</label>
            <select id="cf-topic">
              <option value="">Select a topic...</option>
              <option value="services">Services Inquiry</option>
              <option value="partnership">Partnership / Teaming</option>
              <option value="careers">Careers</option>
              <option value="program">Program Assistance</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="chatbot-form-group">
            <label for="cf-message">Message</label>
            <textarea id="cf-message" placeholder="How can we help you?"></textarea>
          </div>
          <button class="chatbot-form-submit" id="cf-submit">Send Message</button>
        </div>
      `;

      this.addBotMessage("Sure! Fill out the form below and our team will get back to you shortly.");

      const formWrapper = this.el('div', {
        className: 'chatbot-msg bot',
        style: 'max-width: 100%;',
      });
      const formBubble = this.el('div', {
        innerHTML: formHtml,
        style: 'width: 100%;',
      });
      formWrapper.appendChild(formBubble);
      this.messagesContainer.appendChild(formWrapper);
      this.scrollToBottom();

      // Form submit handler
      setTimeout(() => {
        const submitBtn = document.getElementById('cf-submit');
        if (submitBtn) {
          submitBtn.addEventListener('click', () => this.handleFormSubmit());
        }
      }, 100);
    }

    handleFormSubmit() {
      const name = document.getElementById('cf-name')?.value?.trim();
      const email = document.getElementById('cf-email')?.value?.trim();
      const topic = document.getElementById('cf-topic')?.value;
      const message = document.getElementById('cf-message')?.value?.trim();

      if (!name || !email || !message) {
        const submitBtn = document.getElementById('cf-submit');
        submitBtn.textContent = '⚠️ Please fill all required fields';
        submitBtn.style.background = 'var(--mx-red)';
        setTimeout(() => {
          submitBtn.textContent = 'Send Message';
          submitBtn.style.background = '';
        }, 2000);
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        const submitBtn = document.getElementById('cf-submit');
        submitBtn.textContent = '⚠️ Please enter a valid email';
        submitBtn.style.background = 'var(--mx-red)';
        setTimeout(() => {
          submitBtn.textContent = 'Send Message';
          submitBtn.style.background = '';
        }, 2000);
        return;
      }

      // Simulate submission
      const submitBtn = document.getElementById('cf-submit');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      setTimeout(() => {
        // Remove form
        const form = document.getElementById('chatbot-contact-form');
        if (form) form.closest('.chatbot-msg').remove();

        this.addBotMessage(
          `✅ <strong>Thank you, ${name}!</strong> Your message has been submitted successfully.\n\nOur team will review your inquiry and get back to you at <strong>${email}</strong> within 1-2 business days.\n\nIs there anything else I can help you with?`,
          [
            { label: '🏢 Our Services', query: 'services' },
            { label: '📞 Contact Info', query: 'contact' },
          ]
        );
      }, 1500);
    }

    /* --- Query Processing --- */
    handleSend() {
      const text = this.input.value.trim();
      if (!text) return;

      this.input.value = '';
      this.handleQuery(text);
    }

    handleQuery(query, displayText = null) {
      const display = displayText || query;
      this.addUserMessage(display);

      // Disable previously displayed suggestion chips
      this.messagesContainer.querySelectorAll('.chatbot-chip').forEach((chip) => {
        chip.disabled = true;
        chip.style.pointerEvents = 'none';
        chip.style.opacity = '0.5';
      });

      // Show typing
      this.showTypingIndicator();

      const delay = 600 + Math.random() * 800;
      setTimeout(() => {
        this.removeTypingIndicator();
        this.processQuery(query.toLowerCase());
      }, delay);
    }

    processQuery(query) {
      // Check for form trigger
      const formMatch = KNOWLEDGE_BASE.responses.find(
        (r) => r.response === '__FORM__' && r.keywords.some((kw) => query.includes(kw))
      );

      if (formMatch) {
        this.showContactForm();
        return;
      }

      // Score each response
      let bestMatch = null;
      let bestScore = 0;

      for (const entry of KNOWLEDGE_BASE.responses) {
        if (entry.response === '__FORM__') continue;

        let score = 0;
        for (const keyword of entry.keywords) {
          if (query === keyword) {
            score += 10; // Exact match
          } else if (query.includes(keyword)) {
            score += 5 + keyword.length; // Contains, longer = better
          } else if (keyword.includes(query) && query.length > 2) {
            score += 3; // Partial reverse match
          } else {
            // Check individual words
            const queryWords = query.split(/\s+/);
            const keywordWords = keyword.split(/\s+/);
            for (const qw of queryWords) {
              for (const kw of keywordWords) {
                if (qw.length > 2 && kw.length > 2) {
                  if (qw === kw) score += 3;
                  else if (kw.startsWith(qw) || qw.startsWith(kw)) score += 2;
                }
              }
            }
          }
        }

        if (score > bestScore) {
          bestScore = score;
          bestMatch = entry;
        }
      }

      if (bestMatch && bestScore >= 2) {
        this.addBotMessage(bestMatch.response, bestMatch.suggestions);
      } else {
        const fb = KNOWLEDGE_BASE.fallback;
        this.addBotMessage(fb.text, fb.suggestions);
      }
    }

    /* --- Utilities --- */
    scrollToBottom() {
      requestAnimationFrame(() => {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
      });
    }
  }

  /* ============================================
     Initialize on DOM Ready
     ============================================ */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new MaximusChatbot());
  } else {
    new MaximusChatbot();
  }
})();
