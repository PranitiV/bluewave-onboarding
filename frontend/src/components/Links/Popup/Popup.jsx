import { Button, Modal } from "@mui/material";
import { useContext } from "react";
import { HelperLinkContext } from "../../../services/linksProvider";
import s from "./Popup.module.scss";

const Popup = () => {
  const {
    isPopupOpen,
    setIsPopupOpen,
    setLinks,
    itemToDelete,
    links,
    setDeletedLinks,
    setItemToDelete,
  } = useContext(HelperLinkContext);

  const handleClosePopup = async () => {
    setIsPopupOpen(false);
    setLinks(
      links.filter(
        (it) => it.title !== itemToDelete.title && it.url !== itemToDelete.url
      )
    );
    setDeletedLinks((prev) => [...prev, itemToDelete]);
    setItemToDelete(null);
  };

  return (
    <Modal
      open={isPopupOpen}
      onClose={() => setIsPopupOpen(false)}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <div className={s.modal}>
        <h2 className={s.modal__title}>Remove this link?</h2>
        <p className={s.modal__desc}>
          Once deleted, this link won’t be visible in the helper.
        </p>
        <div className={s["modal__btn--container"]}>
          <Button
            variant='text'
            style={{
              marginRight: "30px",
              fontSize: "0.813rem",
              lineHeight: "24px",
              color: "#344054",
            }}
            onClick={() => setPopupOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant='contained'
            color='error'
            disableElevation
            onClick={handleClosePopup}
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Popup;
