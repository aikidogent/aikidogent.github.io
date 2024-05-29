import React, { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useMobileMenu } from '@/context';

export const Hamburger = () => {
  const t = useTranslations('common.hamburger');
  const { open, setOpen } = useMobileMenu();

  return (
    <a
      className="hamburger"
      href="#"
      onClick={() => {
        setOpen(!open);
      }}
    >
      {open ? (
        <div className="open">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
              <path
                d="M13.9 11.1l3.9-3.9c.1-.1.1-.1.1-.2s0-.2-.1-.2l-2.6-2.6c-.1-.1-.1-.1-.2-.1s-.2 0-.2.1l-4 3.8L7 4.2c-.1-.1-.2-.1-.2-.1-.1 0-.2 0-.2.1L3.9 6.8c-.1.1-.1.3 0 .4l3.9 3.9L3.9 15c-.1.1-.1.3 0 .4L6.5 18c.1.1.1.1.2.1s.2 0 .2-.1l3.9-3.9 3.9 3.9c.1.1.1.1.2.1s.1 0 .2-.1l2.6-2.6c.1-.1.1-.3 0-.4l-3.8-3.9z"
                style={{ fill: '#FFF' }}
              ></path>
            </svg>
          </div>
          <div className="label">{t('close')}</div>
        </div>
      ) : (
        <div className="closed">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
              <path
                d="M19.8 3.6v3c0 .3-.2.5-.5.5h-17c-.3 0-.5-.3-.5-.5v-3c0-.3.2-.5.5-.5h17c.3 0 .5.2.5.5zm-.5 5.5h-17c-.3 0-.5.2-.5.5v3c0 .3.2.5.5.5h17c.3 0 .5-.2.5-.5v-3c0-.3-.2-.5-.5-.5zm0 6h-17c-.3 0-.5.2-.5.5v3c0 .3.2.5.5.5h17c.3 0 .5-.2.5-.5v-3c0-.3-.2-.5-.5-.5z"
                style={{ fill: '#FFF' }}
              ></path>
            </svg>
          </div>
          <div className="label">{t('menu')}</div>
        </div>
      )}
    </a>
  );
};
