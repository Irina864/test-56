'use client';
import CookieNoticeContainer from '@/components/UI/CookieNotice/CookieNoticeContainer';
import NavForDev from '@/components/_NavForDev/NavForDev';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { getResumeDetailById } from '@/store/API/resumeSlice';
import styles from './page.module.scss';
import UserMode from '@/auth/UserMode';
import { useEffect } from 'react';

export default function Home() {
  const dispatch = useDispatch();

  const mode = useSelector(({ mode }) => mode);
  const router = useRouter();
  const userData = useSelector((state) => {
    return state.accountUser.applicant;
  });
  // useEffect(() => {
  //   router.push('/vacancies');
  // }, []);

  return (
    <main className={styles.main}>
      <NavForDev />
      <CookieNoticeContainer />
      <UserMode />
    </main>
  );
}
