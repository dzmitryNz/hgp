import React from 'react';
import { useSelector } from 'react-redux';
import Export from './components/export/Export';
import Family from './components/family/Family';
import Header from './components/header/header';
import './components/index.css';
import Ingredients from './components/ingredients/Ingredients';
import Menu from './components/menu/menu';
import Planner from './components/planner/Planner';
import Receipts from './components/receipts/ReceiptsFull';
import Storages from './components/storages/Storages';

export default function App() {
  const mode = useSelector((st) => st.mode);

  return (
    <>
      <Header />
      <Menu />
      {mode === 'family' ? <Family /> : ''}
      {mode === 'planner' ? <Planner /> : ''}
      {mode === 'storages' ? <Storages /> : ''}
      {mode === 'receipts' ? <Receipts /> : ''}
      {mode === 'ingredients' ? <Ingredients /> : ''}
      {mode === 'export' ? <Export /> : ''}

    </>
  );
}
