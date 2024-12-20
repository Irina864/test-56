"use client";

import styles from "./SearchAndMenu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { applicantChats, employerChats } from "../DataChats";
import { useEffect, useState } from "react";
import {
  setAllChats,
  setCurrentChat,
  setCurrentChatsList,
  setInputValue,
} from "@/store/chatsSlice";
import ChatSkeleton from "@/components/UI/ChatSkeleton/ChatSkeleton";
import { getVacanciesList } from "@/store/API/vacanciesSlice";
import { useUserId } from "@/hooks/useUserId";
import { getApplicantData } from "@/store/API/accountUserSlice";
import { getResumeList } from "@/store/API/resumeSlice";
import { deleteChatMessage, getChat, getChatMessages } from "@/store/API/chatsSlice";

const SearchAndMenu = () => {
  const dispatch = useDispatch();
  const mode = useSelector(({ mode }) => mode);
  // Создаём стэйт загрузки для отображения/скрытия скелетонов
  const [isLoad, setIsLoad] = useState(true);
  const dataChatsFromBack = useSelector((state) => state.chats.chats);
  console.log(dataChatsFromBack);

  useEffect(() => {
    dispatch(getChat());
    dispatch(getChatMessages(16));
    // dispatch(deleteChatMessage(16, 24));
  }, []);

  // usePreventScroll();
  // назначаем нужное количество отображаемых скелетонов
  const n = 5;

  const chatsData = mode === true ? applicantChats : employerChats; //employerChats : applicantChats;

  useEffect(() => {
    dispatch(setCurrentChatsList(chatsData));
    dispatch(setAllChats(chatsData));
    setIsLoad(false);
  }, [chatsData]);

  const currentChatsList = useSelector(
    (state) => state.userChats.currentChatsList
  );
  const currentChat = useSelector((state) => state.userChats.currentChat);
  const inputValue = useSelector((state) => state.userChats.inputValue);

  useEffect(() => {
    console.log(currentChatsList);
  }, [dispatch]);

  const hendleSelectChat = (id) => {
    const newCurrentChat = currentChatsList.find((el) => el.id === id);
    dispatch(setCurrentChat(newCurrentChat));
  };
  const hendleSearch = (inputValue) => {
    let newChatsList = chatsData.filter(
      (el) =>
        el.applicant?.toLowerCase().includes(inputValue.toLowerCase()) ||
        el.employer?.toLowerCase().includes(inputValue.toLowerCase())
    );
    console.log(newChatsList);
    dispatch(setCurrentChatsList(newChatsList));
    // dispatch(setAllChats(newChatsList));
  };
  
  return (
    <div className={styles.container}>
      <form className={styles.container__input}>
        {/* type="search" || type="text"*/}
        <input
          className={styles.input}
          placeholder="Поиск"
          onChange={(e) => dispatch(setInputValue(e.target.value))}
        />
        <p
          className={styles.btn}
          type="submit"
          onClick={() => hendleSearch(inputValue)}
        >
          search
        </p>
      </form>
      <div className={styles.container__chats}>
        {currentChatsList.length === 0 ? (
          isLoad ? (
            [...Array(n)].map((item, index) => <ChatSkeleton key={index} />)
          ) : (
            <p className={styles.container__chats__message}>
              У Вас нет начатых диалогов
            </p>
          )
        ) : (
          currentChatsList.map((chat) => {
            let id = chat.id;
            let name = mode === true ? chat.employer : chat.applicant; //chat.applicant : chat.employer;

            return (
              <div
                className={
                  id === currentChat.id
                    ? `${styles.chat} ${styles.chat_active}`
                    : styles.chat
                }
                key={id}
                onClick={() => hendleSelectChat(id)}
              >
                <img
                  className={styles.chat__avatar}
                  src={chat.avatarUrl}
                  alt="avatar"
                />
                <p className={styles.chat__avatar__span}></p>
                <div className={styles.chat__content}>
                  <div className={styles.chat__content__title}>
                    <h3 className={styles.chat__content__title__header}>
                      {name}
                    </h3>
                    <p className={styles.chat__content__title__time}>
                      {chat.time}
                    </p>
                  </div>
                  <div
                    className={
                      chat.lastMessage.length === 0
                        ? styles.hidden
                        : styles.chat__content__middle
                    }
                  >
                    <p className={styles.chat__content__middle__message}>
                      {chat.lastMessage}
                    </p>
                    <p className={styles.chat__content__middle__net}></p>
                  </div>
                  <p
                    className={
                      chat.status == true
                        ? styles.chat__content__status_invitation
                        : chat.status === null
                        ? styles.chat__content__status
                        : styles.chat__content__status_refusal
                    }
                  >
                    {chat.status == true
                      ? "Приглашение"
                      : chat.status === null
                      ? "Вы откликнулись"
                      : "Отказ"}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchAndMenu;
