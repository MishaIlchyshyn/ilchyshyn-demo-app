import React from "react";
import { Icon } from "../../Icon";

import s from "./SwitchSave.module.scss";

const SwitchSaveComponent = ({
  saved,
  id,
  saveProduct,
  unsaveProduct,
  saveLoading,
  saveError,
}) => {
  return (
    <div>
      {saved ? (
        <div className={s.saved} onClick={() => unsaveProduct(id)}>
          <Icon name="unsaved" size="18px" className={s.icon} />
        </div>
      ) : (
        <div className={s.saved} onClick={() => saveProduct(id)}>
          <Icon name="saved" size="18px" className={s.icon} />
        </div>
      )}
    </div>
  );
};

export default SwitchSaveComponent;
