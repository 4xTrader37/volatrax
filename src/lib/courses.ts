export type Course = {
  id: string;
  title: string;
  description: string;
  price: number;
  imageId: string;
};

export const courses: Course[] = [
  {
    id: 'course-1',
    title: 'Beginner Forex Mastery',
    description: 'Learn the fundamentals of Forex trading, from terminology to placing your first trade. Perfect for absolute beginners.',
    price: 49.99,
    imageId: 'course-beginner',
  },
  {
    id: 'course-2',
    title: 'Advanced Technical Analysis',
    description: 'Dive deep into chart patterns, indicators, and advanced strategies to predict market movements with higher accuracy.',
    price: 99.99,
    imageId: 'course-advanced',
  },
  {
    id: 'course-3',
    title: 'Risk Management & Psychology',
    description: 'Master the most critical aspects of trading: protecting your capital and developing a winning mindset.',
    price: 79.99,
    imageId: 'course-risk',
  },
  {
    id: 'course-4',
    title: 'Smart Money Concepts (SMC)',
    description: 'Trade like the institutions. Understand liquidity, order blocks, and market structure to gain a significant edge.',
    price: 149.99,
    imageId: 'course-smc',
  },
];
