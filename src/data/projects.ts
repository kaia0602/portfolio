type Project = {
  id: string;
  title: string;
  tagline: string;
  period?: string; 
  background?: string;
  goal?: string;
  description: string[];
  stack: string[];
  image: string;      
  previews?: string[]; 
  link?: string;
  repo?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "fitple",
    title: "Fitple",
    tagline: "청년들을 위한 정보 제공 플랫폼",
    period: "2025.07 ~ 2025.08",
    background: "청년층에게 일자리·주거·정책 정보를 한 곳에서 제공함으로 청년층의 문제를 해소",
    goal: "사용자가 맞춤형으로 청년 정책 및 주거/일자리 정보를 쉽게 탐색하도록 지원",
    description:
      ["일자리, 주거지, 정책, 지역 인프라 정보를 통합적으로 제공", 
        "사용자의 맞춤 필터링을 통한 맞춤형 정보를 제공",
        "스크립한 정보 바탕으로 순위 별 추천 서비스"
      ],

    stack: ["Java ", "JSP", "Spring Framework", "MariaDB","Tomcat ", "AWS"],
    image: "/images/fitple/1.png",  
    previews: [
      "/images/fitple/2.png",
      "/images/fitple/3.png",
      "/images/fitple/4.png",
      "/images/fitple/5.png",
      "/images/fitple/6.png",
      "/images/fitple/7.png",
      "/images/fitple/8.png",
    ],
    repo: "https://github.com/binkim00/250702_Fitple.git",
    featured: true,
  },
  {
    id: "rentex",
    title: "Rentex",
    tagline: " ERP-lite 스타일 스마트 웹 시스템 ",
    period: "2025.08 ~ 2025.09",
    background: "B2C 렌탈 서비스의 관리 효율성을 높이기 위해 개발",
    description:
      ["SpringBoot + React 기반 스마트 렌탈관리 플렛폼",
        "사용자, 관리자, 업체가 함께 사용하는 자동화 시스템",
        "대여요청부터 승인, 반납, 이력, 정산, 벌점 통합 관리를 포함한 운영 시스템"
      ],
    stack: ["Java", "React", "Spring Framework", "MariaDB", "Tomcat", "AWS"],
    image: "/images/rentex/1.png", 
    previews: [
      "/images/rentex/2.png",
      "/images/rentex/3.png",
      "/images/rentex/4.png",
      "/images/rentex/5.png",
    ],
    repo: "https://github.com/kaia0602/rentex.git",
    featured: true,
  },
   {
    id: "portfolio",
    title: "Personal Portfolio",
    tagline: "개인 포트폴리오 웹사이트",
    period: "2025.09 ~ ",
    description: [
      "React + TypeScript 기반으로 개발",
      "다크/라이트 테마 전환, 반응형 레이아웃 지원",
      "자기소개/스킬/프로젝트/ 등 구조 설계",
      "개성을 살려 UI / UX 디자인 (PC, Mobile)"
    ],
    stack: ["React", "TypeScript", "Styled-components", "Framer Motion", "Vite"],
    image: "/images/portfolio/1.png", 
    repo: "https://github.com/kaia0602/my-portfolio",
    // link: "https://your-portfolio-domain.com", 
    featured: true,
  },
];

export default projects;
