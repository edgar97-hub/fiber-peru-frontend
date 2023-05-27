import { Navbar } from "../../components";
import Header from "../../components/navbar/Header";
import Info from "../../components/paymentMethods/info/Info";
import WheretoPayServices from "../../components/paymentMethods/wheretoPayServices/WheretoPayServices";
import BillingInformation from "../../components/paymentMethods/billingInformation/BillingInformation.jsx";
import BankCommission from "../../components/paymentMethods/bankCommission/BankCommission";
import Footer from "../../components/footer/Footer";

export default function PaymentMethods() {
    return (
        <div class="wrapper">
            <Header />
            <Info />
            <WheretoPayServices />
            <BankCommission />
            <BillingInformation />
            <Footer />
        |   {/**<WhatsappWidget />*/}
        </div>
    );
}
