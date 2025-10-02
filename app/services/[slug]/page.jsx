import ServicePageClient from './ServicePageClient';
import serviceDetails from '@/public/data/pageInfo';

export function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = serviceDetails.find((item) => item.slug === slug);

  return <ServicePageClient service={service} slug={slug} />;
}
