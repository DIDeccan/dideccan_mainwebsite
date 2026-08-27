import studentBook from "../assets/images/studentbook.png";
import studentMock from "../assets/images/Educationimage1.png";
import happyRide from "../assets/images/brands/happy-ride.png";
import happyMock from "../assets/images/Happyrideimage.png";
import businessGuider from "../assets/images/bannerimage3.png";
import businessCover from "../assets/images/bannerimage1.png";
import tirumalaYatra from "../assets/images/brands/tirumala-yatra.png";
import myFinaz from "../assets/images/brands/my-finaz.png";
import financeCover from "../assets/images/bannerimage2.png";
import mobotos from "../assets/images/brands/mobotos.png";
import mobotosCover from "../assets/images/Happyrideimage1.png";

const products = [
  {
    id: "student-book",
    slug: "student-book",
    path: "/StudentBook",
    route: "/StudentBook",
    name: "Student Book",
    category: "Education platform",
    industry: "EdTech",
    layout: "featured",
    tagline: "Learning that fits every student, on every device.",
    summary:
      "An interactive learning platform for Classes 6–10, with structured lessons, practice, and progress tracking.",
    description:
      "Student Book is a modern learning application designed to make education more accessible, engaging, and future-ready. Students learn at their own pace with curriculum-aligned lessons, quizzes, and clear progress insights — anytime, anywhere.",
    accent: "#2563EB",
    lightAccent: "#EFF6FF",
    logo: studentBook,
    cover: studentMock,
    gallery: [studentMock],
    problem: "Students needed structured, device-ready learning beyond the classroom.",
    solution: "A curriculum-aligned platform with lessons, quizzes, and parent visibility.",
    result: "Self-paced learning for Classes 6–10 on web and mobile.",
    platforms: ["Web", "iOS", "Android"],
    tech: ["React", "React Native", "Python", "PostgreSQL"],
    capabilities: [
      "Curriculum-aligned lessons",
      "Chapter-wise assessments",
      "Parent and student dashboards",
      "Self-paced video learning",
      "Multi-device access",
    ],
    impact: [
      "Self-paced learning for Classes 6–10",
      "Progress visibility for students and parents",
      "A consistent experience across web and mobile",
    ],
    features: [
      {
        icon: "book",
        title: "Classes 6–10",
        description: "Curriculum-aligned lessons covering core subjects with a clear learning path.",
      },
      {
        icon: "video",
        title: "Video lessons",
        description: "Self-paced video and interactive content that students can revisit anytime.",
      },
      {
        icon: "check",
        title: "Quizzes & practice",
        description: "Chapter-wise quizzes and tests that reinforce understanding and close gaps.",
      },
      {
        icon: "users",
        title: "Parent dashboard",
        description: "Progress insights for students and parents, without extra complexity.",
      },
      {
        icon: "phone",
        title: "Mobile + Web",
        description: "A responsive experience designed for classrooms, homes, and on-the-go study.",
      },
    ],
  },
  {
    id: "happy-ride",
    slug: "happy-ride",
    path: "/HappyRide",
    route: "/HappyRide",
    name: "Happy Ride",
    category: "Mobility platform",
    industry: "Transportation",
    layout: "visual",
    tagline: "Safe, affordable rides whenever you need them.",
    summary:
      "A ride-booking platform connecting passengers with trusted drivers for daily commutes, airport trips, and more.",
    description:
      "Happy Ride is a mobility platform built for comfort and trust. Book bikes, cabs, or autos quickly, travel with verified drivers, and enjoy a smooth experience for city rides, airport transfers, and outstation journeys.",
    accent: "#06B6D4",
    lightAccent: "#ECFEFF",
    logo: happyRide,
    cover: happyMock,
    gallery: [happyMock],
    problem: "Cities needed a reliable, affordable way to move people safely.",
    solution: "A booking platform with verified drivers, live tracking, and digital payments.",
    result: "Everyday mobility with safety, loyalty, and fair pricing at the core.",
    platforms: ["Mobile", "Web", "Operations"],
    tech: ["React Native", "Node.js", "WebSockets", "Firebase", "Razorpay"],
    capabilities: [
      "Bike, cab, and auto booking",
      "Driver management",
      "Real-time tracking",
      "Digital payments",
      "Loyalty and promotions",
    ],
    impact: [
      "One booking flow for bikes, cabs, and autos",
      "Live trip visibility for riders and operations",
      "Digital payments and loyalty built into the ride",
    ],
    features: [
      {
        icon: "nav",
        title: "Multi-mode booking",
        description: "Bike, cab, and auto rides for city travel, airports, and outstation trips.",
      },
      {
        icon: "shield",
        title: "Safety first",
        description: "Verified drivers and safety-led flows designed for everyday trust.",
      },
      {
        icon: "radio",
        title: "Real-time tracking",
        description: "Live trip visibility for riders and operations teams.",
      },
      {
        icon: "card",
        title: "Digital payments",
        description: "Clean checkout with digital payments built for speed and reliability.",
      },
      {
        icon: "gift",
        title: "Loyalty rewards",
        description: "Promo benefits and repeat-ride rewards that keep travel affordable.",
      },
    ],
  },
  {
    id: "business-guider",
    slug: "business-guider",
    path: "/BusinessGuider",
    route: "/BusinessGuider",
    name: "Business Guider",
    category: "Entrepreneurship platform",
    industry: "Startups",
    layout: "text",
    tagline: "Turn a strong idea into a real venture.",
    summary:
      "An idea-sharing platform that helps aspiring entrepreneurs discover practical, in-demand business opportunities.",
    description:
      "Business Guider presents innovative, trending, and practical business ideas for first-time founders. It is built to help people take a confident first step — with market-aware concepts and guidance that makes starting feel achievable.",
    accent: "#8B5CF6",
    lightAccent: "#F5F3FF",
    logo: businessGuider,
    cover: businessCover,
    gallery: [],
    problem: "First-time founders struggled to find practical, market-aware ideas.",
    solution: "A guided platform of curated opportunities and next-step planning.",
    result: "A homegrown companion for Indian entrepreneurs moving from idea to action.",
    platforms: ["Web"],
    tech: ["React", "Python", "PostgreSQL"],
    capabilities: [
      "Curated business ideas",
      "Market-aware insights",
      "Entrepreneur guidance",
      "Opportunity discovery",
      "Planning next steps",
    ],
    impact: [
      "A focused place to discover viable business ideas",
      "Guidance built for first-time Indian founders",
      "A clearer path from idea to first action",
    ],
    features: [
      {
        icon: "bulb",
        title: "Business ideas",
        description: "Curated, in-demand concepts chosen for real-world viability.",
      },
      {
        icon: "chart",
        title: "Market insights",
        description: "Context that helps founders understand demand before they commit.",
      },
      {
        icon: "briefcase",
        title: "Entrepreneur guidance",
        description: "Practical direction for first-time founders, not generic theory.",
      },
      {
        icon: "map",
        title: "Business planning",
        description: "Clear next steps from idea to a venture people can actually start.",
      },
      {
        icon: "search",
        title: "Opportunity discovery",
        description: "A focused way to explore ideas matched to Indian market realities.",
      },
    ],
  },
  {
    id: "tirumala-yatra",
    slug: "tirumala-yatra",
    path: "/TirumalaYatra",
    route: "/TirumalaYatra",
    name: "Tirumala Yatra",
    category: "Travel platform",
    industry: "Travel & Faith",
    layout: "visual",
    tagline: "A digital companion for sacred journeys.",
    summary:
      "A pilgrimage platform that helps devotees plan Tirumala yatras with clarity, care, and spiritual focus.",
    description:
      "Tirumala Yatra is built for devotees who want a calm, reliable way to plan their journey to Tirumala. From yatra guidance and temple information to travel support, the experience is designed to feel respectful, premium, and easy to follow.",
    accent: "#F59E0B",
    lightAccent: "#FFF7ED",
    logo: tirumalaYatra,
    cover: null,
    gallery: [],
    problem: "Pilgrims needed a respectful, reliable way to plan a complex journey.",
    solution: "A digital companion for darshan information, travel, stay, and family planning.",
    result: "A calm planning experience for families and first-time devotees.",
    platforms: ["Web", "Mobile"],
    tech: ["React", "Python", "Firebase"],
    capabilities: [
      "Yatra planning",
      "Darshan information",
      "Travel assistance",
      "Stay guidance",
      "Family-ready itineraries",
    ],
    impact: [
      "Clear yatra planning for first-time devotees",
      "Darshan and travel information in one place",
      "A calmer experience for families travelling together",
    ],
    features: [
      {
        icon: "map",
        title: "Yatra planning",
        description: "A clear, respectful path through the journey — without noise.",
      },
      {
        icon: "info",
        title: "Darshan information",
        description: "Temple and darshan guidance presented with care and accuracy.",
      },
      {
        icon: "nav",
        title: "Travel support",
        description: "Help with movement to and from Tirumala, designed for families.",
      },
      {
        icon: "home",
        title: "Stay assistance",
        description: "Practical stay information so devotees can focus on the journey.",
      },
      {
        icon: "heart",
        title: "Family planning",
        description: "Built for first-time pilgrims and families travelling together.",
      },
    ],
  },
  {
    id: "my-finaz",
    slug: "my-finaz",
    path: "/MyFinaz",
    route: "/MyFinaz",
    name: "My Finaz",
    category: "Financial platform",
    industry: "FinTech",
    layout: "horizontal",
    tagline: "Clear money tools for everyday financial confidence.",
    summary:
      "A simple finance product for tracking spending, building budgets, and understanding personal money habits.",
    description:
      "My Finaz helps individuals and small businesses see their money clearly. Track expenses, set budgets, and get practical insights without complexity — a trustworthy finance companion with a clean, modern interface.",
    accent: "#10B981",
    lightAccent: "#ECFDF5",
    logo: myFinaz,
    cover: financeCover,
    gallery: [],
    problem: "People needed money tools that were clear, not cluttered with jargon.",
    solution: "Expense tracking, budgets, and insights designed for everyday use.",
    result: "Financial confidence for individuals and small businesses.",
    platforms: ["Web", "Mobile"],
    tech: ["React", "Python", "PostgreSQL"],
    capabilities: [
      "Expense tracking",
      "Budget management",
      "Financial insights",
      "Small-business finance",
      "Everyday usability",
    ],
    impact: [
      "A clearer view of everyday spending",
      "Budgets that are simple to follow",
      "Finance tools for individuals and small businesses",
    ],
    features: [
      {
        icon: "card",
        title: "Expense tracking",
        description: "See where money goes with a clean, trustworthy ledger.",
      },
      {
        icon: "pie",
        title: "Budget management",
        description: "Set budgets that are simple to follow and easy to adjust.",
      },
      {
        icon: "chart",
        title: "Financial insights",
        description: "Practical patterns without the noise of a trading app.",
      },
      {
        icon: "briefcase",
        title: "Business finance",
        description: "Designed for individuals and small businesses who need clarity.",
      },
      {
        icon: "shield",
        title: "Trust by design",
        description: "A calm interface that treats money as something to understand, not chase.",
      },
    ],
  },
  {
    id: "mobotos",
    slug: "mobotos",
    path: "/Mobotos",
    route: "/Mobotos",
    name: "MOBOTOS",
    category: "Logistics platform",
    industry: "Supply Chain",
    layout: "compact",
    tagline: "Smart movement for modern logistics.",
    summary:
      "A logistics and last-mile delivery platform that keeps goods moving with speed, visibility, and care.",
    description:
      "MOBOTOS is a mobility-and-delivery product built around reliable last-mile operations. From pickup to drop, it helps businesses and customers move packages with a friendly brand, clear tracking, and an operations-ready workflow.",
    accent: "#0F766E",
    lightAccent: "#F0FDFA",
    logo: mobotos,
    cover: mobotosCover,
    gallery: [],
    problem: "Local businesses needed last-mile movement with visibility, not guesswork.",
    solution: "Fleet-friendly delivery workflows with tracking from pickup to drop.",
    result: "Faster, clearer logistics for city-scale demand.",
    platforms: ["Operations", "Mobile", "Web"],
    tech: ["React", "Node.js", "WebSockets", "AWS"],
    capabilities: [
      "Delivery management",
      "Fleet management",
      "Live tracking",
      "Driver operations",
      "Last-mile logistics",
    ],
    impact: [
      "Pickup-to-drop visibility for teams and customers",
      "Operations-ready workflows for drivers and dispatch",
      "Last-mile logistics built to grow with demand",
    ],
    features: [
      {
        icon: "package",
        title: "Delivery management",
        description: "Pickup, routing, and drop-off in one operations-ready flow.",
      },
      {
        icon: "truck",
        title: "Fleet management",
        description: "A workflow built for drivers, dispatch, and growing demand.",
      },
      {
        icon: "radio",
        title: "Live tracking",
        description: "Visibility from dispatch to doorstep for teams and customers.",
      },
      {
        icon: "users",
        title: "Driver operations",
        description: "Tools that keep people and packages moving without friction.",
      },
      {
        icon: "map",
        title: "Last-mile logistics",
        description: "Built to scale from local routes to city-wide delivery.",
      },
    ],
  },
];

export default products;
