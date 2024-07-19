import React, { useContext, useState } from "react";
import InputField from "./InputField";
import ColorSelection from "./ColorSelection";
import Button from "./Button";
import "../styles/CreateCreativeDrawer.css";
import CreativeContext from "../context/creativeContext";

const initialFormState = {
  title: "",
  subtitle: "",
  color: "",
};

const CreateCreativeDrawer = () => {
  const [formData, setFormData] = useState(initialFormState);
  const {
    setOpenDrawer,
    openDrawer,
    creativeList,
    updateCreativeList,
    colors,
  } = useContext(CreativeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenDrawer(false);
    // collected form data goes into the creativeList array, and we are just speading both like this
    const updatedCreative = [...creativeList, { ...formData }];
    updateCreativeList(updatedCreative);
    setFormData(initialFormState);
  };

  const handleChange = (e) => {
    // changing the formdata on every keystroke pressed in the inputss
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectColor = (e) => {
    // when the user clicks on the color pills in the creative creation drawer, this is used to pass it to the formData
    setFormData({
      ...formData,
      color: e.target.getAttribute("data-color"),
    });
  };

  const { title, subtitle, color } = formData;

  const buttonDisabled = !title || !subtitle || !color;

  const handleClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div
      className={`create-creative-wrapper ${
        !openDrawer ? "close-drawer" : "open-drawer"
      }`}
    >
      <span className="close-btn" onClick={handleClose}>
        <img src="/cross.svg" alt="Cross Icon" height={27} width={27} />
      </span>
      <form onSubmit={handleSubmit}>
        <div className="heading-1">Creative Creation</div>
        <InputField
          label={"Title"}
          name="title"
          value={title}
          placeholder={"Enter the Title"}
          handleChange={handleChange}
        />
        <InputField
          label={"Subtitle"}
          name="subtitle"
          value={subtitle}
          placeholder={"Enter the Sub Title"}
          handleChange={handleChange}
        />
        <div className="mb-150">
          <div className="heading-2">
            Background Color
            <div onClick={selectColor} className="d-flex gap-10 mt-10">
              {colors.map((color, index) => {
                return (
                  <ColorSelection
                    key={`${index}-${color}`}
                    color={color}
                    selectedColor={formData.color}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <Button label="Done" type="submit" disabled={buttonDisabled} />
      </form>
    </div>
  );
};

export default CreateCreativeDrawer;
