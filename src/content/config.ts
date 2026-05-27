import { defineCollection, z } from 'astro:content';

const kennisbank = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('Theo Rolvink'),
    focusKeyword: z.string(),
    category: z.enum(['proces', 'belasting', 'markt', 'modelgids']),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

const modellen = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    brand: z.enum(['BMW', 'Mercedes-Benz', 'Audi', 'Porsche']),
    modelCode: z.string(),
    yearStart: z.number(),
    yearEnd: z.number().optional(),
    bodyType: z.string(),
    sourceMarket: z.array(z.enum(['Europa', 'Japan'])),
    coreModel: z.boolean().default(false),
    sweetSpot: z.string().optional(),
    whyInteresting: z.string(),
    risks: z.string().optional(),
    typicalLandedCost: z.string().optional(),
    image: z.string().optional(),
  }),
});

const faq = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    market: z.enum(['Duitsland', 'Japan', 'algemeen']),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
  }),
});

export const collections = { kennisbank, modellen, faq };
