import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { CaseStudyBody } from "@/components/sections/CaseStudyBody";
import { caseStudies } from "@/lib/data/caseStudies";

interface CaseStudyPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) return {};

  return {
    title: study.client,
    description: study.summary,
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = caseStudies.find((item) => item.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow={study.projectType} title={study.client} description={study.summary} />
      <CaseStudyBody study={study} />
    </>
  );
}
