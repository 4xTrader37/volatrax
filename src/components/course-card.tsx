import Image from 'next/image';
import Link from 'next/link';
import type { Course } from '@/lib/courses';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface CourseCardProps {
  course: Course & { image: ImagePlaceholder | undefined };
}

export default function CourseCard({ course }: CourseCardProps) {
  const { id, title, description, price, image } = course;

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
          <Badge variant={price === 'Free' ? 'default' : 'secondary'} className="text-lg font-bold">
            {typeof price === 'number' ? `PKR ${price.toLocaleString()}` : 'Free'}
          </Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/courses/${id}`}>
            View Course
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
