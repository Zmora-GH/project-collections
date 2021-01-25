import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {

    en: {
        translation: {
            'lang': "Language",

            'profile_collections': 'Collections',
            'profile_email': 'Email',
            'profile_joined': 'Joined',
            'profile_status': 'Status',
            'profile_colormode': 'Colormode',
            'profile_table_name': 'Name ',
            'profile_table_small': 'Click for view items',
            'profile_image_url': 'Image URL',
            'profile_theme': 'Theme',
            'profile_items': 'Items',
            'profile_created': 'Created',
            'profile_alive': 'ALIVE',
            'profile_banned': 'BANNED',
            'profile_create': 'Create new collection',

            'main_home': 'Home',
            'main_admin': 'Admin Panel',
            'main_profile': 'My Profile',
            'main_logout': 'Logout',
            'main_search': 'Search',
            'main_welcom_to': 'Welcom to ',
            'main_welcom_small': 'This is a small message for visitors about this site',
            'main_tags': 'Tags',
            'main_last': 'Last added items',
            'main_largest': 'Largest collections',

            'search_message': 'All items with',
            'search_message_empty': "There's nothing here ¯\\_(ツ)_/¯ ",

            'colls_button_edit': 'Edit Collection',
            'colls_button_add': 'Add Item',

            'colls_prev_total': 'Total Items',
            'colls_prev_theme': 'Theme',

            'item': 'Item',
            'item_comments': 'Comments',
            'item_comments_submit': 'Submit',
            'item_comments_placeholder': 'Your comments ...',


        }
    },

    ru: {
        translation: {
            'lang': "Язык",

            'profile_collections': 'Коллекции',
            'profile_email': 'Почта',
            'profile_joined': 'Дата регистрации',
            'profile_status': 'Статус',
            'profile_colormode': 'Цветовая схема',
            'profile_table_name': 'Название ',
            'profile_table_small': 'Нажмите, что-бы увидеть предметы',
            'profile_image_url': 'URL Изображения',
            'profile_theme': 'Тема',
            'profile_items': 'Предметы',
            'profile_created': 'Создана',
            'profile_alive': 'ЖИВ',
            'profile_banned': 'ЗАБАНЕН',
            'profile_create': 'Создать новую коллекцию',

            'main_home': 'Главная',
            'main_admin': 'Админка ',
            'main_profile': 'Мой профиль',
            'main_logout': 'Выйти',
            'main_search': 'Поиск',
            'main_welcom_to': 'Добро пожаловать на',
            'main_welcom_small': 'Это небольшое сообщение для посетителей об этом сайте',
            'main_tags': 'Тэги',
            'main_last': 'Недавно добавленные',
            'main_largest': 'Крупнейшие коллекции',

            'search_message': 'Найдено по',
            'search_message_empty': 'Сорян, здесь пусто ¯\\_(ツ)_/¯ ',

            'colls_button_edit': 'Редактировать',
            'colls_button_add': 'Добавить',

            'colls_prev_total': 'Всего предметов',
            'colls_prev_theme': 'Тема',

            'item': 'Предмет',
            'item_comments': 'Комментарии',
            'item_comments_submit': 'Отправить',
            'item_comments_placeholder': 'Ваш комментарий ...',


        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem('langData') || "en",
    keySeparator: false,
    interpolation: { escapeValue: false }
});

export default i18n;
