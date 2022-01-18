/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const localProp = JSON.parse(localStorage.getItem('hgp-properties'));
const defaultState = {
  language: 'Ru',
  category: 'Основные блюда',
  theme: 'light_mode',
  mode: 'family',
  langList: ['By', 'En', 'Ru', 'Ua'],
  themesList: ['dark_mode', 'light_mode', 'schedule'],
  familyModes: ['family', 'party'],
  plannerModes: ['plannerWeek', 'plannerDay', 'plannerSurviver'],
  pets: ['cat', 'fish', 'turtle', 'dog', 'parrot'],
  storages: {
    places: ['fridge', 'freezer', 'pantry'],
    newPlaces: ['fridge', 'freezer', 'pantry', 'kitchen0', 'cellar0', 'cellar1'],
    fridge: { tMax: 6, tMin: 1, capacity: 200 },
    freezer: { tMax: -5, tMin: -25, capacity: 160 },
    pantry: { tMax: 25, tMin: 18, capacity: 200 },
    kitchen0: { tMax: 25, tMin: 18, capacity: 250 },
    kitchen1: { tMax: 25, tMin: 18, capacity: 200 },
    cellar0: { tMax: 18, tMin: 10, capacity: 100 },
    cellar1: { tMax: 15, tMin: 5, capacity: 500 },
    storageDef: { tMax: 25, tMin: 15, capacity: 50 },
  },
  family: {
    adults: 2, children: 1, adultsdiet: 1, childrendiet: 1, pets: ['turtle', 'cat'],
  },
  planner: {
    adults: 8, children: 2, adultsdiet: 1, childrendiet: 1, pets: {},
  },
  modes: ['family', 'planner', 'storages', 'receipts', 'ingredients', 'export'],
  view: { langs: false, themes: false, footer: false },
};
const initialState = !localProp ? defaultState : localProp;

function saveState(state) { localStorage.setItem('hgp-properties', JSON.stringify(state)); }

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setView: (state, action) => {
      switch (action.payload) {
        case 'lang':
          state.view.langs = !state.view.langs;
          break;
        case 'theme':
          state.view.themes = !state.view.themes;
          break;
        case 'footer-switcher':
          state.view.footer = !state.view.footer;
          break;

        default:
          break;
      }
      saveState(state);
    },
    setMode: (state, action) => {
      switch (action.payload) {
        case 'family':
          state.mode = 'family';
          break;
        case 'planner':
          state.mode = 'planner';
          break;
        case 'storages':
          state.mode = 'storages';
          break;
        case 'receipts':
          state.mode = 'receipts';
          break;
        case 'ingredients':
          state.mode = 'ingredients';
          break;
        case 'export':
          state.mode = 'export';
          break;

        default:
          break;
      }
      saveState(state);
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      state.view.langs = false;
      saveState(state);
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      state.view.themes = false;
      saveState(state);
    },
    setState: (state, action) => { state = action.payload; saveState(state); },
    setFamily: (state, action) => { state.family = action.payload; saveState(state); },
    setStorages: (state, action) => { state.storages = action.payload; saveState(state); },
    setPlanner: (state, action) => { state.planner = action.payload; saveState(state); },
});

// Action creators are generated for each case reducer function
export const {
  setLanguage,
  setTheme,
  setView,
  setMode,
  setState,
  setFamily,
  setStorages,
  setPlanner,
} = mainSlice.actions;

export default mainSlice.reducer;
