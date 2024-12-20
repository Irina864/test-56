import React, { useState } from 'react';
import styles from './Security.module.scss';
import FormPassword from '@/components/UI/Form/FormPassword/FormPassword';
import Notification from '@/components/UI/Notification/Notification';
import ErrorMessage from '@/components/UI/ErrorMessage/ErrorMessage';

const Security = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isSaving, setIsSaving] = useState(false);


  const getSavedPassword = () => 'testPassword123';


  const validateNewPassword = (password) => {
    const validationErrors = [];
    if (password.length < 8) {
      validationErrors.push('Пароль должен содержать минимум 8 символов.');
    }
    if (!/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password)) {
      validationErrors.push('Допустима только латиница.');
    }
    if (!/[0-9!@#$%^&*]/.test(password)) {
      validationErrors.push('Пароль должен содержать хотя бы одну цифру или специальный символ.');
    }
    return validationErrors;
  };


  const handleChangePasswordClick = () => {
    setIsChangingPassword(true);
    setErrors([]);
  };

  // Handle save click
  const handleSaveClick = async (e) => {
    e.preventDefault();


    if (currentPassword !== getSavedPassword()) {
      setErrors(['Введенный пароль не совпадает с текущим паролем']);
      return;
    }


    const newPasswordErrors = validateNewPassword(newPassword);
    if (newPasswordErrors.length > 0) {
      setErrors(newPasswordErrors);
      return;
    }


    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
    setShowNotification(true);


    setCurrentPassword('');
    setNewPassword('');
    setIsChangingPassword(false);
    setErrors([]);
  };

  return (
    <div className={styles.container}>
      {showNotification && (
        <div className={styles.notification}>
          <Notification
            text="Пароль изменен"
            onClose={() => setShowNotification(false)}
          />
        </div>
      )}

      <div className={styles.formGroup}>
        <label className={styles.label}>Текущий пароль</label>
        <div className={styles.inputContainer}>
        <FormPassword
          value={currentPassword}
          id="currentPassword"
          inputName="currentPassword"
          placeholder={isChangingPassword ? '' : '••••••••'}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className={styles.input}
          disabled={!isChangingPassword} 
        />
          {!isChangingPassword && (
            <button
              className={styles.changePasswordButton}
              onClick={handleChangePasswordClick}
            >
              Изменить пароль
            </button>
          )}
        </div>

        {isChangingPassword && (
          <>
            <div className={styles.formGroup}>
              <label className={styles.label}>Новый пароль</label>
              <FormPassword
                value={newPassword}
                id="newPassword"
                inputName="newPassword"
                onChange={(e) => setNewPassword(e.target.value)}
                className={styles.input}
              />
            </div>

            {errors.length > 0 && (
              <div className={styles.errorMessage}>
                {errors.map((error, index) => (
                  <ErrorMessage
                    key={index}
                    text={error}
                    noimg={false}
                    center={true}
                    biggerText={true}
                  />
                ))}
              </div>
            )}

            <button
              className={styles.saveButton}
              onClick={handleSaveClick}
              disabled={isSaving}
            >
              Сохранить
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Security;
