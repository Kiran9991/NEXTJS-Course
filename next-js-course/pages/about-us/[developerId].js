// our-domain.com/about-us/developer
import { useEffect, useState } from 'react';

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

function developerPage() {
  const [title, setTitle] = useState(`Developer doesn't exist`);
  useEffect(() => {
    let urlId = Number(location.pathname[location.pathname.length-1]);
    for(let i=0; i<details.length; i++) {
      if(details[i].id === urlId) {
        setTitle(details[i].name + ' ' + details[i].role);
      }
    }
  },[title])
  return <h1>{title}</h1>;
}

export default developerPage;
