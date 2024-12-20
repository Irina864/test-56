'use client';
import styles from './page.module.scss';
import Sorter from '@/components/UI/Sorter/Sorter';
import { useEffect, useState } from 'react';
import ApplicantCard from '@/components/UI/ApplicantCard/ApplicantCard';
import ResumeDescription from '@/components/UI/Descriptions/ResumeDescriptions/ResumeDescription';
import { useDispatch, useSelector } from 'react-redux';
import { getResumeDetailById, getResumeList } from '@/store/API/resumeSlice';
import ResumeCardSkeleton from '@/components/UI/CardSkeletons/resumeCardSkeletons';
import ResumeDescriptionSkeleton from '@/components/UI/CardSkeletons/resumeDescriptionSkeletons';
import { getReactionList } from '@/store/API/reactionSlice';
export default function FilterResume() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.resume.isLoading);
  const n = 5;
  useEffect(() => {
    dispatch(getReactionList());
  }, []);

  // !запрос первой карты
  const resumeList = useSelector((state) => state.resume.resumeList.results);
  const idResume = useSelector((state) => state.resume.resume.id);
  useEffect(() => {
    if (
      isLoading === false &&
      resumeList.length > 0 &&
      resumeList[0].id &&
      resumeList[0].id !== idResume
    ) {
      const id = resumeList[0].id;
      console.log(id);
      dispatch(getResumeDetailById(id));
    }
  }, [resumeList]);

  const data = resumeList.length > 0 ? resumeList : [];
  return (
    <main className={styles.main}>
      <div className={styles.sorter}>
        <Sorter forResume={true} />
      </div>
      {isLoading ? (
        <div className={styles.container}>
          <aside className={styles.aside}>
            {[...Array(n)].map((index) => (
              <ResumeCardSkeleton key={index} />
            ))}
          </aside>
          <div className={styles.content}>
            {/* // <ResumeDescription /> */}
            <>{data.length > 0 ? <ResumeDescription /> : ''}</>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <aside className={styles.aside}>
            <>
              {data.length > 0
                ? resumeList.map((item) => {
                    return <ApplicantCard item={item} key={item.id} />;
                  })
                : ''}
            </>
          </aside>
          <div className={styles.content}>
            {/* // <ResumeDescription /> */}
            <>{data.length > 0 ? <ResumeDescription /> : ''}</>
          </div>
        </div>
      )}
      {/* <div className={styles.container}>
       
        <aside className={styles.aside}>
          {isLoading ? (
            [...Array(n)].map((index) => <ResumeCardSkeleton key={index} />)
          ) : (
            <>
              {data.length > 0
                ? resumeList.map((item) => {
                    return <ApplicantCard item={item} key={item.id} />;
                  })
                : ''}
            </>
          )}
        </aside>
        <div className={styles.content}>
          {isLoading ? (
            <ResumeDescriptionSkeleton />
          ) : (
            // <ResumeDescription />
            <>{data.length > 0 ? <ResumeDescription /> : ''}</>
          )}
        </div>
      </div> */}
    </main>
  );
}
