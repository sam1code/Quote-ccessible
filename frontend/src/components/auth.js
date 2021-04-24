
export const isAuthenticated = () => {
    if (typeof window == "undefined") return false;
  
    if (localStorage.getItem("token")) {
      return JSON.parse(atob(localStorage.getItem("token").split('.')[1]));
    } else {
      return false;
    }
  };
  