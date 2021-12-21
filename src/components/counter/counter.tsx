import React, { useState } from "react";
import { Count } from "../count/count";

import { TextArea } from "../textarea/textarea";

export const Counter: React.FC = () => {
  const [text, setText] = useState<string>("");

  return (
    <>
      <Count value={text} />
      <TextArea value={text} onChange={setText} />
    </>
  );
};
