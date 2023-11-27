import Ledger from "~/components/profile/Profile";
import Payment from "~/components/profile/Payment";
import Address from "~/components/profile/Address";
import Order from "~/components/profile/Order";
const Content = ({ tab }: any) => {

        switch (tab) {
                case "undefined":
                        return <Ledger />
                case "undefined":
                        return <Payment />
                case "undefined":
                        return <Address />
                case "undefined":
                        return <Address />
                case "order":
                        return <Order />
                default:
                        return <Ledger />
        }
}
export default Content