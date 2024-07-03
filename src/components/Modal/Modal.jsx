import { useState } from "react";
import { Button, Divider, Image, Modal } from "antd";
const CustomModal = ({
  open,
  setOpen,
  save,
  close,
  closeLable = "Cancel",
  saveLabel = "Save",
}) => {
  const [show3, setShow3] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setShow3(true);
        }}
      >
        showModal
      </Button>

      <Modal
        open={show3}
        afterOpenChange={(open) => {
          setShow3(open);
        }}
        onCancel={() => {
          setShow3(false);
        }}
      >
        <Image
          width={200}
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        />
        <Divider />
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <Image
            width={200}
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
          <Image.PreviewGroup
            width={200}
            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
          />
        </Image.PreviewGroup>
      </Modal>
    </>
  );
};
export default CustomModal;
