'use client';
import styles from './page.module.scss';
import Sorter from '@/components/UI/Sorter/Sorter';
import ResponseModalForEmployer from '@/components/Response/ResponseModalForEmployer/ResponseModalForEmployer';
import Filter from '@/components/UI/Filter/Filter';
import { useEffect, useState } from 'react';
import EmployerCard from '@/components/UI/EmployerCard/EmployerCard';
import {
  getVacanciesListForApplicant,
  getVacancyForApplicant,
  setIsLoading,
} from '@/store/API/vacanciesSlice';
import { useDispatch, useSelector } from 'react-redux';
import VacansyCardSkeleton from '@/components/UI/CardSkeletons/vacancyCardSkeletons';
import VacancyDescriptionSkeleton from '@/components/UI/CardSkeletons/vacancyDescriptionSkeletons';
import VacancieDescription from '@/components/UI/Descriptions/VacancieDescription/VacancieDescription';
import { addBackLink } from '@/helpers/addBackLinkToNavigationSlice';
import { linkHrefVacanciesFilter } from '@/Links';

export default function FilterVacancy() {
  const dispatch = useDispatch();
  const [showResponseModal, setShowResponseModal] = useState(false);
  const isRender = useSelector((state) => state.favPage.isRender);
  const isLoading = useSelector((state) => state.vacancies.isLoading);

  const currentCardId = useSelector((state) => state.favPage.currentId);
  const n = 5;

  // useEffect(() => {
  //   // Этот запрос для авторизованного пользователя
  //   dispatch(getVacanciesListForApplicant());
  //   // Этот запрос для НЕ авторизованного пользователя
  //   // dispatch(getVacanciesList());
  //   dispatch(getVacancyForApplicant(currentCardId));
  // }, []);

  // useEffect(() => {
  //   dispatch(getVacancyForApplicant(currentCardId));
  // }, [currentCardId]);

  // !запрос первой карты
  const list = useSelector((state) => state.vacancies.vacanciesList);
  useEffect(() => {
    if (list.length > 0) {
      dispatch(getVacancyForApplicant(list[0].id));
    }
  }, [list]);

  const vacanciesList = useSelector((state) => state.vacancies.vacanciesList);
  console.log(vacanciesList);

  const data = vacanciesList.length > 0 ? vacanciesList : [];

  useEffect(() => {
    console.log(vacanciesList);
  }, [isRender]);
  return (
    <main className={styles.main}>
      <div className={styles.sorter}>
        <Sorter forVacancy={true} />
      </div>
      <div className={styles.container}>
        <aside className={styles.aside}>
          {isLoading ? (
            [...Array(n)].map((index) => <VacansyCardSkeleton key={index} />)
          ) : (
            <>
              {data.length > 0
                ? data.map((item, index) => {
                    return (
                      <EmployerCard key={item.id} index={index} item={item} />
                    );
                  })
                : ''}
            </>
          )}
        </aside>
        <div className={styles.content}>
          {isLoading ? (
            <VacancyDescriptionSkeleton />
          ) : (
            <>
              {data.length > 0 ? (
                <VacancieDescription
                  addBackLink={() =>
                    addBackLink(
                      linkHrefVacanciesFilter,
                      'Фильтр вакансий',
                      'О компании/Вакансии компании'
                    )
                  }
                />
              ) : (
                ''
              )}
            </>
          )}
        </div>
        {/* <button onClick={() => setShowResponseModal(true)}>
          SearchVacancy
        </button>
        {showResponseModal && (
          <ResponseModalForEmployer
            onClose={() => setShowResponseModal(false)}
          />
        )} */}
      </div>
    </main>
  );
}
