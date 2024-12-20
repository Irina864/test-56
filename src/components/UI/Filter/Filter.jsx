'use client';
import styles from './Filter.module.scss';
import { useState, useEffect, useRef } from 'react';
import FilterProfession from './FilterProfession/FilterProfession';
import FilterRegion from './FilterRegion/FilterRegion';
import FilterSchedule from './FilterSchedule/FilterSchedule';
import FilterExperience from './FilterExperience/FilterExperience';
import { regexCity, regexLetterNumberSymbol } from '@/regex';
import { useSelector, useDispatch } from 'react-redux';
import { schedule } from '@/helpers/formatAndScheduleCalculater';
import { updateFilterState } from '@/store/filterSlice';
import Link from 'next/link';
import { linkHrefResumesFilter, linkHrefVacanciesFilter } from '@/Links';
import { getVacanciesListForApplicant } from '@/store/API/vacanciesSlice';
import { getResumeList } from '@/store/API/resumeSlice';
import { useCookie } from '@/hooks/useCookie';

const Filter = ({ forResume, forVacancy, isBig }) => {
  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.filter.searchPage);
  const filterRef = useRef(null);
  const [activeForm, setActiveForm] = useState(false);
  const [activeInput, setActiveInput] = useState({
    first: false,
    second: false,
    third: false,
  });
  const [activeWindow, setActiveWindow] = useState({
    first: false,
    second: false,
    third: false,
  });
  const infoLabel = {
    labelFieldFirst: forVacancy
      ? 'Профессия'
      : forResume
      ? 'Должность сотрудника'
      : '',
    labelFieldSecond: 'Город или регион',
    labelFieldThird: forVacancy
      ? 'График работы'
      : forResume
      ? 'Опыт сотрудника'
      : '',
  };
  const [filterDataForVacancy, setFilterDataForVacancy] = useState({
    profession: filterData.position || '',
    region: filterData.city || '',
    schedule: filterData.work_schedule || [],
  });
  const [filterDataForResume, setFilterDataForResume] = useState({
    profession: filterData.job_title || '',
    region: filterData.city || '',
    experience: {
      experience_from: filterData.experience.experience_from || '',
      experience_to: filterData.experience.experience_to || '',
      no_experience: filterData.experience.no_experience || false,
    },
  });

  const showExperience = (from, to, no_experience) => {
    no_experience ? 'Без опыта' : '';
    if (from.length === 0 && to.length === 0 && no_experience.length === 0) {
      return ``;
    }
    // до ...
    if (to.length > 0 && from.length === 0 && Number(to) === 1) {
      return `До ${to} года`;
    }
    if (to.length > 0 && from.length === 0 && Number(to) > 1) {
      return `До ${to} лет`;
    }
    // от ....
    if (to.length === 0 && from.length > 0 && Number(from) === 1) {
      return `От ${from} года`;
    }
    if (to.length === 0 && from.length > 0 && Number(from) > 1) {
      return `От ${from} лет`;
    }
    // от ... до ...
    if (to.length > 0 && from.length > 0) {
      return `От ${from} до ${to} лет`;
    }
    if (no_experience) {
      return 'Без опыта';
    } else {
      return '';
    }
  };

  const handleClickOutside = (e) => {
    if (filterRef.current && !filterRef.current.contains(e.target)) {
      setActiveWindow({ first: false, second: false, third: false });
      setActiveForm(false);
      setActiveInput({ first: false, second: false, third: false });
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e, nameField) => {
    let value = e.target.value;
    const name = e.target.name;

    const trimmedValue = value.trim();
    if (trimmedValue === '') {
      value = trimmedValue;
    }

    const type = e.target.type;

    if (type === 'text') {
      if (value.length > 0) {
        value = value.replace(/\s{2,}/g, ' ');
        value = value[0].toUpperCase() + value.slice(1);
      }
    }

    if (name === 'region' && !regexCity.test(value)) {
      value = value.slice(0, -1);
    }

    if (name === 'profession' && !regexLetterNumberSymbol.test(value)) {
      value = value.slice(0, -1);
    }

    if (forVacancy) {
      setFilterDataForVacancy((prev) => ({ ...prev, [nameField]: value }));
    } else {
      setFilterDataForResume((prev) => ({ ...prev, [nameField]: value }));
    }
    setActiveWindow({
      first: nameField === 'profession' && value.length > 0,
      second: nameField === 'region' && value.length > 0,
      third: nameField === 'experience' || nameField === 'schedule',
    });
  };

  const onFocusFirst = () => {
    setActiveForm(true);
    setActiveInput((prev) => ({ ...prev, first: true }));
    setActiveWindow({
      first: true,
      second: false,
      third: false,
    });
  };

  const onFocusSecond = () => {
    setActiveForm(true);
    setActiveInput((prev) => ({ ...prev, second: true }));
    setActiveWindow({
      first: false,
      second: true,
      third: false,
    });
  };
  const onFocusThird = () => {
    setActiveForm(true);
    setActiveInput((prev) => ({ ...prev, third: true }));
    setActiveWindow({
      first: false,
      second: false,
      third: true,
    });
  };
  const handleProfessionSelect = (profession) => {
    if (forVacancy) {
      setFilterDataForVacancy((prev) => ({ ...prev, profession: profession }));
    } else {
      setFilterDataForResume((prev) => ({ ...prev, profession: profession }));
    }
    setActiveWindow((prev) => ({ ...prev, first: false }));
  };
  const handleRegionSelect = (region) => {
    if (forVacancy) {
      setFilterDataForVacancy((prev) => ({ ...prev, region: region }));
    } else {
      setFilterDataForResume((prev) => ({ ...prev, region: region }));
    }
    setActiveWindow((prev) => ({ ...prev, second: false }));
  };
  const handleScheduleSelect = (schedule) => {
    setFilterDataForVacancy((prev) => ({
      ...prev,
      schedule: schedule,
    }));

    // setActiveWindow((prev) => ({ ...prev, third: false }));
  };
  const handleExperienceSelect = (experience) => {
    setFilterDataForResume((prev) => ({
      ...prev,
      experience: experience,
    }));

    // setActiveWindow((prev) => ({ ...prev, third: false }));
  };
  useEffect(() => {
    dispatch(
      updateFilterState({
        page: 'searchPage',
        key: 'position',
        data: filterDataForVacancy.profession,
      })
    );
    dispatch(
      updateFilterState({
        page: 'searchPage',
        key: 'city',
        data: filterDataForVacancy.region,
      })
    );
    dispatch(
      updateFilterState({
        page: 'searchPage',
        key: 'work_schedule',
        data: filterDataForVacancy.schedule,
      })
    );
  }, [filterDataForVacancy]);
  useEffect(() => {
    dispatch(
      updateFilterState({
        page: 'searchPage',
        key: 'job_title',
        data: filterDataForResume.profession,
      })
    );
    dispatch(
      updateFilterState({
        page: 'searchPage',
        key: 'city',
        data: filterDataForResume.region,
      })
    );
    dispatch(
      updateFilterState({
        page: 'searchPage',
        key: 'experience',
        data: {
          experience_from: filterDataForResume.experience.experience_from,
          experience_to: filterDataForResume.experience.experience_to,
          no_experience: filterDataForResume.experience.no_experience,
        },
      })
    );
  }, [filterDataForResume]);

  const handleSubmit = () => {
    let vacancyParams = {};
    let resumeParams = {};
    if (filterData.city && filterData.city !== 'Любой город') {
      vacancyParams.city = filterData.city;
      resumeParams.city = filterData.city;
    }

    if (filterData.position) {
      vacancyParams.position = filterData.position;
    }
    if (filterData.work_schedule) {
      vacancyParams.schedule = filterData.work_schedule;
    }

    if (filterData.job_title) {
      resumeParams.job_title = filterData.job_title;
    }
    if (filterData.experience_from) {
      resumeParams.experience_from = filterData.experience_from;
    }
    if (filterData.experience_to) {
      resumeParams.experience_to = filterData.experience_to;
    }
    if (filterData.experience_from) {
      resumeParams.no_experience = filterData.no_experience;
    }

    forVacancy
      ? dispatch(getVacanciesListForApplicant(vacancyParams))
      : dispatch(getResumeList(resumeParams));
  };

  return (
    <div
      className={`${styles.filter_wrap} ${!isBig && styles.windows_min}`}
      ref={filterRef}
    >
      {isBig ? (
        <div
          className={`${styles.filterSearch} ${
            activeForm && styles.form_active
          }`}
        >
          <form className={`${styles.filter__form}`}>
            <div
              className={`${styles.filter__wrap} ${
                activeInput.first && styles.wrap_active
              }  `}
            >
              <label className={styles.filter__label} htmlFor="firstField">
                {infoLabel.labelFieldFirst}
              </label>
              <input
                id="firstField"
                name="profession"
                onChange={(e) => handleInputChange(e, 'profession')}
                type="text"
                className={styles.filter__input}
                maxLength={100}
                value={
                  forVacancy
                    ? filterDataForVacancy.profession
                    : filterDataForResume.profession
                }
                placeholder="Введите название"
                onBlur={() => {
                  setActiveForm(false);
                  setActiveInput((prev) => ({ ...prev, first: false }));
                }}
                onFocus={onFocusFirst}
              />
            </div>
            <div className={styles.line}></div>

            <div
              className={`${styles.filter__wrap} ${
                activeInput.second && styles.wrap_active
              }  `}
            >
              <label className={styles.filter__label} htmlFor="secondField">
                {infoLabel.labelFieldSecond}
              </label>
              <input
                id="secondField"
                name="region"
                onChange={(e) => handleInputChange(e, 'region')}
                type="text"
                className={styles.filter__input}
                maxLength={50}
                value={
                  forVacancy
                    ? filterDataForVacancy.region
                    : filterDataForResume.region
                }
                placeholder="Введите название"
                onBlur={() => {
                  setActiveForm(false);
                  setActiveInput((prev) => ({ ...prev, second: false }));
                }}
                onFocus={onFocusSecond}
              />
            </div>
            <div className={styles.line}></div>
            <div
              className={`${styles.filter__wrap} ${
                activeInput.third && styles.wrap_active
              }  `}
            >
              <label className={styles.filter__label} htmlFor="thirdField">
                {infoLabel.labelFieldThird}
              </label>
              <input
                id="thirdField"
                name={forVacancy ? 'schedule' : 'experience'}
                onChange={(e) =>
                  handleInputChange(e, forVacancy ? 'schedule' : 'experience')
                }
                type="text"
                className={styles.filter__input}
                placeholder="Выберите"
                // value={
                //   forVacancy
                //     ? filterDataForVacancy.schedule
                //     : // : filterDataForResume.experience
                //       showExperience(
                //         filterDataForResume.experience.experience_from,
                //         filterDataForResume.experience.experience_to,
                //         filterDataForResume.experience.no_experience
                //       )
                // }
                value={
                  forVacancy
                    ? schedule(filterDataForVacancy.schedule)
                    : // : filterDataForResume.experience
                      showExperience(
                        filterDataForResume.experience.experience_from,
                        filterDataForResume.experience.experience_to,
                        filterDataForResume.experience.no_experience
                      )
                }
                onBlur={() => {
                  setActiveForm(false);
                  setActiveInput((prev) => ({ ...prev, third: false }));
                }}
                onFocus={onFocusThird}
                readOnly={true}
              />
            </div>
          </form>
          <Link
            href={forVacancy ? linkHrefVacanciesFilter : linkHrefResumesFilter}
            className={`${styles.filter__search}`}
            onClick={handleSubmit}
          >
            <img
              className={styles.filter__img}
              src="/images/header/search.svg"
              alt="Search"
            />
          </Link>
        </div>
      ) : (
        <div className={`${styles.filter}  ${activeForm && styles.active}`}>
          <form className={styles.filter__box}>
            <div className={styles.filter__item}>
              <input
                id="firstField"
                name="profession"
                onChange={(e) => handleInputChange(e, 'profession')}
                type="text"
                className={styles.filter__input}
                maxLength={100}
                value={
                  forVacancy
                    ? filterDataForVacancy.profession
                    : filterDataForResume.profession
                }
                placeholder="Введите название"
                onBlur={() => {
                  setActiveForm(false);
                  setActiveInput((prev) => ({ ...prev, first: false }));
                }}
                onFocus={onFocusFirst}
              />
            </div>
            <div className={styles.line}></div>
            <div className={styles.filter__item}>
              <input
                id="secondField"
                name="region"
                onChange={(e) => handleInputChange(e, 'region')}
                type="text"
                className={styles.filter__input}
                maxLength={50}
                value={
                  forVacancy
                    ? filterDataForVacancy.region
                    : filterDataForResume.region
                }
                placeholder="Введите название"
                onBlur={() => {
                  setActiveForm(false);
                  setActiveInput((prev) => ({ ...prev, second: false }));
                }}
                onFocus={onFocusSecond}
              />
            </div>
            <div className={styles.line}></div>
            <div className={styles.filter__item}>
              <input
                id="thirdField"
                name={forVacancy ? 'schedule' : 'experience'}
                onChange={(e) =>
                  handleInputChange(e, forVacancy ? 'schedule' : 'experience')
                }
                type="text"
                className={styles.filter__input}
                placeholder="Выберите"
                // value={
                //   forVacancy
                //     ? filterDataForVacancy.schedule
                //     : // : filterDataForResume.experience
                //       showExperience(
                //         filterDataForResume.experience.experience_from,
                //         filterDataForResume.experience.experience_to,
                //         filterDataForResume.experience.no_experience
                //       )
                // }
                value={
                  forVacancy
                    ? schedule(filterDataForVacancy.schedule)
                    : // : filterDataForResume.experience
                      showExperience(
                        filterDataForResume.experience.experience_from,
                        filterDataForResume.experience.experience_to,
                        filterDataForResume.experience.no_experience
                      )
                }
                onBlur={() => {
                  setActiveForm(false);
                  setActiveInput((prev) => ({ ...prev, third: false }));
                }}
                onFocus={onFocusThird}
                readOnly={true}
              />
            </div>
          </form>
          <Link
            href={forVacancy ? linkHrefVacanciesFilter : linkHrefResumesFilter}
            className={styles.filter__search}
            onClick={handleSubmit}
          >
            <img
              className={styles.filter__img}
              src="/images/header/search.svg"
              alt="Search"
            />
          </Link>
        </div>
      )}
      <div className={`${styles.windows} ${!isBig && styles.windows_min}`}>
        {activeWindow.first ? (
          <div className={styles.first_window}>
            <FilterProfession
              currentProfession={
                forVacancy
                  ? filterDataForVacancy.profession
                  : filterDataForResume.profession
              }
              onSelect={handleProfessionSelect}
            />
          </div>
        ) : null}
        {activeWindow.second ? (
          <div
            className={`${styles.second_window} ${!isBig && styles.second_min}`}
          >
            <FilterRegion
              currentRegion={
                forVacancy
                  ? filterDataForVacancy.region
                  : filterDataForResume.region
              }
              onSelect={handleRegionSelect}
            />
          </div>
        ) : null}
        {activeWindow.third ? (
          <div
            className={`${styles.third_window} ${!isBig && styles.third_min}`}
          >
            {forVacancy ? (
              <FilterSchedule
                currentSchedule={filterDataForVacancy.schedule}
                onSelect={handleScheduleSelect}
              />
            ) : (
              <FilterExperience
                currentExperience={filterDataForResume.experience}
                onSelect={handleExperienceSelect}
              />
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Filter;
