import type { ISortedMessage } from "../types/message.type";

const MESSAGES: ISortedMessage[] = [
  {
    date: "2025-11-24",
    messages: [
      {
        id: 1,
        username: "alex_j",
        content: "Hey, what’s up? Just finished working on a new React component."
      },
      {
        id: 2,
        username: "maria_s",
        content: "Good morning! Anyone wants to grab a coffee later?"
      },
      {
        id: 3,
        username: "ionel_m",
        content: "Bro, check your inbox, I sent you the updated design."
      }
    ]
  },
  {
    date: "2025-11-25",
    messages: [
      {
        id: 4,
        username: "roxana_d",
        content: "Just deployed my project! Finally works without errors 🎉"
      },
      {
        id: 5,
        username: "victor_t",
        content: "Has anyone tried the new Next.js caching system? It's so fast."
      },
      {
        id: 6,
        username: "laura_p",
        content: "I'm thinking about starting a new book today. Any suggestions?"
      },
      {
        id: 7,
        username: "dan_p",
        content: "I found a great API for weather data. Could be useful for a side project."
      }
    ]
  },
  {
    date: "2025-11-26",
    messages: [
      {
        id: 8,
        username: "elena_k",
        content: "Learning TypeScript today. It's actually not that scary 😄"
      },
      {
        id: 9,
        username: "theo_b",
        content: "Just finished my workout. Time to get back to coding."
      },
      {
        id: 10,
        username: "karen_l",
        content: "I'm testing a new UI design, tell me what you think."
      },
      {
        id: 11,
        username: "alex_j",
        content: "Anyone online? I need help debugging a weird layout issue."
      }
    ]
  }
];

export default MESSAGES;
