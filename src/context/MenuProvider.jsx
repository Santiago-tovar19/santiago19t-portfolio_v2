import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClickMenu = () => {
    setTimeout(() => {
      setShowMenu(false);
    }, 4000);
  };

  const abrirCorreo = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&to=santiagocentenot@gmail.com",
      "_blank"
    );
  };
  return (
    <MenuContext.Provider
      value={{
        showMenu,
        setShowMenu,
        abrirCorreo,
        handleClickMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider };

export default MenuContext;
