import React from "react";
import { Icon } from "../../Icon";

import s from "./SwitchSave.module.scss";

const SwitchSaveComponent = ({ saved, id, click, state }) => {
  console.log(state);

  return (
    <div className={s.saved} onClick={() => click(id)}>
      {saved ? (
        <Icon name="unsaved" size="18px" className={s.icon} />
      ) : (
        <Icon name="saved" size="18px" className={s.icon} />
      )}
    </div>
  );
};

export default SwitchSaveComponent;
