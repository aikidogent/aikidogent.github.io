import React, { FC } from 'react';
import Image from 'next/image';
import { InfoSection } from '@/ui/InfoSection';

type Banner = {
  filename: string;
  width: number;
  height: number;
  alt: string;
};

type Props = {
  isHomepage?: boolean;
  pageTitle?: string;
  //banner?: Banner;
  bannerId?: string;
  children?: React.ReactNode;
};

export const MainLayout: FC<Props> = ({
  isHomepage,
  pageTitle,
  bannerId,
  children,
}) => (
  <>
    <div className="intro">
      <div
        className="banner"
        style={{
          backgroundImage: bannerId
            ? `url(/images/${bannerId})` //`url(/images/${banner.filename})`
            : 'url(/images/hp-banner.jpg)',
        }}
      >
        <Image
          src={bannerId ? `/images/${bannerId}` : '/images/hp-banner.jpg'}
          alt={'Aikido Go Ryu dojo'}
          width={1500}
          height={1187}
        />
      </div>
      <InfoSection isHomepage={isHomepage} />
    </div>
    <div className={`main-content ${isHomepage ? 'home' : ''}`}>
      {pageTitle ? <h1 className="page-title">{pageTitle}</h1> : null}
      <div className="content">{children}</div>
      <footer>
        <p>&copy; 2024 - Ban Sen Juku Go Ryu</p>
      </footer>
    </div>
  </>
);
