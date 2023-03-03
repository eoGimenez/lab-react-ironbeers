import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function NewBeer() {
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: form.name,
        tagline: form.tagline,
        description: form.description,
        first_brewed: form.first_brewed,
        brewers_tips: form.brewers_tips,
        attenuation_level: form.attenuation_level,
        contributed_by: form.contributed_by,
      })
      .then((result) => {
        navigate("/beers");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <form className="row " onSubmit={submitHandler}>
        <div className="col col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="col col-md-6">
          <label htmlFor="tagline" className="form-label">
            Tagline
          </label>
          <input
            type="text"
            className="form-control"
            id="tagline"
            value={form.tagline}
            onChange={(e) => setForm({ ...form, tagline: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
        <div className="col col-6">
          <label htmlFor="first_brewed" className="form-label">
            First Brewed
          </label>
          <input
            type="text"
            className="form-control"
            id="first_brewed"
            value={form.first_brewed}
            onChange={(e) => setForm({ ...form, first_brewed: e.target.value })}
          />
        </div>
        <div className="col col-md-6">
          <label htmlFor="brewers_tips" className="form-label">
            Brewers Tips{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="brewers_tips"
            value={form.brewers_tips}
            onChange={(e) => setForm({ ...form, brewers_tips: e.target.value })}
          />
        </div>
        <div className="col col-md-6">
          <label htmlFor="attenuation_level" className="form-label">
            Attenuation Level{" "}
          </label>
          <input
            type="number"
            className="form-control"
            id="attenuation_level"
            value={form.attenuation_level}
            onChange={(e) =>
              setForm({ ...form, attenuation_level: e.target.value })
            }
          />
        </div>
        <div className="col col-md-6">
          <label htmlFor="contributed_by" className="form-label">
            Contributed By
          </label>
          <input
            type="text"
            className="form-control"
            id="contributed_by"
            form={form.contributed_by}
            onChange={(e) =>
              setForm({ ...form, contributed_by: e.target.value })
            }
          />
        </div>
        <div className="col col-md-6">
          <button type="submit" className="btn btn-primary">
            Create new Beer !
          </button>
        </div>
      </form>
    </>
  );
}
