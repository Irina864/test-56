"use client";

import React, { useState } from "react";
import styles from "./Support.module.scss";
import { useSelector, useDispatch } from "react-redux";
import FormInput from "@/components/UI/Form/FormText/FormText";
import FormButtonSend from "@/components/UI/Form/FormButtonSend/FormButtonSend";
import { updatePageApplicant } from "@/store/accountApplicantDataSlice";
import { updatePageEmployer } from "@/store/accountEmployerDataSlice";
import { errorFileFormat, errorFileSize } from "@/error";
import Notification from "@/components/UI/Notification/Notification";
import ErrorSupport from "@/components/UI/ErrorSupport/ErrorSupport";

const Support = () => {
  const page = useSelector((state) => state.page);
  const mode = useSelector(({ mode }) => mode);
  const dispatch = useDispatch();
  const [isFileAdd, setIsFileAdd] = useState(false);
  const [addedfile, setAddedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const [showAlertError, setShowAlertError] = useState(false);

  const hendleChageMessage = (e) => {
    let message = e.target.value;
    message = message.replace(/\s{2,}/g, " ");
    if (message.startsWith(" ")) {
      message = message.slice(1);
    }
    if (message.length > 0) {
      message = message[0].toUpperCase() + message.slice(1);
    }
    setMessage(message);
    validateForm();
  };

  const handleAddFile = (e) => {
    setShowAlertError(false);
    const file = e.target.files[0];
    const fileChosen = document.getElementById("file-chosen");
    setAddedFile(null);

    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/jpg",
      "image/png",
    ];

    fileChosen.textContent = "Прикрепить файл";
    if (file.size > 10 * 1024 * 1024) {
      setIsFileAdd(false);
      setShowAlertError(true);
      return;
    }
    if (!validTypes.includes(file.type)) {
      console.log(Boolean(validTypes.includes(file.type)));
      setIsFileAdd(false);
      setShowAlertError(true);
      return;
    } else {
      setIsFileAdd(true);
      fileChosen.textContent = file.name;
      setAddedFile(file);
    }
  };

  const hendleDelFile = () => {
    setAddedFile(null);
    setIsFileAdd(false);
    const fileChosen = document.getElementById("file-chosen");
    fileChosen.textContent = "Прикрепить файл";
  };

  const validateForm = () => {
    const newErrors = [];

    const regex = /^[A-Za-zА-Яа-яЁё0-9\s\-,.!@#$%^&*()_+=[\]{};:'"<>?]*$/;
    if (message && (!regex.test(message) || !/[A-Za-zА-Яа-я]/.test(message)))
      newErrors.push("Некорректное значение в поле");
    if (message.length < 49) newErrors.push("Введите не менее 50 символов");
    if (message.length > 1000) newErrors.push("Введите не более 1000 символов");

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const clearState = () => {
    const getInput = document.getElementById("input");
    const fileChosen = document.getElementById("file-chosen");
    setMessage("");
    getInput.value = "";
    fileChosen.textContent = "Прикрепить файл";
    setIsFileAdd(false);
    setAddedFile(null);
    setShowNotification(true);
  };

  const handleClick = () => {
    const getInput = document.getElementById("input");
    const fileChosen = document.getElementById("file-chosen");

    const isValid = validateForm();
    if (isValid) {
      //добавить сохранение данных в разные слайсы в зависимости от пользователя(employer/applicant) и очистить стэйт
      if (mode) {
        dispatch(
          updatePageApplicant(3, {
            message,
            file: addedfile,
          })
        );
        clearState();
      } else {
        dispatch(
          updatePageEmployer(4, {
            message,
            file: addedfile,
          })
        );
        clearState();
      }
    }
    return isValid;
  };

  return (
    <div className={styles.container}>
      {showNotification && (
        <div className={styles.notification}>
          <Notification
            text="Сообщение отправлено"
            onClose={() => setShowNotification(false)}
          />
        </div>
      )}
      {showAlertError && (
        <div className={styles.errorBox} onClick={() => setShowAlertError(false)}>
          <ErrorSupport />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.content__inputBox}>
          <label className={styles.content__inputBox__lable}>
            Отправить сообщение в службу поддержки
          </label>
          <FormInput
            id="input"
            type="text"
            placeholder="Введите не менее 50 символов"
            name="support"
            minlenght="50"
            maxLength="1001"
            rows="7"
            value={message}
            onChange={(e) => {
              let message = e.target.value;
              message = message.replace(/\s{2,}/g, " ");
              if (message.startsWith(" ")) {
                message = message.slice(1);
              }
              if (message.length > 0) {
                message = message[0].toUpperCase() + message.slice(1);
              }
              setMessage(message);
              validateForm();
            }}
            className={errors.length > 0 ? styles.errorInput : ""}
          />
          {errors.length > 0 && <p className={styles.error}>{errors[0]}</p>}
        </div>
        <div className={styles.content__addBox}>
          <input
            className={styles.content__addBox__btn}
            type="file"
            id="add-button"
            hidden
            accept=".jpeg, .png, .pdf, .doc, .docx, .jpg"
            onChange={(e) => handleAddFile(e)}
          />
          <label
            htmlFor="add-button"
            id="file-chosen"
            className={styles.content__addBox__btn_label}
          >
            Прикрепить файл
          </label>
          <p className={styles.content__addBox__p}>
            {isFileAdd ? (
              <img
                src="../../../images/form/delete.svg"
                className={styles.content__addBox__btn_del}
                onClick={hendleDelFile}
              />
            ) : (
              "pdf, doc, docx, jpeg, jpg, png, не более 10 Мб"
            )}
          </p>
        </div>
      </div>
      <FormButtonSend value="Отправить" handleClick={handleClick} />
    </div>
  );
};

export default Support;