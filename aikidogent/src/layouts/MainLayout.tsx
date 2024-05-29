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
  pageTitle?: string;
  banner?: Banner;
  children?: React.ReactNode;
};

export const MainLayout: FC<Props> = ({ pageTitle, banner, children }) => (
  <>
    <div className="intro">
      <div
        className="banner"
        style={{
          backgroundImage: banner
            ? `url(/images/${banner.filename})`
            : 'url(/images/hp-banner.jpg)',
        }}
      >
        <Image
          src={banner ? `/images/${banner.filename}` : '/images/hp-banner.jpg'}
          alt={banner ? banner.alt : 'Aikido Go Ryu dojo'}
          width={banner ? banner.width : 1500}
          height={banner ? banner.height : 1187}
        />
      </div>
      <InfoSection />
    </div>
    <div className="main-content">
      {pageTitle ? <h1 className="page-title">{pageTitle}</h1> : null}
    </div>
  </>
);
