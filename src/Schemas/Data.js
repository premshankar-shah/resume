export const Data = {
  profile: {
    name: "Premshankar Shah",
    occupation: "React Native FullStack Software Developer",
    location: "Ahmedabad, Gujarat",
    email: "shahprem2412@gmail.com",
    telephone: "+91 9824594969",
    image: "images/me.webp",
  },
  aboutMe: {
    label: "PROFILE",
    description:
      "Results-driven Software Engineer with 4+ years of experience designing and developing cross-platform mobile applications using React Native, React, Expo, and the MERN stack. Skilled in building scalable, offline-first systems, integrating secure payment gateways, and delivering apps to global audiences on the App Store, Play Store, and Adyen Store. Passionate about performance optimization and contributing to the open-source React Native ecosystem.",
  },
  skills: {
    technicalLabel: "TECHNOLOGIES",
    softLabel: "Skills",
    technicalSkills: [
      "React-native",
      "React",
      "EXPO",
      "TypeScript",
      "Nodejs",
      "MongoDB",
      "Nestjs",
      "GIT",
    ],
    softSkills: [
      "Analysis capacity",
      "Problem resolution",
      "Critical thinking",
      "Teamwork",
      "Communication",
      "Proactivity",
      "Creativity",
      "Mentoring",
    ],
  },
  socialMedia: {
    label: "SOCIAL",
    social: [
      {
        label: "Premshankar Shah",
        name: "linkedin",
        url: "https://www.linkedin.com/in/premshankar-shah",
        className: "bxl-linkedin-square",
      },
      {
        label: "Prem2412",
        name: "github",
        url: "https://github.com/premshankar-shah",
        className: "bxl-github",
      },
    ],
  },
  experience: {
    works: [
      {
        title: "Software Engineer - FullStack Developer",
        period: "January 2024 - Present",
        company: "Searce Inc",
        description: [
          "Developed a comprehensive EPOS system using React Native for the front end and Node.js for the backend, achieving 100% compatibility on Android and iOS devices.",
          "Replaced deprecated MongoDB Realm Device Sync with WatermelonDB and a custom polling-based sync engine, ensuring high reliability in low-connectivity environments.",
          "Integrated Adyen and Stripe payment gateways, optimizing transaction workflows and improving reliability.",
        ],
      },
      {
        title: "Software Engineer - Mobile App developer",
        period: "April 2022 - January 2024",
        company: "MindInventory",
        description: [
          "Architected and developed 4+ mobile applications using React Native and Expo, delivering cross-platform compatibility with high customer satisfaction.",
          "Led end-to-end app lifecycles, including 10+ updates across apps, with a 100% on-time delivery rate.",
          "Contributed to open-source React Native projects, enhancing library performance.",
        ],
      },
      {
        title: "React-Native Developer",
        period: "July. 2021 - April. 2022",
        company: "Shine InfoSoft - Technology Meets Solution",
        description: [
          "Delivered cross-platform apps using React Native and Electron, onboarding 2,500+ users post-launch.",
          "Analyzed and implemented feature requirements using React Native, JavaScript, and Firebase, reducing bug reports and improving app stability.",
        ],
      },
    ],
    academic: [
      {
        career: "Government Engineering College, Modasa",
        date: "2021",
        institution: "Bachelor of Engineering - Information Technology",
        // percent: "CPI: 7.55",
      },
    ],
    projects: [
      {
        name: "Food and Drink",
        company: "Searce Inc",
        role: "FullStack (MERN) Developer",
        framework:
          "React-native, Adyen, WatermelonDB, MongoDB, Nestjs, Thermal Printers",
        period: "Jan 2024 - Present",
        description: [
          "Designed and launched an offline-first EPOS system adopted by 500+ retailers, ensuring high reliability in low-connectivity environments with WatermelonDB and a custom polling-based sync engine.",
          "Integrated Adyen payment processing and thermal printer support, reducing transaction errors by 20%.",
          "Improved daily retail operations and boosted efficiency by 30% through a scalable, high-performance architecture.",
        ],
        link: [
          {
            android:
              "https://play.google.com/store/apps/details?id=com.app.secretworld",
          },
          { iOS: "https://apps.apple.com/us/app/secret-world/id6447253280" },
        ],
      },
      {
        name: "Tour and Travel App",
        company: "Mindinventory",
        role: "Design and development",
        framework:
          "React-native, Stripe, In-App-Purchase (IAP), Mapbox, MMKV, Redux",
        period: "2022 - 2023",
        description: [
          "Built a subscription-based travel guide app with 10,000+ active users, enabling seamless destination discovery and trip planning.",
          "Integrated Stripe, Mapbox, and In-App Purchases (IAP), increasing recurring revenue by 25%.",
          "Optimized scalability and responsiveness with Redux, cutting app load times by 15%.",
        ],
        link: [
          {
            android:
              "https://play.google.com/store/apps/details?id=com.app.secretworld",
          },
          { iOS: "https://apps.apple.com/us/app/secret-world/id6447253280" },
        ],
      },
      // {
      //   name: "Arcade App",
      //   company: "Mindinventory",
      //   role: "Design and development",
      //   framework: "Expo, Socket, Zustand, MMKV, IAP, React-native Web, Video Player",
      //   description: [
      //     "Arcade Live is a game mobile and web application(IOS/Android/WebApp) played online on real Arcade Game machines controlled remotely through video streaming via mobile and web apps.",
      //     "Users can buy credits, and choose an Arcade Game machine to start playing. Each machine required different amount of credits to play the game. User can choose from between two option to play games for as a reward: Play for Tickets & Play for Games.",
      //   ],
      //   link: [
      //     {
      //       android:
      //         "https://play.google.com/store/apps/details?id=com.arcadelive.app&hl=en_US&pli=1",
      //     },
      //     { iOS: "https://apps.apple.com/us/app/arcade-live/id6471450155" },
      //     { web:  "https://arcadelive.com/" }
      //   ],
      // },
      // {
      //   name: "Tools App",
      //   company: "Mindinventory",
      //   role: "Design and development",
      //   framework: "Return is an app-based platform facilitating trades of pant-bags. The danish pant-system has been around for many years and serves as a method to ensure recyclable bottles and cans gets recycled in a proper way.",
      //   description: [
      //     "Expo, React-navigation, React native Map, Expo push notifications, Context Api, Styled components",
      //   ],
      //   link: [
      //     {
      //       android:
      //         "https://play.google.com/store/apps/details?id=com.returndk.returnapp",
      //     },
      //     { iOS: "https://apps.apple.com/dk/app/return-return-earn/id1620342962" },
      //   ],
      // },
      // {
      //   name: "Trading App",
      //   company: "Mindinventory",
      //   role: "Design and development",
      //   framework: "React-native, Redux-thunk, Rest-API, Plaid-Api.",
      //   description: [
      //     "This app is a fintech startup that lets your child invest and trade in cryptocurrencies. The ultimate goal of the app is to help the child to understand and learn investment and trading by playing quizzes, watching video libraries, and trade by their parent's approval from each and every investment request.",
      //   ],
      //   link: [
      //     {
      //       android:
      //         "https://play.google.com/store/apps/details?id=io.trystack.Stack.android&gl=US",
      //     },
      //     { iOS: "https://apps.apple.com/US/app/id1621242994?mt=8" },
      //   ],
      // },
      // {
      //   name: "Sports and Social App",
      //   company: "Mindinventory",
      //   role: "Design and development",
      //   framework:
      //     " React-native, React-navigation, React-native Maps, Graph QL, Axios, Firebase push notifications.",
      //   description: [
      //     "Overall goal of this app is to grow and strengthen the armwrestling community. Get connected easily - find people near you, at home and when you travel!. App privacy settings can be tailored to your need and level of comfort. Choose between precise - ghost - home or private settings. Message people and make connections.",
      //   ],
      //   link: [
      //     {
      //       android:
      //         "https://play.google.com/store/apps/details?id=com.armbet.app&gl=US",
      //     },
      //     { iOS: "https://apps.apple.com/de/app/armbet/id1525205708?l=en" },
      //   ],
      // },
      {
        name: "Educational App",
        company: "Shine InfoSoft",
        role: "Design and development",
        framework:
          "React-Native, React, Electron, SQLite, Azure Services, Quill JS",
        period: "2021",
        description: [
          "Created a remote exam platform for 2,000+ students, incorporating real-time features such as face detection, screen capture, and audio recording during exams.",
          "Streamlined exam preparation with tools for detailed schedules and secure distribution of the question paper, reducing the administrative workload by 30%.",
        ],
        link: [
          {
            android:
              "https://play.google.com/store/apps/details?id=com.efhrnapp",
          },
          { iOS: "https://apps.apple.com/in/app/lm-exam-app/id1588695467" },
        ],
      },
      // {
      //   name: "Marketing Automation App",
      //   company: "Shine InfoSoft",
      //   role: "Design, Functionality and development",
      //   framework:
      //     "React-Native JS, Redux JS, Redux, React-Bottom-tab-navigation",
      //   description: [
      //     "App for both Android and IOS. Autopilot is a leading marketing automation service that makes it easy to automate communications via email notifications, such as regular email newsletters, abandoned cart emails, as well as SMS messages, and more, to help grow your business faster",
      //   ],
      //   link: [
      //     {
      //       android:
      //         "https://play.google.com/store/apps/details?id=com.autopilot",
      //     },
      //     {
      //       iOS: "https://apps.apple.com/in/app/autopilot-mobile/id1554761609",
      //     },
      //   ],
      // },
    ],
  },
};
