export const AddProject = () => {
  return (
    <>
      <h1>Add New Project</h1>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Project Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Example: Description of the project"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Address Building"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Project Description Example
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>
      </div>
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
