// our-domain.com/about-us/developer
import { useRouter } from "next/router";

export const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

function developerPage() {
  let title = `Developer doesn't exist`
  const router = useRouter();
  const urlId = router.query.developerId
  for(let i=0; i<details.length; i++) {
    if(Number(urlId) === details[i].id) {
      title = details[i].name + ' '+ details[i].role
    }
  }
  return <h1>{title}</h1>;
}

export default developerPage;
