import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import "./style.scss";

const AddData = props => {
  const { open, handleClose } = props;
  const [inputName, setInputName] = useState("");
  const [inputCalories, setInputCalories] = useState("");
  const [inputFat, setInputFat] = useState("");
  const [inputCarbs, setInputCarbs] = useState("");
  const [inputProtein, setInputProtein] = useState("");
  function handleOnPressEnter(e) {
    if (e.key === "Enter") {
      console.log(inputName, inputCalories, inputCarbs, inputFat, inputProtein)
      handleClose();
    }
  }

  function handleAdd(e) {
    console.log(inputName, inputCalories, inputCarbs, inputFat, inputProtein);
    handleClose();
  }

  const FormAdd = () => {
    return (
      <div className="add-form-page">
        <form className={"add-form"} noValidate id="addForm">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            className="value-input"
            value={inputName}
            onInput={e => setInputName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="calories"
            label="Calories"
            name="calories"
            autoComplete="calories"
            className="value-input"
            value={inputCalories}
            onInput={e => setInputCalories(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fat"
            label="Fat (g)"
            name="fat"
            autoComplete="fat"
            className="value-input"
            value={inputFat}
            onInput={e => setInputFat(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="carbs"
            label="Carbs (g)"
            name="carbs"
            autoComplete="carbs"
            className="value-input"
            value={inputCarbs}
            onInput={e => setInputCarbs(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="protein"
            label="Protein (g)"
            name="protein"
            autoComplete="protein"
            className="value-input"
            value={inputProtein}
            onInput={e => setInputProtein(e.target.value)}
            onKeyPress={handleOnPressEnter}
          />
        </form>
      </div>
    );
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle
          id="form-dialog-title"
          style={{ color: "#3f51b5", fontWeight: 600 }}
        >
          Add Product
        </DialogTitle>
        <DialogContent>{FormAdd()}</DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{ backgroundColor: "#282C34", color: "white" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleAdd}
            style={{ backgroundColor: "#3f51b5", color: "white" }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
AddData.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};
export default AddData;
