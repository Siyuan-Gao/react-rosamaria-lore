import TopNavBar from "../components/TopNavBar";

const Layout = (props) => (
    <div>
        <TopNavBar />
        {props.children}
    </div>
);

export default Layout;
