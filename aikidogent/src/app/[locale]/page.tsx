import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { SupportedLocale } from '@/features/i18n';
import { NewsOverview } from '@/features/news';
import { MainLayout } from '@/layouts';

type Props = {
  params: {
    locale: SupportedLocale;
  };
};

const Home: FC<Props> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations('homepage');

  return (
    <MainLayout
      banner={{
        filename: 'hp-banner.jpg',
        width: 1500,
        height: 1187,
        alt: 'Go Ryu dojo',
      }}
      isHomepage
    >
      <div className="hp-teasers">
        <a className="teaser" href="/instappen-kan-op-elk-moment.html">
          <div
            className="image"
            style={{ backgroundImage: 'url(/assets/image_02.jpg)' }}
          />
          <div className="content">
            <h3>Instappen kan op elk moment</h3>
            <p>
              Heb je zin om te proeven van een authentieke Japanse krijgskunst?
              De beste manier om Aikido te ontdekken, is mee op de mat stappen.
              Nieuwkomers zijn op ieder moment in het seizoen van harte welkom.
            </p>
          </div>
          <div className="more-link">Lees meer</div>
        </a>
        <a
          className="teaser"
          href="/nieuws/tomita-sensei-essentie-van-aikido.html"
        >
          <div
            className="image"
            style={{
              backgroundImage: 'url(/assets/tomita_essentie_aikido.jpg)',
            }}
          />
          <div className="content">
            <h3>Tomita Sensei over de essentie van Aikido</h3>
            <p>
              Tomita Sensei heeft het in een reeks video's over de essentie van
              Aikido.
            </p>
          </div>
          <div className="more-link">Lees meer</div>
        </a>
      </div>
      <NewsOverview />
    </MainLayout>
  );
};

export default Home;
