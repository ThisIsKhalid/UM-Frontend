"use client";

import FormInput from "@/components/forms/FormInput";
import Form from "@/components/forms/Forms";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { SubmitHandler } from "react-hook-form";
import loginImage from "../../assets/login-cuate.svg";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();

  const onsubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      // console.log(res)
      storeUserInfo({ accessToken: res?.data?.accessToken });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} alt="login image" width={500} />
      </Col>

      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0",
          }}
        >
          First login your account
        </h1>
        <div>
          <Form submitHandler={onsubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div
              style={{
                margin: "15px 0",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
