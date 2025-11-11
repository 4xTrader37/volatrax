import { courses, type Course } from '@/lib/courses';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import ContactWhatsappButton from '@/components/contact-whatsapp-button';
import type { Metadata, ResolvingMetadata } from 'next';
import PaymentHandler from '@/components/payment-handler';

type Props = {
  params: { courseId: string }
}

async function getCourse(courseId: string): Promise<(Course & { image: ImagePlaceholder | undefined }) | undefined> {
  const course = courses.find(c => c.id === courseId);
  if (!course) {
    return undefined;
  }
  const imagesMap = new Map(PlaceHolderImages.map(img => [img.id, img]));
  return {
    ...course,
    image: imagesMap.get(course.imageId),
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const course = await getCourse(params.courseId)

  if (!course) {
    return {
      title: 'Course Not Found',
    }
  }
 
  return {
    title: `${course.title} | Volatrax`,
    description: course.description,
  }
}

export default async function CourseDetailsPage({ params }: Props) {
  const course = await getCourse(params.courseId);

  if (!course) {
    notFound();
  }

  const isPaidCourse = typeof course.price === 'number' && course.price > 0;
  const phoneNumber = "+923451811267";

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
            {course.image ? (
            <Image
                src={course.image.imageUrl}
                alt={course.image.description}
                data-ai-hint={course.image.imageHint}
                fill
                className="object-cover"
            />
            ) : (
            <div className="h-full w-full bg-muted"></div>
            )}
        </div>
        <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary font-headline">
                {course.title}
            </h1>
            <div className="mt-4">
                <Badge variant={course.price === 'Free' ? 'default' : 'secondary'} className="text-lg font-bold">
                    {typeof course.price === 'number' ? `PKR ${course.price.toLocaleString()}` : 'Free'}
                </Badge>
            </div>
            <p className="mt-6 text-lg leading-7 text-muted-foreground">
                {course.longDescription}
            </p>
            {!isPaidCourse && (
              <div className="mt-8">
                  <ContactWhatsappButton courseTitle={course.title} phoneNumber={phoneNumber} />
              </div>
            )}
        </div>
      </div>
      {isPaidCourse && (
        <PaymentHandler courseTitle={course.title} phoneNumber={phoneNumber} price={course.price as number} />
      )}
    </div>
  );
}

export async function generateStaticParams() {
    return courses.map((course) => ({
      courseId: course.id,
    }))
}
