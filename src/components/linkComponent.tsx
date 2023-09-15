import Link from 'next/link';

export const LinkComponent = ({ children, link, titleProp = 'title', ...props }: any) => {
  if (!link) {
    return null
  }

  const isSportyHq = link?._content_type_uid === 'sportyhq_page';

  if (!link.url) {
    return null
  }

  

  const isExternalPage = link?._content_type_uid === 'external_page';
  const isOldApp = link?.url.includes('/app');
  const shouldOpenNewTab = isExternalPage && !isOldApp;

  return (
    <Link
      href={link.url}
      {...props}
      target={shouldOpenNewTab ? '_blank' : '_self'}
    >{children
        ? children
        : link.abstract && link.abstract[titleProp]
      }
    </Link>
  )
}
