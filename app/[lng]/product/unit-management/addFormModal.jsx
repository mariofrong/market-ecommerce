'use client';

import { Button, Form, Input, Modal, Row, Space, Typography } from 'antd';
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';

const AddFormModal = ({ open, setOpen, onSubmit }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      open={open}
      onCancel={() => setOpen('')}
      footer={false}
      centered
      width={318}
    >
      <Form layout="vertical" id="addSlide" form={form} onFinish={onSubmit}>
        <Space direction="vertical" className="flex">
          <Typography className="text-xl font-bold flex justify-center">
            เพิ่ม / แก้ไข
          </Typography>
          <Form.Item label={<Trans>name</Trans>} name="name">
            <Input />
          </Form.Item>
          <Form.Item label={<Trans>amount</Trans>} name="name">
            <Input />
          </Form.Item>
        </Space>
        <Row justify="space-between">
          <Button
            type="primary"
            onClick={() => setOpen('')}
            className="bg-[#1E1E1E] w-[115px]"
          >
            ปิด
          </Button>
          <Button type="primary" className="bg-[#00B247] w-[115px]">
            บันทึก
          </Button>
        </Row>
      </Form>
    </Modal>
  );
};

export default AddFormModal;

AddFormModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  onSubmit: PropTypes.func,
};