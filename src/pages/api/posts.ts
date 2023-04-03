import type { APIRoute } from "astro";
import type { Post } from "../../types/Post";

const posts: Post[] = [
  {
    id: 1,
    title: "The Benefits of Yoga",
    body: "Yoga has been shown to have numerous benefits for both the mind and body. Regular practice can improve flexibility, strength, and balance, while also reducing stress and anxiety. Additionally, some studies suggest that yoga may help with chronic pain and improve heart health.",
    description:
      "Learn about the many benefits of practicing yoga and how it can improve your overall health and well-being.",
  },
  {
    id: 2,
    title: "The Importance of Sleep",
    body: "Getting enough sleep is essential for our physical and mental health. Sleep allows our bodies to repair and regenerate, and it also plays a crucial role in cognitive function and emotional regulation. However, many people struggle to get enough sleep due to busy schedules or sleep disorders.",
    description:
      "Discover why getting enough sleep is so important and learn tips for improving your sleep habits.",
  },
  {
    id: 3,
    title: "The Power of Positive Thinking",
    body: "Positive thinking can have a profound impact on our lives, helping us to feel happier, more resilient, and more successful. By focusing on our strengths and achievements, and reframing negative thoughts into positive ones, we can overcome obstacles and achieve our goals.",
    description:
      "Explore the benefits of positive thinking and learn practical strategies for cultivating a positive mindset.",
  },
  {
    id: 4,
    title: "The Benefits of Meditation",
    body: "Meditation has been practiced for thousands of years, and for good reason. Research has shown that regular meditation can help reduce stress and anxiety, improve focus and concentration, and even lower blood pressure. Plus, it's a simple and accessible practice that anyone can learn!",
    description:
      "Discover the many benefits of meditation and learn how to get started with a regular practice.",
  },
];
export const get: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      posts,
    }),
    {
      status: 200,
    }
  );
};
