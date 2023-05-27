import Header from "../../components/Header";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import SignIn from "../../components/miPortal/signIn/SignIn";

export default function MiPortal() {
    var isAuntentic = false
    function Account(){
        return"is autenticado"
    }
    return (
        <div class="wrapper">
            { isAuntentic ? <Account />:<SignIn />}
        </div>
    );
}
