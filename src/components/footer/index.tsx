import Image from 'next/image';
import { FC } from 'react';
import { ImageComponent } from '../imageComponent';
import Link from 'next/link';
import classNames from 'classnames';

export const Footer: any = (props: any) => {

  if (!props.footer){
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
        <div className="c-footer__inner" style={{
          ['--footer__bi' as string]: `url(${image.image.url.toString()})`,
        }}>
          <div className="c-footer__location">
            {title}
          </div>

          {links && links[0] && <div className="c-footer__columns">
            <div className="c-footer__column-1">
              {
                links.map((link: any, index: number) => {
                  return (
                    <Link
                      key={index}
                      href={link.url}
                      className="c-footer__inner-link c-link c-link--white"
                    >{link.abstract.link_title}</Link>
                  )
                })
              }
            </div>

          </div>}
        </div>
        <div className="c-footer__rights">
        </div>
      </div>
    </footer>
  )
}
