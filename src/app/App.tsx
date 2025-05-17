import { Menu } from "../components/Menu";
import { useMenuData } from "../hooks/useMenuData";

function App() {
  const menuData = useMenuData();

  return (
    <div className='app'>
      <Menu items={menuData} />
    </div>
  );
}

export default App;
