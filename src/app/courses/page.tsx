import CourseCard from '@/components/course-card';
import { courses, type Course } from '@/lib/courses';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Trading Courses | Volatrax',
  description: 'Browse our professional trading courses, designed for all skill levels from beginner to advanced. Start your journey to profitable trading today.',
};

async function getCourses(): Promise<(Course & { image: ImagePlaceholder | undefined })[]> {
  const imagesMap = new Map(PlaceHolderImages.map(img => [img.id, img]));
  return courses.map(course => ({
    ...course,
    image: imagesMap.get(course.imageId),
  }));
}

export default async function CoursesPage() {
  const courseData = await getCourses();
  const whatsappUrl = "https://chat.whatsapp.com/IP7JwoykWnBIjNDQjrvtPj";

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl font-headline">
          Professional Trading Courses
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Invest in your knowledge. Our courses are designed to give you a competitive edge in the markets.
        </p>
      </div>

      <section className="my-16 py-12 bg-card rounded-lg text-center">
          <h2 className="text-3xl font-bold text-primary font-headline">
            Join Our Free Signal Group
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Get access to exclusive trading signals, market analysis, and a community of traders.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Join via WhatsApp
              </Link>
            </Button>
          </div>
      </section>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {courseData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
