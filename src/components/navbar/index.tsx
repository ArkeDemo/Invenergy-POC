import { FC } from 'react';
import Link from 'next/link';
import { ImageComponent } from '@/components/imageComponent';
import { useRouter } from 'next/navigation'

export const Navbar: FC = (props: any) => {
  const router = useRouter();

  const onMenuLinkClick = (link: string) => {
    router.push(link);
  }

  const navLinks = props.links.map((el: any, index: number) => {
    const title = el.abstract?.title;
    const href = el.url;

    return (
      <span
        key={index}
        className={'c-header__nav-link c-link'}
        onClick={() => onMenuLinkClick(href)}
      >
        {title}
      </span>
    )
  });

  return (
    <div className='l-layout__header'>

      <header className={'c-header c-header--bg-filled'}>
        <div className="c-header__inner">
          <div className={'c-header__logo'}>
            {props.headline}
          </div>
          <Link className={'c-header__logo c-header__logo--unauth'} href={'/'}>
            <div>
              <ImageComponent
                className="c-header__logo-img"
                data={props.website.logo}
                width={157}
                height={100}
              />
            </div>
          </Link>

          <div className={'c-header__nav c-header__nav--unauth'}>

            <div className="c-header__main-nav-wrapper">
              <div className="c-header__main-nav">
                <>
                  {navLinks}
                </>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}


