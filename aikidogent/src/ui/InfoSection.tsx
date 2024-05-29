import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export const InfoSection = () => {
  const t = useTranslations('common.info');

  return (
    <div className="info">
      <section>
        <h2>{t('title')}</h2>
        <h4>{t('subtitle')}</h4>
      </section>
      <section>
        <table className="timetable">
          <tbody>
            <tr>
              <td>{t('tuesday')}</td>
              <td>20:00 - 22:00</td>
            </tr>
            <tr>
              <td>{t('thursday')}</td>
              <td>21:00 - 22:30</td>
            </tr>
          </tbody>
        </table>
        <p dangerouslySetInnerHTML={{ __html: t.raw('address') }} />
      </section>
      <section>
        <table className="contact">
          <tbody>
            <tr>
              <td>{t('telephone')}</td>
              <td>
                <a className="tel" href="tel:+32486139171">
                  +32 486 13 91 71 (Dries)
                </a>
              </td>
            </tr>
            <tr>
              <td>{t('email')}</td>
              <td>
                <a className="mailto" href="mailto:info@aikidogent.be">
                  dries@aikidogent.be
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <Link className="more-link" href={`/practical-information`}>
        {t('practicalInfo')}
      </Link>
    </div>
  );
};
