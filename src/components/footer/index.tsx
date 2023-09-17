import Image from 'next/image';
import { FC } from 'react';
import { ImageComponent } from '../imageComponent';
import Link from 'next/link';
import classNames from 'classnames';

export const Footer: any = (props: any) => {

  if (!props.footer) {
    return null;
  }

  const {
    title,
    image,
    links = [],
    headline,
  } = props.footer;

  console.log('Footer', props)

  const logoCl = classNames(
    'c-footer__logo',
    'c-footer__logo--unauth'
  );

  return (
    <footer className="l-layout__footer">
      <div className="c-footer">
        <div className="c-footer__inner" >
          <div className="c-footer__location">
            {headline}
            <div className="c-footer__rights">
          {
            (links || []).map((link: any, index: number) => {
              return (
                <Link
                  key={index}
                  href={link.url}
                  className="c-footer__inner-link c-link"
                >{link.abstract.link_title}</Link>
              )
            })
          }
        </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
