import { useState } from "react";

export const AddProject = (GralInfoComponent) => {
  const [title,setTitle] = useState("");
  const [address,setAddress] = useState("");
  const [description,setDescription] = useState("");
  const [list,setList] = useState([]);
  function handleSubmite(e) {
    e.preventDefault()
    const newObject ={
      title,
      address,
      description
    }
    console.log(list)
    const NewList = [...list, newObject]
    console.log(NewList)
  }

  return (
    <>
      <h1>Add New Project</h1>
      <form onSubmit={handleSubmite}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Project Name
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            placeholder="Example: Description of the project"
            onChange={(e)=>{setTitle(e.target.value)}}
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            value={address}
            placeholder="Address Building"
            onChange={(e)=>{setAddress(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Project Description Example
          </label>
          <textarea
            class="form-control"
            value={description}
            rows="10"
            onChange={(e)=>{setDescription(e.target.value)}}
          ></textarea>
        </div>
        <button>AGREGAR</button>
      </form>



      {/*TEMPLANTES:*/}
      <div
        class="btn-group"
        role="group"
        aria-label="Vertical radio toggle button group"
      >
        <input
          type="radio"
          class="btn-check"
          name="vbtn-radio"
          id="vbtn-radio1"
          autocomplete="off"
          checked
        />

        <label class="btn btn-outline-danger" for="vbtn-radio1">
          Template 1
        </label>
        <input
          type="radio"
          class="btn-check"
          name="vbtn-radio"
          id="vbtn-radio2"
          autocomplete="off"
        />
        <label class="btn btn-outline-danger" for="vbtn-radio2">
          Template 2
        </label>
        <input
          type="radio"
          class="btn-check"
          name="vbtn-radio"
          id="vbtn-radio3"
          autocomplete="off"
        />
        <label class="btn btn-outline-danger" for="vbtn-radio3">
          Template 3
        </label>
      </div>
    </>
  );
};
