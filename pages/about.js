import NextLink from "next/link";

function About() {
  //console.log(items);
  return (
    <div className="app">
      <div className="mb-20">
        <NextLink href="/">Главная</NextLink>
      </div>
      <table className="table" style={{width: "100%"}}>
        <tbody>
          <tr>
            <td>Курс на поточну дату</td>
            <td style={{width: "10%", textAlign: "center"}}>
              <a
                href="https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange"
                target="_blank"
              >
                <img
                  alt=""
                  src="https://bank.gov.ua/admin_uploads/article/icon_xml.png"
                  style={{width: "20px", height: "20px"}}
                />
              </a>
            </td>
            <td style={{width: "10%", textAlign: "center"}}>
              <a
                href="https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
                target="_blank"
              >
                <img
                  alt=""
                  src="https://bank.gov.ua/admin_uploads/article/icon_json.png"
                  style={{width: "20px", height: "20px"}}
                />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              Курс на дату (формат файлу Статзвітності #99),&nbsp;дата задається
              у форматі:&nbsp;ddmmyyyy, де dd - день, mm - місяць, yyyy - рік
            </td>
            <td style={{textAlign: "center"}}>
              <a
                href="https://bank.gov.ua/NBU_Exchange/exchange"
                target="_blank"
              >
                <img
                  alt=""
                  src="https://bank.gov.ua/admin_uploads/article/icon_xml.png"
                  style={{width: "20px", height: "20px"}}
                />
              </a>
            </td>
            <td style={{textAlign: "center"}}>
              <a href="https://bank.gov.ua/NBU_Exchange/exchange?json">
                <img
                  alt=""
                  src="https://bank.gov.ua/admin_uploads/article/icon_json.png"
                  style={{width: "20px", height: "20px"}}
                />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              Курс на дату, дата задається у форматі: yyyymmdd, де yyyy - рік,
              mm - місяць, dd - день
            </td>
            <td style={{textAlign: "center"}}>
              <a
                href="https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20200302"
                target="_blank"
              >
                <img
                  alt=""
                  src="https://bank.gov.ua/admin_uploads/article/icon_xml.png"
                  style={{width: "20px", height: "20px"}}
                />
              </a>
            </td>
            <td style={{textAlign: "center"}}>
              <a href="https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20200302&amp;json">
                <img
                  alt=""
                  src="https://bank.gov.ua/admin_uploads/article/icon_json.png"
                  style={{width: "20px", height: "20px"}}
                />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              Курс на дату по валюті (код валюти літерний, регістр значення не
              має)
            </td>
            <td style={{textAlign: "center"}}>
              <a
                href="https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&amp;date=20200302"
                target="_blank"
              >
                <img
                  alt=""
                  src="https://bank.gov.ua/admin_uploads/article/icon_xml.png"
                  style={{width: "20px", height: "20px"}}
                />
              </a>
            </td>
            <td style={{textAlign: "center"}}>
              <a
                href="https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&amp;date=20200302&amp;json"
                target="_blank"
              >
                <img
                  alt=""
                  src="https://bank.gov.ua/admin_uploads/article/icon_json.png"
                  style={{width: "20px", height: "20px"}}
                />
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <p>
                <em>Примітка</em>: Поточного дня буде відображатися офіційний
                курс гривні до іноземних валют, встановлений НА ЗАВТРА за
                схемою:
              </p>

              <ol>
                <li>
                  До 16:00 – відображається лише офіційний курс гривні до
                  іноземних валют, що встановлюється 1 раз на місяць.
                </li>
                <li>
                  Після 16:00 - офіційний курс, зазначений у п.1, та офіційний
                  курс гривні до іноземних валют, що встановлюється щодня.
                </li>
              </ol>
            </td>
          </tr>
          <tr>
            <td>
              Інструкція до сервісу отримання курсів гривні до іноземних валют з
              першоджерела в момент підписання
            </td>
            <td colSpan="2" rowSpan="1" style={{textAlign: "center"}}>
              <a
                href="https://old.bank.gov.ua/doccatalog/document?id=72819047"
                target="_blank"
              >
                <img
                  src="https://bank.gov.ua/admin_uploads/article/pdf.png"
                  style={{width: "20px", height: "20px"}}
                />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              Довідкове значення курсу гривні до долара США на 12:00, дата
              задається у форматі yyyymmdd, де yyyy - рік, mm - місяць, dd -
              день
            </td>
            <td style={{textAlign: "center"}}>
              <a
                href="https://bank.gov.ua/NBUStatService/v1/statdirectory/dollar_info"
                target="_blank"
              >
                <img
                  alt=""
                  src="https://bank.gov.ua/admin_uploads/article/icon_xml.png"
                  style={{width: "20px", height: "20px"}}
                />
              </a>
            </td>
            <td style={{textAlign: "center"}}>
              <a
                href="https://bank.gov.ua/NBUStatService/v1/statdirectory/dollar_info?json"
                target="_blank"
              >
                <img
                  alt=""
                  src="https://bank.gov.ua/admin_uploads/article/icon_json.png"
                  style={{width: "20px", height: "20px"}}
                />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;
