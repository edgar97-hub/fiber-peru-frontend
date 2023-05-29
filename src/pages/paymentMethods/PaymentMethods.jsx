import { Navbar } from "../../components";
import Header from "../../components/home/navbar/Header";
import Info from "../../components/home/paymentMethods/info/Info";
import WheretoPayServices from "../../components/home/paymentMethods/wheretoPayServices/WheretoPayServices";
import BillingInformation from "../../components/home/paymentMethods/billingInformation/BillingInformation.jsx";
import BankCommission from "../../components/home/paymentMethods/bankCommission/BankCommission";
import Footer from "../../components/home/footer/Footer";

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
