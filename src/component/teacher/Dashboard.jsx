import React from 'react';
import Menu from './Menu';

function Dashboard() {
  const tab = [
    { name: 'ClassRoom', url: '/classrooms', id: 2 },
    { name: 'Lesson', url: '/lesson', id: 1 },
    { name: 'Contenu', url: '/contenu', id: 2 },
  ];
  return (
    <div>
      <Menu menus={tab} />
      <div>
        <h3>je suis en dessous du menu</h3>
      </div>
    </div>
  );
}

export default Dashboard;
