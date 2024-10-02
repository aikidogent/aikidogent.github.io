import React, { FC } from 'react';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { getBasicPage } from '@/features/basic-pages';
import { SupportedLocale } from '@/features/i18n';
import { MainLayout } from '@/layouts';
import { preProcessContent } from '@/utils';

type Props = {
  params: {
    locale: SupportedLocale;
  };
};

const Page: FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const data = await getBasicPage(200, locale);

  return (
    <MainLayout pageTitle={data.title} bannerId={data.image_id}>
      <div
        dangerouslySetInnerHTML={{ __html: preProcessContent(data.content) }}
      />
      <div className="video-playlist">
        <div>
          <a
            href="https://www.youtube.com/watch?v=-OEyBtNRXMk&amp;ab_channel=BanSenJukuAikido"
            target="_blank"
          >
            <div
              className="image"
              style={{ backgroundImage: 'url(/images/videos/essence_1.webp)' }}
            ></div>
            <div className="title">1 - Opening Class</div>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=ODUzoUnP52g&amp;ab_channel=BanSenJukuAikido"
            target="_blank"
          >
            <div
              className="image"
              style={{ backgroundImage: 'url(/images/videos/essence_2.webp)' }}
            ></div>
            <div className="title">2 - The Fan</div>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=On-1lyy3u4A&amp;ab_channel=BanSenJukuAikido"
            target="_blank"
          >
            <div
              className="image"
              style={{ backgroundImage: 'url(/images/videos/essence_3.webp)' }}
            ></div>
            <div className="title">3 - Balance</div>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=RKwKYe9MeUc&amp;ab_channel=BanSenJukuAikido"
            target="_blank"
          >
            <div
              className="image"
              style={{ backgroundImage: 'url(/images/videos/essence_4.webp)' }}
            ></div>
            <div className="title">4 - Welcome</div>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=Dppwzuvjyak&amp;ab_channel=BanSenJukuAikido"
            target="_blank"
          >
            <div
              className="image"
              style={{ backgroundImage: 'url(/images/videos/essence_5.webp)' }}
            ></div>
            <div className="title">5 - Focus</div>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=ibM7zPp5lGc&amp;ab_channel=BanSenJukuAikido"
            target="_blank"
          >
            <div
              className="image"
              style={{ backgroundImage: 'url(/images/videos/essence_6.webp)' }}
            ></div>
            <div className="title">6 - Gear</div>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=L-xiGtGUC3Q&amp;ab_channel=BanSenJukuAikido"
            target="_blank"
          >
            <div
              className="image"
              style={{ backgroundImage: 'url(/images/videos/essence_7.webp)' }}
            ></div>
            <div className="title">7 - One line</div>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=9OojL_4sSYY&amp;ab_channel=BanSenJukuAikido"
            target="_blank"
          >
            <div
              className="image"
              style={{ backgroundImage: 'url(/images/videos/essence_8.webp)' }}
            ></div>
            <div className="title">8 - Ikkyo</div>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=7byfCRvzlWI&amp;ab_channel=BanSenJukuAikido"
            target="_blank"
          >
            <div
              className="image"
              style={{ backgroundImage: 'url(/images/videos/essence_9.webp)' }}
            ></div>
            <div className="title">9 - Elbow</div>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=DDtS2Wqe49w&amp;ab_channel=BanSenJukuAikido"
            target="_blank"
          >
            <div
              className="image"
              style={{ backgroundImage: 'url(/images/videos/essence_10.webp)' }}
            ></div>
            <div className="title">10 - Softness</div>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=bFeDloOWsoo&amp;ab_channel=BanSenJukuAikido"
            target="_blank"
          >
            <div
              className="image"
              style={{ backgroundImage: 'url(/images/videos/essence_11.webp)' }}
            ></div>
            <div className="title">11 - Irimi</div>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=m3Aj-oIrBSE&amp;ab_channel=BanSenJukuAikido"
            target="_blank"
          >
            <div
              className="image"
              style={{ backgroundImage: 'url(/images/videos/essence_12.webp)' }}
            ></div>
            <div className="title">12 - Musubi</div>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=RaU3li6-Faw&amp;ab_channel=BanSenJukuAikido"
            target="_blank"
          >
            <div
              className="image"
              style={{ backgroundImage: 'url(/images/videos/essence_13.webp)' }}
            ></div>
            <div className="title">13 - Ki</div>
          </a>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
