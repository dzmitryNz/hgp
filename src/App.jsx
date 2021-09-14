import React from 'react';
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
  return (
    <>
      <Header />
      <Menu />
      <Family />
      <Planner />
      <Storages />
      <Receipts />
      <Ingredients />
      <Export />
    </>
  );
}
