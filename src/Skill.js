import Card from "./Card";
import "./Skill.css";
import java from "./java.svg";
import mysql from "./MySQL.svg";
import html from "./html.jpg";
import react from "./react.svg";
const Skill = () => {
  var javap =
    "Java is a programming language and computing platform first released by Sun Microsystems in 1995.";
  var mysqlp =
    "MySQL is a relational database management system (RDBMS) developed by Oracle that is based on structured query language (SQL).";
  var htmlp =
    "The essential components of every website. Love creating UI-designs using Vanilla CSS from scratch.";
  var reactp =
    "React is an open-source, front end, JavaScript library for building user interfaces or UI components.";
  return (
    <div className="skill_container">
      <div className="skill_head">
        <h3>Skills</h3>
      </div>
      <div className="container">
        <Card image={java} heading="java" para={javap} />

        <Card image={mysql} heading="MySQL" para={mysqlp} />
        <Card image={html} heading="html,css & js" para={htmlp} />
        <Card image={react} heading="react js" para={reactp} />
      </div>
    </div>
  );
};

export default Skill;
