import React from 'react';

import './styles.css';

import screencasts from '../data/screencasts.json';
import List from './list';
import Filter from './filter';
import Screencast from './screencast';

export default function App() {
  function filterScreencasts(query, screencasts) {
    return screencasts.filter(
      (screencast) =>
        screencast.title.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  return (
    <Filter
      placeholder='Type to filter the screencasts'
      render={query => <List
        items={filterScreencasts(query, screencasts)}
        id='ext_id'
        render={(screencast) => (
          <Screencast 
            ext_id={screencast.ext_id} 
            title={screencast.title} 
            />
        )}
      />}
    />
  );
}
