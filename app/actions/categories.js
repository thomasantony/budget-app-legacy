import makeActionCreator from './makeActionCreator';

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

export const LOAD_DUMMY_CATEGORIES = 'LOAD_DUMMY_CATEGORIES';
export const loadDummyCategories = makeActionCreator(LOAD_DUMMY_CATEGORIES);

export const addCategory = makeActionCreator(ADD_CATEGORY, 'payload')
export const updateCategory = makeActionCreator(UPDATE_CATEGORY, 'id','payload')
export const deleteCategory = makeActionCreator(DELETE_CATEGORY, 'id')
