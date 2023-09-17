import { FC } from 'react';
import Link from 'next/link';
import { ImageComponent } from '@/components/imageComponent';
import { useRouter } from 'next/navigation'

export const Navbar: any = (props: any) => {
  const router = useRouter();

  if (!props.navbar) {
    return null;
  }

  const onMenuLinkClick = (link: string) => {
    router.push(link);
  }

  const navLinks = (props.navbar.links || []).map((el: any, index: number) => {
    const title = el.abstract?.title;
    const href = el.url;

    return (
      <span
        key={index}
        className={'c-header__nav-link c-link'}
        onClick={() => onMenuLinkClick(href)}
        style={{ color: props.website.theme.color_2 }}
      >
        {title}
      </span>
    )
  });

  const backgroundColor = props.website.theme.color_1;


  return (
    <div className='l-layout__header'>

      <header className={'c-header c-header--bg-filled'} style={backgroundColor ? { backgroundColor } : {}}>
        <div className="c-header__inner">
          <div className={'c-header__logo'}>
            <ImageComponent
              // style={{height: '100%', width: '100%', objectFit: 'contain'}}
              className="c-header__logo-img"
              data={props.navbar.logo}
              width={157}
              height={100}
            />
          </div>

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


