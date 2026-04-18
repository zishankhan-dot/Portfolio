export const profile = {
  name: "Zishan Hassan Khan",
  title: "AI, Full Stack & Software Engineer",
  location: "Dublin, Ireland",
  email: "kenzeesh@gmail.com",
  phone: "+353 083 398 7622",
  github: "https://github.com/zishankhan-dot",
  linkedin: "https://www.linkedin.com/in/zishan-hassan-khan-935568281/",
  resume: "https://zishankhan-dot.github.io/Resume/Zishan_Hassan_Khan_CV.pdf",
  tagline:
    "I build intelligent, scalable software systems across AI, cloud, full-stack development, and core software engineering.",
  summary:
    "Graduate software engineer with First-Class Honours in MSc Information Systems and BTech Computer Science with AI specialization. Experienced in AI assistants, cloud automation, secure web applications, data systems, and software engineering using Python, JavaScript, Java, C, and C++."
};

export const experience =[
    {
    role: "Python Instructor Intern",
    company: "Coding Blocks",
    period: "Dec 2023 - Jan 2024",
    points: [
      "Mentored 20+ students in Python, machine learning, and algorithmic problem-solving.",
      "Designed hands-on assessments and project briefs covering AI fundamentals and data structures.",
      "Introduced learners to generative AI, LLMs, and prompt engineering aligned with industry trends."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Hearten Infotech Pvt Ltd",
    period: "Nov 2021 - Apr 2022",
    points: [
      "Developed and maintained backend systems in Linux environments.",
      "Worked on shell scripting, ACL configuration, and process management.",
      "Designed VPN-based secure networking solutions and managed TCP/IP configurations."
    ]
  },
  {
    role: "GIS Mapping & Research Intern",
    company: "AKAM Initiative",
    period: "Jul 2022 - Aug 2022",
    points: [
      "Created detailed spatial maps using QGIS and NASA Open Data imagery.",
      "Processed spatial data to generate elevation contour maps.",
      "Conducted field validation surveys for mapping accuracy."
    ]
  }];
  
  export const projects=[
    {
    title: "AI Assistant for Dublin City Council",
    type: "AI / RAG / LLM",
    description:
      "Built a retrieval-augmented AI assistant designed to provide grounded, factual answers over public data and council meeting transcripts.",
    tech: ["Python", "RAG", "LLaMA", "LangChain", "Vector DB"],
    highlights: [
      "Designed a RAG pipeline using open-source LLMs and vector embeddings.",
      "Ingested council transcripts and public data for grounded answers.",
      "Focused on factual consistency and reduced hallucination risk."
    ],
    github: "#",
    demo: "#"
  },
  {
  title: "Concurrent Processing & Benchmarking System",
  type: "Systems Programming / Concurrency",
  description:
    "Developed a cross-language concurrency benchmarking system to analyze multithreading and multiprocessing performance across C, C++, Python, and Java under controlled environments.",
  tech: [
    "Python","C","C++","Java","Multiprocessing","Multithreading","Terraform","GitHub Actions","Ansible","Linux"
  ],
  highlights: [
    "Built multiprocessing and multithreading implementations across multiple languages.",
    "Designed a CI/CD pipeline using GitHub Actions with matrix strategy for isolated execution.",
    "Provisioned identical VMs (1 vCore, 2GB RAM) using Terraform for consistent benchmarking.",
    "Collected system-level metrics using Linux /usr/bin/time for execution and resource analysis.",
    "Compared concurrency models including OS threads and Java Virtual Threads."
  ],
  github: "https://github.com/zishankhan-dot/Multiprocess",
  demo: "#"
},
{
  title: "Secure OTP-Based End-to-End Encrypted Messaging System",
  type: "Full Stack / Security Engineering",
  description:
    "Built a secure messaging platform with OTP-based authentication, client-side RSA key generation, and end-to-end encryption ensuring only intended users can access message content.",
  tech: [
    "React",
    "Node.js",
    "Web Crypto API",
    "RSA Encryption",
    "JWT",
    "IndexedDB",
    "SMS API"
  ],
  highlights: [
    "Implemented OTP-based authentication with hashed, time-limited verification codes to prevent replay and misuse.",
    "Generated RSA key pairs on the client side, ensuring private keys never leave the user’s device.",
    "Stored private keys securely in IndexedDB, leveraging browser-isolated storage for sensitive cryptographic data.",
    "Shared only public keys with the backend, enabling secure message encryption without exposing private credentials.",
    "Encrypted each message twice (sender + receiver), ensuring both parties can securely access their chat history while maintaining confidentiality.",
    "Designed a zero-trust backend that stores only encrypted messages and public keys, with no access to plaintext data.",
    "Protected message transmission with end-to-end encryption, ensuring only intended recipients can decrypt content.",
    "Secured OTP handling by hashing values before storage and enforcing short expiration windows.",
    "Integrated SMS-based OTP delivery for secure user identification and session control.",
    "Implemented periodic polling (10s) to fetch encrypted messages while maintaining secure client-side decryption."
  ],
  github: "https://github.com/zishankhan-dot/Hashtext",
  demo: "#"
},
{
    title: "Azure Infrastructure Automation",
    type: "Cloud / DevOps",
    description:
      "Automated provisioning and configuration of cloud infrastructure using Infrastructure-as-Code and deployment automation tools.",
    tech: ["Terraform", "Ansible", "Azure", "Docker", "CI/CD"],
    highlights: [
      "Provisioned Azure virtual machines and networking from scratch.",
      "Automated server configuration and deployment workflows.",
      "Demonstrated repeatable production-style cloud delivery."
    ],
    github: "https://github.com/zishankhan-dot/Networking_dbs",
    demo: "#"
  },
  {
    title: "Cinema Booking Management System",
    type: "Full Stack / Deployment",
    description:
      "Built and deployed a full-stack cinema booking system with CRUD operations, authentication, cart flows, and Azure hosting.",
    tech: ["Node.js", "Express.js", "REST APIs", "Azure VM", "JavaScript"],
    highlights: [
      "Implemented complete booking and cart workflows.",
      "implemented user authentication and session management.",
      "implemented crud operations for movies, showtimes, and bookings.",
      "Connected frontend and backend through REST APIs.",
    ],
    github: "https://github.com/zishankhan-dot/Odeon-Cinema-Charlestown",
    demo: "#"
  }
  ];

export const education =[
{
    degree: "MSc Information Systems with Computing",
    school: "Dublin Business School, Ireland",
    result: "First-Class Honours (1.1)",
    gpa: "3.3/4.0",
    period: "Feb 2025 - Feb 2026"
  },
  {
    degree: "BTech Computer Science and Engineering (Artificial Intelligence)",
    school: "Jamia Hamdard University, Delhi, India",
    result: "First-Class (1.1)",
    gpa: "3.6/4.0",
    period: "Oct 2020 - Oct 2024"
  }
];
export const skills={
    "AI & Intelligent Systems": [
    "RAG",
    "LLMs",
    "LangChain",
    "Prompt Engineering",
    "Machine Learning"
  ],
  "Full Stack Development": [
    "React",
    "Node.js",
    "Express.js",
    "REST APIs",
    "HTML",
    "CSS",
    "JavaScript"
  ],
  "Cloud & DevOps": [
    "Azure",
    "AWS",
    "Docker",
    "Terraform",
    "Ansible",
    "CI/CD"
  ],
  "Software Engineering": [
    "C",
    "C++",
    "Java",
    "Python",
    "SQL",
    "OOP",
    "DSA",
    "Concurrency"
  ],
  "Systems & Networking": [
    "Linux",
    "Shell Scripting",
    "ACLs",
    "TCP/IP",
    "Routing",
    "User Management"
  ],
  "Data & Analytics": [
    "SQL Server",
    "ETL",
    "SSIS",
    "SSRS",
    "Tableau"
  ]
};