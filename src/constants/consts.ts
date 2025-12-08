import { SelectOption } from '@/types/types';

export const petFields = [
  { key: 'type', label: 'Вид' },
  { key: 'age', label: 'Возраст' },
  { key: 'gender', label: 'Пол' },
  { key: 'color', label: 'Окрас' },
  { key: 'character', label: 'Характер' },
  { key: 'toilet', label: 'Туалет' },
  { key: 'feeding', label: 'Кормление' },
  { key: 'foundAt', label: 'Дата нахождения' },
  //   { key: 'history', label: 'История' },
  { key: 'shelter', label: 'Приют/передержка' },
  { key: 'contactPhone', label: 'Контакты' },
  // { key: 'linkToPlatform', label: 'Источник', isLink: true },
  { key: 'medicalNeeds', label: 'Примечания:' },
];

export const LIGHT = 'light';
export const DARK = 'dark';

// Forms //

export const GENDER_OPTIONS_EN: SelectOption[] = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
];
export const GENDER_OPTIONS_RU: SelectOption[] = [
  { label: 'Самец', value: 'male' },
  { label: 'Самка', value: 'female' },
];

export const FUR_TYPE_OPTIONS_EN: SelectOption[] = [
  { label: 'Short', value: 'short' },
  { label: 'Long', value: 'long' },
  { label: 'Medium', value: 'medium' },
  { label: 'Hairless', value: 'hairless' },
];
export const FUR_TYPE_OPTIONS_RU: SelectOption[] = [
  { label: 'Короткая', value: 'short' },
  { label: 'Длинная', value: 'long' },
  { label: 'Средняя', value: 'medium' },
  { label: 'Без шерсти', value: 'hairless' },
];
