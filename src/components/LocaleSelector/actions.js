const CHANGE_LOCALE = 'localeSelector/CHANGE_LOCALE';
const changeLocale = locale => ({
  type: CHANGE_LOCALE,
  payload: locale,
});

export {
  changeLocale, CHANGE_LOCALE,
};
