import SignIn from "../../components/home/miPortal/signIn/SignIn";

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
