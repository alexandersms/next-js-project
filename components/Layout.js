import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #ddd",
};

function Layout(props) {
  return (
    <div style={layoutStyle} className="container">
      <Header {...props} />
      {props.children}
    </div>
  );
}

export default Layout;
