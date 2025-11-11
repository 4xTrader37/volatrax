import Image from 'next/image';
import type { Course } from '@/lib/courses';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';
import ContactWhatsappButton from './contact-whatsapp-button';

interface CourseCardProps {
  course: Course & { image: ImagePlaceholder | undefined };
}

export default function CourseCard({ course }: CourseCardProps) {
  const { title, description, price, image } = course;

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-xl">
      <div className="relative h-60 w-full">
        {image ? (
          <Image
            src={image.imageUrl}
            alt={image.description}
            data-ai-hint={image.imageHint}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-muted"></div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-headline">{title}</CardTitle>
        <CardDescription className="flex-grow pt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-lg font-bold text-primary">
            ${price.toFixed(2)}
          </Badge>
        </div>
        <div className="mt-6 bg-accent/10 p-4 rounded-md border-l-4 border-accent">
            <div className="flex">
                <div className="flex-shrink-0">
                    <Award className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <div className="ml-3">
                    <p className="text-sm text-accent-foreground">
                        Complete the course and pass the final test to receive a <span className="font-bold">50% refund</span> of your course fee.
                    </p>
                </div>
            </div>
        </div>
      </CardContent>
      <CardFooter>
        <ContactWhatsappButton courseTitle={title} phoneNumber="+923451811267" />
      </CardFooter>
    </Card>
  );
}
