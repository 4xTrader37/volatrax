export type Course = {
  id: string;
  title: string;
  description: string;
  price: number | 'Free';
  imageId: string;
  longDescription: string;
};

export const courses: Course[] = [
  {
    id: 'synthetic-indices-trading-course-for-beginners',
    title: 'Synthetic Indices Trading course for beginners',
    description: 'A comprehensive, free course designed to introduce beginners to the world of synthetic indices trading.',
    price: 'Free',
    imageId: 'course-synthetic-indices',
    longDescription: 'This course is the perfect starting point for anyone new to trading synthetic indices. We will cover all the fundamental concepts, including what synthetic indices are, how they work, and the basic strategies you need to get started. Our step-by-step lessons will guide you through setting up your trading platform, understanding market movements, and managing your risk effectively. By the end of this course, you will have the confidence and knowledge to place your first trades and begin your journey towards becoming a successful trader.',
  },
  {
    id: 'how-to-analyze-boom-1000-crash-1000-market',
    title: 'How to Analyze Boom 1000, Crash 1000 Market',
    description: 'In this course, you will learn how to completely analyze the Boom 1000 and Crash 1000 markets.',
    price: 100,
    imageId: 'course-boom-crash',
    longDescription: 'This course provides a complete guide to analyzing the Boom 1000 and Crash 1000 markets. You will learn the specific strategies and techniques required to understand the unique behavior of these synthetic indices. We will cover technical analysis, price action, and risk management tailored for Boom and Crash, enabling you to make more informed trading decisions.',
  },
];
