import { useState } from 'react';

export type MobileView = 'list' | 'form';

export const useMobileView = () => {
  const [mobileView, setMobileView] = useState<MobileView>('list');

  const showForm = () => setMobileView('form');
  const showList = () => setMobileView('list');
  const toggleView = () => setMobileView(prev => prev === 'list' ? 'form' : 'list');

  return {
    mobileView,
    isFormView: mobileView === 'form',
    isListView: mobileView === 'list',
    showForm,
    showList,
    toggleView,
  };
};

