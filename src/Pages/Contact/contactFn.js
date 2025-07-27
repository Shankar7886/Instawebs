import { useNavigate } from "react-router-dom";

const useGoToContactPage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/contact");
  };

  return goToHomePage;
};

export default useGoToContactPage;