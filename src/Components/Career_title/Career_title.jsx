import {} from "react";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import "./Career_title.css";
import Des from "./Des/Des";
import Apply_form from "./Form/Apply_form";
function Career_title() {
  const params = useParams();
  return (
    <section className="career_title">
      <div className="container">
        <div className="career_title_content">
          <div className="params_title">
            <Link to="/career">
              <BsArrowLeftShort className="f_s_30" />
            </Link>
            <h2 className="mt-4">{params.title}</h2>
          </div>
        </div>
        <div className="">
          <Des />
          <Apply_form />
        </div>
      </div>
    </section>
  );
}

export default Career_title;
