const CHANGE_LOCALE = 'app/CHANGE_LOCALE';
const changeLocale = locale => ({
  type: CHANGE_LOCALE,
  payload: locale,
});

export {
  changeLocale, CHANGE_LOCALE,
};
