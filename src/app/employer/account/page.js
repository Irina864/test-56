'use client';
import Account from '@/components/Account/AccountEmployer';
import AsideSteps from '@/components/Account/AsideSteps/AsideSteps';
import Nav from '@/components/Nav/Nav';
import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import useResponsiveLayout from '@/hooks/useResponsiveLayout';
import BackButton from '@/components/UI/BackButton/BackButton';
import { linkHrefVacancies } from '@/Links';

export default function EmployerAccount() {
  const { isAsideVisible, setAsideVisible, isMobile } = useResponsiveLayout();
  const [currentStepTitle, setCurrentStepTitle] = useState('');

  const goBack = () => {
    setAsideVisible(true);
  };

  return (
    <main className={styles.main}>
      {!isMobile || (isMobile && !isAsideVisible) ? (
        <nav className={styles.nav}>
          <Nav page="Аккаунт" isMobileAccount={isMobile} />
        </nav>
      ) : null}

      <div className={styles.container}>
        {isMobile ? (
          !isAsideVisible ? (
            <div>
              <BackButton
                isMobile={isMobile}
                isAsideVisible={isAsideVisible}
                onGoBack={goBack}
                currentSection={currentStepTitle || 'Назад'}
              />
              <Account />
            </div>
          ) : (
            <aside>
              <div className={styles.sidebarContainer}>
                <BackButton
                  isMobile={isMobile}
                  isAsideVisible={isAsideVisible}
                  linkToBack={linkHrefVacancies}
                  nameLink="Аккаунт"
                />
                <AsideSteps
                  onOptionClick={() => setAsideVisible(false)}
                  setCurrentStepTitle={setCurrentStepTitle}
                />
              </div>
            </aside>
          )
        ) : (
          <>
            <aside>
              <div className={styles.sidebarContainer}>
                <AsideSteps setCurrentStepTitle={setCurrentStepTitle} />
              </div>
            </aside>
            <div>
              <Account />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
