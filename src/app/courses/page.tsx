import CourseCard from '@/components/course-card';
import { courses, type Course } from '@/lib/courses';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trading Courses | Volatrax',
  description: 'Browse our professional trading courses, designed for all skill levels from beginner to advanced. Start your journey to profitable trading today.',
};

// This function simulates fetching data from Firestore.
async function getCourses(): Promise<(Course & { image: ImagePlaceholder | undefined })[]> {
  const imagesMap = new Map(PlaceHolderImages.map(img => [img.id, img]));
  return courses.map(course => ({
    ...course,
    image: imagesMap.get(course.imageId),
  }));
}

export default async function CoursesPage() {
  const courseData = await getCourses();

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

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {courseData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
