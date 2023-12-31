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

  const {
    theme,
  } = props.website;

  const { color_1, color_2, background_color, primary_color, secondary_color } = theme;

  console.log('Footer', props)

  const logoCl = classNames(
    'c-footer__logo',
    'c-footer__logo--unauth'
  );

  return (
    <footer className="l-layout__footer">
      <div className="c-footer">
        <div className="c-footer__inner"
          style={{ backgroundColor: primary_color, color: secondary_color, height: '15rem' }}
        >
          <div className="c-footer__location" style={{display: 'flex'}}>
            {
                (links || []).map((link: any, index: number) => {
                  return (
                    <Link
                      key={index}
                      href={link.url}
                      className="c-footer__inner-link c-link"
                      style={{ color: secondary_color, padding: '2rem' }}
                    >{link.abstract.link_title}</Link>
                  )
                })
              }
          </div>
        </div>
      </div>
    </footer>
  )
}
