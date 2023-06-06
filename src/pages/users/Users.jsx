import Sidebar from "../../components/account/sidebar/Sidebar";
import UserTable from "./UserTable";

export default function Home() {
  return (
    <div class="wrapper">
      <Sidebar/>
      <UserTable/>
    </div>
  );
}
