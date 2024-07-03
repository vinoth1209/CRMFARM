import { useRef, useState } from "react";
// import "./index.css";
import { Button, Modal, Typography } from "antd";
import Draggable from "react-draggable";

const DragableModal = ({
  open,
  setOpen,
  content,
  handleCancel,
  handleOk,
  title = "Overview",
  footer,
  width = 800,
  hight,
}) => {
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = useRef(null);

  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };
  return (
    <>
      <Modal
        width={width}
        height={hight}
        title={
          <Typography.Title
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            onFocus={() => {}}
            onBlur={() => {}}
            className="-translate-y-2 py-2 border-b-[1px]"
            style={{ fontSize: 16, width: "100%", cursor: "move" }}
          >
            {title}
          </Typography.Title>
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            nodeRef={draggleRef}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
        footer={footer}
      >
        {content}
      </Modal>
    </>
  );
};
export default DragableModal;
