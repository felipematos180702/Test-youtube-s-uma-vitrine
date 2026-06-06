/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TestimonialSlide {
  id: string;
  type: 'image' | 'text';
  src?: string;
  alt?: string;
  author?: string;
  role?: string;
  content?: string;
  rating?: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BenefitPillar {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface SaleNotification {
  id: string;
  name: string;
  location: string;
  timeAgo: string;
  product: string;
}
