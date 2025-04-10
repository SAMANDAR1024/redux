import { Button, Drawer, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { update } from "../my-store/CounterSlice";
import { TodoType } from "../my-store/types";

function EditTodos({
  onCloce,
  todo,
}: {
  onCloce: () => void;
  todo?: TodoType;
}) {
  const dispatch = useDispatch();
  return (
    <Drawer
      open={!!todo}
      onClose={() => {
        onCloce();
      }}
      title="Todo ni o'zgartirish"
    >
      {todo && (
        <Form
          onFinish={(values) => {
            dispatch(
              update({
                id: todo?.id,
                ...values,
              })
            );
            onCloce();
          }}
          initialValues={todo}
          layout="vertical"
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input placeholder="Yangi todo matnini kiriting..." />
          </Form.Item>
          <Form.Item>
            <Button type="primary">O'zgartirish</Button>
          </Form.Item>
        </Form>
      )}
    </Drawer>
  );
}

export default EditTodos;
