import React from 'react';

function checkUserRole() {
  return 'user';
}

export default function Layout({ user, admin }) {
  const role = checkUserRole();
  return <div>{role === 'admin' ? admin : user}</div>;
}
