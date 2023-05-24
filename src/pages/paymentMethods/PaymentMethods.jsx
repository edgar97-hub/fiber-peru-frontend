import { Navbar } from "../../components";
import Header from "../../components/Header";
import Info from "../../components/paymentMethods/info/Info";
import WheretoPayServices from "../../components/paymentMethods/wheretoPayServices/WheretoPayServices";
import BankCommission from "../../components/paymentMethods/bankCommission/BankCommission";

export default function PaymentMethods() {
    return (
        <div class="wrapper">
            <Header />
            <Info />
            <WheretoPayServices />
            <BankCommission />

        |   {/**<WhatsappWidget />*/}
        </div>
    );
}
