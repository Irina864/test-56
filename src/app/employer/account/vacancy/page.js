// "use client";

// import { linkHrefEditVacancy } from "@/Links";
// import Nav from "@/components/Nav/Nav";
// import VacancyDetails from "@/components/VacancyDetails/VacancyDetails";
// import VacancyList from "@/components/VacancyDetails/VacancyList";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// import { useState } from "react";
// import styles from "./page.module.scss";

// const EditVacancyPage = () => {
//   const searchParams = useSearchParams();
//   const vacancyIdFromURL = searchParams.get("vacancyId");
//   const mockVacancies = [
//     {
//       id: 1,
//       title: "Веб-дизайнер",
//       salary: "140,000 ₽",
//       location: "Москва, Московское шоссе 215",
//       experience: "1-3 года",
//       daysLeft: 30,
//     },
//     {
//       id: 2,
//       title: "UX/UI дизайнер",
//       salary: "150,000 ₽",
//       location: "Москва, Тверская улица 10",
//       experience: "3-5 лет",
//       daysLeft: 25,
//     },
//     {
//       id: 3,
//       title: "Менеджер по продажам",
//       salary: "120,000 ₽",
//       location: "Москва, Лубянка 7",
//       experience: "1-2 года",
//       daysLeft: 20,
//     },
//     {
//       id: 4,
//       title: "Менеджер по продажам",
//       salary: "120,000 ₽",
//       location: "Москва, Лубянка 7",
//       experience: "1-2 года",
//       daysLeft: 20,
//     },
//     {
//       id: 5,
//       title: "UX/UI дизайнер",
//       salary: "150,000 ₽",
//       location: "Москва, Тверская улица 10",
//       experience: "3-5 лет",
//       daysLeft: 25,
//     },
//   ];
//   const [selectedVacancy, setSelectedVacancy] = useState(
//     mockVacancies.find((vacancy) => vacancy.id === Number(vacancyIdFromURL)) ||
//       mockVacancies[0]
//   );

//   const handleVacancySelect = (vacancy) => {
//     setSelectedVacancy(vacancy);
//   };

//   return (
//     <main className={styles.main}>
//       <nav className={styles.nav}>
//         <Nav page="Вакансия" isVacancy={true} />
//         <Link className={styles.nav__btn} href={linkHrefEditVacancy}>
//           Редактировать
//         </Link>
//       </nav>
//       <div className={styles.container}>
//         <aside>
//           <VacancyList
//             vacancies={mockVacancies}
//             onVacancySelect={handleVacancySelect}
//             selectedVacancyId={selectedVacancy.id}
//           />
//         </aside>
//         <div>
//           <VacancyDetails vacancy={selectedVacancy} />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default EditVacancyPage;
"use client";

import { linkHrefEditVacancy } from "@/Links";
import Nav from "@/components/Nav/Nav";
import VacancyDetails from "@/components/VacancyDetails/VacancyDetails";
import VacancyList from "@/components/VacancyDetails/VacancyList";
import { getVacanciesListForEmployer } from "@/store/API/vacanciesSlice";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.scss";

const EditVacancyPage = () => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const vacancyIdFromURL = searchParams.get("vacancyId");

  const { vacanciesList, isLoading } = useSelector((state) => state.vacancies);
  const [selectedVacancy, setSelectedVacancy] = useState(null);

  useEffect(() => {
    dispatch(getVacanciesListForEmployer());
  }, [dispatch]);

  useEffect(() => {
    if (vacanciesList.length > 0) {
      const foundVacancy = vacanciesList.find(
        (vacancy) => vacancy.id === Number(vacancyIdFromURL)
      );
      setSelectedVacancy(foundVacancy || vacanciesList[0]);
    }
  }, [vacanciesList, vacancyIdFromURL]);

  const handleVacancySelect = (vacancy) => {
    setSelectedVacancy(vacancy);
  };

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <Nav page="Вакансия" isVacancy={true} />
        <Link className={styles.nav__btn} href={linkHrefEditVacancy}>
          Редактировать
        </Link>
      </nav>

      <div className={styles.container}>
        <aside>
          <VacancyList
            vacancies={vacanciesList}
            selectedVacancy={selectedVacancy}
            onVacancySelect={handleVacancySelect}
          />
        </aside>

        <div>
          {selectedVacancy && <VacancyDetails vacancy={selectedVacancy} />}
        </div>
      </div>
    </main>
  );
};

export default EditVacancyPage;