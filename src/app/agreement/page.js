'use client';
import Link from 'next/link';
import styles from './agreement.module.scss';

const Agreement = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Пользовательское соглашение</h1>
      <section className={styles.section}>
        <p className={styles.paragraph}>
          Сайт «A-job», именуемый в дальнейшем «Исполнитель», предоставляет
          любому лицу, именуемому в дальнейшем «Пользователь», услуги по
          использованию сайта Исполнителя посредством предоставления сервисов
          сайта a-job.ru на приведенных ниже условиях.
        </p>
        <p className={styles.paragraph}>
          Безусловным принятием (акцептом) условий настоящей оферты считается
          использование сайта a-job.ru.
        </p>
        <h2 className={`${styles.paragraph} ${styles.paragraph_title}`}>
          1. Термины и определения
        </h2>
        <p className={styles.paragraph}>
          1.1. Сайт — содержимое интернет-страниц, расположенных в сети Интернет
          по адресу домена a-job.ru.
        </p>
        <p className={styles.paragraph}>
          1.2. Пользователь сайта — лицо, просматривающее страницы Сайта и
          использующее сервисы Сайта при помощи Интернет-браузера.
        </p>
        <p className={styles.paragraph}>
          1.3. Анонимный пользователь — Пользователь сайта, не имеющий Учетной
          информации на Сайте.
        </p>
        <p className={styles.paragraph}>
          1.4. Зарегистрированный пользователь — Пользователь сайта, имеющий
          Учетную информацию на Сайте.
        </p>
        <p className={styles.paragraph}>
          1.5. Учетная информация — логин и пароль для входа в Личный кабинет. В
          качестве логина используется адрес электронной почты, указываемый
          Пользователем сайта при регистрации на Сайте.
        </p>
        <p className={styles.paragraph}>
          1.6. Соискатель — Зарегистрированный пользователь, размещающий
          информацию в Базе данных сайта с целью поиска работы.
        </p>
        <p className={styles.paragraph}>
          1.7. Работодатель — Зарегистрированный пользователь, размещающий
          информацию в Базе данных сайта с целью поиска сотрудников.
        </p>
        <p className={styles.paragraph}>
          1.8. База данных сайта — совокупность резюме Соискателей и вакансий
          Работодателей, находящихся в сети интернет по адресу домена a-job.ru.
        </p>
        <p className={styles.paragraph}>
          1.9. Личный кабинет — закрытая часть сайта, куда Зарегистрированный
          пользователь попадает посредством ввода своей Учетной информации и где
          он получает доступ к редактированию и удалению персональных и других
          данных, вакансий, резюме, получению и отправке сообщений другим
          Зарегистрированным пользователям, и к другой информации.
        </p>
        <p className={styles.paragraph}>
          1.10. Персональные данные — данные, содержащие любую информацию о
          Пользователе сайта (фамилия, имя, отчество, пол, дата рождения, адрес,
          семейное положение, гражданство, образование, профессия, описания мест
          работы, адрес электронной почты, номер телефона и любая другая
          информация, которую Пользователь сайта указывает по своему
          усмотрению).
        </p>
        <p className={styles.paragraph}>
          1.11. Резюме — документ, содержащий Персональные данные Соискателя.
        </p>
        <p className={styles.paragraph}>
          1.12. Вакансия — документ, содержащий Персональные данные
          Работодателя.
        </p>
        <h2 className={`${styles.paragraph} ${styles.paragraph_title}`}>
          2. Предмет соглашения
        </h2>
        <p className={styles.paragraph}>
          2.1. Сайт предоставляет комплекс услуг по размещению Вакансий и
          Резюме, способствует установлению контактов между Работодателями и
          Соискателями.
        </p>
        <p className={styles.paragraph}>
          2.2. В соответствии с Федеральным законом от 27.07.2006 г. №152-ФЗ «О
          персональных данных» Пользователь соглашается разместить свои
          Персональные данные при регистрации на Сайте, а также в Вакансии или
          Резюме, необходимые для эффективного поиска сотрудника или
          трудоустройства, и выражает (предоставляет) свое согласие Исполнителю
          на осуществление со всеми указанными в своем Резюме персональными
          данными следующих действий: сбор, систематизацию, накопление,
          хранение, уточнение, обновление, изменение, использование,
          распространение, блокирование, уничтожение, поиск и представление
          информации о Соискателе и других общедоступных персональных данных
          Соискателя на основе персональных данных и информации, указанных в
          Резюме. Обработка, распространение, удаление персональных данных
          осуществляется в соответствии с{' '}
          <Link
            className={`${styles.paragraph} ${styles.paragraph_link}`}
            href="/privacy"
            target="_blank"
          >
            Политикой
          </Link>{' '}
          обработки персональных данных.
        </p>
        <p className={styles.paragraph}>
          2.3. Регистрируясь на сайте, Пользователь безусловно соглашается и
          признает, что размещаемые им на Сайте Персональные данные в Вакансии
          или Резюме будут являться общедоступными. Исполнитель не несет
          ответственности за сохранение их конфиденциальности и/или
          использование третьими лицами.
        </p>
        <p className={styles.paragraph}>
          2.4. Срок размещения персональных данных Вакансий и Резюме неограничен
          и определяется самостоятельно субъектом персональных данных
          (Зарегистрированным пользователем).
        </p>
        <p className={styles.paragraph}>
          2.5. Настоящее соглашение не может пониматься как установление между
          Сайтом и Пользователем агентских отношений, отношений товарищества,
          отношений по совместной деятельности, отношений личного найма, либо
          каких-то иных отношений, прямо не предусмотренных в настоящем
          соглашении.
        </p>
        <p className={styles.paragraph}>
          2.6. Сайт ни в коей мере не может считаться предприятием, оказывающим
          возмездное или безвоздмездное оказание услуг по найму персонала.
        </p>
        <p className={styles.paragraph}>
          2.7. Ответственность за содержание, достоверность публикуемой
          информации и последствия ее размещения несет Пользователь.
        </p>
        <h2 className={`${styles.paragraph} ${styles.paragraph_title}`}>
          3. Права и обязанности Пользователя
        </h2>
        <p className={styles.paragraph}>3.1. Пользователь обязуется:</p>
        <p className={styles.paragraph}>
          3.1.1. Размещать полную, достоверную и соответствующую
          действительности информацию о себе или организации и по запросу
          Исполнителя предоставить необходимые для ее подтверждения документы;
        </p>
        <p className={styles.paragraph}>
          3.1.2. При регистрации использовать только свою личную контактную
          информацию (номер телефона, ФИО, e-mail);
        </p>
        <p className={styles.paragraph}>
          3.1.3. Не использовать чужое имя и не представляться от имени другого
          лица или организации;
        </p>
        <p className={styles.paragraph}>
          3.1.4. Не использовать информацию о телефонах, почтовых адресах,
          адресах электронной почты для целей иных, отличных от тематической
          направленности Сайта (поиск работы и сотрудников);
        </p>
        <p className={styles.paragraph}>
          3.1.5. Не изменять и не удалять любые материалы сайта, относящиеся к
          другим лицам или компаниям;
        </p>
        <p className={styles.paragraph}>
          3.1.6. Не производить несанкционированное проникновение в любые
          компоненты сайта;
        </p>
        <p className={styles.paragraph}>
          3.1.7. Не передавать свой логин и пароль для доступа к защищенным
          паролями разделам сайта другим лицам;
        </p>
        <p className={styles.paragraph}>
          3.1.8. Не использовать для проникновения на защищенные участки сайта
          чужой логин и пароль;
        </p>
        <p className={styles.paragraph}>
          3.1.9. Не производить регистрацию нескольких аккаунтов;
        </p>
        <p className={styles.paragraph}>
          3.1.10. Не размещать информацию, нарушающую законодательство РФ и
          международное законодательство.
        </p>
        <p className={styles.paragraph}>3.2. Пользователь имеет право: </p>
        <p className={styles.paragraph}>
          3.2.1. Разместить Вакансию или Резюме;
        </p>
        <p className={styles.paragraph}>
          3.2.2. В любое время по своему усмотрению отозвать свое согласие на
          обработку своих персональных данных (представленных в виде Резюме)
          Исполнителем в том числе путем самостоятельного удаления в Личном
          кабинете какого-либо конкретного или всех своих Резюме, размещенных на
          Сайте;
        </p>
        <p className={styles.paragraph}>
          3.2.3. В любое время по своему усмотрению удалить свой Личный кабинет
          на Сайте, включая все данные, относящиеся к данному Личному кабинету,
          направив запрос со страницы{' '}
          <Link
            className={`${styles.paragraph} ${styles.paragraph_link}`}
            href="#"
          >
            Обратной
          </Link>{' '}
          связи;
        </p>
        <h2 className={`${styles.paragraph} ${styles.paragraph_title}`}>
          4. Права и обязанности Исполнителя
        </h2>
        <p className={styles.paragraph}>4.1. Исполнитель обязуется:</p>
        <p className={styles.paragraph}>
          4.1.1. Предоставить Пользователям доступ к вакансиям и резюме,
          размещенным на Сайте.
        </p>
        <p className={styles.paragraph}>
          4.1.2. Предоставить Пользователям возможность размещать на Сайте
          вакансии и резюме.
        </p>
        <p className={styles.paragraph}>
          4.1.3. Предоставить Пользователям возможность удалить Вакансию или
          Резюме в любой момент по своему усмотрению.
        </p>
        <p className={styles.paragraph}>
          4.1.4. Предоставить Пользователям возможность откликаться на
          опубликованные на Сайте вакансии и резюме.
        </p>
        <p className={styles.paragraph}>
          4.1.5. Не использовать и не передавать другим лицам личные данные
          Пользователя для целей, отличных от тематической направленности Сайта
          (поиск работы и сотрудников).
        </p>
        <p className={styles.paragraph}>4.2. Исполнитель имеет право:</p>
        <p className={styles.paragraph}>
          4.2.1. В случае нарушения Пользователем своих обязанностей, удалить
          информацию Пользователя без извещения последнего.
        </p>
        <p className={styles.paragraph}>
          4.2.2. Полностью или частично удалять со своего сервера любую
          информацию, которая с точки зрения Исполнителя является нежелательной
          или нарушающей данное Соглашение.
        </p>
        <p className={styles.paragraph}>
          4.2.3. Ограничить доступ Пользователя к сайту в случае нарушения
          данного Соглашения.
        </p>
        <p className={styles.paragraph}>
          4.2.4. Вносить технические правки в размещаемых материалах или удалять
          их по своему усмотрению без предварительного уведомления и объяснения
          причин.
        </p>
        <p className={styles.paragraph}>
          4.2.5. Публиковать вакансии, размещенные на Сайте, в сторонних газетах
          или на других сайтах схожей тематики для увеличения количества
          откликов на вакансию. Отмена публикации осуществляется по запросу
          Работодателя.
        </p>
        <p className={styles.paragraph}>
          4.3. Исполнитель не является представителем ни Соискателей,
          публикующих резюме, ни Работодателей, размещающих вакансии, поэтому не
          несет никакой ответственности в случае установления каких-либо
          финансовых отношений между ними. Любые договоренности между
          Пользователями являются двусторонними и Исполнитель не имеет к ним
          отношения.
        </p>
        <p className={styles.paragraph}>
          4.4. Исполнитель ни при каких обстоятельствах не несет ответственности
          за ущерб, убытки или расходы, возникшие в связи с использованием
          настоящего сайта или невозможностью его использования.
        </p>
        <p className={styles.paragraph}>
          4.5. Исполнитель прилагает все возможные усилия для того, чтобы
          избежать несанкционированного использования персональной информации
          Пользователей. Однако, Исполнитель не несет ответственности в случае,
          если утечка данных произошла по причине сбоев в оборудовании или
          программном обеспечении, находящимся под контролем других лиц, либо в
          случае перебоев в работе сайта, связанных с порчей сайта другими
          лицами.
        </p>
        <p className={styles.paragraph}>
          4.6. Исполнитель не несет ответственности за последствия проникновения
          в систему пользователя, использующего чужой логин и пароль доступа.
        </p>
        <p className={styles.paragraph}>
          4.7. Исполнитель не гарантирует Пользователю, что размещенное им
          резюме или вакансия будут просмотрены определенным количеством
          посетителей или хотя бы одним.
        </p>
        <p className={styles.paragraph}>
          4.8. Исполнитель не несет ответственности за информацию, содержащуюся
          в объявлениях, размещенных Пользователями.
        </p>
        <h2 className={`${styles.paragraph} ${styles.paragraph_title}`}>
          5. Правила размещения объявлений
        </h2>
        <p className={styles.paragraph}>
          5.1. Все объявления должны соответствовать территориальной и
          тематической направленности Сайта.
        </p>
        <p className={styles.paragraph}>
          5.2. Запрещается размещать объявления о вакансиях и резюме в
          населенных пунктах, не входящих в состав Российской Федерации.
        </p>
        <p className={styles.paragraph}>
          5.3. Запрещается размещать объявления, должность или любое другое поле
          которых заполнено при использовании ЗАГЛАВНЫХ БУКВ (кроме
          аббревиатур).
        </p>
        <p className={styles.paragraph}>
          5.4. Запрещается указывать зарплату, контактные данные и другую
          несоответствующую информацию в заголовке объявления (наименовании
          должности).
        </p>
        <p className={styles.paragraph}>
          5.5. Запрещается размещать объявление в несоответствующую категорию
          (город), а также дублировать объявления по нескольким категориям
          рубрикатора или населенным пунктам, находящимся рядом с местом работы.
        </p>
        <p className={styles.paragraph}>
          5.6. Дубликаты объявлений удаляются (дубликатом считается объявление,
          совпадающее с другим объявлением по заголовку, фактическому месту
          работы).
        </p>
        <p className={styles.paragraph}>
          5.7. Запрещается размещать одинаковые объявления. Для поднятия
          объявления в результатах поисковой выдачи нужно воспользоваться
          функцией обновления даты.
        </p>
        <p className={styles.paragraph}>
          5.8. Запрещается размещать объявления, наpyшающие действyющее
          законодательство РФ и международное законодательство.
        </p>
        <p className={styles.paragraph}>
          5.9. Требования к оформлению вакансии:
        </p>
        <p className={styles.paragraph}>
          5.9.1. Одна вакансия должна содержать информацию только об одной
          предлагаемой работодателем должности (не допускается перечисление
          нескольких позиций в заголовке одного объявления о вакансии);
        </p>
        <p className={styles.paragraph}>
          5.9.2. Каждая вакансия должна быть размещена в тематическом разделе
          рубрикатора;
        </p>
        <p className={styles.paragraph}>
          5.9.3. Текст вакансии должен быть составлен на русском или английском
          языке;
        </p>
        <p className={styles.paragraph}>
          5.9.4. Заголовок вакансии должен содержать название должности в
          единственном числе, именительном падеже;
        </p>
        <p className={styles.paragraph}>
          5.9.5. Контакты работодателя должны быть указаны в специальных полях;
        </p>
        <p className={styles.paragraph}>
          5.9.6. Запрещено размещение вакансий:
        </p>
        <p className={styles.paragraph}>
          5.9.6.1. Не являющихся предложением работы;
        </p>
        <p className={styles.paragraph}>
          5.9.6.2. Содержащих заведомо ложную информацию;
        </p>
        <p className={styles.paragraph}>
          5.9.6.3. Содержащих нецензурные выражения;
        </p>
        <p className={styles.paragraph}>
          5.9.6.4. Предлагающих совершить звонок на платную телефонную линию или
          перейти на какой-либо сайт для последующей записи на собеседование;
        </p>
        <p className={styles.paragraph}>
          5.9.6.5. Предлагающих отправить SMS на короткий номер;
        </p>
        <p className={styles.paragraph}>
          5.9.6.6. Предлагающих предварительно отправить копии документов,
          удостоверяющих личность;
        </p>
        <p className={styles.paragraph}>
          5.9.6.7. Требующих внесения денежных средств в пользу работодателя или
          обязательного заключения договора с НПФ;
        </p>
        <p className={styles.paragraph}>
          5.9.6.8. Содержащих рекламу товаров, услуг или сайтов в любой форме;
        </p>
        <p className={styles.paragraph}>
          5.9.6.9. Предлагающих "спонсорские" схемы заработка или участие в
          "пирамидах" и прочих организациях, заработок в которых подразумевается
          только путем получения процентов с продаж или привлечения новых
          "сотрудников", а также связанные с сетевым маркетингом (MLM),
          презентацией продукции на дому, обработкой электронной почты, продажей
          товаров по каталогам, сбором дисков/ручек/фонариков, распространением
          реферальных ссылок, косметики, БАДов, книг, туристических путевок.
          Работодателю, разместившему подобные вакансии, может будет ограничен
          доступ к Сайту;
        </p>
        <p className={styles.paragraph}>
          5.9.6.10. В заголовке которых употребляются слова "срочно требуется",
          "на работу приглашается", вопросительные или восклицательные знаки, а
          также другие символы (например, "звездочки" - ***).
        </p>
        <p className={styles.paragraph}>
          5.9.7. Допускается размещение не более 30 схожих вакансий для каждого
          работодателя.
        </p>
        <p className={styles.paragraph}>
          5.9.8. Дата вакансии может быть обновлена для поднятия объявления в
          результатах поисковой выдачи - не чаще одного раза в 12 часов.
        </p>
        <p className={styles.paragraph}>
          5.9.9. Администрация оставляет за собой право отказать в размещении
          информации на Сайте.
        </p>
        <p className={styles.paragraph}>
          5.10. Требования к оформлению резюме:
        </p>
        <p className={styles.paragraph}>
          5.10.1. Одно резюме должно содержать информацию только об одной
          должности, на которую претендует соискатель (не допускается
          перечисление нескольких позиций в заголовке одного резюме);
        </p>
        <p className={styles.paragraph}>
          5.10.2. Каждое резюме должно быть размещено в тематическом разделе
          рубрикатора;
        </p>
        <p className={styles.paragraph}>
          5.10.3. Текст резюме должен быть составлен на русском или английском
          языке;
        </p>
        <p className={styles.paragraph}>
          5.10.4. Заголовок резюме должен содержать название должности в
          единственном числе, именительном падеже;
        </p>
        <p className={styles.paragraph}>
          5.10.5. Контакты соискателя должны быть указаны в специальных полях;
        </p>
        <p className={styles.paragraph}>
          5.10.6. Запрещено размещение резюме:{' '}
        </p>
        <p className={styles.paragraph}>5.10.6.1. Не являющихся таковыми;</p>
        <p className={styles.paragraph}>
          5.10.6.2. Содержащих заведомо ложную информацию;
        </p>
        <p className={styles.paragraph}>
          5.10.6.3. Содержащих нецензурные выражения;
        </p>
        <p className={styles.paragraph}>
          5.10.6.4. Содержащих рекламу товаров, услуг или сайтов в любой форме;
        </p>
        <p className={styles.paragraph}>
          5.10.6.5. Предлагающих "спонсорские" схемы заработка или участие в
          "пирамидах" и прочих организациях, заработок в которых подразумевается
          только путем получения процентов с продаж или привлечения новых
          "сотрудников", а также связанные с сетевым маркетингом (MLM),
          презентацией продукции на дому, обработкой электронной почты, продажей
          товаров по каталогам, сбором дисков/ручек/фонариков, распространением
          реферальных ссылок, косметики, БАДов, оздоровительных приборов, книг,
          туристических путевок;
        </p>
        <p className={styles.paragraph}>
          5.10.6.6. В заголовке которых употребляются слова "срочно",
          вопросительные или восклицательные знаки, а также другие символы
          (например, "звездочки" - ***).
        </p>
        <p className={styles.paragraph}>
          5.10.7. Допускается размещение до 30 резюме для каждого соискателя.
        </p>
        <p className={styles.paragraph}>
          5.10.8. Дата резюме может быть обновлена для поднятия объявления в
          результатах поисковой выдачи - не чаще одного раза в 6 часов.
        </p>
        <p className={styles.paragraph}>
          5.10.9. Администрация оставляет за собой право отказать в размещении
          информации на Сайте.
        </p>
        <h2 className={`${styles.paragraph} ${styles.paragraph_title}`}>
          6. Использование материалов Сайта
        </h2>
        <p className={styles.paragraph}>
          6.1. Каждый Зарегистрированный пользователь отвечает за информацию,
          размещаемую от его имени, и за последствия этого размещения.
        </p>
        <p className={styles.paragraph}>
          6.2. Не допускается использование скриптов, роботов и других
          программных средств для считывания, копирования, размещения информации
          на Сайте.
        </p>
        <p className={styles.paragraph}>
          6.3. Поскольку идентификация Пользователей затруднена по техническим
          причинам, Исполнитель не отвечает за то, что Зарегистрированные
          пользователи являются действительно теми людьми, за кого себя выдают,
          и не несет ответственности за возможный ущерб, причиненный
          работодателям, соискателям или другим лицам по этой причине.
        </p>
        <p className={styles.paragraph}>
          6.4. Пользователь, размещая свои персональные данные на Сайте
          Исполнителя, осознает и принимает все возможные риски, связанные с
          возможным использованием его персональных данных широким кругом
          Пользователей сайта Исполнителя.
        </p>
        <p className={styles.paragraph}>
          6.5. Если Пользователь сайта сохраняет Резюме Соискателя в своей
          собственной базе данных вне Сайта, то ответственность за это несет
          Пользователь сайта в рамках Федерального закона от 27.07.2006 г.
          №152-ФЗ «О персональных данных», как оператор персональных данных.
        </p>
        <p className={styles.paragraph}>
          6.6. Используя любым способом Сайт Вы тем самым принимаете условия
          настоящего Соглашения. Если Вы не принимаете условий настоящего
          Соглашения, Вам следует немедленно отказаться от использования Сайта.
        </p>
        <p className={styles.paragraph}>
          6.7. Логотип, название, элементы дизайна, оформления и общий внешний
          вид являются собственностью Исполнителя, и их использование запрещено.
        </p>
        <h2 className={`${styles.paragraph} ${styles.paragraph_title}`}>
          7. Заключительные положения
        </h2>
        <p className={styles.paragraph}>
          7.1. Настоящее Соглашение действует с момента его акцепта
          Пользователем.
        </p>
        <p className={styles.paragraph}>
          7.2. Исполнитель вправе в любое время по своему усмотрению и без
          предварительного согласования с Пользователем вносить изменения в
          настоящее Соглашение. В таком случае изменения и дополнения вступают в
          силу с момента их опубликования на Сайте.
        </p>
        <p className={styles.paragraph}>
          7.3. Использование Пользователем Сайта после любых изменений
          настоящего Соглашения означает согласие Пользователя с такими
          изменениями.
        </p>
        <p className={styles.paragraph}>
          7.4. Пользователь обязуется прекратить использование Сайта, если не
          согласен соблюдать настоящее Соглашение.
        </p>
        <p className={styles.paragraph}>
          7.5. Исполнитель вправе в любое время, в том числе в случае нарушения
          Пользователем условий настоящего Соглашения, расторгнуть настоящее
          Соглашение в одностороннем порядке без какого-либо предварительного
          уведомления Пользователя об этом. В случае расторжения настоящего
          Соглашения Исполнитель удаляет Учетную информацию Пользователя вместе
          со связанными с ней материалами.
        </p>
      </section>
    </div>
  );
};

export default Agreement;