import React from "react";
import "./Apply_form.css";
function Apply_form() {
  return (
    <div className=" rounded-1 form">
      <form className="form_content py-5 px-2">
        <h2 className="text-center mb-4">Join our team</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mt-3"
        />
        <textarea
          className="form-control mt-3"
          placeholder="Message"
          name="message"
          type="message"
        ></textarea>
        <input
          type="file"
          name="file"
          placeholder="File"
          className="form-control mt-3"
        />

        <p className="mt-3 mute_color">
          Ea diam vero est at gubergren est amet diam et et. Et stet sed labore
          et diam dolores, eirmod sed ipsum sit vero consetetur. Magna vero
          clita eos aliquyam, labore.
        </p>
        <div className="btn_div">
          <button className="button btn btn-outline-primary circle">
            Apply now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Apply_form;
