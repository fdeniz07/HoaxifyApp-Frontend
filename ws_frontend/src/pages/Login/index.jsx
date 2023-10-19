import React, { useEffect, useState } from "react";
import { Input } from "@/shared/components/Input";
import { useTranslation } from "react-i18next";
import { Alert } from "@/shared/components/Alert";
import { Button } from "@/shared/components/Button";

function Login() {
  //Degiskenler
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [apiProgress, setApiProgress] = useState();
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState();
  const { t } = useTranslation();

  //Verilerin kontrolü ici, eger bossa hata mesajı verir

  useEffect(() => {
    setErrors(function (lastErrors) {
      return {
        ...lastErrors,
        email: undefined,
      };
    });
  }, [email]);

  useEffect(() => {
    setErrors(function (lastErrors) {
      return {
        ...lastErrors,
        password: undefined,
      };
    });
  }, [password]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage();
    setGeneralError();
    setApiProgress(true);

    try {
      //   const response = await signUp({
      //     username,
      //     email,
      //     password,
      //   });
      //   setSuccessMessage(response.data.message);
    } catch (axiosError) {
      // console.log(axiosError);
      //   if (
      //     axiosError.response?.data // Eger backenden gelen responsun icinde data varsa
      //   ) {
      //     //400 hata mesaji iceriyorsa validasyon hatasini göster
      //     if (axiosError.response.data.status === 400) {
      //       setErrors(axiosError.response.data.validationErrors);
      //     } else {
      //       // 400 hatasi yoksa hata mesaji göster
      //       setGeneralError(axiosError.response.data.message); //Backend den gelen hata mesaji
      //     }
      //   } else {
      //     setGeneralError(t("genericError"));
      //   }
    } finally {
      //   setApiProgress(false);
    }
  };

  return (
    <div className="container mt-3">
      <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">
        <form className="card" onSubmit={onSubmit}>
          <div className="text-center card-header">
            <h1>{t("login")}</h1>
          </div>
          <div className="card-body">
            <Input
              id="email"
              label={t("email")}
              error={errors.email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
            />

            <Input
              id="password"
              label={t("password")}
              error={errors.password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            />

            {generalError && (
              <Alert Alert styleType="danger">
                {generalError}
              </Alert>
            )}

            <div className="text-center">
              <Button
                disabled={!email || !password}
                apiProgress={apiProgress}
              >
                {t("login")}
              </Button>

              {/* <button
                className="btn btn-primary w-100"
                disabled={
                  apiProgress || !password || password !== passwordRepeat
                }
              >
                {apiProgress && <Spinner sm />}
                {t("login")}
              </button> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
