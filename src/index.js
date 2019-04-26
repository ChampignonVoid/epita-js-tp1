import list from "./actions/list";
import add from "./actions/add";
import remove from "./actions/remove";
import update from "./actions/update";

const picturesGridElement = document.getElementById("pictures-grid");
const pictureInputElement = document.getElementById("picture-url-input");
const pictureAddButtonElement = document.getElementById("picture-add-button");
const pictureItemTemplate = document.getElementById("picture-item-template");

const getInputContents = () => pictureInputElement.value;
const clearInputContents = () => (pictureInputElement.value = "");

const refreshGrid = () => {
  // FIXME: use your functions to get all the elements
  const items = list();

  const fragment = document.createDocumentFragment();

  items.forEach(i => {
    const clone = document.importNode(pictureItemTemplate.content, true);

    const imgElement = clone.querySelector(".picture-item-image");

    // FIXME: set the URL from your Picture model.
    imgElement.src = i;

    const deleteButtonElement = clone.querySelector(
      ".picture-item-delete-button"
    );

    // FIXME: use your functions to delete the selected element
    deleteButtonElement.addEventListener("click", () => {
      remove(i);
      refreshGrid();
    });

    const updateButtonElement = clone.querySelector(
      ".picture-item-update-button"
    );
    
    updateButtonElement.addEventListener("click", () => {
      const new_url = prompt()
      if (new_url) {
        update(i, new_url.trim())
        refreshGrid();
      }
    });
    
    fragment.appendChild(clone);
  });

  picturesGridElement.innerHTML = "";
  picturesGridElement.appendChild(fragment);
};

const addPictureHandler = () => {
  const url = getInputContents();
  // FIXME: use your actions functions to add a new picture
  // FIXME: bonus, trim eventual whitespaces and validate content
  const clean_url = url.trim();
  if (clean_url) {
    add(clean_url);
    refreshGrid();
    clearInputContents();
  }
};

refreshGrid();

pictureAddButtonElement.addEventListener("click", () => addPictureHandler());
