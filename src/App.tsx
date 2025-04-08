import { DeleteOutlined } from '@ant-design/icons';
import { Button, Form, Input, } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addTodo,
  ochirish,
  RootState
} from "./my-store/My-store";

function App() {
  const [input, setInput] = useState("");
  // const ism = useSelector((state: RootState) => state.counter.ism);
  // const familya = useSelector((state: RootState) => state.counter.familya);
  // const value = useSelector((state: RootState) => state.counter.value);
  const todo = useSelector((state: RootState) => state.counter.todos);
  const ochir = (id: number) => {
    dispatch(ochirish(id));
  };
  const dispatch = useDispatch();
  // const random = Math.floor(Math.random() * 1000);
  return (
    <>
      <div className="flex flex-col gap-2 bg-white text-black p-5 rounded-xl ">
        <h1 className="text-3xl font-bold mb-5">TODO LIST</h1>
        {/* <div className="flex gap-5 mb-5">
          <p>{familya}</p>
          <p>{ism}</p>
        </div> */}
        {/* <div className="d flex gap-5 items-center pb-5 ">
          <button
            className="bg-red-600"
            onClick={() => {
              dispatch(minus());
            }}
          >
            -10
          </button>
          <p>{value}</p>
          <button
            className="bg-green-500"
            onClick={() => {
              dispatch(add());
            }}
          >
            +10
          </button>
        </div> */}
        {/* <div className="flex flex-col gap-4 items-center">
          <button
            onClick={() => {
              dispatch(asligaQaytarish());
            }}
          >
            ochirish
          </button>
          <button
            onClick={() => {
              dispatch(ozgartir(random));
            }}
          >
            Maxsus Ozgartirish {random}
          </button>
        </div> */}
        <Form className="flex gap-2  items-center">
          {" "}
          <Form.Item>
            <Input
              className="rounded-xl  w-96   placeholder-gray-300 focus:!ring-2 focus:!ring-blue-500 transition-all duration-300"
              // style={{padding:9, }}
              value={input}
              placeholder="Malumot yozing...."
              type="text"
              onChange={(e) => {
                setInput(e.currentTarget.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="text-sm text-white"
              onClick={() => {
                if (input.trim()==="") {
                  return
             
                }
                setInput("");
                dispatch(addTodo(input));
              }}
            >
              Add Todo
            </Button>
          </Form.Item>
        </Form>
        <div>
          {todo.map((item, i) => {
            return (
              <div className="my-2" key={item.id}>
                <div className="bg-black text-white rounded-xl flex gap-2 p-2  justify-between ">
                  <div className="flex items-center gap-2">
                    <p>{i + 1}.</p>
                    <p>{item.name}</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Button style={{backgroundColor:"red"}} danger onClick={() => ochir(item.id)}><DeleteOutlined /></Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
