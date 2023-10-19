import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { activateUser } from "./api";
import { Alert } from "@/shared/components/Alert";
import { Spinner } from "@/shared/components/Spinner";

export function Activation() {
  const { token } = useParams();
  const [apiProgress, setApiProgress] = useState(true);
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    // console.log('use effect...')

    //Aktivasyon sirasinda kullaniciya uygulanacak islemler
    async function activate() {
      //Kullaniciya bekledigine dair birsey göstermek icin spinner ac
      setApiProgress(true);
      try {
        //Dogrulama basarili ise successMessage göster
        const response = await activateUser(token);
        setSuccessMessage(response.data.message);
      } catch (axiosError) {
        // Dogrulama basarisiz ise errorMessage göster
        setErrorMessage(axiosError.response.data.message);
      } finally {
        //sonunda spinneri kapat
        setApiProgress(false);
      }
    }
    activate();
  }, []); //Array bos verilirse sadece bir kez calisir

  return (
    <>
      {apiProgress && (
        <Alert styleType="secondary" center>
          <Spinner />
        </Alert>
      )}
      {successMessage && <Alert>{successMessage}</Alert>}
      {errorMessage && <Alert styleType="danger">{errorMessage}</Alert>}
    </>
  );
}
