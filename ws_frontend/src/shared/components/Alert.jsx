export function Alert(props) {
  const { children, styleType,center } = props;

  return (

    // Alert tipi belirtilmemisse ya da basarili ise success olarak göster, 3. parametre center secili ise yaziyi ortaya alir
     <div className={`alert alert-${styleType || "success"} ${center ? "text-center" : ''}`}>{children}</div>
  )
}
