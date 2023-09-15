'use client'
import Link from 'next/link';

import { RichText } from '@/components/richText';

import { LinkComponent } from './linkComponent';

export const CTAComponent = ({ data, className = 'c-cta' }: any) => {
  if (!data || !data[0]) {
    return null;
  }

  const {
    _content_type_uid,
  } = data[0];

  if (_content_type_uid === 'cta') {
    return <CTA data={data} className={className} />
  }

  return null;
}

export const CTA = ({ data, className = 'c-cta' }: any) => {
  const isAuthorized = true;

  console.log('CTA', data)

  if (!data || !data[0]) {
    return null;
  }

  const {
    headline,
    headline_copy,
    link,
  }: any = data[0];

  return (
    <div className={className} data-testid="cta simple">
      <div className="c-cta__type">
        <h5 className="c-cta__title">{headline}</h5>
        <div className="c-cta__description">
          <RichText text={headline_copy} />
        </div>
      </div>
      <Link className={'c-cta__button c-button c-button--primary'} href={link.href}>
        <span className="c-button__label">{link.title}</span>
      </Link>
    </div>
  )
}
